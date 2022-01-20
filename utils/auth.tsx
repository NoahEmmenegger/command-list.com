import React, { useState, useEffect, useContext, createContext } from "react";
import "firebase/auth";

import { firebase } from "./firebase/clientApp";
import { useRouter } from "next/router";
import { Registration, SignIn } from "../types/auth";


type AuthType = {
    userId: string | null,
    user: firebase.User | null,
    signin: (u: SignIn) => Promise<firebase.User | null>,
    signinWithProvider: (providerName: any) => Promise<firebase.User | null>,
    signup: (r: Registration) => Promise<firebase.User | null>,
    signout: () => Promise<void>,
    sendPasswordResetEmail: (email: any) => Promise<boolean>,
}

const authContext = createContext<AuthType>(useProvideAuth());

type ProvideAuth = {
    children: React.ReactNode
}

export function ProvideAuth({ children }: ProvideAuth) {
    const auth: AuthType = useProvideAuth();
    return <authContext.Provider value={auth}> {children} </authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth(): AuthType {
    const [user, setUser] = useState<firebase.User | null>(null);

    const router = useRouter();

    const signin = ({ email, password }: SignIn) => {
        return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signinWithProvider = (providerName: string) => {
        let provider = null;
        switch (providerName) {
            case "github":
                provider = new firebase.auth.GithubAuthProvider();
                break;

            default:
                provider = new firebase.auth.GoogleAuthProvider();
        }
        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((response) => {
                setUser(response.user);
                router.push("/dashboard");
                return response.user;
            });
    };

    const signup = ({ email, password }: Registration) => {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                setUser(response.user);
                return response.user;
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => {
                setUser(null);
                router.push("/");
            });
    };

    const sendPasswordResetEmail = (email: string) => {
        return firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                return true;
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        userId: user && user.uid,
        user: user,
        signin,
        signinWithProvider,
        signup,
        signout,
        sendPasswordResetEmail,
    };
}

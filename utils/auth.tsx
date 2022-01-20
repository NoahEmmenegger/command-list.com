import React, { useState, useEffect, useContext, createContext } from "react";
import "firebase/auth";

import { firebase } from "./firebase/clientApp";
import { useRouter } from "next/router";


type AuthType = {
    userId: string
    user: firebase.User,
    signin: (email: any, password: any) => Promise<firebase.User>,
    signinWithProvider: (providerName: any) => Promise<firebase.User>,
    signup: (email: any, password: any) => Promise<firebase.User>,
    signout: () => Promise<void>,
    sendPasswordResetEmail: (email: any) => Promise<boolean>,
}

const authContext = createContext<AuthType | null>(null);

export function ProvideAuth({ children }) {
    const auth: AuthType = useProvideAuth();
    return <authContext.Provider value={auth}> {children} </authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth(): AuthType {
    const [user, setUser] = useState<firebase.User | null>(null);

    const router = useRouter();

    const signin = (email: string, password: string) => {
        console.log(email, password);
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

    const signup = (email: string, password: string) => {
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

    const sendPasswordResetEmail = (email) => {
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

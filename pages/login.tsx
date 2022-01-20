import { useAuth } from "../utils/auth";
import { useRouter } from "next/router";
import Auth from "../components/Auth";
import { useState } from "react";
import { SignIn } from "../types/auth";

export default function Home() {
    const auth = useAuth();
    const router = useRouter();

    const [error, setError] = useState("");

    const signIn = (signInObj: SignIn) => {
        auth.signin(signInObj)
            .then(() => {
                router.push("/dashboard");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return <Auth title="Welcome back!" onClick={signIn} error={error} />;
}

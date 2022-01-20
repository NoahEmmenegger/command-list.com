import { useAuth } from "../utils/auth";
import { useRouter } from "next/router";
import Auth from "../components/Auth";
import { useState } from "react";
import { Registration } from "../types/auth";

export default function Home() {
    const auth = useAuth();
    const router = useRouter();

    const [error, setError] = useState("");

    const signUp = (registration: Registration) => {
        auth.signup(registration)
            .then((user) => {
                router.push("/dashboard");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return <Auth title="Create an account" onClick={signUp} error={error} />;
}

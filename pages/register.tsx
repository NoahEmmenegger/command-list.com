import { useAuth } from "../utils/auth";
import { useRouter } from "next/router";
import Auth from "../components/Auth";
import { useState } from "react";

export default function Home() {
    const auth = useAuth();
    const router = useRouter();

    const [error, setError] = useState(null);

    const signUp = ({ email, password }) => {
        auth.signup(email, password)
            .then((user) => {
                router.push("/dashboard");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return <Auth title="Create an account" onclick={signUp} error={error} />;
}

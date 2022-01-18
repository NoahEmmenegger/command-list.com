import { useAuth } from "../utils/auth";
import { useRouter } from "next/router";
import Auth from "../components/Auth";
import { useState } from "react";

export default function Home() {
    const auth = useAuth();
    const router = useRouter();

    const [error, setError] = useState(null);

    const signIn = ({ email, password }) => {
        auth.signin(email, password)
            .then(() => {
                router.push("/dashboard");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return <Auth title="Welcome back!" onclick={signIn} error={error} />;
}

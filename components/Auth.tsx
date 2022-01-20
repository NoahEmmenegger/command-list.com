import { useState } from "react";
import Image from "next/image";
import { useAuth } from "../utils/auth";
import { Registration } from "../types/auth"

type AuthProps = {
    onClick: (n: Registration) => void,
    title: string,
    error: string
}

export default function Auth({ onClick, title, error }: AuthProps) {
    const auth = useAuth();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState("");
    const [providerError, setProviderError] = useState("");

    return (
        <div className="flex flex-col px-5 max-w-2xl mx-auto pt-10">
            <h1>{title}</h1>
            <div className="my-5">
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <div className="my-5">
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>

            <p className="text-red-600">{error}</p>

            <input
                className="mt-10 btn"
                type="submit"
                onClick={() => {
                    onClick({ email, password });
                }}
            />
            <div className="mt-20">
                <p className="text-red-600">{providerError}</p>
                <button
                    className="provider"
                    onClick={() => auth.signinWithProvider("")}
                >
                    <div className="p-4">
                        <div className="h-7 w-7 relative p-3">
                            <Image
                                alt="google logo"
                                src="/icons/oAuth/google.svg"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <span className="my-auto">Sign in with Google</span>
                </button>
                <button
                    className="provider"
                    onClick={() =>
                        auth.signinWithProvider("github").catch((e) => {
                            setProviderError(e.message);
                        })
                    }
                >
                    <div className="p-4">
                        <div className="h-7 w-7 relative p-3">
                            <Image
                                alt="github logo"
                                src="/icons/oAuth/github.svg"
                                layout="fill"
                            />
                        </div>
                    </div>
                    <span className="my-auto">Sign in with GitHub</span>
                </button>
            </div>
        </div>
    );
}

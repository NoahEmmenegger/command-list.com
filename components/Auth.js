import { useState } from "react";
import Image from "next/image";

export default function Auth({ onclick, title, error }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                    onclick({ email, password });
                }}
            />
            <div className="mt-20">
                <button className="provider">
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
                <button className="provider">
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

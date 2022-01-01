import { useState } from "react";

export default function Auth({ onclick, title, error }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col px-5 max-w-2xl mx-auto">
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
        </div>
    );
}

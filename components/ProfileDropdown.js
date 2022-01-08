import { useState } from "react";
import { useAuth } from "../utils/auth";
import Link from "next/link";

export default function ProfileDropdown() {
    const auth = useAuth();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative text-white font-bold" id="profileDropdown">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`px-10 p-4 rounded-full font-bold bg-primary uppercase ${
                    isOpen ? "rounded-b-none rounded-t-lg" : ""
                }`}
            >
                {auth.user.email}
            </button>
            {isOpen ? (
                <div className="absolute bg-primary w-full p-10 z-20 rounded-b-lg">
                    <ul>
                        <li className="m-auto py-3 text-center">
                            <Link href="/dashboard">Dashboard</Link>
                        </li>
                        <li className="m-auto py-3 text-center">
                            <button
                                onClick={auth.signout}
                                className="font-bold"
                            >
                                Sign Out
                            </button>
                        </li>
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

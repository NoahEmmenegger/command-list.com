import { useAuth } from "../../utils/auth";
import Link from "next/link";
import Image from "next/image";
import StatusBar from "../general/StatusBar";
import React from "react";

export const Context = React.createContext();

export default function DashboardLayout({ children, title, status }) {
    const [context, setContext] = React.useState({});
    const auth = useAuth();

    return (
        <Context.Provider value={[context, setContext]}>
            <div className="flex h-screen">
                <div className="lg:w-80">
                    <div className="h-screen bg-darkgray p-2 text-white lg:p-10">
                        <h1 className="font-bold text-primary filter drop-shadow-lg hidden lg:block">
                            {title}
                        </h1>
                        <div className="h-full flex">
                            <ul className="my-auto">
                                {context.menuItems &&
                                    context.menuItems.map((item) => {
                                        return (
                                            <li key={item.title}>
                                                <Link href={item.href}>
                                                    <a className="flex container my-5">
                                                        <div className="relative w-50 h-50">
                                                            <Image
                                                                alt={item.title}
                                                                src={item.image}
                                                                height={40}
                                                                width={40}
                                                            />
                                                        </div>
                                                        <p className="my-auto pl-6 hidden lg:block">
                                                            {item.title}
                                                        </p>
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full max-h-full">
                    <div className="p-10">
                        <div className="h-20 border-b w-full mx-auto align-middle">
                            <ul className="flex float-right align-middle">
                                {auth.user ? (
                                    <button
                                        onClick={auth.signout}
                                        className="px-10 btn"
                                    >
                                        {auth.user.email}
                                    </button>
                                ) : (
                                    <li className="px-10 btn">
                                        <Link href="/login">Login</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="overflow-y-auto h-3/4">
                        <div className="px-10 flex flex-wrap lg:px-20">
                            {children}
                        </div>
                    </div>
                </div>
                <StatusBar status={status} />
            </div>
        </Context.Provider>
    );
}

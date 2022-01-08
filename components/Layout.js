import { useAuth } from "../utils/auth";
import Footer from "./Footer";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProfileDropdown from "./ProfileDropdown";

export default function Layout({ children }) {
    const auth = useAuth();
    const router = useRouter();

    let [isHamburgerShow, setIsHamburgerShow] = useState(false);

    useEffect(() => {
        setIsHamburgerShow(false);
    }, [router.route]);

    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <nav className="flex justify-between mx-auto p-5">
                    <Link href="/">
                        <a>
                            <div className="relative h-10 w-40">
                                <Image
                                    alt="logo"
                                    src="/logo.png"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </a>
                    </Link>
                    <div
                        className="relative h-10 w-10 cursor-pointer lg:hidden"
                        onClick={() => setIsHamburgerShow(true)}
                    >
                        <Image
                            src="/icons/menu_hamburger.svg"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <ul className="float-right align-middle hidden lg:flex">
                        {auth.user ? (
                            <>
                                <ProfileDropdown />
                            </>
                        ) : (
                            <>
                                <li className="px-10 m-auto">
                                    <Link href="/register">Register</Link>
                                </li>
                                <Link href="/login">
                                    <a className="px-10 btn">Login</a>
                                </Link>
                            </>
                        )}
                    </ul>
                </nav>
                <div
                    className="bg-white h-full w-screen fixed z-50 top-0 p-5 text-5xl flex flex-col"
                    style={{ display: isHamburgerShow ? "" : "none" }}
                >
                    <div
                        className="relative h-10 w-10 m-auto my-0 cursor-pointer mr-5"
                        onClick={() => setIsHamburgerShow(false)}
                    >
                        <Image
                            src="/icons/close.svg"
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <ul className="flex flex-col m-auto">
                        {auth.user ? (
                            <li className="m-auto py-3">
                                <Link href="/dashboard">Dashboard</Link>
                            </li>
                        ) : (
                            <li className="m-auto py-3">
                                <Link href="/register">Register</Link>
                            </li>
                        )}
                    </ul>
                    {auth.user ? (
                        <button
                            onClick={auth.signout}
                            className="px-10 btn flex-grow-0 m-auto"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <Link href="/login">
                            <a className="px-10 btn">Login</a>
                        </Link>
                    )}
                </div>
            </header>
            <main className="my-auto h-full">{children}</main>
            <Footer />
        </div>
    );
}

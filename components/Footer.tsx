import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <footer className="bg-darkgray text-white">
                <div className="flex p-20">
                    <div className="w-1/2">
                        <h1>Command-List.com</h1>
                        <h2 className="text-lightgray">
                            Want to create your own command list? - It is
                            completely free!
                        </h2>
                    </div>
                    <div>
                        <div className="flex text-lightgray">
                            <div className="flex flex-col p-5">
                                <Link href="/">Home</Link>
                                <Link href="/dashboard">Dashboard</Link>
                            </div>
                            <div className="flex flex-col p-5">
                                <Link href="/">Terms</Link>
                                <Link href="mailto:">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex text-xs flex-row justify-between text-lightgray">
                    <p>© CommandList - 2021</p>
                    <p>code with ♥ by Lythus</p>
                </div>
            </footer>
        </>
    );
}

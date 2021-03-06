import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "../utils/auth";

export default function Home() {
    const auth = useAuth();

    return (
        <div>
            <Head>
                <title>Command List Creator | Command-List.com</title>
                <meta
                    name="description"
                    content="Create a command list for your project"
                />
            </Head>

            <div className="h-screen p-5">
                <div className="h-5/6 flex flex-col-reverse lg:flex-row">
                    <div className="align-middle m-auto text-center">
                        <h1 className="text-6xl font-bold m-auto">
                            Create command pages for free
                        </h1>
                        {auth.user ? (
                            <Link href="/dashboard">
                                <a
                                    className="btn m-auto mt-10 text-lg px-8"
                                    style={{ width: "fit-content" }}
                                >
                                    Go to dashboard
                                </a>
                            </Link>
                        ) : (
                            <Link href="/login">
                                <a
                                    className="btn m-auto mt-10 text-lg px-8"
                                    style={{ width: "fit-content" }}
                                >
                                    Start now
                                </a>
                            </Link>
                        )}
                    </div>
                    <div className="relative m-auto h-full w-full">
                        <Image
                            alt=""
                            src="/dashboard_preview.png"
                            layout="fill"
                            objectFit="contain"
                            property="true"
                        />
                    </div>
                </div>
                <div className="h-10 lg:mt-16">
                    <div className="flex h-10 mt-10 max-w-6xl m-auto">
                        <div className="w-1/4 text-center relative">
                            <Image
                                className="m-auto filter grayscale"
                                alt=""
                                src="/logos/discord.svg"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="w-1/4 text-center relative">
                            <Image
                                className="m-auto filter grayscale"
                                alt=""
                                src="/logos/github.svg"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="w-1/4 text-center relative">
                            <Image
                                className="m-auto filter grayscale"
                                alt=""
                                src="/logos/slack.svg"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                        <div className="w-1/4 text-center relative">
                            <Image
                                className="m-auto filter grayscale"
                                alt=""
                                src="/logos/telegram.svg"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div className="h-16 relative lg:h-44">
                        <Image src="/triangle.svg" layout="fill" alt="" />
                    </div>
                    <div className="bg-primary text-white justify-center flex p-10">
                        <div className="w-screen h-60 relative filter drop-shadow-xxl lg:h-screen">
                            <Image
                                className="m-auto"
                                alt=""
                                src="/dashboard_preview.png"
                                layout="fill"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

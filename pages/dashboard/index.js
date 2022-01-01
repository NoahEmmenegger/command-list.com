import { useAuth } from "../../utils/auth";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import DashboardLayout, { Context } from "../../components/dashboard/Layout";
import { getPagesOfOwnerId } from "../../utils/pages";
import Loading from "../../components/Loading";
import Custom404 from "../404";
import NewPageModal from "../../components/dashboard/NewPageModal";

export default function Dashboard() {
    const auth = useAuth();
    const [context, setContext] = useContext(Context);

    const [pages, setPages] = useState([]);
    const [isModalShown, setIsModalShown] = useState(false);

    useEffect(() => {
        const getPages = async () => {
            setPages(await getPagesOfOwnerId(auth.userId));
        };

        getPages();
    }, [auth]);

    useEffect(() => {
        setContext({ title: "Dashboard" });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (auth.user === null) {
        return <Loading />;
    }

    if (auth.user === false) {
        return <Custom404 />;
    }

    return (
        <>
            {pages.map((page) => {
                return (
                    <Link
                        href={"/dashboard/" + page.title.toLowerCase()}
                        key={page.title}
                    >
                        <a className="w-1/4 border m-5 h-24 rounded-2xl p-5">
                            {page.title}
                        </a>
                    </Link>
                );
            })}
            <div
                onClick={() => setIsModalShown(true)}
                className="w-1/4 border m-5 h-24 rounded-2xl p-5 relative text-center flex align-middle cursor-pointer"
            >
                <p className="m-auto">Create New</p>
                <div className="m-auto">
                    <Image
                        alt=""
                        src="/icons/plus.svg"
                        height={50}
                        width={50}
                    />
                </div>
            </div>
            <NewPageModal
                isShown={isModalShown}
                ownerUid={auth.userId}
                onClose={() => setIsModalShown(false)}
                onNewPage={(newPage) => setPages([...pages, newPage])}
            />
        </>
    );
}

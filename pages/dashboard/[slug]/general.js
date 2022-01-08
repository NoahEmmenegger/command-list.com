import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../../../components/dashboard/Layout";
import { useAuth } from "../../../utils/auth";
import { getPageBySlug, updatePage } from "../../../utils/pages";
import Loading from "../../../components/Loading";
import Custom404 from "../../404";
import { Status } from "../../../components/general/StatusBar";

export default function General() {
    const router = useRouter();
    const auth = useAuth();

    const [context, setContext] = useContext(Context);
    const [page, setPage] = useState(null);

    const { slug } = router.query;
    useEffect(() => {
        const initPage = async () => {
            const fetchPage = await getPageBySlug(slug);
            const menuItems = [
                {
                    image: "/icons/edit.svg",
                    title: "Edit",
                    href: `/dashboard/${slug}`,
                },
                {
                    image: "/icons/gear.svg",
                    title: "General",
                    href: `/dashboard/${slug}/general`,
                },
                {
                    image: "/icons/analytics.svg",
                    title: "Analytics",
                    href: `/dashboard/${slug}/analytics`,
                },
                {
                    image: "/icons/back.svg",
                    title: "Back to Dashboard",
                    href: `/dashboard`,
                },
            ];
            setContext({ ...context, menuItems, title: fetchPage.title });
            setPage(fetchPage);
        };
        initPage();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug]);

    if (!page || Object.keys(page).length === 0) {
        return <Loading />;
    }

    if (!auth.userId || page.ownerUid !== auth.userId) {
        return <Custom404 />;
    }

    return (
        <div className="m-auto w-full max-w-6xl">
            <div className="flex content-between w-full">
                <h1>General Settings</h1>
                <button
                    className="btn ml-auto"
                    onClick={() => {
                        setContext({ ...context, status: Status.LOADING });
                        updatePage(page);
                        setContext({ ...context, status: Status.SUCCESSFULLY });
                    }}
                >
                    Save
                </button>
            </div>
            <p>Title</p>
            <input
                className="bg-gray-100 cursor-not-allowed"
                type="text"
                value={page.title}
                readOnly={true}
            />
            <p>Description</p>
            <input
                type="text"
                value={page.description}
                onChange={(e) =>
                    setPage({ ...page, description: e.target.value })
                }
            />
            <p>Keywords</p>
            <input
                type="text"
                value={page.keywords}
                onChange={(e) => setPage({ ...page, keywords: e.target.value })}
                placeholder="eg. gaming, bot"
            />
            <p>Theme</p>
            <div className="w-1/2 m-auto">
                <div>
                    <input
                        type="radio"
                        value="0"
                        name="theme"
                        checked={page.theme === "0" || page.theme === undefined}
                        onChange={(e) =>
                            setPage({ ...page, theme: e.target.value })
                        }
                    />
                    <span>default</span>
                </div>
                <div>
                    <input
                        type="radio"
                        value="1"
                        name="theme"
                        checked={page.theme === "1"}
                        onChange={(e) =>
                            setPage({ ...page, theme: e.target.value })
                        }
                    />
                    <span>light</span>
                </div>
                <div>
                    <input
                        type="radio"
                        value="2"
                        name="theme"
                        checked={page.theme === "2"}
                        onChange={(e) =>
                            setPage({ ...page, theme: e.target.value })
                        }
                    />
                    <span>bluish</span>
                </div>
            </div>
        </div>
    );
}

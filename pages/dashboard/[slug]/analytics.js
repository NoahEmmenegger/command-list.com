import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../../../components/dashboard/Layout";
import { getPageBySlug } from "../../../utils/pages";

export default function Analytics() {
    const router = useRouter();
    const [context, setContext] = useContext(Context);
    const [page, setPage] = useState(null);

    const { slug } = router.query;
    useEffect(() => {
        const initPage = async () => {
            console.log("init");
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
    return <h1>Comming soon...</h1>;
}

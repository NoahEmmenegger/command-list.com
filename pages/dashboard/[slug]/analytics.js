import React, { useEffect } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../../../components/dashboard/Layout";

export default function Analytics() {
    const router = useRouter();
    const [context, setContext] = useContext(Context);

    const { slug } = router.query;
    console.log(slug);
    useEffect(() => {
        const menuItems = [
            {
                image: "/icons/edit.svg",
                title: "Edit",
                href: `/dashboard/${slug}`,
            },
            {
                image: "/icons/edit.svg",
                title: "Analytics",
                href: `/dashboard/${slug}/analytics`,
            },
        ];
        setContext({ menuItems });
    }, [slug, setContext]);
    console.log(context);
    return <h1>Comming soon...</h1>;
}

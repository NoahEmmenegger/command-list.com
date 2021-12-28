import React, { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../../components/dashboard/Layout";

const menuItems = [
    {
        image: "/icons/edit.svg",
        title: "Edit",
        href: `/`,
    },
    {
        image: "/icons/edit.svg",
        title: "Analytics",
        href: "/",
    },
];

export default function Analytics() {
    const [context, setContext] = useContext(Context);
    useEffect(() => {
        setContext({ menuItems });
    }, [setContext]);
    console.log(context);
    return <h1>Comming soon...</h1>;
}

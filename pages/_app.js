import "../style/index.css";
import { ProvideAuth } from "../utils/auth";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import DashboardLayout, { Context } from "../components/dashboard/Layout";
import React from "react";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    if (router.pathname === "/page/[slug]") {
        return (
            <div>
                <Component {...pageProps} />
            </div>
        );
    }

    if (router.pathname.startsWith("/dashboard")) {
        return (
            <ProvideAuth>
                <DashboardLayout>
                    <Component {...pageProps} />
                </DashboardLayout>
            </ProvideAuth>
        );
    }

    return (
        <ProvideAuth>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ProvideAuth>
    );
}

export default MyApp;

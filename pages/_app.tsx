import "../style/index.css";
import { ProvideAuth } from "../utils/auth";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import DashboardLayout, { Context } from "../components/dashboard/Layout";
import React, { useEffect } from "react";
import Head from "next/head";
import * as ga from "../lib/ga";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            ga.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

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
                    <Head>
                        <title>Dashboard</title>
                        <meta
                            name="description"
                            content="This is your Dashboard"
                        />
                    </Head>
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

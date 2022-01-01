import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta
                        name="keywords"
                        content="command, commands, developer, discord, create page"
                    />
                    <meta name="robots" content="index" />
                    <meta name="robots" content="follow" />

                    {/* Google */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-WQVBY7ZVJ3`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-WQVBY7ZVJ3', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

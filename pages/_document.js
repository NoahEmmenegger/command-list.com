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

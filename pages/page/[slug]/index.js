import Command from "../../../components/page/Command";
import Section from "../../../components/page/Section";
import { getPageBySlug, getPageSlugs } from "../../../utils/pages";
import Custom404 from "../../404";
import Head from "next/head";
import Question from "../../../components/page/Question";

export default function Page({ page }) {
    if (page === undefined || Object.keys(page).length === 0) {
        return <Custom404 />;
    }

    page.template = page.template ? page.template : "default";

    return (
        <div className="bg-darkgray min-h-screen">
            <Head>
                <title>{page.title} | Commands</title>
                {getTemplateImport(page.template)}
            </Head>
            <h1 className="text-5xl text-center font-bold text-white pt-32">
                {page.title}
            </h1>
            {page.sections.map((section, index) => {
                return (
                    <Section
                        key={index}
                        template={page.template}
                        section={section}
                    >
                        {section.commands.map((cmd, key) => {
                            return (
                                <Command
                                    key={key}
                                    template={page.template}
                                    command={cmd}
                                />
                            );
                        })}
                    </Section>
                );
            })}
            <Question />
        </div>
    );
}

const getTemplateImport = (template) => {
    switch (template) {
        case "light":
            return (
                <>
                    {/* eslint-disable-next-line @next/next/no-css-tags */}
                    <link
                        type="text/css"
                        rel="stylesheet"
                        href="/style/page/default.css"
                    />
                </>
            );

        default:
            return (
                <>
                    {/* eslint-disable-next-line @next/next/no-css-tags */}
                    <link
                        type="text/css"
                        rel="stylesheet"
                        href="/style/page/default.css"
                    />
                </>
            );
    }
};

export async function getServerSideProps({ params }) {
    let page = await getPageBySlug(params.slug);
    return {
        props: {
            page,
        },
    };
}

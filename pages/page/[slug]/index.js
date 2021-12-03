import Command from '../../../components/page/Command'
import Section from '../../../components/page/Section'
import { getPageBySlug, getPageSlugs } from '../../../utils/pages'
import Custom404 from '../../404'
import Head from 'next/head'

export default function Page({ page }) {

    if(page === undefined || Object.keys(page).length === 0) {
        return <Custom404/>
    }

    page.template = page.template?page.template:'default'

    switch (page.template) {
        case 'light':
            return lightTemplate(page)

        default:
            return defaultTemplate(page)
    }
}

export function defaultTemplate(page) {
    return(
        <div className="bg-darkgray min-h-screen">
            <Head>
                <link type="text/css" rel="stylesheet" href="/style/page/default.css" />
            </Head>
            <h1 className="text-5xl text-center font-bold text-white">{page.title}</h1>
            {page.sections.map(section => {
                return (
                    <Section key={section.id} template={page.template} section={section}>
                        {section.commands.map(cmd => {
                            return (
                                <Command key={cmd.id} template={page.template} command={cmd}/>)
                        })}
                    </Section>
                )
            })}
        </div>
    )
}

export function lightTemplate(page) {
    return(
        <div>
            todo: implement
        </div>
    )
}

export async function getServerSideProps({ params }) {
    let page = await getPageBySlug(params.slug)
    return {
        props: {
            page
        }
    }
}
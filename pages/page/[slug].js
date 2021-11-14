import Command from '../../component/page/Command'
import Section from '../../component/Page/Section'
import { getPageBySlug, getPageSlugs } from '../../utils/pages'
import Custom404 from '../404'

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
        <div>
            {page.title}
            {page.sections.map(section => {
                return (
                    <Section template={page.template} key={section.uid} title={section.title}>
                        {section.commands.map(cmd => {
                            return (
                                <Command key={cmd.title} template={page.template} title={cmd.title} description={cmd.description}/>)
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

export async function getStaticProps({ params }) {
    let page = await getPageBySlug(params.slug)
    return {
        props: {
            page
        }
    }
}

export async function getStaticPaths() {
    const documents = await getPageSlugs()
    return {
      paths: documents.map(doc => `/page/${doc}`),
      fallback: true,
    }
  }
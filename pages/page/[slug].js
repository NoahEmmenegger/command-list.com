import { useRouter } from 'next/router'
import Loading from '../../component/Loading'
import { getPageBySlug, getPageSlugs } from '../../utils/pages'
import Custom404 from '../404'

export default function Page({ page }) {

    if(page === undefined || Object.keys(page).length === 0) {
        return <Custom404/>
    }

    return (
        <div>
            name {page.title}
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
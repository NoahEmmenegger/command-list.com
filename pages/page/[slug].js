import { useRouter } from 'next/router'
import Loading from '../../component/Loading'
import { getPageBySlug } from '../../utils/pages'
import Custom404 from '../404'

export default function Page({ page }) {

    console.log(page)

    if(page === undefined) {
        return <Loading/>
    }

    if(Object.keys(page).length === 0) {
        return <Custom404/>
    }

    return (
        <div>
            name {page.title}
        </div>
    )
}

export async function getStaticProps({ params, previewData }) {
    let page = await getPageBySlug(params.slug)
    return {
        props: {
            page
        }
    }
}

export async function getStaticPaths() {
    const documents = ['epicfreegames', 'test']
    return {
      paths: documents.map(doc => `/page/${doc}`),
      fallback: true,
    }
  }
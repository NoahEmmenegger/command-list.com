import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DashboardLayout from '../../../component/dashboard/Layout'
import Loading from '../../../component/Loading'
import { useAuth } from '../../../utils/auth'
import { getPageBySlug } from '../../../utils/pages'
import Custom404 from '../../404'

export default function Edit() {
    const router = useRouter()
    const auth = useAuth()

    const { slug } = router.query

    const [page, setPage] = useState()

    useEffect(() => {
        const initPage = async () => {
            setPage(await getPageBySlug(slug))
        }
        initPage()
    }, [slug])

    if (!page || Object.keys(page).length === 0) {
        return <DashboardLayout>
            <Loading />
        </DashboardLayout>
    }

    if(!auth.userId || page.ownerUid !== auth.userId) {
        return <Custom404 />
    }

    const menuItems = [
        {
            image: '/icons/edit.svg',
            title: 'Edit',
            href: ''
        },
        {
            image: '/icons/edit.svg',
            title: 'Analythics',
            href: ''
        },
    ]

    return (
        <DashboardLayout title={page.title} menuItems={menuItems}>
            <div>
                <button className="btn">+ Add Section</button>
            </div>
        </DashboardLayout>
    )
}
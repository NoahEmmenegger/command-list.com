import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/dashboard/Layout'
import EditSection from '../../../components/dashboard/Section'
import Loading from '../../../components/Loading'
import { useAuth } from '../../../utils/auth'
import { getPageBySlug } from '../../../utils/pages'
import Custom404 from '../../404'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Edit() {
    const router = useRouter()
    const auth = useAuth()

    const { slug } = router.query

    const [page, setPage] = useState(null)

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

    if (!auth.userId || page.ownerUid !== auth.userId) {
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
            <div className="w-full">
                <DragDropContext onDragEnd={event => console.log(event)}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {page.sections.map((section, index) => (
                                    <EditSection key={section.id} section={section} index={index} />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </DashboardLayout>
    )
}
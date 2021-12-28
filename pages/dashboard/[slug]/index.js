import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EditSection from "../../../components/dashboard/Section";
import Loading from "../../../components/Loading";
import { useAuth } from "../../../utils/auth";
import { getPageBySlug, updatePage } from "../../../utils/pages";
import Custom404 from "../../404";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Link from "next/link";
import Image from "next/image";
import NewSectionModal from "../../../components/dashboard/NewSectionModal";
import { Status } from "../../../components/general/StatusBar";
import { useContext } from "react";
import { Context } from "../../../components/dashboard/Layout";

const menuItems = [
    {
        image: "/icons/edit.svg",
        title: "Edit",
        href: "",
    },
    {
        image: "/icons/edit.svg",
        title: "Analytics",
        href: `analytics`,
    },
];

export default function Edit() {
    const router = useRouter();
    const auth = useAuth();
    const [context, setContext] = useContext(Context);

    const { slug } = router.query;

    const [page, setPage] = useState(null);
    const [isAddSectionShown, setIsAddSectionShown] = useState(false);
    const [status, setStatus] = useState(Status.HIDDEN);

    useEffect(() => {
        setContext({ menuItems });
    }, [setContext]);

    useEffect(() => {
        const initPage = async () => {
            setPage(await getPageBySlug(slug));
        };
        initPage();
    }, [slug]);

    useEffect(() => {
        if (page && Object.keys(page).length !== 0) {
            setStatus(Status.LOADING);
            console.log("db update", page.sections);
            updatePage(page).then(() => {
                setStatus(Status.SUCCESSFULLY);
            });
        }
    }, [page]);

    if (!page || Object.keys(page).length === 0) {
        return <Loading />;
    }

    if (!auth.userId || page.ownerUid !== auth.userId) {
        return <Custom404 />;
    }

    const reorder = (list, startIndex, endIndex) => {
        console.log(startIndex, endIndex);
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }

        const sections = reorder(
            page.sections,
            result.source.index,
            result.destination.index
        );

        console.log(sections);

        setPage({ ...page, sections: sections });
    };

    return (
        <>
            <Link href={`/page/${page.title.toLowerCase()}`}>
                <a target="_blank" className="btn flex m-auto mr-0 mb-4">
                    <p className="m-auto mr-3">view</p>
                    <Image
                        alt=""
                        src="/icons/link.svg"
                        height="30"
                        width="30"
                    />
                </a>
            </Link>
            <div className="w-full">
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={
                                    snapshot.isDraggingOver
                                        ? "border-2 rounded-3xl"
                                        : "border-2 border-white"
                                }
                            >
                                {page.sections.map((section, index) => (
                                    <EditSection
                                        key={index}
                                        section={section}
                                        index={index}
                                        onUpdateSection={(newSection) => {
                                            const newPage = { ...page };
                                            if (newSection) {
                                                newPage.sections[index] =
                                                    newSection;
                                            } else {
                                                newPage.sections.splice(
                                                    index,
                                                    1
                                                );
                                            }
                                            setPage(newPage);
                                        }}
                                    />
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
            <div>
                <button
                    className="btn flex m-auto mr-0 mb-4"
                    onClick={() => setIsAddSectionShown(true)}
                >
                    <p className="m-auto mr-3">Add section</p>
                    <Image
                        alt=""
                        src="/icons/plus.svg"
                        height="30"
                        width="30"
                    />
                </button>
            </div>
            <NewSectionModal
                isShown={isAddSectionShown}
                onClose={() => setIsAddSectionShown(false)}
                pageUid={page.title.toLowerCase()}
                onNewSection={(newSection) =>
                    setPage({
                        ...page,
                        sections: [...page.sections, newSection],
                    })
                }
            />
        </>
    );
}

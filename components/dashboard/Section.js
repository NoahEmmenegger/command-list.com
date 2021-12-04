import EditCommand from "./Command";
import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import Image from "next/image";
import { deleteSection, update } from "../../utils/section";

export default function EditSection({
    section,
    index,
    pageUid,
    onSectionDelete,
}) {
    const [isHidden, setIsHidden] = useState(true);
    const [isHover, setIsHover] = useState(false);

    const [newSection, setNewSection] = useState(section);

    if (!newSection) {
        return null;
    }

    return (
        <Draggable
            key={newSection.id}
            draggableId={newSection.id.toString()}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="mb-10 relative"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    <div
                        onClick={() => {
                            deleteSection(pageUid, section.id).then(
                                (sectionUid) => {
                                    onSectionDelete(sectionUid);
                                }
                            );
                        }}
                        className={
                            "-top-3 -left-3 cursor-pointer" +
                            (isHover ? " absolute" : " hidden")
                        }
                    >
                        <Image
                            alt=""
                            src="/icons/delete.svg"
                            height="40"
                            width="40"
                        />
                    </div>
                    <div className="card p-10 bg-gray-50 hover:bg-gray-100">
                        <div className="flex">
                            <div className="w-full align-middle flex">
                                <input
                                    type="text"
                                    className="w-full text-2xl m-auto"
                                    value={newSection.title}
                                    onChange={(event) =>
                                        setNewSection({
                                            ...newSection,
                                            title: event.target.value,
                                        })
                                    }
                                    onBlur={() => update(newSection)}
                                />
                            </div>
                            <div className="ml-5">
                                <button
                                    className={
                                        "transform transition duration-200"
                                    }
                                    style={{
                                        "--tw-rotate": isHidden
                                            ? "180deg"
                                            : "0deg",
                                    }}
                                    onClick={() => setIsHidden(!isHidden)}
                                >
                                    <Image
                                        alt=""
                                        src="/icons/arrow.svg"
                                        height="50"
                                        width="50"
                                    />
                                </button>
                            </div>
                        </div>
                        {!isHidden
                            ? newSection.commands.map((command) => {
                                  return (
                                      <EditCommand
                                          key={command.id}
                                          command={command}
                                      />
                                  );
                              })
                            : null}
                    </div>
                </div>
            )}
        </Draggable>
    );
}

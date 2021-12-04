import EditCommand from "./Command";
import { Draggable } from "react-beautiful-dnd";
import { useState, useEffect } from "react";
import Image from "next/image";
import NewCommandModal from "./NewCommandModal";

export default function EditSection({ section, index, onUpdateSection }) {
    const [isHidden, setIsHidden] = useState(true);
    const [isHover, setIsHover] = useState(false);
    const [newSection, setNewSection] = useState(section);
    const [isNewCommandShown, setIsNewCommandShown] = useState(false);

    useEffect(() => {
        console.log("ja");
        if (newSection && Object.keys(newSection).length !== 0) {
            console.log(newSection);
            onUpdateSection(newSection);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newSection]);

    if (!newSection) {
        return null;
    }

    return (
        <Draggable key={index} draggableId={index.toString()} index={index}>
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
                            onUpdateSection(null);
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
                        {!isHidden ? (
                            <div>
                                {newSection.commands.map((command) => {
                                    return (
                                        <EditCommand
                                            key={command.id}
                                            command={command}
                                        />
                                    );
                                })}
                                <button
                                    className="btn flex m-auto mr-0 mb-4"
                                    onClick={() => setIsNewCommandShown(true)}
                                >
                                    <p className="m-auto mr-3">Add command</p>
                                    <Image
                                        alt=""
                                        src="/icons/plus.svg"
                                        height="30"
                                        width="30"
                                    />
                                </button>
                            </div>
                        ) : null}
                    </div>
                    <NewCommandModal
                        isShown={isNewCommandShown}
                        onClose={() => setIsNewCommandShown(false)}
                        onNewCommand={(newCommand) =>
                            setNewSection({
                                ...newSection,
                                commands: [...newSection.commands, newCommand],
                            })
                        }
                    />
                </div>
            )}
        </Draggable>
    );
}

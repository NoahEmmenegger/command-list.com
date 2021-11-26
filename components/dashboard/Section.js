import EditCommand from "./Command"
import { Draggable } from "react-beautiful-dnd"
import { useState } from "react"

export default function EditSection({ section, index }) {
    const [isHidden, setIsHidden] = useState(true)

    return (
        <Draggable key={section.id} draggableId={section.id.toString()} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="card p-10 m-10 bg-gray-50" onClick={() => setIsHidden(!isHidden)}>
                        <input type="text" value={section.title} />
                        {!isHidden ? section.commands.map(command => {
                            return <EditCommand key={command.id} command={command} />
                        }) : null}
                    </div>
                </div>
            )}
        </Draggable>
    )
}
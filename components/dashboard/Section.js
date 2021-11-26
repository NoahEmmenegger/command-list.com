import EditCommand from "./Command"
import { Draggable } from "react-beautiful-dnd"

export default function EditSection({ section, index }) {
    return (
        <Draggable key={section.id} draggableId={section.id.toString()} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="card p-10">
                        <input type="text" value={section.title} />
                        {section.commands.map(command => {
                            return <EditCommand key={command.id} command={command} />
                        })}
                    </div>
                </div>
            )}
        </Draggable>
    )
}
import EditCommand from "./Command";
import { Draggable } from "react-beautiful-dnd";
import { useState } from "react";
import Image from "next/image";
import { update } from "../../utils/section";

export default function EditSection({ section, index }) {
  const [isHidden, setIsHidden] = useState(true);

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
          className="mb-10"
        >
          <div className="card p-10 bg-gray-50">
            <div className="flex">
              <div className="mr-auto">
                <input
                  type="text"
                  className="w-96"
                  value={newSection.title}
                  onChange={(event) =>
                    setNewSection({ ...newSection, title: event.target.value })
                  }
                  onBlur={() => update(newSection)}
                />
              </div>
              <div>
                <button onClick={() => setIsHidden(!isHidden)}>
                  <Image alt="" src="/icons/arrow.svg" height="30" width="30" />
                </button>
              </div>
            </div>
            {!isHidden
              ? newSection.commands.map((command) => {
                  return <EditCommand key={command.id} command={command} />;
                })
              : null}
          </div>
        </div>
      )}
    </Draggable>
  );
}

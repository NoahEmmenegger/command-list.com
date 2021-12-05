import { useState } from "react";

export default function EditCommand({ command, onUpdate }) {
    const [newCommandName, setNewCommandName] = useState(command.name);
    const [newCommandDescription, setNewCommandDescription] = useState(
        command.description
    );
    return (
        <div key={command.id}>
            <input
                type="text"
                value={newCommandName}
                onChange={(e) => {
                    setNewCommandName(e.target.value);
                }}
                onBlur={() => {
                    onUpdate({ ...command, name: newCommandName });
                }}
            />
            <input
                type="text"
                value={newCommandDescription}
                onChange={(e) => {
                    setNewCommandDescription(e.target.value);
                }}
                onBlur={() => {
                    onUpdate({
                        ...command,
                        description: newCommandDescription,
                    });
                }}
            />
        </div>
    );
}

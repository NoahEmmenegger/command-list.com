import Modal from "../Modal";
import { useState } from "react";

export default function NewCommandModal({ isShown, onClose, onNewCommand }) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <Modal isShown={isShown} onclose={() => onClose()}>
            <div className="flex flex-col h-full">
                <h1 className="mb-10">New Command</h1>
                <div className="my-auto">
                    <div>
                        <p>Name</p>
                        <input
                            type="text"
                            placeholder="value"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <p>Description</p>
                        <input
                            type="text"
                            placeholder="value"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    className="btn m-auto mr-0"
                    onClick={async () => {
                        onClose();
                        onNewCommand({ name, description });
                        setName("");
                        setDescription("");
                    }}
                >
                    Add
                </button>
            </div>
        </Modal>
    );
}

import Modal from "../Modal";
import { useState } from "react";

export default function NewSectionModal({
    isShown,
    onClose,
    pageUid,
    onNewSection,
}) {
    const [title, setTitle] = useState("");

    return (
        <Modal isShown={isShown} onclose={() => onClose()}>
            <div className="flex flex-col h-full">
                <h1 className="mb-10">New Section</h1>
                <div className="my-auto">
                    <div>
                        <p>Name</p>
                        <input
                            type="text"
                            placeholder="value"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    className="btn m-auto mr-0"
                    onClick={async () => {
                        onClose();
                        onNewSection({ title, commands: [] });
                        setTitle("");
                    }}
                >
                    Add
                </button>
            </div>
        </Modal>
    );
}

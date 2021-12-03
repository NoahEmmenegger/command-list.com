import Modal from "../Modal"
import { useState } from "react"
import { createPage } from "../../utils/pages"

export default function NewPageModal({isShown, ownerUid, onClose, onNewPage}) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    return (
        <Modal
            isShown={isShown}
            onclose={() => onClose()}
        >
            <div className="flex flex-col h-full">
                <h1 className="mb-10">New Page</h1>
                <div className="my-auto">
                    <div>
                        <p>Title</p>
                        <input type="text" placeholder="value" value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <p>Description</p>
                        <input type="text" placeholder="value" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                </div>
                <button className="btn m-auto mr-0" onClick={async () => {
                    await createPage(ownerUid, title, description)
                    onClose()
                    onNewPage({title, description})
                    setTitle('')
                    setDescription('')
                }}>Add</button>
            </div>
        </Modal>
    )
}
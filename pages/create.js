import { useAuth } from "../utils/auth"
import { createPage } from "../utils/pages"

export default function Create() {
    const auth = useAuth()

    const create = () => {
        createPage(auth.userId).then(wasCreated => {
            console.log(wasCreated)
        })
    }
    return (
        <div>
            Hier kommt das create form
            <button onClick={create}>Create</button>
        </div>
    )
}
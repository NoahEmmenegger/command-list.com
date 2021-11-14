import { useAuth } from "../utils/auth"
import { createPage } from "../utils/pages"
import Create from '../component/Create'

export default function CreateNewPage() {
    const auth = useAuth();

    const create = ({ title, description }) => {
        createPage(auth.userId, title, description)
        .then(wasCreated => {
            console.log(wasCreated)
        })
        .catch((error) => {
            console.log('An error occurred.')
        });
    }
    return <Create onclick={create} />;
}
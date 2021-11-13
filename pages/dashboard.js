import { getUserById } from "../utils/users"

import { useAuth } from '../utils/auth';
import { useState, useEffect } from "react"
import Link from "next/link";

export default function Dashboard() {
    const auth = useAuth();

    const [user, setUser] = useState(null)

    useEffect(() => {
        auth.getFireUser().then(u => {
            setUser(u)
        })
    }, [auth])

    return(
        <div>
            <Link href="/">Back</Link>
            <h1>Hello {user?user.email:'loading...'}</h1>
        </div>
    )
}
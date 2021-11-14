import { useAuth } from '../utils/auth';
import { useState, useEffect } from "react"
import Link from "next/link";

export default function Dashboard() {
    const auth = useAuth();

    const [pages, setPages] = useState([])

    useEffect(() => {
        
    }, [auth])

    return(
        <div>
            <Link href="/">Back</Link>
            <h1>Hello {auth.user?auth.user.email:'loading...'}</h1>
        </div>
    )
}
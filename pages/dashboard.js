import { useAuth } from '../utils/auth';
import { useState, useEffect } from "react"
import Link from "next/link";
import Menu from '../component/dashboard/Menu';

export default function Dashboard() {
    const auth = useAuth();

    const [pages, setPages] = useState([])

    useEffect(() => {
        console.log('ja')
    }, [auth])

    return (
        <div className="flex bg-lightgray h-screen w-screen">
            <div className="card bg-white m-20 flex rounded-3xl shadow-lg w-full">
                <div className="w-60">
                    <Menu />
                </div>
                <div className="p-10 container">
                    <div className="h-20 border-b w-full mx-auto align-middle">
                        <ul className="flex float-right align-middle">
                            <li className="px-10 m-auto"><Link href="/register">Register</Link></li>
                            <li className="px-10 m-auto"><Link href="/dashboard">Dashboard</Link></li>
                            <li className="px-10 m-auto"><Link href="/create">Create Page</Link></li>
                            {auth.user ?
                                (
                                <button onClick={auth.signout} className="px-10 btn">{auth.user.email}</button>
                                ) : <li className="px-10 btn"><Link href="/login">Login</Link></li>
                            }
                        </ul>
                    </div>
                    <div className="p-20 flex flex-wrap">
                        <div className="w-1/4 border m-5 h-24 rounded-2xl p-5">
                            test
                        </div>
                        <div className="w-1/4 border m-5 h-24 rounded-2xl p-5">
                            test
                        </div>
                        <div className="w-1/4 border m-5 h-24 rounded-2xl p-5">
                            test
                        </div>
                        <div className="w-1/4 border m-5 h-24 rounded-2xl p-5">
                            test
                        </div>
                        <div className="w-1/4 border m-5 h-24 rounded-2xl p-5">
                            test
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
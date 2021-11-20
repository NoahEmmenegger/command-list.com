import { useAuth } from '../../utils/auth';
import Link from "next/link";
import Image from 'next/image'

export default function DashboardLayout({ children, title, menuItems = [] }) {
    const auth = useAuth();

    return (
        <div className="flex bg-lightgray h-screen w-screen">
            <div className="card w-full m-20 flex">
                <div className="w-80">
                    <div className="h-full bg-darkgray p-10 rounded-tl-3xl rounded-bl-3xl text-white">
                        <h1 className="font-bold text-primary filter drop-shadow-lg">{title}</h1>
                        <div className="h-full flex">
                            <ul className="my-auto">
                                {menuItems.map(item => {
                                    return (
                                        <li key={item.title} className="flex container my-5">
                                            <Image alt={item.title} src={item.image} height={30} width={30} />
                                            <p className="my-auto pl-6">{item.title}</p>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
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
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
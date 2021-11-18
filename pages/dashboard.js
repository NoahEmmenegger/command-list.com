import { useAuth } from '../utils/auth';
import { useState, useEffect } from "react"
import Link from "next/link";
import Image from 'next/image'
import DashboardLayout from '../component/dashboard/Layout';

export default function Dashboard() {
    const auth = useAuth();

    const [pages, setPages] = useState([])

    useEffect(() => {
        console.log('ja')
    }, [auth])

    const menuItems = [
        {
            image: '/icons/edit.svg',
            title: 'Item',
            href: ''
        },
        {
            image: '/icons/edit.svg',
            title: 'Item',
            href: ''
        },
        {
            image: '/icons/edit.svg',
            title: 'Item',
            href: ''
        }
    ]

    return (
        <DashboardLayout title="Dashboard" menuItems={menuItems}>
            <div className="w-1/4 border m-5 h-24 rounded-2xl p-5 bg-lightgray">
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
            <div className="w-1/4 border m-5 h-24 rounded-2xl p-5 relative text-center flex align-middle">
                <p className="m-auto">Create New</p>
                <div className="m-auto">
                    <Image alt='' src="/icons/plus.svg" height={50} width={50} />
                </div>
            </div>
        </DashboardLayout>
    )
}
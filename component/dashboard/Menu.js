import Image from 'next/image'

export default function Menu() {
    return (
        <div className="h-full bg-darkgray p-10 rounded-tl-3xl rounded-bl-3xl text-white">
            <h1 className="font-bold text-primary filter drop-shadow-lg">Dashboard</h1>
            <div className="h-full flex">
                <ul className="my-auto">
                    <li className="flex container my-5">
                        <Image src="/icons/edit.svg" height={30} width={30} />
                        <p className="m-auto">Item</p>
                    </li>
                    <li className="flex container my-5">
                        <Image src="/icons/edit.svg" height={30} width={30} />
                        <p className="m-auto">Item</p>
                    </li>
                    <li className="flex container my-5">
                        <Image src="/icons/edit.svg" height={30} width={30} />
                        <p className="m-auto">Item</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
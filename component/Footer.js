import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-gray-500 p-10 text-white">
                <h1>Footer</h1>
                <div>
                    logo
                </div>
                <div className="invite_footer bg-primary">
                    <h2>general_question</h2>
                    <div>
                        <Link href="/">Link</Link>
                    </div>
                </div>
                <div className="flex">
                    <div className="d-block">
                        <span>CommandList</span>
                        <p>general_slogan</p>
                    </div>
                    <div className="flex">
                        <div className="flex-row">
                            <Link href="/">Link</Link>
                            <Link href="/">Link</Link>
                            <Link href="/">Link</Link>
                        </div>
                        <div>
                            <Link href="/">Link</Link>
                            <Link href="/">Link</Link>
                            <Link href="/">Link</Link>
                        </div>
                        <div>
                            <Link href="/">Link</Link>
                            <Link href="mailto:">Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="footer_info">
                    <p>© CommandList - 2021</p>
                    <p>code with ♥</p>
                </div>
            </footer>
        </>
    )
}
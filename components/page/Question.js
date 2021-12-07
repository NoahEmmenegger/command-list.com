import Link from "next/link";
import Image from "next/image";

export default function Question() {
    return (
        <>
            <div className="relative w-screen h-96">
                <Image src="/wave.svg" layout="fill" alt="" />
            </div>
            <div className="invite_footer">
                <h2>Would you like to create your own command list?</h2>
                <div>
                    <Link href="">
                        <a
                            rel="noopener"
                            target="_blank"
                            className="btn_invite"
                        >
                            Create Now!
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

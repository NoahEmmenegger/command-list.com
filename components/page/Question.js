import Link from "next/link";
import Image from "next/image";

export default function Question() {
    return (
        <>
            <div className="relative h-96">
                <Image src="/wave.svg" layout="fill" alt="" objectFit="fill" />
            </div>
            <div className="invite_footer">
                <div className=" w-1/2 m-auto">
                    <h2>Want to create your own command list? - It is completely free!</h2>
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
            </div>
        </>
    );
}

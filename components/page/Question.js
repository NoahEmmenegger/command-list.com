import Link from "next/link";

export default function Question() {
    return (
        <div className="bg-red-200 mt-40">
            <div className="invite_footer">
                <div className=" w-1/2 m-auto text-center p-10">
                    <h2>
                        Want to create your own command list? - It is completely
                        free!
                    </h2>
                    <div className="justify-center">
                        <Link href="/login">
                            <a className="btn w-1/4 mx-auto mt-20">
                                Create Now!
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

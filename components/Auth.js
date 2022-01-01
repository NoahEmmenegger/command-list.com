import Link from "next/link";

export default function Auth({ onclick, title }) {
    let email = "";
    let pass = "";

    return (
        <div className="flex flex-col px-5 max-w-2xl mx-auto">
            <h1>{title}</h1>
            <div className="my-5">
                <input
                    type="email"
                    className="border-2 rounded-md w-full h-10"
                    placeholder="Email"
                    onChange={(e) => {
                        email = e.target.value;
                    }}
                />
            </div>
            <div className="my-5">
                <input
                    type="password"
                    className="border-2 rounded-md w-full h-10"
                    placeholder="Password"
                    onChange={(e) => {
                        pass = e.target.value;
                    }}
                />
            </div>

            <input
                className="mt-10 btn"
                type="submit"
                onClick={() => {
                    onclick({ email, pass });
                }}
            />
        </div>
    );
}

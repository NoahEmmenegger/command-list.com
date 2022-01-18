import Image from "next/image";

export default function StatusBar({ status }) {
    if (!status) {
        return null;
    }
    return (
        <div
            className={
                "fixed bottom-5 text-2xl transform -translate-x-1/3 rounded-2xl left-1/2 px-10 py-2 text-white " +
                status.style
            }
        >
            {status.title}
            {/* <Image src="/icons/edit.svg" alt="" width={40} height={40} /> */}
        </div>
    );
}

export const Status = {
    HIDDEN: {
        style: " hidden",
        title: "",
    },
    LOADING: {
        style: " bg-blue-400",
        title: "Loading...",
    },
    SUCCESSFULLY: {
        style: "opacity-0 bg-green-300 animate-fade",
        title: "Successfully saved!",
    },
};

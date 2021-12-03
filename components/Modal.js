import Image from "next/image";

export default function Modal({ children, isShown, onclose }) {
  return (
    <div
      className={
        "fixed w-screen h-screen bg-black bg-opacity-70 top-0 left-0" +
        (isShown ? " flex" : " hidden")
      }
    >
      <div className="card p-10 m-auto w-1/2 h-1/2">
        <div className="m-auto flex justify-end">
          <button onClick={() => onclose()}>
            <Image alt="" src="/icons/close.svg" height="30" width="30" />
          </button>
        </div>
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
}

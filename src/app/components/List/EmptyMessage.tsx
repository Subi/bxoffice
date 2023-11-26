import Link from "next/link";


export default function EmptyMesage() {
    return (
        <div className="flex-col text-center translate-y-1/2 ">
            <p className="text-slate text-lg italic  font-thin tracking-widest  py-3">"Mr. Stark, I don't feel so good ..."</p>
            <p className="font-semibold tracking-wider text-sm"> - Peter Parker </p>
        </div>
    )
}
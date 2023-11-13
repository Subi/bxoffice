import { avatar } from "@/images"
import Image from "next/image"



export default async function Profile() {
    const loggedOut:boolean = true
    return (
        <>
        {loggedOut ? 
            <div className="w-1/6 flex items-center justify-evenly">
                <span className="text-slate tracking-wide text-sm font-normal">Signup</span>
                <button className="login">Login</button>
            </div> : <div className="w-1/5 flex justify-evenly items-center">
            <div aria-label="profileAvatar" className=" bg-blue-400 border-none rounded-full overflow-hidden w-[40px] h-[40px] relative">
                <Image
                    src={avatar}
                    alt="profileImage"
                    fill
                    style={{objectFit: "contain"}}
                    />
            </div>
            <span className="text-slate tracking-wider font-medium text-sm">BobaBoy</span>
        </div>}
        </>


    )
}
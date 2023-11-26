"use client"
import { exit } from "@/images"
import { SignOutButton, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import { MutableRefObject, useEffect, useRef, useState } from "react"

interface SignedInProps {
    username: string | null
    userImage: string | null
}

export default function SignedIn({username , userImage}:SignedInProps ){
    const [open , setIsOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const closeDropdown = (e:Event) => {
            const target:Node = e.target as Node
            if(ref.current && !ref.current.contains(target))
            setIsOpen(false)
        }

        document.body.addEventListener('click' , closeDropdown)

        return () => document.body.addEventListener('click' , closeDropdown)
    }, [])

    return (
        <div className="group flex justify-center  items-center pr-5">
        <div ref={ref} onClick={() => {setIsOpen(prev => !prev)}} aria-label="profileAvatar" className="bg-blue-400 border-none rounded-full mr-4 overflow-hidden relative">
            <Image
                src={userImage as string}
                alt="profileImage"
                width={35}
                height={35}
                style={{objectFit: "contain"}}
                />
        </div>
        <div className={`${open ? "!hidden" : "block"} group-hover:block group-hover:animate-toolTipZoom hidden  mr-3 mt-1 absolute top-20 rounded-md shadow-md  py-[.5] px-2 text-center bg-foreground-light`}>
        <span className=" text-slate text-xs tracking wider font-medium ">{username}</span>
        </div>
        <div className={`${open ? "block" : "hidden"} absolute   rounded-md shadow-lg text-slate top-20 mt-2 mr-2 bg-foreground-light`}>
            <div className="hover:bg-blue text-center  rounded-md transition-colors duration-100 hover:text-white tracking-wider text-slate py-[5px]  px-5 font-normal text-sm">
                <SignOutButton>
                    Logout
                </SignOutButton>
            </div>
        </div>
    </div> 
    )
}
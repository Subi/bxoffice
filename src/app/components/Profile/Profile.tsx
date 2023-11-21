import { auth, currentUser, useUser } from "@clerk/nextjs"
import Image from "next/image"
import SignedOut from "../SignedOut/SignedOut"
import { downarrow } from "@/images"
import SignedIn from "../SIgnedIn/SignedIn"



export default async function Profile() {
    const user =  await currentUser()

    return (    
        <div className="w-1/6 flex justify-between">
            {user?.id ? <SignedIn username={user.username} userImage={user.imageUrl}/> : <SignedOut/> }
        </div>
    )
}
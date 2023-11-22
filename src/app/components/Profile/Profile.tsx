"use client"
import {useUser } from "@clerk/nextjs"
import SignedOut from "../SignedOut/SignedOut"
import SignedIn from "../SIgnedIn/SignedIn"



export default function Profile() {
    const {isSignedIn , user} = useUser()
    return (    
        <div className="w-1/6 flex justify-between">
            {isSignedIn ? <SignedIn username={user.username} userImage={user.imageUrl}/> : <SignedOut/> }
        </div>
    )
}
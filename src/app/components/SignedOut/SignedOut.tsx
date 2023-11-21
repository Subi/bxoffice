import Link from "next/link"


export default function SignedOut() {
    return (
        <div className="w-full flex items-center justify-evenly">
        <Link href={"/sign-in"}><span className="text-slate hover:text-white cursor-pointer  transition-colors duration-200 tracking-wider text-sm font-normal">Login</span></Link>
        <button className="login">Sign Up</button>
    </div>
    )
}
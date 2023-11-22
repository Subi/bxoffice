import { browse, home, logo , list} from "@/images";
import Image from "next/image";
import Link from "next/link";


export default async function Sidebar() {
    return (
    <nav className="bg-foreground flex flex-col w-[12em] fixed z-0 h-screen shadow-lg  rounded-md">
        <Link href={"/"}>
        <header className="text-foreground py-10 w-5/5  flex  justify-center">
            <span>
                <Image
                src={logo}
                alt="logo"
                width={35}
                height={35}
                quality={100}
                />
            </span>
            <div className="flex  flex-col justify-center pb-1 font-medium text-xl text-white tracking-wider uppercase pl-4">
                bxoffice
            </div>
        </header>
        </Link>
        <div className="w-full justify-evenly pb-16 font-thin flex flex-col items-center pt-8">
            <div className= "w-5/6 mb-6 py-[.15em] rounded-md pl-4   text-white text-center tracking-wider hover:transition-all hover:duration-200 hover:bg-foreground-light hover:text-gold">
                <div className=" w-4/6 flex  items-center">
                <span className="pl-4 text-sm font-thin tracking-wider"><Link href={"/"}>Home</Link></span>
                </div>
            </div>
        </div>
        <div className="w-full justify-evenly pb-5 font-thin flex flex-col items-center pt-8">
            <header className="w-4/5 pl-2 pb-3">
                <span className="text-gold text-sm font-normal tracking-wide">Movies </span>
            </header>
            <div className= "w-5/6 mb-6 py-[.15em] rounded-md pl-4   text-slate text-center tracking-wider hover:transition-all hover:duration-200 hover:bg-foreground-light hover:text-white">
                <div className=" w-4/6 flex  items-center">
                <span className="pl-4 text-sm font-medium tracking-wider"><Link href={"/watchlist"}>Watchlist</Link></span>
                </div>
            </div>
        </div>
    </nav>
    )
}
import ReactPlayer from "react-player"
import dynamic from "next/dynamic"
import Image from "next/image"
import { exit } from "@/images"




interface TrailerPortalProps {
  setIsClicked: (value:boolean) => void 
  trailerUrl: string | null
}


export default function TrailerPortal({trailerUrl , setIsClicked}:TrailerPortalProps) { 
  if(!trailerUrl) return
  const ReactPlayer = dynamic(() => import('react-player') , {ssr: false})

  return (
    <>
    <span onClick={() => {setIsClicked(false)}} className="text-gold z-50 fixed text-2xl font-medium right-10 top-5 cursor-pointer">X</span>
    <div className="fixed text-white z-40  top-20 left-72">
    <ReactPlayer width={1280} height={720} controls={true}  url={trailerUrl} />
    </div>
    <div className="text-white fixed z-30  h-screen w-full bg-black opacity-40"/>
    </>
  )
}

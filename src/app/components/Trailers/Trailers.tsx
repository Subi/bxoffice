"use client"
import { trailerUrl } from "@/util/helper"
import dynamic from "next/dynamic"
import { TMDBMovieDetails } from "@/server/tmdb/interface"



interface TrailersProps {
    trailers: TMDBMovieDetails[]
}


export default  function Trailers({trailers}:TrailersProps){
    const ReactPlayer = dynamic(() => import('react-player/lazy') , {ssr: false})
    return (
        <>
         <section className="w-full py-4">
              <header className="pb-2">
                <span className="uppercase text-white text-md tracking-wide font-medium">Recent Trailers</span>
            </header>
            <div className="w-full grid grid-cols-trailers mt-2 gap-x-10 gap-y-5">
                {trailers.map((media , key) => {
                    return (
                        <div className="relative" key={key}>
                            <ReactPlayer  style={{"borderRadius" : '.5em' , marginBottom: ".5em" , overflow: "hidden" , objectFit: "contain"}} light={true} width={"auto"} height={225} url={trailerUrl(media.videos)}/>
                            <span className=" text-clip font-medium text-sm text-slate">{media.title}</span>
                        </div>
                    )
                }).slice(0,6)}
            </div>
        </section>
        </>
       
    )
}
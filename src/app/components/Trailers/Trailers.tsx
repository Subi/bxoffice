"use client"
import { backdropImage, getDirector, getReleaseYear, posterImage, trailerUrl } from "@/util/helper"
import dynamic from "next/dynamic"
import Image from "next/image"
import { TMDBMovieDetails } from "@/server/tmdb/interface"
import { play } from "@/images"
import { CategoryData } from "@/types"




interface TrailersProps {
    trailers: CategoryData
}


export default  function Trailers({trailers}:TrailersProps){
    const ReactPlayer = dynamic(() => import('react-player/lazy') , {ssr: false})

    return (
        <>
         <section className="w-full mb-16">
              <header className="pb-4">
                <span className="uppercase text-white text-md tracking-wide font-medium">{trailers.name}</span>
            </header>
            <div className="w-full grid grid-flow-col auto-cols-max gap-10 overflow-x-auto  no-scrollbar  overscroll-x-contain">
                {trailers.results.map((media , key) => {
                    return (
                        <div className="w-[425px] h-[205px] relative">
                            <div className="w-full top-2 left-2 z-20 relative">
                                <div className="w-[145px] h-[180px] rounded-md overflow-hidden shadow-md absolute">
                                    <Image
                                        src={posterImage(media.poster_path)}
                                        alt={media.title}
                                        fill
                                        style={{objectFit:'contain', borderRadius: ".7em"}}
                                        priority={true}
                                        quality={100}
                                        unoptimized={false}
                                        sizes="(min-width: 60em) 2d4vw,
                                        (min-width: 28em) 45vw,
                                        100vw"
                                    />
                                </div>
                                <div className="absolute left-40 top-1">
                                    <div className="flex w-64 flex-col ">
                                        <div className="w-full flex justify-between">
                                        <span className="text-white truncate w-[200px] tracking-wide text-md font-medium pb-2">{media.title}</span>
                                        </div>
                                        <span className="text-white w-56 truncate text-sm font-light pb-2">{media.tagline}</span>
                                        <span className="text-white truncate w-[200px] tracking-wide text-sm font-medium pb-2">{getDirector(media.credits.crew)}</span>
                                        <div className="flex text-white text-sm pb-8">{media.genres.map(genre => {return (<span className="mr-2">{genre.name}</span>)}).slice(0,3)}</div>
                                        <button className="py-[.3em] items-center justify-evenly w-[100px] flex px-1 rounded  bg-blue text-white font-medium text-sm tracking-wider">
                                            <Image src={play} alt="trailer" width={22} height={22}/>
                                            Trailer
                                            </button>
                                    </div>
                                </div>
                            </div>
                            <div  
                            className="opacity-20  shadow-xl relative z-10 rounded-md w-full h-full bg-center bg-no-repeat bg-cover"
                            style={{
                                backgroundImage: `url(${backdropImage(media.backdrop_path)})`
                            }}
                            >
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        </>
       
    )
}
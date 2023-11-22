import Image, { ImageProps } from "next/image"
import {getReleaseYear, posterImage } from "@/util/helper"
import PosterInfo from "../PosterInfo/PosterInfo"
import { TMDBMovie, TMDBMovieDetails } from "@/server/tmdb/interface"

interface Poster{
    media:TMDBMovieDetails
    currentIndex:number
}

export default function Poster({media , currentIndex}:Poster){
    return (
    <>
    <PosterInfo media={media} currentIndex={currentIndex}/>
    <div key={currentIndex} className="h-[265px] overflow-hidden relative mb-3 rounded-md  shadow-lg border-2  border-slate-400/5">
            <Image
        src={posterImage(media.poster_path)}
        alt={media.title}
        fill
        style={{borderRadius: ".35em"}}
        priority={true}
        quality={100}
        unoptimized={false}
        sizes="(min-width: 60em) 24vw,
        (min-width: 28em) 45vw,
        100vw"
        />
    </div>
    </>
    )
}
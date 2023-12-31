"use client"
import Image from "next/image";
import { TMDBMovie, TMDBMovieDetails } from "@/server/tmdb/interface";
import { addToList, deleteFromList, getDirector, getGenresName, getReleaseYear } from "@/util/helper";
import { unlike , liked , unwatchlist , watchlist} from "@/images";
import { useEffect, useState } from "react";



interface PosterInfo {
    media:TMDBMovieDetails
    currentIndex:number
}

export default function PosterInfo({media , currentIndex}:PosterInfo){
    const [isLiked , setIsLiked] = useState<boolean>(false)
    const [isWatchlist , setIsWatchlist] = useState<boolean>(false)

    const onWatchlist = (title:string):boolean => {
        const list:TMDBMovieDetails[] = JSON.parse(localStorage.getItem("watchlist") as string) 
        if(!list) { return false}
        return list.find(item => { return item.title == title}) ? true : false
    }

    useEffect(() => {},[isWatchlist])
    
   
    return (
        <div id="tooltip"  className={`${currentIndex % 6 != 0 ? "tooltip " : "reverse-tooltip"}`}>
        <div className="w-full flex flex-col ">
                <div className="w-full flex justify-between pb-1 text-md tracking-wide">
                    <span className="font-medium"> {getReleaseYear(media.release_date)}</span>
                    <span className="text-xs tracking-wider">Movie</span>
                </div>
                <div className="w-full flex pb-1 font-thin tracking-wide">
                    <span>{getDirector(media.credits.crew)}</span>
                </div>
                <div className="w-full flex tracking-wide">
                    {media.genres.map((genre , key) => {
                        return (
                            <div key={key} className="text-xs font-medium pr-3 text-gold">{genre.name}</div>
                        )
                    }).slice(0,3)}
                </div>
                <div className="w-1/5 flex pt-2 justify-between font-thin tracking-wide">
                    <Image onClick={() => {setIsWatchlist(prev => !prev)  , onWatchlist(media.title) ? deleteFromList(media) : addToList(media) }}  src={onWatchlist(media.title) ? watchlist : unwatchlist } height={18} width={18} alt="watchlist"/>
                    <Image onClick={() => {setIsLiked(prev => !prev)}}  src={isLiked ? liked : unlike} height={18} width={18} alt="favorite"/>
                </div>
        </div>
    </div>  
    )
}
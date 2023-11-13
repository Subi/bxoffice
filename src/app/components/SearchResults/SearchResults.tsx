import { Result } from "@/types"
import Poster from "../Poster/Poster"





interface SearchResults {
    results: Result[]
}


export default function SearchResults({results}:SearchResults) {
    if(!results) return

    return (
       <div className="w-full grid grid-cols-category relative z-0 gap-10">
            {results.length != 0 ? 
                results.sort((a:Result , b:Result) => {return b.popularity - a.popularity }).map((media , key) => {
                    return (
                        <>   
                    <div className="group animate-onLoadZoom w-full  relative flex flex-col" key={key}>
                        <Poster media={media} currentIndex={key + 1}/>
                        <span className=" group-hover:text-salmon text-clip font-medium text-sm text-slate">{media.title}</span>
                    </div>
                </>
                    )
                })
            : ""}        
        </div>
    )
}
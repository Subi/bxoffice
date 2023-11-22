'use client'
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import Searchbar from "../components/Searchbar/Searchbar"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Result} from "@/types"
import SearchResults from "../components/SearchResults/SearchResults"
import Profile from "../components/Profile/Profile"

export default function Page(){
    // Grab user seatch query from url
    const searchParmas = useSearchParams()
    const query = searchParmas.get('query')
    const [results , setResults] = useState<Result[]>([])
    
    const search = async (value:string) => {    // figure out error handling here
        const response = await fetch(`api/search/?query=${value}`) 
        console.log(response)
        const {results}: {results:Result[]} =  await response.json()
        setResults(results)
    }

    useEffect(() => {
        if(!query) return
        search(query)
    }, [query])


    console.log
    return (
        <div id='wrapper' className='w-11/12 ml-auto'>
        <div className="w-10/12  flex flex-col justify-center mx-auto">
        <div className='w-11/12 mt-10 mb-20 flex justify-between items-center'>
            <Searchbar query={query}/>
            <Profile/>
        </div>
            <SearchResults results={results}/>
        </div>
        </div>
    )
}
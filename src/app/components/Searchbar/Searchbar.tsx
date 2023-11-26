"use client"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import useDebounce from "@/app/hooks/useDebounce"


interface SearchBarProp {
    query?: string | null
}

export default function SearchBar({query}:SearchBarProp) {
    const router = useRouter()
    const [input , setInput] = useState<string>("")
    const debouncedSearch: string | undefined = useDebounce(input , 800)

    useEffect(() => {
        if(!debouncedSearch) return
        router.push(`/browse?query=${debouncedSearch}`)
    }, [debouncedSearch])
    
    useEffect(() => {
        if(!query) return
        setInput(query)


    }, [query])
    

    return (
        <div className="w-1/5 text-white">
            <div className="w-full">
                <input className="w-full font-normal text-sm tracking-wide capitalize pl-5  bg-button py-[.5em] text-white placeholder-gray rounded-md border border-transparent focus:outline-none focus:border focus:border-gold" placeholder="Search" value={input} onChange={(e) => {setInput(e.target.value)}}  type="text" />
            </div>
        </div>
    )
}
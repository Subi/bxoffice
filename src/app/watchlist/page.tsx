import Header from "../components/Header/Header"
import List from "../components/List/List"
import { useEffect, useState } from "react"
import { TMDBMovieDetails } from "@/server/tmdb/interface"

export default async function Page(){
    return (
        <>
        <div className='text-slate w-10/12 flex flex-col justify-center mx-auto'>
              <Header/>
              <List/>
        </div>
        </>
    )
}
import { TMDBApi } from "@/server/tmdb/constants";
import { TMDBMovie, TMDBAPiResponse } from "@/server/tmdb/interface";
import { createOpts } from "@/util/api/helper";
import { NextRequest, NextResponse } from "next/server";
import { forwardRef } from "react";


export async function GET(req:NextRequest) {

    // Extract user result query param from url
    const {searchParams} = new URL(req.url)
    const q = searchParams.get("query") as string

    // Fetch inital media data 
    const response = await fetch(`${TMDBApi.searchUrl}?query=${q}&include_adult=false&language=en-US&page=1` , createOpts())
    if(!response.ok) {
        console.log(response.status , response.statusText)
        return NextResponse.json({staus: response.status , error: response.statusText})
    } 

    // Read data from return search response & initialize empty array 
    const searchResponse:TMDBAPiResponse =  await response.json()
    const mediaResults:TMDBMovie[] = []


    // Loop through and push single media data into arr 
    for(let i = 0; i < searchResponse.results.length; i++) {
        const response =  await fetch(`${TMDBApi.movie}/${searchResponse.results[i].id}?append_to_response=credits` , createOpts())
        if(!response.ok) {
            console.log(response.status , response.statusText)
            return NextResponse.json({staus: response.status , error: response.statusText})
        } 
        const media:TMDBMovie =  await response.json()
        mediaResults.push(media)
    } 

    
    return NextResponse.json({status: 200 , results: mediaResults})
}

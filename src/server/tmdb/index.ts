import { CategoryData } from "@/types"
import { TMDBAPiResponse, TMDBMovie } from "./interface"
import { PREVIEW_LENGTH } from "@/server/tmdb/constants"
import { createOpts } from "@/util/api/helper"

export const PopularMovies = async ():Promise<CategoryData> => {
    const response =  await fetch("https://api.themoviedb.org/3/movie/popular" , createOpts())
    if(!response.ok) {
        console.log(response.status , response.statusText)
    }

    const popularMoviesResponse:TMDBAPiResponse = await response.json()
    const popularMoviesArr:TMDBMovie[] = []

    for(let i = 0; i < PREVIEW_LENGTH ; i++) {  // preview length propb not needed , could be used to render full list of results later
        const movieDetails = await getMovieDetails(popularMoviesResponse.results[i].id)
        popularMoviesArr.push(movieDetails)
    }

    return {
        name: "Popular",
        results: popularMoviesArr
    }
}

export const TrendingMovies = async ():Promise<CategoryData> => {
    const response =  await fetch("https://api.themoviedb.org/3/trending/movie/day", createOpts())
    if(!response.ok) {
        console.log(response.status , response.statusText)
    }

    const trendingMoviesResponse:TMDBAPiResponse = await response.json()
    console.log(trendingMoviesResponse)
    const trendingMoviesArr:TMDBMovie[] = []

    for(let i = 0; i < PREVIEW_LENGTH ; i++) {  // preview length propb not needed , could be used to render full list of results later
        const movieDetails = await getMovieDetails(trendingMoviesResponse.results[i].id)
        trendingMoviesArr.push(movieDetails)
    }
    return {
        name: "Trending Now",
        results: trendingMoviesArr
    }
}

export const getMovieDetails =  async (id:number):Promise<TMDBMovie> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits` , createOpts())
    if(!response.ok) {
        console.log(response.status , response.statusText)
    }
    return await response.json()
}
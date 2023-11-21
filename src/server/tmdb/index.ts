import { CategoryData } from "@/types"
import { TMDBAPiResponse, TMDBMovie, TMDBMovieDetails } from "./interface"
import { PREVIEW_LENGTH } from "@/server/tmdb/constants"
import { createOpts } from "@/util/api/helper"
import { currentDate, monthsAfterCurrentDate } from "@/util/helper"

export const popularMovies = async ():Promise<CategoryData> => {
    const response =  await fetch("https://api.themoviedb.org/3/movie/popular" , createOpts())
    if(!response.ok) {
        console.log(response.status , response.statusText)
    }

    const popularMoviesResponse:TMDBAPiResponse = await response.json()
    const popularMoviesArr:TMDBMovieDetails[] = []

    for(let i = 0; i < PREVIEW_LENGTH ; i++) {  // preview length propb not needed , could be used to render full list of results later
        const movieDetails = await getMovieDetails(popularMoviesResponse.results[i].id)
        popularMoviesArr.push(movieDetails)
    }

    return {
        name: "Popular",
        results: popularMoviesArr
    }
}


export const upcomingMovies = async ():Promise<CategoryData> => {
    const response =  await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=${currentDate()}&primary_release_date.lte=${monthsAfterCurrentDate()}&sort_by=popularity.desc` , createOpts())
    if(!response.ok) {
        console.log(response.status , response.statusText)
    }
    const upcomingMoviesResponse:TMDBAPiResponse = await response.json()
    const upcomingMoviesArr:TMDBMovieDetails[] = []

    for(let i = 0; i < PREVIEW_LENGTH ; i++) {  // preview length prop not needed , could be used to render full list of results later
        const movieDetails = await getMovieDetails(upcomingMoviesResponse.results[i].id)
        upcomingMoviesArr.push(movieDetails)
    }

    return {
        name: "Upcoming Movies",
        results: upcomingMoviesArr
    }
}



export const trendingMovies = async ():Promise<CategoryData> => {
    const response =  await fetch("https://api.themoviedb.org/3/trending/movie/day", createOpts())
    if(!response.ok) {
        console.log(response.status , response.statusText)
    }

    const trendingMoviesResponse:TMDBAPiResponse = await response.json()
    const trendingMoviesArr:TMDBMovieDetails[] = []

    for(let i = 0; i < PREVIEW_LENGTH ; i++) {  // preview length prop not needed , could be used to render full list of results later
        const movieDetails = await getMovieDetails(trendingMoviesResponse.results[i].id)
        trendingMoviesArr.push(movieDetails)
    }
    return {
        name: "Trending Now",
        results: trendingMoviesArr
    }
}






export const getMovieDetails =  async (id:number):Promise<TMDBMovieDetails> => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits,videos` , createOpts())
    if(!response.ok) {
        console.log(response.status , response.statusText)
    }
    return await response.json()
}


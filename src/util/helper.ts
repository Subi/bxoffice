import { Crew, Genre , TMDBMovieDetails, Videos } from "@/server/tmdb/interface"
import { VideoType } from "@/types"
import moment from "moment"


export const posterImage = (posterPath:string):string => {
    return `https://image.tmdb.org/t/p/original${posterPath}`
}


export const backdropImage = (backdropPath:string):string => {
    return `https://image.tmdb.org/t/p/original${backdropPath}`
}

export const trailerUrl = (videos:Videos): string => {
    let key:string | undefined
    key = videos.results.find(video => video.type == VideoType.Trailer)?.key != undefined ? videos.results.find(video => video.type == VideoType.Trailer)?.key : videos.results.find(video => video.type == VideoType.Teaser)?.key as string
    return `https://www.youtube.com/watch?v=${key}`

}

export const getReleaseYear = (date:string):string => {
    const val = date.split("-")
    return `${val[0]}`
}


export const getDirector = (crew: Crew[]):string => {
    return crew.find((member => member.job === "Director"))?.name as string
}

export const getGenresName = (genres:Genre[]) => {
    return genres.map(genre => genre.name)
}

export const currentDate = () => {
    return moment().format("YYYY-MM-DD")
}

export const monthsAfterCurrentDate = ():string => {
    return moment().add('2' , 'month').format('YYYY-MM-DD')
}



export const addToList = (media:TMDBMovieDetails) => { 
    const list: string | null = localStorage.getItem('watchlist')
    if(!list) {
        const newList:TMDBMovieDetails[] = []
        newList.push(media)
        localStorage.setItem('watchlist' , JSON.stringify(newList))
    } else {
        let list:TMDBMovieDetails[] = JSON.parse(localStorage.getItem("watchlist") as string)
        list.push(media)
        localStorage.setItem('watchlist' , JSON.stringify(list))
    }
}

export const deleteFromList = (media:TMDBMovieDetails) => {
    let list:TMDBMovieDetails[] = JSON.parse(localStorage.getItem("watchlist") as string) 
    list.find((item , index) => {
        if(item.title == media.title) {
            list.splice(index ,  1)
            localStorage.setItem('watchlist' , JSON.stringify(list))
        }
    })
}



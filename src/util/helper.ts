import { Crew, Genre , Videos } from "@/server/tmdb/interface"
import { VideoType } from "@/types"

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



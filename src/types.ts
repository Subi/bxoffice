import { TMDBMovie, TMDBMovieDetails } from "./server/tmdb/interface"


export type CategoriesData = CategoryData[]

export type CategoryData = {
    name: string
    results: TMDBMovieDetails[]
}

export enum VideoType {
    Trailer = "Trailer",
    Teaser = "Teaser"
}
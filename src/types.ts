import { TMDBMovie } from "./server/tmdb/interface"


export type CategoriesData = CategoryData[]

export type CategoryData = {
    name: string
    results: TMDBMovie[]
}

export enum VideoType {
    Trailer = "Trailer",
    Teaser = "Teaser"
}
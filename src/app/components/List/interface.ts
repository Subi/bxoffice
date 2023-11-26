import { TMDBMovieDetails } from "@/server/tmdb/interface";

export interface ViewProps {
    list: TMDBMovieDetails[]
}

export interface ListItem {
    item: TMDBMovieDetails
    index: number
}
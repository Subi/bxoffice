interface TMDBMedia {
    adult:boolean;
    id:number;
    media_type: string;
    popularity: number;
    poster_path: string;
    backdrop_path: string;
    vote_count: number;
    vote_average:number;
    genere_ids: number[];
    overview: string;
    original_language: string;
}


export interface TMDBMovie extends TMDBMedia {
    media_type: 'movie';
    title: string
    original_title: string;
    release_date: string;
    video: boolean;
}


export interface TMDBMovieDetails{
    adult:boolean;
    id:number;
    media_type: string;
    popularity: number;
    release_date: string;
    poster_path: string;
    backdrop_path: string;
    vote_count: number;
    vote_average:number;
    genere_ids: number[];
    overview: string;
    original_language: string;
    title:string
    runtime: number
    genres: Genre[]
    videos: Videos
    credits: Credits
}


export interface Cast extends Person {
    cast_id: string
    order: number
}

export interface Crew extends Person {
    job: string;
}


export interface TMDBAPiResponse {
    page: number
    results: TMDBMedia[]
}



export type Genre = {
    id: number;
    name: string;
}


export type Videos = {
    results: {
        iso_639_1: string
        iso_3166_1: string
        name: string
        key: string
        site: string
        size: number
        type: string
        offical: boolean
        published_at: string
        id: string
    }[]
}


export type Credits = {
    casts: Cast[]
    crew: Crew[]
}


type Person = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string
    credit_id: string
    department: string
}



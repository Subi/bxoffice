const PREVIEW_LENGTH = 6


// TMDB API

const TMDBApi = {
    baseUrl: "https://api.themoviedb.org/3/",
    newReleaseUrl:"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2023-11-10&primary_release_date.lte=2023-12-31&sort_by=popularity.desc",
    searchUrl:"https://api.themoviedb.org/3/search/movie",
    movie: "https://api.themoviedb.org/3/movie"
}

// Categories 
const categories = [
    {
        name: "Trending Now",
        endpoint: "https://api.themoviedb.org/3/trending/movie/day"
    },
    {
        name: "Popular",
        endpoint: "https://api.themoviedb.org/3/movie/popular"
    }
]




export {
    categories,
    TMDBApi,
    PREVIEW_LENGTH
}
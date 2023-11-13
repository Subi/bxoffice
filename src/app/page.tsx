import SearchBar from './components/Searchbar/Searchbar'
import Category from './components/Category/Category'
import Trailers from './components/Trailers/Trailers'
import Profile from './components/Profile/Profile'
import {TMDBApi} from '@/server/tmdb/constants'
import { createOpts } from '@/util/api/helper'
import { PopularMovies, TrendingMovies } from  '@/server/tmdb/index'
import { CategoryData } from '@/types'
import { TMDBAPiResponse,TMDBMovieDetails } from '@/server/tmdb/interface'



const getTrailers = async ():Promise<TMDBMovieDetails[]> => {
    const response = await fetch(TMDBApi.newReleaseUrl , createOpts("GET"))
    const upcomingReleaseData:TMDBAPiResponse =  await response.json()

    const requests =  upcomingReleaseData.results.map(result => fetch(`${TMDBApi.baseUrl}/movie/${result.id}?append_to_response=videos` , createOpts()))
    const responses = await Promise.all(requests)
    const promises = responses.map(response => response.json())
    const data:TMDBMovieDetails[] =  await Promise.all(promises)
    return data.sort((a:TMDBMovieDetails , b:TMDBMovieDetails) =>  {return b.popularity - a.popularity})
    
}

export default async function Home() {
  const popular:CategoryData = await PopularMovies()
  const trending:CategoryData = await TrendingMovies()
  const trailers:TMDBMovieDetails[] = await getTrailers()


  return (  
    <>
    <div id='wrapper' className=' w-11/12 ml-auto'>
    <div className=' w-10/12 flex flex-col justify-center mx-auto'>
      <div className='w-11/12 mt-10 mb-20 flex justify-between items-center'>
      <SearchBar/>
      <Profile/>
      </div>
        <Category category={trending}/>
        <Category category={popular}/>
        <Trailers trailers={trailers}/> 
    </div>
    </div>
    </>
  )
}

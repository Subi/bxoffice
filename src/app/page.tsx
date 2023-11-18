import SearchBar from './components/Searchbar/Searchbar'
import Category from './components/Category/Category'
import Trailers from './components/Trailers/Trailers'
import Profile from './components/Profile/Profile'
import { popularMovies, trendingMovies, upcomingMovies } from  '@/server/tmdb/index'
import { CategoryData } from '@/types'


export default async function Home() {
  const popular:CategoryData = await popularMovies()
  const trending:CategoryData = await trendingMovies()
  const trailers:CategoryData = await upcomingMovies()
  
  
  return (  
    <>
    <div id='modal' className='w-full'></div>
    <div id='wrapper' className='w-11/12 ml-auto'>
    <div className=' w-10/12 flex flex-col justify-center mx-auto'>
      <div className='w-11/12 mt-10 mb-20 flex justify-between items-center'>
      <SearchBar/>
      <Profile/>
      </div>
        <Trailers trailers={trailers}/> 
        <Category category={trending}/>
        <Category category={popular}/>
    </div>
    </div>
    </>
  )
}

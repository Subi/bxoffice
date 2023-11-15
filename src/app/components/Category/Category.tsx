import { CategoryData} from "@/types"
import Poster from "../Poster/Poster"

interface CategoryProps {
    category: CategoryData
}


export default async function Category({category}:CategoryProps){
    return (
        <section className=" w-full mx-auto text-white mb-16">
            <header className="pb-4">
                <span className="uppercase text-goldAccent text-md tracking-wide font-medium">{category.name}</span>
            </header>
            <div className="w-full grid grid-cols-category gap-x-8 mt-3">
                {category.results.map((media , key) => {
                    return (
                        <div className="group animate-zoom w-full relative flex flex-col" key={key}>
                            <Poster media={media} currentIndex={key + 1}/>
                            <span className="group-hover:text-salmon  text-clip font-medium text-sm text-slate">{media.original_title}</span>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
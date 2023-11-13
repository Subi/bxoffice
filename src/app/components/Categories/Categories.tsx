import { CategoriesData, CategoryData } from "@/types"
import Category from "../Category/Category"



interface CategoriesProps {
    categories: CategoriesData
}

export default async function Categories({categories}:CategoriesProps){
    return (
        <div>
            {categories.map(category  => {
                return (
                    <Category category={category} key={category.name}/>
                )
            })}
        </div>
    )
}
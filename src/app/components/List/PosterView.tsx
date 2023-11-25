import Item from "./Item";
import { ViewProps } from "./interface";





export default function PosterView({list}:ViewProps) {
    return (
        <div className=" w-[90%] mx-auto  grid grid-cols-list gap-8">
            {list.map((media , key) => {
                return (
                    <div className="animate-zoom w-full relative flex-col" key={key}>
                    <Item item={media} index={key}/>
                    </div>
                )
            })}
        </div>
    )
}
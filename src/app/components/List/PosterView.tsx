import Item from "./Item";
import { ViewProps } from "./interface";





export default function PosterView({list}:ViewProps) {
    return (
        <div className=" w-full mx-auto  grid grid-cols-list gap-x-8 gap-y-3">
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
import Image from "next/image"
import { ListItem } from "./interface"
import { posterImage } from "@/util/helper"


export default function Item({item , index}: ListItem) {
    return (
        <>
        <div className="listItem" key={index}>
            <Image
             src={posterImage(item.poster_path)}
             alt="media poster image"
             fill
             priority={true}
             quality={100}
             unoptimized={false}
             sizes="(min-width: 60em) 24vw,
             (min-width: 28em) 45vw,
             100vw"
            />
        </div>
            <span className="group-hover:text-salmon  text-clip font-medium text-sm text-slate">{item.original_title}</span>
        </>  
    )
}
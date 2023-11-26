import { posterImage } from "@/util/helper";
import Item from "./Item";
import { ViewProps } from "./interface";
import Image from "next/image";




export default function ListView({list}:ViewProps) {
    return (
        <div className="w-11/12  rounded-md shadow-xl  bg-foreground  flex-col">
            <div className="w-full flex py-6 text-white text-sm tracking-wider">
                <div className="block w-[60px]"></div>
                <div className=" pl-5">Title</div>
            </div>
            {list.map((item , key) => {
                return (
                    <div className="w-full py-[5px] pl-4 relative  group flex hover:bg-gold hover:text-white transition-colors duration-300" key={key}>
                        <div className="absolute hidden rounded-md w-[100px] h-[150px] -left-28 group-hover:block bg-cover bg-center"
                        style={{ 
                            backgroundImage: `url(${posterImage(list[key].poster_path)})`
                        }}
                        />
                        <div className="w-[40px] h-[40px] relative rounded-md  overflow-hidden">
                        <Image
                          src={posterImage(item.poster_path)}
                          alt="media poster image"
                          fill
                          priority={true}
                          objectFit="cover"
                          quality={100}
                          unoptimized={false}
                          sizes="(min-width: 60em) 24vw,
                          (min-width: 28em) 45vw,
                          100vw"
                         />
                        </div>
                        <div className="w-full pl-6 flex items-center ">
                            <p>{item.title}</p>
                        </div>
                    </div>
                )
            })}
        </div> 
    )
}
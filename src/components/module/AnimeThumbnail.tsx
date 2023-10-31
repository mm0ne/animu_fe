import { Alias, AnimeDetail, Genre, GenreJoinReponse } from "@/types/anime";
import { ArrowSquareOut } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

interface AnimeThumbnailProps {
    image_link: string,
    mal_link: string,
    detail: AnimeDetail,
    genres: GenreJoinReponse[],
    aliases: Alias[]
}


export default function AnimeThumbnail({image_link, mal_link ,detail, genres, aliases}: AnimeThumbnailProps){
    let genre = genres.map( x => { return x.anime_genre.name})
    let alias = aliases.map( x => { return x.name})
    return(
        <section className="flex flex-col justify-start gap-y-3 max-w-[13em]">
            <div className="relative w-[13em] h-[20em]">
                <Image
                src={image_link}
                alt={image_link}
                fill={true}
                className="rounded-md"
                objectFit="cover"/>
            </div>
            <Link target="_blank" href={mal_link} className="w-full flex justify-center items-center font-semibold gap-x-2 bg-blue-600 py-1 rounded-md hover:text-yellow-500 transition-all duration-100">

                MyAnimeList
                <ArrowSquareOut size={17}/>
            </Link>
            <article className="font-semibold max-w-fit">
                <p className="text-slate-200">Year : <span className="font-normal">{detail.year}</span></p>
                <p className="text-slate-200">Genre : <span className="font-normal">{genre.join(", ")}</span></p>
                <p className="text-slate-200">Seasons : <span className="font-normal">{detail.seasons}</span></p>
                <p className="text-slate-200">Alias : <span className="font-normal">{alias.join(",")}</span></p>
            </article>
        </section>
    )
}
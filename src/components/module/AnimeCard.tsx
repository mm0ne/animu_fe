import Card from "@/components/elements/Card";
import { Anime } from "@/types/anime";
import {AiTwotoneStar} from "react-icons/ai"
import Image from "next/image";

const AnimeCard: React.FC<{ data: Anime }> = ({ data }) => {
  const { id, title_eng, image_link, rating, anime_genre_relation } = data;
  
  let genres = anime_genre_relation.map(genre => {return genre.anime_genre.name}).join(", ")
  if (genres.length > 25) genres = genres.substring(0, 20) + "..."
  return (
    <Card link={"/anime/" + id}>
      <div className="h-[30vh] w-full max-w-md p-6 flex flex-col items-center relative">
        <Image src={image_link} alt={title_eng} fill={true} objectFit="cover" className="rounded-md"/>
        <div className="absolute left-[10px] top-[10px] bg-slate-700 px-2 py-[0.5px] rounded-full flex flex-row items-center justify-start gap-x-[2px]">
            <AiTwotoneStar size={15} weight="fill" className="text-amber-300 mt-[0.5px]"/>
            <p className="font-semibold text-[14px]">{rating}</p>
        </div>
        <div className="w-full absolute h-[30vh] bottom-0 bg-gradient-to-b from-transparent via-transparent hover:to-slate-500 to-slate-700 flex flex-col justify-end items-start">

            <div className="p-2 flex flex-col">
                <div className="flex flex-col items-start justify-start ">
                    <h3 className="text-[14px] md:text-[18px] font-semibold">{title_eng}</h3>
                    <p className="text-[12px] md:text-[14px]">{genres}</p>
                </div>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default AnimeCard;

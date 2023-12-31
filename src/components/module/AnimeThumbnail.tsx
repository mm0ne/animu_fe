import { Alias, AnimeDetail, Genre, GenreJoinReponse } from "@/types/anime";
import { SiMyanimelist } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

interface AnimeThumbnailProps {
  image_link: string;
  mal_link: string;
  detail: AnimeDetail;
  genres: GenreJoinReponse[];
  aliases: Alias[];
}

export default function AnimeThumbnail({
  image_link,
  mal_link,
  detail,
  genres,
  aliases,
}: AnimeThumbnailProps) {
  let genre = genres.map((x) => {
    return x.anime_genre.name;
  });
  let alias = aliases.map((x) => {
    return x.name;
  });
  return (
    <section className="flex flex-col justify-start gap-y-3 w-full lg:max-w-[15em] px-2 py-4 lg:py-0">
      <div className="relative w-[90vw] h-[25em] lg:w-[15em] lg:h-[20em] self-center">
        <Image
          src={image_link}
          alt={image_link}
          fill={true}
          sizes="w-[90vw] lg:w-[15em]"
          className="rounded-md"
          style={{ objectFit: "contain" }}
        />
      </div>
      <Link
        target="_blank"
        href={mal_link}
        className="text-white w-full self-center lg:w-full flex justify-center items-center font-semibold gap-x-1 bg-blue-600 py-1 rounded-md hover:text-yellow-500 transition-all duration-100"
      >
        <SiMyanimelist size={26} className="mt-[2px]" />
        MyAnimeList
        <BsBoxArrowUpRight size={13} className="ml-1" />
      </Link>
      <article className="font-semibold max-w-fit text-[15px] md:text-[18px]">
        <p className="">
          Year : <span className="font-normal">{detail.year}</span>
        </p>
        <p className="">
          Genre : <span className="font-normal">{genre.join(", ")}</span>
        </p>
        <p className="">
          Seasons : <span className="font-normal">{detail.seasons}</span>
        </p>
        <p className="">
          Alias : <span className="font-normal">{alias.join(",")}</span>
        </p>
      </article>
    </section>
  );
}

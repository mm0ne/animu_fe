import { useRouter } from "next/router";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AnimeThumbnail from "@/components/module/AnimeThumbnail";
import { getAnimeDetail } from "@/components/apis/anime";
import { UUID } from "crypto";
import BackButton from "@/components/elements/BackButton";
import AnimeArticle from "@/components/module/AnimeArticle";
import Loader from "@/components/elements/Loader";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  WorstSatisfactionLevel,
  BadSatisfactionLevel,
  NeutralSatisfactionLevel,
  GoodSatisfactionLevel,
  GreatSatisfactionLevel,
  BestSatisfactionLevel,
} from "@/components/elements/SatisfactionLevel";
import { NEXT_SEO_DEFAULT } from "../../../next-seo-config";

export const runtime = 'experimental-edge'
export default function animeDetail() {
  const { query } = useRouter();
  const { data, isLoading } = getAnimeDetail(query!.uuid as UUID);
  const [satisfactory, setSatisfactory] = useState<JSX.Element>(<NeutralSatisfactionLevel/>);
  
  let updatedSEO = {
    ...NEXT_SEO_DEFAULT,
    title: "Anime | Review",
    titleTemplate:'',
    description: "Collection and Reviews of Aster's Watched Animes.",
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://animu.monemone.site/anime/9ea46737-c86a-46af-b533-00d07ef70034',
        title: 'Anime | Review',
        description: "Collection and Reviews of Aster's Watched Animes.",
        siteName: 'Aster\'s Corner',
      }
  };

  useEffect(() => {
    if (data) {
      const rating = data.data.rating as unknown as number;
      switch (true) {
        case rating < 5:
          setSatisfactory(<WorstSatisfactionLevel/>);
          break;
        case rating < 7:
          setSatisfactory(<BadSatisfactionLevel/>);
          break;
        case rating < 7.5:
          setSatisfactory(<NeutralSatisfactionLevel/>);
          break;
        case rating < 8.3:
          setSatisfactory(<GoodSatisfactionLevel/>);
          break;
        case rating < 5:
          setSatisfactory(<GreatSatisfactionLevel/>);
          break;
        default:
          setSatisfactory(<BestSatisfactionLevel/>);
      }

      if (rating < 5) {
        setSatisfactory(<WorstSatisfactionLevel/>);
      } else if (5 <= rating && rating < 7) {
        setSatisfactory(<BadSatisfactionLevel/>);
      } else if (7 <= rating && rating < 7.5) {
        setSatisfactory(<NeutralSatisfactionLevel/>);
      } else if (7.5 <= rating && rating < 8.3) {
        setSatisfactory(<GoodSatisfactionLevel/>);
      } else if (8.3 <= rating && rating < 9) {
        setSatisfactory(<GreatSatisfactionLevel/>);
      } else if (9 <= rating) {
        setSatisfactory(<BestSatisfactionLevel/>);
      }

      updatedSEO = {
        ...NEXT_SEO_DEFAULT,
        title: `Anime | ${data.data.title_eng}`,
        description: data.data.anime_detail.description,
        openGraph: {
            type: 'website',
            locale: 'id_ID',
            url: `https://animu.monemone.site/anime/${data.data.id}`,
            title: `Anime | ${data.data.title_eng}`,
            description: data.data.anime_detail.description,
            siteName: 'Aster\'s Corner',
          }
      };
    }
  }, [data]);

  return isLoading ? (
    <Loader />
  ) : (
    <main className="w-full xl:px-6 min-h-[80vh] max-w-full">
      {data && (
        <section className="flex flex-col justify-start items-start">
          <Head>
            <title>{"Anime | " + data.data.title_eng}</title>
            <meta
              name="description"
              content={data.data.anime_detail.description}
            />
          </Head>
          <div className="flex gap-x-2">
            <BackButton css_class=" p-1 h-auto" size={25} />
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
                {data?.data.title_eng}
              </h1>
              <h3 className="font-semibold text-lg md:text-xl opacity-80">
                {"[JP] " + data?.data.title_jp}
              </h3>
            </div>
          </div>
          <div className="lg:ml-16 lg:mt-6 flex flex-col lg:flex-row items-center lg:items-start">
            <AnimeThumbnail
              image_link={data.data.image_link ?? ""}
              mal_link={data.data.anime_detail.mal_link ?? ""}
              detail={data.data.anime_detail}
              genres={data.data.anime_genre_relation}
              aliases={data.data.anime_alias}
            />
            <div className="flex lg:hidden flex-col items-center justify-start min-w-[20em] py-2 pb-5">
              {satisfactory}
            </div>
            <AnimeArticle
              description={data.data.anime_detail.description}
              review={data.data.anime_detail.review}
            />
            <div className="hidden lg:flex flex-col items-center justify-start min-w-[20em]">
              {satisfactory}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

animeDetail.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

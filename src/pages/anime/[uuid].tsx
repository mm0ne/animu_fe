import { useRouter } from "next/router";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AnimeThumbnail from "@/components/module/AnimeThumbnail";
import { getAnimeDetail } from "@/components/apis/anime";
import { UUID } from "crypto";
import BackButton from "@/components/elements/BackButton";
import AnimeArticle from "@/components/module/AnimeArticle";
import { CheckCircle, XCircle } from "@phosphor-icons/react";
import Loader from "@/components/elements/Loader";
import Head from "next/head";

export default function animeDetail() {
  const { query } = useRouter();
  const { data, isLoading } = getAnimeDetail(query!.uuid as UUID);
  return isLoading ? (
    <Loader/>
  ) : (
    
    <main className="w-full px-6 min-h-[80vh] flex gap-x-2 max-w-full">
      <BackButton />
      {data && (
        <section className="flex flex-col justify-start items-start">
          <Head>
            <title>{"Anime | " + data.data.title_eng}</title>
            <meta name="description" content={data.data.anime_detail.description}/>
            <meta lang="en-US"/>
          </Head>
          <h1 className="font-bold text-2xl">{data?.data.title_eng}</h1>
          <h3 className="font-semibold text-slate-100 text-xl opacity-80">
            {"[JP] " + data?.data.title_jp}
          </h3>
          <div className="mt-6 flex">
            <AnimeThumbnail
              image_link={data.data.image_link ?? ""}
              mal_link={data.data.anime_detail.mal_link ?? ""}
              detail={data.data.anime_detail}
              genres={data.data.anime_genre_relation}
              aliases={data.data.anime_alias}
            />
            <AnimeArticle
              description={data.data.anime_detail.description}
              review={data.data.anime_detail.review}
            />
            <div className="flex flex-col items-center justify-start w-[20em]">

            {data.data.anime_detail.is_recommended ? (
              <><CheckCircle size={100} className="font-bold text-emerald-500" />
                <p className="text-emerald-500 text-xl">Recommended</p>
              </>
            ) : (
                <><XCircle size={100} className="font-bold text-red-500" />
                <p className="text-red-500 text-xl">Recommended</p>
              </>
            )}
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

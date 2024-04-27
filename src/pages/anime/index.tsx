import DashboardLayout from "@/components/layout/DashboardLayout";
import SearchWithFilter from "@/components/module/SearchWithFilter";
import {
  getAllAnimePaginated,
  getAllGenre,
  searchAnimePaginated,
} from "@/components/apis/anime";
import { useState, useEffect, FormEvent } from "react";
import { Anime, Genre } from "@/types/anime";
import AnimeCard from "@/components/module/AnimeCard";
import { GetServerSideProps } from "next";
import { OptionValue } from "@/components/elements/FilterSelect";
import { useQueryClient } from "@tanstack/react-query";
import { BaseResponse } from "@/types/common";
import Loader from "@/components/elements/Loader";
import Head from "next/head";
import NotFound from "@/components/module/NotFound";
import { searchAnimeByGenrePaginated } from "@/components/apis/anime";
import toast from "react-hot-toast";
import { NEXT_SEO_DEFAULT } from "../../../next-seo-config";
import { NextSeo } from "next-seo";
interface AnimePageProps {
  genres: Genre[];
}

export const runtime = 'experimental-edge'
export default function anime({ genres }: AnimePageProps) {
  const updatedSEO = {
    ...NEXT_SEO_DEFAULT,
    title: "Watched Animes",
    description: "Collection and Reviews of Aster's Watched Animes.",
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://animu.monemone.site/anime',
        title: 'Watched Animes',
        description: "Collection and Reviews of Aster's Watched Animes.",
        siteName: 'Aster\'s Corner',
      }
  };

  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [genre, setGenre] = useState<string>("all");
  const [page, setPage] = useState<number>(0);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [paramString, setParamString] = useState<string>("");
  const [animes, setAnimes] = useState<Anime[]>([]);

  const handleGenreOnChange = (genre: string) => {
    setIsEnd(false);
    setIsEnabled(true);
    setPage(0);
    setGenre(genre);
  };
  const { data, isLoading, isFetching, isError } = isEnabled
    ? searchAnimeByGenrePaginated(genre, page)
    : !isSearch
      ? getAllAnimePaginated(page)
      : searchAnimePaginated(paramString, page);

  const queryClient = useQueryClient();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEnabled(false);
    setIsEnd(false);
    setPage(0);

    const formData = new FormData(e.target as HTMLFormElement);
    const ani = formData.get("anime");
    const gen = formData.get("select");

    if (ani == "" && (gen == "all" || gen == null)) {
      setIsSearch(false);
      setParamString("");
      const data = queryClient.getQueryData([
        "anime_list",
        page,
      ]) as BaseResponse<Anime[]>;
      setAnimes(data.data);
    } else {
      let query = "";
      if (ani) {
        query += "&title=" + ani;
      }
      if (gen) {
        query += "&genre_id=" + gen;
      }

      if (paramString != query) {
        setAnimes([]);
        setIsSearch(true);
        setParamString(query);
      }
    }
  };

  useEffect(() => {
    if (data && data.data != null && animes != data.data) {
      if (page == 0) setAnimes(data.data);
      else setAnimes(() => [...animes, ...data.data]);
      if (data.data.length == 0 || data.data.length < 25) {
        setIsEnd(true);
        if (page != 0) {

          toast.success("Sorry, that's all!", {
            style: {
              border: "1px solid #FF0000", // Red border color
              padding: "16px",
              color: "#FF0000", // Red text color
            },
            iconTheme: {
              primary: "#FF0000", // Darker red primary color for the icon theme
              secondary: "#F8F8F8", // White-ish or slate-ish secondary color for the icon theme
            },
          });
        }
      }
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Watched Animes</title>
        <meta
          name="description"
          content="Collection and Reviews of Aster's Watched Animes."
        />
      </Head>
      <NextSeo {...updatedSEO}/>

      <main className="w-full max-w-8xl overflow-y-hidden">
        <h2 className="text-xl md:text-2xl font-bold pb-2">Watched Anime</h2>
        <SearchWithFilter
          page={page}
          selects={genres as OptionValue[]}
          search_for="anime"
          submitHandler={handleSubmit}
          setGenre={handleGenreOnChange}
        />
        {isLoading && page == 0 ? (
          <Loader />
        ) : animes.length == 0 ? (
          <div className="w-full h-full">
            <NotFound
              rem_w={20}
              rem_h={20}
              textSize_px={50}
              notFoundText="couldn't find anime"
            />
          </div>
        ) : (
          <section className="mt-10 h-auto lg:h-[78vh] overflow-y-auto scrollbar-thin scrollbar-rounded-[12px] scrollbar-track-slate-400/20 scrollbar-thumb-emerald-200/80">
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-y-4 gap-x-4 md:gap-y-6 md:gap-x-8 xl:pr-4">
              {animes.map((anime, index) => {
                return <AnimeCard key={index} data={anime} />;
              })}
            </section>
            <div className="mt-5 pb-2 w-full flex justify-center items-center">
              {!isEnd && animes.length >= 15 && (
                <button
                  onClick={() => setPage(page + 1)}
                  className={"btn btn-outline " + (isLoading ? "disabled" : "")}
                >
                  {isFetching ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      loading
                    </>
                  ) : (
                    <>view more</>
                  )}
                </button>
              )}
            </div>
          </section>
        )}
      </main>
    </>
  );
}

anime.getLayout = function getLayout(page: React.ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getServerSideProps: GetServerSideProps<AnimePageProps> = async (
  context
) => {
  const response = await getAllGenre();

  return {
    props: {
      genres: response.data,
    },
  };
};

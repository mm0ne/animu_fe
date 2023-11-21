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
import toast from "react-hot-toast";

interface AnimePageProps {
  genres: Genre[];
}

export default function anime({ genres }: AnimePageProps) {
  const [page, setPage] = useState<number>(0);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [paramString, setParamString] = useState<string>("");
  const [animes, setAnimes] = useState<Anime[]>([]);
  const { data, isLoading, isFetching, isError } = !isSearch
    ? getAllAnimePaginated(page)
    : searchAnimePaginated(paramString, page);

  const queryClient = useQueryClient();

  const getNextPage = async () => {
    setPage(page + 1);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const ani = formData.get("anime");
    const gen = formData.get("select");
    setPage(0);
    if (ani == "" && (gen == "all" || gen == null)) {
      setIsSearch(false);
      setParamString("");
      const data = queryClient.getQueryData([
        "anime_list",
        page,
      ]) as BaseResponse<Anime[]>;
      setAnimes([]);
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
    if (data && data.data && animes != data.data) {
      setAnimes(() => [...animes, ...data.data]);
      console.log(data)
    }
  }, [data]);

  return (
    <>
      <Head>
        <title> Watched Anime</title>
        <meta
          name="description"
          content="List and reviews of animes I have watched"
        />
      </Head>
      {isLoading && page == 0 ? (
        <Loader />
      ) : (
        <main className="w-full max-w-7xl pl-2 overflow-y-hidden">
          <h2 className="text-2xl font-bold pb-2">Watched Anime</h2>
          <SearchWithFilter
            selects={genres as OptionValue[]}
            search_for="anime"
            submitHandler={handleSubmit}
          />
          {animes.length == 0 ? (
            <NotFound
              rem_w={20}
              rem_h={20}
              textSize_px={50}
              notFoundText="couldn't find anime"
            />
          ) : (
            <section className="mt-10 h-[78vh] overflow-y-scroll">
              <section className="grid grid-cols-5 gap-y-4 gap-x-8 pr-4">
                {animes.map((anime, index) => {
                  return <AnimeCard key={index} data={anime} />;
                })}
              </section>
              <div className="mt-5 w-full flex justify-center items-center">
                <button
                  onClick={getNextPage}
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
              </div>
            </section>
          )}
        </main>
      )}
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

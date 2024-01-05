import { BaseResponse } from "@/types/common";
import { api } from "./base";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { HTTPError } from "ky-universal";
import { Anime, AnimePage, Genre } from "@/types/anime";
import { UUID } from "crypto";

type RequestFnArguments = Parameters<typeof api>;

async function doApi<T = {}>(
  url: RequestFnArguments[0],
  options: RequestFnArguments[1],
  notify: boolean = false,
) {
  let toastId: string = "";
  if (notify) toastId = toast.loading("Running...");
  try {
    const response = await api(url, {
      ...options,
      headers: {},
    }).json<BaseResponse<T>>();
    if (notify) toast.success(response.message ?? "Success");
    return response;
  } catch (err) {
    let message = "Unknown error, failed. See developer tools.";
    if (err instanceof HTTPError) {
      const errorJson: BaseResponse<never> = await err.response.json();
      if (errorJson.message) message = errorJson.message;
    }

    if (notify) toast.error(message);
    throw err;
  }
}

export const getAll = <T>(...args: RequestFnArguments) =>
  doApi<T>(args[0], {
    ...args[1],
    method: "GET",
  });


export const getAnimeDetailByUUID = <T>(...args: RequestFnArguments) =>
  doApi<T>(args[0], {
    ...args[1],
    method: "GET",
  });

export const postAnime = <T>(...args: RequestFnArguments) =>
  doApi<T>(
    args[0],
    {
      ...args[1],
      method: "POST",
    },
    true,
  );

export const putAnime = <T>(...args: RequestFnArguments) =>
  doApi<T>(
    args[0],
    {
      ...args[1],
      method: "PUT",
    },
    true,
  );

export const deleteAnimeByUUID = <T>(...args: RequestFnArguments) =>
  doApi<T>(
    args[0],
    {
      ...args[1],
      method: "DELETE",
    },
    true,
  );

export const getAllAnimePaginated = (page: number) =>
  useQuery({
    queryKey: ["anime_list", page],
    queryFn: () => getAll<Anime[]>("all/" + page),
  });

export const searchAnimePaginated = (param_str: string, page: number) =>
  useQuery({
    queryKey: ["anime_search", param_str, page],
    queryFn: () => getAll<Anime[]>("search?page=" + page + param_str),
  });

export const searchAnimeByGenrePaginated = (genre_id:string, page: number, is_enabled: boolean = true) =>
  useQuery({
    queryKey: ["anime_search", genre_id, page],
    queryFn: () => getAll<Anime[]>("search?page=" + page + "&genre_id=" + genre_id),
    enabled: is_enabled,
  });

export const getAnimeDetail = (uuid: UUID) =>
  useQuery({
    queryKey: ["anime_detail", uuid],
    queryFn: () => getAnimeDetailByUUID<AnimePage>("detail/" + uuid),
    enabled: !(uuid == undefined),
  });

export const getAllGenre = async () => {
  return await getAll<Genre[]>("genre/all");
};

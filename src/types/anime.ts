import { UUID } from "crypto";

export type Anime = {
  id?: UUID;
  title_jp: string;
  title_eng: string;
  rating: Float32Array;
  image_link: string;
  anime_genre_relation: GenreJoinReponse[];
};

export type AnimePage = {
  anime_detail: AnimeDetail;
  anime_alias: Alias[];
} & Anime;

export interface AnimeDetail {
  id: UUID;
  created_at: string;
  description: string;
  review: string;
  is_recommended: boolean;
  mal_link?: string;
  seasons: number;
  year: number;
}

export interface GenreJoinReponse {
  anime_genre: Genre;
}

export interface Genre {
  id?: number;
  name: string;
}

export interface Alias {
  name: string;
}

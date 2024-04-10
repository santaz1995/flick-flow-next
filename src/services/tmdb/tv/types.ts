import { TmdbAPIListResponse } from '@/services/tmdb/types';

export enum TVShow {
  airing_today = 'airing_today',
  on_the_air = 'on_the_air',
  popular = 'popular',
  top_rated = 'top_rated',
}

export type TVShowListType = keyof typeof TVShow;

export type TVShowListParams = {
  language?: string;
  page?: number;
};

export type SearchTVShowParams = TVShowListParams & {
  query: string;
  include_adult?: boolean;
  first_air_date_year?: number;
};

export type TVShowList = Partial<{
  poster_path: string;
  popularity: number;
  id: number;
  backdrop_path: string | null;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: Array<string>;
  genre_ids: Array<number>;
  original_language: string;
  vote_count: number;
  name: string;
  original_name: string;
}>;

export type TVShowListResponse = TmdbAPIListResponse<TVShowList>;

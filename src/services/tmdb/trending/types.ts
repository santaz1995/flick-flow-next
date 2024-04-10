import { MediaType, TmdbAPIListResponse } from '@/services/tmdb/types';

export type ListType = 'all' | 'tv' | 'movie';

export type TrendingListParams = {
  language?: string;
  page?: number;
  query?: string;
  with_genres?: string | string[];
};

export type TTrendingListParams = Pick<
  TrendingListParams,
  'query' | 'with_genres'
> & {
  section: ListType;
};

export type TrendingList = {
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  original_language: string;
  title?: string;
  name?: string;
  backdrop_path?: string;
  media_type: MediaType;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type DatesType = {
  maximum: string;
  minimum: string;
};

export type TrendingListResponse = TmdbAPIListResponse<TrendingList> & {
  dates: DatesType;
};

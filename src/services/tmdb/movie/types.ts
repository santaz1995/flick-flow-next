import { MediaType, TmdbAPIDetailResponse, TmdbAPIListResponse } from '@/services/tmdb/types';

export type ListType =
  | 'now_playing'
  | 'popular'
  | 'top_rated'
  | 'upcoming'
  | 'today'
  | 'week'
  | 'year';

export type MovieListParams = {
  language?: string;
  page?: number;
  query?: string;
  with_genres?: string | string[];
};

export type TMovieListParams = Pick<
  MovieListParams,
  'query' | 'with_genres'
> & {
  section: ListType;
};

export type MovieList = {
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: Array<number>;
  id: number;
  original_title: string;
  original_language: string;
  media_type: MediaType;
  title?: string;
  name?: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
};

export type DatesType = {
  maximum: string;
  minimum: string;
};

export type MovieListResponse = TmdbAPIListResponse<MovieList> & {
  dates: DatesType;
};

type GenreType = {
  id: number;
  name: string;
};

type ProductionCompanyType = {
  name: string;
  id: number;
  logo_path?: string;
  origin_country: string;
};

type ProductionCountryType = {
  iso_3166_1: string;
  name: string;
};

type LanguageType = {
  iso_639_1: string;
  name: string;
};

export type MovieDetailResponse = Omit<MovieList, 'genre_ids'> & {
  belongs_to_collection?: Record<string, unknown>;
  budget: number;
  genres: Array<GenreType>;
  homepage?: string;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  production_companies: Array<ProductionCompanyType>;
  production_countries: Array<ProductionCountryType>;
  revenue: number;
  runtime?: number;
  spoken_languages: Array<LanguageType>;
  status:
    | 'Rumored'
    | 'Planned'
    | 'In Production'
    | 'Post Production'
    | 'Released'
    | 'Canceled';
  tagline?: string;
};

export enum MovieVideoTypeEnum {
  Trailer = 'Trailer'
}

export enum MovieVideoSiteEnum {
  Youtube = 'YouTube'
}


export type MovieVideo = {
  name: string;
  key: string;
  site: MovieVideoSiteEnum;
  type: MovieVideoTypeEnum;
  id: string;
};

export type MovieVideoResponse = TmdbAPIDetailResponse<MovieVideo>;

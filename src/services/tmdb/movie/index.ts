import {
  ListType, MovieDetailResponse,
  MovieListParams,
  MovieListResponse, MovieVideoResponse,
  TMovieListParams,
} from './types';
import { tmdbServerFetcher } from '@/services/tmdb/utils';

const SEARCH_RESOURCE_PATH = `/search/movie`;
const DISCOVER_RESOURCE_PATH = `/discover/movie`;

const movieListEndpoint = ({
  section,
  query,
  with_genres,
}: TMovieListParams) => {
  if (query) {
    return SEARCH_RESOURCE_PATH;
  }
  if (with_genres) {
    return DISCOVER_RESOURCE_PATH;
  }
  return `/movie/${section}`;
};

export const getMovieListServer = (
  section: ListType = 'popular',
  params?: MovieListParams
) =>
  tmdbServerFetcher<MovieListResponse>(
    movieListEndpoint({
      section,
      query: params?.query,
      with_genres: params?.with_genres,
    }),
    params
  );

export const getMovieDetailServer = (id: number) =>
  tmdbServerFetcher<MovieDetailResponse>(`/movie/${id}`);

export const getMovieVideosServer = (id: number) =>
  tmdbServerFetcher<MovieVideoResponse>(`/movie/${id}/videos`);


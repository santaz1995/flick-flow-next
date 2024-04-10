import type {
  SearchTVShowParams,
  TVShowListParams,
  TVShowListResponse,
  TVShowListType,
} from './types';
import { tmdbServerFetcher } from '@/services/tmdb/utils';

export const getTVShowListServer = (
  listType: TVShowListType,
  params?: TVShowListParams
) => tmdbServerFetcher<TVShowListResponse>(`/tv/${listType}`, params);

type UseTVShowByListArgs = {
  listType: TVShowListType;
  params?: TVShowListParams;
  fallbackData?: TVShowListResponse;
};

const TV_SHOW_SEARCH_RESOURCE_PATH = '/search/tv';

export const getTVShowSearchResultList = (params: SearchTVShowParams) =>
  tmdbServerFetcher<TVShowListResponse>(TV_SHOW_SEARCH_RESOURCE_PATH, params);


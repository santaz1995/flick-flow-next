import type {
  ListType,
  TrendingListParams,
  TrendingListResponse,
  TTrendingListParams,
} from './types';
import { tmdbServerFetcher } from '@/services/tmdb/utils';

const trendingListEndpoint = ({ section }: TTrendingListParams) => {
  return `/trending/${section}/day`;
};

export const getTrendingListServer = (
  section: ListType = 'all',
  params?: TrendingListParams
) =>
  tmdbServerFetcher<TrendingListResponse>(
    trendingListEndpoint({
      section,
      query: params?.query,
      with_genres: params?.with_genres,
    }),
    params
  );

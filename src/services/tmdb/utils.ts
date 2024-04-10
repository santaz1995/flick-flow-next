import { TMDB_API_KEY, TMDB_API_URL } from './constants';
import { fetcher } from '@/libs/utils/fetcher';

export const tmdbServerFetcher = <ResType>(path: string, params?: any) =>
  fetcher<ResType>(`${TMDB_API_URL}${path}`, {
    ...params,
    api_key: TMDB_API_KEY,
    language: 'uk-UA',
  });

export const tmdbFetcher = <ResType>([path, params]: [
  path: string,
  params?: any
]) => fetcher<ResType>(`/api/tmdb${path}`, params);

export type UseTmdbSWRArgs<ResType> = {
  path: string;
  params?: any;
  fallbackData?: ResType;
  isReady?: boolean;
};


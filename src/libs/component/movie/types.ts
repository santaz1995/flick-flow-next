import { MovieDetailResponse } from '@/services/tmdb/movie/types';

export type MovieDetailSectionProps = {
  isLoading?: boolean;
  data: MovieDetailResponse;
};

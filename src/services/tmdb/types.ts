export type TmdbAPIListResponse<ResultItemType> = {
  page: number;
  results: Array<ResultItemType>;
  total_results: number;
  total_pages: number;
};

export type TmdbAPIDetailResponse<ResultItemType> = {
  id: number;
  results: Array<ResultItemType>;
};


export enum MediaType {
  Movie = 'movie',
  Person = 'person',
  Tv = 'tv',
}

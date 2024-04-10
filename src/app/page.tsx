import { Grid } from '@chakra-ui/react';
import MoviesSlider from '@/libs/component/movie/MoviesSlider';
import { getTrendingListServer } from '@/services/tmdb/trending';
import { TrendingListResponse } from '@/services/tmdb/trending/types';
import { getMovieListServer } from '@/services/tmdb/movie';
import { MovieListResponse } from '@/services/tmdb/movie/types';
import { getTVShowListServer } from '@/services/tmdb/tv';
import type { TVShowListResponse } from '@/services/tmdb/tv/types';
import TrendingSlider from '@/libs/component/trending/TrendingSlider';
import TvShowSlider from '@/libs/component/tv/TvShowSlider';

async function getTrendingList(): Promise<TrendingListResponse> {
  return getTrendingListServer('all');
}

async function getMoviesList(): Promise<MovieListResponse> {
  return getMovieListServer('popular');
}

async function getTVShowList(): Promise<TVShowListResponse> {
  return getTVShowListServer('popular');
}

// @ts-ignore
const Home = async () => {
  const trendingData = await getTrendingList();
  const popularMovieData = await getMoviesList();
  const popularTvShowData = await getTVShowList();

  return (
    <Grid rowGap={8} mb={8} w="full" padding={[0, 8]}>
      <TrendingSlider sectionTitle="У тренді" movies={trendingData?.results} />
      <MoviesSlider
        sectionTitle="Популярні фільми"
        movies={popularMovieData?.results}
      />
      <TvShowSlider
        sectionTitle="Популярні телешоу"
        shows={popularTvShowData?.results}
      />
    </Grid>
  );
};

export default Home;

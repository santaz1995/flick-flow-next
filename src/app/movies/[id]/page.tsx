import { Grid } from '@chakra-ui/react';
import MovieDetailAdditionalInfo from '@/libs/component/movie/AdditionalInfo';
import BackButton from '@/libs/component/shared/BackButton';
import { getMovieDetailServer, getMovieVideosServer } from '@/services/tmdb/movie';
import MovieDetailMeta from '@/libs/component/movie/Meta';
import MovieAttachment from '@/libs/component/shared/MovieAttachment';
import { MovieVideoSiteEnum, MovieVideoTypeEnum } from '@/services/tmdb/movie/types';
import { generateYoutubeUrlByTMDBKey } from '@/libs/utils/generateYoutubeUrlByTMDBKey';

const Page = async ({
  params: { id },
}: {
  params: { id: string }
}) => {
  const movieId = Number(id);
  const data = await getMovieDetailServer(movieId);
  const videos = await getMovieVideosServer(movieId);

  const videoTrailer = videos.results.find((video) => {
    return video.site === MovieVideoSiteEnum.Youtube && video.type === MovieVideoTypeEnum.Trailer;
  });

  return (
    <Grid paddingX={8} gridGap={[8, 16]}>
      <Grid rowGap={8} flexBasis={['100%']}>
        <BackButton />
        <MovieDetailMeta data={data} trailerUrl={generateYoutubeUrlByTMDBKey(videoTrailer?.key)} />
      </Grid>

      <Grid
        gap={8}
        alignItems="center"
        templateColumns={{ base: 'minmax(0, 1fr)', md: '1fr minmax(0, 2fr)' }}
        flexBasis={['100%']}
      >
        <MovieDetailAdditionalInfo data={data} id={movieId ?? 0} />
      </Grid>
      <MovieAttachment videos={videos?.results} images={[]} />
    </Grid>
  );
};

export default Page;

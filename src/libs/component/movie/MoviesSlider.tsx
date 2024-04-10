import SliderContainer from '@/libs/component/shared/SliderContainer';
import PosterCard from '@/libs/component/shared/PosterCard';
import { MediaType } from '@/services/tmdb/types';
import { MovieList } from '@/services/tmdb/movie/types';

type MoviesSliderProps = {
  movies?: Array<MovieList>;
  sectionTitle?: string;
};

const MoviesSlider = ({ sectionTitle, movies }: MoviesSliderProps) => {
  const slicedMovies = movies?.slice(0, 10);

  return (
    <SliderContainer sectionTitle={sectionTitle}>
      {slicedMovies?.map((movie, idx) => (
        <PosterCard
          name={movie.name ?? movie.title}
          id={movie.id ?? 0}
          imageUrl={movie.poster_path}
          mediaType={MediaType.Movie}
          key={`${movie.name ?? movie.title}-${movie.id}`}
          layout="flex"
          isLastItem={idx === slicedMovies.length - 1}
          rating={Math.round(movie.vote_average * 10)}
        />
      ))}
    </SliderContainer>
  );
};

export default MoviesSlider;

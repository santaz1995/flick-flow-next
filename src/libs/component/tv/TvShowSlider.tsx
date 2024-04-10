import { TVShowList } from '@/services/tmdb/tv/types';
import SliderContainer from '@/libs/component/shared/SliderContainer';
import PosterCard from '@/libs/component/shared/PosterCard';
import { MediaType } from '@/services/tmdb/types';

type TvShowSliderProps = {
  shows?: Array<TVShowList>;
  sectionTitle?: string;
};

const TvShowSlider = ({ sectionTitle, shows }: TvShowSliderProps) => {
  const slicedShows = shows?.slice(0, 10);

  return (
    <SliderContainer sectionTitle={sectionTitle}>
      {slicedShows?.map((show, idx) => (
        <PosterCard
          name={show.name}
          id={show.id ?? 0}
          imageUrl={show.poster_path}
          mediaType={MediaType.Tv}
          key={`${show.name}-${show.id}`}
          layout="flex"
          isLastItem={idx === slicedShows.length - 1}
        />
      ))}
    </SliderContainer>
  );
};

export default TvShowSlider;

'use client';
import SliderContainer from '@/libs/component/shared/SliderContainer';
import PosterCard from '@/libs/component/shared/PosterCard';
import { MediaType } from '@/services/tmdb/types';
import { TrendingList } from '@/services/tmdb/trending/types';
import { useRadioGroup } from '@chakra-ui/radio';
import RadioCard from '@/libs/component/shared/RadioCard';
import { Flex, Text, useColorMode } from '@chakra-ui/react';

type MoviesSliderProps = {
  movies?: Array<TrendingList>;
  sectionTitle?: string;
};

const TrendingSlider = ({ sectionTitle, movies }: MoviesSliderProps) => {
  const slicedMovies = movies?.slice(0, 10);
  const { colorMode } = useColorMode();
  const options = ['Сьогодні', 'Цього тижня', 'Рік'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'filter',
    defaultValue: 'Сьогодні',
    onChange: (value) => {
      console.log(value)
    },
  })

  return (
    <SliderContainer sectionTitle={sectionTitle} filters={
      <Flex borderWidth='2px' borderColor={colorMode === 'light' ? 'gray.800' : 'whiteAlpha.700'} borderRadius='24' ml={5}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              <Text fontSize="0.6em">{value}</Text>
            </RadioCard>
          )
        })}
      </Flex>}>
      {slicedMovies?.map((movie, idx) => (
        <PosterCard
          name={movie.name ?? movie.title}
          id={movie.id ?? 0}
          imageUrl={movie.poster_path}
          mediaType={movie.media_type as MediaType}
          key={`${movie.name ?? movie.title}-${movie.id}`}
          layout="flex"
          isLastItem={idx === slicedMovies.length - 1}
          rating={Math.round(movie.vote_average * 10)}
        />
      ))}
    </SliderContainer>
  );
};

export default TrendingSlider;

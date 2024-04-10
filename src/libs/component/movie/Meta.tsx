'use client';
import { Badge, Flex, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

import type { MovieDetailSectionProps } from './types';
import DetailMeta from '@/libs/component/shared/DetailMeta';

type MovieDetailMetaProps = MovieDetailSectionProps & {
  trailerUrl?: string;
};

const MovieDetailMeta = ({ data, trailerUrl }: MovieDetailMetaProps) => {
  const { colorMode } = useColorMode();

  return (
    <DetailMeta
      data={{
        name: data.title ?? data.name ?? '',
        tagline: data.tagline,
        status: data.status,
        releasedDate: data.release_date,
        posterPath: data.poster_path,
        overview: data.overview,
        trailerUrl: trailerUrl,
      }}
      extras={
        <Flex wrap="wrap" gridGap={2}>
          {data.genres.map((genre) => (
            <Badge
              cursor="pointer"
              variant={colorMode === 'light' ? 'solid' : 'outline'}
              colorScheme="gray"
              key={`${genre.name}-${genre.id}`}
              as={Link}
              href={`/movies/genre/${genre.id}?page=1`}
            >
              {genre.name}
            </Badge>
          ))}
        </Flex>
      }
    />
  );
};

export default MovieDetailMeta;

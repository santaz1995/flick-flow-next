import {
  AspectRatio,
  Box,
} from '@chakra-ui/react';
import Link from 'next/link';
import { MediaType } from '@/services/tmdb/types';
import MotionBox from '@/libs/component/shared/MotionBox';
import PosterImage from '@/libs/component/shared/PosterImage';
import PosterLabel from '@/libs/component/shared/PosterLabel';


const pathMap: Record<MediaType, string> = {
  movie: '/movies',
  tv: '/tv',
  person: '/person',
};

type PosterCardProps = {
  id: number;
  name?: string;
  imageUrl?: string;
  mediaType: MediaType;
  layout: 'flex' | 'grid';
  isLastItem?: boolean;
  rating?: number;
};

const PosterCard = ({
  id,
  name,
  imageUrl,
  mediaType,
  layout,
  isLastItem,
  rating,
}: PosterCardProps) => {
  return (
    <Link href={`${pathMap[mediaType]}/${id}`} passHref legacyBehavior>
      <MotionBox
        as="a"
        position="relative"
        textAlign="center"
        whileHover={{ scale: 1.05 }}
        role="group"
        paddingRight={isLastItem ? [8, 6] : undefined}
        {...(layout === 'flex' && { flex: '0 0 auto' })}
      >
        {layout === 'grid' ? (
          <AspectRatio
            borderRadius={24}
            ratio={3.6 / 5}
            _groupHover={{ backgroundColor: 'black' }}
          >
            <PosterImage src={imageUrl} layout={layout} />
          </AspectRatio>
        ) : (
          <Box
            as="button"
            borderRadius={24}
            _groupHover={{ backgroundColor: 'black' }}
          >
            <PosterImage src={imageUrl} layout={layout} />
          </Box>
        )}
        <PosterLabel label={name ?? ''} />
      </MotionBox>
    </Link>
  );
};

export default PosterCard;

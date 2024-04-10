import {
  AspectRatio,
  Badge,
  Box,
  Flex,
  Grid,
  Heading, Image,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import PosterImage from '@/libs/component/shared/PosterImage';
import { BionifiedParagraph } from '@/libs/component/shared/BionifiedParagraph';
import MotionBox from '@/libs/component/shared/MotionBox';
import PosterLabel from '@/libs/component/shared/PosterLabel';
import PlayTrailerButton from '@/libs/component/shared/PlayTrailerButton';

type DetailData = {
  name: string;
  overview?: string;
  status: string;
  tagline?: string;
  releasedDate: Date | string;
  posterPath?: string;
  trailerUrl?: string;
};

type DetailMetaProps = {
  data: DetailData;
  extras?: React.ReactNode;
};

const DetailMeta = ({ data, extras }: DetailMetaProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      display={{ base: 'grid', md: 'flex' }}
      alignItems="center"
      gap={{ base: 8, md: 16 }}
    >
      <MotionBox
        as="a"
        position="relative"
        textAlign="center"
        whileHover={{ scale: 1.05 }}
        role="group"
      >
        <AspectRatio
          ratio={3.6 / 5}
          minWidth={{ base: undefined, md: 300 }}
          maxHeight={['100%']}
          maxWidth={['100%']}
          marginX={[8, '25%', 0]}
        >
          <PosterImage src={data.posterPath} />
        </AspectRatio>
        <PosterLabel label={data.name} playIcon={
          data.trailerUrl ? <PlayTrailerButton trailerUrl={data.trailerUrl} trailerName={data.name} /> : null
        } />

      </MotionBox>

      <Grid gap={4}>
        <Heading
          textAlign={['center', 'center', 'inherit']}
          size="lg"
          letterSpacing={2}
          textTransform="uppercase"
          fontWeight="bold"
          marginX={[8, 8, 0]}
        >
          {data.name}
        </Heading>

        <Text
          textAlign={['center', 'center', 'inherit']}
          fontSize="0.7rem"
          fontWeight="light"
          letterSpacing={2}
          textTransform="uppercase"
          marginTop={4}
          marginX={[8, 8, 0]}
        >
          {data.tagline}
        </Text>

        <Flex gridColumnGap={2} alignItems="center">
          <Badge variant={colorMode === 'light' ? 'solid' : 'outline'}>
            {data.status}
          </Badge>

          <Text textTransform="uppercase" letterSpacing={1} fontSize="xs">
            {new Date(data.releasedDate).getFullYear()}
          </Text>
        </Flex>

        {extras ? (
          <Flex wrap="wrap" gridGap={2}>
            {extras}
          </Flex>
        ) : null}

        {data.overview && (
          <BionifiedParagraph textAlign="justify">
            {data.overview}
          </BionifiedParagraph>
        )}
      </Grid>
    </Box>
  );
};

export default DetailMeta;

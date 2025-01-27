import { Flex, Grid, Link, Text } from '@chakra-ui/react';
import Image from 'next/image';

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center" padding="8">
      <Text fontSize="sm">
        2024 -{' '}
        <Link fontWeight="bold" href="https://santaz1995.github.io/next-portfolio/" isExternal>
          santaz.github
        </Link>
      </Text>

      <Grid gap={1} marginLeft="auto" textAlign="right">
        <Text textTransform="lowercase" fontSize="0.6rem">
          Powered by
        </Text>
        <Link href="https://themoviedb.org" isExternal>
          <Image src="/tmdb.svg" width="50" height="20" alt="tmdb" />
        </Link>
      </Grid>
    </Flex>
  );
};

export default Footer;

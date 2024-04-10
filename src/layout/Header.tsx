import { Flex, Heading, IconButton, Grid, useMediaQuery, Image, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { GoSearch } from 'react-icons/go';
import Auth from '@/layout/Auth';
import ThemeToggle from '@/layout/ThemeToggle';
import AppMenu from '@/layout/AppMenu';

const Header = () => {
  const [isBiggerThanMobile] = useMediaQuery('(min-width: 750px)');
  const { colorMode } = useColorMode();

  return (
    <Flex as="header" width="full" align="center" padding="8">
      <Link href="/">
        <Image src={`/logo-${colorMode}.svg`} alt={'flickFlow'} width={120}>
        </Image>
      </Link>

      {isBiggerThanMobile && <Grid templateColumns="repeat(3, 1fr)" gap={10} margin="auto">
        <Link href="/movies">
          <Heading as="h2" fontSize={['md', 'base']}>
            Фільми
          </Heading>
        </Link>
        <Link href="/tv">
          <Heading as="h2" fontSize={['md', 'base']}>
            Серіали
          </Heading>
        </Link>
        <Link href="/person">
          <Heading as="h2" fontSize={['md', 'base']}>
            Персони
          </Heading>
        </Link>
      </Grid>}

      <Grid templateColumns="repeat(4, 1fr)" gap={2} marginLeft="auto">
        <Link href="/search" passHref legacyBehavior>
          <IconButton
            as="a"
            aria-label="search"
            icon={<GoSearch />}
            background="none"
          />
        </Link>
        <ThemeToggle />
        <Auth />
        <AppMenu />
      </Grid>
    </Flex>
  );
};

export default Header;

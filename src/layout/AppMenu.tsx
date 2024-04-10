import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay, Flex,
  Heading,
  IconButton, Image,
  useColorMode,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';

const AppMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const [isBiggerThanMobile] = useMediaQuery('(min-width: 480px)');

  return (
    <>
      <IconButton
        marginLeft={2}
        aria-label="app-menu"
        icon={<BiMenu />}
        background="none"
        onClick={onOpen}
      />
      <Drawer
        placement={isBiggerThanMobile ? 'right' : 'top'}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <Link href="/">
              <Image src={`/logo-${colorMode}.svg`} alt={'flickFlow'} width={120}></Image>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <Link key={'movies'} href={'movies'}>
              <Flex
                marginY={4}
                alignItems="center"
                padding={2}
                borderRadius={12}
                _hover={{
                  backgroundColor:
                    colorMode === 'light' ? 'gray.200' : 'gray.600',
                }}
              >
                <Box marginLeft={4}>
                  <Heading size="sm">Фільми</Heading>
                </Box>
              </Flex>
            </Link>
            <Link key={'tv-show'} href={'tv-show'}>
              <Flex
                marginY={4}
                alignItems="center"
                padding={2}
                borderRadius={12}
                _hover={{
                  backgroundColor:
                    colorMode === 'light' ? 'gray.200' : 'gray.600',
                }}
              >
                <Box marginLeft={4}>
                  <Heading size="sm">Серіали</Heading>
                </Box>
              </Flex>
            </Link>
            <Link key={'person'} href={'person'}>
              <Flex
                marginY={4}
                alignItems="center"
                padding={2}
                borderRadius={12}
                _hover={{
                  backgroundColor:
                    colorMode === 'light' ? 'gray.200' : 'gray.600',
                }}
              >
                <Box marginLeft={4}>
                  <Heading size="sm">Персони</Heading>
                </Box>
              </Flex>
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppMenu;

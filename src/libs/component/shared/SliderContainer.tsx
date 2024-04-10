'use client';
import { Box, Flex, Heading, HStack, Spacer, useColorMode } from '@chakra-ui/react';

type SliderContainerProps = {
  sectionTitle?: string;
  children?: React.ReactNode;
  filters?: React.ReactNode;
  footer?: React.ReactNode;
};

const SliderContainer = ({
  sectionTitle,
  children,
  filters,
  footer,
}: SliderContainerProps) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      {sectionTitle && (
        <Flex marginX={{ base: 8, sm: 0 }} alignItems="center">
          <Heading
            textTransform="uppercase"
            letterSpacing={2}
            fontSize={{ base: 'md', sm: 'lg' }}
            fontWeight="400"
          >
            {sectionTitle}
          </Heading>
          {filters && filters}
        </Flex>
      )}

      <Flex paddingX={[8, 6]} overflowX="scroll">
        <Flex
          flexWrap="nowrap"
          alignItems="center"
          minHeight="250px"
          overflowX="scroll"
          overflow="visible"
          gridColumnGap={6}
        >
          {children}
        </Flex>
      </Flex>

      <Spacer height={4} />

      {footer ? (
        <HStack paddingX={{ base: 8, sm: 0 }} spacing={4}>
          {footer}
        </HStack>
      ) : null}
    </Box>
  );
};

export default SliderContainer;

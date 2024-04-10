'use client';
import { Box, useColorMode, useRadio, UseRadioProps } from '@chakra-ui/react';

interface RadioCardProps extends UseRadioProps {
  children: React.ReactNode;
}

const RadioCard = (props: RadioCardProps) => {
  const { getInputProps, getRadioProps } = useRadio(props)
  const { colorMode } = useColorMode();
  const input = getInputProps()
  const checkbox = getRadioProps()

  return (
    <Box as='label'>
      <input {...input} />
      <Box
        {...checkbox}
        cursor='pointer'
        borderRadius='24'
        _checked={{
          bg: colorMode === 'light' ? 'gray.800' : 'gray.600',
          color: 'white',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={2}
        py={2}
      >
        {props.children}
      </Box>
    </Box>
  )
};

export default RadioCard;

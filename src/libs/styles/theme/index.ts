import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { config } from './config';

const customTheme = extendTheme({
  fonts: {
    body: 'Outfit, sans-serif',
    heading: 'Outfit, sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 24,
      },
    },
    Modal: {
      sizes: {
        xl: {
          Content: {
            maxWidth: "86rem"
          },
        },
      },
    },
    Tabs: {
      variants: {
        "enclosed": {
          tabpanel: {
            p: 0,
          }
        }
      },
      baseStyle: ({ colorMode }: { colorMode: string }) => ({
        tab: {
          padding: 0,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontWeight: 700,
          _hover: {
            color:  colorMode === 'light' ? 'gray.800' : 'white',
            borderBottom: colorMode === 'light' ? 'gray.800' : 'white'
          },
          _selected: {
            color: colorMode === 'light' ? 'gray.800' : 'white'
          }
        }
      }),
    }
  },
  colors,
  config,
});

export default customTheme;

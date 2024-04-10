'use client'
import { ChakraProvider, ColorModeScript, useColorMode } from '@chakra-ui/react'
import customTheme from '@/libs/styles/theme';
import NextNprogress from 'nextjs-progressbar';
import Layout from '@/layout';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

const MyClerkProvider = ({ children }: { children: React.ReactNode }) => {
  const { colorMode } = useColorMode();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: colorMode === 'dark' ? dark : undefined,
      }}
    >
      {children}
    </ClerkProvider>
  );
};


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeScript
        initialColorMode={customTheme.config?.intialColorMode}
      />
      <NextNprogress />
      <MyClerkProvider>
        <Layout>
          {children}
        </Layout>
      </MyClerkProvider>
    </ChakraProvider>
    )
}
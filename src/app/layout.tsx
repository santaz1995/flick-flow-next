import type { Metadata } from "next";
import './globals.css';
import { Providers } from '@/app/providers';
import { APP_DESCRIPTION, APP_NAME } from '@/libs/constants/project';

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
 children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <head>
        <meta name="application-name" content={APP_NAME}/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta name="apple-mobile-web-app-title" content={APP_NAME}/>
        <meta name="format-detection" content="telephone=no"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="theme-color" content="#FFFFFF"/>
        <link rel="icon" href="/popcorn.png"/>
        <link rel="manifest" href="/manifest.json"/>
      </head>
      <body suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
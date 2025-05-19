import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import './fonts/fonts.css';
import './fonts/font-icons.rtl.css';
import './bootstrap.min.rtl.css';
import './swiper-bundle.min.rtl.css';
import './animate.css';
import './styles.rtl.css';

import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'modave - تجارت الکترونیکی چند منظوره',
  description: 'modave - تجارت الکترونیکی چند منظوره',
  icons: {
    icon: '/images/logo/favicon.png',
  },
  // viewport: {
  //   width: 'device-width',
  //   initialScale: 1,
  //   maximumScale: 1,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and Touch Icons  */}
        <link href="images/logo/favicon.png" rel="shortcut icon" />
        <link
          href="images/logo/favicon.png"
          rel="apple-touch-icon-precomposed"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script
          src="/js/bootstrap-select.min.js"
          strategy="beforeInteractive"
        />
        <Script src="/js/lazysize.min.js" strategy="lazyOnload" />
        <Script src="/js/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/multiple-modal.js" strategy="lazyOnload" />
        <Script src="/js/carousel.js" strategy="lazyOnload" />
        <Script src="/js/count-down.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}

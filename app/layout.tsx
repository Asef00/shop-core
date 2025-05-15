import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

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
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- font --> */}
        <link href="fonts/fonts.css" rel="stylesheet" />
        <link href="fonts/font-icons.rtl.css" rel="stylesheet" />
        <link href="css/bootstrap.min.rtl.css" rel="stylesheet" />
        <link href="css/swiper-bundle.min.rtl.css" rel="stylesheet" />
        <link href="css/animate.css" rel="stylesheet" />
        <link
          href="https://sibforms.com/forms/end-form/build/sib-styles.css"
          rel="stylesheet"
        />
        <link href="css/styles.rtl.css" rel="stylesheet" type="text/css" />
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
      </body>
    </html>
  );
}

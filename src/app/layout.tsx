import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
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
  title: {
    default: '世界時鐘 — 全球時差轉換器｜即時時間對照',
    template: '%s｜時區轉換器',
  },
  description:
    '免費世界時鐘，即時顯示全球 45 個城市的當地時間。支援時差對照、最佳通話時段、夏令時間查詢。',
  metadataBase: new URL('https://timezone.crispy.today'),
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    siteName: '時區轉換器',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NG6QCE7NLF"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NG6QCE7NLF');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

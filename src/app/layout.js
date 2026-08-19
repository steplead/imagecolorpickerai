import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://imagecolorpickerai.com'),
  title: "Image Color Picker - Professional Hex Code Extraction | ImageColorPickerAI",
  description: "Free online Image Color Picker. Extract precise Hex codes, RGB, and discover Traditional Chinese & Japanese color palettes instantly. No sign-up required.",
  keywords: 'image color picker, hex color picker, color extractor, RGB to HEX, CMYK converter, traditional Chinese colors, Japanese colors, color palette generator, online color tool',
  authors: [{ name: 'ImageColorPickerAI Team', url: 'https://imagecolorpickerai.com' }],
  creator: 'ImageColorPickerAI',
  publisher: 'ImageColorPickerAI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: "Image Color Picker AI - Traditional Color Encyclopedia",
    description: "Extract precise hex codes and cultural history from any image using AI.",
    url: "https://imagecolorpickerai.com",
    siteName: "ImageColorPickerAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Image Color Picker AI Tool Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Color Picker AI",
    description: "AI-powered color extraction and cultural mapping.",
    images: ["/og-image.png"],
  },
  /* icons handled automatically by src/app/icon.png */
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'zh-Hans': '/zh',
      'ja': '/ja',
      'es': '/es',
      'fr': '/fr',
      'de': '/de',
      'pt': '/pt',
    },
  },
  appleWebApp: {
    title: 'ColorPicker',
    statusBarStyle: 'default',
  },
  applicationName: 'ColorPicker',
  manifest: '/manifest.json',
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FryingBeansFooter from '@/components/FryingBeansFooter';
import { headers } from 'next/headers';

// Map URL prefix to <html lang>. Injected by middleware as x-pathname so the
// root layout (the only place <html> can be defined) can render the correct
// language for /zh, /ja, /es, /fr, /de, /pt.
function resolveLang(pathname) {
  if (!pathname) return 'en';
  if (pathname.startsWith('/zh')) return 'zh';
  if (pathname.startsWith('/ja')) return 'ja';
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/de')) return 'de';
  if (pathname.startsWith('/pt')) return 'pt';
  return 'en';
}

export default async function RootLayout({ children }) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';
  const lang = resolveLang(pathname);

  return (
    <html lang={lang}>
      <head>
        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-neutral-50 text-neutral-900`}
        suppressHydrationWarning
      >
        <Header />
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>

        {/* Protocol 5: Internal Link Circulation */}
        <FryingBeansFooter />

        <Footer />

        {/* AdSense Auto Ads - Replace with real ID when approved */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2230976194676399"
          crossOrigin="anonymous"
          strategy="lazyOnload"
          fetchPriority="low"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3SWWDX8EVF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3SWWDX8EVF');
          `}
        </Script>
      </body>
    </html>
  );
}

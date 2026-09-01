import HomeView from '../components/HomeView';

export const metadata = {
  title: 'Image Color Picker – Pick HEX, RGB & HSL From Any Image',
  description:
    'Upload an image and pick HEX, RGB, and HSL colors from any pixel. Free, no sign-up, and processed directly in your browser.',
  keywords:
    'image color picker, hex color picker, color extractor, pick color from image, rgb to hex, hsl color picker, color palette from image, online color tool',
  alternates: {
    canonical: 'https://imagecolorpickerai.com/',
    languages: {
      en: 'https://imagecolorpickerai.com/',
      'zh-Hans': 'https://imagecolorpickerai.com/zh',
      ja: 'https://imagecolorpickerai.com/ja',
      es: 'https://imagecolorpickerai.com/es',
      fr: 'https://imagecolorpickerai.com/fr',
      de: 'https://imagecolorpickerai.com/de',
      pt: 'https://imagecolorpickerai.com/pt',
      'x-default': 'https://imagecolorpickerai.com/',
    },
  },
  openGraph: {
    title: 'Image Color Picker – Pick HEX, RGB & HSL From Any Image',
    description:
      'Upload an image and pick HEX, RGB, and HSL colors from any pixel. Free, no sign-up, and processed directly in your browser.',
    url: 'https://imagecolorpickerai.com',
    siteName: 'ImageColorPickerAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image Color Picker tool preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Image Color Picker – Pick HEX, RGB & HSL From Any Image',
    description:
      'Upload an image and pick HEX, RGB, and HSL colors from any pixel. Free, no sign-up, and processed directly in your browser.',
    images: ['/og-image.png'],
  },
};

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I pick a color from an image?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Upload a JPG, PNG, or WebP image, then click or tap any point on the picture (or use the arrow keys to nudge the cursor). The tool reads that exact pixel and shows its HEX, RGB, and HSL values instantly.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this image color picker free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. The picker runs entirely in your browser — there is no sign-up and no limit on how many images you can open in a session.',
        },
      },
      {
        '@type': 'Question',
        name: 'What color formats does the tool show?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For every picked pixel it displays HEX (e.g. #FF5733), RGB, and HSL, each with a one-click copy button so you can paste straight into CSS or design software.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can it match my color to a traditional palette?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When a picked color is close to a shade in our traditional-color library, we show the nearest match and its origin (Chinese, Japanese, Pantone, or natural), with a link to its full details page.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does the color picker work on mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Upload, tap-to-pick, and copy all work with touch and the on-screen keyboard, and the page scrolls normally while you interact with the picture.',
        },
      },
    ],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ImageColorPickerAI',
    alternateName: 'Image Color Picker AI',
    url: 'https://imagecolorpickerai.com',
    description:
      'Free online image color picker that extracts HEX, RGB, and HSL from any image and links to traditional color meanings.',
  };

  const webApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'ImageColorPickerAI',
    url: 'https://imagecolorpickerai.com',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description:
      'Upload an image and pick the exact HEX, RGB, and HSL value of any pixel directly in your browser.',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <HomeView locale="en" />
    </>
  );
}

import HomeView from '../components/HomeView';

export const metadata = {
  title: 'Image Color Picker - Extract Hex Codes from Any Image | ImageColorPickerAI',
  description: 'Free online image color picker. Extract HEX, RGB, CMYK codes and discover Traditional Chinese and Japanese color meanings instantly. AI-powered and no signup.',
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
      'x-default': '/',
    },
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I pick a color from an image?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply upload your JPG or PNG image to our tool. Use your mouse to hover over any area of the image, and the hex code will be displayed instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Is this color picker free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ImageColorPickerAI is a 100% free online tool with unlimited uploads and palette generations."
        }
      },
      {
        "@type": "Question",
        "name": "Can I extract colors for Japanese and Chinese art?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We specialize in mapping digital colors to traditional palettes, including Heian-era Japanese and Ming-era Chinese color systems."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeView locale="en" />
    </>
  );
}

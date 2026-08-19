import HomeView from '../components/HomeView';

export const metadata = {
  title: 'AI Image Color Picker - Extract Hex Codes From Any Image',
  description: 'Free AI-powered image color picker: extract HEX, RGB and CMYK codes from any image instantly, no sign-up. Plus Traditional Chinese & Japanese color meanings.',
  keywords: 'image color picker, hex color picker, color extractor, RGB to HEX, CMYK converter, traditional Chinese colors, Japanese colors, color palette generator, online color tool',
  alternates: {
    canonical: 'https://imagecolorpickerai.com/',
    languages: {
      'en': 'https://imagecolorpickerai.com/',
      'zh-Hans': 'https://imagecolorpickerai.com/zh',
      'ja': 'https://imagecolorpickerai.com/ja',
      'es': 'https://imagecolorpickerai.com/es',
      'fr': 'https://imagecolorpickerai.com/fr',
      'de': 'https://imagecolorpickerai.com/de',
      'pt': 'https://imagecolorpickerai.com/pt',
      'x-default': 'https://imagecolorpickerai.com/',
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

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ImageColorPickerAI",
    "alternateName": "Image Color Picker AI",
    "url": "https://imagecolorpickerai.com",
    "description": "Free online image color picker with AI-powered traditional Chinese and Japanese color encyclopedia",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://imagecolorpickerai.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
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
      <HomeView locale="en" />
    </>
  );
}

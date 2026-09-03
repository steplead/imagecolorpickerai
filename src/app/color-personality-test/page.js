import ColorPersonalityTest from '../../components/ColorPersonalityTest';

const CANONICAL = 'https://imagecolorpickerai.com/color-personality-test';

const DESCRIPTION =
  'Pick 3–5 colors you love and see which Color Personality fits your palette. A playful, rule-based reflection of your color choices — not a scientific or psychological assessment.';

export const metadata = {
  title: 'Color Personality Test',
  description: DESCRIPTION,
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: 'Color Personality Test',
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: 'ImageColorPickerAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Color Personality Test',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Color Personality Test',
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
};

const FAQ = [
  {
    q: 'How does the Color Personality Test work?',
    a: 'You pick 3 to 5 colors, and a simple rule-based scoring system matches your palette to one of 16 Color Personalities. It runs entirely in your browser and needs no sign-up.',
  },
  {
    q: 'Is the result based on science or psychology?',
    a: 'No. It is a playful, rule-based reflection of your color choices, not a scientific or psychological assessment.',
  },
  {
    q: 'Do I need to upload an image?',
    a: 'No. You can pick colors with the color swatches, or optionally upload an image and we extract a palette for you. Images are processed in your browser and are never uploaded to a server.',
  },
  {
    q: 'Does the test store my colors?',
    a: 'No. Everything runs in your browser. The result link only encodes the colors you chose so it can be shared; nothing is saved on a server.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

export default function ColorPersonalityTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="mx-auto max-w-3xl px-4 py-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          Color Personality Test
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
          {DESCRIPTION}
        </p>

        <div className="mt-6">
          <ColorPersonalityTest />
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <h2 className="text-xl font-bold text-neutral-900">Frequently asked questions</h2>
          <div className="mt-4 space-y-5">
            {FAQ.map((item) => (
              <div key={item.q}>
                <h3 className="font-semibold text-neutral-800">{item.q}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

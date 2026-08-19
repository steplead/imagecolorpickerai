import Link from 'next/link';
import { headers } from 'next/headers';
import { getAllColors } from '@/utils/colorData';

/**
 * FryingBeansFooter (Protocol 5: Internal Link Circulation)
 *
 * Server-rendered (2026-08-19): the previous client-only implementation
 * randomized 12 links every 60s via useEffect, so SSR HTML contained zero
 * /color/* links — crawlers saw no internal path to the long-tail color pages.
 *
 * Now rendered deterministically on the server so every page's raw HTML
 * carries stable links to color detail pages + collection hubs, localized by
 * URL prefix (/zh, /ja, ...). No rotation, no hydration dependency.
 */
const FOOTER_LABELS = {
  en: { title: 'Popular Colors', subtitle: 'Curated from the Traditional Color Encyclopedia' },
  zh: { title: '热门颜色', subtitle: '精选自传统色彩百科' },
  ja: { title: '人気の色', subtitle: '伝統色百科事典より' },
  es: { title: 'Colores Populares', subtitle: 'Selección de la Enciclopedia de Color Tradicional' },
  fr: { title: 'Couleurs Populaires', subtitle: 'Extrait de l\u2019Encyclopédie des Couleurs Traditionnelles' },
  de: { title: 'Beliebte Farben', subtitle: 'Aus der Enzyklopädie der traditionellen Farben' },
  pt: { title: 'Cores Populares', subtitle: 'Da Enciclopédia de Cores Tradicionais' },
};

// Deterministic, representative picks (stable across renders and deploys).
function pickRepresentativeColors() {
  const all = getAllColors();
  const byCollection = (id) => all.filter((c) => c.collectionId === id);
  const pick = (arr, n) => arr.slice(0, n);

  const beans = [
    ...pick(byCollection('chinese'), 6),
    ...pick(byCollection('japanese'), 3),
    ...pick(byCollection('pantone'), 1),
    ...pick(byCollection('nature'), 2),
  ];
  return beans.slice(0, 12);
}

export default async function FryingBeansFooter() {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/';

  let locale = 'en';
  let prefix = '';
  if (pathname.startsWith('/zh')) { locale = 'zh'; prefix = '/zh'; }
  else if (pathname.startsWith('/ja')) { locale = 'ja'; prefix = '/ja'; }
  else if (pathname.startsWith('/es')) { locale = 'es'; prefix = '/es'; }
  else if (pathname.startsWith('/fr')) { locale = 'fr'; prefix = '/fr'; }
  else if (pathname.startsWith('/de')) { locale = 'de'; prefix = '/de'; }
  else if (pathname.startsWith('/pt')) { locale = 'pt'; prefix = '/pt'; }

  const t = FOOTER_LABELS[locale] || FOOTER_LABELS.en;
  const beans = pickRepresentativeColors();

  if (beans.length === 0) return null;

  // SEO: stable ItemList schema matching the server-rendered links
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t.title,
    "description": t.subtitle,
    "numberOfItems": beans.length,
    "itemListElement": beans.map((color, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://imagecolorpickerai.com${prefix}/color/${color.id}`,
      "name": color.name
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="border-t border-neutral-100 bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
              <span className="text-lg">🍳</span>
              {t.title}
            </h3>
            <div className="text-xs text-neutral-400">
              {t.subtitle}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {beans.map(color => (
              <Link
                key={color.id}
                href={`${prefix}/color/${color.id}`}
                className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all shadow-sm"
                title={`${color.name} (${color.hex})`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-neutral-100 flex-shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs font-medium text-neutral-600">
                  {color.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

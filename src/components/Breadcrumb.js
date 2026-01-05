import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

/**
 * Breadcrumb Component (Protocol 2: Architecture)
 * Provides clear hierarchical navigation for SEO and UX
 *
 * @param {Array} items - Array of { name, href } objects
 * @param {string} locale - Current locale (default: 'en')
 */
export default function Breadcrumb({ items, locale = 'en' }) {
    const baseUrl = locale === 'en' ? '' : `/${locale}`;

    // Schema.org BreadcrumbList structured data
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": `https://imagecolorpickerai.com${baseUrl ? `/${locale}` : ''}`
            },
            ...items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": item.name,
                "item": `https://imagecolorpickerai.com${baseUrl}${item.href}`
            }))
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-6" aria-label="Breadcrumb">
                <Link
                    href={baseUrl || '/'}
                    className="flex items-center gap-1 hover:text-neutral-700 transition"
                    title="Home"
                >
                    <Home className="w-4 h-4" />
                </Link>

                {items.map((item, index) => (
                    <div key={item.href} className="flex items-center gap-2">
                        <ChevronRight className="w-4 h-4 text-neutral-300" />
                        {index === items.length - 1 ? (
                            <span className="text-neutral-700 font-medium">{item.name}</span>
                        ) : (
                            <Link
                                href={`${baseUrl}${item.href}`}
                                className="hover:text-neutral-700 transition"
                                title={item.name}
                            >
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </>
    );
}

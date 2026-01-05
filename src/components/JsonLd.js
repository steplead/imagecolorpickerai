/**
 * Enhanced JsonLd Component (Schema.org Structured Data)
 *
 * Supports multiple schema types for rich results:
 * - Product (for colors)
 * - Article (for blog/content)
 * - WebPage (for all pages)
 * - BreadcrumbList (for navigation)
 * - ItemList (for collections)
 * - Organization (brand info)
 *
 * Usage: <JsonLd data={schemaObject} />
 */
export default function JsonLd({ data }) {
    // Validate required fields
    if (!data || typeof data !== 'object') {
        console.warn('JsonLd: Invalid data provided');
        return null;
    }

    // Ensure @context is present
    if (!data['@context']) {
        data['@context'] = 'https://schema.org';
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

/**
 * Helper: Generate Color/Product schema
 */
export function ColorSchema({ color, collectionMeta }) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": `${color.name} (Traditional ${collectionMeta?.name || 'Color'})`,
        "alternateName": color.nativeName,
        "description": color.meaning,
        "image": [`https://imagecolorpickerai.com/api/og/color?id=${color.id}`],
        "brand": {
            "@type": "Brand",
            "name": "ImageColorPickerAI",
            "url": "https://imagecolorpickerai.com"
        },
        "offers": {
            "@type": "Offer",
            "url": `https://imagecolorpickerai.com/color/${color.id}`,
            "priceCurrency": "USD",
            "price": "0.00",
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Hex Code",
                "value": color.hex
            },
            {
                "@type": "PropertyValue",
                "name": "Collection",
                "value": color.collectionId
            },
            {
                "@type": "PropertyValue",
                "name": "Phonetic",
                "value": color.phoneticName
            }
        ],
        "aggregateRating": color.rating ? {
            "@type": "AggregateRating",
            "ratingValue": color.rating,
            "bestRating": "5",
            "ratingCount": color.ratingCount || 1
        } : undefined
    };
}

/**
 * Helper: Generate WebPage schema
 */
export function WebPageSchema({ title, description, url, locale = 'en' }) {
    return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title,
        "description": description,
        "url": `https://imagecolorpickerai.com${url}`,
        "inLanguage": locale,
        "isPartOf": {
            "@type": "WebSite",
            "name": "ImageColorPickerAI",
            "url": "https://imagecolorpickerai.com"
        },
        "about": {
            "@type": "Thing",
            "name": "Traditional Color Encyclopedia"
        },
        "keywords": ["color picker", "AI", "traditional colors", "color analysis", "Chinese colors", "Japanese colors"]
    };
}

/**
 * Helper: Generate Article schema (for blog/ideas)
 */
export function ArticleSchema({ title, description, url, datePublished, author, image }) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": image || [`https://imagecolorpickerai.com/api/og/article${url}.png`],
        "datePublished": datePublished || new Date().toISOString(),
        "dateModified": new Date().toISOString(),
        "author": {
            "@type": "Organization",
            "name": "ImageColorPickerAI Team",
            "url": "https://imagecolorpickerai.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "ImageColorPickerAI",
            "logo": {
                "@type": "ImageObject",
                "url": "https://imagecolorpickerai.com/icon.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://imagecolorpickerai.com${url}`
        }
    };
}

/**
 * Helper: Generate Organization schema
 */
export function OrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "ImageColorPickerAI",
        "url": "https://imagecolorpickerai.com",
        "logo": "https://imagecolorpickerai.com/icon.png",
        "sameAs": [
            "https://twitter.com/imagecolorpickerai",
            "https://github.com/imagecolorpickerai"
        ],
        "description": "The world's first AI-powered Traditional Color Encyclopedia. Extracting culture, history, and hex codes from every pixel.",
        "founder": {
            "@type": "Person",
            "name": "ImageColorPickerAI Team"
        }
    };
}

/**
 * Helper: Generate ItemList schema (for collections)
 */
export function ItemListSchema({ items, name }) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": name,
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "url": `https://imagecolorpickerai.com/color/${item.id}`,
            "name": item.name
        }))
    };
}

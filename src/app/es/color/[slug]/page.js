import { getColorById, getCollectionMetadata } from '../../../../utils/colorData';
import { ColorDetailView } from '../../../../components/ColorDetailView';
import { generateMetadata as enGenerateMetadata } from '../../../color/[slug]/page';

export { generateStaticParams } from '../../../color/[slug]/page';

// og:url must carry this locale's own path prefix; the shared EN
// generateMetadata hardcodes the EN route.
export async function generateMetadata(props) {
    const meta = await enGenerateMetadata(props);
    const { slug } = await props.params;
    if (!slug) return meta;
    return {
        ...meta,
        openGraph: {
            ...(meta.openGraph || {}),
            url: `https://imagecolorpickerai.com/es/color/${slug}`,
        },
        // Locale direction A (convergence, 2026-09-30): noindex + clear the
        // inherited EN alternates (canonical + 7 hreflang).
        alternates: {},
        robots: { index: false, follow: true },
    };
}

export default async function EsColorPage({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const color = getColorById(slug);
    if (!color) return <div>Color not found</div>;

    const meta = getCollectionMetadata(color.collectionId);

    // Breadcrumb Schema for SEO (Spanish)
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Inicio",
                "item": "https://imagecolorpickerai.com/es"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Colores",
                "item": "https://imagecolorpickerai.com/es/colors"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": meta.name,
                "item": `https://imagecolorpickerai.com/es/colors/${color.collectionId}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": `${color.name}${color.nativeName ? ` (${color.nativeName})` : ''}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ColorDetailView params={resolvedParams} locale="es" />
        </>
    );
}

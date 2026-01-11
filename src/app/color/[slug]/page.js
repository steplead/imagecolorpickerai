import { getColorById, getAllColors, getCollectionMetadata } from '../../../utils/colorData';
import { ColorDetailView } from '../../../components/ColorDetailView';

// 1. Generate Static Params for all 500+ colors (Global)
export async function generateStaticParams() {
    const colors = getAllColors();
    return colors.map((color) => ({
        slug: color.id,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const color = getColorById(slug);
    if (!color) return { title: 'Color Not Found' };

    const meta = getCollectionMetadata(color.collectionId);

    // Optimized title length (under 60 characters for SEO)
    const shortName = color.name.length > 20 ? color.name.split(' ')[0] : color.name;
    const collectionShort = meta.name.length > 15 ? meta.name.split(' ')[0] : meta.name;

    return {
        title: `${shortName} (${color.nativeName}) - ${color.hex} | ${collectionShort} Color`,
        description: `${color.name} (${color.nativeName}, ${color.hex}) - ${color.meaning} Check WCAG accessibility contrast and color blindness simulation.`,
        alternates: {
            canonical: `https://imagecolorpickerai.com/color/${color.id}`,
            languages: {
                'en': `https://imagecolorpickerai.com/color/${color.id}`,
                'zh-Hans': `https://imagecolorpickerai.com/zh/color/${color.id}`,
                'ja': `https://imagecolorpickerai.com/ja/color/${color.id}`,
                'es': `https://imagecolorpickerai.com/es/color/${color.id}`,
                'fr': `https://imagecolorpickerai.com/fr/color/${color.id}`,
                'de': `https://imagecolorpickerai.com/de/color/${color.id}`,
                'pt': `https://imagecolorpickerai.com/pt/color/${color.id}`,
                'x-default': `https://imagecolorpickerai.com/color/${color.id}`,
            },
        },
    };
}

export default async function Page({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const color = getColorById(slug);
    if (!color) return <div>Color not found</div>;

    const meta = getCollectionMetadata(color.collectionId);

    // Breadcrumb Schema for SEO
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://imagecolorpickerai.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Colors",
                "item": "https://imagecolorpickerai.com/colors"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": meta.name,
                "item": `https://imagecolorpickerai.com/colors/${color.collectionId}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": `${color.name} (${color.nativeName})`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ColorDetailView params={resolvedParams} locale="en" />
        </>
    );
}

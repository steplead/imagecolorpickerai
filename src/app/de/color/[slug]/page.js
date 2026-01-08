import { getColorById, getCollectionMetadata } from '../../../../utils/colorData';
import { ColorDetailView } from '../../../../components/ColorDetailView';
export { generateStaticParams, generateMetadata } from '../../../color/[slug]/page';

export default async function DeColorPage({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const color = getColorById(slug);
    if (!color) return <div>Color not found</div>;

    const meta = getCollectionMetadata(color.collectionId);

    // Breadcrumb Schema for SEO (German)
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": "https://imagecolorpickerai.com/de"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Farben",
                "item": "https://imagecolorpickerai.com/de/colors"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": meta.name,
                "item": `https://imagecolorpickerai.com/de/colors/${color.collectionId}`
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
            <ColorDetailView params={resolvedParams} locale="de" />
        </>
    );
}

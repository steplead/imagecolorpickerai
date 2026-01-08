import { getColorById, getCollectionMetadata } from '../../../../utils/colorData';
import { ColorDetailView } from '../../../../components/ColorDetailView';
export { generateStaticParams, generateMetadata } from '../../../color/[slug]/page';

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
            <ColorDetailView params={resolvedParams} locale="es" />
        </>
    );
}

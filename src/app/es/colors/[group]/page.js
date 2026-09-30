import { ColorsCollectionView } from '../../../../components/ColorsCollectionView';
import { generateMetadata as enGenerateMetadata } from '../../../colors/[group]/page';

export { generateStaticParams } from '../../../colors/[group]/page';

// og:url must carry this locale's own path prefix; the shared EN
// generateMetadata hardcodes the EN route.
export async function generateMetadata(props) {
    const meta = await enGenerateMetadata(props);
    const { group } = await props.params;
    if (!group) return meta;
    return {
        ...meta,
        openGraph: {
            ...(meta.openGraph || {}),
            url: `https://imagecolorpickerai.com/es/colors/${group.toLowerCase()}`,
        },
    };
}

export default async function EsColorsPage({ params }) {
    const resolvedParams = await params;
    return <ColorsCollectionView params={resolvedParams} locale="es" />;
}

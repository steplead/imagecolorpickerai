import { ColorDetail } from '../../color/[slug]/page';
export { generateStaticParams, generateMetadata } from '../../color/[slug]/page';

export default async function JaColorPage({ params }) {
    return <ColorDetail params={params} locale="ja" />;
}

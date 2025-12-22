import { ColorDetail } from '../../color/[slug]/page';
export { generateStaticParams, generateMetadata } from '../../color/[slug]/page';

export default async function ZhColorPage({ params }) {
    return <ColorDetail params={params} locale="zh" />;
}

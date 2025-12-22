import { ColorsCollection } from '../../colors/[group]/page';
export { generateStaticParams, generateMetadata } from '../../colors/[group]/page';

export default async function ZhColorsPage({ params }) {
    return <ColorsCollection params={params} locale="zh" />;
}

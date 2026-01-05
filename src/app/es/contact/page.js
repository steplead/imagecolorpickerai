import ContactView from '../../../components/ContactView';

export const metadata = {
    title: 'Contáctenos - Comentarios y Soporte | ImageColorPickerAI',
    description: 'Póngase en contacto con el equipo de ImageColorPickerAI. Informe errores, sugiera funciones o solicite colaboración.',
    alternates: {
        canonical: '/es/contact',
        languages: {
            'en': '/contact',
            'zh-Hans': '/zh/contact',
            'ja': '/ja/contact',
            'es': '/es/contact',
            'fr': '/fr/contact',
            'de': '/de/contact',
            'pt': '/pt/contact',
            'x-default': '/contact',
        },
    },
};

export default function Page() {
    return <ContactView locale="es" />;
}

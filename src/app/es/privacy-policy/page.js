import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Política de Privacidad - ImageColorPickerAI',
    description: 'Nuestro compromiso con su privacidad. Conozca cómo manejamos sus datos e imágenes al usar ImageColorPickerAI.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/es/privacy-policy',
        languages: {
            'en': 'https://imagecolorpickerai.com/privacy-policy',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/privacy-policy',
            'ja': 'https://imagecolorpickerai.com/ja/privacy-policy',
            'es': 'https://imagecolorpickerai.com/es/privacy-policy',
            'fr': 'https://imagecolorpickerai.com/fr/privacy-policy',
            'de': 'https://imagecolorpickerai.com/de/privacy-policy',
            'pt': 'https://imagecolorpickerai.com/pt/privacy-policy',
            'x-default': 'https://imagecolorpickerai.com/privacy-policy',
        },
    },
};

export default function Page() {
    return <LegalView type="privacy" locale="es" />;
}

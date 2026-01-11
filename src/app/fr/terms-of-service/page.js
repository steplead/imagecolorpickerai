import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Conditions d\'Utilisation - ImageColorPickerAI',
    description: 'Les conditions générales d\'utilisation d\'ImageColorPickerAI. Services professionnels d\'extraction de couleurs et de génération par IA.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/fr/terms-of-service',
        languages: {
            'en': 'https://imagecolorpickerai.com/terms-of-service',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/terms-of-service',
            'ja': 'https://imagecolorpickerai.com/ja/terms-of-service',
            'es': 'https://imagecolorpickerai.com/es/terms-of-service',
            'fr': 'https://imagecolorpickerai.com/fr/terms-of-service',
            'de': 'https://imagecolorpickerai.com/de/terms-of-service',
            'pt': 'https://imagecolorpickerai.com/pt/terms-of-service',
            'x-default': 'https://imagecolorpickerai.com/terms-of-service',
        },
    },
};

export default function Page() {
    return <LegalView type="terms" locale="fr" />;
}

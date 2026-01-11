import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Politique de Confidentialité - ImageColorPickerAI',
    description: 'Notre engagement envers votre vie privée. Apprenez comment nous traitons vos données et vos images lors de l\'utilisation d\'ImageColorPickerAI.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/fr/privacy-policy',
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
    return <LegalView type="privacy" locale="fr" />;
}

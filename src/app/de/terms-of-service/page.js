import LegalView from '../../../components/LegalView';

export const metadata = {
    title: 'Nutzungsbedingungen - ImageColorPickerAI',
    description: 'Die Bedingungen für die Nutzung von ImageColorPickerAI. Professionelle Farbauswahl und KI-Generierungsdienste.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/de/terms-of-service',
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
    return <LegalView type="terms" locale="de" />;
}

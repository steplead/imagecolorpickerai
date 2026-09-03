import PersonalColorAnalyst from '../../components/PersonalColorAnalyst';
import JsonLd from '../../components/JsonLd';

export const metadata = {
    title: 'Color Style Scan - Find Your Traditional Color Palette | ImageColorPickerAI',
    description: 'Upload any image to discover your personal traditional color palette. Free to use, no sign-up.',
    alternates: {
        canonical: 'https://imagecolorpickerai.com/scan',
        languages: {
            'en': 'https://imagecolorpickerai.com/scan',
            'zh-Hans': 'https://imagecolorpickerai.com/zh/scan',
            'ja': 'https://imagecolorpickerai.com/ja/scan',
            'es': 'https://imagecolorpickerai.com/es/scan',
            'fr': 'https://imagecolorpickerai.com/fr/scan',
            'de': 'https://imagecolorpickerai.com/de/scan',
            'pt': 'https://imagecolorpickerai.com/pt/scan',
            'x-default': 'https://imagecolorpickerai.com/scan',
        },
    },
    openGraph: {
        title: 'I found my color palette! What is yours?',
        description: 'Discover your unique color match from 588 traditional shades.',
        images: ['/images/share-card-preview.jpg'], // Placeholder for viral card
    },
};

export default function PersonalColorPage() {
    const appSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Color Style Scan",
        "applicationCategory": "DesignApplication",
        "operatingSystem": "Web",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Use Color Style Scan",
        "description": "Learn how to turn any image into a personalized traditional color palette",
        "image": "https://imagecolorpickerai.com/images/how-to-scan.png",
        "totalTime": "PT2M",
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "USD",
            "value": "0"
        },
        "supply": [
            {
                "@type": "HowToSupply",
                "name": "Any image (photo, artwork, or screenshot)"
            }
        ],
        "tool": [
            {
                "@type": "HowToTool",
                "name": "Computer or smartphone with camera"
            }
        ],
        "step": [
            {
                "@type": "HowToStep",
                "name": "Upload an image",
                "text": "Choose a clear image with good lighting and a neutral background for the best color extraction.",
                "image": "https://imagecolorpickerai.com/images/step1-upload.png",
                "url": "https://imagecolorpickerai.com/scan#step1"
            },
            {
                "@type": "HowToStep",
                "name": "We read your colors",
                "text": "We extract the dominant colors and palette from your image to build your personal color harmony.",
                "image": "https://imagecolorpickerai.com/images/step2-analyze.png",
                "url": "https://imagecolorpickerai.com/scan#step2"
            },
            {
                "@type": "HowToStep",
                "name": "Get your color palette",
                "text": "Receive your personalized traditional color palette based on thousands of years of color theory and aesthetics.",
                "image": "https://imagecolorpickerai.com/images/step3-result.png",
                "url": "https://imagecolorpickerai.com/scan#step3"
            }
        ]
    };

    return (
        <main className="min-h-screen bg-neutral-50 flex flex-col items-center py-12 px-4 font-sans">
            <JsonLd data={appSchema} />
            <JsonLd data={howToSchema} />
            <div className="max-w-xl w-full text-center mb-8">
                <span className="inline-block py-1 px-3 rounded-full bg-red-100 text-red-800 text-xs font-bold tracking-widest uppercase mb-4">
                    New Viral Feature
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 tracking-tight">
                    What is your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-amber-600">color style</span>?
                </h1>
                <p className="text-lg text-neutral-600 font-serif italic">
                    "The face is the mirror of the soul, and color is its language."
                </p>
                <p className="text-sm text-neutral-400 mt-2">
                    Upload an image and we'll turn its colors into a personal traditional color palette you can use anywhere.
                </p>
            </div>

            {/* The Analysis Engine */}
            <PersonalColorAnalyst />

            {/* Privacy Section */}
            <div className="max-w-md mt-12 text-center text-xs text-neutral-400">
                <p>🔒 Private: your image is processed right in your browser.</p>
                <p>Your photos are never uploaded to our servers.</p>
            </div>
        </main>
    );
}

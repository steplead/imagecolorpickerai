import Link from 'next/link';
import { Gavel, AlertCircle, RefreshCcw, Scale } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service - ImageColorPickerAI',
    description: 'The terms and conditions for using ImageColorPickerAI. Professional color extraction and AI generation services.',
    alternates: {
        canonical: '/terms-of-service',
    },
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-neutral-50 px-4 py-16 font-sans">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                        <Gavel className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-900">Terms of Service</h1>
                        <p className="text-sm text-neutral-500 font-serif italic">Last Updated: December 22, 2025</p>
                    </div>
                </div>

                <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                            <Scale className="w-5 h-5 text-indigo-500" />
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing or using ImageColorPickerAI, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                            <AlertCircle className="w-5 h-5 text-indigo-500" />
                            2. Use License
                        </h2>
                        <p>
                            We grant you a personal, non-exclusive, non-transferable license to use our tool for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Extracting color data from your images.</li>
                            <li>Generating AI wallpapers for personal use.</li>
                            <li>Downloading color swatches for professional design projects.</li>
                        </ul>
                        <p className="mt-4">
                            You may not: reverse engineer the site, use automated scripts to scrape our database, or use our AI generation for illegal purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                            <RefreshCcw className="w-5 h-5 text-indigo-500" />
                            3. Disclaimer
                        </h2>
                        <p>
                            The materials on ImageColorPickerAI are provided "as is". We make no warranties, expressed or implied, regarding the accuracy of color matching or AI wallpaper outputs. Color rendering may vary between screen hardwares.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                            <Gavel className="w-5 h-5 text-indigo-500" />
                            4. Limitations
                        </h2>
                        <p>
                            In no event shall ImageColorPickerAI be liable for any damages arising out of the use or inability to use the materials on our website.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-neutral-100 mt-12">
                        <p className="text-sm text-neutral-400">
                            By using the tool, you acknowledge you have read the <Link href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

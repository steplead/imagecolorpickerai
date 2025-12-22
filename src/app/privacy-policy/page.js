import Link from 'next/link';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy - ImageColorPickerAI | Trust & Data Safety',
    description: 'Our commitment to your privacy. Learn how we handle your data and images while using ImageColorPickerAI.',
    alternates: {
        canonical: '/privacy-policy',
    },
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-neutral-50 px-4 py-16 font-sans">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                        <Shield className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-900">Privacy Policy</h1>
                        <p className="text-sm text-neutral-500 font-serif italic">Last Updated: December 22, 2025</p>
                    </div>
                </div>

                <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                            <Eye className="w-5 h-5 text-indigo-500" />
                            1. Information We Collect
                        </h2>
                        <p>
                            ImageColorPickerAI is designed to respect your privacy. We primary collect:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Images:</strong> Any image you upload is processed entirely in your browser or sent to our secure API for temporary analysis. We do not store your original images on our servers long-term.</li>
                            <li><strong>Usage Data:</strong> We use Google Analytics to collect anonymous data about how users interact with our tool to improve the user experience.</li>
                            <li><strong>Technical Data:</strong> IP addresses and browser types for security and rate-limiting purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                            <Lock className="w-5 h-5 text-indigo-500" />
                            2. How We Use Your Data
                        </h2>
                        <p>
                            Your data is used solely to provide and improve our color extraction services. Specifically:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To extract hex codes and palette data.</li>
                            <li>To generate AI-powered wallpapers based on your selected colors.</li>
                            <li>To analyze demographic traffic patterns (Anonymous).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                            <Shield className="w-5 h-5 text-indigo-500" />
                            3. Data Security
                        </h2>
                        <p>
                            We implement industry-standard security measures to protect your information. Personal Color Analysis scans are processed using edge computing to minimize data footprint.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                            <FileText className="w-5 h-5 text-indigo-500" />
                            4. Third-Party Services
                        </h2>
                        <p>
                            We utilize the following third-party partners to power our platform:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Google Analytics:</strong> For traffic measurement.</li>
                            <li><strong>Google AdSense:</strong> To provide relevant advertisements.</li>
                            <li><strong>Cloudflare:</strong> For secure hosting and global delivery.</li>
                        </ul>
                    </section>

                    <div className="pt-8 border-t border-neutral-100 mt-12">
                        <p className="text-sm text-neutral-400">
                            Questions about our policy? Contact us at <Link href="/contact" className="text-indigo-600 hover:underline">Support</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

'use client';

import { Shield, Lock, Eye, FileText } from 'lucide-react';
import Link from 'next/link';

export default function LegalView({ type = 'privacy', locale = 'en' }) {
    const labels = {
        en: {
            privacyTitle: "Privacy Policy",
            termsTitle: "Terms of Service",
            updated: "Last Updated: December 22, 2025",
            privacySections: [
                { title: "1. Information We Collect", icon: Eye, content: "ImageColorPickerAI is designed to respect your privacy. We primary collect anonymous usage data and temporary image data for analysis. We do not store your original images on our servers long-term." },
                { title: "2. How We Use Your Data", icon: Lock, content: "Your data is used solely to provide and improve our color extraction services, including hex code extraction and AI-powered color analysis." },
                { title: "3. Data Security", icon: Shield, content: "We implement industry-standard security measures to protect your information. Analysis scans are processed using edge computing to minimize data footprint." }
            ],
            termsSections: [
                { title: "1. Use of Service", icon: FileText, content: "You agree to use this service for lawful purposes only. Unauthorized scraping or automated extraction is prohibited." },
                { title: "2. Intellectual Property", icon: Shield, content: "The color libraries and AI analysis algorithms are property of ImageColorPickerAI." }
            ],
            contactText: "Questions about our policy? Contact us at ",
            contactLink: "Support"
        },
        zh: {
            privacyTitle: "隐私政策",
            termsTitle: "服务条款",
            updated: "最后更新：2025年12月22日",
            privacySections: [
                { title: "1. 信息收集", icon: Eye, content: "ImageColorPickerAI 旨在尊重您的隐私。我们主要收集匿名使用数据和用于分析的临时图像数据。我们不会在服务器上长期存储您的原始图像。" },
                { title: "2. 数据使用", icon: Lock, content: "您的数据仅用于提供和改进我们的取色服务，包括十六进制代码提取和 AI 驱动的色彩分析。" },
                { title: "3. 数据安全", icon: Shield, content: "我们实施行业标准的安全措施来保护您的信息。分析扫描使用边缘计算处理，以最大限度地减少数据足迹。" }
            ],
            termsSections: [
                { title: "1. 服务使用", icon: FileText, content: "您同意仅出于合法目的使用本服务。禁止未经授权的爬取或自动提取。" },
                { title: "2. 知识产权", icon: Shield, content: "色彩库和 AI 分析算法是 ImageColorPickerAI 的财产。" }
            ],
            contactText: "对我们的政策有疑问？请联系 ",
            contactLink: "支持"
        },
        // ... adding brief versions for other languages to ensure sitemap validity
        ja: {
            privacyTitle: "プライバシーポリシー",
            termsTitle: "利用規約",
            updated: "最終更新日：2025年12月22日",
            privacySections: [
                { title: "1. 収集する情報", icon: Eye, content: "ImageColorPickerAIはプライバシーを尊重するように設計されています。主に匿名の使用回数データと分析用の一次的な画像データを収集します。" }
            ],
            termsSections: [
                { title: "1. サービスの利用", icon: FileText, content: "本サービスを合法的な目的にのみ使用することに同意するものとします。" }
            ],
            contactText: "ポリシーに関するご質問は、",
            contactLink: "サポート"
        },
        es: {
            privacyTitle: "Política de Privacidad",
            termsTitle: "Términos de Servicio",
            updated: "Última actualización: 22 de diciembre de 2025",
            privacySections: [
                { title: "1. Información que recopilamos", icon: Eye, content: "ImageColorPickerAI está diseñado para respetar su privacidad. Recopilamos principalmente datos de uso anónimos." }
            ],
            termsSections: [
                { title: "1. Uso del servicio", icon: FileText, content: "Usted acepta utilizar este servicio únicamente para fines legales." }
            ],
            contactText: "¿Preguntas sobre nuestra política? Contáctenos en ",
            contactLink: "Soporte"
        }
    };

    const t = labels[locale] || labels.en;
    const title = type === 'privacy' ? t.privacyTitle : t.termsTitle;
    const sections = type === 'privacy' ? (t.privacySections || labels.en.privacySections) : (t.termsSections || labels.en.termsSections);

    return (
        <main className="min-h-screen bg-neutral-50 px-4 py-16 font-sans">
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-neutral-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                        <Shield className="w-6 h-6" />
                    </div>
                    <div>
                        <h1 id="legal-title" className="text-3xl font-bold text-neutral-900">{title}</h1>
                        <p className="text-sm text-neutral-500 font-serif italic">{t.updated}</p>
                    </div>
                </div>

                <div className="prose prose-neutral max-w-none text-neutral-600 leading-relaxed space-y-8">
                    {sections.map((section, idx) => {
                        const Icon = section.icon || Eye;
                        return (
                            <section key={idx}>
                                <h2 className="text-xl font-bold text-neutral-900 flex items-center gap-2 mb-4">
                                    <Icon className="w-5 h-5 text-indigo-500" />
                                    {section.title}
                                </h2>
                                <p>{section.content}</p>
                            </section>
                        );
                    })}

                    <div className="pt-8 border-t border-neutral-100 mt-12">
                        <p className="text-sm text-neutral-400">
                            {t.contactText} <Link href={`${locale === 'en' ? '' : `/${locale}`}/contact`} className="text-indigo-600 hover:underline">{t.contactLink}</Link>.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

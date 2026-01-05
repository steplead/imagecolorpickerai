'use client';

import { Mail, MessageSquare, Twitter, Github } from 'lucide-react';

export default function ContactView({ locale = 'en' }) {
    const labels = {
        en: {
            heroTitle: "Get in ",
            heroAccent: "Touch",
            heroDesc: "Have a specific color collection request? Found a bug in the AI analyzer? We want to hear from you.",
            emailTitle: "Direct Email",
            emailDesc: "For business inquiries and professional support.",
            feedbackTitle: "Community Feedback",
            feedbackDesc: "Request new color libraries (Traditional/Trend).",
            formTitle: "Quick Message",
            formSubject: "Subject",
            formMessage: "Message",
            formPlaceholder: "Hello...",
            formBtn: "Send Message",
            subjects: ["Feature Request", "Report a Bug", "General Inquiry"]
        },
        zh: {
            heroTitle: "请与我们",
            heroAccent: "联系",
            heroDesc: "有特定的色彩集合需求？发现 AI 分析器有错误？我们期待听到您的反馈。",
            emailTitle: "直接邮件",
            emailDesc: "商业洽谈与专业支持。",
            feedbackTitle: "社区反馈",
            feedbackDesc: "申请新的色彩库（传统/潮流）。",
            formTitle: "快速留言",
            formSubject: "主题",
            formMessage: "详细内容",
            formPlaceholder: "你好...",
            formBtn: "发送消息",
            subjects: ["功能建议", "错误报告", "一般查询"]
        },
        ja: {
            heroTitle: "お気軽に",
            heroAccent: "お問い合わせ",
            heroDesc: "特定のカラーコレクションのリクエストがありますか？AIアナライザーにバグが見つかりましたか？ご連絡をお待ちしております。",
            emailTitle: "ダイレクトメール",
            emailDesc: "ビジネスに関するお問い合わせやプロフェッショナルなサポート。",
            feedbackTitle: "コミュニティフィードバック",
            feedbackDesc: "新しいカラーライブラリ（伝統/トレンド）をリクエストする。",
            formTitle: "クイックメッセージ",
            formSubject: "件名",
            formMessage: "メッセージ",
            formPlaceholder: "こんにちは...",
            formBtn: "メッセージを送信",
            subjects: ["機能リクエスト", "バグ報告", "一般的な問い合わせ"]
        },
        es: {
            heroTitle: "Ponte en ",
            heroAccent: "Contacto",
            heroDesc: "¿Tienes una solicitud de colección de colores específica? ¿Encontraste un error en el analizador de IA? Queremos saber de ti.",
            emailTitle: "Correo Directo",
            emailDesc: "Para consultas comerciales y soporte profesional.",
            feedbackTitle: "Comentarios de la Comunidad",
            feedbackDesc: "Solicitar nuevas bibliotecas de colores (Tradicional/Tendencia).",
            formTitle: "Mensaje Rápido",
            formSubject: "Asunto",
            formMessage: "Mensaje",
            formPlaceholder: "Hola...",
            formBtn: "Enviar Mensaje",
            subjects: ["Solicitud de función", "Informar un error", "Consulta general"]
        },
        fr: {
            heroTitle: "Contactez-",
            heroAccent: "nous",
            heroDesc: "Vous avez une demande de collection de couleurs spécifique ? Vous avez trouvé un bogue dans l'analyseur IA ? Nous voulons vous entendre.",
            emailTitle: "Email Direct",
            emailDesc: "Pour les demandes commerciales et le support professionnel.",
            feedbackTitle: "Commentaires de la Communauté",
            feedbackDesc: "Demandez de nouvelles bibliothèques de couleurs (Traditionnelle/Tendance).",
            formTitle: "Message Rapide",
            formSubject: "Sujet",
            formMessage: "Message",
            formPlaceholder: "Bonjour...",
            formBtn: "Envoyer le message",
            subjects: ["Demande de fonctionnalité", "Signaler un bogue", "Demande générale"]
        },
        de: {
            heroTitle: "Kontaktieren Sie ",
            heroAccent: "uns",
            heroDesc: "Haben Sie eine spezielle Farbsammlungsanfrage? Einen Fehler im KI-Analyzer gefunden? Wir möchten von Ihnen hören.",
            emailTitle: "Direkte E-Mail",
            emailDesc: "Für Geschäftsanfragen und professionellen Support.",
            feedbackTitle: "Community-Feedback",
            feedbackDesc: "Neue Farbbibliotheken anfordern (Traditionell/Trend).",
            formTitle: "Kurznachricht",
            formSubject: "Betreff",
            formMessage: "Nachricht",
            formPlaceholder: "Hallo...",
            formBtn: "Nachricht senden",
            subjects: ["Funktionsanfrage", "Fehler melden", "Allgemeine Anfrage"]
        },
        pt: {
            heroTitle: "Entre em ",
            heroAccent: "Contato",
            heroDesc: "Tem uma solicitação específica de coleção de cores? Encontrou um bug no analisador de IA? Queremos ouvir você.",
            emailTitle: "E-mail Direto",
            emailDesc: "Para consultas comerciais e suporte profissional.",
            feedbackTitle: "Comentários da Comunidade",
            feedbackDesc: "Solicitar novas bibliotecas de cores (Tradicional/Tendência).",
            formTitle: "Mensagem Rápida",
            formSubject: "Assunto",
            formMessage: "Mensagem",
            formPlaceholder: "Olá...",
            formBtn: "Enviar Mensagem",
            subjects: ["Solicitação de Recurso", "Relatar um Bug", "Inquérito Geral"]
        }
    };

    const t = labels[locale] || labels.en;

    return (
        <main className="min-h-screen bg-neutral-50 px-4 py-16 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                        {t.heroTitle}<span className="text-red-600">{t.heroAccent}</span>
                    </h1>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-serif italic">
                        {t.heroDesc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Channels */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-neutral-900 mb-2">{t.emailTitle}</h2>
                            <p className="text-neutral-500 mb-4">{t.emailDesc}</p>
                            <a href="mailto:hello@imagecolorpickerai.com" className="text-red-600 font-bold hover:underline">
                                hello@imagecolorpickerai.com
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-neutral-900 mb-2">{t.feedbackTitle}</h2>
                            <p className="text-neutral-500 mb-4">{t.feedbackDesc}</p>
                            <div className="flex gap-4">
                                <Twitter className="w-5 h-5 text-neutral-400 hover:text-indigo-400 cursor-pointer transition" />
                                <Github className="w-5 h-5 text-neutral-400 hover:text-neutral-900 cursor-pointer transition" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Form (Visual Only for now) */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 h-full">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-sans">{t.formTitle}</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">{t.formSubject}</label>
                                <select className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20">
                                    {t.subjects.map(s => <option key={s}>{s}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">{t.formMessage}</label>
                                <textarea rows="4" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder:text-neutral-300" placeholder={t.formPlaceholder}></textarea>
                            </div>
                            <button className="w-full bg-neutral-900 text-white font-bold py-4 rounded-xl hover:bg-neutral-800 transition transform active:scale-95">
                                {t.formBtn}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

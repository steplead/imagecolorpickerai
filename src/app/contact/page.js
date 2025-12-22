import { Mail, MessageSquare, Twitter, Github } from 'lucide-react';

export const metadata = {
    title: 'Contact Us - Feedback & Support | ImageColorPickerAI',
    description: 'Get in touch with the ImageColorPickerAI team. Report bugs, suggest features, or request collaboration.',
    alternates: {
        canonical: '/contact',
    },
};

export default function Contact() {
    return (
        <main className="min-h-screen bg-neutral-50 px-4 py-16 font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">
                        Get in <span className="text-red-600">Touch</span>
                    </h1>
                    <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-serif italic">
                        Have a specific color collection request? Found a bug in the AI analyzer? We want to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Channels */}
                    <div className="space-y-6">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-neutral-900 mb-2">Direct Email</h2>
                            <p className="text-neutral-500 mb-4">For business inquiries and professional support.</p>
                            <a href="mailto:hello@imagecolorpickerai.com" className="text-red-600 font-bold hover:underline">
                                hello@imagecolorpickerai.com
                            </a>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 transition-transform hover:-translate-y-1">
                            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-neutral-900 mb-2">Community Feedback</h2>
                            <p className="text-neutral-500 mb-4">Request new color libraries (Traditional/Trend).</p>
                            <div className="flex gap-4">
                                <Twitter className="w-5 h-5 text-neutral-400 hover:text-indigo-400 cursor-pointer transition" />
                                <Github className="w-5 h-5 text-neutral-400 hover:text-neutral-900 cursor-pointer transition" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Form (Visual Only for now) */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 h-full">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-6 font-sans">Quick Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                                <select className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20">
                                    <option>Feature Request</option>
                                    <option>Report a Bug</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                                <textarea rows="4" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500/20 placeholder:text-neutral-300" placeholder="Hello..."></textarea>
                            </div>
                            <button className="w-full bg-neutral-900 text-white font-bold py-4 rounded-xl hover:bg-neutral-800 transition transform active:scale-95">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

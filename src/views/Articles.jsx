"use client";
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';

const Articles = () => {
    const router = useRouter();

    const articles = [
        { slug: 'technical-seo-2026', title: "המדריך המלא ל-SEO טכני ב-2026", date: "15 מרץ, 2026", desc: "כל מה שצריך לדעת על Core Web Vitals, סריקה של גוגל ואיך להכין את האתר שלכם לעידן ה-AI.", tag: "SEO", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
        { slug: 'double-your-roas', title: "איך להכפיל את ה-ROAS בקמפיינים בגוגל", date: "2 מרץ, 2026", desc: "סודות האופטימיזציה שסוכנויות לא מגלות: חלוקת תקציב חכמה, טיוב המרות ובידינג מבוסס ערך.", tag: "PPC", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
        { slug: 'tiktok-or-instagram', title: "טיקטוק או אינסטגרם? איפה הקהל שלכם נמצא", date: "28 פברואר, 2026", desc: "ניתוח מעמיק של פלטפורמות הסושיאל המובילות וכיצד לבנות אסטרטגיית תוכן שפוגעת בול במטרה.", tag: "סושיאל", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" },
        { slug: 'ux-color-psychology', title: "עיצוב UX שמוכר: פסיכולוגיה של צבעים וממשק", date: "10 פברואר, 2026", desc: "איך למקם כפתורי הנעה לפעולה, באילו צבעים להשתמש ואיך לבנות אמון דרך חוויית משתמש מושלמת.", tag: "UX/UI", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
    ];

    return (
        <PageTransition>
            <Reveal className="min-h-screen bg-[#F5F7FA] pt-48 md:pt-56 pb-32 text-right">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 text-[#2f4ea1]">בלוג ומאמרים</h1>
                    <p className="text-gray-600 text-lg md:text-xl font-light mb-16 max-w-2xl ml-auto">
                        תובנות, מדריכים וחדשות מהחזית של השיווק הדיגיטלי.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {articles.map((art, i) => (
                            <div key={i} onClick={() => router.push(`/articles/${art.slug}`)} className="bg-white hover:shadow-lg shadow-sm border border-gray-100 group cursor-pointer hover:border-[#2f4ea1]/30 transition-all rounded-xl overflow-hidden flex flex-col">
                                <div className="aspect-video bg-gray-50 relative overflow-hidden">
                                    <img src={art.image} alt={art.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute top-4 right-4 bg-[#2f4ea1] text-white text-[10px] font-bold px-3 py-1 tracking-widest rounded-sm">{art.tag}</div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-gray-500 text-xs font-bold tracking-widest mb-2">{art.date}</p>
                                    <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#2f4ea1] transition-colors">{art.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{art.desc}</p>
                                    <span className="text-[#2f4ea1] text-xs font-bold tracking-widest flex items-center gap-1 group-hover:-translate-x-2 transition-transform w-fit">קראו עוד <ChevronLeft size={14} /></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
            <ContactForm />
        </PageTransition>
    );
};

export default Articles;

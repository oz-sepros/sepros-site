import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';

const Articles = () => {
    const navigate = useNavigate();

    const articles = [
        { slug: 'technical-seo-2026', title: "המדריך המלא ל-SEO טכני ב-2026", date: "15 מרץ, 2026", desc: "כל מה שצריך לדעת על Core Web Vitals, סריקה של גוגל ואיך להכין את האתר שלכם לעידן ה-AI.", tag: "SEO" },
        { slug: 'double-your-roas', title: "איך להכפיל את ה-ROAS בקמפיינים בגוגל", date: "2 מרץ, 2026", desc: "סודות האופטימיזציה שסוכנויות לא מגלות: חלוקת תקציב חכמה, טיוב המרות ובידינג מבוסס ערך.", tag: "PPC" },
        { slug: 'tiktok-or-instagram', title: "טיקטוק או אינסטגרם? איפה הקהל שלכם נמצא", date: "28 פברואר, 2026", desc: "ניתוח מעמיק של פלטפורמות הסושיאל המובילות וכיצד לבנות אסטרטגיית תוכן שפוגעת בול במטרה.", tag: "סושיאל" },
        { slug: 'ux-color-psychology', title: "עיצוב UX שמוכר: פסיכולוגיה של צבעים וממשק", date: "10 פברואר, 2026", desc: "איך למקם כפתורי הנעה לפעולה, באילו צבעים להשתמש ואיך לבנות אמון דרך חוויית משתמש מושלמת.", tag: "UX/UI" },
    ];

    return (
        <PageTransition>
            <Reveal className="min-h-screen bg-black pt-48 md:pt-56 pb-32 text-right">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-black italic uppercase mb-6 text-[#4e77fc]">בלוג ומאמרים</h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light mb-16 max-w-2xl ml-auto">
                        תובנות, מדריכים וחדשות מהחזית של השיווק הדיגיטלי.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {articles.map((art, i) => (
                            <div key={i} onClick={() => navigate(`/articles/${art.slug}`)} className="bg-[#0a0a0a] border border-white/5 group cursor-pointer hover:border-[#4e77fc]/50 transition-colors rounded-xl overflow-hidden flex flex-col">
                                <div className="aspect-video bg-white/5 relative overflow-hidden">
                                    <img src={`https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=600&sig=${i}`} alt={art.title} loading="lazy" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" />
                                    <div className="absolute top-4 right-4 bg-[#4e77fc] text-white text-[10px] font-bold px-3 py-1 tracking-widest rounded-sm">{art.tag}</div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-gray-500 text-xs font-bold tracking-widest mb-2">{art.date}</p>
                                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#4e77fc] transition-colors">{art.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{art.desc}</p>
                                    <span className="text-[#4e77fc] text-xs font-bold tracking-widest flex items-center gap-1 group-hover:-translate-x-2 transition-transform w-fit">קראו עוד <ChevronLeft size={14} /></span>
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

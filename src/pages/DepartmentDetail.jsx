import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, PlayCircle, ArrowLeft, ArrowUpLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

const SocialCarousel = () => {
    const [active, setActive] = useState(2);
    const items = [0, 1, 2, 3, 4];

    const handleNext = () => setActive((prev) => (prev + 1) % items.length);
    const handlePrev = () => setActive((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="relative w-full flex items-center justify-center py-6 md:py-10 mt-6 md:mt-10 overflow-hidden">
            {/* Left Arrow (Visual Right in RTL, but we use logic for generic prev/next) */}
            <button onClick={handlePrev} className="absolute right-2 md:right-8 z-30 p-2 md:p-4 bg-black/60 text-white rounded-full hover:bg-[#2f4ea1] transition-colors"><ChevronRight size={24} /></button>

            <div className="flex items-center justify-center gap-4 md:gap-8 w-full px-12 md:px-24 h-[350px] md:h-[450px]">
                {items.map((item, i) => {
                    const isActive = i === active;
                    // Hide items too far away to keep center focus clean
                    if (Math.abs(i - active) > 2) return null;

                    return (
                        <div key={i}
                            onClick={() => setActive(i)}
                            className={`relative transition-all duration-500 ease-in-out cursor-pointer flex-shrink-0 aspect-[9/16] rounded-2xl overflow-hidden
                              ${isActive
                                    ? 'w-[180px] md:w-[260px] scale-100 opacity-100 z-20 shadow-[0_0_30px_rgba(11,92,255,0.4)] border-2 border-[#2f4ea1]'
                                    : 'w-[140px] md:w-[180px] scale-90 opacity-60 blur-[1px] z-10 hover:opacity-80'}`}>
                            <img src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400&sig=${i}`} alt="Social Reel" loading="lazy" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-white/10 flex items-center justify-center">
                                {isActive && <PlayCircle size={60} className="text-white hover:scale-110 transition-transform drop-shadow-xl" />}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Right Arrow */}
            <button onClick={handleNext} className="absolute left-2 md:left-8 z-30 p-2 md:p-4 bg-black/60 text-white rounded-full hover:bg-[#2f4ea1] transition-colors"><ChevronLeft size={24} /></button>
        </div>
    )
}

const DepartmentPortfolio = ({ category }) => {
    if (category === 'social') {
        return (
            <div className="mt-16 md:mt-24">
                <h4 className="text-white font-black text-2xl md:text-3xl mb-4 border-r-4 border-[#2f4ea1] pr-4">הפקות וידאו למובייל</h4>
                <SocialCarousel />
            </div>
        );
    }

    if (category === 'ppc' || category === 'seo' || category === 'analytics') {
        const isPPC = category === 'ppc';
        return (
            <div className="mt-16 md:mt-24">
                <h4 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">נתונים שמדברים</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: isPPC ? "החזר השקעה (ROAS)" : "גידול בטראפיק", val: isPPC ? "x4.5" : "+280%" },
                        { label: isPPC ? "עלות לליד (CPL)" : "מיקומים בעמוד 1", val: isPPC ? "-35%" : "150+" },
                        { label: "יחס המרה (CR)", val: "+12%" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white shadow-sm hover:shadow-md transition-shadow border border-gray-100 p-8 text-center rounded-lg">
                            <div className="text-5xl font-black text-[#2f4ea1] mb-2 dir-ltr">{stat.val}</div>
                            <div className="text-gray-500 text-sm font-bold tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (category === 'tech' || category === 'design') {
        return (
            <div className="mt-16 md:mt-24">
                <h4 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">{category === 'tech' ? 'פרויקטים נבחרים (Web)' : 'ספרי מותג ו-UI/UX'}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(i => (
                        <div key={i} className="bg-white border border-gray-100 shadow-sm p-4 group cursor-pointer relative overflow-hidden rounded-lg">
                            <div className="aspect-video bg-gray-100 overflow-hidden relative rounded-md">
                                <img src={category === 'tech' ? `https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&sig=${i}` : `https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&sig=${i}`} alt="Project" loading="lazy" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-[#2f4ea1]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink size={32} className="text-white mb-2" />
                                    <span className="text-white font-bold tracking-widest text-sm">צפו בפרויקט</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return null;
};

const DepartmentDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const data = {
        ppc: { title: "PPC וביצועים", long: "אנחנו מנהלים תקציבי ענק באופטימיזציה מקסימלית. הגישה שלנו ל-PPC היא מדעית: ניתוח קהלים, שיפור יחס המרה ושימוש בכלי AI לניהול בידים.", services: ["חיפוש ורשת המדיה בגוגל", "ניהול מטא (פייסבוק/אינסטגרם)", "קמפיינים בטיקטוק ולינקדאין", "רימרקטינג דינמי"] },
        social: { title: "סושיאל וקריאייטיב", long: "הסיפור שלכם צריך להיות מסופר נכון. אנחנו יוצרים שפה ויזואלית שגורמת למשתמשים לעצור את הגלילה ולהתחבר רגשית למותג שלכם.", services: ["הפקת Reels ו-TikTok", "שיווק משפיענים", "ניהול קהילות", "אסטרטגיה קריאייטיבית"] },
        design: { title: "סטודיו ו-UX/UI", long: "עיצוב פרימיום הוא לא מותרות – הוא הכרח. אנחנו מאפיינים ומעצבים ממשקים שמרגישים טבעיים למשתמש ומייצרים אמון מיידי במותג.", services: ["מחקר ואסטרטגיית UX", "עיצוב UI מודרני", "זהות ומיתוג תאגידי", "בניית שפה עיצובית"] },
        tech: { title: "פיתוח אתרים", long: "האתר הוא הבית שלכם בדיגיטל. אנחנו בונים אתרים בטכנולוגיות מתקדמות כדי להבטיח מהירות שיא, קידום אורגני וחווית ניהול נוחה.", services: ["אפליקציות React/Next.js", "איקומרס מתקדם", "חיבורי API", "אבטחה ותחזוקה"] },
        seo: { title: "קידום אורגני (SEO)", long: "להיות בראש תוצאות החיפוש זו ריצה למרחקים ארוכים. אנחנו משלבים SEO טכני עמוק עם אסטרטגיית תוכן שבונה סמכות מול גוגל.", services: ["בדיקת SEO טכנית", "מחקר מילות מפתח", "בניית פרופיל קישורים", "אסטרטגיית תוכן"] },
        analytics: { title: "אנליטיקס ודאטה", long: "בלי מדידה אין שיפור. אנחנו עוזרים לכם להבין בדיוק מה קורה באתר, מאיפה מגיעים הלקוחות הרווחיים ואיך לייעל את התקציב.", services: ["הטמעת GA4 ו-Tag Manager", "דאשבורדים בזמן אמת", "מעקב המרות מתקדם", "BigQuery"] }
    };
    const dept = data[id] || data.ppc;

    return (
        <Reveal className="min-h-screen bg-white pt-32 md:pt-40 pb-20 text-right">
            <div className="max-w-[1400px] mx-auto px-6">
                <button onClick={() => navigate('/')} className="group text-[#2f4ea1] flex items-center gap-2 mb-8 font-black tracking-widest text-xs">
                    חזרה לדף הבית <ArrowUpLeft className="rotate-90 group-hover:translate-x-2 transition-transform" />
                </button>
                <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-start">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black uppercase mb-6 text-[#2f4ea1]">{dept.title}</h1>
                        <p className="text-gray-600 text-lg md:text-xl font-light mb-8 leading-relaxed">{dept.long}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {dept.services.map((s, i) => (
                                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 md:p-5 border border-gray-100 rounded-md">
                                    <CheckCircle2 className="text-[#2f4ea1] shrink-0" size={18} />
                                    <span className="font-bold text-gray-800 text-sm">{s}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Replaced broken SeprosLogo with simple fallback styling */}
                    <div className="aspect-square md:aspect-[4/5] bg-gray-50 border border-gray-100 flex items-center justify-center p-8 rounded-xl shadow-sm">
                        <img src="/src/assets/logo.png" alt="Sepros Icon" className="w-32 h-32 object-contain filter invert opacity-30 blur-[2px]" />
                    </div>
                </div>

                <DepartmentPortfolio category={id || 'ppc'} />

                <div className="mt-20 md:mt-24 p-8 md:p-12 bg-gray-50 border border-[#2f4ea1]/20 text-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2f4ea1]/10 to-transparent pointer-events-none"></div>
                    <h4 className="text-2xl md:text-3xl font-black relative z-10 text-[#2f4ea1]">מוכנים להתחיל לעבוד?</h4>
                    <button id="dept_contact_btn" onClick={() => navigate('/contact')} className="bg-[#2f4ea1] text-white px-8 py-4 font-black tracking-widest hover:bg-[#0747cc] transition-all rounded-full relative z-10 shadow-md">בואו נתחיל</button>
                </div>
            </div>
        </Reveal>
    );
};

export default DepartmentDetail;

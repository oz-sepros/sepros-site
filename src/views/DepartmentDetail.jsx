"use client";
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, PlayCircle, ArrowLeft, ArrowUpLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';


const SocialCarousel = () => {
    const [active, setActive] = useState(2);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    
    // פלייסאהולדרים של סרטוני יוטיוב לדוגמה לשורטס/רילס
    const items = [
        { id: "M7lc1UVf-VE" }, 
        { id: "tgbNymZ7vqY" },
        { id: "LXb3EKWsInQ" },
        { id: "aqz-KE-bpKQ" },
        { id: "zpOULjyy-n8" }
    ];

    const handleNext = () => setActive((prev) => (prev + 1) % items.length);
    const handlePrev = () => setActive((prev) => (prev - 1 + items.length) % items.length);

    return (
        <div className="relative w-full flex flex-col items-center justify-center py-16 md:py-24 mt-6 md:mt-10 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 rounded-[2.5rem] border border-gray-100 shadow-sm border-t-4 border-t-[#2f4ea1]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[300px] bg-[#2f4ea1]/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 text-center relative z-10 tracking-tight">ככה נראה סושיאל מנצח.</h3>
            <p className="text-gray-500 text-lg md:text-xl text-center max-w-3xl mb-12 relative z-10 px-6 font-medium">הצצה להפקות וידאו שוברות רשת ולסרטוני שורטס וטיקטוק שמייצרים חשיפה ויראלית ומאות לידים ללקוחות שלנו בעולמות B2B ו-B2C.</p>

            <button onClick={handlePrev} className="absolute right-2 md:right-8 top-1/2 translate-y-1/2 z-30 p-2 md:p-4 bg-white/90 shadow-lg text-[#2f4ea1] rounded-full hover:bg-[#2f4ea1] hover:text-white transition-colors"><ChevronRight size={24} /></button>

            <div className="flex items-center justify-center gap-2 md:gap-6 w-full px-4 md:px-24 h-[400px] md:h-[500px]">
                {items.map((item, i) => {
                    const isActive = i === active;
                    if (Math.abs(i - active) > 2) return null;

                    return (
                        <div key={i}
                            onClick={() => isActive ? setLightboxOpen(true) : setActive(i)}
                            className={`group relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer flex-shrink-0 aspect-[9/16] rounded-[2rem] overflow-hidden bg-black
                              ${isActive
                                    ? 'w-[200px] md:w-[280px] scale-110 md:scale-110 opacity-100 z-20 shadow-[0_20px_50px_rgba(47,78,161,0.25)] border-[6px] border-white'
                                    : 'w-[140px] md:w-[200px] scale-90 opacity-30 hover:opacity-60 blur-[1px] md:blur-[2px] z-10 shadow-lg'}`}>
                            
                            <img src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} alt="שורטס - דוגמה" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className={`absolute inset-0 transition-colors duration-500 flex items-center justify-center ${isActive ? 'bg-black/10 hover:bg-black/20' : 'bg-black/40'}`}>
                                {isActive && (
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-white transition-transform duration-300">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 ml-1 md:ml-1.5 text-[#2f4ea1]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z"></path></svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

            <button onClick={handleNext} className="absolute left-2 md:left-8 top-1/2 translate-y-1/2 z-30 p-2 md:p-4 bg-white/90 shadow-lg text-[#2f4ea1] rounded-full hover:bg-[#2f4ea1] hover:text-white transition-colors"><ChevronLeft size={24} /></button>

            {/* Lightbox Overlay */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10" onClick={() => setLightboxOpen(false)}>
                    <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-colors z-[60]" onClick={() => setLightboxOpen(false)}>
                        <ArrowLeft className="rotate-180" size={24} />
                    </button>
                    
                    <div className="relative w-full max-w-[420px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(47,78,161,0.4)] border border-white/10" onClick={(e) => e.stopPropagation()}>
                        <iframe 
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${items[active].id}?autoplay=1&mute=0&controls=1&rel=0`} 
                            title="YouTube Shorts" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}
        </div>
    )
}

    if (category === 'social') {
        return (
            <div className="mt-16 md:mt-24 w-full">
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
    const router = useRouter();

    const data = {
        ppc: { title: "PPC וביצועים", long: "אנחנו מנהלים תקציבי ענק באופטימיזציה מקסימלית. הגישה שלנו ל-PPC היא מדעית: ניתוח קהלים, שיפור יחס המרה ושימוש בכלי AI לניהול בידים.", services: ["חיפוש ורשת המדיה בגוגל", "ניהול מטא (פייסבוק/אינסטגרם)", "קמפיינים בטיקטוק ולינקדאין", "רימרקטינג דינמי"] },
        social: { title: "סושיאל דומיננטי וקריאייטיב מדויק", long: "הסיפור שלכם צריך לפגוש את הלקוחות בדיוק במקום שבו הם נמצאים. אנחנו לוקחים מותגים והופכים אותם לתופעת רשת בעזרת שפה ויזואלית ייחודית, הפקות וידאו ויראליות בסגנון Shorts ו-TikTok, ואסטרטגיית סושיאל שעוצרת את הגלילה (Scroll-stoppers). העידן החדש דורש תוכן מהיר, חד, ומבוסס דאטה.", services: ["הפקת Reels ו-TikTok", "קריאייטיב וצילום מוצרים", "פיתוח שפה מותגית אותנטית", "שיווק משפיענים"] },
        design: { title: "סטודיו ו-UX/UI", long: "עיצוב פרימיום הוא לא מותרות – הוא הכרח. אנחנו מאפיינים ומעצבים ממשקים שמרגישים טבעיים למשתמש ומייצרים אמון מיידי במותג.", services: ["מחקר ואסטרטגיית UX", "עיצוב UI מודרני", "זהות ומיתוג תאגידי", "בניית שפה עיצובית"] },
        tech: { title: "פיתוח אתרים", long: "האתר הוא הבית שלכם בדיגיטל. אנחנו בונים אתרים בטכנולוגיות מתקדמות כדי להבטיח מהירות שיא, קידום אורגני וחווית ניהול נוחה.", services: ["אפליקציות React/Next.js", "איקומרס מתקדם", "חיבורי API", "אבטחה ותחזוקה"] },
        seo: { title: "קידום אורגני (SEO)", long: "להיות בראש תוצאות החיפוש זו ריצה למרחקים ארוכים. אנחנו משלבים SEO טכני עמוק עם אסטרטגיית תוכן שבונה סמכות מול גוגל.", services: ["בדיקת SEO טכנית", "מחקר מילות מפתח", "בניית פרופיל קישורים", "אסטרטגיית תוכן"] },
        analytics: { title: "אנליטיקס ודאטה", long: "בלי מדידה אין שיפור. אנחנו עוזרים לכם להבין בדיוק מה קורה באתר, מאיפה מגיעים הלקוחות הרווחיים ואיך לייעל את התקציב.", services: ["הטמעת GA4 ו-Tag Manager", "דאשבורדים בזמן אמת", "מעקב המרות מתקדם", "BigQuery"] }
    };
    const dept = data[id] || data.ppc;

    return (
        <Reveal className="min-h-screen bg-white pt-32 md:pt-40 pb-20 text-right">
            <div className="max-w-[1400px] mx-auto px-6">
                <button onClick={() => router.push('/')} className="group text-[#2f4ea1] flex items-center gap-2 mb-8 font-black tracking-widest text-xs">
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
                        <img src="/logos/Logo.svg" alt="לוגו תצוגה" className="w-32 h-32 object-contain filter invert opacity-30 blur-[2px]" />
                    </div>
                </div>

                <DepartmentPortfolio category={id || 'ppc'} />

                <div className="mt-20 md:mt-24 p-8 md:p-12 bg-gray-50 border border-[#2f4ea1]/20 text-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2f4ea1]/10 to-transparent pointer-events-none"></div>
                    <h4 className="text-2xl md:text-3xl font-black relative z-10 text-[#2f4ea1]">מוכנים להתחיל לעבוד?</h4>
                    <button id="dept_contact_btn" onClick={() => router.push('/contact')} className="bg-[#2f4ea1] text-white px-8 py-4 font-black tracking-widest hover:bg-[#0747cc] transition-all rounded-full relative z-10 shadow-md">בואו נתחיל</button>
                </div>
            </div>
        </Reveal>
    );
};

export default DepartmentDetail;

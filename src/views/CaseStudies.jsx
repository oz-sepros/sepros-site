"use client";
import { useRouter } from 'next/navigation';
import { Target, BarChart3, Zap, Search, ArrowUpLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';
import SpotlightCard from '../components/SpotlightCard';

const CaseStudies = () => {
    const router = useRouter();

    const cases = [
        { name: "TechFlow SaaS", metric: "גידול של 350% בלידים B2B", desc: "בניית משפך שיווקי בלינקדאין שהוביל להכפלת כמות הדמואים תוך רבעון.", icon: Target },
        { name: "EcoSmart", metric: "ירידה של 45% ב-CPA", desc: "אופטימיזציה חכמה לקמפיינים במטא, שימוש בדאטה למיקוד ויצירת קריאייטיב ממיר.", icon: BarChart3 },
        { name: "StyleVibe", metric: "החזר השקעה (ROAS) של x4", desc: "השקת מותג אופנה בטיקטוק עם קריאייטיב ויראלי שהעיף את המכירות.", icon: Zap },
        { name: "UrbanSpaces", metric: "מעל 1,200 לידים טריים", desc: "שליטה מוחלטת בתוצאות החיפוש בנישות נדל״ן וחיסכון אדיר בתקציבי מדיה.", icon: Search },
        { name: "HealthTech AI", metric: "גידול של 200% במשתמשים", desc: "שיווק אפליקציית בריאות מותאמת אישית מבוססת בינה מלאכותית.", icon: Target },
        { name: "FinServe Pro", metric: "הורדת עלות ליד ב-60%", desc: "קמפיינים חכמים בגוגל עבור שירותים פיננסיים מורכבים.", icon: BarChart3 }
    ];

    return (
        <PageTransition>
            <Reveal className="min-h-screen bg-[#F5F7FA] pt-48 md:pt-56 pb-32 text-right">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 text-[#2f4ea1]">קייס סטאדיז</h1>
                    <p className="text-gray-600 text-lg md:text-xl font-light mb-16 max-w-2xl ml-auto">
                        איך הדאטה והקריאייטיב שלנו מביאים תוצאות מרשימות עבור לקוחותינו.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 dir-rtl">
                        {cases.map((c, i) => (
                            <div key={i} onClick={() => router.push(`/casestudies/demo-project-${i}`)}>
                                <SpotlightCard
                                    style={{ background: 'linear-gradient(135deg, #09102c 0%, #1e3082 50%, #6869ba 100%)' }}
                                    className="group p-5 md:p-8 lg:p-10 rounded-[1.5rem] md:rounded-[2rem] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 h-[130px] md:h-[420px] text-right"
                                >
                                    <div className="grid grid-cols-[1fr_auto] md:flex md:flex-col justify-between items-center md:items-start h-full w-full">
                                        {/* Decorative immense background icon */}
                                        <c.icon size={280} className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 text-white opacity-[0.03] group-hover:scale-110 group-hover:opacity-10 active:scale-[1.15] active:opacity-[0.12] transition-all duration-[1200ms] pointer-events-none" />

                                        <div className="flex flex-col justify-center md:justify-start h-full z-10">
                                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0 md:mb-6 leading-tight max-w-[95%]">{c.name}: <span className="md:hidden"> </span><br className="hidden md:block" /> {c.metric}</h4>
                                            <p className="hidden md:block text-white/90 text-sm md:text-base leading-relaxed line-clamp-3">{c.desc}</p>
                                        </div>
                                        <div className="z-10 mt-auto mb-auto md:mb-0 md:self-end">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 shadow-lg text-gray-900 transition-transform">
                                                <ArrowUpLeft size={24} className="group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform w-[18px] h-[18px] md:w-6 md:h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </SpotlightCard>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
            <ContactForm />
        </PageTransition>
    );
};

export default CaseStudies;

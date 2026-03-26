"use client";
import { useEffect, useState, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowUpLeft, Target, BarChart3, TrendingUp, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import ContactForm from '../components/ContactForm';

const AnimatedMetric = ({ prefix = "", end, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) setIsVisible(true);
        }, { threshold: 0.5 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const duration = 2000;
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else { setCount(start); }
        }, 16);
        return () => clearInterval(timer);
    }, [isVisible, end]);

    const formattedCount = Math.floor(count).toLocaleString('he-IL');

    return (
        <span ref={ref} className="inline-block">
            {prefix}{formattedCount}{suffix}
        </span>
    );
};
const CaseStudy = () => {
    const { slug } = useParams();
    const router = useRouter();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    return (
        <PageTransition>
            {/* Hero Section */}
            <div className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
                        alt="Case Study Cover" 
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#09102c]/95 via-[#09102c]/95 to-[#F5F7FA]"></div>
                </div>
                
                <div className="relative z-10 max-w-4xl mx-auto text-center text-white dir-rtl mt-12">
                    <Reveal>
                        <div className="inline-block bg-[#2f4ea1]/30 border border-[#2f4ea1]/50 text-white text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-widest backdrop-blur-sm">
                            לקוח דמו: סקטור טכנולוגיה
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
                            איך הכפלנו עסקאות <span className="text-[#4e77fc]">B2B</span> ברבעון אחד בלבד
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                            קייס סטאדי (דמו): שינוי אסטרטגיית לינקדאין, הטמעת אוטומציות דאטה מורכבות והורדת עלות הליד ב-45%.
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-[#F5F7FA] pb-32 px-6">
                <div className="max-w-[1200px] mx-auto -mt-20 relative z-20">
                    
                    {/* Metrics Bar */}
                    <Reveal className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 mb-20 dir-rtl">
                        <div className="text-center w-full md:w-1/3 border-b md:border-b-0 md:border-l border-gray-100 pb-8 md:pb-0 md:pl-8">
                            <TrendingUp size={40} className="text-[#2f4ea1] mx-auto mb-4" />
                            <div className="text-5xl font-black text-gray-900 mb-2 dir-ltr"><AnimatedMetric prefix="+" end={350} suffix="%" /></div>
                            <div className="text-gray-500 font-bold text-sm tracking-wide">עלייה בלידים איכותיים</div>
                        </div>
                        <div className="text-center w-full md:w-1/3 border-b md:border-b-0 md:border-l border-gray-100 pb-8 md:pb-0 md:pl-8">
                            <Target size={40} className="text-[#2f4ea1] mx-auto mb-4" />
                            <div className="text-5xl font-black text-gray-900 mb-2 dir-ltr"><AnimatedMetric prefix="-" end={45} suffix="%" /></div>
                            <div className="text-gray-500 font-bold text-sm tracking-wide">ירידה בעלות רכישת לקוח (CPA)</div>
                        </div>
                        <div className="text-center w-full md:w-1/3">
                            <BarChart3 size={40} className="text-[#2f4ea1] mx-auto mb-4" />
                            <div className="text-5xl font-black text-gray-900 mb-2 dir-ltr"><AnimatedMetric prefix="X" end={4} suffix="" /></div>
                            <div className="text-gray-500 font-bold text-sm tracking-wide">החזר השקעה (ROAS)</div>
                        </div>
                    </Reveal>

                    {/* Story Grid */}
                    <div className="grid lg:grid-cols-3 gap-16 dir-rtl">
                        <div className="lg:col-span-2 space-y-16">
                            <Reveal>
                                <h3 className="text-3xl font-black text-[#09102c] mb-6">האתגר שעמד בפנינו</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    החברה הגיעה אלינו לאחר שנתקלה בתקרת זכוכית: התקציב בגוגל שרף אלפי דולרים ביום, אבל הלידים שהגיעו היו לא רלוונטיים (Junk Leads), ואנשי המכירות בזבזו זמן יקר על שיחות סרק. המטרה הרשמית: לייצר לידים מסוג B2B ברמת מוכנות גבוהה, מבלי להגדיל את התקציב הכולל.
                                </p>
                            </Reveal>

                            <Reveal>
                                <h3 className="text-3xl font-black text-[#09102c] mb-6">הפתרון והאסטרטגיה</h3>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    הבנו שהבעיה לא הייתה המודעות, אלא המשפך עצמו. הפתרון כלל שלושה מהלכים מרכזיים:
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "הקמת מערך LinkedIn Ads ממוקד אנשי מפתח בחברות טכנולוגיה.",
                                        "בניית דף נחיתה אינטראקטיבי שמסנן לקוחות לפי גודל תקציב (Micro-Commitments).",
                                        "חיבור המערכת אופליין חזרה למנוע של גוגל (Offline Conversion Tracking) כדי לאותת לאלגוריתם איזה ליד נסגר בסוף העסקה."
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-[#2f4ea1] shrink-0 mt-1" size={20} />
                                            <span className="text-gray-600 text-lg leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        </div>

                        {/* Sticky Sidebar */}
                        <div className="lg:col-span-1">
                            <Reveal className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm sticky top-32">
                                <h4 className="text-xl font-black text-[#09102c] mb-6 border-b-2 border-[#2f4ea1] inline-block pb-2">תקציר הפרויקט</h4>
                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">שירותים שסופקו</div>
                                        <div className="text-gray-800 font-bold">ניהול קמפיינים (PPC)<br/>אופטימיזציית יחס המרה (CRO)<br/>אוטומציות דאטה</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">פלטפורמות</div>
                                        <div className="text-gray-800 font-bold">Google Ads, LinkedIn, Hubspot</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-bold tracking-widest uppercase mb-1">זמן ביצוע</div>
                                        <div className="text-gray-800 font-bold">3 חודשים (רבעון מלא)</div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* Gallery or Large Image */}
                    <Reveal className="mt-20 rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                        <img 
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600" 
                            alt="Project Dashboard" 
                            className="w-full h-auto object-cover"
                        />
                    </Reveal>
                </div>
            </div>
            
            <ContactForm />
        </PageTransition>
    );
};

export default CaseStudy;

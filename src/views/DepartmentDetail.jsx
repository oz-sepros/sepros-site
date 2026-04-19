"use client";
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, PlayCircle, ArrowLeft, ArrowUpLeft, TrendingUp, Search, MonitorSmartphone, Code2, Globe, Target, LineChart, Palette, Layout, Settings, Users, BarChart, Lightbulb, Compass, FileText, Camera, Video, MessageSquare, Briefcase } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import FAQ from '../components/FAQ';
import PlatformsMarquee from '../components/PlatformsMarquee';

const ProcessTimeline = ({ title, subtitle, steps }) => {
    const [lineVisible, setLineVisible] = useState(false);
    const lineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setLineVisible(true);
            }
        }, { threshold: 0.3 });
        if (lineRef.current) observer.observe(lineRef.current);
        return () => observer.disconnect();
    }, []);

    if (!steps || steps.length === 0) return null;
    return (
        <div className="mt-20 md:mt-28 w-full border-t border-gray-100 pt-20">
            <div className="text-center mb-12 md:mb-16">
                <h4 className="text-[#0b1638] font-black text-3xl md:text-4xl text-balance">{title}</h4>
                <p className="text-[#2f4ea1] font-bold mt-2 tracking-widest text-sm md:text-base">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative max-w-6xl mx-auto px-4" ref={lineRef}>
                <div className="hidden md:block absolute top-[2.25rem] left-[12%] right-[12%] h-[2px] bg-gray-100 z-0 overflow-hidden rounded-full">
                    <div 
                        className="h-full bg-[#2f4ea1] transition-all duration-[1500ms] ease-[cubic-bezier(0.22,1,0.36,1)]" 
                        style={{ 
                            width: lineVisible ? '100%' : '0%',
                            marginLeft: 'auto'
                        }} 
                    ></div>
                </div>
                {steps.map((step, idx) => (
                    <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                        <div className="w-20 h-20 rounded-full bg-white border-2 border-gray-100 group-hover:border-[#2f4ea1] text-[#2f4ea1] flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 relative">
                            {step.icon}
                            <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#2f4ea1] text-white text-xs font-black flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">{idx + 1}</div>
                        </div>
                        <h5 className="font-black text-lg text-gray-900 mb-2 group-hover:text-[#2f4ea1] transition-colors">{step.title}</h5>
                        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-[250px] text-balance">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};


const SocialCarousel = () => {
    const [active, setActive] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [autoPlay, setAutoPlay] = useState(true);
    
    // הסרטונים האמיתיים (YouTube Shorts) של הלקוח
    const baseItems = [
        { id: "8l4iphxZurc" }, 
        { id: "ABEaNtb2oeA" },
        { id: "uc110NcS9zc" },
        { id: "bggmFXyPUYE" },
        { id: "CUV3z0Ify9Y" },
        { id: "L0T-QWKvLqU" },
        { id: "i2D0NOb4IZ8" }
    ];
    // נכפיל את המערך כדי למנוע קפיצות ויזואליות במצב מעגל אינסופי
    const items = [...baseItems, ...baseItems];

    const handleNext = () => {
        setActive((prev) => (prev + 1) % items.length);
        setPlaying(false);
    };
    const handlePrev = () => {
        setActive((prev) => (prev - 1 + items.length) % items.length);
        setPlaying(false);
    };

    useEffect(() => {
        let interval;
        if (!isHovered && !playing && autoPlay) {
            interval = setInterval(() => {
                handleNext();
            }, 3500); // 3.5 שניות, לא מהיר מידי
        }
        return () => clearInterval(interval);
    }, [isHovered, playing, autoPlay, items.length]);

    // Touch Handlers למובייל
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setAutoPlay(false); // הפסקת סיבוב אוטומטי כשנוגעים
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            setAutoPlay(true);
            return;
        }
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;
        
        // בעברית RTL: החלקת ימינה מביאה מהצד השמאלי (Next). החלקת שמאלה מביאה מהצד הימני (Prev)
        if (isRightSwipe) handleNext();
        if (isLeftSwipe) handlePrev();
        
        // החזרת הניגון האוטומטי אחרי כמה שניות של חוסר מגע
        setTimeout(() => setAutoPlay(true), 2500);
    };

    // פונקציה לחישוב המרחק של כל סרטון מהמרכז
    const getOffset = (index) => {
        let offset = index - active;
        // מציאת הנתיב הקצר ביותר במעגל
        if (offset > Math.floor(items.length / 2)) offset -= items.length;
        if (offset < -Math.floor(items.length / 2)) offset += items.length;
        return offset;
    };

    return (
        <div 
            className="relative w-full flex flex-col items-center justify-center pb-12 md:pb-20 pt-8 md:pt-14 mt-4 md:mt-8 overflow-hidden touch-pan-y"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[800px] h-[300px] bg-[#2f4ea1]/5 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h3 className="text-4xl md:text-5xl font-black text-[#2f4ea1] mb-2 md:mb-4 text-center relative z-10 tracking-tight text-balance">הצצה לתוכן שאנחנו יוצרים</h3>
            <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mb-6 md:mb-10 relative z-10 px-6 font-medium text-balance">תוכן שמניע לפעולה - UGC, רילסים, פרסומות קצרות, טרנדים, לפני/אחרי.</p>

            <div className="relative flex items-center justify-center w-full h-[460px] md:h-[550px] max-w-[1200px] mx-auto">
                <button onClick={handlePrev} className="absolute right-2 md:right-12 top-1/2 z-40 p-3 md:p-4 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.15)] text-[#2f4ea1] rounded-full hover:bg-[#2f4ea1] hover:text-white transition-all hover:scale-110 -translate-y-1/2"><ChevronRight size={24} /></button>
                <button onClick={handleNext} className="absolute left-2 md:left-12 top-1/2 z-40 p-3 md:p-4 bg-white/95 shadow-[0_4px_20px_rgba(0,0,0,0.15)] text-[#2f4ea1] rounded-full hover:bg-[#2f4ea1] hover:text-white transition-all hover:scale-110 -translate-y-1/2"><ChevronLeft size={24} /></button>

                {items.map((item, i) => {
                    const offset = getOffset(i);
                    const isActive = offset === 0;

                    let classNames = '';
                    switch (offset) {
                        case 0:
                            classNames = 'translate-x-0 scale-100 md:scale-110 z-30 opacity-100 shadow-[0_20px_50px_rgba(47,78,161,0.25)] border-[4px] md:border-[6px] border-white';
                            break;
                        case 1:
                            classNames = '-translate-x-[150px] md:-translate-x-[240px] scale-100 z-20 opacity-60 blur-[1px] hover:opacity-100 hover:blur-none cursor-pointer shadow-lg';
                            break;
                        case -1:
                            classNames = 'translate-x-[150px] md:translate-x-[240px] scale-100 z-20 opacity-60 blur-[1px] hover:opacity-100 hover:blur-none cursor-pointer shadow-lg';
                            break;
                        case 2:
                            classNames = '-translate-x-[260px] md:-translate-x-[420px] scale-100 z-10 opacity-30 blur-[3px] shadow-sm';
                            break;
                        case -2:
                            classNames = 'translate-x-[260px] md:translate-x-[420px] scale-100 z-10 opacity-30 blur-[3px] shadow-sm';
                            break;
                        default:
                            classNames = offset > 0 
                                ? '-translate-x-[340px] md:-translate-x-[600px] scale-100 z-0 opacity-0 pointer-events-none' 
                                : 'translate-x-[340px] md:translate-x-[600px] scale-100 z-0 opacity-0 pointer-events-none';
                            break;
                    }

                    return (
                        <div key={i}
                            onClick={() => {
                                if (isActive) setPlaying(true);
                                else { setActive(i); setPlaying(false); }
                            }}
                            className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-[240px] md:w-[280px] aspect-[9/16] rounded-2xl md:rounded-[2rem] overflow-hidden bg-black ${classNames}`}>
                            
                            {isActive && playing ? (
                                <iframe 
                                    className="w-full h-full object-cover"
                                    src={`https://www.youtube.com/embed/${item.id}?autoplay=1&mute=0&controls=1&rel=0`} 
                                    title="YouTube Shorts" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                            ) : (
                                <>
                                    <img src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} alt="שורטס - דוגמה" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-105" />
                                    <div className={`absolute inset-0 transition-colors duration-500 flex items-center justify-center ${isActive ? 'bg-black/10 hover:bg-black/20' : 'bg-black/40'}`}>
                                        {isActive && (
                                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:scale-110 hover:bg-white transition-transform duration-300">
                                                <svg className="w-6 h-6 md:w-8 md:h-8 ml-1 md:ml-1.5 text-[#2f4ea1]" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6V4z"></path></svg>
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
const DepartmentPortfolio = ({ category }) => {
    const [showAllDesign, setShowAllDesign] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    if (category === 'social') {
        return (
            <div className="mt-10 md:mt-16 w-full">
                <SocialCarousel />
            </div>
        );
    }

    if (category === 'ppc' || category === 'analytics') {
        const isPPC = category === 'ppc';
        return (
            <div className="mt-16 md:mt-24">
                {isPPC && (
                    <div className="mb-16 -mx-6 md:mx-0 rounded-2xl overflow-hidden">
                        <PlatformsMarquee />
                    </div>
                )}
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

    if (category === 'tech') {
        const webProjects = [
            { id: "toronto", title: "ישראל קנדה - Toronto", link: "https://lp.israel-canada.co.il/english/toronto_israel_canada/", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
            { id: "renovo", title: "רנובו - מגדל ביאליק", link: "https://lp.renovo.co.il/bialik_ramat_hasharon/", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
            { id: "madbrand", title: "מדברנד - פנים", link: "https://madbrand.co.il/", image: "https://images.unsplash.com/photo-1542004143822-26139ceea0d7?q=80&w=800&auto=format&fit=crop" },
            { id: "midtown", title: "ישראל קנדה - Midtown Jerusalem", link: "https://lp.israel-canada.co.il/midtown_jerusalem/", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop" },
            { id: "colmobil", title: "כלמוביל אנרגיה", link: "https://lp.colmobil-energy.co.il/haver_mevi_haver/", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
            { id: "azorim-melach", title: "אזורים - מלח הארץ", link: "https://lp.azorim.co.il/minisite_melach_haaretz/", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800&auto=format&fit=crop" },
            { id: "azorim-main", title: "אזורים", link: "https://www.azorim.co.il/", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" }
        ];


        return (
            <div className="mt-16 md:mt-24">
                <h4 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">פרויקטים נבחרים (Web)</h4>
                <p className="text-gray-500 mb-8 font-medium">כדי לראות את איכות הפיתוח המלאה, לחצו על הפרויקטים וצפו בהם באוויר.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {webProjects.map((project, i) => (
                        <div key={i} 
                             onClick={() => window.open(project.link, '_blank')} 
                             onMouseEnter={(e) => { const v = e.currentTarget.querySelector('video'); if (v) v.play().catch(()=>{}); }}
                             onMouseLeave={(e) => { const v = e.currentTarget.querySelector('video'); if (v) { v.pause(); v.currentTime = 0; } }}
                             className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-0 group cursor-pointer relative overflow-hidden rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block">
                            {/* Browser Top Bar */}
                            <div className="h-7 md:h-8 bg-[#F5F7FA] border-b border-gray-200 flex items-center px-4 gap-2 z-20 relative">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                <div className="mx-auto flex-1 flex justify-center opacity-0 md:opacity-100">
                                    <div className="h-4 w-1/2 bg-gray-200 rounded-full"></div>
                                </div>
                            </div>
                            <div className="aspect-video bg-gray-100 overflow-hidden relative">
                                <img src={`/portfolio/${project.id}.webp`} onError={(e) => { e.target.onerror = null; e.target.src = project.image; }} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                {/* Video Hover Layout */}
                                <video src={`/portfolio/${project.id}.mp4`} muted loop playsInline preload="none" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" onError={(e) => { e.target.style.display = 'none'; }} />
                                
                                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#09102c]/90 via-[#09102c]/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                                    <span className="text-white font-bold tracking-wide text-sm drop-shadow-md">{project.title}</span>
                                </div>
                                <div className="absolute inset-0 bg-[#2f4ea1]/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]">
                                    <ExternalLink size={32} className="text-white mb-2" />
                                    <span className="text-white font-bold tracking-widest text-sm text-center px-4">צפו באתר החי</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Tech Stack Segment */}
                <div className="mt-16 md:mt-24 pt-16 border-t border-gray-100">
                    <div className="text-center mb-10">
                        <h4 className="text-[#0b1638] font-black text-2xl md:text-4xl text-balance">מובילים טכנולוגית</h4>
                        <p className="text-gray-500 font-bold mt-2 tracking-widest">הכלים שאנחנו עובדים איתם</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto" dir="ltr">
                        {['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'Vercel', 'AWS', 'Shopify', 'WordPress Elementor'].map(tech => (
                            <span key={tech} className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-full shadow-sm text-sm hover:border-[#2f4ea1] hover:text-[#2f4ea1] hover:shadow-md transition-all cursor-default">{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (category === 'seo') {
        return (
            <div className="mt-16 md:mt-24 group">
                <h4 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">אסטרטגיה אורגנית שמנצחת את האלגוריתם</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                    <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-gray-100 flex flex-col justify-end items-center overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow group-hover:border-[#2f4ea1]/20">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F5F7FA]/80 pointer-events-none z-0"></div>
                        
                        {/* CSS Bar Chart Mockup */}
                        <div className="w-full h-32 flex items-end justify-between gap-1 md:gap-2 mb-8 opacity-90 relative z-10 px-0 md:px-4">
                            {[15, 25, 30, 45, 60, 100].map((h, idx) => (
                                <div key={idx} className={`w-full rounded-t flex-shrink-0 transition-all duration-1000 origin-bottom ${idx === 5 ? 'bg-[#2f4ea1] relative scale-105' : 'bg-[#2f4ea1]/20 group-hover:bg-[#2f4ea1]/30'}`} style={{ height: `${h}%` }}>
                                    {idx === 5 && <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-green-500 text-white font-bold px-3 py-1.5 rounded-lg text-sm whitespace-nowrap shadow-lg flex items-center gap-1.5"><TrendingUp size={16} /> +340%</div>}
                                </div>
                            ))}
                        </div>

                        <div className="text-4xl md:text-5xl font-black text-[#0b1638] mb-2 tracking-tighter relative z-10 hover:text-[#2f4ea1] transition-colors">צמיחה אורגנית</div>
                        <div className="text-gray-500 font-extrabold text-sm uppercase tracking-widest relative z-10">טראפיק איכותי שמייצר לידים</div>
                    </div>

                    <div className="bg-[#2f4ea1] rounded-[2rem] p-8 md:p-12 border border-[#2f4ea1] flex flex-col justify-center items-center shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
                        {/* A Mockup of Google Search Result */}
                        <div className="w-full bg-white rounded-xl p-5 md:p-6 mb-8 text-right shadow-[0_10px_30px_rgba(0,0,0,0.2)] dir-rtl relative z-10 transform transition-transform duration-700 hover:scale-105">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-[#0b1638] flex-shrink-0 flex items-center justify-center p-1.5">
                                    <Search className="text-white w-full h-full" strokeWidth={3} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-800 font-bold">sepros.co.il</span>
                                    <span className="text-[11px] text-gray-500 truncate mt-0.5">https://www.sepros.co.il</span>
                                </div>
                            </div>
                            <div className="text-[#1a0dab] text-lg md:text-xl font-bold mb-2 hover:underline cursor-pointer tracking-tight">ספרוס - סוכנות הדיגיטל המובילה בישראל</div>
                            <div className="text-sm text-[#4d5156] leading-relaxed">הגענו למקום הראשון בתוצאות החיפוש עבור הביטויים הקשים ביותר. אלגוריתם או לא, אנחנו יודעים איך למקם מותגים...</div>
                        </div>

                        <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter relative z-10 text-center" dir="ltr">#1 Ranking</div>
                        <div className="text-white/80 font-extrabold text-sm uppercase tracking-widest relative z-10 text-center text-balance">שליטה אבסולוטית בביטויי מפתח</div>
                    </div>
                </div>
            </div>
        );
    }

    if (category === 'design') {
        const designProjects = [
            { id: "brand_1", title: 'קמפיין ראשי', type: 'Hero Banner', spanClass: 'col-span-2 md:col-span-2 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000' },
            { id: "social_1", title: 'פוסט סושיאל מרובע', type: 'Social Media', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800' },
            { id: "banner_1", title: 'באנר רימרקטינג', type: 'Web Banners', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=800' },
            { id: "ux_1", title: 'אפיון ממשק נייד', type: 'UI/UX', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800' },
            { id: "story_1", title: 'מודעת סטורי נדל"ן', type: 'Performance', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-2', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800' },
            { id: "banner_2", title: 'קריאייטיב PR', type: 'Articles', spanClass: 'col-span-2 md:col-span-2 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000' }
        ];

        const visibleProjects = showAllDesign ? designProjects : designProjects.slice(0, 6);

        return (
            <div className="mt-16 md:mt-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <h4 className="text-gray-900 font-black text-3xl md:text-4xl mb-3 border-r-4 border-[#2f4ea1] pr-4 tracking-tight">שפה ויזואלית מנצחת</h4>
                        <p className="text-gray-500 font-medium max-w-2xl text-balance">מספרי מותג, דרך באנרים מניעים לפעולה ועד ממשקי משתמש מורכבים.</p>
                    </div>
                </div>

                {/* Refined Dense Grid (Smaller items, 4 columns on desktop, 2 on mobile) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px] grid-flow-row-dense">
                    {visibleProjects.map((project, i) => (
                        <div key={i} onClick={() => setSelectedImage({ id: project.id, fallback: project.image, title: project.title })} className={`relative group overflow-hidden rounded-xl md:rounded-2xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200/50 ${project.spanClass}`}>
                            <img src={`/portfolio/${project.id}.webp`} onError={(e) => { e.target.onerror = null; e.target.src = project.image; }} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#0b1638] via-[#0b1638]/40 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-blue-400 font-extrabold text-[10px] md:text-xs tracking-widest uppercase mb-1">{project.type}</span>
                                <h5 className="text-white font-black text-sm md:text-lg leading-tight">{project.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>

                {!showAllDesign && designProjects.length >= 6 && (
                    <div className="flex justify-center mt-10 md:mt-12 mb-4">
                        <button onClick={() => setShowAllDesign(true)} className="px-8 py-3 bg-white border border-gray-200 text-[#2f4ea1] font-bold rounded-full shadow-sm hover:border-[#2f4ea1] transition-colors">
                            הצג עבודות נוספות
                        </button>
                    </div>
                )}

                {/* Lightbox Modal Overlay */}
                {selectedImage && (
                    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09102c]/95 p-4 md:p-8 backdrop-blur-md transition-opacity" onClick={() => setSelectedImage(null)}>
                        <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]" onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}>
                            <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        
                        <img src={`/portfolio/${selectedImage.id}.webp`} onError={(e) => { e.target.onerror = null; e.target.src = selectedImage.fallback; }} className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)]" alt={selectedImage.title} onClick={(e) => e.stopPropagation()} />
                        <h3 className="text-white tracking-widest mt-6 font-bold text-lg md:text-xl">{selectedImage.title}</h3>
                    </div>
                )}
            </div>
        );
    }

    return null;
};

const DepartmentDetail = () => {
    const { id } = useParams();
    const router = useRouter();

    const data = {
        ppc: { 
            title: "ניהול מדיה", 
            long: "אנחנו מנהלים תקציבי ענק באופטימיזציה מקסימלית. הגישה שלנו לניהול מדיה היא מדעית: ניתוח קהלים, שיפור יחס המרה ושימוש בכלי AI לניהול בידים.", 
            services: ["חיפוש ורשת המדיה בגוגל", "ניהול מטא (פייסבוק/אינסטגרם)", "קמפיינים בטיקטוק ולינקדאין", "רימרקטינג דינמי"],
            processTitle: "איך מתנהל קמפיין ברמה גבוהה?",
            processSubtitle: "השיטה המדעית מאחורי הלקוחות שלנו",
            process: [
                { title: "מחקר ואסטרטגיה", desc: "ניתוח מקיף של נתוני השוק, זיהוי קהלי מטרה רלוונטיים ומחקר מילות מפתח ליצירת יתרון תחרותי.", icon: <Search size={28} /> },
                { title: "בניית סטאפ", desc: "הגדרת קמפיינים מדויקת, פילוח פיקסלים קפדני וחלוקת תקציבים אסטרטגית המוכוונת תוצאות מקסימליות.", icon: <Settings size={28} /> },
                { title: "השקה וטסטים (A/B)", desc: "העלאת קריאייטיבים לאוויר תחת בקרת תקציב מחמירה ובדיקת וריאציות לאיתור המודעה האפקטיבית ביותר.", icon: <Target size={28} /> },
                { title: "אופטימיזציה וסקייל", desc: "שיפור יחס ה-ROAS מיום ליום ושכפול רוחבי של קמפיינים רווחיים לתקציבים גבוהים משמעותית.", icon: <TrendingUp size={28} /> }
            ],
            faqs: [
                { q: "תוך כמה זמן נראה תוצאות מהקמפיינים?", a: "קמפיינים ממומנים מתחילים להביא תנועה באופן מיידי עם עלייתם לאוויר. בדרך כלל לוקח 2-4 שבועות של איסוף נתונים ואופטימיזציה עד שמגיעים ליציבות וליחסי המרה אופטימליים, תלוי בתקציב, במתחרים ובתחום." },
                { q: "באילו פלטפורמות אתם מנהלים קמפיינים?", a: "אנו מנהלים קמפיינים במגוון רחב של פלטפורמות בהתאם לקהל היעד שלכם: גוגל (חיפוש, מדיה, שופינג, יוטיוב), מטא (פייסבוק ואינסטגרם), טיקטוק, לינקדאין ועוד. לכל פלטפורמה אסטרטגיה מותאמת." },
                { q: "האם אתם עובדים עם עסקים B2B או B2C?", a: "שנינו! יש לנו ניסיון מוכח ועשיר גם עם חברות B2B מורכבות שמחפשות לידים איכותיים (למשל טכנולוגיה, שירותים עסקיים ותעשייה) וגם עם מותגי B2C שממוקדים במכירות איקומרס ויצירת מודעות למותג." }
            ]
        },
        social: { 
            title: "סושיאל ו-UGC", 
            long: "הסיפור שלכם צריך לפגוש את הלקוחות בדיוק במקום שבו הם נמצאים. אנחנו לוקחים מותגים והופכים אותם לתופעת רשת בעזרת שפה ויזואלית ייחודית, הפקות וידאו ויראליות, ואסטרטגיית סושיאל שעוצרת את הגלילה (Scroll-stoppers). העידן החדש דורש תוכן מהיר, חד, ומבוסס דאטה.", 
            services: ["הפקת Reels ו-TikTok", "צילום UGC איכותי למותגים", "פיתוח שפה מותגית אותנטית", "שיווק משפיענים"],
            processTitle: "המתכון להפוך לוויראלי",
            processSubtitle: "איך עובדת מחלקת הסושיאל שלנו",
            process: [
                { title: "קריאייטיב וסטוריטלינג", desc: "ראיונות עומק ופיצוח רעיוני לכל סרטון, כתיבת תסריטים מרתקים שמחזיקים במיוחד את זמן הצפייה של דור ה-Z.", icon: <Lightbulb size={28} /> },
                { title: "ימי צילום והפקת UGC", desc: "הקלטות שטח איכותיות עם קריינים, משפיענים או לקוחות, המייצרות אותנטיות מוכחת המניעה לפעולה.", icon: <Camera size={28} /> },
                { title: "עריכה דינמית", desc: "עריכת פוסט-פרודקשן קצבית הכוללת אנימציות וטקסטים דינמיים שמונעים מהגולש להמשיך לגלול הלאה.", icon: <Video  size={28} /> },
                { title: "הפצה רוחבית ברשת", desc: "תזמון מדויק של הפוסטים בחוקיות האלגוריתם כדי לייצר תפוצה אורגנית וממומנת מקסימלית במקביל.", icon: <Users size={28} /> }
            ],
            faqs: [
                { q: "מה ההבדל בין ניהול סושיאל רגיל למה שאתם עושים?", a: "אנחנו לא רק מעלים פוסטים עיצוביים. אנחנו מייצרים שפה, אסטרטגיה ותוכן וידאו קצר שמבוסס על טרנדים והבנה עמוקה של האלגוריתמים, במטרה להגיע לוויראליות אמיתית ולהמיר צופים ללקוחות." },
                { q: "האם אתם מפיקים את סרטוני הוידאו והרילסים?", a: "בהחלט. יש לנו צוות קריאייטיב וצילום שדואג להכל מהקצה לקצה: החל מרמת הקונספט, מתן ערך דרך UGC אותנטי, ועד יום צילומים מעשי בשטח הדואג שהתוכן יהיה מניע לפעולה." }
            ]
        },
        design: { 
            title: "סטודיו וקריאייטיב", 
            long: "אנחנו מאפיינים ומעצבים ממשקים ותוצרים שיווקיים שמרגישים טבעיים למשתמש, יחד עם עיצוב פרימיום שמייצר אמון מיידי במותג. אנחנו מעניקים מעטפת מלאה של הסטודיו לכלל הפרויקטים שלנו.", 
            services: ["שפה חזותית וקונספט", "עיצוב ויצירת מסרים", "זהות תאגידית", "בניית מארזי UI/UX"],
            processTitle: "תהליך העיצוב שלנו",
            processSubtitle: "לייצר חוויה ויזואלית מדויקת ללקוח",
            process: [
                { title: "בריף וגיבוש קונספט", desc: "הבנת ערכי המותג, גיבוש קהל היעד ובניית לוח השראה חזותי המגדיר את הפאליטה והאווירה הכללית.", icon: <FileText size={28} /> },
                { title: "יצירת זהות (Branding)", desc: "עיצוב ויצירת מסרים, טיפוגרפיה ושפה גרפית שמשלבים מראה ויזואלי מהוקצע שעוזר לעורר אמינות רגשית.", icon: <Palette size={28} /> },
                { title: "פרוטוטייפים לאישור", desc: "בניית מוקאפים, דפי נחיתה אינטראקטיביים או מצגות מותג בכדי לחוש את העיצוב בדיוק כפי שהלקוח יחווה.", icon: <Layout size={28} /> },
                { title: "מסירה מנוהלת (Handoff)", desc: "אריזת כלל מרכיבי הסטודיו לתיק אחיד והעברת הקבצים למחלקת הפיתוח תוך ליווי טכני שוטף.", icon: <Briefcase size={28} /> }
            ],
            faqs: [
                { q: "מה כולל תהליך הסטודיו אצלכם?", a: "התהליך מתחיל במחקר שפותר את הנקודות הכואבות אצל הלקוח בהיבט הוויזואלי וקריאייטיבי. לאחר מכן נעבור למסע בו נתרגם את הסיפור למסכים מעבר לפרוטוטייפ האינטראקטיבי או חומרים טיוטליים בקמפיינים." }
            ]
        },
        tech: { 
            title: "בניית אתרים", 
            long: "האתר הוא הבית שלכם בדיגיטל. אנחנו בונים מערכות ווב מורכבות המתקדמות ביותר בסביבת הלקוח תוך שימת דגש תמידית לביצועים ולטכנולוגיה.", 
            services: ["אפליקציות אינטרנט מתקדמות", "דפי נחיתה חכמים לאיקומרס", "חיבורי API ל-CRM הקיים", "אבטחה ותחזוקה"],
            processTitle: "איך אנחנו בונים אתרים?",
            processSubtitle: "התהליך שמאחורי הפיתוח של נברטי הדיגיטל",
            process: [
                { title: "אפיון ועיצוב UX/UI", desc: "חקר קהל יעד, בניית מפות מסע משתמש, ועיצוב דפי נחיתה וממשקים ברזולוציית פיקסל-פרפקט.", icon: <MonitorSmartphone size={28} /> },
                { title: "פיתוח קדמי וקוד", desc: "כתיבת קוד נקי, סמנטי ומהיר בטכנולוגיות חדישות לטובת ביצועים מקסימליים וחוויה חלקה ב-120fps.", icon: <Code2 size={28} /> },
                { title: "אבטחה ובקרה (QA)", desc: "בדיקות מעמיקות ושבירת המערכת במגוון דפדפנים ומכשירים בכדי לוודא שאין צווארי בקבוק ותקלות.", icon: <CheckCircle2 size={28} /> },
                { title: "השקה וניטור רציף", desc: "עלייה חגיגית לאוויר, חיבור לאנליטיקס ופיקסלים, ותפעול שרת המבטיח יציבות של 99.9% גם בתנועה גדולה.", icon: <Globe size={28} /> }
            ],
            faqs: [
                { q: "באיזו טכנולוגיות אתם מפתחים אתרים?", a: "אנחנו בונים על גבי טכנולוגיות מתקדמות כמו React ו-Next.js המאפשרות מהירות יוצאת דופן (באתרים תדמיתיים מורכבים), או לחליפין בעזרת וורדפרס תחת מבנה קוד נקי ותקני, בהחלטה אסטרטגית המותאמת במדויק לצרכי הלקוח והניהול העתידי של צוות ההזנה." },
                { q: "כמה זמן לוקח לאתר להיות באוויר?", a: "הזמן משתנה בהתאם לנפח ולמורכבות. עמודי נחיתה איכותיים מאוד יכולים להיות מוכנים תוך כשבועיים. אתרים תדמיתיים מורכבים במיוחד וכמובן חנויות איקומרס ינועו לרוב בממוצע של שבין 4 ל-10 שבועות, לאחר סגירת הקונספט ואפיון משותף." },
                { q: "האם אוכל לנהל את תוכן האתר בעצמי?", a: "בוודאי. אנו מקפידים לפתח אתרים עם ממשקי ניהול (CMS) סופר נוחים אשר מותאמים אישית לשפה העסקית שלכם. בסיום הבנייה התכנותית אנו דואגים להדריך אתכם באופן מקיף, כך שתוכלו לעדכן טקסטים, תמונות ואפילו פרויקטים בקלי קלות." },
                { q: "האם אתם גם קונים ומתחזקים את האחסון?", a: "אנחנו יכולים. ספרוס מציעה שירותי ריטיינר הכוללים חבילות אחסון שרתי פרימיום סופר מהירים (כולל עמדות CDN), גיבויים קבועים, עדכוני אבטחה ברמת השרת, וכמובן מעקב טכני שמבטיח שקט רוחני לניהול השוטף של האתר." },
                { q: "הקוד מותאם לקידום בגוגל?", a: "באופן מוחלט. אנחנו קודם כל סוכנות שיווק. בניית אתר שאינו משרת SEO או יחסי המרה חוטא למטרה בעינינו. לאתרים שלנו יש תגיות סמנטיות מובנות, תמונות ברזולוציית WebP וקוד קליל שתורם ישירות לדרישות הליבה (Core Web Vitals) של גוגל." }
            ]
        },
        seo: { 
            title: "SEO & GEO", 
            long: "להיות בראש תוצאות החיפוש זו ריצה למרחקים ארוכים. אנחנו משלבים איכויות טכניות באסטרטגיית תוכן שבונה מומנטום של סמכות מוכחת גם עבור ביטויים ותוכן מקומי או גלובאלי.", 
            services: ["בדיקות טכניות שוטפות", "שיפור תנועה ספציפית וקרוס-זונג", "בניית פרופיל קישורים פוטנטי", "אופטימיזציית מפות אזוריות (GEO)"],
            processTitle: "איך למצב את עצמכם בטופ?",
            processSubtitle: "התהליך האורגני שלנו",
            process: [
                { title: "אודיט טכני וליבת התוכן", desc: "סריקה מלאה של קודי האתר לאיתור שגיאות קריטיות לצד מציאת הזדמנויות של ביטויי מפתח ממוקדים שלא מנוצלים.", icon: <Search size={28} /> },
                { title: "אופטימיזציה מקומית (On-Page)", desc: "התאמת תוכן כירורגית: שיפור מהירויות טעינה, כותרות H1/H2 תקינות ועדכון תגיות מטא באופן שוטף.", icon: <Code2 size={28} /> },
                { title: "בניית תוכן עשיר לגולש", desc: "הפקת מאמרים, עמודי נחיתה ומדריכים שמובילים באופן טבעי את הגולש לתשובה אותה הוא מעוניין לקרוא.", icon: <MessageSquare size={28} /> },
                { title: "פרופיל קישורים ואוטוריטה", desc: "רכישת קישורים איכותיים מאתרים חזקים ברשת (Off-Page) ובניית אזכורים (GEO) במפות כדי לבנות את סמכות הדומיין שלכם.", icon: <TrendingUp size={28} /> }
            ],
            faqs: [
                { q: "מה זה GEO לעומת SEO?", a: "GEO אלו הן טכניקות מיקום ספציפיות המצליבים כלי מפות וכלים חכמים מבוססי ארצות כדי להקל על הניווט הפიზו-וירטואלי אל העסק. זה כמובן בנוסף ל- SEO שמכסה את השאילתות הטקסטואליות." }
            ]
        },
        strategy: {
            title: "אסטרטגיה שיווקית",
            long: "כל הצלחה דיגיטלית מתחילה בתוכנית ברורה המבוססת על יעדים מדידים. אנחנו מנתחים את השוק, קהלי היעד וסביבת המתחרים בכדי לייצר מנוע צמיחה ומתודולוגיה ממוקדת שתלווה את כל הפעילות העסקית.",
            services: ["מחקר שוק וקהלי יעד", "ליווי אסטרטגי בהשקות מוצר", "אפיון מסעות לקוח ומשפכי המרה", "סינרגיה דיגיטלית רב-ערוצית"],
            processTitle: "הנוסחה להצלחה בדיגיטל",
            processSubtitle: "כיצד נראית העבודה על אסטרטגיה מקיפה",
            process: [
                { title: "סדנת פיצוח עם ההנהלה", desc: "מפגש מעמיק בו אנו צוללים אל השטח, מגדירים יעדים ברורים (פיננסיים ושיווקיים) ומבינים את התיוג הפסיכולוגי של המוצר.", icon: <Target size={28} /> },
                { title: "ניתוח השוק והמתחרים", desc: "איתור פערים במרחב התחרותי (Blue Ocean), ניתוח תמחיר אל מול אחוזי ההמרה וגיבוש בידול מובהק למותג.", icon: <LineChart size={28} /> },
                { title: "שרטוט מסעות לקוח", desc: "פיתוח שלבים מובנים, החל מחשיפה ראשונית דרך יצירת ביקושים ועד לשלב ההנעה לרכישה (Funnel Mapping).", icon: <Compass size={28} /> },
                { title: "מתווה עבודה קומפלט", desc: "העברת מקל מקצועית לצוותי הסטודיו והמדיה להוצאה לפועל של התוכנית עם לו\"זים, מיקומים וגאנטים מדויקים.", icon: <CheckCircle2 size={28} /> }
            ],
            faqs: [
                { q: "למה אני צריך אסטרטגיה? אי אפשר פשוט לפרסם?", a: "פרסום שרץ ללא אסטרטגיה הוא תוצר נקודתי קצר טווח. ברגע שאסטרטגיה מותווית - חושבים שלושה צעדים קדימה ויודעים לקרוא את מכלול הנתונים גם כאשר האלגוריתם או השוק משתנים." },
                { q: "איך מתבצע תהליך בניית האסטרטגיה?", a: "אנו מתחילים בסדנאות עם ההנהלה כדי להבין את רצפות העסק והמוצר לעומק. לאחר מכן נצא לתהליך ניתוח דאטה נרחב שבסופו מתווה מקיף שעליו יישענו כלל ערוצי הסטודיו, המדיה והפיתוח." }
            ]
        },
        analytics: { 
            title: "אנליטיקס ודאטה", 
            long: "בלי מדידה אין שיפור. אנחנו עוזרים לכם להבין בדיוק מה קורה באתר, מאיפה מגיעים הלקוחות הרווחיים ואיך לייעל את התקציב.", 
            services: ["הטמעת GA4 ו-Tag Manager", "דאשבורדים בזמן אמת", "מעקב המרות מתקדם", "BigQuery"],
            processTitle: "שליטה מלאה על הדאטה שלכם",
            processSubtitle: "איך אנליטיקס אמיתי צריך להראות",
            process: [
                { title: "מיפוי KPI והגדרות", desc: "הבנת כלל המדדים הדרושים שעוקבים אחר הלקוח - מלחיצת החשיפה הראשונה דרך הכנסת מוצרים לסל, ועד קליטת הטופס ב-CRM.", icon: <Target size={28} /> },
                { title: "הטמעות טכניות מתקדמות", desc: "פריסה אירועים (Events) באמצעות Google Tag Manager (GTM) שרת-צד כדי לנקות חריגות הנגרמות עקב חוסמי פרסומות.", icon: <Settings size={28} /> },
                { title: "דאשבורדים מותאמים אישית", desc: "בניית מסך יפיפה אחד קל לקליטה ב-Looker Studio המשלב את מקורות התנועה המורכבים ביותר למקום יעיל לעבודה שוטפת.", icon: <BarChart size={28} /> },
                { title: "ניתוח ואופטימיזציה", desc: "סקירה חזותית שבועית על הביצועים המוכיחה איזה אפיק מביא את ההחזר הכספי המדויק והגבוה ביותר (החזר על שקל בודד).", icon: <TrendingUp size={28} /> }
            ],
            faqs: [
                { q: "למה אנחנו צריכים מדידה אנליטית מתקדמת?", a: "אנליטיקס הוא הבסיס לקבלת החלטות עסקיות חכמות. ללא מדידה מתקדמת (מעקבי המרות, eCommerce ב-GA4) אתם בעצם מחליטים באופן עיוור. המדידה תראה לנו איזה קמפיין מביא רווח ואיזה ערוץ פחות משתלם." },
                { q: "תוכלו לתקן לנו נתוני המרות שגויים?", a: "בהחלט. אנו מבצעים בניית דאטה קפדנית כדי למצוא טעויות במעקבי המרות, תקלות בהטמעת Facebook Pixel, כפילויות באירועים ושגיאות במעקב דרך Tag Manager." },
                { q: "יש דרך נוחה לראות את הנתונים בזמן אמת?", a: "אנו יכולים להגדיר לכם דאשבורדים מותאמים אישית (בעזרת כלים כמו Looker Studio), כך שכל מדדי המפתח שחשובים לכם יהיו מרוכזים בלוח בקרה אחד שעובד בזמן אמת ויחסוך כניסה למערכות שונות." }
            ]
        }
    };
    const dept = data[id] || data.ppc;

    return (
        <Reveal className="min-h-screen bg-white pt-32 md:pt-40 pb-20 text-right">
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-stretch">
                    <div className="lg:w-[60%] flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 text-[#2f4ea1] leading-tight">{dept.title}</h1>
                        <p className="text-gray-600 text-xl md:text-2xl font-normal mb-10 leading-relaxed text-balance">{dept.long}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {dept.services.map((s, i) => (
                                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 md:p-6 border border-gray-100 rounded-lg transition-transform hover:-translate-y-1">
                                    <CheckCircle2 className="text-[#2f4ea1] shrink-0" size={22} />
                                    <span className="font-bold text-gray-800 text-base md:text-lg">{s}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Replaced broken SeprosLogo with simple fallback styling - Container will now stretch to perfectly match text height */}
                    <div className="lg:w-[40%] w-full hidden lg:flex bg-gray-50 border border-gray-100 items-center justify-center p-8 rounded-2xl shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#2f4ea1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img src="/logos/Logo.svg" alt="לוגו תצוגה" className="w-24 h-24 md:w-40 md:h-40 object-contain filter invert opacity-20 blur-[1px] group-hover:blur-none group-hover:opacity-30 transition-all duration-500 group-hover:scale-110" />
                    </div>
                </div>

                {dept.process && (
                    <Reveal delay={0.1}>
                        <ProcessTimeline title={dept.processTitle} subtitle={dept.processSubtitle} steps={dept.process} />
                    </Reveal>
                )}

                <DepartmentPortfolio category={id || 'ppc'} />

                {dept.faqs && dept.faqs.length > 0 && (
                    <FAQ title={`שאלות נפוצות`} data={dept.faqs} className="bg-transparent !py-0 mt-20 md:mt-24" />
                )}

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

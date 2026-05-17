"use client";
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useRouter } from 'next/navigation';
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, ChevronDown, PlayCircle, ArrowLeft, ArrowUpLeft, TrendingUp, Search, MonitorSmartphone, Code2, Globe, Target, LineChart, Palette, Layout, Settings, Users, BarChart, Lightbulb, Compass, FileText, Camera, Video, MessageSquare, Briefcase, PieChart, Heart, Send, Brush, PenTool, MousePointer2, Type, Image, Sparkles, Wand2 } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import FAQ from '../components/FAQ';
import PlatformsMarquee from '../components/PlatformsMarquee';

const ProcessTimeline = ({ title, subtitle, steps }) => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            // Starts tracking when the top of the container crosses the center of the viewport
            const start = rect.top - viewHeight / 2;
            // Finishes when the bottom crosses the center
            const end = rect.bottom - viewHeight / 2;
            const total = end - start;

            let currentProgress = (-start / total) * 100;
            currentProgress = Math.max(0, Math.min(100, currentProgress));

            setProgress(currentProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!steps || steps.length === 0) return null;
    return (
        <div className="mt-20 md:mt-28 w-full border-t border-gray-100 pt-20">
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-[#0b1638] font-black text-3xl md:text-4xl text-balance">{title}</h2>
                <p className="text-[#2f4ea1] font-bold mt-2 tracking-widest text-sm md:text-base">{subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative max-w-6xl mx-auto px-4 mt-8 md:mt-0" ref={containerRef}>

                {/* Desktop Scroll Progress Line */}
                <div className="hidden md:block absolute top-[2.25rem] left-[12%] right-[12%] h-[2px] bg-gray-100 z-0 overflow-hidden rounded-full">
                    <div
                        className="h-full bg-[#2f4ea1]"
                        style={{ width: `${progress}%`, marginLeft: 'auto' }}
                    ></div>
                </div>

                {/* Mobile Vertical Scroll Progress Line */}
                <div className="block md:hidden absolute top-[2.5rem] bottom-[2.5rem] right-[48px] w-[2px] bg-gray-100 z-0 overflow-hidden rounded-full">
                    <div
                        className="w-full bg-[#2f4ea1]"
                        style={{ height: `${progress}%` }}
                    ></div>
                </div>
                {steps.map((step, idx) => (
                    <div key={idx} className="relative z-10 flex flex-row md:flex-col items-center md:items-center text-right md:text-center group">
                        <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 ml-6 md:ml-0 rounded-full bg-white border-2 border-gray-100 group-hover:border-[#2f4ea1] text-[#2f4ea1] flex items-center justify-center mb-0 md:mb-6 shadow-sm group-hover:shadow-md transition-all duration-300 relative">
                            {step.icon}
                            <div className="absolute -top-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#2f4ea1] text-white text-[10px] md:text-xs font-black flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform">{idx + 1}</div>
                        </div>
                        <div>
                            <h3 className="font-black text-lg md:text-xl text-gray-900 mb-1 md:mb-2 group-hover:text-[#2f4ea1] transition-colors">{step.title}</h3>
                            <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-[250px] md:mx-auto text-balance">{step.desc}</p>
                        </div>
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
        { id: "ce4XWYqPApc" },
        { id: "SFHBRCBtvog" },
        { id: "8D6dfBAYmvY" },
        { id: "D8hOZ_PXC-4" },
        { id: "v1qFbJElfJ4" },
        { id: "pUF5lAJ85vg" },
        { id: "a5OyApZs98g" },
        { id: "5AVwndFocNU" },
        { id: "XE9emYNGeKo" },
        { id: "zRZstpNyqrk" }
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

const AnimatedFollowers = () => {
    const [count, setCount] = useState(12400);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + Math.floor(Math.random() * 8) + 1);
        }, 150);
        return () => clearInterval(interval);
    }, []);
    return <span>+{count.toLocaleString()} Followers</span>;
};

const codeData = [
    { text: "const ", color: "text-pink-400" },
    { text: "buildFuture", color: "text-white" },
    { text: " = ", color: "text-blue-300" },
    { text: "async ", color: "text-yellow-300" },
    { text: "() => {\n", color: "text-white" },
    { text: "  await ", color: "text-pink-400" },
    { text: "sepros.", color: "text-cyan-300" },
    { text: "develop", color: "text-green-300" },
    { text: "({\n", color: "text-white" },
    { text: "    performance: ", color: "text-gray-400" },
    { text: "100,\n", color: "text-orange-300" },
    { text: "    design: ", color: "text-gray-400" },
    { text: "'premium'\n", color: "text-orange-300" },
    { text: "  });\n", color: "text-white" },
    { text: "}", color: "text-white" }
];
const characters = [];
codeData.forEach(block => {
    for (let i = 0; i < block.text.length; i++) {
        characters.push({ char: block.text[i], color: block.color });
    }
});

const AnimatedTechCode = () => {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(prev => (prev >= characters.length + 15 ? 0 : prev + 1));
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-mono text-[10px] md:text-sm space-y-2 dir-ltr text-left h-32 md:h-40 flex flex-col justify-center">
            <pre className="whitespace-pre-wrap font-inherit leading-relaxed">
                {characters.slice(0, idx).map((c, i) => (
                    <span key={i} className={c.color}>{c.char}</span>
                ))}
                <span className="animate-pulse bg-blue-300 w-2 h-4 inline-block align-middle ml-1"></span>
            </pre>
        </div>
    );
};

const AnimatedSeoSearch = () => {
    const [searchText, setSearchText] = useState('');
    const searchTarget = "האתר שלכם";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i <= searchTarget.length) {
                setSearchText(searchTarget.substring(0, i));
                i++;
            } else {
                i = 0;
            }
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-10 w-full max-w-sm flex flex-col gap-3">
            <div className="flex items-center gap-3 bg-white rounded-full px-4 py-3 border border-gray-200 shadow-sm mb-2">
                <Search className="text-blue-500" size={18} />
                <div className="flex-1 font-bold text-gray-700 dir-rtl text-right h-5 text-sm md:text-base">{searchText}<span className="animate-pulse">|</span></div>
            </div>
            <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(47,78,161,0.2)] border-2 border-blue-100 p-4 flex flex-col gap-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1.5 h-full bg-[#2f4ea1]"></div>
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 bg-gray-100 rounded-full flex items-center justify-center"><Globe size={10} className="text-gray-400" /></div>
                    <div className="text-xs text-gray-500 font-medium dir-ltr text-left">yourdomain.co.il</div>
                </div>
                <div className="text-sm font-black text-[#2f4ea1] mb-1 dir-rtl text-right">האתר שלכם | בניית אתרים וקידום בגוגל</div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
                <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                <div className="absolute top-4 left-4 bg-blue-100 text-[#2f4ea1] text-[10px] font-black px-2 py-1 rounded">#1 RANK</div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-2 opacity-50 scale-[0.98]">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 bg-gray-100 rounded-full"></div>
                    <div className="h-1.5 bg-gray-200 rounded w-1/4"></div>
                </div>
                <div className="h-3 bg-gray-300 rounded w-2/3 mb-1"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
            </div>
        </div>
    );
};



const AnimatedStrategyFlow = () => {
    const steps = [
        { icon: Lightbulb, colorClass: 'bg-blue-100 text-blue-600', gradient: 'from-blue-300 to-purple-300', label: 'Research' },
        { icon: Target, colorClass: 'bg-purple-100 text-purple-600', gradient: 'from-purple-300 to-pink-300', label: 'Planning', ml: 'ml-4 md:ml-8' },
        { icon: Settings, colorClass: 'bg-pink-100 text-pink-600', gradient: 'from-pink-300 to-emerald-300', label: 'Execution', ml: 'ml-8 md:ml-16' },
        { icon: LineChart, colorClass: 'bg-emerald-100 text-emerald-600', gradient: '', label: 'Optimization', ml: 'ml-12 md:ml-24' }
    ];
    return (
        <div className="relative z-10 w-full max-w-sm flex flex-col gap-0 scale-90 md:scale-100 origin-center">
            {steps.map((step, idx) => (
                <div key={idx} className={`flex flex-col ${step.ml || ''}`}>
                    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-2 md:p-3 flex items-center gap-3 relative z-10">
                        <div className={`w-8 h-8 rounded-full ${step.colorClass} flex items-center justify-center`}><step.icon size={16} /></div>
                        <div className="flex-1">
                            <div className="text-xs md:text-sm font-bold text-gray-800 dir-ltr text-left">{step.label}</div>
                        </div>
                    </div>
                    {idx < 3 && (
                        <div className="flex justify-start ml-4 md:ml-6 my-0 -z-10 relative">
                            <div className={`h-6 md:h-8 w-1 bg-gray-100 relative overflow-hidden rounded-full`}>
                                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${step.gradient} animate-[slideDown_1.5s_infinite]`} style={{ animationDelay: `${idx * 0.5}s` }}></div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

const AnimatedPpcGraph = () => {
    const [cpa, setCpa] = useState(128.50);

    useEffect(() => {
        const interval = setInterval(() => {
            setCpa(prev => {
                if (prev > 28.50) {
                    return prev - (Math.random() * 1.5 + 0.5); // drops slowly by 0.5 to 2 ILS per second
                }
                return 24.50 + Math.random() * 2; // fluctuate gently around 25
            });
        }, 800); // 800ms gives time to read the number dropping
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-10 w-full max-w-sm flex gap-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex-1 relative overflow-hidden z-20">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500"></div>
                <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"><TrendingUp size={20} /></div>
                    <span className="bg-green-50 text-green-700 text-[10px] font-black px-2 py-1 rounded border border-green-100 animate-pulse">ACTIVE CAMPAIGN</span>
                </div>
                <div className="text-xs font-bold text-gray-400 mb-1 dir-ltr text-left">CPA (Cost Per Action)</div>
                <div className="text-2xl font-black text-gray-800 mb-4 dir-ltr text-left transition-all duration-300">₪{cpa.toFixed(2)} <span className="text-sm text-emerald-500 font-bold">-{(128.5 - cpa).toFixed(1)}%</span></div>
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full animate-[progress_2s_ease-out_infinite]"></div>
                </div>
                <div className="mt-2 text-[10px] text-gray-400 text-right dir-ltr text-left">Optimizing bids...</div>
            </div>
            <div className="w-24 bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex flex-col items-center justify-center -translate-y-4 animate-bounce z-10 hidden sm:flex" style={{ animationDuration: '3s' }}>
                <Target size={24} className="text-blue-500 mb-2" />
                <div className="text-xs font-bold text-gray-800">ROAS</div>
                <div className="text-lg font-black text-blue-600">x4.5</div>
            </div>
        </div>
    );
};

const AnimatedAnalyticsGraph = () => {
    const [bars, setBars] = useState([40, 70, 45, 90, 60, 100, 80]);
    useEffect(() => {
        const interval = setInterval(() => {
            setBars(bars.map(() => Math.floor(Math.random() * 60) + 40));
        }, 1500);
        return () => clearInterval(interval);
    }, [bars]);

    return (
        <div className="relative z-10 w-full max-w-xs bg-white rounded-2xl shadow-xl shadow-blue-900/5 p-6 border border-gray-100 anim-float-y">
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2 text-[#0b1638] font-black text-xl md:text-2xl">
                    <LineChart size={28} className="text-[#2f4ea1]" />
                    Growth
                </div>
                <span className="bg-blue-100 text-[#2f4ea1] text-xs font-bold px-2 py-1 rounded-md animate-pulse">LIVE</span>
            </div>
            <div className="flex items-end gap-2 h-24 md:h-32 border-b border-gray-100 pb-2">
                {bars.map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-[#2f4ea1] to-blue-400 rounded-t-sm transition-all duration-1000 ease-in-out" style={{ height: `${h}%` }}></div>
                ))}
            </div>
            <div className="mt-4 pt-2 flex justify-between items-center">
                <div className="space-y-1">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest dir-ltr text-left">Traffic</div>
                    <div className="text-lg md:text-xl font-black text-gray-900 dir-ltr text-left">124,592</div>
                </div>
                <div className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1"><ArrowUpLeft size={12} /> 24%</div>
            </div>
        </div>
    );
};

const DepartmentHeroVisual = ({ category }) => {
    const renderVisual = () => {
        switch (category) {
            case 'seo':
                return (
                    <div className="relative w-full h-full min-h-[260px] md:min-h-[300px] flex items-center justify-center p-4 md:p-8 rounded-3xl bg-gradient-to-br from-blue-50/50 to-white overflow-hidden group">
                        <AnimatedSeoSearch />
                    </div>
                );
            case 'ppc':
                return (
                    <div className="relative w-full h-full min-h-[260px] md:min-h-[300px] flex items-center justify-center p-4 md:p-8 rounded-3xl bg-gradient-to-tr from-green-50/50 to-emerald-50/30 overflow-hidden group">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(47,78,161,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(47,78,161,0.03)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
                        <AnimatedPpcGraph />
                    </div>
                );
            case 'social':
                return (
                    <div className="relative w-full h-full min-h-[260px] md:min-h-[300px] flex items-center justify-center p-4 md:p-8 rounded-3xl bg-gradient-to-bl from-cyan-50/80 to-blue-50/40 group">
                        <div className="relative z-10 w-[160px] md:w-[180px] h-[320px] md:h-[350px] bg-white rounded-[32px] shadow-[0_10px_40px_-10px_rgba(0,100,200,0.2)] border-[6px] border-gray-900 p-1 -rotate-[3deg] flex flex-col">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-b-xl z-20"></div>
                            <div className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-[22px] flex-1 relative overflow-hidden flex items-center justify-center">
                                <PlayCircle className="text-white/40 absolute z-0" size={48} />
                                <div className="absolute right-2 bottom-20 flex flex-col gap-4 z-20">
                                    <div className="flex flex-col items-center gap-1 relative">
                                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white relative z-10"><Send size={16} /></div>
                                        <span className="text-[8px] text-white font-bold">Share</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white"><MessageSquare size={16} className="fill-current" /></div>
                                        <span className="text-[8px] text-white font-bold">450</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 relative">
                                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white relative z-10"><Heart size={16} className="fill-current text-red-500" /></div>
                                        <span className="text-[8px] text-white font-bold">12k</span>
                                        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
                                            <Heart size={20} className="text-red-500 fill-current absolute top-0 right-1 heart-float heart-delay-1 opacity-0" />
                                            <Heart size={14} className="text-pink-500 fill-current absolute top-0 right-3 heart-float heart-delay-2 opacity-0" />
                                            <Heart size={24} className="text-red-400 fill-current absolute top-0 right-0 heart-float heart-delay-3 opacity-0" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-4 left-4 right-4 z-20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm"></div>
                                        <div className="h-2 bg-white/90 rounded w-24"></div>
                                    </div>
                                    <div className="space-y-1.5 w-full">
                                        <div className="h-1.5 bg-white/70 rounded w-[90%]"></div>
                                        <div className="h-1.5 bg-white/50 rounded w-[70%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-30 top-[15%] md:top-1/4 right-0 md:right-6 bg-white px-2 md:px-3 py-1.5 md:py-2 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 rotate-6 anim-float-y-delayed scale-[0.85] md:scale-100 origin-right">
                            <div className="flex gap-1.5 md:gap-2 text-[#2f4ea1] text-xs md:text-sm font-bold items-center"><Users size={14} className="md:w-4 md:h-4" /><AnimatedFollowers /></div>
                        </div>
                        <div className="absolute z-30 bottom-[15%] md:bottom-1/4 left-0 md:left-6 bg-white px-2 md:px-3 py-1.5 md:py-2 rounded-xl md:rounded-2xl shadow-xl border border-gray-100 -rotate-6 anim-float-y scale-[0.85] md:scale-100 origin-left">
                            <div className="flex gap-1.5 md:gap-2 text-purple-600 text-xs md:text-sm font-bold items-center"><MessageSquare size={14} className="md:w-4 md:h-4" /> Viral!</div>
                        </div>
                    </div>
                );
            case 'design':
                return (
                    <div className="relative w-full h-full min-h-[300px] md:min-h-[360px] flex items-center justify-center p-4 rounded-3xl bg-[#0b1638] overflow-hidden group">
                        {/* Colorful background glowing effects */}
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-pink-500/30 blur-[90px] rounded-full mix-blend-screen group-hover:scale-125 transition-transform duration-1000"></div>
                        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-cyan-400/30 blur-[90px] rounded-full mix-blend-screen group-hover:scale-125 transition-transform duration-1000"></div>

                        {/* Big Window Frame */}
                        <div className="relative z-10 w-full max-w-[500px] h-[300px] md:h-[340px] bg-[#1e2542] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/20 flex flex-col overflow-hidden transition-transform group-hover:scale-[1.02] duration-700">

                            {/* Window Header */}
                            <div className="h-8 bg-gradient-to-r from-[#232942] to-[#2a2342] border-b border-white/10 flex items-center px-4 justify-between shrink-0">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex items-center gap-2 bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
                                    <Sparkles size={10} className="text-pink-400" />
                                    <div className="text-[10px] text-white/80 font-mono tracking-wider">Sepros_AI_Studio.exe</div>
                                </div>
                                <div className="flex gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
                                    <Settings size={12} />
                                </div>
                            </div>

                            {/* Editor Layout */}
                            <div className="flex-1 flex w-full relative overflow-hidden">

                                {/* Left Toolbar */}
                                <div className="w-10 bg-[#171c33] border-r border-white/10 flex flex-col items-center py-3 gap-3 shrink-0 z-20">
                                    <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-400 to-pink-500 text-white flex items-center justify-center shadow-[0_0_10px_rgba(236,72,153,0.5)]"><Wand2 size={12} /></div>
                                    <div className="w-6 h-6 rounded hover:bg-white/10 text-white/70 flex items-center justify-center cursor-pointer transition-colors"><MousePointer2 size={12} /></div>
                                    <div className="w-6 h-6 rounded hover:bg-white/10 text-white/70 flex items-center justify-center cursor-pointer transition-colors"><Layout size={12} /></div>
                                    <div className="w-6 h-6 rounded hover:bg-white/10 text-white/70 flex items-center justify-center cursor-pointer transition-colors"><Type size={12} /></div>
                                    <div className="w-6 h-6 rounded hover:bg-white/10 text-white/70 flex items-center justify-center cursor-pointer transition-colors"><Palette size={12} /></div>
                                    <div className="w-6 h-6 rounded hover:bg-white/10 text-white/70 flex items-center justify-center cursor-pointer transition-colors"><Image size={12} /></div>
                                </div>

                                {/* Main Canvas Area */}
                                <div className="flex-1 relative bg-gradient-to-br from-[#161d36] to-[#1e1830] overflow-hidden flex flex-col" style={{ backgroundImage: 'linear-gradient(#2a314d 1px, transparent 1px), linear-gradient(90deg, #2a314d 1px, transparent 1px)', backgroundSize: '24px 24px' }}>

                                    {/* AI Prompt Bar */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white/20 backdrop-blur-xl border border-white/30 rounded-lg p-2.5 flex items-center gap-2 z-30 shadow-2xl">
                                        <Sparkles className="text-pink-300" size={16} />
                                        <div className="text-[11px] text-white font-mono tracking-wide overflow-hidden whitespace-nowrap border-r-2 border-pink-400 pr-1 w-full" style={{ animation: 'typing 4s steps(40, end) infinite alternate, blink .75s step-end infinite' }}>
                                            Create a premium brand book UI...
                                        </div>
                                    </div>

                                    {/* The Artboard - Generated Glass Card */}
                                    <div className="flex-1 flex items-center justify-center relative z-20 pb-10">
                                        <div className="relative w-[220px] h-[150px] md:w-[300px] md:h-[200px] rounded-2xl bg-black border-[1.5px] border-white/30 shadow-[0_20px_40px_rgba(236,72,153,0.2)] overflow-hidden flex items-center justify-center group-hover:shadow-[0_20px_60px_rgba(34,211,238,0.4)] transition-all duration-700">

                                            {/* Generated AI Image */}
                                            <img src="/images/brand_book_ai.png" alt="AI Generated Brand Book" className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-1000 ease-out" />

                                            {/* Colorful overlay gradient to keep UI legible */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1030]/90 to-transparent"></div>

                                            {/* Small UI elements overlaid on the image */}
                                            <div className="absolute bottom-3 left-3 flex items-center gap-2 z-10">
                                                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-cyan-500 flex items-center justify-center shadow-lg">
                                                    <Sparkles size={10} className="text-white" />
                                                </div>
                                                <div className="text-[9px] text-white font-mono tracking-wider font-bold drop-shadow-md">BrandBook_Generated</div>
                                            </div>

                                            {/* AI Scanning effect on top of the image */}
                                            <div className="absolute top-0 left-0 w-full h-[3px] bg-pink-400 shadow-[0_0_20px_#ec4899] z-20" style={{ animation: 'scanline 2.5s ease-in-out infinite alternate' }}></div>
                                        </div>

                                        {/* Floating Badge */}
                                        <div className="absolute top-[20%] right-[10%] md:right-[15%] bg-gradient-to-r from-[#2f4ea1] to-purple-600 px-3 py-1.5 rounded-lg border border-white/20 text-[10px] text-white font-mono shadow-2xl flex items-center gap-2 anim-float-y">
                                            <div className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse shadow-[0_0_8px_#67e8f9]"></div>
                                            Match: 99%
                                        </div>
                                    </div>
                                </div>

                                {/* Right Panel (AI Parameters) */}
                                <div className="hidden sm:flex w-[130px] bg-[#171c33] border-l border-white/10 flex-col shrink-0 z-20 text-left">
                                    <div className="p-3 border-b border-white/10">
                                        <div className="text-[9px] text-white/60 font-bold uppercase mb-2 tracking-wider flex items-center justify-between">
                                            <span>AI Model</span>
                                            <Sparkles size={10} className="text-pink-400" />
                                        </div>
                                        <div className="bg-[#2a1b3d] border border-pink-500/30 rounded px-2 py-1.5 text-[10px] text-pink-200 font-mono flex items-center justify-between shadow-inner">
                                            <span>Sepros_v3</span>
                                            <ChevronDown size={10} />
                                        </div>
                                    </div>
                                    <div className="p-3 border-b border-white/10">
                                        <div className="text-[9px] text-white/60 font-bold uppercase mb-2 tracking-wider">Style Tokens</div>
                                        <div className="flex flex-wrap gap-1.5">
                                            <span className="text-[8px] px-2 py-1 rounded-md bg-purple-500/30 text-purple-100 border border-purple-400/50">Minimal</span>
                                            <span className="text-[8px] px-2 py-1 rounded-md bg-cyan-500/30 text-cyan-100 border border-cyan-400/50">Vibrant</span>
                                            <span className="text-[8px] px-2 py-1 rounded-md bg-pink-500/30 text-pink-100 border border-pink-400/50">Premium</span>
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="text-[9px] text-white/60 font-bold uppercase mb-2 tracking-wider">Generation</div>
                                        <div className="flex items-center justify-between text-[10px] text-white mb-1.5">
                                            <span>Progress</span> <span className="text-cyan-300 font-bold">85%</span>
                                        </div>
                                        <div className="w-full h-2 bg-[#0f1423] rounded-full overflow-hidden border border-white/5">
                                            <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 w-[85%] rounded-full relative">
                                                <div className="absolute inset-0 bg-white/20 w-full h-full animate-pulse"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CSS Animations inline */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes scanline {
                                0% { top: 0%; }
                                100% { top: 100%; }
                            }
                            @keyframes typing {
                              from { width: 0 }
                              to { width: 100% }
                            }
                            @keyframes blink {
                              from, to { border-color: transparent }
                              50% { border-color: #ec4899 }
                            }
                        `}} />
                    </div>
                );
            case 'tech':
                return (
                    <div className="relative w-full h-full min-h-[260px] md:min-h-[300px] flex items-center justify-center p-4 md:p-8 rounded-3xl bg-[#0b1638] overflow-hidden group">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#2f4ea1 1px, transparent 1px), linear-gradient(90deg, #2f4ea1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                        <div className="relative z-10 w-full max-w-sm bg-[#112052] rounded-xl shadow-2xl border border-[#2f4ea1]/30 p-2 overflow-hidden">
                            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#2f4ea1]/20">
                                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="p-4">
                                <AnimatedTechCode />
                                <div className="mt-2 pt-2 border-t border-[#2f4ea1]/20 flex items-center text-xs opacity-50 text-blue-200"><Code2 size={14} className="mr-2" /> Terminal - Running</div>
                            </div>
                        </div>
                    </div>
                );
            case 'analytics':
                return (
                    <div className="relative w-full h-full min-h-[260px] md:min-h-[300px] flex items-center justify-center p-4 md:p-8 rounded-3xl bg-gradient-to-bl from-blue-50/50 to-gray-50 overflow-hidden group">
                        <AnimatedAnalyticsGraph />
                    </div>
                );
            case 'strategy':
                return (
                    <div className="relative w-full h-full min-h-[260px] md:min-h-[300px] flex items-center justify-center p-4 md:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/50 to-purple-50 overflow-hidden group">
                        <AnimatedStrategyFlow />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <style>{`
                @keyframes drawPath {
                    0% { stroke-dashoffset: 250; }
                    100% { stroke-dashoffset: 0; }
                }
                @keyframes cursorMove {
                    0%, 100% { top: 50%; left: 50%; transform: rotate(0deg); }
                    25% { top: 25%; left: 35%; transform: rotate(-5deg); }
                    50% { top: 75%; left: 65%; transform: rotate(5deg); }
                    75% { top: 30%; left: 70%; transform: rotate(-10deg); }
                }
                @keyframes floatY {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .anim-float-y { animation: floatY 4s ease-in-out infinite; }
                .anim-float-y-delayed { animation: floatY 4s ease-in-out infinite; animation-delay: 2s; }
                
                @keyframes floatUpSocial {
                    0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0; }
                    20% { opacity: 1; transform: translateY(-20px) scale(1.2) rotate(-10deg); }
                    80% { opacity: 0.8; }
                    100% { transform: translateY(-120px) scale(0.8) rotate(10deg); opacity: 0; }
                }
                .heart-float { animation: floatUpSocial 2s ease-out infinite; }
                .heart-delay-1 { animation-delay: 0s; }
                .heart-delay-2 { animation-delay: 0.7s; }
                .heart-delay-3 { animation-delay: 1.4s; }
                
                @keyframes slideDown {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                @keyframes growUp {
                    0% { height: 0%; }
                    100% { height: 100%; }
                }
                @keyframes scaleUp {
                    0% { transform: scale(0.8); }
                    100% { transform: scale(1.1); }
                }
                @keyframes drawCircle {
                    0% { transform: rotate(0deg) translateX(40px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
                }
                @keyframes progress {
                    0% { width: 0%; }
                    100% { width: 100%; }
                }
            `}</style>
            {renderVisual()}
        </>
    );
};

const AnimatedSeoGraph = () => {
    return (
        <div className="mt-16 w-full bg-transparent">
            {/* Header */}
            <div className="text-center mb-10 md:mb-16">
                <span className="inline-block bg-[#2f4ea1]/10 text-[#2f4ea1] px-4 py-2 rounded-full text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">דוגמה לנתוני לקוח</span>
                <h2 className="text-[#0b1638] font-black text-3xl md:text-5xl text-balance">לכבוש את המקומות שמוכרים</h2>
                <p className="text-gray-500 font-medium max-w-2xl mx-auto mt-4 md:mt-6 text-balance md:text-lg">תהליך ה-SEO שלנו מייצר סמכות אמיתית ברשת. ככה נראית השתלטות על הביטויים התחרותיים בענף שמכפיל את כמות הכניסות ממשלמים פוטנציאלים.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
                {/* Search Mockup */}
                <div className="lg:w-[45%] w-full bg-[#f8f9fa] rounded-3xl p-6 md:p-10 border border-gray-200/60 shadow-inner flex flex-col justify-center">
                    <div className="text-right mb-8">
                        <h3 className="font-bold text-gray-900 text-2xl tracking-tight">ככה זה נראה במקום הראשון</h3>
                        <p className="text-gray-500 text-base mt-2">תוצאות אורגניות בגוגל (ללא קידום ממומן)</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-lg cursor-pointer group mb-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-[#2f4ea1]"></div>
                        <div className="flex items-center gap-3 mb-3 dir-ltr justify-end">
                            <span className="text-sm text-gray-800 tracking-wide font-medium">https://www.your-domain.co.il</span>
                            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                <Globe size={14} className="text-[#2f4ea1]" />
                            </div>
                        </div>
                        <h3 className="text-[#1a0dab] font-normal text-2xl md:text-3xl group-hover:underline mb-2 font-arial dir-rtl text-right">השירות שאתם מציעים - האתר שלכם</h3>
                        <p className="text-[#4d5156] text-sm md:text-base leading-relaxed font-arial dir-rtl text-right">כאן מופיע תיאור מושך של העסק שלכם שגורם ללקוח ללחוץ ולהיכנס דווקא לאתר שלכם ולא לאף אחד מתוך כל המתחרים בעמוד הראשון בגוגל.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm opacity-60 filter grayscale scale-[0.98]">
                        <div className="flex items-center gap-3 mb-3 dir-ltr justify-end">
                            <span className="text-sm text-gray-800 tracking-wide">https://www.competitor.co.il</span>
                            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                <Globe size={14} className="text-gray-500" />
                            </div>
                        </div>
                        <h3 className="text-[#1a0dab] font-normal text-xl md:text-2xl mb-2 font-arial dir-rtl text-right">המתחרה הכי גדול שלכם</h3>
                        <p className="text-[#4d5156] text-sm md:text-base leading-relaxed font-arial dir-rtl text-right">תיאור העסק של המתחרה שנמצא מתחתיכם ומאבד את מרבית הטראפיק בענף ממש ברגעים אלו.</p>
                    </div>
                </div>

                {/* The Graph */}
                <div className="lg:w-[55%] w-full bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-[0_20px_50px_rgba(47,78,161,0.05)] flex flex-col justify-center relative group">
                    <div className="flex justify-between items-end mb-8 relative z-10 w-full">
                        <div className="text-right">
                            <h3 className="font-bold text-gray-900 text-2xl tracking-tight">נפח תנועה אורגנית (כניסות)</h3>
                        </div>
                        <div className="bg-[#2f4ea1]/5 text-[#2f4ea1] font-black text-2xl md:text-4xl px-5 py-3 rounded-xl dir-ltr text-center shadow-inner border border-[#2f4ea1]/10">
                            +345%
                        </div>
                    </div>

                    <div className="relative w-full h-[250px] md:h-[350px] mt-4 rounded-xl overflow-visible">
                        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 400">
                            <line x1="0" y1="100" x2="1000" y2="100" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="0" y1="200" x2="1000" y2="200" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="0" y1="300" x2="1000" y2="300" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />

                            <path
                                d="M0,400 L0,320 C100,320 150,330 250,280 C350,230 400,260 500,180 C600,100 700,150 850,50 C950,0 1000,20 1000,20 L1000,400 Z"
                                fill="url(#seo-gradient)"
                                className="opacity-0 transition-opacity duration-1000"
                                style={{ animation: 'fadeInUp 2s cubic-bezier(0.22,1,0.36,1) forwards', animationDelay: '0.5s' }}
                            />

                            <path
                                d="M0,320 C100,320 150,330 250,280 C350,230 400,260 500,180 C600,100 700,150 850,50 C950,0 1000,20 1000,20"
                                fill="none"
                                stroke="#2f4ea1"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="1500"
                                strokeDashoffset="1500"
                                style={{ animation: 'drawGraph 2.5s cubic-bezier(0.22,1,0.36,1) forwards' }}
                            />

                            <defs>
                                <linearGradient id="seo-gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#2f4ea1" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#2f4ea1" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Tooltips */}
                        <div className="absolute top-[80%] left-[0%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '0s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none"></div>
                            <div className="absolute top-8 left-0 md:left-1/2 md:-translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 group-active/pt:opacity-100 transition-opacity whitespace-nowrap pointer-events-none md:pointer-events-none">2,100 כניסות</div>
                        </div>
                        <div className="absolute top-[70%] left-[25%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '0.6s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '0.6s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 group-active/pt:opacity-100 transition-opacity whitespace-nowrap pointer-events-none md:pointer-events-none">3,850 כניסות</div>
                        </div>
                        <div className="absolute top-[45%] left-[50%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '1.2s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 group-active/pt:opacity-100 transition-opacity whitespace-nowrap pointer-events-none md:pointer-events-none">5,900 כניסות</div>
                        </div>
                        <div className="absolute top-[12.5%] left-[85%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '1.8s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '1.8s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 group-active/pt:opacity-100 transition-opacity whitespace-nowrap pointer-events-none md:pointer-events-none">9,420 כניסות</div>
                        </div>
                        <div className="absolute top-[5%] left-[100%] w-8 h-8 md:w-8 md:h-8 bg-[#2f4ea1] border-[6px] border-white rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-110 cursor-pointer shadow-lg transition-all group/pt z-20" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '2.5s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none"></div>
                            <div className="absolute top-1/2 right-[100%] md:right-[120%] -translate-y-1/2 bg-[#2f4ea1] text-white text-[15px] font-black py-2 px-4 rounded shadow-xl opacity-100 transition-opacity whitespace-nowrap w-max pointer-events-none flex flex-col items-center">
                                <span>12,800 כניסות</span>
                                <span className="text-blue-200 text-xs mt-0.5">כיום</span>
                            </div>
                        </div>

                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes drawGraph { to { stroke-dashoffset: 0; } }
                            @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
                            @keyframes pulsePoint {
                                0% { box-shadow: 0 0 0 0 rgba(47,78,161,0.5); }
                                70% { box-shadow: 0 0 0 20px rgba(47,78,161,0); }
                                100% { box-shadow: 0 0 0 0 rgba(47,78,161,0); }
                            }
                        `}} />
                    </div>

                    <div className="flex justify-between items-center text-gray-400 font-bold text-xs md:text-sm mt-8 dir-ltr px-2 uppercase tracking-widest relative z-0 pointer-events-none">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>Jun</span>
                        <span>Sep</span>
                        <span>Dec</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SponsoredPpcGraph = () => {
    return (
        <div className="mt-16 w-full bg-transparent">
            {/* Header */}
            <div className="text-center mb-10 md:mb-16">
                <span className="inline-block bg-[url('#')] bg-[#2f4ea1]/10 text-[#2f4ea1] px-4 py-2 rounded-full text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">דוגמה לנתוני לקוח</span>
                <h2 className="text-[#0b1638] font-black text-3xl md:text-5xl text-balance">לכבוש את החיפושים שמוכרים</h2>
                <p className="text-gray-500 font-medium max-w-2xl mx-auto mt-4 md:mt-6 text-balance md:text-lg">המטרה שלנו היא לא רק טראפיק, אלא המרות שורות תחתונות. ככה נראית השתלטות ממומנת שמביאה לידים חמים ומכפילה את החזר ההשקעה.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
                {/* Search Mockup */}
                <div className="lg:w-[45%] w-full bg-[#f8f9fa] rounded-3xl p-6 md:p-10 border border-gray-200/60 shadow-inner flex flex-col justify-center">
                    <div className="text-right mb-8">
                        <h3 className="font-bold text-gray-900 text-2xl tracking-tight">ככה נראית מודעה מנצחת</h3>
                        <p className="text-gray-500 text-base mt-2">תוצאות ממומנות בגוגל (PPC)</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-lg cursor-pointer group mb-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-[#2f4ea1]"></div>
                        <div className="flex items-center gap-2 mb-3 dir-ltr justify-end">
                            <span className="text-sm text-gray-800 tracking-wide font-medium">https://www.your-domain.co.il</span>
                            <span className="text-xs font-black text-gray-900 mx-1">ממומן</span>
                        </div>
                        <h3 className="text-[#1a0dab] font-normal text-2xl md:text-3xl group-hover:underline mb-2 font-arial dir-rtl text-right">השירות שאתם מציעים - האתר שלכם</h3>
                        <p className="text-[#4d5156] text-sm md:text-base leading-relaxed font-arial dir-rtl text-right">קופירייטינג מדויק שמבוסס על פסיכולוגיה צרכנית, עם הנעה לפעולה שגורמת ללקוח ללחוץ ולהשאיר פרטים אצלכם.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm opacity-60 filter grayscale scale-[0.98]">
                        <div className="flex items-center gap-2 mb-3 dir-ltr justify-end">
                            <span className="text-sm text-gray-800 tracking-wide">https://www.competitor.co.il</span>
                            <span className="text-xs font-black text-gray-900 mx-1">ממומן</span>
                        </div>
                        <h3 className="text-[#1a0dab] font-normal text-xl md:text-2xl mb-2 font-arial dir-rtl text-right">מודעות של מתחרים בענף</h3>
                        <p className="text-[#4d5156] text-sm md:text-base leading-relaxed font-arial dir-rtl text-right">עוד מודעה בנאלית וכללית ששורפת תקציב וקליקים בלי אסטרטגית המרות מותאמת.</p>
                    </div>
                </div>

                {/* The Graph */}
                <div className="lg:w-[55%] w-full bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-[0_20px_50px_rgba(47,78,161,0.05)] flex flex-col justify-center relative group">
                    <div className="flex justify-between items-end mb-8 relative z-10 w-full">
                        <div className="text-right">
                            <h3 className="font-bold text-gray-900 text-2xl tracking-tight">החזר השקעה בפרסום (ROAS)</h3>
                        </div>
                        <div className="bg-[#2f4ea1]/5 text-[#2f4ea1] font-black text-2xl md:text-4xl px-5 py-3 rounded-xl dir-ltr text-center shadow-inner border border-[#2f4ea1]/10">
                            x4.5
                        </div>
                    </div>

                    <div className="relative w-full h-[250px] md:h-[350px] mt-4 rounded-xl overflow-visible">
                        <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 400">
                            <line x1="0" y1="100" x2="1000" y2="100" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="0" y1="200" x2="1000" y2="200" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />
                            <line x1="0" y1="300" x2="1000" y2="300" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="5,5" />

                            <path
                                d="M0,350 L0,300 C150,300 200,250 350,220 C500,190 600,150 750,100 C880,50 950,20 1000,20 L1000,400 Z"
                                fill="url(#ppc-gradient)"
                                className="opacity-0 transition-opacity duration-1000"
                                style={{ animation: 'fadeInUp 2s cubic-bezier(0.22,1,0.36,1) forwards', animationDelay: '0.5s' }}
                            />

                            <path
                                d="M0,300 C150,300 200,250 350,220 C500,190 600,150 750,100 C880,50 950,20 1000,20"
                                fill="none"
                                stroke="#2f4ea1"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="1500"
                                strokeDashoffset="1500"
                                style={{ animation: 'drawGraph 2.5s cubic-bezier(0.22,1,0.36,1) forwards' }}
                            />

                            <defs>
                                <linearGradient id="ppc-gradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#2f4ea1" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#2f4ea1" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Tooltips */}
                        <div className="absolute top-[75%] left-[0%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '0s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none"></div>
                            <div className="absolute top-8 left-0 md:left-1/2 md:-translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 group-active/pt:opacity-100 transition-opacity whitespace-nowrap pointer-events-none md:pointer-events-none">₪11,500 הכנסות</div>
                        </div>
                        <div className="absolute top-[55%] left-[35%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '0.6s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '0.6s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 group-active/pt:opacity-100 transition-opacity whitespace-nowrap pointer-events-none md:pointer-events-none">₪38,200 הכנסות</div>
                        </div>
                        <div className="absolute top-[25%] left-[75%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '1.2s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 group-active/pt:opacity-100 transition-opacity whitespace-nowrap pointer-events-none md:pointer-events-none">₪82,000 הכנסות</div>
                        </div>
                        <div className="absolute top-[5%] left-[100%] w-8 h-8 md:w-8 md:h-8 bg-[#2f4ea1] border-[6px] border-white rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-110 cursor-pointer shadow-lg transition-all group/pt z-20" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '2.5s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none"></div>
                            <div className="absolute top-1/2 right-[100%] md:right-[120%] -translate-y-1/2 bg-[#2f4ea1] text-white text-[15px] font-black py-2 px-4 rounded shadow-xl opacity-100 transition-opacity whitespace-nowrap w-max pointer-events-none flex flex-col items-center">
                                <span>₪154,500 הכנסות</span>
                                <span className="text-blue-200 text-xs mt-0.5">כיום</span>
                            </div>
                        </div>

                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes drawGraph { to { stroke-dashoffset: 0; } }
                            @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }
                        `}} />
                    </div>

                    <div className="flex justify-between items-center text-gray-400 font-bold text-xs md:text-sm mt-8 dir-ltr px-2 uppercase tracking-widest relative z-0 pointer-events-none">
                        <span>Q1</span>
                        <span>Q2</span>
                        <span>Q3</span>
                        <span>Q4</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LightboxModal = ({ selectedImage, onNavigate, onClose }) => {
    const item = selectedImage.items[selectedImage.index];
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09102c]/95 p-4 md:p-8 backdrop-blur-md transition-opacity" onClick={onClose}>
            <button className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]" onClick={(e) => { e.stopPropagation(); onClose(); }}>
                <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <button className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hover:scale-110 z-[110]" onClick={(e) => { e.stopPropagation(); onNavigate(1); }}>
                <ChevronLeft className="w-10 h-10 md:w-16 md:h-16" />
            </button>

            <button className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hover:scale-110 z-[110]" onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}>
                <ChevronRight className="w-10 h-10 md:w-16 md:h-16" />
            </button>

            <motion.div key={selectedImage.index} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} className="flex flex-col items-center justify-center max-w-[85vw] md:max-w-[70vw]" onClick={(e) => e.stopPropagation()}>
                {item.isVideo ? (
                    <video src={item.image} autoPlay loop controls playsInline className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/20" />
                ) : (
                    <img src={item.image} className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-black/20" alt={item.title} />
                )}
            </motion.div>
        </motion.div>
    );
};

const DepartmentPortfolio = ({ category }) => {
    const [showAllDesign, setShowAllDesign] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedImage]);

    if (category === 'social') {
        return (
            <div className="mt-10 md:mt-16 w-full">
                <SocialCarousel />
            </div>
        );
    }

    if (category === 'seo') {
        return (
            <div className="mt-10 md:mt-16 w-full">
                <AnimatedSeoGraph />
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full lg:w-[95%] mx-auto">
                    {[
                        { label: "צמיחה בטראפיק", val: "+280%" },
                        { label: "עמוד ראשון", val: "150+" },
                        { label: "המרות מאורגני (CR)", val: "+75%" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-8 text-center rounded-2xl relative overflow-hidden group">
                            <div className="text-5xl md:text-6xl font-black text-[#2f4ea1] mb-2 dir-ltr">{stat.val}</div>
                            <div className="text-gray-500 text-sm font-bold tracking-widest uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (category === 'ppc') {
        return (
            <div className="mt-16 md:mt-24">
                <div className="mb-14">
                    <h2 className="text-gray-900 font-black text-2xl md:text-4xl mb-5 border-r-4 border-[#2f4ea1] pr-4">אקוסיסטם של המרות</h2>
                    <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                        יצירת נוכחות דיגיטלית רב-ערוצית היא קריטית לשמירה על עליונות (Top Of Mind) אצל הלקוח. אנחנו פורסים את המסרים שלכם על פני כל הפלטפורמות החמות ביותר – החל מקמפיינים מבוססי החלטה בגוגל חיפוש, דרך וידאו ברשתות המטא, וכלה בלינקדאין ו-TikTok. המודעות יעטפו את הגולש מכל עבר באמצעות רימרקטינג דינמי חכם.
                    </p>
                </div>
                <div className="mb-16 -mx-6 md:mx-0 rounded-3xl overflow-hidden py-10 bg-gray-50 border border-gray-100 shadow-inner">
                    <PlatformsMarquee />
                </div>
                <SponsoredPpcGraph />
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full lg:w-[95%] mx-auto">
                    {[
                        { label: "החזר השקעה (ROAS)", val: "x4.5" },
                        { label: "ירידה בעלות לליד", val: "-45%" },
                        { label: "צמיחה במכירות", val: "+350%" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 p-8 text-center rounded-2xl relative overflow-hidden group">
                            <div className="text-5xl md:text-6xl font-black text-[#2f4ea1] mb-2 dir-ltr">{stat.val}</div>
                            <div className="text-gray-500 text-sm font-bold tracking-widest uppercase">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (category === 'analytics') {
        return (
            <div className="mt-16 md:mt-24">
                <h2 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">נתונים שמדברים</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "גידול בטראפיק", val: "+280%" },
                        { label: "מיקומים בעמוד 1", val: "150+" },
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
            { id: "renovo", title: "רנובו - מגדל ביאליק", link: "https://lp.renovo.co.il/bialik_ramat_hasharon/", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
            { id: "midtown", title: "ישראל קנדה - Midtown Jerusalem", link: "https://lp.israel-canada.co.il/midtown_jerusalem/", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop" },
            { id: "azorim-melach", title: "אזורים - מלח הארץ", link: "https://lp.azorim.co.il/minisite_melach_haaretz/", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800&auto=format&fit=crop" }
        ];


        return (
            <div className="mt-16 md:mt-24">
                <h2 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">פרויקטים נבחרים (Web)</h2>
                <p className="text-gray-500 mb-8 font-medium">כדי לראות את איכות הפיתוח המלאה, לחצו על הפרויקטים וצפו בהם באוויר.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {webProjects.map((project, i) => (
                        <div key={i}
                            onClick={() => window.open(project.link, '_blank')}
                            onMouseEnter={(e) => { const v = e.currentTarget.querySelector('video'); if (v) v.play().catch(() => { }); }}
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
                            <div className="aspect-video bg-gray-100 overflow-hidden relative group-hover:shadow-inner">
                                {/* Scrolling Image Layer */}
                                <div
                                    className="absolute inset-0 w-full h-full bg-cover bg-top transition-all duration-[8000ms] ease-in-out group-hover:bg-bottom"
                                    style={{ backgroundImage: `url('/portfolio/${project.id}.webp'), url('${project.image}')` }}
                                ></div>

                                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#09102c]/90 via-[#09102c]/40 to-transparent flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                                    <span className="text-white font-bold tracking-wide text-sm drop-shadow-md">{project.title}</span>
                                </div>
                                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg pointer-events-none">
                                    <span className="text-[#0b1638] font-bold text-xs tracking-wide">צפו באתר החי</span>
                                    <ExternalLink size={14} className="text-[#2f4ea1]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Tech Stack Segment */}
                <div className="mt-16 md:mt-24 pt-16 border-t border-gray-100">
                    <div className="text-center mb-10">
                        <h2 className="text-[#0b1638] font-black text-2xl md:text-4xl text-balance">מובילים טכנולוגית</h2>
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
                <h2 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">אסטרטגיה אורגנית שמנצחת את האלגוריתם</h2>

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
            { id: "design_1", title: 'קמפיין מדברנד', type: 'Video Campaign', spanClass: 'col-span-2 md:col-span-2 row-span-1 md:row-span-2', isVideo: true, image: '/portfolio/design/medabrand-3.mp4' },
            { id: "design_2", title: 'מודעת אינסטגרם מדברנד', type: 'Social Media', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', image: '/portfolio/design/medabrand.png' },
            { id: "design_3", title: 'עיצוב קריאייטיב', type: 'Creative', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', image: '/portfolio/design/new-one-6.png' },
            { id: "design_4", title: 'קמפיין רימרקטינג', type: 'Performance', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', isVideo: true, image: '/portfolio/design/medabrand-4.mp4' },
            { id: "design_5", title: 'קריאייטיב PR', type: 'Social Media', spanClass: 'col-span-2 md:col-span-2 row-span-1 md:row-span-1', image: '/portfolio/design/new-one-7.png' },
            { id: "design_6", title: 'קמפיין וידאו', type: 'Video', spanClass: 'col-span-2 md:col-span-2 row-span-1 md:row-span-1', isVideo: true, image: '/portfolio/design/new-one-4.mp4' },
            { id: "design_7", title: 'סרטון אווירה', type: 'Atmosphere', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', isVideo: true, image: '/portfolio/design/new-one-3.mp4' },
            { id: "design_8", title: 'סרטון תדמית', type: 'Branding', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', isVideo: true, image: '/portfolio/design/fbcvb.mp4' }
        ];

        const videoProjects = designProjects.filter(p => p.isVideo);
        const imageProjects = designProjects.filter(p => !p.isVideo);

        return (
            <div className="mt-16 md:mt-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-gray-900 font-black text-3xl md:text-4xl mb-3 border-r-4 border-[#2f4ea1] pr-4 tracking-tight">שפה ויזואלית מנצחת</h2>
                        <p className="text-gray-500 font-medium max-w-2xl text-balance">מספרי מותג, דרך באנרים מניעים לפעולה ועד ממשקי משתמש מורכבים.</p>
                    </div>
                </div>

                {/* Video Gallery Section */}
                <h3 className="text-gray-900 font-black text-2xl md:text-3xl mt-12 mb-6 tracking-tight">גלריית וידאו וקמפיינים</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16">
                    {videoProjects.map((project, i) => (
                        <div key={i} 
                            onClick={() => setSelectedImage({ index: i, items: videoProjects })} 
                            onMouseEnter={(e) => { if(project.isVideo) { const v = e.currentTarget.querySelector('video'); if (v) v.play().catch(() => { }); } }}
                            onMouseLeave={(e) => { if(project.isVideo) { const v = e.currentTarget.querySelector('video'); if (v) { v.pause(); v.currentTime = 0; } } }}
                            className="relative group overflow-hidden rounded-xl md:rounded-2xl bg-black/5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200/50 aspect-square w-full">
                            <video src={project.image} preload="metadata" muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        </div>
                    ))}
                </div>

                {/* Images Gallery Section */}
                <h3 className="text-gray-900 font-black text-2xl md:text-3xl mt-12 mb-6 tracking-tight">מיתוג וקריאייטיב</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                    {imageProjects.map((project, i) => (
                        <div key={i} 
                            onClick={() => setSelectedImage({ index: i, items: imageProjects })} 
                            className="relative group overflow-hidden rounded-xl md:rounded-2xl bg-black/5 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200/50 aspect-square w-full">
                            <img src={project.image} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                        </div>
                    ))}
                </div>

                {/* Lightbox Modal Overlay using Portal */}
                {mounted && createPortal(
                    <AnimatePresence>
                    {selectedImage && (
                        <LightboxModal 
                            selectedImage={selectedImage} 
                            onClose={() => setSelectedImage(null)} 
                            onNavigate={(dir) => setSelectedImage(prev => ({ ...prev, index: (prev.index + dir + prev.items.length) % prev.items.length }))} 
                        />
                    )}
                    </AnimatePresence>,
                    document.body
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
            ctaText: "מוכנים להרים קמפיין מנצח?",
            long: "אנחנו מנהלים תקציבי ענק באופטימיזציה מקסימלית. הגישה שלנו לניהול מדיה היא מדעית: ניתוח קהלים, שיפור יחס המרה ושימוש בכלי AI לניהול בידים.",
            services: ["חיפוש ורשת המדיה בגוגל", "ניהול מטא (פייסבוק/אינסטגרם)", "קמפיינים בטיקטוק ולינקדאין", "קניה ישירה"],
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
                { q: "האם אתם עובדים עם עסקים B2B או B2C?", a: "שנינו! יש לנו ניסיון מוכח ועשיר גם עם חברות B2B מורכבות שמחפשות לידים איכותיים (למשל טכנולוגיה, שירותים עסקיים ותעשייה) וגם עם מותגי B2C שממוקדים במכירות איקומרס ויצירת מודעות למותג." },
                { q: "איך אתם מחשבים את התקציב החודשי המומלץ?", a: "אנחנו מנתחים את התחרותיות בענף, ערוצי הפרסום הרצויים ויעדי הצמיחה העסקיים שלכם, ואז בונים מודל השקעה (ROAS Model) שממליץ על תקציב נקודתי ומאפשר טווח סקייל בטוח." },
                { q: "האם יש לכם שקיפות מלאה לנתונים ולתקציב?", a: "לחלוטין. אתם בעלי החשבון המקורי, והתשלום על המדיה משולם ישירות לפלטפורמה. אנו מספקים לוחות בקרה (Dashboards) חיים בהם תוכלו לראות בזמן אמת לאן הכסף הולך וכמה המרות הגיעו." }
            ]
        },
        social: {
            title: "סושיאל ו-UGC",
            ctaText: "מוכנים להפוך לוויראליים?",
            long: "הסיפור שלכם צריך לפגוש את הלקוחות בדיוק במקום שבו הם נמצאים. אנחנו לוקחים מותגים והופכים אותם לתופעת רשת בעזרת שפה ויזואלית ייחודית, הפקות וידאו ויראליות, ואסטרטגיית סושיאל שעוצרת את הגלילה (Scroll-stoppers). העידן החדש דורש תוכן מהיר, חד, ומבוסס דאטה.",
            services: ["הפקת Reels ו-TikTok", "צילום UGC איכותי למותגים", "ניהול עמודים ותחזוקה שוטפת", "שיווק משפיענים"],
            processTitle: "המתכון להפוך לוויראלי",
            processSubtitle: "איך עובדת מחלקת הסושיאל שלנו",
            process: [
                { title: "קריאייטיב וסטוריטלינג", desc: "ראיונות עומק ופיצוח רעיוני לכל סרטון, כתיבת תסריטים מרתקים שמחזיקים במיוחד את זמן הצפייה של דור ה-Z.", icon: <Lightbulb size={28} /> },
                { title: "ימי צילום והפקת UGC", desc: "הקלטות שטח איכותיות עם קריינים, משפיענים או לקוחות, המייצרות אותנטיות מוכחת המניעה לפעולה.", icon: <Camera size={28} /> },
                { title: "עריכה דינמית", desc: "עריכת פוסט-פרודקשן קצבית הכוללת אנימציות וטקסטים דינמיים שמונעים מהגולש להמשיך לגלול הלאה.", icon: <Video size={28} /> },
                { title: "הפצה רוחבית ברשת", desc: "תזמון מדויק של הפוסטים בחוקיות האלגוריתם כדי לייצר תפוצה אורגנית וממומנת מקסימלית במקביל.", icon: <Users size={28} /> }
            ],
            faqs: [
                { q: "מה ההבדל בין ניהול סושיאל רגיל למה שאתם עושים?", a: "אנחנו לא רק מעלים פוסטים עיצוביים. אנחנו מייצרים שפה, אסטרטגיה ותוכן וידאו קצר שמבוסס על טרנדים והבנה עמוקה של האלגוריתמים, במטרה להגיע לוויראליות אמיתית ולהמיר צופים ללקוחות." },
                { q: "האם אתם מפיקים את סרטוני הוידאו והרילסים?", a: "בהחלט. יש לנו צוות קריאייטיב וצילום שדואג להכל מהקצה לקצה: החל מרמת הקונספט, מתן ערך דרך UGC אותנטי, ועד יום צילומים מעשי בשטח הדואג שהתוכן יהיה מניע לפעולה." },
                { q: "באיזו תדירות מתפרסמים הפוסטים?", a: "התדירות נבנית על בסיס קהל היעד והתחום. כדי לשמור על רלוונטיות באלגוריתם, מותגים לרוב מחייבים העלאה של 3 עד 5 פוסטים/רילסים בשבוע, בנוסף לפעילות סטורי קבועה." },
                { q: "מה זה בעצם UGC ולמה זה כה חשוב?", a: "UGC (User Generated Content) הוא תוכן שמצולם בסגנון 'טבעי' ונראה כאילו נוצר על ידי לקוח שלכם. הוא נתפס כאותנטי, הרבה פחות פרסומי, וברוב המוחץ של המקרים ממיר באחוזים גבוהים בהרבה מקריאייטיב גרפי." },
                { q: "איך אתם מודדים הצלחה בסושיאל?", a: "מלבד מדדי חשיפה ומעורבות קלאסיים (צפיות, לייקים, תגובות, שמירות), אנחנו מסנכרנים את התנועה האורגנית יחד עם מחלקת המדיה כדי לזהות צמיחה מדויקת בהמרות (קניות או נטישות סל)." }
            ]
        },
        design: {
            title: "סטודיו וקריאייטיב",
            ctaText: "מוכנים לעצב מותג בלתי נשכח?",
            long: "אנחנו מאפיינים ומעצבים ממשקים ותוצרים שיווקיים שמרגישים טבעיים למשתמש, יחד עם עיצוב פרימיום שמייצר אמון מיידי במותג. אנחנו מעניקים מעטפת מלאה של הסטודיו לכלל הפרויקטים שלנו.",
            services: ["שפה חזותית וקונספט", "עיצוב ויצירת מסרים", "זהות תאגידית", "בניית ספר מותג"],
            processTitle: "תהליך העיצוב שלנו",
            processSubtitle: "לייצר חוויה ויזואלית מדויקת ללקוח",
            process: [
                { title: "בריף וגיבוש קונספט", desc: "הבנת ערכי המותג, גיבוש קהל היעד ובניית לוח השראה חזותי המגדיר את הפאליטה והאווירה הכללית.", icon: <FileText size={28} /> },
                { title: "יצירת זהות (Branding)", desc: "עיצוב ויצירת מסרים, טיפוגרפיה ושפה גרפית שמשלבים מראה ויזואלי מהוקצע שעוזר לעורר אמינות רגשית.", icon: <Palette size={28} /> },
                { title: "פרוטוטייפים לאישור", desc: "בניית מוקאפים, דפי נחיתה אינטראקטיביים או מצגות מותג בכדי לחוש את העיצוב בדיוק כפי שהלקוח יחווה.", icon: <Layout size={28} /> },
                { title: "מסירה מנוהלת (Handoff)", desc: "אריזת כלל מרכיבי הסטודיו לתיק אחיד והעברת הקבצים למחלקת הפיתוח תוך ליווי טכני שוטף.", icon: <Briefcase size={28} /> }
            ],
            faqs: [
                { q: "מה כולל תהליך הסטודיו אצלכם?", a: "התהליך מתחיל במחקר שפותר את הנקודות הכואבות אצל הלקוח בהיבט הוויזואלי וקריאייטיבי. לאחר מכן נעבור למסע בו נתרגם את הסיפור למסכים מעבר לפרוטוטייפ האינטראקטיבי או חומרים טיוטליים בקמפיינים." },
                { q: "האם אתם מעצבים גם חומרי פרינט (Offline)?", a: "כן, בהחלט. מעבר לפעילות הדיגיטליות הקפדנית (דסקטופ ונייד), אנחנו מפיקים מוצרי דפוס לרבות רול-אפים, פליירים כנסים תעשייתיים, אריזות מוצר ואפילו עיצוב לביתני ענק בתערוכות." },
                { q: "באיזה אופן מתבצע עיצוב UI/UX אצלכם?", a: "מחקר התנהגות גולשים קודם לכל עיצוב. הסטודיו מתחיל מאבחון פרסונות משתמש (User Personas), ציור זרימת משתמש (User Flow) וסקיצות (Wireframes). רק כשההגיון ברור, מוסיפים שכבת פרימיום עיצובית." },
                { q: "כמה סבבי תיקונים כלולים הפרויקט?", a: "אנו עובדים בשיטת ה-Milestones (ציוני דרך). אין מגבלה דרסטית, אלא עבודה זורמת: נאשר סקיצה ראשונית ונקבל ממנה כיוון, ואז נעבור לסבבי פינישים קטנים כדי לוודא שאתם מאתיים אחוז מרוצים מהתוצר המוגמר." },
                { q: "האם אנחנו מקבלים את קבצי המקור (פתוחים)?", a: "בהחלט. בסיום פרויקט מיתוג או עיצוב ממשק, ולאחר שמאושר ב-100%, מועבר לכם מסמך Handoff מסודר כולל כל קבצי ה-Figma / Illustrator פתוחים ושייכים לכם בלעדית." }
            ]
        },
        tech: {
            title: "בניית אתרים",
            ctaText: "מוכנים לבנות את האתר הבא שלכם?",
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
            ctaText: "מוכנים להגיע למקום הראשון?",
            long: "להיות בראש תוצאות החיפוש זו ריצה למרחקים ארוכים. אנחנו משלבים איכויות טכניות באסטרטגיית תוכן שבונה מומנטום של סמכות מוכחת גם עבור ביטויים ותוכן מקומי או גלובאלי.",
            services: ["בדיקות טכניות שוטפות", "שיפור תנועה ספציפית וקרוס-זונג", "בניית פרופיל קישורים פוטנטי", "אופטימיזציה למנועי בינה מלאכותית (GEO)"],
            processTitle: "איך למצב את עצמכם בטופ?",
            processSubtitle: "התהליך האורגני שלנו",
            process: [
                { title: "אודיט טכני וליבת התוכן", desc: "סריקה מלאה של קודי האתר לאיתור שגיאות קריטיות לצד מציאת הזדמנויות של ביטויי מפתח ממוקדים שלא מנוצלים.", icon: <Search size={28} /> },
                { title: "אופטימיזציה מקומית (On-Page)", desc: "התאמת תוכן כירורגית: שיפור מהירויות טעינה, כותרות H1/H2 תקינות ועדכון תגיות מטא באופן שוטף.", icon: <Code2 size={28} /> },
                { title: "בניית תוכן עשיר לגולש", desc: "הפקת מאמרים, עמודי נחיתה ומדריכים שמובילים באופן טבעי את הגולש לתשובה אותה הוא מעוניין לקרוא.", icon: <MessageSquare size={28} /> },
                { title: "פרופיל קישורים ואוטוריטה", desc: "רכישת קישורים איכותיים מאתרים חזקים ברשת (Off-Page) ובניית סמכות מותג למנועי הבינה המלאכותית (GEO) כדי לקבע נוכחות בתשובות ה-AI.", icon: <TrendingUp size={28} /> }
            ],
            faqs: [
                { q: "מה זה GEO לעומת SEO?", a: "GEO (Generative Engine Optimization) מתייחס להתאמת התוכן שלכם למנועי החיפוש החדשים המבוססים על בינה מלאכותית (כמו ChatGPT, Perplexity, וגוגל SGE). בזמן ש-SEO מתמקד בדירוג הקלאסי לצד המתחרים, GEO מוודא שה-AI ימליץ עליכם כתשובה המוחלטת." },
                { q: "תוך כמה זמן נראה השפעה של תהליך SEO?", a: "תהליך קידום אורגני הוא השקעה אסטרטגית עמוקה. תוצאות תנודותיות לרוב יורגשו לאחר 3 חודשים, כאשר קפיצות מובהקות ותשואת ה-ROI המרכזית צפות במלוא עוצמתן תוך 6 עד 9 חודשים." },
                { q: "האם אתם כותבים גם את המאמרים לאתר?", a: "חד משמעית. מחלקת ה-SEO שלנו כוללת למעשה תא תוכן סגור שמכיל קופירייטרים בעלי רקע מוטה SEO שמייצרים טקסט בעל ערך אמיתי לגולשים שגם נסרק ומאונדקס בצורה אופטימלית על ידי גוגל." },
                { q: "איך אתם מודדים ובונים קישורים חיצוניים?", a: "אנו לא עושים שימוש ב'חוות קישורים' פאסיביות שעלולות לגרור ענישה. הגישה מתבססת על Digital PR: קשר רצוף עם בורד עיתונאים לפרסום אורגני במגזינים אקטואליים רבי עוצמה ברמות שונות של סמכות (DA)." },
                { q: "מה מתבצע בצד הטכני של האתר?", a: "בדיקת מהירות שרתי, סגירת לופים (404), צמצום JS עודף, בניית מפות אתר, פירור לחם (Breadcrumbs), ושיפור כללי של מדדי ה-Core Web Vitals שגוגל דורשת כדי לפרוס אמינות." }
            ]
        },
        strategy: {
            title: "אסטרטגיה שיווקית",
            ctaText: "מוכנים לתכנן את הצמיחה הבאה?",
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
                { q: "איך מתבצע תהליך בניית האסטרטגיה?", a: "אנו מתחילים בסדנאות עם ההנהלה כדי להבין את רצפות העסק והמוצר לעומק. לאחר מכן נצא לתהליך ניתוח דאטה נרחב שבסופו מתווה מקיף שעליו יישענו כלל ערוצי הסטודיו, המדיה והפיתוח." },
                { q: "למי מתאים לקחת רק אסטרטגיה ייעוצית?", a: "ייעוץ אסטרטגי הוא לרוב מומלץ למותגים מבוססים שחווים תקרת זכוכית בצמיחה (Scale) וכבר מחזיקים צוות In-House וזקוקים לראיית פרימיום חיצונית שתנתח פערים ואתגרי התרחבות." },
                { q: "מה התוצר הסופי שאקבל בסוף התהליך?", a: "אתם מקבלים ספר מותג עיוני שמכיל מפות מסע, טקטיקות פרסום ספציפיות לכל ערוץ ומסגרת תקציבית חודשית מחושבת שתשמש כ'תנך המכירות' עבורכם לכל החלטה שיווקית הבאה בארגון." },
                { q: "האם אתם גם מיישמים את האסטרטגיה או רק בונים אותה?", a: "אנו סוכנות 360 – למעשה לאחר החתימה הסופית על ספר האסטרטגיה, אנו מיד מטמיעים אותו בצוותי הקריאייטיב, המדיה והחומרים השיווקיים שלנו כדי ליישם באופן מעשי ולדאוג שהתכנון פוגש את המציאות בחפיפה מלאה." }
            ]
        },
        analytics: {
            title: "אנליטיקס ודאטה",
            ctaText: "מוכנים להשתלט על הדאטה שלכם?",
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
                { q: "יש דרך נוחה לראות את הנתונים בזמן אמת?", a: "אנו יכולים להגדיר לכם דאשבורדים מותאמים אישית (בעזרת כלים כמו Looker Studio), כך שכל מדדי המפתח שחשובים לכם יהיו מרוכזים בלוח בקרה אחד שעובד בזמן אמת ויחסוך כניסה למערכות שונות." },
                { q: "מהו למעשה 'מעקב צד שרת' (Server-Side Tracking)?", a: "במקום להסתמך על קוד פיקסל שרץ אצל הגולש וחוסם לעיתים על ידי דפדפנים (כמו iOS או אד-בלוקר), המעקב מבוצע בשרת ייעודי שלנו. זה משפר משמעותית את אמינות הנתונים וקצב ההמרות שמדווח למקימי הקמפיינים." },
                { q: "איזה כלי אנליטיקה אתם מטמיעים לרוב?", a: "אנו בוחרים כלים בהתאם לפרויקט. הבסיס תמיד יהיה GA4 ו-GTM. עבור אזורי סחר (eCommerce), אנו מוסיפים פעמים רבות מפות חום (כמו Hotjar או Clarity) ומוצרים למפלוחי נתונים מורכבים (Looker / Mixpanel)." }
            ]
        }
    };
    const dept = data[id] || data.ppc;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": dept.title,
        "description": dept.long,
        "serviceType": dept.title,
        "provider": {
            "@type": "Organization",
            "name": "Sepros Digital",
            "url": "https://www.sepros.co.il/",
            "logo": "https://www.sepros.co.il/images/logo.png"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Israel"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "שירותי המחלקה",
            "itemListElement": dept.services.map((s, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": s
                },
                "position": index + 1
            }))
        },
        "url": `https://www.sepros.co.il/service/${id}`
    };

    return (
        <Reveal className="min-h-screen bg-white pt-32 md:pt-40 pb-20 text-right">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <div className="max-w-[1400px] mx-auto px-6">
                {/* Mobile Title - Appears above image on mobile */}
                <div className="lg:hidden text-4xl md:text-5xl font-black uppercase mb-8 text-[#2f4ea1] leading-tight flex flex-col-reverse relative z-10">{dept.title}</div>

                <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-stretch">
                    <div className="lg:w-[60%] flex flex-col justify-center order-last lg:order-first mt-2 lg:mt-0">
                        {/* Desktop Title */}
                        <h1 className="hidden lg:flex text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-6 text-[#2f4ea1] leading-tight flex-col-reverse relative z-10">{dept.title}</h1>
                        <p className="text-gray-600 text-xl md:text-2xl font-normal mb-10 leading-relaxed text-balance relative z-10">{dept.long}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                            {dept.services.map((s, i) => (
                                <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 md:p-6 border border-gray-100 rounded-lg transition-transform hover:-translate-y-1">
                                    <CheckCircle2 className="text-[#2f4ea1] shrink-0" size={22} />
                                    <h2 className="font-bold text-gray-800 text-base md:text-lg">{s}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Premium Abstract Dynamic Visual matching Department category */}
                    <div className="lg:w-[40%] w-full flex bg-gray-50/0 border-transparent items-center justify-center p-0 rounded-3xl relative overflow-visible order-first lg:order-last min-h-[220px] md:min-h-[300px]">
                        <DepartmentHeroVisual category={id || 'ppc'} />
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
                    <h2 className="text-2xl md:text-3xl font-black relative z-10 text-[#2f4ea1]">{dept.ctaText || "מוכנים להתחיל לעבוד?"}</h2>
                    <button id="dept_contact_btn" onClick={() => router.push('/contact')} className="bg-[#2f4ea1] text-white px-8 py-4 font-black tracking-widest hover:bg-[#0747cc] transition-all rounded-full relative z-10 shadow-md">בואו נתחיל</button>
                </div>
            </div>
        </Reveal>
    );
};

export default DepartmentDetail;

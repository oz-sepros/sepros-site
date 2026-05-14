"use client";
import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, PlayCircle, ArrowLeft, ArrowUpLeft, TrendingUp, Search, MonitorSmartphone, Code2, Globe, Target, LineChart, Palette, Layout, Settings, Users, BarChart, Lightbulb, Compass, FileText, Camera, Video, MessageSquare, Briefcase, PieChart } from 'lucide-react';
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
    
    // ׳”׳¡׳¨׳˜׳•׳ ׳™׳ ׳”׳׳׳™׳×׳™׳™׳ (YouTube Shorts) ׳©׳ ׳”׳׳§׳•׳—
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
    // ׳ ׳›׳₪׳™׳ ׳׳× ׳”׳׳¢׳¨׳ ׳›׳“׳™ ׳׳׳ ׳•׳¢ ׳§׳₪׳™׳¦׳•׳× ׳•׳™׳–׳•׳׳׳™׳•׳× ׳‘׳׳¦׳‘ ׳׳¢׳’׳ ׳׳™׳ ׳¡׳•׳₪׳™
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
            }, 3500); // 3.5 ׳©׳ ׳™׳•׳×, ׳׳ ׳׳”׳™׳¨ ׳׳™׳“׳™
        }
        return () => clearInterval(interval);
    }, [isHovered, playing, autoPlay, items.length]);

    // Touch Handlers ׳׳׳•׳‘׳™׳™׳
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
        setAutoPlay(false); // ׳”׳₪׳¡׳§׳× ׳¡׳™׳‘׳•׳‘ ׳׳•׳˜׳•׳׳˜׳™ ׳›׳©׳ ׳•׳’׳¢׳™׳
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
        
        // ׳‘׳¢׳‘׳¨׳™׳× RTL: ׳”׳—׳׳§׳× ׳™׳׳™׳ ׳” ׳׳‘׳™׳׳” ׳׳”׳¦׳“ ׳”׳©׳׳׳׳™ (Next). ׳”׳—׳׳§׳× ׳©׳׳׳׳” ׳׳‘׳™׳׳” ׳׳”׳¦׳“ ׳”׳™׳׳ ׳™ (Prev)
        if (isRightSwipe) handleNext();
        if (isLeftSwipe) handlePrev();
        
        // ׳”׳—׳–׳¨׳× ׳”׳ ׳™׳’׳•׳ ׳”׳׳•׳˜׳•׳׳˜׳™ ׳׳—׳¨׳™ ׳›׳׳” ׳©׳ ׳™׳•׳× ׳©׳ ׳—׳•׳¡׳¨ ׳׳’׳¢
        setTimeout(() => setAutoPlay(true), 2500);
    };

    // ׳₪׳•׳ ׳§׳¦׳™׳” ׳׳—׳™׳©׳•׳‘ ׳”׳׳¨׳—׳§ ׳©׳ ׳›׳ ׳¡׳¨׳˜׳•׳ ׳׳”׳׳¨׳›׳–
    const getOffset = (index) => {
        let offset = index - active;
        // ׳׳¦׳™׳׳× ׳”׳ ׳×׳™׳‘ ׳”׳§׳¦׳¨ ׳‘׳™׳•׳×׳¨ ׳‘׳׳¢׳’׳
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
            
            <h2 className="text-4xl md:text-5xl font-black text-[#2f4ea1] mb-2 md:mb-4 text-center relative z-10 tracking-tight text-balance">׳”׳¦׳¦׳” ׳׳×׳•׳›׳ ׳©׳׳ ׳—׳ ׳• ׳™׳•׳¦׳¨׳™׳</h2>
            <p className="text-gray-600 text-lg md:text-xl text-center max-w-2xl mb-6 md:mb-10 relative z-10 px-6 font-medium text-balance">׳×׳•׳›׳ ׳©׳׳ ׳™׳¢ ׳׳₪׳¢׳•׳׳” - UGC, ׳¨׳™׳׳¡׳™׳, ׳₪׳¨׳¡׳•׳׳•׳× ׳§׳¦׳¨׳•׳×, ׳˜׳¨׳ ׳“׳™׳, ׳׳₪׳ ׳™/׳׳—׳¨׳™.</p>

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
                                    <img src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} alt="׳©׳•׳¨׳˜׳¡ - ׳“׳•׳’׳׳”" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 md:group-hover:scale-105" />
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

const DepartmentHeroVisual = ({ category }) => {
    switch (category) {
        case 'seo':
            return (
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8 rounded-3xl bg-gradient-to-br from-indigo-50/50 to-white overflow-hidden group">
                    <div className="absolute top-8 right-12 w-20 h-20 bg-[#2f4ea1]/5 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-12 left-8 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="relative z-10 w-full max-w-xs bg-white rounded-2xl shadow-xl shadow-[#2f4ea1]/5 p-5 border border-gray-100 flex flex-col gap-4 transition-transform hover:-translate-y-2 duration-500">
                        <div className="flex items-center gap-3 bg-gray-50 rounded-full px-4 py-3 border border-gray-100">
                            <Search className="text-[#2f4ea1]" size={20} />
                            <div className="h-2 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                        </div>
                        <div className="space-y-3 mt-2">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-[#2f4ea1]/10 flex items-center justify-center text-[#2f4ea1]"><Target size={20} /></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-2 bg-[#2f4ea1] rounded w-full"></div>
                                    <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 opacity-50">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"><Search size={20} className="text-gray-400" /></div>
                                <div className="flex-1 space-y-2">
                                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                                    <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        case 'ppc':
            return (
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8 rounded-3xl bg-gradient-to-tr from-green-50/50 to-emerald-50/30 overflow-hidden group">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(47,78,161,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(47,78,161,0.03)_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
                    <div className="relative z-10 w-full max-w-xs bg-white rounded-2xl shadow-xl shadow-green-900/5 p-6 border border-gray-100 transition-transform hover:-translate-y-2 duration-500">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2 text-emerald-600 font-black text-2xl">
                                <TrendingUp size={28} />
                                ROAS
                            </div>
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded-md">LIVE</span>
                        </div>
                        <div className="flex items-end gap-2 h-24">
                            {[30, 45, 40, 60, 80, 100].map((h, i) => (
                                <div key={i} className="flex-1 bg-gradient-to-t from-emerald-400 to-emerald-300 rounded-t-sm animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}></div>
                            ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                            <div className="space-y-1">
                                <div className="h-2 bg-gray-200 rounded w-16"></div>
                                <div className="h-2 bg-gray-100 rounded w-10"></div>
                            </div>
                            <div className="bg-[#2f4ea1] text-white text-xs font-bold px-3 py-1.5 rounded-full">+450%</div>
                        </div>
                    </div>
                </div>
            );
        case 'social':
            return (
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8 rounded-3xl bg-gradient-to-bl from-pink-50/50 to-orange-50/30 overflow-hidden group">
                    <div className="relative z-10 w-[180px] h-[300px] bg-white rounded-3xl shadow-2xl shadow-pink-900/10 border-4 border-gray-100 p-2 rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500 flex flex-col">
                        <div className="bg-gray-100 rounded-2xl flex-1 relative overflow-hidden flex items-center justify-center">
                            <Video className="text-gray-300 opacity-50" size={48} />
                            <div className="absolute right-2 bottom-16 flex flex-col gap-3">
                                <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-pink-500 animate-bounce"><Target size={20} /></div>
                                <div className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#2f4ea1]"><MessageSquare size={18} /></div>
                            </div>
                            <div className="absolute bottom-4 left-4 right-14 space-y-2">
                                <div className="h-2 bg-white rounded w-full"></div>
                                <div className="h-2 bg-white/70 rounded w-2/3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-1/4 right-8 bg-white p-4 rounded-2xl shadow-lg border border-gray-50 rotate-12 animate-pulse">
                        <div className="flex gap-2 text-orange-500 font-bold items-center"><Users size={20} /> +10k</div>
                    </div>
                </div>
            );
        case 'design':
            return (
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8 rounded-3xl bg-gradient-to-tr from-purple-50/50 to-[#2f4ea1]/5 overflow-hidden group">
                    <div className="relative w-full max-w-xs h-64 z-10 flex items-center justify-center">
                        <div className="absolute z-30 w-32 h-32 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 -rotate-6 group-hover:rotate-0 transition-all duration-500 flex flex-col justify-between">
                            <Palette size={28} className="text-purple-500" />
                            <div className="flex gap-1">
                                <div className="h-4 flex-1 bg-purple-500 rounded-full"></div>
                                <div className="h-4 flex-1 bg-pink-400 rounded-full"></div>
                                <div className="h-4 flex-1 bg-orange-400 rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute z-20 top-8 right-8 w-40 h-24 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 p-4 rotate-12 group-hover:scale-105 transition-all duration-500">
                            <Layout size={24} className="text-[#2f4ea1] mb-2" />
                            <div className="h-2 bg-gray-200 rounded w-full mb-1.5"></div>
                            <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                        </div>
                        <div className="absolute z-10 bottom-6 left-6 w-32 h-32 bg-gradient-to-br from-[#2f4ea1] to-purple-600 rounded-full shadow-lg opacity-80 blur-[2px] animate-pulse"></div>
                    </div>
                </div>
            );
        case 'tech':
            return (
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8 rounded-3xl bg-[#0b1638] overflow-hidden group">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#2f4ea1 1px, transparent 1px), linear-gradient(90deg, #2f4ea1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                    <div className="relative z-10 w-full max-w-sm bg-[#112052] rounded-xl shadow-2xl border border-[#2f4ea1]/30 p-2 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#2f4ea1]/20">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                        <div className="p-4 font-mono text-sm text-blue-300/80 space-y-2 dir-ltr text-left">
                            <div><span className="text-pink-400">const</span> <span className="text-white">buildFuture</span> = <span className="text-yellow-300">async</span> () ={'>'} {'{'}</div>
                            <div className="pl-4"><span className="text-pink-400">await</span> <span className="text-cyan-300">sepros</span>.<span className="text-green-300">develop</span>({'{'}</div>
                            <div className="pl-8 text-gray-400">performance: <span className="text-orange-300">100</span>,</div>
                            <div className="pl-8 text-gray-400">design: <span className="text-orange-300">'premium'</span></div>
                            <div className="pl-4">{'}'});</div>
                            <div>{'}'}</div>
                            <div className="mt-4 flex items-center text-xs opacity-50"><Code2 size={14} className="mr-2" /> Terminal - Running</div>
                        </div>
                    </div>
                </div>
            );
        case 'analytics':
        case 'strategy':
            return (
                <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-8 rounded-3xl bg-gradient-to-bl from-blue-50/50 to-gray-50 overflow-hidden group">
                     <div className="relative z-10 grid grid-cols-2 gap-4 w-full max-w-sm">
                         <div className="col-span-2 bg-white rounded-2xl shadow-lg border border-gray-100 p-5 flex items-center justify-between transition-transform group-hover:-translate-y-1">
                             <div>
                                 <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 dir-ltr text-left">Total Revenue</div>
                                 <div className="text-3xl font-black text-[#0b1638]">ג‚×2.4M</div>
                             </div>
                             <LineChart size={40} className="text-[#2f4ea1]" />
                         </div>
                         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 transition-transform group-hover:-translate-y-1 animate-pulse" style={{ animationDelay: '0.2s' }}>
                             <PieChart size={32} className="text-purple-500 mb-4" />
                             <div className="text-xs font-bold text-gray-400 uppercase dir-ltr text-left">Conversion</div>
                             <div className="text-xl font-bold text-gray-900 mt-1 dir-ltr text-left">4.8%</div>
                         </div>
                         <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 transition-transform group-hover:-translate-y-1 animate-pulse" style={{ animationDelay: '0.4s' }}>
                             <BarChart size={32} className="text-blue-500 mb-4" />
                             <div className="text-xs font-bold text-gray-400 uppercase dir-ltr text-left">Sessions</div>
                             <div className="text-xl font-bold text-gray-900 mt-1 dir-ltr text-left">124K</div>
                         </div>
                     </div>
                </div>
            );
        default:
            return null;
    }
};

const AnimatedSeoGraph = () => {
    return (
        <div className="mt-16 w-full bg-transparent">
            {/* Header */}
            <div className="text-center mb-10 md:mb-16">
                <span className="inline-block bg-[#2f4ea1]/10 text-[#2f4ea1] px-4 py-2 rounded-full text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">׳“׳•׳’׳׳” ׳׳ ׳×׳•׳ ׳™ ׳׳§׳•׳—</span>
                <h2 className="text-[#0b1638] font-black text-3xl md:text-5xl text-balance">׳׳›׳‘׳•׳© ׳׳× ׳”׳׳§׳•׳׳•׳× ׳©׳׳•׳›׳¨׳™׳</h2>
                <p className="text-gray-500 font-medium max-w-2xl mx-auto mt-4 md:mt-6 text-balance md:text-lg">׳×׳”׳׳™׳ ׳”-SEO ׳©׳׳ ׳• ׳׳™׳™׳¦׳¨ ׳¡׳׳›׳•׳× ׳׳׳™׳×׳™׳× ׳‘׳¨׳©׳×. ׳›׳›׳” ׳ ׳¨׳׳™׳× ׳”׳©׳×׳׳˜׳•׳× ׳¢׳ ׳”׳‘׳™׳˜׳•׳™׳™׳ ׳”׳×׳—׳¨׳•׳×׳™׳™׳ ׳‘׳¢׳ ׳£ ׳©׳׳›׳₪׳™׳ ׳׳× ׳›׳׳•׳× ׳”׳›׳ ׳™׳¡׳•׳× ׳׳׳©׳׳׳™׳ ׳₪׳•׳˜׳ ׳¦׳™׳׳׳™׳.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
                {/* Search Mockup */}
                <div className="lg:w-[45%] w-full bg-[#f8f9fa] rounded-3xl p-6 md:p-10 border border-gray-200/60 shadow-inner flex flex-col justify-center">
                    <div className="text-right mb-8">
                        <h3 className="font-bold text-gray-900 text-2xl tracking-tight">׳›׳›׳” ׳–׳” ׳ ׳¨׳׳” ׳‘׳׳§׳•׳ ׳”׳¨׳׳©׳•׳</h3>
                        <p className="text-gray-500 text-base mt-2">׳×׳•׳¦׳׳•׳× ׳׳•׳¨׳’׳ ׳™׳•׳× ׳‘׳’׳•׳’׳ (׳׳׳ ׳§׳™׳“׳•׳ ׳׳׳•׳׳)</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-lg cursor-pointer group mb-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-[#2f4ea1]"></div>
                        <div className="flex items-center gap-3 mb-3 dir-ltr justify-end">
                            <span className="text-sm text-gray-800 tracking-wide font-medium">https://www.your-domain.co.il</span>
                            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                <Globe size={14} className="text-[#2f4ea1]" />
                            </div>
                        </div>
                        <h2 className="text-[#1a0dab] font-normal text-2xl md:text-3xl group-hover:underline mb-2 font-arial dir-rtl text-right">׳”׳©׳™׳¨׳•׳× ׳©׳׳×׳ ׳׳¦׳™׳¢׳™׳ - ׳”׳׳×׳¨ ׳©׳׳›׳</h2>
                        <p className="text-[#4d5156] text-sm md:text-base leading-relaxed font-arial dir-rtl text-right">׳›׳׳ ׳׳•׳₪׳™׳¢ ׳×׳™׳׳•׳¨ ׳׳•׳©׳ ׳©׳ ׳”׳¢׳¡׳§ ׳©׳׳›׳ ׳©׳’׳•׳¨׳ ׳׳׳§׳•׳— ׳׳׳—׳•׳¥ ׳•׳׳”׳™׳›׳ ׳¡ ׳“׳•׳•׳§׳ ׳׳׳×׳¨ ׳©׳׳›׳ ׳•׳׳ ׳׳׳£ ׳׳—׳“ ׳׳×׳•׳ ׳›׳ ׳”׳׳×׳—׳¨׳™׳ ׳‘׳¢׳׳•׳“ ׳”׳¨׳׳©׳•׳ ׳‘׳’׳•׳’׳.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm opacity-60 filter grayscale scale-[0.98]">
                        <div className="flex items-center gap-3 mb-3 dir-ltr justify-end">
                            <span className="text-sm text-gray-800 tracking-wide">https://www.competitor.co.il</span>
                            <div className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center shrink-0">
                                <Globe size={14} className="text-gray-500" />
                            </div>
                        </div>
                        <h2 className="text-[#1a0dab] font-normal text-xl md:text-2xl mb-2 font-arial dir-rtl text-right">׳”׳׳×׳—׳¨׳” ׳”׳›׳™ ׳’׳“׳•׳ ׳©׳׳›׳</h2>
                        <p className="text-[#4d5156] text-sm md:text-base leading-relaxed font-arial dir-rtl text-right">׳×׳™׳׳•׳¨ ׳”׳¢׳¡׳§ ׳©׳ ׳”׳׳×׳—׳¨׳” ׳©׳ ׳׳¦׳ ׳׳×׳—׳×׳™׳›׳ ׳•׳׳׳‘׳“ ׳׳× ׳׳¨׳‘׳™׳× ׳”׳˜׳¨׳׳₪׳™׳§ ׳‘׳¢׳ ׳£ ׳׳׳© ׳‘׳¨׳’׳¢׳™׳ ׳׳׳•.</p>
                    </div>
                </div>

                {/* The Graph */}
                <div className="lg:w-[55%] w-full bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-[0_20px_50px_rgba(47,78,161,0.05)] flex flex-col justify-center relative group">
                    <div className="flex justify-between items-end mb-8 relative z-10 w-full">
                        <div className="text-right">
                             <h3 className="font-bold text-gray-900 text-2xl tracking-tight">׳ ׳₪׳— ׳×׳ ׳•׳¢׳” ׳׳•׳¨׳’׳ ׳™׳× (׳›׳ ׳™׳¡׳•׳×)</h3>
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
                            <div className="absolute top-8 left-0 md:left-1/2 md:-translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap md:pointer-events-none">2,100 ׳›׳ ׳™׳¡׳•׳×</div>
                        </div>
                        <div className="absolute top-[70%] left-[25%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '0.6s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '0.6s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap md:pointer-events-none">3,850 ׳›׳ ׳™׳¡׳•׳×</div>
                        </div>
                        <div className="absolute top-[45%] left-[50%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '1.2s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap md:pointer-events-none">5,900 ׳›׳ ׳™׳¡׳•׳×</div>
                        </div>
                        <div className="absolute top-[12.5%] left-[85%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '1.8s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '1.8s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap md:pointer-events-none">9,420 ׳›׳ ׳™׳¡׳•׳×</div>
                        </div>
                        <div className="absolute top-[5%] left-[100%] w-8 h-8 md:w-8 md:h-8 bg-[#2f4ea1] border-[6px] border-white rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-110 cursor-pointer shadow-lg transition-all group/pt z-20" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '2.5s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none"></div>
                            <div className="absolute top-1/2 right-[120%] -translate-y-1/2 bg-[#2f4ea1] text-white text-[15px] font-black py-2 px-4 rounded shadow-xl opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap w-max pointer-events-none flex flex-col items-center">
                                <span>12,800 ׳›׳ ׳™׳¡׳•׳×</span>
                                <span className="text-blue-200 text-xs mt-0.5">׳›׳™׳•׳</span>
                            </div>
                        </div>

                        <style dangerouslySetInnerHTML={{__html:`
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
                <span className="inline-block bg-[url('#')] bg-[#2f4ea1]/10 text-[#2f4ea1] px-4 py-2 rounded-full text-sm font-bold tracking-widest mb-4 uppercase shadow-sm">׳“׳•׳’׳׳” ׳׳ ׳×׳•׳ ׳™ ׳׳§׳•׳—</span>
                <h2 className="text-[#0b1638] font-black text-3xl md:text-5xl text-balance">׳׳›׳‘׳•׳© ׳׳× ׳”׳—׳™׳₪׳•׳©׳™׳ ׳©׳׳•׳›׳¨׳™׳</h2>
                <p className="text-gray-500 font-medium max-w-2xl mx-auto mt-4 md:mt-6 text-balance md:text-lg">׳”׳׳˜׳¨׳” ׳©׳׳ ׳• ׳”׳™׳ ׳׳ ׳¨׳§ ׳˜׳¨׳׳₪׳™׳§, ׳׳׳ ׳”׳׳¨׳•׳× ׳©׳•׳¨׳•׳× ׳×׳—׳×׳•׳ ׳•׳×. ׳›׳›׳” ׳ ׳¨׳׳™׳× ׳”׳©׳×׳׳˜׳•׳× ׳׳׳•׳׳ ׳× ׳©׳׳‘׳™׳׳” ׳׳™׳“׳™׳ ׳—׳׳™׳ ׳•׳׳›׳₪׳™׳׳” ׳׳× ׳”׳—׳–׳¨ ׳”׳”׳©׳§׳¢׳”.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
                {/* Search Mockup */}
                <div className="lg:w-[45%] w-full bg-[#f8f9fa] rounded-3xl p-6 md:p-10 border border-gray-200/60 shadow-inner flex flex-col justify-center">
                    <div className="text-right mb-8">
                        <h3 className="font-bold text-gray-900 text-2xl tracking-tight">׳›׳›׳” ׳ ׳¨׳׳™׳× ׳׳•׳“׳¢׳” ׳׳ ׳¦׳—׳×</h3>
                        <p className="text-gray-500 text-base mt-2">׳×׳•׳¦׳׳•׳× ׳׳׳•׳׳ ׳•׳× ׳‘׳’׳•׳’׳ (PPC)</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm transition-all hover:shadow-lg cursor-pointer group mb-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-2 h-full bg-[#2f4ea1]"></div>
                        <div className="flex items-center gap-2 mb-3 dir-ltr justify-end">
                            <span className="text-sm text-gray-800 tracking-wide font-medium">https://www.your-domain.co.il</span>
                            <span className="text-xs font-black text-gray-900 mx-1">׳׳׳•׳׳</span>
                        </div>
                        <h2 className="text-[#1a0dab] font-normal text-2xl md:text-3xl group-hover:underline mb-2 font-arial dir-rtl text-right">׳”׳©׳™׳¨׳•׳× ׳©׳׳×׳ ׳׳¦׳™׳¢׳™׳ - ׳”׳׳×׳¨ ׳©׳׳›׳</h2>
                        <p className="text-[#4d5156] text-sm md:text-base leading-relaxed font-arial dir-rtl text-right">׳§׳•׳₪׳™׳¨׳™׳™׳˜׳™׳ ׳’ ׳׳“׳•׳™׳§ ׳©׳׳‘׳•׳¡׳¡ ׳¢׳ ׳₪׳¡׳™׳›׳•׳׳•׳’׳™׳” ׳¦׳¨׳›׳ ׳™׳×, ׳¢׳ ׳”׳ ׳¢׳” ׳׳₪׳¢׳•׳׳” ׳©׳’׳•׳¨׳׳× ׳׳׳§׳•׳— ׳׳׳—׳•׳¥ ׳•׳׳”׳©׳׳™׳¨ ׳₪׳¨׳˜׳™׳ ׳׳¦׳׳›׳.</p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm opacity-60 filter grayscale scale-[0.98]">
                        <div className="flex items-center gap-2 mb-3 dir-ltr justify-end">
                            <span className="text-sm text-gray-800 tracking-wide">https://www.competitor.co.il</span>
                            <span className="text-xs font-black text-gray-900 mx-1">׳׳׳•׳׳</span>
                        </div>
                        <h2 className="text-[#1a0dab] font-normal text-xl md:text-2xl mb-2 font-arial dir-rtl text-right">׳׳•׳“׳¢׳•׳× ׳©׳ ׳׳×׳—׳¨׳™׳ ׳‘׳¢׳ ׳£</h2>
                        <p className="text-[#4d5156] text-sm md:text-base leading-relaxed font-arial dir-rtl text-right">׳¢׳•׳“ ׳׳•׳“׳¢׳” ׳‘׳ ׳׳׳™׳× ׳•׳›׳׳׳™׳× ׳©׳©׳•׳¨׳₪׳× ׳×׳§׳¦׳™׳‘ ׳•׳§׳׳™׳§׳™׳ ׳‘׳׳™ ׳׳¡׳˜׳¨׳˜׳’׳™׳× ׳”׳׳¨׳•׳× ׳׳•׳×׳׳׳×.</p>
                    </div>
                </div>

                {/* The Graph */}
                <div className="lg:w-[55%] w-full bg-white rounded-3xl p-6 md:p-10 border border-gray-100 shadow-[0_20px_50px_rgba(47,78,161,0.05)] flex flex-col justify-center relative group">
                    <div className="flex justify-between items-end mb-8 relative z-10 w-full">
                        <div className="text-right">
                             <h3 className="font-bold text-gray-900 text-2xl tracking-tight">׳”׳—׳–׳¨ ׳”׳©׳§׳¢׳” ׳‘׳₪׳¨׳¡׳•׳ (ROAS)</h3>
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
                            <div className="absolute top-8 left-0 md:left-1/2 md:-translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap md:pointer-events-none">ג‚×11,500 ׳”׳›׳ ׳¡׳•׳×</div>
                        </div>
                        <div className="absolute top-[55%] left-[35%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '0.6s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '0.6s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap md:pointer-events-none">ג‚×38,200 ׳”׳›׳ ׳¡׳•׳×</div>
                        </div>
                        <div className="absolute top-[25%] left-[75%] w-[26px] h-[26px] md:w-5 md:h-5 bg-white border-[5px] border-[#2f4ea1] rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-125 cursor-pointer shadow-md transition-all group/pt z-10" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '1.2s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none" style={{ animationDelay: '1.2s' }}></div>
                            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#0b1638] text-white text-[13px] font-bold py-2 px-3 rounded shadow-lg opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap md:pointer-events-none">ג‚×82,000 ׳”׳›׳ ׳¡׳•׳×</div>
                        </div>
                        <div className="absolute top-[5%] left-[100%] w-8 h-8 md:w-8 md:h-8 bg-[#2f4ea1] border-[6px] border-white rounded-full -translate-x-1/2 -translate-y-1/2 md:hover:scale-110 cursor-pointer shadow-lg transition-all group/pt z-20" style={{ animation: 'fadeInUp 0.5s forwards', animationDelay: '2.5s', opacity: 0 }}>
                            <div className="absolute inset-[-4px] rounded-full animate-ping bg-[#2f4ea1]/50 pointer-events-none"></div>
                            <div className="absolute top-1/2 right-[120%] -translate-y-1/2 bg-[#2f4ea1] text-white text-[15px] font-black py-2 px-4 rounded shadow-xl opacity-0 group-hover/pt:opacity-100 transition-opacity whitespace-nowrap w-max pointer-events-none flex flex-col items-center">
                                <span>ג‚×154,500 ׳”׳›׳ ׳¡׳•׳×</span>
                                <span className="text-blue-200 text-xs mt-0.5">׳›׳™׳•׳</span>
                            </div>
                        </div>
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

    if (category === 'seo') {
        return (
            <div className="mt-10 md:mt-16 w-full">
                 <AnimatedSeoGraph />
                 <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full lg:w-[95%] mx-auto">
                    {[
                        { label: "׳¦׳׳™׳—׳” ׳‘׳˜׳¨׳׳₪׳™׳§", val: "+280%" },
                        { label: "׳¢׳׳•׳“ ׳¨׳׳©׳•׳", val: "150+" },
                        { label: "׳”׳׳¨׳•׳× ׳׳׳•׳¨׳’׳ ׳™ (CR)", val: "+75%" }
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
                     <h2 className="text-gray-900 font-black text-2xl md:text-4xl mb-5 border-r-4 border-[#2f4ea1] pr-4">׳׳§׳•׳¡׳™׳¡׳˜׳ ׳©׳ ׳”׳׳¨׳•׳×</h2>
                     <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed max-w-4xl">
                         ׳™׳¦׳™׳¨׳× ׳ ׳•׳›׳—׳•׳× ׳“׳™׳’׳™׳˜׳׳™׳× ׳¨׳‘-׳¢׳¨׳•׳¦׳™׳× ׳”׳™׳ ׳§׳¨׳™׳˜׳™׳× ׳׳©׳׳™׳¨׳” ׳¢׳ ׳¢׳׳™׳•׳ ׳•׳× (Top Of Mind) ׳׳¦׳ ׳”׳׳§׳•׳—. ׳׳ ׳—׳ ׳• ׳₪׳•׳¨׳¡׳™׳ ׳׳× ׳”׳׳¡׳¨׳™׳ ׳©׳׳›׳ ׳¢׳ ׳₪׳ ׳™ ׳›׳ ׳”׳₪׳׳˜׳₪׳•׳¨׳׳•׳× ׳”׳—׳׳•׳× ׳‘׳™׳•׳×׳¨ ג€“ ׳”׳—׳ ׳׳§׳׳₪׳™׳™׳ ׳™׳ ׳׳‘׳•׳¡׳¡׳™ ׳”׳—׳׳˜׳” ׳‘׳’׳•׳’׳ ׳—׳™׳₪׳•׳©, ׳“׳¨׳ ׳•׳™׳“׳׳• ׳‘׳¨׳©׳×׳•׳× ׳”׳׳˜׳, ׳•׳›׳׳” ׳‘׳׳™׳ ׳§׳“׳׳™׳ ׳•-TikTok. ׳”׳׳•׳“׳¢׳•׳× ׳™׳¢׳˜׳₪׳• ׳׳× ׳”׳’׳•׳׳© ׳׳›׳ ׳¢׳‘׳¨ ׳‘׳׳׳¦׳¢׳•׳× ׳¨׳™׳׳¨׳§׳˜׳™׳ ׳’ ׳“׳™׳ ׳׳™ ׳—׳›׳.
                     </p>
                 </div>
                 <div className="mb-16 -mx-6 md:mx-0 rounded-3xl overflow-hidden py-10 bg-gray-50 border border-gray-100 shadow-inner">
                     <PlatformsMarquee />
                 </div>
                 <SponsoredPpcGraph />
                 <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 w-full lg:w-[95%] mx-auto">
                    {[
                        { label: "׳”׳—׳–׳¨ ׳”׳©׳§׳¢׳” (ROAS)", val: "x4.5" },
                        { label: "׳™׳¨׳™׳“׳” ׳‘׳¢׳׳•׳× ׳׳׳™׳“", val: "-45%" },
                        { label: "׳¦׳׳™׳—׳” ׳‘׳׳›׳™׳¨׳•׳×", val: "+350%" }
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
                <h2 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">׳ ׳×׳•׳ ׳™׳ ׳©׳׳“׳‘׳¨׳™׳</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { label: "׳’׳™׳“׳•׳ ׳‘׳˜׳¨׳׳₪׳™׳§", val: "+280%" },
                        { label: "׳׳™׳§׳•׳׳™׳ ׳‘׳¢׳׳•׳“ 1", val: "150+" },
                        { label: "׳™׳—׳¡ ׳”׳׳¨׳” (CR)", val: "+12%" }
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
            { id: "toronto", title: "׳™׳©׳¨׳׳ ׳§׳ ׳“׳” - Toronto", link: "https://lp.israel-canada.co.il/english/toronto_israel_canada/", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop" },
            { id: "renovo", title: "׳¨׳ ׳•׳‘׳• - ׳׳’׳“׳ ׳‘׳™׳׳׳™׳§", link: "https://lp.renovo.co.il/bialik_ramat_hasharon/", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" },
            { id: "madbrand", title: "׳׳“׳‘׳¨׳ ׳“ - ׳₪׳ ׳™׳", link: "https://madbrand.co.il/", image: "https://images.unsplash.com/photo-1542004143822-26139ceea0d7?q=80&w=800&auto=format&fit=crop" },
            { id: "midtown", title: "׳™׳©׳¨׳׳ ׳§׳ ׳“׳” - Midtown Jerusalem", link: "https://lp.israel-canada.co.il/midtown_jerusalem/", image: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop" },
            { id: "colmobil", title: "׳›׳׳׳•׳‘׳™׳ ׳׳ ׳¨׳’׳™׳”", link: "https://lp.colmobil-energy.co.il/haver_mevi_haver/", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop" },
            { id: "azorim-melach", title: "׳׳–׳•׳¨׳™׳ - ׳׳׳— ׳”׳׳¨׳¥", link: "https://lp.azorim.co.il/minisite_melach_haaretz/", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=800&auto=format&fit=crop" },
            { id: "azorim-main", title: "׳׳–׳•׳¨׳™׳", link: "https://www.azorim.co.il/", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop" }
        ];


        return (
            <div className="mt-16 md:mt-24">
                <h2 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">׳₪׳¨׳•׳™׳§׳˜׳™׳ ׳ ׳‘׳—׳¨׳™׳ (Web)</h2>
                <p className="text-gray-500 mb-8 font-medium">׳›׳“׳™ ׳׳¨׳׳•׳× ׳׳× ׳׳™׳›׳•׳× ׳”׳₪׳™׳×׳•׳— ׳”׳׳׳׳”, ׳׳—׳¦׳• ׳¢׳ ׳”׳₪׳¨׳•׳™׳§׳˜׳™׳ ׳•׳¦׳₪׳• ׳‘׳”׳ ׳‘׳׳•׳•׳™׳¨.</p>
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
                                    <span className="text-white font-bold tracking-widest text-sm text-center px-4">׳¦׳₪׳• ׳‘׳׳×׳¨ ׳”׳—׳™</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>



                {/* Tech Stack Segment */}
                <div className="mt-16 md:mt-24 pt-16 border-t border-gray-100">
                    <div className="text-center mb-10">
                        <h2 className="text-[#0b1638] font-black text-2xl md:text-4xl text-balance">׳׳•׳‘׳™׳׳™׳ ׳˜׳›׳ ׳•׳׳•׳’׳™׳×</h2>
                        <p className="text-gray-500 font-bold mt-2 tracking-widest">׳”׳›׳׳™׳ ׳©׳׳ ׳—׳ ׳• ׳¢׳•׳‘׳“׳™׳ ׳׳™׳×׳</p>
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
                <h2 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳׳•׳¨׳’׳ ׳™׳× ׳©׳׳ ׳¦׳—׳× ׳׳× ׳”׳׳׳’׳•׳¨׳™׳×׳</h2>
                
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

                        <div className="text-4xl md:text-5xl font-black text-[#0b1638] mb-2 tracking-tighter relative z-10 hover:text-[#2f4ea1] transition-colors">׳¦׳׳™׳—׳” ׳׳•׳¨׳’׳ ׳™׳×</div>
                        <div className="text-gray-500 font-extrabold text-sm uppercase tracking-widest relative z-10">׳˜׳¨׳׳₪׳™׳§ ׳׳™׳›׳•׳×׳™ ׳©׳׳™׳™׳¦׳¨ ׳׳™׳“׳™׳</div>
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
                            <div className="text-[#1a0dab] text-lg md:text-xl font-bold mb-2 hover:underline cursor-pointer tracking-tight">׳¡׳₪׳¨׳•׳¡ - ׳¡׳•׳›׳ ׳•׳× ׳”׳“׳™׳’׳™׳˜׳ ׳”׳׳•׳‘׳™׳׳” ׳‘׳™׳©׳¨׳׳</div>
                            <div className="text-sm text-[#4d5156] leading-relaxed">׳”׳’׳¢׳ ׳• ׳׳׳§׳•׳ ׳”׳¨׳׳©׳•׳ ׳‘׳×׳•׳¦׳׳•׳× ׳”׳—׳™׳₪׳•׳© ׳¢׳‘׳•׳¨ ׳”׳‘׳™׳˜׳•׳™׳™׳ ׳”׳§׳©׳™׳ ׳‘׳™׳•׳×׳¨. ׳׳׳’׳•׳¨׳™׳×׳ ׳׳• ׳׳, ׳׳ ׳—׳ ׳• ׳™׳•׳“׳¢׳™׳ ׳׳™׳ ׳׳׳§׳ ׳׳•׳×׳’׳™׳...</div>
                        </div>

                        <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter relative z-10 text-center" dir="ltr">#1 Ranking</div>
                        <div className="text-white/80 font-extrabold text-sm uppercase tracking-widest relative z-10 text-center text-balance">׳©׳׳™׳˜׳” ׳׳‘׳¡׳•׳׳•׳˜׳™׳× ׳‘׳‘׳™׳˜׳•׳™׳™ ׳׳₪׳×׳—</div>
                    </div>
                </div>
            </div>
        );
    }

    if (category === 'design') {
        const designProjects = [
            { id: "brand_1", title: '׳§׳׳₪׳™׳™׳ ׳¨׳׳©׳™', type: 'Hero Banner', spanClass: 'col-span-2 md:col-span-2 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000' },
            { id: "social_1", title: '׳₪׳•׳¡׳˜ ׳¡׳•׳©׳™׳׳ ׳׳¨׳•׳‘׳¢', type: 'Social Media', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800' },
            { id: "banner_1", title: '׳‘׳׳ ׳¨ ׳¨׳™׳׳¨׳§׳˜׳™׳ ׳’', type: 'Web Banners', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=800' },
            { id: "ux_1", title: '׳׳₪׳™׳•׳ ׳׳׳©׳§ ׳ ׳™׳™׳“', type: 'UI/UX', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800' },
            { id: "story_1", title: '׳׳•׳“׳¢׳× ׳¡׳˜׳•׳¨׳™ ׳ ׳“׳"׳', type: 'Performance', spanClass: 'col-span-1 md:col-span-1 row-span-1 md:row-span-2', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800' },
            { id: "banner_2", title: '׳§׳¨׳™׳׳™׳™׳˜׳™׳‘ PR', type: 'Articles', spanClass: 'col-span-2 md:col-span-2 row-span-1 md:row-span-1', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000' }
        ];

        const visibleProjects = showAllDesign ? designProjects : designProjects.slice(0, 6);

        return (
            <div className="mt-16 md:mt-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-gray-900 font-black text-3xl md:text-4xl mb-3 border-r-4 border-[#2f4ea1] pr-4 tracking-tight">׳©׳₪׳” ׳•׳™׳–׳•׳׳׳™׳× ׳׳ ׳¦׳—׳×</h2>
                        <p className="text-gray-500 font-medium max-w-2xl text-balance">׳׳¡׳₪׳¨׳™ ׳׳•׳×׳’, ׳“׳¨׳ ׳‘׳׳ ׳¨׳™׳ ׳׳ ׳™׳¢׳™׳ ׳׳₪׳¢׳•׳׳” ׳•׳¢׳“ ׳׳׳©׳§׳™ ׳׳©׳×׳׳© ׳׳•׳¨׳›׳‘׳™׳.</p>
                    </div>
                </div>

                {/* Refined Dense Grid (Smaller items, 4 columns on desktop, 2 on mobile) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[140px] md:auto-rows-[180px] grid-flow-row-dense">
                    {visibleProjects.map((project, i) => (
                        <div key={i} onClick={() => setSelectedImage({ id: project.id, fallback: project.image, title: project.title })} className={`relative group overflow-hidden rounded-xl md:rounded-2xl bg-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200/50 ${project.spanClass}`}>
                            <img src={`/portfolio/${project.id}.webp`} onError={(e) => { e.target.onerror = null; e.target.src = project.image; }} alt={project.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                            <div className="absolute inset-x-0 bottom-0 h-[80%] bg-gradient-to-t from-[#0b1638] via-[#0b1638]/40 to-transparent flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-blue-400 font-extrabold text-[10px] md:text-xs tracking-widest uppercase mb-1">{project.type}</span>
                                <h3 className="text-white font-black text-sm md:text-lg leading-tight">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                {!showAllDesign && designProjects.length >= 6 && (
                    <div className="flex justify-center mt-10 md:mt-12 mb-4">
                        <button onClick={() => setShowAllDesign(true)} className="px-8 py-3 bg-white border border-gray-200 text-[#2f4ea1] font-bold rounded-full shadow-sm hover:border-[#2f4ea1] transition-colors">
                            ׳”׳¦׳’ ׳¢׳‘׳•׳“׳•׳× ׳ ׳•׳¡׳₪׳•׳×
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
                        <h2 className="text-white tracking-widest mt-6 font-bold text-lg md:text-xl">{selectedImage.title}</h2>
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
            title: "׳ ׳™׳”׳•׳ ׳׳“׳™׳”", 
            long: "׳׳ ׳—׳ ׳• ׳׳ ׳”׳׳™׳ ׳×׳§׳¦׳™׳‘׳™ ׳¢׳ ׳§ ׳‘׳׳•׳₪׳˜׳™׳׳™׳–׳¦׳™׳” ׳׳§׳¡׳™׳׳׳™׳×. ׳”׳’׳™׳©׳” ׳©׳׳ ׳• ׳׳ ׳™׳”׳•׳ ׳׳“׳™׳” ׳”׳™׳ ׳׳“׳¢׳™׳×: ׳ ׳™׳×׳•׳— ׳§׳”׳׳™׳, ׳©׳™׳₪׳•׳¨ ׳™׳—׳¡ ׳”׳׳¨׳” ׳•׳©׳™׳׳•׳© ׳‘׳›׳׳™ AI ׳׳ ׳™׳”׳•׳ ׳‘׳™׳“׳™׳.",
            services: ["׳—׳™׳₪׳•׳© ׳•׳¨׳©׳× ׳”׳׳“׳™׳” ׳‘׳’׳•׳’׳", "׳ ׳™׳”׳•׳ ׳׳˜׳ (׳₪׳™׳™׳¡׳‘׳•׳§/׳׳™׳ ׳¡׳˜׳’׳¨׳)", "׳§׳׳₪׳™׳™׳ ׳™׳ ׳‘׳˜׳™׳§׳˜׳•׳§ ׳•׳׳™׳ ׳§׳“׳׳™׳", "׳¨׳™׳׳¨׳§׳˜׳™׳ ׳’ ׳“׳™׳ ׳׳™"],
            processTitle: "׳׳™׳ ׳׳×׳ ׳”׳ ׳§׳׳₪׳™׳™׳ ׳‘׳¨׳׳” ׳’׳‘׳•׳”׳”?",
            processSubtitle: "׳”׳©׳™׳˜׳” ׳”׳׳“׳¢׳™׳× ׳׳׳—׳•׳¨׳™ ׳”׳׳§׳•׳—׳•׳× ׳©׳׳ ׳•",
            process: [
                { title: "׳׳—׳§׳¨ ׳•׳׳¡׳˜׳¨׳˜׳’׳™׳”", desc: "׳ ׳™׳×׳•׳— ׳׳§׳™׳£ ׳©׳ ׳ ׳×׳•׳ ׳™ ׳”׳©׳•׳§, ׳–׳™׳”׳•׳™ ׳§׳”׳׳™ ׳׳˜׳¨׳” ׳¨׳׳•׳•׳ ׳˜׳™׳™׳ ׳•׳׳—׳§׳¨ ׳׳™׳׳•׳× ׳׳₪׳×׳— ׳׳™׳¦׳™׳¨׳× ׳™׳×׳¨׳•׳ ׳×׳—׳¨׳•׳×׳™.", icon: <Search size={28} /> },
                { title: "׳‘׳ ׳™׳™׳× ׳¡׳˜׳׳₪", desc: "׳”׳’׳“׳¨׳× ׳§׳׳₪׳™׳™׳ ׳™׳ ׳׳“׳•׳™׳§׳×, ׳₪׳™׳׳•׳— ׳₪׳™׳§׳¡׳׳™׳ ׳§׳₪׳“׳ ׳™ ׳•׳—׳׳•׳§׳× ׳×׳§׳¦׳™׳‘׳™׳ ׳׳¡׳˜׳¨׳˜׳’׳™׳× ׳”׳׳•׳›׳•׳•׳ ׳× ׳×׳•׳¦׳׳•׳× ׳׳§׳¡׳™׳׳׳™׳•׳×.", icon: <Settings size={28} /> },
                { title: "׳”׳©׳§׳” ׳•׳˜׳¡׳˜׳™׳ (A/B)", desc: "׳”׳¢׳׳׳× ׳§׳¨׳™׳׳™׳™׳˜׳™׳‘׳™׳ ׳׳׳•׳•׳™׳¨ ׳×׳—׳× ׳‘׳§׳¨׳× ׳×׳§׳¦׳™׳‘ ׳׳—׳׳™׳¨׳” ׳•׳‘׳“׳™׳§׳× ׳•׳¨׳™׳׳¦׳™׳•׳× ׳׳׳™׳×׳•׳¨ ׳”׳׳•׳“׳¢׳” ׳”׳׳₪׳§׳˜׳™׳‘׳™׳× ׳‘׳™׳•׳×׳¨.", icon: <Target size={28} /> },
                { title: "׳׳•׳₪׳˜׳™׳׳™׳–׳¦׳™׳” ׳•׳¡׳§׳™׳™׳", desc: "׳©׳™׳₪׳•׳¨ ׳™׳—׳¡ ׳”-ROAS ׳׳™׳•׳ ׳׳™׳•׳ ׳•׳©׳›׳₪׳•׳ ׳¨׳•׳—׳‘׳™ ׳©׳ ׳§׳׳₪׳™׳™׳ ׳™׳ ׳¨׳•׳•׳—׳™׳™׳ ׳׳×׳§׳¦׳™׳‘׳™׳ ׳’׳‘׳•׳”׳™׳ ׳׳©׳׳¢׳•׳×׳™׳×.", icon: <TrendingUp size={28} /> }
            ],
            faqs: [
                { q: "׳×׳•׳ ׳›׳׳” ׳–׳׳ ׳ ׳¨׳׳” ׳×׳•׳¦׳׳•׳× ׳׳”׳§׳׳₪׳™׳™׳ ׳™׳?", a: "׳§׳׳₪׳™׳™׳ ׳™׳ ׳׳׳•׳׳ ׳™׳ ׳׳×׳—׳™׳׳™׳ ׳׳”׳‘׳™׳ ׳×׳ ׳•׳¢׳” ׳‘׳׳•׳₪׳ ׳׳™׳™׳“׳™ ׳¢׳ ׳¢׳׳™׳™׳×׳ ׳׳׳•׳•׳™׳¨. ׳‘׳“׳¨׳ ׳›׳׳ ׳׳•׳§׳— 2-4 ׳©׳‘׳•׳¢׳•׳× ׳©׳ ׳׳™׳¡׳•׳£ ׳ ׳×׳•׳ ׳™׳ ׳•׳׳•׳₪׳˜׳™׳׳™׳–׳¦׳™׳” ׳¢׳“ ׳©׳׳’׳™׳¢׳™׳ ׳׳™׳¦׳™׳‘׳•׳× ׳•׳׳™׳—׳¡׳™ ׳”׳׳¨׳” ׳׳•׳₪׳˜׳™׳׳׳™׳™׳, ׳×׳׳•׳™ ׳‘׳×׳§׳¦׳™׳‘, ׳‘׳׳×׳—׳¨׳™׳ ׳•׳‘׳×׳—׳•׳." },
                { q: "׳‘׳׳™׳׳• ׳₪׳׳˜׳₪׳•׳¨׳׳•׳× ׳׳×׳ ׳׳ ׳”׳׳™׳ ׳§׳׳₪׳™׳™׳ ׳™׳?", a: "׳׳ ׳• ׳׳ ׳”׳׳™׳ ׳§׳׳₪׳™׳™׳ ׳™׳ ׳‘׳׳’׳•׳•׳ ׳¨׳—׳‘ ׳©׳ ׳₪׳׳˜׳₪׳•׳¨׳׳•׳× ׳‘׳”׳×׳׳ ׳׳§׳”׳ ׳”׳™׳¢׳“ ׳©׳׳›׳: ׳’׳•׳’׳ (׳—׳™׳₪׳•׳©, ׳׳“׳™׳”, ׳©׳•׳₪׳™׳ ׳’, ׳™׳•׳˜׳™׳•׳‘), ׳׳˜׳ (׳₪׳™׳™׳¡׳‘׳•׳§ ׳•׳׳™׳ ׳¡׳˜׳’׳¨׳), ׳˜׳™׳§׳˜׳•׳§, ׳׳™׳ ׳§׳“׳׳™׳ ׳•׳¢׳•׳“. ׳׳›׳ ׳₪׳׳˜׳₪׳•׳¨׳׳” ׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳׳•׳×׳׳׳×." },
                { q: "׳”׳׳ ׳׳×׳ ׳¢׳•׳‘׳“׳™׳ ׳¢׳ ׳¢׳¡׳§׳™׳ B2B ׳׳• B2C?", a: "׳©׳ ׳™׳ ׳•! ׳™׳© ׳׳ ׳• ׳ ׳™׳¡׳™׳•׳ ׳׳•׳›׳— ׳•׳¢׳©׳™׳¨ ׳’׳ ׳¢׳ ׳—׳‘׳¨׳•׳× B2B ׳׳•׳¨׳›׳‘׳•׳× ׳©׳׳—׳₪׳©׳•׳× ׳׳™׳“׳™׳ ׳׳™׳›׳•׳×׳™׳™׳ (׳׳׳©׳ ׳˜׳›׳ ׳•׳׳•׳’׳™׳”, ׳©׳™׳¨׳•׳×׳™׳ ׳¢׳¡׳§׳™׳™׳ ׳•׳×׳¢׳©׳™׳™׳”) ׳•׳’׳ ׳¢׳ ׳׳•׳×׳’׳™ B2C ׳©׳׳׳•׳§׳“׳™׳ ׳‘׳׳›׳™׳¨׳•׳× ׳׳™׳§׳•׳׳¨׳¡ ׳•׳™׳¦׳™׳¨׳× ׳׳•׳“׳¢׳•׳× ׳׳׳•׳×׳’." },
                { q: "׳׳™׳ ׳׳×׳ ׳׳—׳©׳‘׳™׳ ׳׳× ׳”׳×׳§׳¦׳™׳‘ ׳”׳—׳•׳“׳©׳™ ׳”׳׳•׳׳׳¥?", a: "׳׳ ׳—׳ ׳• ׳׳ ׳×׳—׳™׳ ׳׳× ׳”׳×׳—׳¨׳•׳×׳™׳•׳× ׳‘׳¢׳ ׳£, ׳¢׳¨׳•׳¦׳™ ׳”׳₪׳¨׳¡׳•׳ ׳”׳¨׳¦׳•׳™׳™׳ ׳•׳™׳¢׳“׳™ ׳”׳¦׳׳™׳—׳” ׳”׳¢׳¡׳§׳™׳™׳ ׳©׳׳›׳, ׳•׳׳– ׳‘׳•׳ ׳™׳ ׳׳•׳“׳ ׳”׳©׳§׳¢׳” (ROAS Model) ׳©׳׳׳׳™׳¥ ׳¢׳ ׳×׳§׳¦׳™׳‘ ׳ ׳§׳•׳“׳×׳™ ׳•׳׳׳₪׳©׳¨ ׳˜׳•׳•׳— ׳¡׳§׳™׳™׳ ׳‘׳˜׳•׳—." },
                { q: "׳”׳׳ ׳™׳© ׳׳›׳ ׳©׳§׳™׳₪׳•׳× ׳׳׳׳” ׳׳ ׳×׳•׳ ׳™׳ ׳•׳׳×׳§׳¦׳™׳‘?", a: "׳׳—׳׳•׳˜׳™׳. ׳׳×׳ ׳‘׳¢׳׳™ ׳”׳—׳©׳‘׳•׳ ׳”׳׳§׳•׳¨׳™, ׳•׳”׳×׳©׳׳•׳ ׳¢׳ ׳”׳׳“׳™׳” ׳׳©׳•׳׳ ׳™׳©׳™׳¨׳•׳× ׳׳₪׳׳˜׳₪׳•׳¨׳׳”. ׳׳ ׳• ׳׳¡׳₪׳§׳™׳ ׳׳•׳—׳•׳× ׳‘׳§׳¨׳” (Dashboards) ׳—׳™׳™׳ ׳‘׳”׳ ׳×׳•׳›׳׳• ׳׳¨׳׳•׳× ׳‘׳–׳׳ ׳׳׳× ׳׳׳ ׳”׳›׳¡׳£ ׳”׳•׳׳ ׳•׳›׳׳” ׳”׳׳¨׳•׳× ׳”׳’׳™׳¢׳•." }
            ]
        },
        social: { 
            title: "׳¡׳•׳©׳™׳׳ ׳•-UGC", 
            long: "׳”׳¡׳™׳₪׳•׳¨ ׳©׳׳›׳ ׳¦׳¨׳™׳ ׳׳₪׳’׳•׳© ׳׳× ׳”׳׳§׳•׳—׳•׳× ׳‘׳“׳™׳•׳§ ׳‘׳׳§׳•׳ ׳©׳‘׳• ׳”׳ ׳ ׳׳¦׳׳™׳. ׳׳ ׳—׳ ׳• ׳׳•׳§׳—׳™׳ ׳׳•׳×׳’׳™׳ ׳•׳”׳•׳₪׳›׳™׳ ׳׳•׳×׳ ׳׳×׳•׳₪׳¢׳× ׳¨׳©׳× ׳‘׳¢׳–׳¨׳× ׳©׳₪׳” ׳•׳™׳–׳•׳׳׳™׳× ׳™׳™׳—׳•׳“׳™׳×, ׳”׳₪׳§׳•׳× ׳•׳™׳“׳׳• ׳•׳™׳¨׳׳׳™׳•׳×, ׳•׳׳¡׳˜׳¨׳˜׳’׳™׳™׳× ׳¡׳•׳©׳™׳׳ ׳©׳¢׳•׳¦׳¨׳× ׳׳× ׳”׳’׳׳™׳׳” (Scroll-stoppers). ׳”׳¢׳™׳“׳ ׳”׳—׳“׳© ׳“׳•׳¨׳© ׳×׳•׳›׳ ׳׳”׳™׳¨, ׳—׳“, ׳•׳׳‘׳•׳¡׳¡ ׳“׳׳˜׳”.", 
            services: ["׳”׳₪׳§׳× Reels ׳•-TikTok", "׳¦׳™׳׳•׳ UGC ׳׳™׳›׳•׳×׳™ ׳׳׳•׳×׳’׳™׳", "׳₪׳™׳×׳•׳— ׳©׳₪׳” ׳׳•׳×׳’׳™׳× ׳׳•׳×׳ ׳˜׳™׳×", "׳©׳™׳•׳•׳§ ׳׳©׳₪׳™׳¢׳ ׳™׳"],
            processTitle: "׳”׳׳×׳›׳•׳ ׳׳”׳₪׳•׳ ׳׳•׳•׳™׳¨׳׳׳™",
            processSubtitle: "׳׳™׳ ׳¢׳•׳‘׳“׳× ׳׳—׳׳§׳× ׳”׳¡׳•׳©׳™׳׳ ׳©׳׳ ׳•",
            process: [
                { title: "׳§׳¨׳™׳׳™׳™׳˜׳™׳‘ ׳•׳¡׳˜׳•׳¨׳™׳˜׳׳™׳ ׳’", desc: "׳¨׳׳™׳•׳ ׳•׳× ׳¢׳•׳׳§ ׳•׳₪׳™׳¦׳•׳— ׳¨׳¢׳™׳•׳ ׳™ ׳׳›׳ ׳¡׳¨׳˜׳•׳, ׳›׳×׳™׳‘׳× ׳×׳¡׳¨׳™׳˜׳™׳ ׳׳¨׳×׳§׳™׳ ׳©׳׳—׳–׳™׳§׳™׳ ׳‘׳׳™׳•׳—׳“ ׳׳× ׳–׳׳ ׳”׳¦׳₪׳™׳™׳” ׳©׳ ׳“׳•׳¨ ׳”-Z.", icon: <Lightbulb size={28} /> },
                { title: "׳™׳׳™ ׳¦׳™׳׳•׳ ׳•׳”׳₪׳§׳× UGC", desc: "׳”׳§׳׳˜׳•׳× ׳©׳˜׳— ׳׳™׳›׳•׳×׳™׳•׳× ׳¢׳ ׳§׳¨׳™׳™׳ ׳™׳, ׳׳©׳₪׳™׳¢׳ ׳™׳ ׳׳• ׳׳§׳•׳—׳•׳×, ׳”׳׳™׳™׳¦׳¨׳•׳× ׳׳•׳×׳ ׳˜׳™׳•׳× ׳׳•׳›׳—׳× ׳”׳׳ ׳™׳¢׳” ׳׳₪׳¢׳•׳׳”.", icon: <Camera size={28} /> },
                { title: "׳¢׳¨׳™׳›׳” ׳“׳™׳ ׳׳™׳×", desc: "׳¢׳¨׳™׳›׳× ׳₪׳•׳¡׳˜-׳₪׳¨׳•׳“׳§׳©׳ ׳§׳¦׳‘׳™׳× ׳”׳›׳•׳׳׳× ׳׳ ׳™׳׳¦׳™׳•׳× ׳•׳˜׳§׳¡׳˜׳™׳ ׳“׳™׳ ׳׳™׳™׳ ׳©׳׳•׳ ׳¢׳™׳ ׳׳”׳’׳•׳׳© ׳׳”׳׳©׳™׳ ׳׳’׳׳•׳ ׳”׳׳׳”.", icon: <Video  size={28} /> },
                { title: "׳”׳₪׳¦׳” ׳¨׳•׳—׳‘׳™׳× ׳‘׳¨׳©׳×", desc: "׳×׳–׳׳•׳ ׳׳“׳•׳™׳§ ׳©׳ ׳”׳₪׳•׳¡׳˜׳™׳ ׳‘׳—׳•׳§׳™׳•׳× ׳”׳׳׳’׳•׳¨׳™׳×׳ ׳›׳“׳™ ׳׳™׳™׳¦׳¨ ׳×׳₪׳•׳¦׳” ׳׳•׳¨׳’׳ ׳™׳× ׳•׳׳׳•׳׳ ׳× ׳׳§׳¡׳™׳׳׳™׳× ׳‘׳׳§׳‘׳™׳.", icon: <Users size={28} /> }
            ],
            faqs: [
                { q: "׳׳” ׳”׳”׳‘׳“׳ ׳‘׳™׳ ׳ ׳™׳”׳•׳ ׳¡׳•׳©׳™׳׳ ׳¨׳’׳™׳ ׳׳׳” ׳©׳׳×׳ ׳¢׳•׳©׳™׳?", a: "׳׳ ׳—׳ ׳• ׳׳ ׳¨׳§ ׳׳¢׳׳™׳ ׳₪׳•׳¡׳˜׳™׳ ׳¢׳™׳¦׳•׳‘׳™׳™׳. ׳׳ ׳—׳ ׳• ׳׳™׳™׳¦׳¨׳™׳ ׳©׳₪׳”, ׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳•׳×׳•׳›׳ ׳•׳™׳“׳׳• ׳§׳¦׳¨ ׳©׳׳‘׳•׳¡׳¡ ׳¢׳ ׳˜׳¨׳ ׳“׳™׳ ׳•׳”׳‘׳ ׳” ׳¢׳׳•׳§׳” ׳©׳ ׳”׳׳׳’׳•׳¨׳™׳×׳׳™׳, ׳‘׳׳˜׳¨׳” ׳׳”׳’׳™׳¢ ׳׳•׳•׳™׳¨׳׳׳™׳•׳× ׳׳׳™׳×׳™׳× ׳•׳׳”׳׳™׳¨ ׳¦׳•׳₪׳™׳ ׳׳׳§׳•׳—׳•׳×." },
                { q: "׳”׳׳ ׳׳×׳ ׳׳₪׳™׳§׳™׳ ׳׳× ׳¡׳¨׳˜׳•׳ ׳™ ׳”׳•׳™׳“׳׳• ׳•׳”׳¨׳™׳׳¡׳™׳?", a: "׳‘׳”׳—׳׳˜. ׳™׳© ׳׳ ׳• ׳¦׳•׳•׳× ׳§׳¨׳™׳׳™׳™׳˜׳™׳‘ ׳•׳¦׳™׳׳•׳ ׳©׳“׳•׳׳’ ׳׳”׳›׳ ׳׳”׳§׳¦׳” ׳׳§׳¦׳”: ׳”׳—׳ ׳׳¨׳׳× ׳”׳§׳•׳ ׳¡׳₪׳˜, ׳׳×׳ ׳¢׳¨׳ ׳“׳¨׳ UGC ׳׳•׳×׳ ׳˜׳™, ׳•׳¢׳“ ׳™׳•׳ ׳¦׳™׳׳•׳׳™׳ ׳׳¢׳©׳™ ׳‘׳©׳˜׳— ׳”׳“׳•׳׳’ ׳©׳”׳×׳•׳›׳ ׳™׳”׳™׳” ׳׳ ׳™׳¢ ׳׳₪׳¢׳•׳׳”." },
                { q: "׳‘׳׳™׳–׳• ׳×׳“׳™׳¨׳•׳× ׳׳×׳₪׳¨׳¡׳׳™׳ ׳”׳₪׳•׳¡׳˜׳™׳?", a: "׳”׳×׳“׳™׳¨׳•׳× ׳ ׳‘׳ ׳™׳× ׳¢׳ ׳‘׳¡׳™׳¡ ׳§׳”׳ ׳”׳™׳¢׳“ ׳•׳”׳×׳—׳•׳. ׳›׳“׳™ ׳׳©׳׳•׳¨ ׳¢׳ ׳¨׳׳•׳•׳ ׳˜׳™׳•׳× ׳‘׳׳׳’׳•׳¨׳™׳×׳, ׳׳•׳×׳’׳™׳ ׳׳¨׳•׳‘ ׳׳—׳™׳™׳‘׳™׳ ׳”׳¢׳׳׳” ׳©׳ 3 ׳¢׳“ 5 ׳₪׳•׳¡׳˜׳™׳/׳¨׳™׳׳¡׳™׳ ׳‘׳©׳‘׳•׳¢, ׳‘׳ ׳•׳¡׳£ ׳׳₪׳¢׳™׳׳•׳× ׳¡׳˜׳•׳¨׳™ ׳§׳‘׳•׳¢׳”." },
                { q: "׳׳” ׳–׳” ׳‘׳¢׳¦׳ UGC ׳•׳׳׳” ׳–׳” ׳›׳” ׳—׳©׳•׳‘?", a: "UGC (User Generated Content) ׳”׳•׳ ׳×׳•׳›׳ ׳©׳׳¦׳•׳׳ ׳‘׳¡׳’׳ ׳•׳ '׳˜׳‘׳¢׳™' ׳•׳ ׳¨׳׳” ׳›׳׳™׳׳• ׳ ׳•׳¦׳¨ ׳¢׳ ׳™׳“׳™ ׳׳§׳•׳— ׳©׳׳›׳. ׳”׳•׳ ׳ ׳×׳₪׳¡ ׳›׳׳•׳×׳ ׳˜׳™, ׳”׳¨׳‘׳” ׳₪׳—׳•׳× ׳₪׳¨׳¡׳•׳׳™, ׳•׳‘׳¨׳•׳‘ ׳”׳׳•׳—׳¥ ׳©׳ ׳”׳׳§׳¨׳™׳ ׳׳׳™׳¨ ׳‘׳׳—׳•׳–׳™׳ ׳’׳‘׳•׳”׳™׳ ׳‘׳”׳¨׳‘׳” ׳׳§׳¨׳™׳׳™׳™׳˜׳™׳‘ ׳’׳¨׳₪׳™." },
                { q: "׳׳™׳ ׳׳×׳ ׳׳•׳“׳“׳™׳ ׳”׳¦׳׳—׳” ׳‘׳¡׳•׳©׳™׳׳?", a: "׳׳׳‘׳“ ׳׳“׳“׳™ ׳—׳©׳™׳₪׳” ׳•׳׳¢׳•׳¨׳‘׳•׳× ׳§׳׳׳¡׳™׳™׳ (׳¦׳₪׳™׳•׳×, ׳׳™׳™׳§׳™׳, ׳×׳’׳•׳‘׳•׳×, ׳©׳׳™׳¨׳•׳×), ׳׳ ׳—׳ ׳• ׳׳¡׳ ׳›׳¨׳ ׳™׳ ׳׳× ׳”׳×׳ ׳•׳¢׳” ׳”׳׳•׳¨׳’׳ ׳™׳× ׳™׳—׳“ ׳¢׳ ׳׳—׳׳§׳× ׳”׳׳“׳™׳” ׳›׳“׳™ ׳׳–׳”׳•׳× ׳¦׳׳™׳—׳” ׳׳“׳•׳™׳§׳× ׳‘׳”׳׳¨׳•׳× (׳§׳ ׳™׳•׳× ׳׳• ׳ ׳˜׳™׳©׳•׳× ׳¡׳)." }
            ]
        },
        design: { 
            title: "׳¡׳˜׳•׳“׳™׳• ׳•׳§׳¨׳™׳׳™׳™׳˜׳™׳‘", 
            long: "׳׳ ׳—׳ ׳• ׳׳׳₪׳™׳™׳ ׳™׳ ׳•׳׳¢׳¦׳‘׳™׳ ׳׳׳©׳§׳™׳ ׳•׳×׳•׳¦׳¨׳™׳ ׳©׳™׳•׳•׳§׳™׳™׳ ׳©׳׳¨׳’׳™׳©׳™׳ ׳˜׳‘׳¢׳™׳™׳ ׳׳׳©׳×׳׳©, ׳™׳—׳“ ׳¢׳ ׳¢׳™׳¦׳•׳‘ ׳₪׳¨׳™׳׳™׳•׳ ׳©׳׳™׳™׳¦׳¨ ׳׳׳•׳ ׳׳™׳™׳“׳™ ׳‘׳׳•׳×׳’. ׳׳ ׳—׳ ׳• ׳׳¢׳ ׳™׳§׳™׳ ׳׳¢׳˜׳₪׳× ׳׳׳׳” ׳©׳ ׳”׳¡׳˜׳•׳“׳™׳• ׳׳›׳׳ ׳”׳₪׳¨׳•׳™׳§׳˜׳™׳ ׳©׳׳ ׳•.", 
            services: ["׳©׳₪׳” ׳—׳–׳•׳×׳™׳× ׳•׳§׳•׳ ׳¡׳₪׳˜", "׳¢׳™׳¦׳•׳‘ ׳•׳™׳¦׳™׳¨׳× ׳׳¡׳¨׳™׳", "׳–׳”׳•׳× ׳×׳׳’׳™׳“׳™׳×", "׳‘׳ ׳™׳™׳× ׳׳׳¨׳–׳™ UI/UX"],
            processTitle: "׳×׳”׳׳™׳ ׳”׳¢׳™׳¦׳•׳‘ ׳©׳׳ ׳•",
            processSubtitle: "׳׳™׳™׳¦׳¨ ׳—׳•׳•׳™׳” ׳•׳™׳–׳•׳׳׳™׳× ׳׳“׳•׳™׳§׳× ׳׳׳§׳•׳—",
            process: [
                { title: "׳‘׳¨׳™׳£ ׳•׳’׳™׳‘׳•׳© ׳§׳•׳ ׳¡׳₪׳˜", desc: "׳”׳‘׳ ׳× ׳¢׳¨׳›׳™ ׳”׳׳•׳×׳’, ׳’׳™׳‘׳•׳© ׳§׳”׳ ׳”׳™׳¢׳“ ׳•׳‘׳ ׳™׳™׳× ׳׳•׳— ׳”׳©׳¨׳׳” ׳—׳–׳•׳×׳™ ׳”׳׳’׳“׳™׳¨ ׳׳× ׳”׳₪׳׳׳™׳˜׳” ׳•׳”׳׳•׳•׳™׳¨׳” ׳”׳›׳׳׳™׳×.", icon: <FileText size={28} /> },
                { title: "׳™׳¦׳™׳¨׳× ׳–׳”׳•׳× (Branding)", desc: "׳¢׳™׳¦׳•׳‘ ׳•׳™׳¦׳™׳¨׳× ׳׳¡׳¨׳™׳, ׳˜׳™׳₪׳•׳’׳¨׳₪׳™׳” ׳•׳©׳₪׳” ׳’׳¨׳₪׳™׳× ׳©׳׳©׳׳‘׳™׳ ׳׳¨׳׳” ׳•׳™׳–׳•׳׳׳™ ׳׳”׳•׳§׳¦׳¢ ׳©׳¢׳•׳–׳¨ ׳׳¢׳•׳¨׳¨ ׳׳׳™׳ ׳•׳× ׳¨׳’׳©׳™׳×.", icon: <Palette size={28} /> },
                { title: "׳₪׳¨׳•׳˜׳•׳˜׳™׳™׳₪׳™׳ ׳׳׳™׳©׳•׳¨", desc: "׳‘׳ ׳™׳™׳× ׳׳•׳§׳׳₪׳™׳, ׳“׳₪׳™ ׳ ׳—׳™׳×׳” ׳׳™׳ ׳˜׳¨׳׳§׳˜׳™׳‘׳™׳™׳ ׳׳• ׳׳¦׳’׳•׳× ׳׳•׳×׳’ ׳‘׳›׳“׳™ ׳׳—׳•׳© ׳׳× ׳”׳¢׳™׳¦׳•׳‘ ׳‘׳“׳™׳•׳§ ׳›׳₪׳™ ׳©׳”׳׳§׳•׳— ׳™׳—׳•׳•׳”.", icon: <Layout size={28} /> },
                { title: "׳׳¡׳™׳¨׳” ׳׳ ׳•׳”׳׳× (Handoff)", desc: "׳׳¨׳™׳–׳× ׳›׳׳ ׳׳¨׳›׳™׳‘׳™ ׳”׳¡׳˜׳•׳“׳™׳• ׳׳×׳™׳§ ׳׳—׳™׳“ ׳•׳”׳¢׳‘׳¨׳× ׳”׳§׳‘׳¦׳™׳ ׳׳׳—׳׳§׳× ׳”׳₪׳™׳×׳•׳— ׳×׳•׳ ׳׳™׳•׳•׳™ ׳˜׳›׳ ׳™ ׳©׳•׳˜׳£.", icon: <Briefcase size={28} /> }
            ],
            faqs: [
                { q: "׳׳” ׳›׳•׳׳ ׳×׳”׳׳™׳ ׳”׳¡׳˜׳•׳“׳™׳• ׳׳¦׳׳›׳?", a: "׳”׳×׳”׳׳™׳ ׳׳×׳—׳™׳ ׳‘׳׳—׳§׳¨ ׳©׳₪׳•׳×׳¨ ׳׳× ׳”׳ ׳§׳•׳“׳•׳× ׳”׳›׳•׳׳‘׳•׳× ׳׳¦׳ ׳”׳׳§׳•׳— ׳‘׳”׳™׳‘׳˜ ׳”׳•׳•׳™׳–׳•׳׳׳™ ׳•׳§׳¨׳™׳׳™׳™׳˜׳™׳‘׳™. ׳׳׳—׳¨ ׳׳›׳ ׳ ׳¢׳‘׳•׳¨ ׳׳׳¡׳¢ ׳‘׳• ׳ ׳×׳¨׳’׳ ׳׳× ׳”׳¡׳™׳₪׳•׳¨ ׳׳׳¡׳›׳™׳ ׳׳¢׳‘׳¨ ׳׳₪׳¨׳•׳˜׳•׳˜׳™׳™׳₪ ׳”׳׳™׳ ׳˜׳¨׳׳§׳˜׳™׳‘׳™ ׳׳• ׳—׳•׳׳¨׳™׳ ׳˜׳™׳•׳˜׳׳™׳™׳ ׳‘׳§׳׳₪׳™׳™׳ ׳™׳." },
                { q: "׳”׳׳ ׳׳×׳ ׳׳¢׳¦׳‘׳™׳ ׳’׳ ׳—׳•׳׳¨׳™ ׳₪׳¨׳™׳ ׳˜ (Offline)?", a: "׳›׳, ׳‘׳”׳—׳׳˜. ׳׳¢׳‘׳¨ ׳׳₪׳¢׳™׳׳•׳× ׳”׳“׳™׳’׳™׳˜׳׳™׳•׳× ׳”׳§׳₪׳“׳ ׳™׳× (׳“׳¡׳§׳˜׳•׳₪ ׳•׳ ׳™׳™׳“), ׳׳ ׳—׳ ׳• ׳׳₪׳™׳§׳™׳ ׳׳•׳¦׳¨׳™ ׳“׳₪׳•׳¡ ׳׳¨׳‘׳•׳× ׳¨׳•׳-׳׳₪׳™׳, ׳₪׳׳™׳™׳¨׳™׳ ׳›׳ ׳¡׳™׳ ׳×׳¢׳©׳™׳™׳×׳™׳™׳, ׳׳¨׳™׳–׳•׳× ׳׳•׳¦׳¨ ׳•׳׳₪׳™׳׳• ׳¢׳™׳¦׳•׳‘ ׳׳‘׳™׳×׳ ׳™ ׳¢׳ ׳§ ׳‘׳×׳¢׳¨׳•׳›׳•׳×." },
                { q: "׳‘׳׳™׳–׳” ׳׳•׳₪׳ ׳׳×׳‘׳¦׳¢ ׳¢׳™׳¦׳•׳‘ UI/UX ׳׳¦׳׳›׳?", a: "׳׳—׳§׳¨ ׳”׳×׳ ׳”׳’׳•׳× ׳’׳•׳׳©׳™׳ ׳§׳•׳“׳ ׳׳›׳ ׳¢׳™׳¦׳•׳‘. ׳”׳¡׳˜׳•׳“׳™׳• ׳׳×׳—׳™׳ ׳׳׳‘׳—׳•׳ ׳₪׳¨׳¡׳•׳ ׳•׳× ׳׳©׳×׳׳© (User Personas), ׳¦׳™׳•׳¨ ׳–׳¨׳™׳׳× ׳׳©׳×׳׳© (User Flow) ׳•׳¡׳§׳™׳¦׳•׳× (Wireframes). ׳¨׳§ ׳›׳©׳”׳”׳’׳™׳•׳ ׳‘׳¨׳•׳¨, ׳׳•׳¡׳™׳₪׳™׳ ׳©׳›׳‘׳× ׳₪׳¨׳™׳׳™׳•׳ ׳¢׳™׳¦׳•׳‘׳™׳×." },
                { q: "׳›׳׳” ׳¡׳‘׳‘׳™ ׳×׳™׳§׳•׳ ׳™׳ ׳›׳׳•׳׳™׳ ׳”׳₪׳¨׳•׳™׳§׳˜?", a: "׳׳ ׳• ׳¢׳•׳‘׳“׳™׳ ׳‘׳©׳™׳˜׳× ׳”-Milestones (׳¦׳™׳•׳ ׳™ ׳“׳¨׳). ׳׳™׳ ׳׳’׳‘׳׳” ׳“׳¨׳¡׳˜׳™׳×, ׳׳׳ ׳¢׳‘׳•׳“׳” ׳–׳•׳¨׳׳×: ׳ ׳׳©׳¨ ׳¡׳§׳™׳¦׳” ׳¨׳׳©׳•׳ ׳™׳× ׳•׳ ׳§׳‘׳ ׳׳׳ ׳” ׳›׳™׳•׳•׳, ׳•׳׳– ׳ ׳¢׳‘׳•׳¨ ׳׳¡׳‘׳‘׳™ ׳₪׳™׳ ׳™׳©׳™׳ ׳§׳˜׳ ׳™׳ ׳›׳“׳™ ׳׳•׳•׳“׳ ׳©׳׳×׳ ׳׳׳×׳™׳™׳ ׳׳—׳•׳– ׳׳¨׳•׳¦׳™׳ ׳׳”׳×׳•׳¦׳¨ ׳”׳׳•׳’׳׳¨." },
                { q: "׳”׳׳ ׳׳ ׳—׳ ׳• ׳׳§׳‘׳׳™׳ ׳׳× ׳§׳‘׳¦׳™ ׳”׳׳§׳•׳¨ (׳₪׳×׳•׳—׳™׳)?", a: "׳‘׳”׳—׳׳˜. ׳‘׳¡׳™׳•׳ ׳₪׳¨׳•׳™׳§׳˜ ׳׳™׳×׳•׳’ ׳׳• ׳¢׳™׳¦׳•׳‘ ׳׳׳©׳§, ׳•׳׳׳—׳¨ ׳©׳׳׳•׳©׳¨ ׳‘-100%, ׳׳•׳¢׳‘׳¨ ׳׳›׳ ׳׳¡׳׳ Handoff ׳׳¡׳•׳“׳¨ ׳›׳•׳׳ ׳›׳ ׳§׳‘׳¦׳™ ׳”-Figma / Illustrator ׳₪׳×׳•׳—׳™׳ ׳•׳©׳™׳™׳›׳™׳ ׳׳›׳ ׳‘׳׳¢׳“׳™׳×." }
            ]
        },
        tech: { 
            title: "׳‘׳ ׳™׳™׳× ׳׳×׳¨׳™׳", 
            long: "׳”׳׳×׳¨ ׳”׳•׳ ׳”׳‘׳™׳× ׳©׳׳›׳ ׳‘׳“׳™׳’׳™׳˜׳. ׳׳ ׳—׳ ׳• ׳‘׳•׳ ׳™׳ ׳׳¢׳¨׳›׳•׳× ׳•׳•׳‘ ׳׳•׳¨׳›׳‘׳•׳× ׳”׳׳×׳§׳“׳׳•׳× ׳‘׳™׳•׳×׳¨ ׳‘׳¡׳‘׳™׳‘׳× ׳”׳׳§׳•׳— ׳×׳•׳ ׳©׳™׳׳× ׳“׳’׳© ׳×׳׳™׳“׳™׳× ׳׳‘׳™׳¦׳•׳¢׳™׳ ׳•׳׳˜׳›׳ ׳•׳׳•׳’׳™׳”.", 
            services: ["׳׳₪׳׳™׳§׳¦׳™׳•׳× ׳׳™׳ ׳˜׳¨׳ ׳˜ ׳׳×׳§׳“׳׳•׳×", "׳“׳₪׳™ ׳ ׳—׳™׳×׳” ׳—׳›׳׳™׳ ׳׳׳™׳§׳•׳׳¨׳¡", "׳—׳™׳‘׳•׳¨׳™ API ׳-CRM ׳”׳§׳™׳™׳", "׳׳‘׳˜׳—׳” ׳•׳×׳—׳–׳•׳§׳”"],
            processTitle: "׳׳™׳ ׳׳ ׳—׳ ׳• ׳‘׳•׳ ׳™׳ ׳׳×׳¨׳™׳?",
            processSubtitle: "׳”׳×׳”׳׳™׳ ׳©׳׳׳—׳•׳¨׳™ ׳”׳₪׳™׳×׳•׳— ׳©׳ ׳ ׳‘׳¨׳˜׳™ ׳”׳“׳™׳’׳™׳˜׳",
            process: [
                { title: "׳׳₪׳™׳•׳ ׳•׳¢׳™׳¦׳•׳‘ UX/UI", desc: "׳—׳§׳¨ ׳§׳”׳ ׳™׳¢׳“, ׳‘׳ ׳™׳™׳× ׳׳₪׳•׳× ׳׳¡׳¢ ׳׳©׳×׳׳©, ׳•׳¢׳™׳¦׳•׳‘ ׳“׳₪׳™ ׳ ׳—׳™׳×׳” ׳•׳׳׳©׳§׳™׳ ׳‘׳¨׳–׳•׳׳•׳¦׳™׳™׳× ׳₪׳™׳§׳¡׳-׳₪׳¨׳₪׳§׳˜.", icon: <MonitorSmartphone size={28} /> },
                { title: "׳₪׳™׳×׳•׳— ׳§׳“׳׳™ ׳•׳§׳•׳“", desc: "׳›׳×׳™׳‘׳× ׳§׳•׳“ ׳ ׳§׳™, ׳¡׳׳ ׳˜׳™ ׳•׳׳”׳™׳¨ ׳‘׳˜׳›׳ ׳•׳׳•׳’׳™׳•׳× ׳—׳“׳™׳©׳•׳× ׳׳˜׳•׳‘׳× ׳‘׳™׳¦׳•׳¢׳™׳ ׳׳§׳¡׳™׳׳׳™׳™׳ ׳•׳—׳•׳•׳™׳” ׳—׳׳§׳” ׳‘-120fps.", icon: <Code2 size={28} /> },
                { title: "׳׳‘׳˜׳—׳” ׳•׳‘׳§׳¨׳” (QA)", desc: "׳‘׳“׳™׳§׳•׳× ׳׳¢׳׳™׳§׳•׳× ׳•׳©׳‘׳™׳¨׳× ׳”׳׳¢׳¨׳›׳× ׳‘׳׳’׳•׳•׳ ׳“׳₪׳“׳₪׳ ׳™׳ ׳•׳׳›׳©׳™׳¨׳™׳ ׳‘׳›׳“׳™ ׳׳•׳•׳“׳ ׳©׳׳™׳ ׳¦׳•׳•׳׳¨׳™ ׳‘׳§׳‘׳•׳§ ׳•׳×׳§׳׳•׳×.", icon: <CheckCircle2 size={28} /> },
                { title: "׳”׳©׳§׳” ׳•׳ ׳™׳˜׳•׳¨ ׳¨׳¦׳™׳£", desc: "׳¢׳׳™׳™׳” ׳—׳’׳™׳’׳™׳× ׳׳׳•׳•׳™׳¨, ׳—׳™׳‘׳•׳¨ ׳׳׳ ׳׳™׳˜׳™׳§׳¡ ׳•׳₪׳™׳§׳¡׳׳™׳, ׳•׳×׳₪׳¢׳•׳ ׳©׳¨׳× ׳”׳׳‘׳˜׳™׳— ׳™׳¦׳™׳‘׳•׳× ׳©׳ 99.9% ׳’׳ ׳‘׳×׳ ׳•׳¢׳” ׳’׳“׳•׳׳”.", icon: <Globe size={28} /> }
            ],
            faqs: [
                { q: "׳‘׳׳™׳–׳• ׳˜׳›׳ ׳•׳׳•׳’׳™׳•׳× ׳׳×׳ ׳׳₪׳×׳—׳™׳ ׳׳×׳¨׳™׳?", a: "׳׳ ׳—׳ ׳• ׳‘׳•׳ ׳™׳ ׳¢׳ ׳’׳‘׳™ ׳˜׳›׳ ׳•׳׳•׳’׳™׳•׳× ׳׳×׳§׳“׳׳•׳× ׳›׳׳• React ׳•-Next.js ׳”׳׳׳₪׳©׳¨׳•׳× ׳׳”׳™׳¨׳•׳× ׳™׳•׳¦׳׳× ׳“׳•׳₪׳ (׳‘׳׳×׳¨׳™׳ ׳×׳“׳׳™׳×׳™׳™׳ ׳׳•׳¨׳›׳‘׳™׳), ׳׳• ׳׳—׳׳™׳₪׳™׳ ׳‘׳¢׳–׳¨׳× ׳•׳•׳¨׳“׳₪׳¨׳¡ ׳×׳—׳× ׳׳‘׳ ׳” ׳§׳•׳“ ׳ ׳§׳™ ׳•׳×׳§׳ ׳™, ׳‘׳”׳—׳׳˜׳” ׳׳¡׳˜׳¨׳˜׳’׳™׳× ׳”׳׳•׳×׳׳׳× ׳‘׳׳“׳•׳™׳§ ׳׳¦׳¨׳›׳™ ׳”׳׳§׳•׳— ׳•׳”׳ ׳™׳”׳•׳ ׳”׳¢׳×׳™׳“׳™ ׳©׳ ׳¦׳•׳•׳× ׳”׳”׳–׳ ׳”." },
                { q: "׳›׳׳” ׳–׳׳ ׳׳•׳§׳— ׳׳׳×׳¨ ׳׳”׳™׳•׳× ׳‘׳׳•׳•׳™׳¨?", a: "׳”׳–׳׳ ׳׳©׳×׳ ׳” ׳‘׳”׳×׳׳ ׳׳ ׳₪׳— ׳•׳׳׳•׳¨׳›׳‘׳•׳×. ׳¢׳׳•׳“׳™ ׳ ׳—׳™׳×׳” ׳׳™׳›׳•׳×׳™׳™׳ ׳׳׳•׳“ ׳™׳›׳•׳׳™׳ ׳׳”׳™׳•׳× ׳׳•׳›׳ ׳™׳ ׳×׳•׳ ׳›׳©׳‘׳•׳¢׳™׳™׳. ׳׳×׳¨׳™׳ ׳×׳“׳׳™׳×׳™׳™׳ ׳׳•׳¨׳›׳‘׳™׳ ׳‘׳׳™׳•׳—׳“ ׳•׳›׳׳•׳‘׳ ׳—׳ ׳•׳™׳•׳× ׳׳™׳§׳•׳׳¨׳¡ ׳™׳ ׳•׳¢׳• ׳׳¨׳•׳‘ ׳‘׳׳׳•׳¦׳¢ ׳©׳ ׳©׳‘׳™׳ 4 ׳-10 ׳©׳‘׳•׳¢׳•׳×, ׳׳׳—׳¨ ׳¡׳’׳™׳¨׳× ׳”׳§׳•׳ ׳¡׳₪׳˜ ׳•׳׳₪׳™׳•׳ ׳׳©׳•׳×׳£." },
                { q: "׳”׳׳ ׳׳•׳›׳ ׳׳ ׳”׳ ׳׳× ׳×׳•׳›׳ ׳”׳׳×׳¨ ׳‘׳¢׳¦׳׳™?", a: "׳‘׳•׳•׳“׳׳™. ׳׳ ׳• ׳׳§׳₪׳™׳“׳™׳ ׳׳₪׳×׳— ׳׳×׳¨׳™׳ ׳¢׳ ׳׳׳©׳§׳™ ׳ ׳™׳”׳•׳ (CMS) ׳¡׳•׳₪׳¨ ׳ ׳•׳—׳™׳ ׳׳©׳¨ ׳׳•׳×׳׳׳™׳ ׳׳™׳©׳™׳× ׳׳©׳₪׳” ׳”׳¢׳¡׳§׳™׳× ׳©׳׳›׳. ׳‘׳¡׳™׳•׳ ׳”׳‘׳ ׳™׳™׳” ׳”׳×׳›׳ ׳•׳×׳™׳× ׳׳ ׳• ׳“׳•׳׳’׳™׳ ׳׳”׳“׳¨׳™׳ ׳׳×׳›׳ ׳‘׳׳•׳₪׳ ׳׳§׳™׳£, ׳›׳ ׳©׳×׳•׳›׳׳• ׳׳¢׳“׳›׳ ׳˜׳§׳¡׳˜׳™׳, ׳×׳׳•׳ ׳•׳× ׳•׳׳₪׳™׳׳• ׳₪׳¨׳•׳™׳§׳˜׳™׳ ׳‘׳§׳׳™ ׳§׳׳•׳×." },
                { q: "׳”׳׳ ׳׳×׳ ׳’׳ ׳§׳•׳ ׳™׳ ׳•׳׳×׳—׳–׳§׳™׳ ׳׳× ׳”׳׳—׳¡׳•׳?", a: "׳׳ ׳—׳ ׳• ׳™׳›׳•׳׳™׳. ׳¡׳₪׳¨׳•׳¡ ׳׳¦׳™׳¢׳” ׳©׳™׳¨׳•׳×׳™ ׳¨׳™׳˜׳™׳™׳ ׳¨ ׳”׳›׳•׳׳׳™׳ ׳—׳‘׳™׳׳•׳× ׳׳—׳¡׳•׳ ׳©׳¨׳×׳™ ׳₪׳¨׳™׳׳™׳•׳ ׳¡׳•׳₪׳¨ ׳׳”׳™׳¨׳™׳ (׳›׳•׳׳ ׳¢׳׳“׳•׳× CDN), ׳’׳™׳‘׳•׳™׳™׳ ׳§׳‘׳•׳¢׳™׳, ׳¢׳“׳›׳•׳ ׳™ ׳׳‘׳˜׳—׳” ׳‘׳¨׳׳× ׳”׳©׳¨׳×, ׳•׳›׳׳•׳‘׳ ׳׳¢׳§׳‘ ׳˜׳›׳ ׳™ ׳©׳׳‘׳˜׳™׳— ׳©׳§׳˜ ׳¨׳•׳—׳ ׳™ ׳׳ ׳™׳”׳•׳ ׳”׳©׳•׳˜׳£ ׳©׳ ׳”׳׳×׳¨." },
                { q: "׳”׳§׳•׳“ ׳׳•׳×׳׳ ׳׳§׳™׳“׳•׳ ׳‘׳’׳•׳’׳?", a: "׳‘׳׳•׳₪׳ ׳׳•׳—׳׳˜. ׳׳ ׳—׳ ׳• ׳§׳•׳“׳ ׳›׳ ׳¡׳•׳›׳ ׳•׳× ׳©׳™׳•׳•׳§. ׳‘׳ ׳™׳™׳× ׳׳×׳¨ ׳©׳׳™׳ ׳• ׳׳©׳¨׳× SEO ׳׳• ׳™׳—׳¡׳™ ׳”׳׳¨׳” ׳—׳•׳˜׳ ׳׳׳˜׳¨׳” ׳‘׳¢׳™׳ ׳™׳ ׳•. ׳׳׳×׳¨׳™׳ ׳©׳׳ ׳• ׳™׳© ׳×׳’׳™׳•׳× ׳¡׳׳ ׳˜׳™׳•׳× ׳׳•׳‘׳ ׳•׳×, ׳×׳׳•׳ ׳•׳× ׳‘׳¨׳–׳•׳׳•׳¦׳™׳™׳× WebP ׳•׳§׳•׳“ ׳§׳׳™׳ ׳©׳×׳•׳¨׳ ׳™׳©׳™׳¨׳•׳× ׳׳“׳¨׳™׳©׳•׳× ׳”׳׳™׳‘׳” (Core Web Vitals) ׳©׳ ׳’׳•׳’׳." }
            ]
        },
        seo: { 
            title: "SEO & GEO", 
            long: "׳׳”׳™׳•׳× ׳‘׳¨׳׳© ׳×׳•׳¦׳׳•׳× ׳”׳—׳™׳₪׳•׳© ׳–׳• ׳¨׳™׳¦׳” ׳׳׳¨׳—׳§׳™׳ ׳׳¨׳•׳›׳™׳. ׳׳ ׳—׳ ׳• ׳׳©׳׳‘׳™׳ ׳׳™׳›׳•׳™׳•׳× ׳˜׳›׳ ׳™׳•׳× ׳‘׳׳¡׳˜׳¨׳˜׳’׳™׳™׳× ׳×׳•׳›׳ ׳©׳‘׳•׳ ׳” ׳׳•׳׳ ׳˜׳•׳ ׳©׳ ׳¡׳׳›׳•׳× ׳׳•׳›׳—׳× ׳’׳ ׳¢׳‘׳•׳¨ ׳‘׳™׳˜׳•׳™׳™׳ ׳•׳×׳•׳›׳ ׳׳§׳•׳׳™ ׳׳• ׳’׳׳•׳‘׳׳׳™.", 
            services: ["׳‘׳“׳™׳§׳•׳× ׳˜׳›׳ ׳™׳•׳× ׳©׳•׳˜׳₪׳•׳×", "׳©׳™׳₪׳•׳¨ ׳×׳ ׳•׳¢׳” ׳¡׳₪׳¦׳™׳₪׳™׳× ׳•׳§׳¨׳•׳¡-׳–׳•׳ ׳’", "׳‘׳ ׳™׳™׳× ׳₪׳¨׳•׳₪׳™׳ ׳§׳™׳©׳•׳¨׳™׳ ׳₪׳•׳˜׳ ׳˜׳™", "׳׳•׳₪׳˜׳™׳׳™׳–׳¦׳™׳” ׳׳׳ ׳•׳¢׳™ ׳‘׳™׳ ׳” ׳׳׳׳›׳•׳×׳™׳× (GEO)"],
            processTitle: "׳׳™׳ ׳׳׳¦׳‘ ׳׳× ׳¢׳¦׳׳›׳ ׳‘׳˜׳•׳₪?",
            processSubtitle: "׳”׳×׳”׳׳™׳ ׳”׳׳•׳¨׳’׳ ׳™ ׳©׳׳ ׳•",
            process: [
                { title: "׳׳•׳“׳™׳˜ ׳˜׳›׳ ׳™ ׳•׳׳™׳‘׳× ׳”׳×׳•׳›׳", desc: "׳¡׳¨׳™׳§׳” ׳׳׳׳” ׳©׳ ׳§׳•׳“׳™ ׳”׳׳×׳¨ ׳׳׳™׳×׳•׳¨ ׳©׳’׳™׳׳•׳× ׳§׳¨׳™׳˜׳™׳•׳× ׳׳¦׳“ ׳׳¦׳™׳׳× ׳”׳–׳“׳׳ ׳•׳™׳•׳× ׳©׳ ׳‘׳™׳˜׳•׳™׳™ ׳׳₪׳×׳— ׳׳׳•׳§׳“׳™׳ ׳©׳׳ ׳׳ ׳•׳¦׳׳™׳.", icon: <Search size={28} /> },
                { title: "׳׳•׳₪׳˜׳™׳׳™׳–׳¦׳™׳” ׳׳§׳•׳׳™׳× (On-Page)", desc: "׳”׳×׳׳׳× ׳×׳•׳›׳ ׳›׳™׳¨׳•׳¨׳’׳™׳×: ׳©׳™׳₪׳•׳¨ ׳׳”׳™׳¨׳•׳™׳•׳× ׳˜׳¢׳™׳ ׳”, ׳›׳•׳×׳¨׳•׳× H1/H2 ׳×׳§׳™׳ ׳•׳× ׳•׳¢׳“׳›׳•׳ ׳×׳’׳™׳•׳× ׳׳˜׳ ׳‘׳׳•׳₪׳ ׳©׳•׳˜׳£.", icon: <Code2 size={28} /> },
                { title: "׳‘׳ ׳™׳™׳× ׳×׳•׳›׳ ׳¢׳©׳™׳¨ ׳׳’׳•׳׳©", desc: "׳”׳₪׳§׳× ׳׳׳׳¨׳™׳, ׳¢׳׳•׳“׳™ ׳ ׳—׳™׳×׳” ׳•׳׳“׳¨׳™׳›׳™׳ ׳©׳׳•׳‘׳™׳׳™׳ ׳‘׳׳•׳₪׳ ׳˜׳‘׳¢׳™ ׳׳× ׳”׳’׳•׳׳© ׳׳×׳©׳•׳‘׳” ׳׳•׳×׳” ׳”׳•׳ ׳׳¢׳•׳ ׳™׳™׳ ׳׳§׳¨׳•׳.", icon: <MessageSquare size={28} /> },
                { title: "׳₪׳¨׳•׳₪׳™׳ ׳§׳™׳©׳•׳¨׳™׳ ׳•׳׳•׳˜׳•׳¨׳™׳˜׳”", desc: "׳¨׳›׳™׳©׳× ׳§׳™׳©׳•׳¨׳™׳ ׳׳™׳›׳•׳×׳™׳™׳ ׳׳׳×׳¨׳™׳ ׳—׳–׳§׳™׳ ׳‘׳¨׳©׳× (Off-Page) ׳•׳‘׳ ׳™׳™׳× ׳¡׳׳›׳•׳× ׳׳•׳×׳’ ׳׳׳ ׳•׳¢׳™ ׳”׳‘׳™׳ ׳” ׳”׳׳׳׳›׳•׳×׳™׳× (GEO) ׳›׳“׳™ ׳׳§׳‘׳¢ ׳ ׳•׳›׳—׳•׳× ׳‘׳×׳©׳•׳‘׳•׳× ׳”-AI.", icon: <TrendingUp size={28} /> }
            ],
            faqs: [
                { q: "׳׳” ׳–׳” GEO ׳׳¢׳•׳׳× SEO?", a: "GEO (Generative Engine Optimization) ׳׳×׳™׳™׳—׳¡ ׳׳”׳×׳׳׳× ׳”׳×׳•׳›׳ ׳©׳׳›׳ ׳׳׳ ׳•׳¢׳™ ׳”׳—׳™׳₪׳•׳© ׳”׳—׳“׳©׳™׳ ׳”׳׳‘׳•׳¡׳¡׳™׳ ׳¢׳ ׳‘׳™׳ ׳” ׳׳׳׳›׳•׳×׳™׳× (׳›׳׳• ChatGPT, Perplexity, ׳•׳’׳•׳’׳ SGE). ׳‘׳–׳׳ ׳©-SEO ׳׳×׳׳§׳“ ׳‘׳“׳™׳¨׳•׳’ ׳”׳§׳׳׳¡׳™ ׳׳¦׳“ ׳”׳׳×׳—׳¨׳™׳, GEO ׳׳•׳•׳“׳ ׳©׳”-AI ׳™׳׳׳™׳¥ ׳¢׳׳™׳›׳ ׳›׳×׳©׳•׳‘׳” ׳”׳׳•׳—׳׳˜׳×." },
                { q: "׳×׳•׳ ׳›׳׳” ׳–׳׳ ׳ ׳¨׳׳” ׳”׳©׳₪׳¢׳” ׳©׳ ׳×׳”׳׳™׳ SEO?", a: "׳×׳”׳׳™׳ ׳§׳™׳“׳•׳ ׳׳•׳¨׳’׳ ׳™ ׳”׳•׳ ׳”׳©׳§׳¢׳” ׳׳¡׳˜׳¨׳˜׳’׳™׳× ׳¢׳׳•׳§׳”. ׳×׳•׳¦׳׳•׳× ׳×׳ ׳•׳“׳•׳×׳™׳•׳× ׳׳¨׳•׳‘ ׳™׳•׳¨׳’׳©׳• ׳׳׳—׳¨ 3 ׳—׳•׳“׳©׳™׳, ׳›׳׳©׳¨ ׳§׳₪׳™׳¦׳•׳× ׳׳•׳‘׳”׳§׳•׳× ׳•׳×׳©׳•׳׳× ׳”-ROI ׳”׳׳¨׳›׳–׳™׳× ׳¦׳₪׳•׳× ׳‘׳׳׳•׳ ׳¢׳•׳¦׳׳×׳ ׳×׳•׳ 6 ׳¢׳“ 9 ׳—׳•׳“׳©׳™׳." },
                { q: "׳”׳׳ ׳׳×׳ ׳›׳•׳×׳‘׳™׳ ׳’׳ ׳׳× ׳”׳׳׳׳¨׳™׳ ׳׳׳×׳¨?", a: "׳—׳“ ׳׳©׳׳¢׳™׳×. ׳׳—׳׳§׳× ׳”-SEO ׳©׳׳ ׳• ׳›׳•׳׳׳× ׳׳׳¢׳©׳” ׳×׳ ׳×׳•׳›׳ ׳¡׳’׳•׳¨ ׳©׳׳›׳™׳ ׳§׳•׳₪׳™׳¨׳™׳™׳˜׳¨׳™׳ ׳‘׳¢׳׳™ ׳¨׳§׳¢ ׳׳•׳˜׳” SEO ׳©׳׳™׳™׳¦׳¨׳™׳ ׳˜׳§׳¡׳˜ ׳‘׳¢׳ ׳¢׳¨׳ ׳׳׳™׳×׳™ ׳׳’׳•׳׳©׳™׳ ׳©׳’׳ ׳ ׳¡׳¨׳§ ׳•׳׳׳•׳ ׳“׳§׳¡ ׳‘׳¦׳•׳¨׳” ׳׳•׳₪׳˜׳™׳׳׳™׳× ׳¢׳ ׳™׳“׳™ ׳’׳•׳’׳." },
                { q: "׳׳™׳ ׳׳×׳ ׳׳•׳“׳“׳™׳ ׳•׳‘׳•׳ ׳™׳ ׳§׳™׳©׳•׳¨׳™׳ ׳—׳™׳¦׳•׳ ׳™׳™׳?", a: "׳׳ ׳• ׳׳ ׳¢׳•׳©׳™׳ ׳©׳™׳׳•׳© ׳‘'׳—׳•׳•׳× ׳§׳™׳©׳•׳¨׳™׳' ׳₪׳׳¡׳™׳‘׳™׳•׳× ׳©׳¢׳׳•׳׳•׳× ׳׳’׳¨׳•׳¨ ׳¢׳ ׳™׳©׳”. ׳”׳’׳™׳©׳” ׳׳×׳‘׳¡׳¡׳× ׳¢׳ Digital PR: ׳§׳©׳¨ ׳¨׳¦׳•׳£ ׳¢׳ ׳‘׳•׳¨׳“ ׳¢׳™׳×׳•׳ ׳׳™׳ ׳׳₪׳¨׳¡׳•׳ ׳׳•׳¨׳’׳ ׳™ ׳‘׳׳’׳–׳™׳ ׳™׳ ׳׳§׳˜׳•׳׳׳™׳™׳ ׳¨׳‘׳™ ׳¢׳•׳¦׳׳” ׳‘׳¨׳׳•׳× ׳©׳•׳ ׳•׳× ׳©׳ ׳¡׳׳›׳•׳× (DA)." },
                { q: "׳׳” ׳׳×׳‘׳¦׳¢ ׳‘׳¦׳“ ׳”׳˜׳›׳ ׳™ ׳©׳ ׳”׳׳×׳¨?", a: "׳‘׳“׳™׳§׳× ׳׳”׳™׳¨׳•׳× ׳©׳¨׳×׳™, ׳¡׳’׳™׳¨׳× ׳׳•׳₪׳™׳ (404), ׳¦׳׳¦׳•׳ JS ׳¢׳•׳“׳£, ׳‘׳ ׳™׳™׳× ׳׳₪׳•׳× ׳׳×׳¨, ׳₪׳™׳¨׳•׳¨ ׳׳—׳ (Breadcrumbs), ׳•׳©׳™׳₪׳•׳¨ ׳›׳׳׳™ ׳©׳ ׳׳“׳“׳™ ׳”-Core Web Vitals ׳©׳’׳•׳’׳ ׳“׳•׳¨׳©׳× ׳›׳“׳™ ׳׳₪׳¨׳•׳¡ ׳׳׳™׳ ׳•׳×." }
            ]
        },
        strategy: {
            title: "׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳©׳™׳•׳•׳§׳™׳×",
            long: "׳›׳ ׳”׳¦׳׳—׳” ׳“׳™׳’׳™׳˜׳׳™׳× ׳׳×׳—׳™׳׳” ׳‘׳×׳•׳›׳ ׳™׳× ׳‘׳¨׳•׳¨׳” ׳”׳׳‘׳•׳¡׳¡׳× ׳¢׳ ׳™׳¢׳“׳™׳ ׳׳“׳™׳“׳™׳. ׳׳ ׳—׳ ׳• ׳׳ ׳×׳—׳™׳ ׳׳× ׳”׳©׳•׳§, ׳§׳”׳׳™ ׳”׳™׳¢׳“ ׳•׳¡׳‘׳™׳‘׳× ׳”׳׳×׳—׳¨׳™׳ ׳‘׳›׳“׳™ ׳׳™׳™׳¦׳¨ ׳׳ ׳•׳¢ ׳¦׳׳™׳—׳” ׳•׳׳×׳•׳“׳•׳׳•׳’׳™׳” ׳׳׳•׳§׳“׳× ׳©׳×׳׳•׳•׳” ׳׳× ׳›׳ ׳”׳₪׳¢׳™׳׳•׳× ׳”׳¢׳¡׳§׳™׳×.",
            services: ["׳׳—׳§׳¨ ׳©׳•׳§ ׳•׳§׳”׳׳™ ׳™׳¢׳“", "׳׳™׳•׳•׳™ ׳׳¡׳˜׳¨׳˜׳’׳™ ׳‘׳”׳©׳§׳•׳× ׳׳•׳¦׳¨", "׳׳₪׳™׳•׳ ׳׳¡׳¢׳•׳× ׳׳§׳•׳— ׳•׳׳©׳₪׳›׳™ ׳”׳׳¨׳”", "׳¡׳™׳ ׳¨׳’׳™׳” ׳“׳™׳’׳™׳˜׳׳™׳× ׳¨׳‘-׳¢׳¨׳•׳¦׳™׳×"],
            processTitle: "׳”׳ ׳•׳¡׳—׳” ׳׳”׳¦׳׳—׳” ׳‘׳“׳™׳’׳™׳˜׳",
            processSubtitle: "׳›׳™׳¦׳“ ׳ ׳¨׳׳™׳× ׳”׳¢׳‘׳•׳“׳” ׳¢׳ ׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳׳§׳™׳₪׳”",
            process: [
                { title: "׳¡׳“׳ ׳× ׳₪׳™׳¦׳•׳— ׳¢׳ ׳”׳”׳ ׳”׳׳”", desc: "׳׳₪׳’׳© ׳׳¢׳׳™׳§ ׳‘׳• ׳׳ ׳• ׳¦׳•׳׳׳™׳ ׳׳ ׳”׳©׳˜׳—, ׳׳’׳“׳™׳¨׳™׳ ׳™׳¢׳“׳™׳ ׳‘׳¨׳•׳¨׳™׳ (׳₪׳™׳ ׳ ׳¡׳™׳™׳ ׳•׳©׳™׳•׳•׳§׳™׳™׳) ׳•׳׳‘׳™׳ ׳™׳ ׳׳× ׳”׳×׳™׳•׳’ ׳”׳₪׳¡׳™׳›׳•׳׳•׳’׳™ ׳©׳ ׳”׳׳•׳¦׳¨.", icon: <Target size={28} /> },
                { title: "׳ ׳™׳×׳•׳— ׳”׳©׳•׳§ ׳•׳”׳׳×׳—׳¨׳™׳", desc: "׳׳™׳×׳•׳¨ ׳₪׳¢׳¨׳™׳ ׳‘׳׳¨׳—׳‘ ׳”׳×׳—׳¨׳•׳×׳™ (Blue Ocean), ׳ ׳™׳×׳•׳— ׳×׳׳—׳™׳¨ ׳׳ ׳׳•׳ ׳׳—׳•׳–׳™ ׳”׳”׳׳¨׳” ׳•׳’׳™׳‘׳•׳© ׳‘׳™׳“׳•׳ ׳׳•׳‘׳”׳§ ׳׳׳•׳×׳’.", icon: <LineChart size={28} /> },
                { title: "׳©׳¨׳˜׳•׳˜ ׳׳¡׳¢׳•׳× ׳׳§׳•׳—", desc: "׳₪׳™׳×׳•׳— ׳©׳׳‘׳™׳ ׳׳•׳‘׳ ׳™׳, ׳”׳—׳ ׳׳—׳©׳™׳₪׳” ׳¨׳׳©׳•׳ ׳™׳× ׳“׳¨׳ ׳™׳¦׳™׳¨׳× ׳‘׳™׳§׳•׳©׳™׳ ׳•׳¢׳“ ׳׳©׳׳‘ ׳”׳”׳ ׳¢׳” ׳׳¨׳›׳™׳©׳” (Funnel Mapping).", icon: <Compass size={28} /> },
                { title: "׳׳×׳•׳•׳” ׳¢׳‘׳•׳“׳” ׳§׳•׳׳₪׳׳˜", desc: "׳”׳¢׳‘׳¨׳× ׳׳§׳ ׳׳§׳¦׳•׳¢׳™׳× ׳׳¦׳•׳•׳×׳™ ׳”׳¡׳˜׳•׳“׳™׳• ׳•׳”׳׳“׳™׳” ׳׳”׳•׳¦׳׳” ׳׳₪׳•׳¢׳ ׳©׳ ׳”׳×׳•׳›׳ ׳™׳× ׳¢׳ ׳׳•\"׳–׳™׳, ׳׳™׳§׳•׳׳™׳ ׳•׳’׳׳ ׳˜׳™׳ ׳׳“׳•׳™׳§׳™׳.", icon: <CheckCircle2 size={28} /> }
            ],
            faqs: [
                { q: "׳׳׳” ׳׳ ׳™ ׳¦׳¨׳™׳ ׳׳¡׳˜׳¨׳˜׳’׳™׳”? ׳׳™ ׳׳₪׳©׳¨ ׳₪׳©׳•׳˜ ׳׳₪׳¨׳¡׳?", a: "׳₪׳¨׳¡׳•׳ ׳©׳¨׳¥ ׳׳׳ ׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳”׳•׳ ׳×׳•׳¦׳¨ ׳ ׳§׳•׳“׳×׳™ ׳§׳¦׳¨ ׳˜׳•׳•׳—. ׳‘׳¨׳’׳¢ ׳©׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳׳•׳×׳•׳•׳™׳× - ׳—׳•׳©׳‘׳™׳ ׳©׳׳•׳©׳” ׳¦׳¢׳“׳™׳ ׳§׳“׳™׳׳” ׳•׳™׳•׳“׳¢׳™׳ ׳׳§׳¨׳•׳ ׳׳× ׳׳›׳׳•׳ ׳”׳ ׳×׳•׳ ׳™׳ ׳’׳ ׳›׳׳©׳¨ ׳”׳׳׳’׳•׳¨׳™׳×׳ ׳׳• ׳”׳©׳•׳§ ׳׳©׳×׳ ׳™׳." },
                { q: "׳׳™׳ ׳׳×׳‘׳¦׳¢ ׳×׳”׳׳™׳ ׳‘׳ ׳™׳™׳× ׳”׳׳¡׳˜׳¨׳˜׳’׳™׳”?", a: "׳׳ ׳• ׳׳×׳—׳™׳׳™׳ ׳‘׳¡׳“׳ ׳׳•׳× ׳¢׳ ׳”׳”׳ ׳”׳׳” ׳›׳“׳™ ׳׳”׳‘׳™׳ ׳׳× ׳¨׳¦׳₪׳•׳× ׳”׳¢׳¡׳§ ׳•׳”׳׳•׳¦׳¨ ׳׳¢׳•׳׳§. ׳׳׳—׳¨ ׳׳›׳ ׳ ׳¦׳ ׳׳×׳”׳׳™׳ ׳ ׳™׳×׳•׳— ׳“׳׳˜׳” ׳ ׳¨׳—׳‘ ׳©׳‘׳¡׳•׳₪׳• ׳׳×׳•׳•׳” ׳׳§׳™׳£ ׳©׳¢׳׳™׳• ׳™׳™׳©׳¢׳ ׳• ׳›׳׳ ׳¢׳¨׳•׳¦׳™ ׳”׳¡׳˜׳•׳“׳™׳•, ׳”׳׳“׳™׳” ׳•׳”׳₪׳™׳×׳•׳—." },
                { q: "׳׳׳™ ׳׳×׳׳™׳ ׳׳§׳—׳× ׳¨׳§ ׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳™׳™׳¢׳•׳¦׳™׳×?", a: "׳™׳™׳¢׳•׳¥ ׳׳¡׳˜׳¨׳˜׳’׳™ ׳”׳•׳ ׳׳¨׳•׳‘ ׳׳•׳׳׳¥ ׳׳׳•׳×׳’׳™׳ ׳׳‘׳•׳¡׳¡׳™׳ ׳©׳—׳•׳•׳™׳ ׳×׳§׳¨׳× ׳–׳›׳•׳›׳™׳× ׳‘׳¦׳׳™׳—׳” (Scale) ׳•׳›׳‘׳¨ ׳׳—׳–׳™׳§׳™׳ ׳¦׳•׳•׳× In-House ׳•׳–׳§׳•׳§׳™׳ ׳׳¨׳׳™׳™׳× ׳₪׳¨׳™׳׳™׳•׳ ׳—׳™׳¦׳•׳ ׳™׳× ׳©׳×׳ ׳×׳— ׳₪׳¢׳¨׳™׳ ׳•׳׳×׳’׳¨׳™ ׳”׳×׳¨׳—׳‘׳•׳×." },
                { q: "׳׳” ׳”׳×׳•׳¦׳¨ ׳”׳¡׳•׳₪׳™ ׳©׳׳§׳‘׳ ׳‘׳¡׳•׳£ ׳”׳×׳”׳׳™׳?", a: "׳׳×׳ ׳׳§׳‘׳׳™׳ ׳¡׳₪׳¨ ׳׳•׳×׳’ ׳¢׳™׳•׳ ׳™ ׳©׳׳›׳™׳ ׳׳₪׳•׳× ׳׳¡׳¢, ׳˜׳§׳˜׳™׳§׳•׳× ׳₪׳¨׳¡׳•׳ ׳¡׳₪׳¦׳™׳₪׳™׳•׳× ׳׳›׳ ׳¢׳¨׳•׳¥ ׳•׳׳¡׳’׳¨׳× ׳×׳§׳¦׳™׳‘׳™׳× ׳—׳•׳“׳©׳™׳× ׳׳—׳•׳©׳‘׳× ׳©׳×׳©׳׳© ׳›'׳×׳ ׳ ׳”׳׳›׳™׳¨׳•׳×' ׳¢׳‘׳•׳¨׳›׳ ׳׳›׳ ׳”׳—׳׳˜׳” ׳©׳™׳•׳•׳§׳™׳× ׳”׳‘׳׳” ׳‘׳׳¨׳’׳•׳." },
                { q: "׳”׳׳ ׳׳×׳ ׳’׳ ׳׳™׳™׳©׳׳™׳ ׳׳× ׳”׳׳¡׳˜׳¨׳˜׳’׳™׳” ׳׳• ׳¨׳§ ׳‘׳•׳ ׳™׳ ׳׳•׳×׳”?", a: "׳׳ ׳• ׳¡׳•׳›׳ ׳•׳× 360 ג€“ ׳׳׳¢׳©׳” ׳׳׳—׳¨ ׳”׳—׳×׳™׳׳” ׳”׳¡׳•׳₪׳™׳× ׳¢׳ ׳¡׳₪׳¨ ׳”׳׳¡׳˜׳¨׳˜׳’׳™׳”, ׳׳ ׳• ׳׳™׳“ ׳׳˜׳׳™׳¢׳™׳ ׳׳•׳×׳• ׳‘׳¦׳•׳•׳×׳™ ׳”׳§׳¨׳™׳׳™׳™׳˜׳™׳‘, ׳”׳׳“׳™׳” ׳•׳”׳—׳•׳׳¨׳™׳ ׳”׳©׳™׳•׳•׳§׳™׳™׳ ׳©׳׳ ׳• ׳›׳“׳™ ׳׳™׳™׳©׳ ׳‘׳׳•׳₪׳ ׳׳¢׳©׳™ ׳•׳׳“׳׳•׳’ ׳©׳”׳×׳›׳ ׳•׳ ׳₪׳•׳’׳© ׳׳× ׳”׳׳¦׳™׳׳•׳× ׳‘׳—׳₪׳™׳₪׳” ׳׳׳׳”." }
            ]
        },
        analytics: { 
            title: "׳׳ ׳׳™׳˜׳™׳§׳¡ ׳•׳“׳׳˜׳”", 
            long: "׳‘׳׳™ ׳׳“׳™׳“׳” ׳׳™׳ ׳©׳™׳₪׳•׳¨. ׳׳ ׳—׳ ׳• ׳¢׳•׳–׳¨׳™׳ ׳׳›׳ ׳׳”׳‘׳™׳ ׳‘׳“׳™׳•׳§ ׳׳” ׳§׳•׳¨׳” ׳‘׳׳×׳¨, ׳׳׳™׳₪׳” ׳׳’׳™׳¢׳™׳ ׳”׳׳§׳•׳—׳•׳× ׳”׳¨׳•׳•׳—׳™׳™׳ ׳•׳׳™׳ ׳׳™׳™׳¢׳ ׳׳× ׳”׳×׳§׳¦׳™׳‘.", 
            services: ["׳”׳˜׳׳¢׳× GA4 ׳•-Tag Manager", "׳“׳׳©׳‘׳•׳¨׳“׳™׳ ׳‘׳–׳׳ ׳׳׳×", "׳׳¢׳§׳‘ ׳”׳׳¨׳•׳× ׳׳×׳§׳“׳", "BigQuery"],
            processTitle: "׳©׳׳™׳˜׳” ׳׳׳׳” ׳¢׳ ׳”׳“׳׳˜׳” ׳©׳׳›׳",
            processSubtitle: "׳׳™׳ ׳׳ ׳׳™׳˜׳™׳§׳¡ ׳׳׳™׳×׳™ ׳¦׳¨׳™׳ ׳׳”׳¨׳׳•׳×",
            process: [
                { title: "׳׳™׳₪׳•׳™ KPI ׳•׳”׳’׳“׳¨׳•׳×", desc: "׳”׳‘׳ ׳× ׳›׳׳ ׳”׳׳“׳“׳™׳ ׳”׳“׳¨׳•׳©׳™׳ ׳©׳¢׳•׳§׳‘׳™׳ ׳׳—׳¨ ׳”׳׳§׳•׳— - ׳׳׳—׳™׳¦׳× ׳”׳—׳©׳™׳₪׳” ׳”׳¨׳׳©׳•׳ ׳” ׳“׳¨׳ ׳”׳›׳ ׳¡׳× ׳׳•׳¦׳¨׳™׳ ׳׳¡׳, ׳•׳¢׳“ ׳§׳׳™׳˜׳× ׳”׳˜׳•׳₪׳¡ ׳‘-CRM.", icon: <Target size={28} /> },
                { title: "׳”׳˜׳׳¢׳•׳× ׳˜׳›׳ ׳™׳•׳× ׳׳×׳§׳“׳׳•׳×", desc: "׳₪׳¨׳™׳¡׳” ׳׳™׳¨׳•׳¢׳™׳ (Events) ׳‘׳׳׳¦׳¢׳•׳× Google Tag Manager (GTM) ׳©׳¨׳×-׳¦׳“ ׳›׳“׳™ ׳׳ ׳§׳•׳× ׳—׳¨׳™׳’׳•׳× ׳”׳ ׳’׳¨׳׳•׳× ׳¢׳§׳‘ ׳—׳•׳¡׳׳™ ׳₪׳¨׳¡׳•׳׳•׳×.", icon: <Settings size={28} /> },
                { title: "׳“׳׳©׳‘׳•׳¨׳“׳™׳ ׳׳•׳×׳׳׳™׳ ׳׳™׳©׳™׳×", desc: "׳‘׳ ׳™׳™׳× ׳׳¡׳ ׳™׳₪׳™׳₪׳” ׳׳—׳“ ׳§׳ ׳׳§׳׳™׳˜׳” ׳‘-Looker Studio ׳”׳׳©׳׳‘ ׳׳× ׳׳§׳•׳¨׳•׳× ׳”׳×׳ ׳•׳¢׳” ׳”׳׳•׳¨׳›׳‘׳™׳ ׳‘׳™׳•׳×׳¨ ׳׳׳§׳•׳ ׳™׳¢׳™׳ ׳׳¢׳‘׳•׳“׳” ׳©׳•׳˜׳₪׳×.", icon: <BarChart size={28} /> },
                { title: "׳ ׳™׳×׳•׳— ׳•׳׳•׳₪׳˜׳™׳׳™׳–׳¦׳™׳”", desc: "׳¡׳§׳™׳¨׳” ׳—׳–׳•׳×׳™׳× ׳©׳‘׳•׳¢׳™׳× ׳¢׳ ׳”׳‘׳™׳¦׳•׳¢׳™׳ ׳”׳׳•׳›׳™׳—׳” ׳׳™׳–׳” ׳׳₪׳™׳§ ׳׳‘׳™׳ ׳׳× ׳”׳”׳—׳–׳¨ ׳”׳›׳¡׳₪׳™ ׳”׳׳“׳•׳™׳§ ׳•׳”׳’׳‘׳•׳” ׳‘׳™׳•׳×׳¨ (׳”׳—׳–׳¨ ׳¢׳ ׳©׳§׳ ׳‘׳•׳“׳“).", icon: <TrendingUp size={28} /> }
            ],
            faqs: [
                { q: "׳׳׳” ׳׳ ׳—׳ ׳• ׳¦׳¨׳™׳›׳™׳ ׳׳“׳™׳“׳” ׳׳ ׳׳™׳˜׳™׳× ׳׳×׳§׳“׳׳×?", a: "׳׳ ׳׳™׳˜׳™׳§׳¡ ׳”׳•׳ ׳”׳‘׳¡׳™׳¡ ׳׳§׳‘׳׳× ׳”׳—׳׳˜׳•׳× ׳¢׳¡׳§׳™׳•׳× ׳—׳›׳׳•׳×. ׳׳׳ ׳׳“׳™׳“׳” ׳׳×׳§׳“׳׳× (׳׳¢׳§׳‘׳™ ׳”׳׳¨׳•׳×, eCommerce ׳‘-GA4) ׳׳×׳ ׳‘׳¢׳¦׳ ׳׳—׳׳™׳˜׳™׳ ׳‘׳׳•׳₪׳ ׳¢׳™׳•׳•׳¨. ׳”׳׳“׳™׳“׳” ׳×׳¨׳׳” ׳׳ ׳• ׳׳™׳–׳” ׳§׳׳₪׳™׳™׳ ׳׳‘׳™׳ ׳¨׳•׳•׳— ׳•׳׳™׳–׳” ׳¢׳¨׳•׳¥ ׳₪׳—׳•׳× ׳׳©׳×׳׳." },
                { q: "׳×׳•׳›׳׳• ׳׳×׳§׳ ׳׳ ׳• ׳ ׳×׳•׳ ׳™ ׳”׳׳¨׳•׳× ׳©׳’׳•׳™׳™׳?", a: "׳‘׳”׳—׳׳˜. ׳׳ ׳• ׳׳‘׳¦׳¢׳™׳ ׳‘׳ ׳™׳™׳× ׳“׳׳˜׳” ׳§׳₪׳“׳ ׳™׳× ׳›׳“׳™ ׳׳׳¦׳•׳ ׳˜׳¢׳•׳™׳•׳× ׳‘׳׳¢׳§׳‘׳™ ׳”׳׳¨׳•׳×, ׳×׳§׳׳•׳× ׳‘׳”׳˜׳׳¢׳× Facebook Pixel, ׳›׳₪׳™׳׳•׳™׳•׳× ׳‘׳׳™׳¨׳•׳¢׳™׳ ׳•׳©׳’׳™׳׳•׳× ׳‘׳׳¢׳§׳‘ ׳“׳¨׳ Tag Manager." },
                { q: "׳™׳© ׳“׳¨׳ ׳ ׳•׳—׳” ׳׳¨׳׳•׳× ׳׳× ׳”׳ ׳×׳•׳ ׳™׳ ׳‘׳–׳׳ ׳׳׳×?", a: "׳׳ ׳• ׳™׳›׳•׳׳™׳ ׳׳”׳’׳“׳™׳¨ ׳׳›׳ ׳“׳׳©׳‘׳•׳¨׳“׳™׳ ׳׳•׳×׳׳׳™׳ ׳׳™׳©׳™׳× (׳‘׳¢׳–׳¨׳× ׳›׳׳™׳ ׳›׳׳• Looker Studio), ׳›׳ ׳©׳›׳ ׳׳“׳“׳™ ׳”׳׳₪׳×׳— ׳©׳—׳©׳•׳‘׳™׳ ׳׳›׳ ׳™׳”׳™׳• ׳׳¨׳•׳›׳–׳™׳ ׳‘׳׳•׳— ׳‘׳§׳¨׳” ׳׳—׳“ ׳©׳¢׳•׳‘׳“ ׳‘׳–׳׳ ׳׳׳× ׳•׳™׳—׳¡׳•׳ ׳›׳ ׳™׳¡׳” ׳׳׳¢׳¨׳›׳•׳× ׳©׳•׳ ׳•׳×." },
                { q: "׳׳”׳• ׳׳׳¢׳©׳” '׳׳¢׳§׳‘ ׳¦׳“ ׳©׳¨׳×' (Server-Side Tracking)?", a: "׳‘׳׳§׳•׳ ׳׳”׳¡׳×׳׳ ׳¢׳ ׳§׳•׳“ ׳₪׳™׳§׳¡׳ ׳©׳¨׳¥ ׳׳¦׳ ׳”׳’׳•׳׳© ׳•׳—׳•׳¡׳ ׳׳¢׳™׳×׳™׳ ׳¢׳ ׳™׳“׳™ ׳“׳₪׳“׳₪׳ ׳™׳ (׳›׳׳• iOS ׳׳• ׳׳“-׳‘׳׳•׳§׳¨), ׳”׳׳¢׳§׳‘ ׳׳‘׳•׳¦׳¢ ׳‘׳©׳¨׳× ׳™׳™׳¢׳•׳“׳™ ׳©׳׳ ׳•. ׳–׳” ׳׳©׳₪׳¨ ׳׳©׳׳¢׳•׳×׳™׳× ׳׳× ׳׳׳™׳ ׳•׳× ׳”׳ ׳×׳•׳ ׳™׳ ׳•׳§׳¦׳‘ ׳”׳”׳׳¨׳•׳× ׳©׳׳“׳•׳•׳— ׳׳׳§׳™׳׳™ ׳”׳§׳׳₪׳™׳™׳ ׳™׳." },
                { q: "׳׳™׳–׳” ׳›׳׳™ ׳׳ ׳׳™׳˜׳™׳§׳” ׳׳×׳ ׳׳˜׳׳™׳¢׳™׳ ׳׳¨׳•׳‘?", a: "׳׳ ׳• ׳‘׳•׳—׳¨׳™׳ ׳›׳׳™׳ ׳‘׳”׳×׳׳ ׳׳₪׳¨׳•׳™׳§׳˜. ׳”׳‘׳¡׳™׳¡ ׳×׳׳™׳“ ׳™׳”׳™׳” GA4 ׳•-GTM. ׳¢׳‘׳•׳¨ ׳׳–׳•׳¨׳™ ׳¡׳—׳¨ (eCommerce), ׳׳ ׳• ׳׳•׳¡׳™׳₪׳™׳ ׳₪׳¢׳׳™׳ ׳¨׳‘׳•׳× ׳׳₪׳•׳× ׳—׳•׳ (׳›׳׳• Hotjar ׳׳• Clarity) ׳•׳׳•׳¦׳¨׳™׳ ׳׳׳₪׳׳•׳—׳™ ׳ ׳×׳•׳ ׳™׳ ׳׳•׳¨׳›׳‘׳™׳ (Looker / Mixpanel)." }
            ]
        }
    };
    const dept = data[id] || data.ppc;

    return (
        <Reveal className="min-h-screen bg-white pt-32 md:pt-40 pb-20 text-right">
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
                    <FAQ title={`׳©׳׳׳•׳× ׳ ׳₪׳•׳¦׳•׳×`} data={dept.faqs} className="bg-transparent !py-0 mt-20 md:mt-24" />
                )}

                <div className="mt-20 md:mt-24 p-8 md:p-12 bg-gray-50 border border-[#2f4ea1]/20 text-gray-900 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-right rounded-2xl shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2f4ea1]/10 to-transparent pointer-events-none"></div>
                    <h2 className="text-2xl md:text-3xl font-black relative z-10 text-[#2f4ea1]">׳׳•׳›׳ ׳™׳ ׳׳”׳×׳—׳™׳ ׳׳¢׳‘׳•׳“?</h2>
                    <button id="dept_contact_btn" onClick={() => router.push('/contact')} className="bg-[#2f4ea1] text-white px-8 py-4 font-black tracking-widest hover:bg-[#0747cc] transition-all rounded-full relative z-10 shadow-md">׳‘׳•׳׳• ׳ ׳×׳—׳™׳</button>
                </div>
            </div>
        </Reveal>
    );
};

export default DepartmentDetail;



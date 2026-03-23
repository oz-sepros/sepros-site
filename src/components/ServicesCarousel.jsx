import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Share2, Palette, Code, Search, BarChart3, ArrowUpLeft, ChevronRight, ChevronLeft } from 'lucide-react';

const ServicesCarousel = () => {
    const departments = [
        { id: 'ppc', icon: Target, title: 'PPC וביצועים', desc: 'קמפיינים מבוססי ROI בגוגל, פייסבוק, וטיקטוק.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60' },
        { id: 'social', icon: Share2, title: 'סושיאל וקריאייטיב', desc: 'נוכחות דיגיטלית שיוצרת מעורבות שיא.', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60' },
        { id: 'design', icon: Palette, title: 'סטודיו ומיתוג', desc: 'עיצוב UI/UX פרימיום ושפה חזותית מנצחת.', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60' },
        { id: 'tech', icon: Code, title: 'פיתוח אתרים', desc: 'בניית מערכות ווב מורכבות המתקדמות ביותר.', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60' },
        { id: 'seo', icon: Search, title: 'קידום אורגני SEO', desc: 'אסטרטגיית תוכן שמביאה למקומות הראשונים.', image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop&q=60' },
        { id: 'analytics', icon: BarChart3, title: 'אנליטיקס ודאטה', desc: 'הפיכת הררי מידע להחלטות שוות כסף.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60' }
    ];

    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = Math.abs(scrollRef.current.scrollLeft);
        const cardWidth = 400 + 24; // min-w-[400px] + gap-6
        const newIndex = Math.min(Math.max(Math.round(scrollLeft / cardWidth), 0), departments.length - 1);
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const carousel = scrollRef.current;
        if (!carousel) return;

        let interval;
        if (!isHovered) {
            interval = setInterval(() => {
                const isRTL = window.getComputedStyle(carousel).direction === 'rtl';
                if (isRTL) {
                    if (Math.abs(carousel.scrollLeft) >= carousel.scrollWidth - carousel.clientWidth - 10) {
                        carousel.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        carousel.scrollBy({ left: -424, behavior: 'smooth' });
                    }
                } else {
                    if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10) {
                        carousel.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        carousel.scrollBy({ left: 424, behavior: 'smooth' });
                    }
                }
            }, 3500);
        }
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <section className="pt-24 md:pt-32 pb-10 md:pb-16 bg-white border-b border-gray-100" id="services" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={() => setIsHovered(true)} onTouchEnd={() => setIsHovered(false)}>
            <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 dir-rtl">
                <div className="text-center md:text-right">
                    <div className="mb-4 flex items-center justify-center md:justify-start gap-2 dir-rtl">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#2f4ea1] "></div>
                        <span className="text-[#2f4ea1] font-extrabold text-base tracking-widest uppercase">המחלקות שלנו</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.2]">השירותים שלנו <br /> <span className="text-[#2f4ea1]">כדי שנוכל להצמיח את העסק שלך</span></h3>
                </div>
                {/* Desktop arrows moved up */}
                <div className="hidden md:flex gap-4 dir-ltr">
                    <button onClick={() => scrollRef.current?.scrollBy({ left: -424, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={() => scrollRef.current?.scrollBy({ left: 424, behavior: 'smooth' })} className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div className="relative w-full dir-rtl">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-visible snap-x snap-mandatory scrollbar-hide py-6 touch-pan-x px-4 md:px-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {departments.map((dept, i) => (
                        <div key={i} onClick={() => navigate(`/department/${dept.id}`)} className="min-w-[85vw] md:min-w-[400px] h-[480px] md:h-[500px] snap-center shrink-0 relative rounded-[2rem] overflow-hidden group transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl border border-[#09102c]/5">
                            {/* Full Background Image */}
                            <img src={dept.image} alt={dept.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />

                            {/* Dark Overlay fading to transparent at the top, using the true brand gradient profile */}
                            <div
                                className="absolute inset-0 opacity-95 transition-opacity duration-500"
                                style={{ background: 'linear-gradient(to top, #09102c 0%, #1e3082 35%, transparent 75%)' }}
                            ></div>

                            {/* Bottom-anchored Content Block */}
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end text-right z-10 h-full">
                                <div className="mt-auto">
                                    <h4 className="text-white text-3xl md:text-3xl lg:text-4xl font-black mb-1.5">{dept.title}</h4>
                                    <p className="text-white/80 text-sm md:text-base font-medium mb-6 relative z-10">{dept.desc}</p>

                                    {/* The subtle, flat "Explore Now" bar mirroring the reference image */}
                                    <div
                                        className="w-full text-white/95 font-bold text-sm py-4 px-6 rounded-2xl flex items-center justify-between transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-md relative z-10 dir-rtl"
                                    >
                                        <span>לפרטים מלאים</span>
                                        <ArrowUpLeft strokeWidth={2.5} className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:-translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile arrows aligned exactly like desktop */}
                <div className="flex md:hidden items-center justify-center gap-4 mt-6 dir-ltr">
                    <button onClick={() => scrollRef.current?.scrollBy({ left: -424, behavior: 'smooth' })} className="w-12 h-12 shrink-0 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95">
                        <ChevronLeft size={24} />
                    </button>
                    <button onClick={() => scrollRef.current?.scrollBy({ left: 424, behavior: 'smooth' })} className="w-12 h-12 shrink-0 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ServicesCarousel;

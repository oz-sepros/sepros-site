"use client";
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { trackEvent } from '../utils/analytics';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Target, Share2, Palette, Code, Search, BarChart3, Lightbulb, ArrowUpLeft, ChevronRight, ChevronLeft } from 'lucide-react';

const ServicesCarousel = () => {
    const departments = [
        { id: 'ppc', icon: Target, title: 'ניהול מדיה', desc: 'קמפיינים מבוססי ROI בגוגל, פייסבוק, וטיקטוק.', image: '/services/dept_ppc.png' },
        { id: 'social', icon: Share2, title: 'סושיאל ו-UGC', desc: 'נוכחות דיגיטלית שיוצרת מעורבות שיא.', image: '/services/dept_social.png' },
        { id: 'design', icon: Palette, title: 'סטודיו וקריאייטיב', desc: 'עיצוב UI/UX פרימיום ושפה חזותית מנצחת.', image: '/services/dept_design.png' },
        { id: 'tech', icon: Code, title: 'בניית אתרים', desc: 'בניית מערכות ווב מורכבות המתקדמות ביותר.', image: '/services/dept_tech.png' },
        { id: 'seo', icon: Search, title: 'SEO & GEO', desc: 'אסטרטגיית תוכן שמביאה למקומות הראשונים.', image: '/services/dept_seo.png' },
        { id: 'strategy', icon: Lightbulb, title: 'אסטרטגיה שיווקית', desc: 'בניית מותג מנצח ותוכנית עבודה חדה.', image: '/services/dept_strategy.png' },
        { id: 'analytics', icon: BarChart3, title: 'אנליטיקס ודאטה', desc: 'הפיכת הררי מידע להחלטות שוות כסף.', image: '/services/dept_analytics.png' }
    ];

    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const router = useRouter();

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const carousel = scrollRef.current;
        const firstChild = carousel.children[0];
        if (!firstChild) return;

        const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
        const cardWidth = firstChild.offsetWidth + gap;

        const scrollLeft = Math.abs(carousel.scrollLeft);
        const newIndex = Math.min(Math.max(Math.round(scrollLeft / cardWidth), 0), departments.length - 1);
        setActiveIndex(newIndex);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.3 });
        if (scrollRef.current) observer.observe(scrollRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const carousel = scrollRef.current;
        if (!carousel) return;

        let interval;
        if (!isHovered && isVisible) {
            interval = setInterval(() => {
                const isRTL = window.getComputedStyle(carousel).direction === 'rtl';
                const firstChild = carousel.children[0];
                if (!firstChild) return;

                const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
                const cardWidth = firstChild.offsetWidth + gap;

                if (Math.abs(carousel.scrollLeft) >= carousel.scrollWidth - carousel.clientWidth - 10) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    const scrollAmount = isRTL ? -cardWidth : cardWidth;
                    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }, 3000); // 3 seconds per rotation
        }
        return () => clearInterval(interval);
    }, [isHovered, isVisible]);

    return (
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-[#F5F7FA] border-b border-gray-100" id="services" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onTouchStart={() => setIsHovered(true)} onTouchEnd={() => setIsHovered(false)}>
            <div className="max-w-[1400px] mx-auto px-6 mb-12 flex flex-col md:flex-row items-center md:items-end justify-between gap-6 dir-rtl">
                <div className="text-center md:text-right">
                    <div className="mb-4 flex items-center justify-center md:justify-start gap-2 dir-rtl">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#2f4ea1] "></div>
                        <span className="text-[#2f4ea1] font-extrabold text-base tracking-widest uppercase">המחלקות שלנו</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2f4ea1] tracking-tight leading-[1.2]">השירותים שלנו <br /> <span>כדי שנוכל להצמיח את העסק שלך</span></h2>
                </div>
                {/* Desktop arrows moved up */}
                <div className="hidden md:flex gap-4 dir-ltr">
                    <button aria-label="הקודם" onClick={() => {
                        const carousel = scrollRef.current;
                        if (!carousel) return;
                        const firstChild = carousel.children[0];
                        const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
                        carousel.scrollBy({ left: -(firstChild.offsetWidth + gap), behavior: 'smooth' });
                    }} className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronLeft size={24} />
                    </button>
                    <button aria-label="הבא" onClick={() => {
                        const carousel = scrollRef.current;
                        if (!carousel) return;
                        const firstChild = carousel.children[0];
                        const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
                        carousel.scrollBy({ left: (firstChild.offsetWidth + gap), behavior: 'smooth' });
                    }} className="w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div className="relative w-full dir-rtl">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-visible snap-x snap-mandatory scrollbar-hide py-6 px-4 md:px-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {departments.map((dept, i) => (
                        <Link key={i} href={`/service/${dept.id}`} onClick={() => trackEvent('click_service_card', { service_id: dept.id })} className="min-w-[85vw] md:min-w-[400px] h-[480px] md:h-[500px] snap-center shrink-0 relative rounded-[2rem] overflow-hidden group transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl border border-[#09102c]/5 block">
                            {/* Full Background Image */}
                            <Image src={dept.image} alt={dept.title} fill sizes="(max-width: 768px) 85vw, 400px" className="object-cover group-hover:scale-105 transition-transform duration-[1500ms]" />

                            {/* Black gradient overlay for better text readability */}
                            <div
                                className="absolute inset-0 transition-opacity duration-500"
                                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)' }}
                            ></div>

                            {/* Bottom-anchored Content Block */}
                            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end text-right z-10 h-full">
                                <div className="mt-auto">
                                    <h3 className="text-white text-3xl md:text-3xl lg:text-4xl font-black mb-1.5">{dept.title}</h3>
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
                        </Link>
                    ))}
                </div>

                {/* Mobile arrows and dots indicator */}
                <div className="flex md:hidden flex-col items-center justify-center gap-4 mt-6 dir-ltr">
                    <div className="flex items-center justify-center gap-6">
                        <button aria-label="הקודם" onClick={() => {
                            const carousel = scrollRef.current;
                            if (!carousel) return;
                            const firstChild = carousel.children[0];
                            const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
                            carousel.scrollBy({ left: -(firstChild.offsetWidth + gap), behavior: 'smooth' });
                        }} className="w-12 h-12 shrink-0 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95">
                            <ChevronLeft size={24} />
                        </button>
                        
                        <div className="flex items-center justify-center gap-1.5 dir-rtl">
                            {departments.map((_, i) => (
                                <div 
                                    key={i} 
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-[#2f4ea1] w-5' : 'bg-gray-300 w-2'}`}
                                />
                            ))}
                        </div>

                        <button aria-label="הבא" onClick={() => {
                            const carousel = scrollRef.current;
                            if (!carousel) return;
                            const firstChild = carousel.children[0];
                            const gap = parseFloat(window.getComputedStyle(carousel).gap) || 0;
                            carousel.scrollBy({ left: (firstChild.offsetWidth + gap), behavior: 'smooth' });
                        }} className="w-12 h-12 shrink-0 rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-all active:scale-95">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesCarousel;

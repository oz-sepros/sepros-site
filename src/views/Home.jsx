"use client";
import { useEffect, useRef, useState } from 'react'; 
import { trackEvent } from '../utils/analytics';
import { useRouter } from 'next/navigation';
import { ArrowUpLeft, Plus, Minus } from 'lucide-react';
import StatsCounter from '../components/StatsCounter';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import ServicesCarousel from '../components/ServicesCarousel';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ClientsMarquee from '../components/ClientsMarquee';
import PlatformsMarquee from '../components/PlatformsMarquee';
import FAQ from '../components/FAQ';

const Hero = () => {
    const router = useRouter();

    return (
        <div className="max-w-[1400px] mx-auto px-6 text-center z-10 flex-col flex justify-center flex-grow w-full relative pt-24 pb-8">
            <h1 className="text-5xl md:text-7xl lg:text-[70px] xl:text-[76px] mb-4 md:mb-10 mt-0 text-white font-semibold tracking-tight leading-[1.1]">
                <div className="reveal active">שיווק דיגיטלי</div>
                <div className="reveal active" style={{ transitionDelay: '0.2s' }}>שמביא תוצאות.</div>
            </h1>

            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-10 leading-relaxed font-normal">
                ספרוס משלבת דאטה, מדיה וקריאייטיב כדי להצמיח עסקים בעידן החדש. אנחנו לא רק מנהלים קמפיינים – אנחנו בונים את עתיד המותג שלכם.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button id="home_services_btn" onClick={() => { trackEvent('click_hero_services'); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="group bg-[#040b29] text-white px-8 md:px-10 py-4 md:py-5 font-bold text-base tracking-wide flex items-center justify-center gap-3 hover:bg-[#11205c] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(47,78,161,0.3)] transition-all duration-300 rounded-full shadow-lg">
                    השירותים שלנו <ArrowUpLeft size={18} className="group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
                </button>
                <button id="home_contact_btn" onClick={() => { trackEvent('click_hero_contact'); router.push('/contact'); }} className="bg-white text-[#0f173b] px-8 md:px-10 py-4 md:py-5 font-bold text-base tracking-wide hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-full shadow-lg">
                    בואו נדבר
                </button>
            </div>
        </div>
    );
};

const ClientsSection = () => {
    return (
        <div className="w-full mt-auto relative z-10 py-6 pb-12">
            <ClientsMarquee />
        </div>
    );
};





const homeFaqData = [
    { q: "איך אתם מודדים הצלחה בקמפיינים?", a: "אנחנו מתמקדים במדדי שורה תחתונה (ROI/ROAS). לכל לקוח אנחנו בונים דאשבורד נתונים בזמן אמת שמחבר בין השקעת המדיה לבין המכירות בפועל." },
    { q: "מה מייחד את ספרוס משאר הסוכנויות?", a: "השילוב בין טכנולוגיה לקריאייטיב. אנחנו סוכנות בוטיק, מה שאומר שכל לקוח מקבל יחס אישי מאנשי המקצוע הבכירים ביותר, ללא שכבות ניהול מיותרות." },
    { q: "תוך כמה זמן אפשר לראות תוצאות?", a: "ב-PPC תוצאות ראשוניות נראות תוך ימים, אך אופטימיזציה אמיתית דורשת 30-90 יום. ב-SEO התהליך לוקח בין 3 ל-6 חודשים לבניית סמכות משמעותית." },
    { q: "האם אתם עובדים עם עסקים קטנים?", a: "אנחנו מתמחים בעבודה עם מותגים בינוניים וגדולים או סטארטאפים בשלבי צמיחה (Scale) שיש להם תקציבי שיווק משמעותיים ויעדים שאפתניים." }
];

const Home = () => {
    return (
        <div className="pt-0 relative">
            {/* Subtle Figma-style dot pattern overlay */}
            <div className="absolute inset-0 z-[50] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#09102c 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
                opacity: 0.04
            }}></div>
            <section
                className="relative min-h-[100dvh] flex flex-col items-center justify-between overflow-hidden"
                style={{
                    background: `linear-gradient(
        180deg, #09102c 0%,
        #141c48 18%,
        #2b3991 38%,
        #4a50b5 52%,
        #6a6ac6 62%,
        #9084cb 70%,
        #a9a1d8 74%,
        #bfb8e3 76.5%,
        #d4cfed 78.5%,
        #e6e2f6 80%,
        #f3f1fb 81%,
        #ffffff 82%,
        #ffffff 100%
      )` }}
            >
                <Hero />
                <ClientsSection />
            </section>
            <ServicesCarousel />
            <PlatformsMarquee />
            <StatsCounter />
            <AboutSection />
            <FAQ data={homeFaqData} />
            <ContactForm />
        </div>
    );
};

export default Home;




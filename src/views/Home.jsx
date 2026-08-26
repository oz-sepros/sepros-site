"use client";
import Link from 'next/link';
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
                ספרוס היא סוכנות דיגיטל המשלבת דאטה, מדיה וקריאייטיב כדי להצמיח עסקים בעידן החדש. אנחנו לא רק מנהלים קמפיינים – אנחנו בונים את עתיד המותג שלכם.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button id="home_services_btn" onClick={() => { trackEvent('click_hero_services'); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }} className="group bg-[#040b29] text-white px-8 md:px-10 py-4 md:py-5 font-bold text-base tracking-wide flex items-center justify-center gap-3 hover:bg-[#11205c] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(47,78,161,0.3)] transition-all duration-300 rounded-full shadow-lg">
                    השירותים שלנו <ArrowUpLeft size={18} className="group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
                </button>
                <Link href="/contact" id="home_contact_btn" onClick={() => trackEvent('click_hero_contact')} className="bg-white text-[#0f173b] px-8 md:px-10 py-4 md:py-5 font-bold text-base tracking-wide hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 rounded-full shadow-lg inline-block">
                    בואו נדבר
                </Link>
            </div>
        </div>
    );
};

const ClientsSection = () => {
    return (
        <div className="w-full mt-auto relative z-10 py-3 pb-6">
            <ClientsMarquee />
        </div>
    );
};





const homeFaqData = [
    { q: "איך אתם מודדים הצלחה בקמפיינים?", a: "אנחנו מתמקדים במדדי שורה תחתונה (ROI/ROAS). לכל לקוח PPC אנחנו בונים דאשבורד נתונים שמתעדכן באופן אוטומטי ומחבר בין השקעת המדיה לבין המכירות בפועל." },
    { q: "מה מייחד את ספרוס משאר הסוכנויות?", a: "השילוב בין טכנולוגיה לקריאייטיב. אנחנו סוכנות בוטיק, מה שאומר שכל לקוח מקבל יחס אישי מאנשי המקצוע הבכירים ביותר, ללא שכבות ניהול מיותרות." },
    { q: "תוך כמה זמן אפשר לראות תוצאות?", a: "ב-PPC אפשר לראות נתונים ותוצאות ראשוניות כבר בימים הראשונים, כאשר תהליך האופטימיזציה משתפר ככל שמצטבר יותר דאטה. ב-SEO מדובר בתהליך ארוך טווח, וקצב ההתקדמות תלוי בין היתר במצב האתר, בתחרות ובנקודת הפתיחה." },
    { q: "האם אתם עובדים עם עסקים קטנים?", a: "אנחנו מתמחים בעבודה עם מותגים בינוניים וגדולים או סטארטאפים בשלבי צמיחה (Scale) שיש להם תקציבי שיווק משמעותיים ויעדים שאפתניים." }
];

const Home = () => {
    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.sepros.co.il/#organization",
        "name": "Sepros Digital",
        "url": "https://www.sepros.co.il",
        "logo": "https://www.sepros.co.il/logos/Logo.svg",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "0528910085",
            "contactType": "customer service",
            "email": "ofir@sepros.co.il",
            "availableLanguage": "Hebrew"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "עתיר ידע 16",
            "addressLocality": "כפר סבא",
            "addressCountry": "IL"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.sepros.co.il/#website",
        "url": "https://www.sepros.co.il",
        "name": "ספרוס - סוכנות דיגיטל | Sepros Digital",
        "publisher": {
            "@id": "https://www.sepros.co.il/#organization"
        }
    };

    return (
        <div className="pt-0 relative">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
            {/* Subtle Figma-style dot pattern overlay */}
            <div className="absolute inset-0 z-[50] pointer-events-none" style={{
                backgroundImage: 'radial-gradient(#09102c 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
                opacity: 0.04
            }}></div>
            <section
                className="relative min-h-[100svh] flex flex-col items-center justify-between overflow-hidden"
                style={{
                    background: `linear-gradient(
        180deg,   #09102c 0%,
  #0b1231 4%,
  #10183d 8%,
  #141f4d 12%,
  #1d2b68 18%,
  #26357f 24%,
  #31419a 30%,
  #4350af 36%,
  #5861bc 42%,
  #6d71c5 48%,
  #8280cb 54%,
  #9792d3 60%,
  #aca5dc 65%,
  #c1bae6 70%,
  #d5cfef 73%,
  #ebe8f8 75%,
  #f5f4fc 76.5%,
  #FFFFFF 78%,
  #FFFFFF 100%
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




"use client";
import { useRouter } from 'next/navigation';
import Reveal from '../components/Reveal';
import PageTransition from '../components/PageTransition';
import { Target, Share2, Palette, Code, Search, BarChart3, Lightbulb, ArrowUpLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ServicesPage = () => {
    const router = useRouter();

    const services = [
        { id: 'ppc', icon: Target, title: 'ניהול מדיה (PPC)', desc: 'קמפיינים מבוססי ROI בגוגל, פייסבוק, וטיקטוק.', image: '/services/dept_ppc.png' },
        { id: 'social', icon: Share2, title: 'סושיאל ו-UGC', desc: 'נוכחות דיגיטלית שיוצרת מעורבות שיא.', image: '/services/dept_social.png' },
        { id: 'design', icon: Palette, title: 'סטודיו וקריאייטיב', desc: 'עיצוב UI/UX פרימיום ושפה חזותית מנצחת.', image: '/services/dept_design.png' },
        { id: 'tech', icon: Code, title: 'בניית אתרים ופיתוח', desc: 'בניית מערכות ווב מורכבות המתקדמות ביותר.', image: '/services/dept_tech.png' },
        { id: 'seo', icon: Search, title: 'SEO & GEO', desc: 'אסטרטגיית תוכן שמביאה למקומות הראשונים.', image: '/services/dept_seo.png' },
        { id: 'strategy', icon: Lightbulb, title: 'אסטרטגיה שיווקית', desc: 'בניית מותג מנצח ותוכנית עבודה חדה.', image: '/services/dept_strategy.png' },
        { id: 'analytics', icon: BarChart3, title: 'אנליטיקס ודאטה', desc: 'הפיכת הררי מידע להחלטות שוות כסף.', image: '/services/dept_analytics.png' }
    ];

    const servicesSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "שירותי דיגיטל - ספרוס",
        "description": "סוכנות ספרוס מעניקה מעטפת שירותי דיגיטל 360: קידום אתרים, ניהול קמפיינים ממומנים, סושיאל ו-UGC, מיתוג ופיתוח אתרים.",
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
            "name": "מחלקות הדיגיטל של ספרוס",
            "itemListElement": services.map((srv, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": srv.title,
                    "description": srv.desc,
                    "url": `https://www.sepros.co.il/service/${srv.id}`
                },
                "position": index + 1
            }))
        }
    };

    return (
        <PageTransition>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
            <Reveal className="min-h-[85vh] bg-[#F5F7FA] pt-24 md:pt-32 pb-32 text-right">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 text-[#2f4ea1]">השירותים שלנו</h1>
                    <p className="text-gray-600 text-lg md:text-xl font-light mb-16 max-w-2xl ml-auto">
                        מעטפת מלאה של פתרונות דיגיטליים, ממוקדים בתוצאות עסקיות ובצמיחה חסרת פשרות.
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {services.map((srv, i) => {
                            const Icon = srv.icon;
                            return (
                                <div key={i} onClick={() => router.push(`/service/${srv.id}`)} className="bg-white rounded-[2rem] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl hover:shadow-[#2f4ea1]/10 transition-all border border-gray-100 flex flex-col h-full hover:-translate-y-2 duration-500">
                                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-[#09102c]/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                                        <img src={srv.image} alt={srv.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#2f4ea1] shadow-lg z-20 group-hover:scale-110 transition-transform">
                                            <Icon size={24} strokeWidth={2} />
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <div className="w-12 h-1 bg-[#2f4ea1] rounded-full mb-6"></div>
                                        <h2 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-[#2f4ea1] transition-colors">{srv.title}</h2>
                                        <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-grow">{srv.desc}</p>
                                        <div className="flex items-center text-[#2f4ea1] font-black text-base tracking-widest gap-2 group/btn mt-auto">
                                            גלו את המחלקה
                                            <ArrowUpLeft size={20} className="group-hover/btn:-translate-x-1 group-hover/btn:translate-y-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Reveal>
            <ContactForm />
        </PageTransition>
    );
};

export default ServicesPage;

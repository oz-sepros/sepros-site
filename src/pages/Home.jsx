import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, Share2, Palette, Code, Search, BarChart3, ArrowUpLeft, MousePointerClick, Plus, Minus } from 'lucide-react';
import StatsCounter from '../components/StatsCounter';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';

const Hero = () => {
    const containerRef = useRef(null);
    const cubeRefs = useRef([]);
    const requestRef = useRef();
    const navigate = useNavigate();

    const cubes = useRef([
        { size: 100, x: 50, y: 100, vx: 2.2, vy: 1.8, rot: 0, rotSpeed: 0.8, opacity: 0.2 },
        { size: 200, x: 400, y: 300, vx: -2.5, vy: 2.2, rot: 45, rotSpeed: -0.6, opacity: 0.3 },
        { size: 70, x: 800, y: 150, vx: 3.0, vy: -2.4, rot: 15, rotSpeed: 1.0, opacity: 0.5 },
        { size: 140, x: 200, y: 500, vx: -1.9, vy: -2.2, rot: 30, rotSpeed: 0.7, opacity: 0.25 },
        { size: 90, x: 800, y: 400, vx: 2.8, vy: 1.5, rot: 60, rotSpeed: -0.9, opacity: 0.15 }
    ]);

    const animate = () => {
        if (!containerRef.current) {
            requestRef.current = requestAnimationFrame(animate);
            return;
        }

        const { clientWidth, clientHeight } = containerRef.current;

        cubes.current.forEach((cube, i) => {
            cube.x += cube.vx;
            cube.y += cube.vy;
            cube.rot += cube.rotSpeed;

            if (cube.x <= 0) { cube.x = 0; cube.vx *= -1; }
            else if (cube.x + cube.size >= clientWidth) { cube.x = clientWidth - cube.size; cube.vx *= -1; }

            if (cube.y <= 0) { cube.y = 0; cube.vy *= -1; }
            else if (cube.y + cube.size >= clientHeight) { cube.y = clientHeight - cube.size; cube.vy *= -1; }

            if (cubeRefs.current[i]) {
                cubeRefs.current[i].style.transform = `translate(${cube.x}px, ${cube.y}px) rotate(${cube.rot}deg)`;
            }
        });

        requestRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
            <div className="bg-grid absolute inset-0 opacity-40"></div>

            {cubes.current.map((cube, i) => (
                <div
                    key={i}
                    ref={el => cubeRefs.current[i] = el}
                    className="k-square"
                    style={{ width: cube.size, height: cube.size, opacity: cube.opacity, transform: `translate(${cube.x}px, ${cube.y}px) rotate(${cube.rot}deg)` }}
                ></div>
            ))}

            <div className="max-w-[1400px] mx-auto px-6 text-center z-10 relative pointer-events-none">
                <h1 className="hero-title mb-6 md:mb-10 italic mt-8 md:mt-0">
                    <div className="reveal active">שיווק.</div>
                    <div className="outline-text reveal active" style={{ transitionDelay: '0.2s' }}>דיגיטלי.</div>
                    <div className="reveal active text-[#4e77fc]" style={{ transitionDelay: '0.4s' }}>מנצח.</div>
                </h1>

                <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-tight pointer-events-auto">
                    ספרוס משלבת דאטה, מדיה וקריאייטיב כדי להצמיח עסקים בעידן החדש. אנחנו לא רק מנהלים קמפיינים – אנחנו בונים את עתיד המותג שלכם.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
                    <button id="home_services_btn" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-[#4e77fc] text-white px-10 py-4 md:py-5 font-black text-sm tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all">
                        השירותים שלנו <ArrowUpLeft size={18} className="group-hover:-translate-x-1 group-hover:translate-y-1 transition-transform" />
                    </button>
                    <button id="home_contact_btn" onClick={() => navigate('/contact')} className="border border-white/20 text-white px-10 py-4 md:py-5 font-black text-sm tracking-widest hover:bg-white/5 transition-all">
                        בואו נדבר
                    </button>
                </div>
            </div>
        </section>
    );
};

const ClientsMarquee = () => {
    const clients = [
        "Wix", "Monday.com", "Fiverr", "Playtika", "IronSource",
        "Strauss", "Tnuva", "Bank Hapoalim", "Shufersal", "Clal Insurance"
    ];
    return (
        <div className="py-6 bg-black border-y border-white/5 overflow-hidden flex flex-col items-center relative dir-ltr">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
            <p className="text-[#4e77fc] uppercase tracking-[0.4em] text-[10px] mb-4 z-20 font-black">Trusted By Leaders</p>
            <div className="w-full overflow-x-auto hide-scrollbar sm:overflow-hidden touch-pan-x cursor-grab">
                <div className="marquee-track flex gap-10 md:gap-20 items-center px-8 md:pl-20">
                    {[...clients, ...clients, ...clients].map((client, i) => (
                        <div key={i} className="text-2xl md:text-3xl font-black text-white/20 hover:text-white transition-colors duration-300 uppercase tracking-widest cursor-default">
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ServiceCard = ({ icon: Icon, title, description, departmentId, index }) => {
    const cardRef = useRef(null);
    const navigate = useNavigate();

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const { left, top } = cardRef.current.getBoundingClientRect();
        cardRef.current.style.setProperty('--x', `${e.clientX - left}px`);
        cardRef.current.style.setProperty('--y', `${e.clientY - top}px`);
    };

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onClick={() => navigate(`/department/${departmentId}`)}
            className="spotlight-card bg-[#0a0a0a] border border-white/5 p-8 flex flex-col h-full cursor-pointer group hover:border-[#4e77fc]/50 transition-all duration-500 reveal active"
        >
            <div className="mb-8 flex justify-between items-start">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center group-hover:bg-[#4e77fc] transition-all duration-500 rounded-sm">
                    <Icon className="text-[#4e77fc] group-hover:text-white transition-colors" size={28} />
                </div>
                <span className="text-white/5 font-black text-5xl">0{index + 1}</span>
            </div>
            <h3 className="text-2xl font-black text-white mb-4 italic group-hover:text-[#4e77fc] transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm md:text-base font-light mb-8">{description}</p>
            <div className="mt-auto flex items-center gap-2 text-[#4e77fc] font-bold text-xs uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-all">
                קרא עוד <ArrowUpLeft size={16} />
            </div>
        </div>
    );
};

const Services = () => {
    const departments = [
        { id: 'ppc', icon: Target, title: 'PPC וביצועים', desc: 'קמפיינים מבוססי ROI בגוגל, פייסבוק, וטיקטוק. נהל צמיחה, לא תקציב.' },
        { id: 'social', icon: Share2, title: 'סושיאל וקריאייטיב', desc: 'ניהול נוכחות דיגיטלית שיוצרת באזז ושוברת את הגלילה עם מעורבות שיא.' },
        { id: 'design', icon: Palette, title: 'סטודיו ומיתוג', desc: 'עיצוב UI/UX פרימיום, שפה חזותית מנצחת וזהות תאגידית שאי אפשר להתעלם ממנה.' },
        { id: 'tech', icon: Code, title: 'פיתוח אתרים', desc: 'בניית מערכות ווב מורכבות בטכנולוגיות המתקדמות ביותר עם חוויה חלקה.' },
        { id: 'seo', icon: Search, title: 'קידום אורגני SEO', desc: 'Technical SEO ואסטרטגיית תוכן שמביאה אתכם למקומות הראשונים בגוגל.' },
        { id: 'analytics', icon: BarChart3, title: 'אנליטיקס ודאטה', desc: 'הפיכת הררי מידע להחלטות שוות כסף עם מדידה מדויקת וניתוח גולשים.' }
    ];

    return (
        <section className="py-20 md:py-32 bg-black border-t border-white/5" id="services">
            <div className="max-w-[1400px] mx-auto px-6 text-right">
                <div className="mb-16 md:mb-20">
                    <h2 className="text-[#4e77fc] font-black tracking-widest text-sm mb-4 reveal active">מה אנחנו עושים</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white italic leading-[1.1] reveal active">מחלקות שמתמחות <br /> <span className="outline-text">בניצחונות.</span></h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {departments.map((dept, idx) => (
                        <ServiceCard key={dept.id} {...dept} index={idx} departmentId={dept.id} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const PlatformsMarquee = () => {
    const platforms = [
        { name: "Google", color: "hover:text-[#4285F4]", svg: <path fill="currentColor" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /> },
        { name: "Meta", color: "hover:text-[#1877F2]", svg: <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.2 14.3c-2.1.8-4.6.4-6.1-1.1-1.5-1.5-1.9-4-1.1-6.1.8-2.1 3-3.4 5.2-3.4 2.2 0 4.4 1.3 5.2 3.4.8 2.1.4 4.6-1.1 6.1-1.5 1.5-4.1 1.9-6.1 1.1z" /> },
        { name: "TikTok", color: "hover:text-[#00f2fe]", svg: <path fill="currentColor" d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.61-.41 3.21-1.18 4.56-1.15 2.01-3.26 3.42-5.59 3.8-2.33.37-4.78-.11-6.72-1.39-1.94-1.28-3.34-3.34-3.8-5.67-.46-2.33.02-4.78 1.3-6.72 1.28-1.94 3.34-3.34 5.67-3.8 1.48-.29 3.01-.21 4.45.24v4.18c-.6-.23-1.25-.3-1.89-.2-1.03.17-1.98.71-2.67 1.51-.7.8-1.1 1.81-1.1 2.85 0 1.04.4 2.05 1.1 2.85.7.8 1.65 1.34 2.67 1.51.65.11 1.31.04 1.93-.2.62-.24 1.16-.65 1.56-1.18.4-.53.65-1.18.72-1.85.06-.66-.05-1.33-.31-1.93V.02z" /> },
        { name: "LinkedIn", color: "hover:text-[#0A66C2]", svg: <path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zM7.12 20.45H3.56V9h3.56v11.45z" /> },
        { name: "Programmatic", color: "hover:text-[#ff4b4b]", svg: <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-14a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z" /> }
    ];

    return (
        <div className="py-8 bg-[#020202] border-y border-white/5 overflow-hidden flex flex-col items-center relative dir-ltr">
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none"></div>

            <p className="text-[#4e77fc] uppercase tracking-[0.4em] text-[10px] mb-4 z-20 font-black">שותפי פרסום</p>

            <div className="w-full overflow-x-auto hide-scrollbar sm:overflow-hidden touch-pan-x cursor-grab">
                <div className="marquee-track flex gap-12 md:gap-24 items-center px-10 md:pl-24">
                    {[...platforms, ...platforms, ...platforms].map((plat, i) => (
                        <div key={i} title={plat.name} className={`group text-white/20 transition-colors duration-300 cursor-pointer ${plat.color}`}>
                            <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-16 md:h-16 group-hover:scale-110 transition-transform">
                                {plat.svg}
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const CaseStudiesSection = () => {
    const cases = [
        { name: "TechFlow SaaS", metric: "+350%", desc: "גידול בלידים B2B", fullDesc: "בניית משפך שיווקי בלינקדאין שהוביל להכפלת כמות הדמואים תוך רבעון.", color: "hover:border-[#4e77fc]", textHover: "group-hover:text-[#4e77fc]" },
        { name: "EcoSmart", metric: "-45%", desc: "ירידה ב-CPA", fullDesc: "אופטימיזציה חכמה לקמפיינים במטא, שימוש בדאטה למיקוד ויצירת קריאייטיב ממיר.", color: "hover:border-[#10b981]", textHover: "group-hover:text-[#10b981]" },
        { name: "StyleVibe", metric: "x4", desc: "החזר השקעה (ROAS)", fullDesc: "השקת מותג אופנה בטיקטוק עם קריאייטיב ויראלי שהעיף את המכירות בחנות.", color: "hover:border-[#f43f5e]", textHover: "group-hover:text-[#f43f5e]" },
        { name: "UrbanSpaces", metric: "1.2K+", desc: "לידים אורגניים בחודש", fullDesc: "שליטה מוחלטת בתוצאות החיפוש בנישות נדל״ן וחיסכון אדיר בתקציבי מדיה.", color: "hover:border-[#f59e0b]", textHover: "group-hover:text-[#f59e0b]" }
    ];

    return (
        <section className="py-20 md:py-32 bg-[#020202] relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 relative z-10 text-right">
                <Reveal>
                    <h2 className="text-[#4e77fc] font-black tracking-widest text-sm mb-4">סיפורי הצלחה</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white italic leading-[1.1] mb-16">תוצאות שמדברות <br /> <span className="outline-text">בעד עצמן.</span></h3>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 dir-rtl">
                    {cases.map((c, i) => (
                        <Reveal tabIndex="0" key={i} className={`group relative bg-[#0a0a0a] border border-white/5 p-5 md:p-6 rounded-xl cursor-pointer transition-all duration-500 overflow-hidden outline-none ${c.color}`}>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <h4 className={`text-xl font-black text-white ${c.textHover} transition-colors mb-3`}>{c.name}</h4>
                            <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter dir-ltr text-right group-hover:scale-105 origin-right transition-transform duration-500 whitespace-nowrap">{c.metric}</div>
                            <p className="text-gray-400 text-xs font-bold tracking-widest mb-3 border-b border-white/5 pb-3">{c.desc}</p>
                            <div className="flex items-center gap-1 text-[#4e77fc] text-[10px] font-bold opacity-70 group-hover:opacity-0 group-focus:opacity-0 transition-opacity absolute bottom-4 right-5 md:right-6">
                                <MousePointerClick size={12} /> לחצו או העבירו עכבר לפרטים
                            </div>
                            <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                                <div className="overflow-hidden">
                                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed pt-2">{c.fullDesc}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(-1);
    const questions = [
        { q: "איך אתם מודדים הצלחה בקמפיינים?", a: "אנחנו מתמקדים במדדי שורה תחתונה (ROI/ROAS). לכל לקוח אנחנו בונים דאשבורד נתונים בזמן אמת שמחבר בין השקעת המדיה לבין המכירות בפועל." },
        { q: "מה מייחד את ספרוס משאר הסוכנויות?", a: "השילוב בין טכנולוגיה לקריאייטיב. אנחנו סוכנות בוטיק, מה שאומר שכל לקוח מקבל יחס אישי מאנשי המקצוע הבכירים ביותר, ללא שכבות ניהול מיותרות." },
        { q: "תוך כמה זמן אפשר לראות תוצאות?", a: "ב-PPC תוצאות ראשוניות נראות תוך ימים, אך אופטימיזציה אמיתית דורשת 30-90 יום. ב-SEO התהליך לוקח בין 3 ל-6 חודשים לבניית סמכות משמעותית." },
        { q: "האם אתם עובדים עם עסקים קטנים?", a: "אנחנו מתמחים בעבודה עם מותגים בינוניים וגדולים או סטארטאפים בשלבי צמיחה (Scale) שיש להם תקציבי שיווק משמעותיים ויעדים שאפתניים." }
    ];

    return (
        <section className="py-20 md:py-32 bg-black border-t border-white/5">
            <div className="max-w-3xl mx-auto px-6 text-right">
                <h2 className="text-[#4e77fc] font-black tracking-widest text-sm mb-4">שאלות ותשובות</h2>
                <h3 className="text-4xl md:text-6xl font-black text-white italic mb-16">שאלות נפוצות</h3>
                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div key={i} className="faq-item reveal active">
                            <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full py-5 flex justify-between items-center text-right group">
                                <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-[#4e77fc]' : 'text-white group-hover:text-[#4e77fc]'}`}>{item.q}</span>
                                {openIndex === i ? <Minus className="text-[#4e77fc] shrink-0" /> : <Plus className="text-gray-500 shrink-0" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-60 pb-5' : 'max-h-0'}`}>
                                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Home = () => {
    return (
        <div className="pt-0">
            <Hero />
            <ClientsMarquee />
            <Services />
            <PlatformsMarquee />
            <CaseStudiesSection />
            <StatsCounter />
            <AboutSection />
            <FAQ />
            <ContactForm />
        </div>
    );
};

export default Home;

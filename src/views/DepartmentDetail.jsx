"use client";
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ExternalLink, CheckCircle2, ChevronLeft, ChevronRight, PlayCircle, ArrowLeft, ArrowUpLeft } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Reveal from '../components/Reveal';
import FAQ from '../components/FAQ';


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
    if (category === 'social') {
        return (
            <div className="mt-10 md:mt-16 w-full">
                <SocialCarousel />
            </div>
        );
    }

    if (category === 'ppc' || category === 'seo' || category === 'analytics') {
        const isPPC = category === 'ppc';
        return (
            <div className="mt-16 md:mt-24">
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

    if (category === 'tech' || category === 'design') {
        return (
            <div className="mt-16 md:mt-24">
                <h4 className="text-gray-900 font-black text-2xl md:text-3xl mb-8 border-r-4 border-[#2f4ea1] pr-4">{category === 'tech' ? 'פרויקטים נבחרים (Web)' : 'ספרי מותג ו-UI/UX'}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(i => (
                        <div key={i} className="bg-white border border-gray-100 shadow-sm p-4 group cursor-pointer relative overflow-hidden rounded-lg">
                            <div className="aspect-video bg-gray-100 overflow-hidden relative rounded-md">
                                <img src={category === 'tech' ? `https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800&sig=${i}` : `https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800&sig=${i}`} alt="Project" loading="lazy" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-[#2f4ea1]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink size={32} className="text-white mb-2" />
                                    <span className="text-white font-bold tracking-widest text-sm">צפו בפרויקט</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
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
            title: "PPC וביצועים", 
            long: "אנחנו מנהלים תקציבי ענק באופטימיזציה מקסימלית. הגישה שלנו ל-PPC היא מדעית: ניתוח קהלים, שיפור יחס המרה ושימוש בכלי AI לניהול בידים.", 
            services: ["חיפוש ורשת המדיה בגוגל", "ניהול מטא (פייסבוק/אינסטגרם)", "קמפיינים בטיקטוק ולינקדאין", "רימרקטינג דינמי"],
            faqs: [
                { q: "תוך כמה זמן נראה תוצאות מהקמפיינים?", a: "קמפיינים ממומנים מתחילים להביא תנועה באופן מיידי עם עלייתם לאוויר. בדרך כלל לוקח 2-4 שבועות של איסוף נתונים ואופטימיזציה עד שמגיעים ליציבות וליחסי המרה אופטימליים, תלוי בתקציב, במתחרים ובתחום." },
                { q: "באילו פלטפורמות אתם מנהלים קמפיינים?", a: "אנו מנהלים קמפיינים במגוון רחב של פלטפורמות בהתאם לקהל היעד שלכם: גוגל (חיפוש, מדיה, שופינג, יוטיוב), מטא (פייסבוק ואינסטגרם), טיקטוק, לינקדאין ועוד. לכל פלטפורמה אסטרטגיה מותאמת." },
                { q: "האם אתם עובדים עם עסקים B2B או B2C?", a: "שנינו! יש לנו ניסיון מוכח ועשיר גם עם חברות B2B מורכבות שמחפשות לידים איכותיים (למשל טכנולוגיה, שירותים עסקיים ותעשייה) וגם עם מותגי B2C שממוקדים במכירות איקומרס ויצירת מודעות למותג." }
            ]
        },
        social: { 
            title: "סושיאל דומיננטי וקריאייטיב מדויק", 
            long: "הסיפור שלכם צריך לפגוש את הלקוחות בדיוק במקום שבו הם נמצאים. אנחנו לוקחים מותגים והופכים אותם לתופעת רשת בעזרת שפה ויזואלית ייחודית, הפקות וידאו ויראליות בסגנון Shorts ו-TikTok, ואסטרטגיית סושיאל שעוצרת את הגלילה (Scroll-stoppers). העידן החדש דורש תוכן מהיר, חד, ומבוסס דאטה.", 
            services: ["הפקת Reels ו-TikTok", "קריאייטיב וצילום מוצרים", "פיתוח שפה מותגית אותנטית", "שיווק משפיענים"],
            faqs: [
                { q: "מה ההבדל בין ניהול סושיאל רגיל למה שאתם עושים?", a: "אנחנו לא רק מעלים פוסטים עיצוביים. אנחנו מייצרים שפה, אסטרטגיה ותוכן וידאו קצר (Reels/TikTok) שמבוסס על טרנדים והבנה עמוקה של האלגוריתמים, במטרה להגיע לוויראליות אמיתית ולהמיר צופים ללקוחות." },
                { q: "האם אתם מפיקים את סרטוני הוידאו והרילסים?", a: "בהחלט. יש לנו צוות קריאייטיב וצילום שדואג להכל מהקצה לקצה: החל מרמת הקונספט, כתיבת התסריט, יום הצילומים, עריכה ויצירת חומרים שנועדו להמיר (ראיונות רחוב, לפני/אחרי, מיני-וולוגים ועוד)." },
                { q: "כמה פוסטים יעלו בחודש?", a: "אנחנו מתאימים את תדירות ההעלאה לאסטרטגיה הנבחרת ולתקציב. המיקוד שלנו הוא על \"איכות שמביאה תוצאות\" ולא על כיסוי משבצות בגריד. נבנה תוכנית שתבטיח נוכחות חזקה ויציבה בדיגיטל." }
            ]
        },
        design: { 
            title: "סטודיו ו-UX/UI", 
            long: "עיצוב פרימיום הוא לא מותרות – הוא הכרח. אנחנו מאפיינים ומעצבים ממשקים שמרגישים טבעיים למשתמש ומייצרים אמון מיידי במותג.", 
            services: ["מחקר ואסטרטגיית UX", "עיצוב UI מודרני", "זהות ומיתוג תאגידי", "בניית שפה עיצובית"],
            faqs: [
                { q: "מה כולל תהליך עיצוב UI/UX אצלכם?", a: "התהליך מתחיל במחקר ואפיון (Wireframes) שממוקדים במשתמש, ממשיך בבניית קונספט עיצובי ושפה גרפית, ולאחר מכן בניית עיצוב מסכים מלא המותאם לחווית משתמש מושלמת, עד לרמת הפרוטוטייפ האינטראקטיבי." },
                { q: "האם אתם גם בונים אתרים או רק מעצבים?", a: "הסטודיו שלנו מספק פתרון מלא. מחלקת ה-UX/UI מעצבת את הממשק, ומחלקת הפיתוח שלנו לוקחת את העיצוב ומפתחת אותו להיות אתר משוכלל ומהיר בדיוק לפיקסל." },
                { q: "אפשר להזמין מיתוג מחדש (Re-branding)?", a: "כן. אנחנו יוצרים זהות מותגית שלמה הכוללת עיצוב לוגו, פלטת צבעים, טיפוגרפיה ושפה חזותית מקיפה שתבדל אתכם מהמתחרים ותשדר פרימיום מכל כיוון." }
            ]
        },
        tech: { 
            title: "פיתוח אתרים", 
            long: "האתר הוא הבית שלכם בדיגיטל. אנחנו בונים אתרים בטכנולוגיות מתקדמות כדי להבטיח מהירות שיא, קידום אורגני וחווית ניהול נוחה.", 
            services: ["אפליקציות React/Next.js", "איקומרס מתקדם", "חיבורי API", "אבטחה ותחזוקה"],
            faqs: [
                { q: "באיזה טכנולוגיות אתם מפתחים אתרים?", a: "אנחנו משתמשים בטכנולוגיות החדישות ביותר בשוק כדי לעמוד בסטנדרטים המחמירים של מהירות ואבטחה. פיתוחי ה-Web שלנו מתבססים בעיקר על React, Next.js, Node.js ומערכות מתקדמות אחרות, או כמערכות קוד פתוח בהתאמה אישית." },
                { q: "האם האתרים מותאמים לקידום אורגני (SEO)?", a: "בפירוש כן. כל אתר נבנה מראש בצורה מותאמת וקפדנית ל-SEO: מהירות טעינה גבוהה, היררכיית קוד סמנטית נכונה ושליטה בנתוני Meta, כך שגוגל יוכל לאנדקס אותו מעולה." },
                { q: "מה לגבי תחזוקה ואבטחה כשהאתר באוויר?", a: "אנו מציעים שירותי אחסון מהירים בענן, ניטור פעילות ותחזוקה שוטפת. נספק עדכוני אבטחה, גיבויים והדרכה מלאה באשר לניהול האתר מרגע שעלה לאוויר." }
            ]
        },
        seo: { 
            title: "קידום אורגני (SEO)", 
            long: "להיות בראש תוצאות החיפוש זו ריצה למרחקים ארוכים. אנחנו משלבים SEO טכני עמוק עם אסטרטגיית תוכן שבונה סמכות מול גוגל.", 
            services: ["בדיקת SEO טכנית", "מחקר מילות מפתח", "בניית פרופיל קישורים", "אסטרטגיית תוכן"],
            faqs: [
                { q: "תוך כמה זמן רואים תוצאות בקידום אורגני?", a: "תהליך SEO לרוב מתחיל להראות מגמת שיפור במיקומים ותנועה משמעותית בתוך 3 עד 6 חודשים של עבודה רציפה. המטרה היא לבנות עליונות על המתחרים יציבה לאורך זמן." },
                { q: "אתם כותבים את התוכן עבור תהליך הקידום?", a: "כן. במסגרת העבודה אנו נעזרים באנשי תוכן מקצועיים שזה מכבר מתמחים בכתיבת מאמרים ומדריכים מוכווני SEO, ונושא התוכן הוא חלק בלתי נפרד מהאסטרטגיה שאנו בונים יחד איתכם." },
                { q: "האם זה עדיף על פני קידום ממומן?", a: "הקידום הממומן מייצר תוצאות בטווח המיידי כל עוד שופכים תקציב כסף, בעוד הקידום האורגני לוקח זמן אך מניב זרם יציב של תנועה והמרות באיכות גבוהה יותר, גם כאשר לא מחלקים כספים לפרסום באופן ישיר מדי יום." }
            ]
        },
        analytics: { 
            title: "אנליטיקס ודאטה", 
            long: "בלי מדידה אין שיפור. אנחנו עוזרים לכם להבין בדיוק מה קורה באתר, מאיפה מגיעים הלקוחות הרווחיים ואיך לייעל את התקציב.", 
            services: ["הטמעת GA4 ו-Tag Manager", "דאשבורדים בזמן אמת", "מעקב המרות מתקדם", "BigQuery"],
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

"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Plus, Minus } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import JobApplicationForm from '../components/JobApplicationForm';
import Reveal from '../components/Reveal';

const Careers = () => {
    const [expandedJob, setExpandedJob] = useState(null);
    const router = useRouter();

    const jobs = [
        {
            title: "מנהל/ת תיקי לקוחות (Account Manager)",
            type: "משרה מלאה | היברידי",
            labels: ["ניהול לקוחות", "אסטרטגיה"],
            shortDesc: "ניהול קשר שוטף עם לקוחות אסטרטגיים, הבנה בניתוח נתונים והובלת תהליכי שיווק מקצה לקצה.",
            fullDesc: "חיפוש אחר מנהל/ת תיקי לקוחות עם ניסיון בסוכנויות דיגיטל. התפקיד כולל בניית אסטרטגיות דיגיטל, ניהול תקציבים אל מול הלקוח ועבודה מול צוותי הביצוע (PPC, קריאייטיב ופיתוח)."
        },
        {
            title: "מנהל/ת קמפיינים (PPC Campaign Manager)",
            type: "משרה מלאה | היברידי",
            labels: ["שיווק", "קמפיינים ממומנים"],
            shortDesc: "ניהול תקציבי ענק בגוגל, מטא, וטיקטוק. הבנה עמוקה באופטימיזציה, ROAS וחיבור לדאטה.",
            fullDesc: "נינג'ת ביצועים! דרוש/ה קמפיינר/ית עם ניסיון של שנתיים לפחות בניהול תקציבי ענק במערכות הפרסום. עבודה יומיומית על קמפיינים בינלאומיים, ביצוע A/B טסטינג, והבאת תוצאות מקסימליות ללקוחות הפרימיום שלנו."
        },
        {
            title: "מפתח/ת אתרים פולסטאק (Full-Stack Web Developer)",
            type: "משרה מלאה | היברידי",
            labels: ["פיתוח", "React", "Node.js"],
            shortDesc: "פיתוח אפליקציות ווב ואתרי סחר ברמות הגבוהות ביותר תוך שימוש בטכנולוגיות החדישות בשוק.",
            fullDesc: "דרוש/ה מפתח/ת תותח/ית עם ניסיון מוכח ב-React / Next.js לפיתוח צד לקוח ו-Node.js בצד השרת. התפקיד כולל בניית פרויקטים מאפס, אופטימיזציה למהירות, והטמעת חיבורי API מורכבים. הבנה ב-SEO טכני - יתרון משמעותי."
        },
        {
            title: "מומחה/ית קידום אורגני (SEO Specialist)",
            type: "משרה מלאה | היברידי",
            labels: ["SEO", "שיווק"],
            shortDesc: "הובלת אסטרטגיות אורגניות, בניית סמכות, מילות מפתח, ו-SEO טכני מלא עבור מותגים מובילים.",
            fullDesc: "חיפוש אחר איש/אשת SEO שחיים ונושמים את האלגוריתם של גוגל! עבודה במחקר מילות מפתח עמוק, אופטימיזציה של תוכן ומבנה אתרים, בניית פרופיל קישורים אסטרטגי, וליווי צוותי הפיתוח בהקשרי SEO הטכני. ניסיון מוכח עם Screaming Frog ו-Ahrefs חובה."
        },
        {
            title: "מעצב/ת דיגיטל וחוויות משתמש (Digital UI/UX Designer)",
            type: "משרה מלאה | משרדי החברה",
            labels: ["עיצוב", "UX/UI"],
            shortDesc: "אפיון ממשקים מורכבים, יצירת חוויות דיגיטליות מתקדמות ואהבה גדולה לפיקסלים מדויקים.",
            fullDesc: "מחפשים מעצב/ת שמבינים בדיגיטל בצורה מקיפה, עם תיק עבודות עוצר נשימה ב-Figma. התפקיד דורש עבודה צמודה עם צוות הפיתוח, אפיון ממשקי משתמש מבוססי דאטה (UX מונחה המרות), ויצירת גרפיקה וקראייטיב מעיף לקמפיינים שיווקיים."
        },
        {
            title: "מנהל/ת סושיאל וקריאייטיב (Social Media Manager)",
            type: "משרה מלאה | משרדי החברה",
            labels: ["סושיאל", "קריאייטיב"],
            shortDesc: "בניית סיפורי מותג ונוכחות ויראלית ברשתות החברתיות: רעיונאות, הפקה והוצאה לפועל.",
            fullDesc: "יש לכם יכולת לייצר טרנדים ולא רק לעקוב אחריהם? אנחנו מחפשים מנהל/ת רשתות חברתיות לניהול עמודי הטיקטוק והאינסטגרם של הלקוחות הכי נחשקים שלנו. נדרשת יכולת יצירת סטריבורד, זיהוי מגמות, קופירייטינג שנון, ורצון לייצר ויראליות."
        },
        {
            title: "אנליסט/ית דאטה שיווקי (Marketing Data Analyst)",
            type: "משרה מלאה | היברידי או מרחוק",
            labels: ["דאטה", "אנליטיקה"],
            shortDesc: "הפיכת הרים של מספרים לתובנות מדויקות ופעולות מחוללות הכנסה לצוותי המדיה.",
            fullDesc: "דרוש/ה אשף/ית נתונים! התפקיד מתמקד בניתוח ביצועי קמפיינים מבוססי מידע, איתור החזר השקעה (ROI), בניית דשבורדים בזמן אמת ב-Looker Studio או Power BI, וחיבור למערכות ה-CRM השונות. ניסיון עם בניית דוחות אנליטיקס קריטי לתפקיד."
        }
    ];

    return (
        <>
            <Reveal className="min-h-[85vh] bg-white pt-48 md:pt-56 pb-32 text-right">
                <div className="max-w-[1000px] mx-auto px-6">
                    <h1 className="text-5xl md:text-7xl font-black uppercase mb-6 text-[#2f4ea1]">קריירה בספרוס</h1>
                    <p className="text-gray-600 text-lg md:text-xl font-light mb-16 max-w-2xl ml-auto">
                        מחפשים לעבוד בסביבה טכנולוגית, צעירה ומוכוונת תוצאות? אנחנו תמיד מחפשים טאלנטים שיצטרפו לצוות המנצח שלנו.
                    </p>

                    <div className="space-y-6">
                        {jobs.map((job, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-200 p-6 rounded-xl hover:border-[#2f4ea1]/30 hover:shadow-md transition-all cursor-pointer group shadow-sm" onClick={() => setExpandedJob(expandedJob === i ? null : i)}>
                                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-[#2f4ea1] transition-colors mb-3">{job.title}</h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-[#2f4ea1] text-[10px] font-bold tracking-widest bg-[#2f4ea1]/10 px-3 py-1 rounded-sm">{job.type}</span>
                                            {job.labels?.map((label, idx) => (
                                                <span key={idx} className="text-gray-500 text-[10px] font-bold tracking-widest border border-gray-200 px-3 py-1 rounded-sm bg-white">{label}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-2 md:mt-0">
                                        {expandedJob === i ? <Minus className="text-[#2f4ea1] shrink-0" /> : <Plus className="text-gray-400 shrink-0" />}
                                    </div>
                                </div>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedJob === i ? 'max-h-[1500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.fullDesc}</p>
                                    <h5 className="text-gray-900 font-bold text-sm mb-2">דרישות סף:</h5>
                                    <ul className="list-disc pl-4 pr-6 text-gray-500 text-sm space-y-1 mb-6">
                                        <li>ניסיון מוכח של שנתיים לפחות בתפקיד רלוונטי.</li>
                                        <li>הבנה מעמיקה בעולמות השיווק והדיגיטל.</li>
                                        <li>יחסי אנוש מעולים, סדר, ארגון ויכולת עמידה ביעדים.</li>
                                    </ul>
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <JobApplicationForm jobTitle={job.title} onClose={() => setExpandedJob(null)} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>
            <ContactForm />
        </>
    );
};

export default Careers;

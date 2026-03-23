import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import JobApplicationForm from '../components/JobApplicationForm';
import Reveal from '../components/Reveal';

const Careers = () => {
    const [expandedJob, setExpandedJob] = useState(null);
    const navigate = useNavigate();

    const jobs = [
        {
            title: "מנהל/ת תיקי לקוחות (Account Manager)",
            type: "משרה מלאה | היברידי",
            shortDesc: "ניהול קשר שוטף עם לקוחות אסטרטגיים, הבנה בניתוח נתונים והובלת תהליכי שיווק מקצה לקצה.",
            fullDesc: "חיפוש אחר מנהל/ת תיקי לקוחות עם ניסיון בסוכנויות דיגיטל. התפקיד כולל בניית אסטרטגיות דיגיטל, ניהול תקציבים אל מול הלקוח ועבודה מול צוותי הביצוע (PPC, קריאייטיב ופיתוח)."
        },
        {
            title: "מנהל/ת קמפיינים (PPC Campaign Manager)",
            type: "משרה מלאה | היברידי",
            shortDesc: "ניהול תקציבי ענק בגוגל ופייסבוק. הבנה עמוקה באופטימיזציה, ROAS וחיבור לדאטה.",
            fullDesc: "נינג'ת ביצועים! דרוש/ה קמפיינר/ית עם ניסיון של שנתיים לפחות בניהול תקציבי ענק. עבודה יומיומית על קמפיינים בינלאומיים, ביצוע A/B טסטינג למודעות וקהלים, והבאת תוצאות מקסימליות."
        },
        {
            title: "מעצב/ת חווית משתמש (UX/UI Designer)",
            type: "משרה מלאה | משרדי החברה",
            shortDesc: "אפיון מערכות מורכבות, יצירת שפות עיצוביות ואהבה לפיקסלים מדויקים.",
            fullDesc: "מחפשים מעצב/ת עם תיק עבודות עוצר נשימה. שליטה אבסולוטית ב-Figma. התפקיד דורש עבודה צמודה עם צוות הפיתוח, אפיון ממשקי משתמש מבוססי דאטה ועיצוב ברמת הפרימיום הגבוהה ביותר."
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
                                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-black text-gray-900 group-hover:text-[#2f4ea1] transition-colors mb-2">{job.title}</h3>
                                        <span className="text-[#2f4ea1] text-[10px] font-bold tracking-widest bg-[#2f4ea1]/10 px-3 py-1 rounded-sm">{job.type}</span>
                                    </div>
                                    <div>
                                        {expandedJob === i ? <Minus className="text-[#2f4ea1] shrink-0" /> : <Plus className="text-gray-400 shrink-0" />}
                                    </div>
                                </div>

                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedJob === i ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{job.fullDesc}</p>
                                    <h5 className="text-gray-900 font-bold text-sm mb-2">דרישות סף:</h5>
                                    <ul className="list-disc pl-4 pr-6 text-gray-500 text-sm space-y-1 mb-6">
                                        <li>ניסיון מוכח של שנתיים לפחות בתפקיד רלוונטי.</li>
                                        <li>הבנה מעמיקה באנליטיקס וניתוח נתונים.</li>
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

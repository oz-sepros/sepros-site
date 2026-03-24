"use client";
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';

// Complete mock data for the 4 articles
const articleData = {
    'technical-seo-2026': {
        title: "המדריך המלא ל-SEO טכני ב-2026",
        date: "15 מרץ, 2026",
        tag: "SEO",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        content: `
            <h2>הקדמה ל-SEO טכני בעידן ה-AI</h2>
            <p>שנת 2026 מביאה איתה אתגרים חדשים בעולם קידום האתרים. מנועי החיפוש החכמים של היום לא מסתפקים רק בתוכן איכותי, אלא דורשים תשתית טכנית חסרת פשרות. במאמר זה נסקור את שלושת עמודי התווך של ה-SEO הטכני המודרני.</p>
            
            <h3>1. Core Web Vitals כיסוד להצלחה</h3>
            <p>כבר בשנת 2021 גוגל הכריזה שחוויית המשתמש היא גורם דירוג ישיר. היום, מדדי ה-Core Web Vitals קריטיים יותר מאי פעם. אתם חייבים לוודא שזמן טעינת התוכן המרכזי (LCP) עומד על פחות מ-2.5 שניות, שהאתר מגיב למגע הראשון של המשתמש מיידית (FID), ושאין תזוזות פתאומיות של אלמנטים על המסך (CLS).</p>
            
            <h3>2. חשיבות הסריקה והאינדוקס (Crawl Budget)</h3>
            <p>מנועי החיפוש מקצים כמות מוגבלת של משאבים לסריקת האתר שלכם. אם האתר מכיל אלפי עמודים ריקים, שגיאות 404, או שרשראות הפניה (Redirect Chains) אינסופיות - אתם מבזבזים את תקציב הסריקה שלכם. פנקטים ואינדקסים, מפות אתר מעודכנות, ושימוש חכם ברובוטס (robots.txt) הם בגדר חובה לחנויות איקומרס ולאתרי תוכן גדולים.</p>
            
            <h3>3. אופטימיזציה לחיפוש AI ומענה ישיר</h3>
            <p>עם כניסתם של עוזרי AI מתקדמים (כמו ChatGPT ו-Claude) המשתלבים במנועי החיפוש, חשוב לספק תוכן מובנה שמכונות יכולות להבין בקלות. שימוש נרחב ב-Schema Markup (כמו שאלות ותשובות, מוצרים ודירוגים) מעלה משמעותית את הסיכוי שהאתר שלכם יוצג כ-"תשובה ישירה" (Zero-Click Searches) מבלי שהגולש יצטרך להיכנס לאתר.</p>
            
            <h2>סיכום או: כלים למדידה נכונה</h2>
            <p>כדי להתחיל את תהליך האופטימיזציה, אנו ממליצים בספרוס קודם כל לבצע ביקורת (Audit) דרך Google Search Console מול כלי צד שלישי כמו Screaming Frog לזיהוי שגיאות תשתית. רק כך תוכלו לבנות תוכנית עבודה ולשפר באופן שיטתי את מעמד האתר שלכם בתוצאות החיפוש.</p>
        `
    },
    'double-your-roas': {
        title: "איך להכפיל את ה-ROAS בקמפיינים בגוגל",
        date: "2 מרץ, 2026",
        tag: "PPC",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        content: `
            <h2>ROAS: הרבה מעבר לחלוקת תקציב רגילה</h2>
            <p>אם אתם מנהלים עסק איקומרס, המדד החשוב ביותר להצלחה שלכם הוא החזר ההשקעה (Return On Ad Spend - ROAS). רוב העסקים נתקעים על יחס של 1:2 או 1:3 בגלל טעויות בסיסיות בהגדרות הקמפיינים. הנה הסודות של הסוכנויות הגדולות כדי להקפיץ את המספרים האלו.</p>
            
            <h3>בידינג מבוסס ערך (Value-Based Bidding)</h3>
            <p>מערכת הלמידה המלאכותית של גוגל השתפרה פלאים. במקום להגיד לגוגל "תביא לי המרה בכמה שפחות כסף" (CPA), התחילו להגיד לו "תביא לי לקוחות שיקנו בעגלה מלאה יותר". אם תחברו נכון את הפיקסלים שלכם למערכת ותשדרו את שווי הרכישה, גוגל תדע למצוא את המשתמשים שהסבירות לקנייה גדולה שלהם גבוהה יותר.</p>
            
            <h3>הפרד ומשול – קמפיינים חכמים וחלוקת תקציב מדויקת</h3>
            <p>אל תכניסו את כל המוצרים או השירותים תחת קמפיין Performance Max אחד ותקוו לטוב. חלקו את הקטלוג שלכם: מוצרי הדגל ו"מושכי הקהל" צריכים לקבל קמפיין עם תקציב נפרד ו-ROAS מטרה אגרסיבי, בעוד שמוצרים חדשים צריכים סביבת ניסוי משלהם. חלוקה חכמה מונעת מהמערכת לבזבז כסף על מוצרים לא ממירים.</p>
            
            <h3>אופטימיזציה של דפי הנחיתה והעגלות</h3>
            <p>לקוח הגיע מהמודעה? נהדר! אבל אם הוא נוטש בעגלה כי חסרה אפשרות תשלום נוחה (Apple Pay / Bit) או שהמשלוח התגלה כיקר מדי, זרקתם כסף לפח. שיפור יחס ההמרה בעמוד הוא הדרך הכי זולה ויעילה להכפיל את ה-ROAS מבלי להעלות תקציב פרסום אפילו בשקל.</p>
        `
    },
    'tiktok-or-instagram': {
        title: "טיקטוק או אינסטגרם? איפה הקהל שלכם נמצא",
        date: "28 פברואר, 2026",
        tag: "סושיאל",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1200",
        content: `
            <h2>הקרב הגדול על תשומת הלב</h2>
            <p>השאלה הכי נפוצה שאנחנו שומעים מלקוחות שרוצים לבנות מותג מאפס היא: איפה לשים את הכסף והאנרגיה? באינסטגרם שכולם כבר מכירים, או בטיקטוק שמושכת מיליוני צפיות אורגניות? התשובה, כמו תמיד, תלויה בקהל היעד שלכם ובסוג התוכן שאתם מסוגלים לייצר.</p>
            
            <h3>הגיל ואופי החשיפה</h3>
            <p>טיקטוק היא כבר ממזמן לא רק רשת של ילדים שרוקדים, אלא מנוע חיפוש עצום עבור דור ה-Z ומיליניאלז צעירים. האלגוריתם שם בנוי בראש ובראשונה על Discovery - גילוי תוכן חדש. גם בלי עוקב אחד תוכלו להגיע למיליוני צפיות. אינסטגרם לעומת זאת, למרות ה-Reels, משמשת יותר כ"ארכיון מותג" וככלי לשימור קשר עם קהל קיים. באינסטגרם, הגולש רוצה לראות אסתטיקה, כיוון צילומי ברור, ומעטפת שמריחה מיוקרה.</p>
            
            <h3>איזה סוג תוכן עובד?</h3>
            <ul>
                <li><strong>טיקטוק:</strong> דורשת אותנטיות. המצלמה רועדת, בלי תאורת סטודיו, מישהו יושב באוטו ומדבר למצלמה. זה נגיש, אמיתי, ומייצר תחושת הזדהות עמוקה. אם התוכן נראה מופק ופרסומי מדי - הגולש ידפדף תוך שנייה.</li>
                <li><strong>אינסטגרם:</strong> סלחנית יותר לפוסטים ויזואליים, סטטיים וסטוריז מעוצבים. הגולשים אוהבים שם את הפילטרים והלייף-סטייל. קהל פרימיום נוטה לסרוק לקוחות דרך עמוד האינסטגרם כאמצעי הוכחה חברתית.</li>
            </ul>
            
            <h3>שורה תחתונה: פנקטו נכון</h3>
            <p>במקום לבחור, אנחנו בספרוס מאמינים באסטרטגיית "Cross-Posting" חכמה. לוקחים סרטון אותנטי שמצטלם לטיקטוק, עורכים אותו בצורה מעט יותר קצבית אלגנטית, ומעלים כ-Reels לאינסטגרם, תוך שמירה על גריד סטטי מדויק שמשלים את התמונה לפרופיל מקצועי.</p>
        `
    },
    'ux-color-psychology': {
        title: "עיצוב UX שמוכר: פסיכולוגיה של צבעים וממשק",
        date: "10 פברואר, 2026",
        tag: "UX/UI",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
        content: `
            <h2>יותר מסתם יפה: ממשק משתמש כמכונת מכירות</h2>
            <p>כשאנחנו בונים אתר, המטרה הראשונה היא לא רק שהוא ייראה טוב - אלא שהוא יוביל את הגולש למטרה העסקית שלנו: השארת ליד, קנייה, או יצירת קשר. מעצב UI/UX טוב הוא למעשה פסיכולוג התנהגותי דיגיטלי.</p>
            
            <h3>פסיכולוגיה של צבע בכפתורי הנעה לפעולה (CTA)</h3>
            <p>בחירת הצבעים לאתר משדרת מסר תת-הכרתי מיידי: כחול משדר אמינות ורוגע (מעולה לחברות כספים וביטוחים), אדום משדר דחיפות ותשוקה (מעולה למבצעי טיסות ואיקומרס), וירוק משדר צמיחה ושלווה (מתאים למוצרי טבע ובריאות).</p>
            <p>אבל! הכלל הכי חשוב הוא קונטרסט (ניגודיות). אין "צבע שממיר הכי טוב". אם האתר שלכם כחול, כפתור אדום יבלוט וימיר טוב יותר כי הוא שובר את השגרה הוויזואלית ומושך את עין הגולש כמו מגנט.</p>
            
            <h3>חוק פיטס (Fitts's Law): גודל וקרבה</h3>
            <p>חוק בסיסי בחוויית משתמש אומר שהזמן שייקח לאדם לנוע למטרה מסוימת (כמו לחיצה על כפתור התשלום) תלוי בגודל המטרה ובמרחק אליה. אל תחביאו את כפתור היצירת קשר בתפריט ניווט קטן! ודאו שכפתורי הרכישה או קבלת ההצעה יהיו גדולים, ברורים, ובטווח האגודל בעת גלישה בטלפונים הניידים.</p>
            
            <h3>ארכיטקטורת מידע וצמצום החיכוך המחשבתי</h3>
            <p>גולש מבולבל לא קונה. קצצו את התפריטים שלכם. חלקו טפסים ארוכים ל-3 שלבים קצרים. ככל שתפחיתו את העומס הקוגניטיבי על הגולש, כך הוא יוכל לזרום מהר יותר בתהליך המכירה שאנחנו, כבנאי-חוויות, מתווים לו מהרגע שנחת באתר.</p>
        `
    }
};

const ArticlePage = () => {
    const { slug } = useParams();
    const router = useRouter();
    const article = articleData[slug];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!article) {
        return (
            <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center text-gray-900">
                <h1 className="text-4xl font-black mb-4">מאמר לא נמצא</h1>
                <button onClick={() => router.push('/articles')} className="text-[#2f4ea1] hover:underline">חזרה לבלוג</button>
            </div>
        );
    }

    return (
        <PageTransition>
            <article className="min-h-screen bg-[#F5F7FA] pt-32 md:pt-40 pb-20 px-6">
                <div className="max-w-3xl mx-auto flex flex-col">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm font-bold mb-8 self-end">
                        <span className="text-gray-900">{article.title}</span>
                        <ChevronRight size={14} />
                        <button onClick={() => router.push('/articles')} className="hover:text-[#2f4ea1] transition-colors">מאמרים</button>
                        <ChevronRight size={14} />
                        <button onClick={() => router.push('/')} className="hover:text-[#2f4ea1] transition-colors">ראשי</button>
                    </div>

                    <div className="text-right mb-12">
                        <div className="inline-block bg-[#2f4ea1]/10 text-[#2f4ea1] text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                            {article.tag}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                            {article.title}
                        </h1>
                        <p className="text-gray-500 font-bold tracking-widest">{article.date}</p>
                    </div>

                    <div className="w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden mb-12 relative shadow-sm">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Article Content injected as HTML */}
                    <div 
                        className="prose prose-lg max-w-none text-right font-light text-gray-600
                                   prose-headings:text-gray-900 prose-headings:font-black prose-headings:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-[#2f4ea1]
                                   prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                                   prose-p:leading-relaxed prose-p:mb-6 prose-a:text-[#2f4ea1]
                                   prose-ul:list-disc prose-ul:pr-6 prose-li:mb-2 prose-strong:text-gray-900"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                    
                    {/* Action Card */}
                    <div className="mt-20 bg-white border border-gray-200 shadow-sm p-8 md:p-12 rounded-2xl text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8 group">
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-2">רוצים לקחת את המותג שלכם שלב אחד קדימה?</h3>
                            <p className="text-gray-600 font-light max-w-md">הצוות המשפטי והקריאייטיב שלנו זמין להתייעצות קצרה וממוקדת, ללא עלות.</p>
                        </div>
                        <button onClick={() => router.push('/contact')} className="bg-[#2f4ea1] text-white px-8 py-4 font-black whitespace-nowrap hover:bg-[#1c3166] rounded-full transition-all shadow-md group-hover:-translate-y-1 w-full md:w-auto">
                            דברו איתנו עכשיו
                        </button>
                    </div>
                </div>
            </article>
            <ContactForm />
        </PageTransition>
    );
};

export default ArticlePage;

"use client";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';

// Complete mock data for the 4 articles
const articleData = {
    'technical-seo-2026': {
        title: "SEO טכני ב-2026: שלושת עמודי התווך שחשוב להכיר",
        date: "15 מרץ, 2026",
        isoDate: "2026-03-15T00:00:00+02:00",
        tag: "SEO",
        image: "/articles/article_seo.png",
        imageAlt: "לוח נתונים ותרשימים לאופטימיזציה טכנית של אתר",
        content: `
            <h2>הקדמה ל-SEO טכני בעידן ה-AI</h2>
            <p>שנת 2026 מביאה איתה אתגרים חדשים בעולם קידום האתרים. מנועי החיפוש החכמים של היום לא מסתפקים רק בתוכן איכותי, אלא דורשים תשתית טכנית חסרת פשרות. במאמר זה נסקור את שלושת עמודי התווך של ה-SEO הטכני המודרני.</p>
            
            <h3>1. Core Web Vitals כיסוד להצלחה</h3>
            <p>כבר בשנת 2021 גוגל הכריזה שחוויית המשתמש היא גורם דירוג ישיר. היום, מדדי ה-Core Web Vitals קריטיים יותר מאי פעם. אתם צריכים לוודא שהתוכן המרכזי באתר נטען במהירות (LCP), שהאתר מגיב במהירות לפעולות של המשתמש לאורך הביקור (INP), ושאלמנטים בעמוד לא זזים באופן מפתיע בזמן הטעינה (CLS).</p>
            
            <h3>2. חשיבות הסריקה והאינדוקס (Crawl Budget)</h3>
            <p>מנועי החיפוש מקצים כמות מוגבלת של משאבים לסריקת האתר שלכם. אם האתר מכיל אלפי עמודים ריקים, שגיאות 404, או שרשראות הפניה (Redirect Chains) אינסופיות - אתם מבזבזים את תקציב הסריקה שלכם. טיפול נכון בעמודים שאינם צריכים להיכלל באינדקס, מפות אתר מעודכנות ושימוש נכון בקובץ robots.txt חשובים במיוחד בחנויות איקומרס ובאתרי תוכן גדולים.</p>
            
            <h3>3. אופטימיזציה לחיפוש AI ומענה ישיר</h3>
            <p>עם התרחבות החיפוש מבוסס ה-AI, חשוב להציג את המידע באתר בצורה ברורה ומובנית שגם מנועי חיפוש ומערכות אוטומטיות יוכלו לפרש. שימוש נכון ב-Schema Markup ובנתונים מובנים יכול לספק למנועי החיפוש הקשר נוסף לגבי התוכן והישויות באתר, לצד מבנה תוכן ברור, כותרות מדויקות ומידע שקל לאתר ולהבין.</p>
            
            <h2>סיכום או: כלים למדידה נכונה</h2>
            <p>כדי להתחיל את תהליך האופטימיזציה, אנו ממליצים בספרוס קודם כל לבצע ביקורת (Audit) דרך Google Search Console מול כלי צד שלישי כמו Screaming Frog לזיהוי שגיאות תשתית. רק כך תוכלו לבנות תוכנית עבודה ולשפר באופן שיטתי את מעמד האתר שלכם בתוצאות החיפוש.</p>
        `
    },
    'double-your-roas': {
        title: "שיפור ROAS בקמפיינים בגוגל: הדרכים שכדאי להכיר",
        date: "2 מרץ, 2026",
        isoDate: "2026-03-02T00:00:00+02:00",
        tag: "PPC",
        image: "/articles/article_roas.png",
        imageAlt: "לוח ביצועי שיווק דיגיטלי המציג נתוני ROAS",
        content: `
            <h2>ROAS: הרבה מעבר לחלוקת תקציב רגילה</h2>
            <p>אם אתם מנהלים עסק איקומרס, אחד המדדים המרכזיים שכדאי לעקוב אחריהם הוא החזר ההשקעה על הוצאות הפרסום (Return On Ad Spend - ROAS). עסקים רבים מתקשים לשפר את ה-ROAS לאורך זמן, ולעיתים הסיבה אינה גובה התקציב אלא הדרך שבה הקמפיינים בנויים, מנוהלים ונמדדים. הנה כמה מהנקודות שכדאי לבחון כשמחפשים לשפר את הביצועים ולהפיק יותר מתקציב הפרסום.</p>
            
            <h3>בידינג מבוסס ערך (Value-Based Bidding)</h3>
            <p>מערכת הלמידה המלאכותית של גוגל השתפרה פלאים. במקום להגיד לגוגל "תביא לי המרה בכמה שפחות כסף" (CPA), התחילו להגיד לו "תביא לי לקוחות שיקנו בעגלה מלאה יותר". כאשר נתוני ההמרות ושווי הרכישה מועברים בצורה תקינה, אסטרטגיות בידינג מבוססות ערך יכולות להשתמש במידע הזה כדי לבצע אופטימיזציה לכיוון המרות בעלות ערך גבוה יותר.</p>
            
            <h3>הפרד ומשול – קמפיינים חכמים וחלוקת תקציב מדויקת</h3>
            <p>אל תכניסו את כל המוצרים או השירותים תחת קמפיין Performance Max אחד ותקוו לטוב. חלקו את הקטלוג שלכם: מוצרי הדגל ו"מושכי הקהל" צריכים לקבל קמפיין עם תקציב נפרד ו-ROAS מטרה אגרסיבי, בעוד שמוצרים חדשים צריכים סביבת ניסוי משלהם. חלוקה חכמה מונעת מהמערכת לבזבז כסף על מוצרים לא ממירים.</p>
            
            <h3>אופטימיזציה של דפי הנחיתה והעגלות</h3>
            <p>שיפור יחס ההמרה בדף הנחיתה ובתהליך הרכישה יכול לשפר את ה-ROAS גם בלי להגדיל את תקציב הפרסום, משום שיותר מהתנועה שכבר שילמתם עליה יכולה להפוך בפועל ללקוחות.</p>
        `
    },
    'tiktok-or-instagram': {
        title: "טיקטוק או אינסטגרם? איפה הקהל שלכם נמצא",
        date: "28 פברואר, 2026",
        isoDate: "2026-02-28T00:00:00+02:00",
        tag: "סושיאל",
        image: "/articles/article_social.png",
        imageAlt: "טלפון וסמלים של רשתות חברתיות, בהן טיקטוק ואינסטגרם",
        content: `
            <h2>הקרב הגדול על תשומת הלב</h2>
            <p>השאלה הכי נפוצה שאנחנו שומעים מלקוחות שרוצים לבנות מותג מאפס היא: איפה לשים את הכסף והאנרגיה? באינסטגרם שכולם כבר מכירים, או בטיקטוק שמושכת מיליוני צפיות אורגניות? התשובה, כמו תמיד, תלויה בקהל היעד שלכם ובסוג התוכן שאתם מסוגלים לייצר.</p>
            
            <h3>הגיל ואופי החשיפה</h3>
            <p>טיקטוק היא כבר ממזמן לא רק רשת של ילדים שרוקדים, אלא מנוע חיפוש עצום עבור דור ה-Z ומיליניאלז צעירים. האלגוריתם שם בנוי בראש ובראשונה על Discovery - גילוי תוכן חדש. גם חשבונות עם מעט עוקבים יכולים לקבל חשיפה משמעותית כאשר התוכן מופץ לקהלים חדשים דרך האלגוריתם. אינסטגרם לעומת זאת, למרות ה-Reels, משמשת יותר ככלי לשימור קשר עם קהל קיים. באינסטגרם, לצד האפשרות להגיע לקהלים חדשים דרך Reels ו-Explore, הפרופיל עצמו משמש גם כמעין "ארכיון מותג" שמרכז את התוכן, הנראות והשפה הוויזואלית במקום אחד.</p>
            
            <h3>איזה סוג תוכן עובד?</h3>
            <ul>
                <li><strong>טיקטוק:</strong> תוכן שמרגיש טבעי לפלטפורמה יכול לעבוד היטב גם בלי הפקה מלוטשת במיוחד. סרטונים ישירים, שיחה למצלמה, תגובה לטרנדים ותוכן שמרגיש פחות פרסומי יכולים להשתלב היטב בפיד. עם זאת, גם תוכן מופק יכול לעבוד כשהוא מותאם לקצב, לשפה ולציפיות של הקהל בפלטפורמה.</li>
                <li><strong>אינסטגרם:</strong> סלחנית יותר לפוסטים ויזואליים, סטטיים וסטוריז מעוצבים. הגולשים אוהבים שם את הפילטרים והלייף-סטייל. עבור לקוחות פוטנציאליים, פרופיל אינסטגרם פעיל ומקצועי יכול לשמש נקודת בדיקה נוספת של המותג, העבודות שלו והנוכחות שלו ברשת.</li>
            </ul>
            
            <h3>שורה תחתונה: לא חייבים לבחור</h3>
            <p>במקום לבחור, אנחנו בספרוס מאמינים באסטרטגיית "Cross-Posting" חכמה. לוקחים סרטון אותנטי שמצטלם לטיקטוק, עורכים אותו בצורה מעט יותר קצבית אלגנטית, ומעלים כ-Reels לאינסטגרם, תוך שמירה על גריד סטטי מדויק שמשלים את התמונה לפרופיל מקצועי.</p>
        `
    },
    'ux-color-psychology': {
        title: "עיצוב UX שמניע לפעולה: העקרונות שכדאי להכיר",
        date: "10 פברואר, 2026",
        isoDate: "2026-02-10T00:00:00+02:00",
        tag: "UX/UI",
        image: "/articles/article_ux.png",
        imageAlt: "ממשקי אפליקציה לצד מניפת צבעים לתכנון עיצוב UX",
        content: `
            <h2>יותר מסתם יפה: ממשק משתמש כמכונת מכירות</h2>
            <p>כשאנחנו בונים אתר, המטרה הראשונה היא לא רק שהוא ייראה טוב - אלא שהוא יוביל את הגולש למטרה העסקית שלנו: השארת ליד, קנייה, או יצירת קשר. עיצוב UI/UX טוב נשען לא רק על אסתטיקה, אלא גם על הבנת התנהגות המשתמשים, קבלת החלטות והאופן שבו אנשים מתמצאים ופועלים בממשק.</p>
            
            <h3>פסיכולוגיה של צבע בכפתורי הנעה לפעולה (CTA)</h3>
            <p>צבעים יכולים לעורר אסוציאציות שונות ולהשפיע על האופן שבו ממשק נתפס, אבל המשמעות שלהם תלויה גם בהקשר, במותג ובקהל. לדוגמה, כחול מזוהה לעיתים עם אמינות ורוגע, אדום יכול לייצר תחושת דחיפות או אנרגיה, וירוק מתקשר במקרים רבים לצמיחה, טבע או חיוביות.</p>
            <p>אבל! הכלל הכי חשוב הוא קונטרסט (ניגודיות). אין "צבע שממיר הכי טוב" באופן אוניברסלי. מה שחשוב הוא שכפתור ההנעה לפעולה יהיה מובחן מספיק משאר הממשק, כך שהמשתמש יוכל לזהות אותו בקלות ולהבין מה הפעולה המרכזית בעמוד. את ההשפעה על יחס ההמרה כדאי לבחון בפועל בהתאם לקהל, לממשק ולהקשר.</p>
            
            <h3>חוק פיטס (Fitts's Law): גודל וקרבה</h3>
            <p>חוק בסיסי בחוויית משתמש אומר שהזמן שייקח לאדם לנוע למטרה מסוימת (כמו לחיצה על כפתור התשלום) תלוי בגודל המטרה ובמרחק אליה. כפתורי פעולה מרכזיים צריכים להיות קלים לזיהוי וללחיצה, עם שטח לחיצה מספק ומיקום שמתאים לאופן השימוש בממשק — במיוחד במובייל.</p>
            
            <h3>ארכיטקטורת מידע וצמצום החיכוך המחשבתי</h3>
            <p>עומס מיותר עלול להקשות על המשתמש להבין מה לעשות הלאה. לכן כדאי לבחון האם אפשר לפשט את הניווט, לצמצם אפשרויות שאינן נחוצות ולבנות טפסים ותהליכים באופן שמקל על המשתמש להתקדם. ככל שהממשק ברור יותר ודורש פחות מאמץ מחשבתי מיותר, כך קל יותר למשתמש להבין את האפשרויות שעומדות בפניו ולהתקדם לעבר הפעולה הרצויה.</p>
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
                <Link href="/articles" className="text-[#2f4ea1] hover:underline">חזרה לבלוג</Link>
            </div>
        );
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "image": [`https://www.sepros.co.il${article.image}`],
        "datePublished": article.isoDate,
        "author": [{
            "@type": "Organization",
            "name": "Sepros Digital",
            "url": "https://www.sepros.co.il"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Sepros Digital",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.sepros.co.il/logos/Logo.svg"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.sepros.co.il/articles/${slug}`
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "בית",
                "item": "https://www.sepros.co.il/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "מאמרים",
                "item": "https://www.sepros.co.il/articles"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": `https://www.sepros.co.il/articles/${slug}`
            }
        ]
    };

    return (
        <PageTransition>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <article className="min-h-screen bg-[#F5F7FA] pt-32 md:pt-40 pb-20 px-6">
                <div className="max-w-3xl mx-auto flex flex-col">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-gray-600 text-sm font-bold mb-8 self-start">
                        <Link href="/" className="hover:text-[#2f4ea1] transition-colors">ראשי</Link>
                        <ChevronLeft size={14} />
                        <Link href="/articles" className="hover:text-[#2f4ea1] transition-colors">מאמרים</Link>
                        <ChevronLeft size={14} />
                        <span className="text-gray-900">{article.title}</span>
                    </div>

                    <div className="text-right mb-12">
                        <div className="inline-block bg-[#2f4ea1]/10 text-[#2f4ea1] text-xs font-bold px-4 py-1.5 rounded-full mb-6">
                            {article.tag}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                            {article.title}
                        </h1>
                        <p className="text-gray-600 font-bold tracking-widest">{article.date}</p>
                    </div>

                    <div className="w-full h-[400px] bg-gray-100 rounded-2xl overflow-hidden mb-12 relative shadow-sm">
                        <Image src={article.image} alt={article.imageAlt} fill priority={true} fetchPriority="high" sizes="(max-width: 1024px) 100vw, 800px" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>

                    {/* Article Content injected as HTML */}
                    <div 
                        className="max-w-none text-right font-light text-gray-600 text-lg [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-[#2f4ea1] [&>h2]:mt-12 [&>h2]:mb-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#2f4ea1] [&>h3]:mt-8 [&>h3]:mb-4 [&>p]:leading-relaxed [&>p]:mb-6 [&>a]:text-[#2f4ea1] [&>ul]:list-disc [&>ul]:pr-6 [&>ul>li]:mb-2 [&_strong]:text-gray-900"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                    
                    {/* Action Card */}
                    <div className="mt-20 bg-white border border-gray-200 shadow-sm p-8 md:p-12 rounded-2xl text-center md:text-right flex flex-col md:flex-row items-center justify-between gap-8 group">
                        <div>
                            <h3 className="text-2xl font-black text-gray-900 mb-2">רוצים לקחת את המותג שלכם שלב אחד קדימה?</h3>
                            <p className="text-gray-600 font-light max-w-md">הצוות המשפטי והקריאייטיב שלנו זמין להתייעצות קצרה וממוקדת, ללא עלות.</p>
                        </div>
                        <Link href="/contact" className="bg-[#2f4ea1] text-white px-8 py-4 font-black whitespace-nowrap hover:bg-[#1c3166] rounded-full transition-all shadow-md group-hover:-translate-y-1 w-full md:w-auto inline-block text-center">
                            דברו איתנו עכשיו
                        </Link>
                    </div>
                </div>
            </article>
            <ContactForm />
        </PageTransition>
    );
};

export default ArticlePage;

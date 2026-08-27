import DepartmentDetail from '../../../views/DepartmentDetail';

const seoData = {
    ppc: { title: "PPC וביצועים - התוצאות שלכם, המספרים שלנו | ספרוס", description: "ניהול תקציבי פרסום באופטימיזציה מקסימלית: גוגל, מטא, טיקטוק ועוד. ניתוח קהלים ושיפור יחס המרה להחזר השקעה (ROAS) מנצח." },
    social: { title: "ניהול סושיאל ו-UGC למותגים | ספרוס", description: "ניהול סושיאל ויצירת UGC למותגים, כולל Reels, TikTok, הפקות וידאו, ניהול עמודים, תוכן שוטף ואסטרטגיית סושיאל מבוססת דאטה." },
    design: { title: "סטודיו וקריאייטיב פרימיום למותגים | ספרוס", description: "עיצוב שפה חזותית, קונספט, זהות ומיתוג תאגידי. בניית ספרי מותג ויצירת מסרים שמרגישים טבעיים ומייצרים אמון." },
    tech: { title: "פיתוח אתרים ואפליקציות - טכנולוגיה מתקדמת | ספרוס", description: "בניית אתרים מהירים ומתקדמים ב-React/Next.js. איקומרס מתקדם, פיתוח מערכות וחיבורי API לביצועי שיא וקידום אורגני מעולה." },
    seo: { title: "SEO & GEO: קידום אורגני ונוכחות במנועי AI | ספרוס", description: "שירותי SEO ו-GEO המשלבים אופטימיזציה טכנית, תוכן, בניית סמכות והתאמה למנועי חיפוש ולמערכות AI כדי לחזק את הנוכחות האורגנית של המותג." },
    analytics: { title: "אנליטיקס ודאטה - מדידה שמובילה לרווחים | ספרוס", description: "הטמעת מערכות מדידה (GA4, GTM), מעקב המרות ודאשבורדים בזמן אמת. ניתוח דאטה שיעזור לכם לייעל תקציבים ולהבין מאין מגיעים הלקוחות." },
    strategy: { title: "אסטרטגיה שיווקית - הנוסחה להצלחה בדיגיטל | ספרוס", description: "פיתוח אסטרטגיה שיווקית ומסעות לקוח מנצחים. מחקר שוק עמוק כדי לייצר מנוע צמיחה ממוקד שמנצח את האלגוריתם והמתחרים." }
};

export async function generateMetadata({ params }) {
    const { id } = await params;
    const dept = seoData[id];
    
    if (!dept) {
        return {
            title: 'מחלקה לא נמצאה | ספרוס',
        };
    }

    return {
        title: dept.title,
        description: dept.description,
        alternates: {
            canonical: `/service/${id}`
        },
        openGraph: {
        images: ['/opengraph-image.jpg'],
            title: dept.title,
            description: dept.description,
        }
    };
}

export function generateStaticParams() {
    return [
        { id: 'ppc' },
        { id: 'social' },
        { id: 'design' },
        { id: 'tech' },
        { id: 'seo' },
        { id: 'analytics' },
        { id: 'strategy' }
    ];
}

export default function Page() {
    return <DepartmentDetail />;
}
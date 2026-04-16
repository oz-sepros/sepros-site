import DepartmentDetail from '../../../views/DepartmentDetail';

const seoData = {
    ppc: { title: "PPC וביצועים - התוצאות שלכם, המספרים שלנו | ספרוס", description: "ניהול תקציבי פרסום באופטימיזציה מקסימלית: גוגל, מטא, טיקטוק ועוד. ניתוח קהלים ושיפור יחס המרה להחזר השקעה (ROAS) מנצח." },
    social: { title: "סושיאל דומיננטי וקריאייטיב - הפקות שוברות רשת | ספרוס", description: "הפקת סרטונים ויראליים, שורטס וטיקטוק למותגים. שפה ויזואלית ייחודית ואסטרטגיית סושיאל שעוצרת את הגלילה ומייצרת לידים." },
    design: { title: "עיצוב ו-UX/UI - סטודיו פרימיום למותגים | ספרוס", description: "אפיון ועיצוב ממשקים (UX/UI), זהות ומיתוג תאגידי. אנחנו מעצבים אתרים ואפליקציות שמרגישים טבעיים ומייצרים אמון." },
    tech: { title: "פיתוח אתרים ואפליקציות - טכנולוגיה מתקדמת | ספרוס", description: "בניית אתרים מהירים ומתקדמים ב-React/Next.js. איקומרס מתקדם, פיתוח מערכות וחיבורי API לביצועי שיא וקידום אורגני מעולה." },
    seo: { title: "קידום אורגני (SEO) - להיות בראש בגוגל | ספרוס", description: "קידום אתרים אורגני טכני עמוק בשילוב אסטרטגיית תוכן לבניית סמכות מול גוגל. מחקר מילים, בניית קישורים והובלת תוצאות החיפוש." },
    analytics: { title: "אנליטיקס ודאטה - מדידה שמובילה לרווחים | ספרוס", description: "הטמעת מערכות מדידה (GA4, GTM), מעקב המרות ודאשבורדים בזמן אמת. ניתוח דאטה שיעזור לכם לייעל תקציבים ולהבין מאין מגיעים הלקוחות." }
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
        openGraph: {
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
    ];
}

export default function Page() {
    return <DepartmentDetail />;
}
import PageComponent from '../../../views/ArticlePage';

const seoData = {
    'technical-seo-2026': {
        title: "SEO טכני ב-2026: 3 עמודי התווך שחשוב להכיר | ספרוס",
        description: "מה חשוב לדעת על SEO טכני ב-2026? הכירו 3 תחומים מרכזיים שמשפיעים על סריקת האתר, חוויית המשתמש וההתאמה לעידן החיפוש מבוסס AI.",
        canonical: "https://www.sepros.co.il/articles/technical-seo-2026"
    },
    'double-your-roas': {
        title: "איך לשפר ROAS בקמפיינים בגוגל | ספרוס",
        description: "רוצים לשפר את ה-ROAS בקמפיינים בגוגל? הכירו 3 נקודות שכדאי לבדוק: אסטרטגיית הבידינג, חלוקת הקמפיינים ואופטימיזציה של דפי הנחיתה.",
        canonical: "https://www.sepros.co.il/articles/double-your-roas"
    },
    'tiktok-or-instagram': {
        title: "טיקטוק או אינסטגרם: מה מתאים לעסק שלכם? | ספרוס",
        description: "טיקטוק או אינסטגרם – מה מתאים יותר לעסק שלכם? הכירו את ההבדלים בקהל, בחשיפה ובסוג התוכן, ואיך לשלב בין שתי הפלטפורמות בצורה נכונה.",
        canonical: "https://www.sepros.co.il/articles/tiktok-or-instagram"
    },
    'ux-color-psychology': {
        title: "עיצוב UX שמניע לפעולה: עקרונות חשובים | ספרוס",
        description: "איך עיצוב UX יכול לעזור להניע משתמשים לפעולה? הכירו עקרונות של צבע וקונטרסט, מיקום וגודל כפתורים וצמצום עומס קוגניטיבי בממשק.",
        canonical: "https://www.sepros.co.il/articles/ux-color-psychology"
    }
};

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const data = seoData[slug];
    if (!data) return {};
    return {
        title: data.title,
        description: data.description,
        alternates: {
            canonical: `/articles/${slug}`
        },
        openGraph: {
            images: ['/opengraph-image.jpg'],
            title: data.title,
            description: data.description,
        }
    };
}

export function generateStaticParams() {
    return [
        { slug: 'technical-seo-2026' },
        { slug: 'double-your-roas' },
        { slug: 'tiktok-or-instagram' },
        { slug: 'ux-color-psychology' }
    ];
}

export default function ArticlePage() {
    return <PageComponent />;
}
import PageComponent from '../views/Home';

export const metadata = {
    title: 'ספרוס - סוכנות דיגיטל | Sepros Digital',
    description: 'סוכנות דיגיטל 360 המעניקה פתרונות שיווק מקיפים: קידום אורגני (SEO), ניהול מדיה ו-PPC, סושיאל ו-UGC, פיתוח אתרים ועיצוב. מביאים תוצאות עם דאטה אמיתי.',
    alternates: {
        canonical: '/'
    },
    openGraph: {
        images: ['/opengraph-image.jpg'],
        title: 'ספרוס - סוכנות דיגיטל | Sepros Digital',
        description: 'סוכנות דיגיטל 360 המעניקה פתרונות שיווק מקיפים: קידום אורגני (SEO), ניהול מדיה ו-PPC, סושיאל ו-UGC, פיתוח אתרים ועיצוב. מביאים תוצאות עם דאטה אמיתי.',
    }
};

export default function HomePage() {
    return <PageComponent />;
}

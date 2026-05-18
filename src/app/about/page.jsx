import PageComponent from '../../views/About';

export const metadata = {
    title: 'אודות | ספרוס',
    description: 'הכירו את ספרוס, סוכנות הדיגיטל המובילה שמתמחה בבניית אסטרטגיות שיווקיות מנצחות, פיתוח אתרים וניהול מדיה. מביאים שקיפות, דאטה ותוצאות.',
    alternates: {
        canonical: '/about'
    },
    openGraph: {
        title: 'אודות | ספרוס',
        description: 'הכירו את ספרוס, סוכנות הדיגיטל המובילה שמתמחה בבניית אסטרטגיות שיווקיות מנצחות, פיתוח אתרים וניהול מדיה. מביאים שקיפות, דאטה ותוצאות.',
    }
};

export default function AboutPage() {
    return <PageComponent />;
}

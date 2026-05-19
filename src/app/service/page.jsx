import PageComponent from '../../views/ServicesPage';

export const metadata = {
    title: 'שירותי דיגיטל | ספרוס',
    description: 'מגוון שירותי הדיגיטל של ספרוס: קמפיינים ממומנים, SEO, סושיאל וויראלי, מיתוג, אסטרטגיה ופיתוח אתרים - תחת קורת גג אחת למקסימום המרות.',
    openGraph: {
        images: ['/opengraph-image.jpg'],
        title: 'שירותי דיגיטל | ספרוס',
        description: 'מגוון שירותי הדיגיטל של ספרוס: קמפיינים ממומנים, SEO, סושיאל וויראלי, מיתוג, אסטרטגיה ופיתוח אתרים - תחת קורת גג אחת למקסימום המרות.',
    }
};

export default function ServicesPage() {
    return <PageComponent />;
}

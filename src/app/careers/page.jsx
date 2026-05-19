import PageComponent from '../../views/Careers';

export const metadata = {
    title: 'דרושים | ספרוס',
    description: 'הצטרפו לצוות המנצח של ספרוס! מחפשים כישרונות בניהול קמפיינים, SEO, קריאייטיב ופיתוח לבוא לצמוח איתנו בסביבה טכנולוגית מתקדמת.',
    alternates: {
        canonical: '/careers'
    },
    openGraph: {
        images: ['/opengraph-image.jpg'],
        title: 'דרושים | ספרוס',
        description: 'הצטרפו לצוות המנצח של ספרוס! מחפשים כישרונות בניהול קמפיינים, SEO, קריאייטיב ופיתוח לבוא לצמוח איתנו בסביבה טכנולוגית מתקדמת.',
    }
};

export default function CareersPage() {
    return <PageComponent />;
}

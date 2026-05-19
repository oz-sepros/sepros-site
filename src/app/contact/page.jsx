import PageComponent from '../../views/Contact';

export const metadata = {
    title: 'צור קשר | ספרוס',
    description: 'מוכנים להזניק את העסק שלכם? צרו קשר עם ספרוס עוד היום לפגישת ייעוץ ובניית אסטרטגיה שיווקית שתעיף את המותג שלכם קדימה.',
    alternates: {
        canonical: '/contact'
    },
    openGraph: {
        images: ['/opengraph-image.jpg'],
        title: 'צור קשר | ספרוס',
        description: 'מוכנים להזניק את העסק שלכם? צרו קשר עם ספרוס עוד היום לפגישת ייעוץ ובניית אסטרטגיה שיווקית שתעיף את המותג שלכם קדימה.',
    }
};

export default function ContactPage() {
    return <PageComponent />;
}

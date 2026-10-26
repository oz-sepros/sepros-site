import PageComponent from '../../views/Terms';

export const metadata = {
    title: 'תנאי שימוש | ספרוס',
    description: 'תנאי השימוש באתר ספרוס: השימוש באתר, מסירת פרטים בטפסים, קניין רוחני, אחריות ודין חל.',
    alternates: {
        canonical: '/terms'
    },
    openGraph: {
        images: ['/opengraph-image.jpg'],
        title: 'תנאי שימוש | ספרוס',
        description: 'תנאי השימוש באתר ספרוס.',
    }
};

export default function TermsPage() {
    return <PageComponent />;
}

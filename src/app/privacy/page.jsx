import PageComponent from '../../views/PrivacyPolicy';

export const metadata = {
    title: 'מדיניות פרטיות | ספרוס',
    description: 'מדיניות הפרטיות של ספרוס.',
    alternates: {
        canonical: '/privacy'
    },
    openGraph: {
        images: ['/opengraph-image.jpg'],
        title: 'מדיניות פרטיות | ספרוס',
        description: 'מדיניות הפרטיות של ספרוס.',
    }
};

export default function PrivacyPage() {
    return <PageComponent />;
}
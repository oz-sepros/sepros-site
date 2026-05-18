import PageComponent from '../../views/PrivacyPolicy';

export const metadata = {
    title: 'מדיניות פרטיות | ספרוס',
    description: 'מדיניות הפרטיות של ספרוס.',
    alternates: {
        canonical: '/privacy'
    },
    openGraph: {
        title: 'מדיניות פרטיות | ספרוס',
        description: 'מדיניות הפרטיות של ספרוס.',
    }
};

export default function PrivacyPage() {
    return <PageComponent />;
}
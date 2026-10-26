import Accessibility from '../../views/Accessibility';

export const metadata = {
  title: 'הצהרת נגישות | Sepros Digital Group',
  description: 'הצהרת הנגישות של ספרוס דיגיטל. אנו פועלים להנגשת האתר עבור כלל המשתמשים.',
  alternates: {
    canonical: '/accessibility'
  },
  // Draft: kept out of search results until the missing details are filled in
  robots: { index: false, follow: true },
};

export default function AccessibilityPage() {
  return <Accessibility />;
}

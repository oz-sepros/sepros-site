"use client";
import LegalPage from '../components/LegalPage';
import { privacyMeta } from '../content/privacy';
import { accessibilityMeta, accessibilitySections } from '../content/accessibility';

const Accessibility = () => (
    <LegalPage
        title="הצהרת נגישות"
        sections={accessibilitySections}
        header={
            <>
                <p className="font-bold text-gray-900">{privacyMeta.company}</p>
                <p className="text-sm mt-1 text-gray-600">
                    {accessibilityMeta.draft && 'טיוטה, לא לפרסום · '}עודכן לאחרונה: {accessibilityMeta.lastUpdated}
                </p>
            </>
        }
        footer={<p className="text-sm border-t border-gray-100 pt-6 mt-8">הצהרת הנגישות מנוסחת בלשון רבים מטעמי נוחות, והיא פונה לכל הגולשים.</p>}
    />
);

export default Accessibility;

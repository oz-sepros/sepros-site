"use client";
import LegalPage from '../components/LegalPage';
import { privacyMeta, privacySections, privacyLinks } from '../content/privacy';

const PrivacyPolicy = () => (
    <LegalPage
        title="מדיניות פרטיות"
        numberPrefix="א."
        sections={privacySections}
        header={
            <>
                <p className="font-bold text-gray-900">{privacyMeta.company}, להלן: החברה</p>
                <p className="text-[#2f4ea1] font-bold mt-2">נוהל מדיניות פרטיות</p>
                <p className="text-sm mt-1 text-gray-600">{privacyMeta.edition} | עודכן לאחרונה: {privacyMeta.lastUpdated}</p>
            </>
        }
        footer={
            <div className="border-t border-gray-100 pt-6 mt-8 text-sm space-y-2">
                <p>פניות בנושאי פרטיות: <a href={`mailto:${privacyMeta.contactEmail}`} className="text-[#2f4ea1] underline underline-offset-4">{privacyMeta.contactEmail}</a></p>
                <p>
                    מידע נוסף על עוגיות:{' '}
                    <a href={privacyLinks.google} target="_blank" rel="noopener noreferrer" className="text-[#2f4ea1] underline underline-offset-4">גוגל</a>
                    {' · '}
                    <a href={privacyLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-[#2f4ea1] underline underline-offset-4">פייסבוק</a>
                </p>
            </div>
        }
    />
);

export default PrivacyPolicy;

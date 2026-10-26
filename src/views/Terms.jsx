"use client";
import LegalPage from '../components/LegalPage';
import { termsMeta, termsSections } from '../content/terms';

const Terms = () => (
    <LegalPage
        title="תנאי שימוש"
        sections={termsSections}
        header={<p className="text-sm text-gray-600">עודכן לאחרונה: {termsMeta.lastUpdated}</p>}
    />
);

export default Terms;

import Link from 'next/link';
import { formNotice } from '../content/privacy';

const LINKED = 'במדיניות הפרטיות';

// The short privacy notice under every form (section 11 of the Privacy
// Protection Law; the lawyer's wording, unchanged), folded behind a small
// "more details" toggle so the form stays clean. Native <details>: keyboard
// and screen readers work out of the box.
const FormNotice = ({ className = '' }) => {
    const [before, after] = formNotice.split(LINKED);
    return (
        <details dir="rtl" className={`group text-xs text-gray-600 text-right ${className}`}>
            <summary className="inline-flex cursor-pointer list-none items-center gap-1 underline underline-offset-2 hover:text-[#2f4ea1] [&::-webkit-details-marker]:hidden">
                פרטים נוספים על השימוש במידע
                <span aria-hidden="true" className="inline-block transition-transform group-open:rotate-180">▾</span>
            </summary>
            <p className="mt-2 leading-relaxed">
                {before}
                <Link href="/privacy" className="text-[#2f4ea1] underline underline-offset-2">{LINKED}</Link>
                {after}
            </p>
        </details>
    );
};

export default FormNotice;

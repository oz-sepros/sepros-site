"use client";
import { useState } from 'react'; 
import { trackEvent } from '../utils/analytics';
import { usePathname } from 'next/navigation';
import Reveal from './Reveal';

const JobApplicationForm = ({ jobTitle, onClose }) => {
    const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', linkedin: '', portfolio: '', msg: '' });
    const [status, setStatus] = useState('idle');
    const pathname = usePathname();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const searchParams = new URLSearchParams(location.search);
            const nameParts = formData.fullName.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            const params = new URLSearchParams();
            // Using same Lead.im API but perhaps different notes/fields to indicate job application
            params.append('lm_form', '79215');
            params.append('lm_key', 'e674d603b1');
            params.append('lm_redirect', 'no');
            params.append('name', firstName);
            params.append('lname', lastName);
            params.append('phone', formData.phone);
            params.append('email', formData.email);

            // Format notes to include job title and URLs
            const fullMsg = `הרשמה למשרה: ${jobTitle}\nלינקדאין: ${formData.linkedin}\nתיק עבודות: ${formData.portfolio}\nהערות: ${formData.msg}`;
            params.append('msg', fullMsg);

            // Add basic UTMs from URL if any
            const trackingFields = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'fbclid'];
            trackingFields.forEach(field => {
                if (searchParams.has(field)) {
                    params.append(field, searchParams.get(field));
                }
            });

            await fetch(`https://api.lead.im/v2/submit?${params.toString()}`, {
                method: 'GET',
                mode: 'no-cors'
            });

            setStatus('success');
            setTimeout(() => {
                setStatus('idle');
                if (onClose) onClose();
            }, 3000);
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <Reveal className="bg-gray-50 border border-gray-200 p-6 md:p-8 rounded-xl mt-8 relative shadow-sm">
            <h4 className="text-xl font-black text-[#09102c] mb-6 tracking-wide">הגשת מועמדות: <span className="text-[#2f4ea1]">{jobTitle}</span></h4>
            <form className="space-y-6 text-right" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[#09102c] text-sm font-bold tracking-wide">שם מלא</label>
                        <input required type="text" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="ישראל ישראלי" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[#09102c] text-sm font-bold tracking-wide">טלפון</label>
                        <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all dir-ltr text-right" placeholder="050-0000000" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[#09102c] text-sm font-bold tracking-wide">אימייל</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="email@gmail.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[#09102c] text-sm font-bold tracking-wide">קישור ללינקדאין</label>
                        <input required type="url" value={formData.linkedin} onChange={e => setFormData({ ...formData, linkedin: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all dir-ltr text-right" placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[#09102c] text-sm font-bold tracking-wide">תיק עבודות / אתר (רשות)</label>
                        <input type="url" value={formData.portfolio} onChange={e => setFormData({ ...formData, portfolio: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all dir-ltr text-right" placeholder="https://..." />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[#09102c] text-sm font-bold tracking-wide">ספרו לנו קצת על עצמכם למה אתם מתאימים?</label>
                    <textarea required rows="4" value={formData.msg} onChange={e => setFormData({ ...formData, msg: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all resize-none" placeholder="הניסיון שלי כולל..."></textarea>
                </div>

                <button type="submit" id="submit_job_form" disabled={status === 'loading' || status === 'success'} className={`w-full mt-4 text-white font-black py-4 tracking-widest text-lg transition-all rounded-lg ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : status === 'error' ? 'bg-red-500 hover:bg-red-600' : 'bg-[#2f4ea1] hover:bg-[#1c3166] hover:-translate-y-1 shadow-lg hover:shadow-xl'}`}>
                    {status === 'loading' ? 'שולח...' : status === 'success' ? 'המועמדות נשלחה! ניצור קשר בהקדם.' : status === 'error' ? 'שגיאה בשליחה' : 'שלחו מועמדות'}
                </button>
            </form>
        </Reveal>
    );
};

export default JobApplicationForm;

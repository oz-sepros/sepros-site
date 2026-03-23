import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Reveal from './Reveal';

const JobApplicationForm = ({ jobTitle, onClose }) => {
    const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', linkedin: '', portfolio: '', msg: '' });
    const [status, setStatus] = useState('idle');
    const location = useLocation();

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
        <Reveal className="bg-[#0a0a0a] border border-white/10 p-6 rounded-xl mt-6 relative">
            <h4 className="text-xl font-black text-white mb-6 tracking-wide">הגשת מועמדות: <span className="text-[#4e77fc]">{jobTitle}</span></h4>
            <form className="space-y-5 text-right" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                        <label className="text-gray-500 text-[10px] font-black tracking-widest">שם מלא</label>
                        <input required type="text" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors" placeholder="ישראל ישראלי" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-gray-500 text-[10px] font-black tracking-widest">טלפון</label>
                        <input required type="tel" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors dir-ltr text-right" placeholder="050-0000000" />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-gray-500 text-[10px] font-black tracking-widest">אימייל</label>
                    <input required type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors" placeholder="email@gmail.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1">
                        <label className="text-gray-500 text-[10px] font-black tracking-widest">קישור ללינקדאין</label>
                        <input required type="url" value={formData.linkedin} onChange={e => setFormData({ ...formData, linkedin: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors dir-ltr text-right" placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div className="space-y-1">
                        <label className="text-gray-500 text-[10px] font-black tracking-widest">תיק עבודות / אתר (רשות)</label>
                        <input type="url" value={formData.portfolio} onChange={e => setFormData({ ...formData, portfolio: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors dir-ltr text-right" placeholder="https://..." />
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="text-gray-500 text-[10px] font-black tracking-widest">ספרו לנו קצת על עצמכם למה אתם מתאימים?</label>
                    <textarea required rows="3" value={formData.msg} onChange={e => setFormData({ ...formData, msg: e.target.value })} className="w-full bg-transparent border-b border-white/10 py-2 text-white focus:border-[#4e77fc] outline-none transition-colors" placeholder="הניסיון שלי כולל..."></textarea>
                </div>

                <button type="submit" id="submit_job_form" disabled={status === 'loading' || status === 'success'} className={`w-full text-white font-black py-4 tracking-widest text-sm transition-all ${status === 'success' ? 'bg-green-500' : status === 'error' ? 'bg-red-500' : 'bg-[#4e77fc] hover:bg-white hover:text-black'}`}>
                    {status === 'loading' ? 'שולח...' : status === 'success' ? 'המועמדות נשלחה! ניצור קשר בהקדם.' : status === 'error' ? 'שגיאה בשליחה' : 'שלח מועמדות'}
                </button>
            </form>
        </Reveal>
    );
};

export default JobApplicationForm;

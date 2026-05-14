"use client";
import { useState, useRef } from 'react'; 
import { trackEvent } from '../utils/analytics';
import { usePathname } from 'next/navigation';
import Reveal from './Reveal';
import { UploadCloud, FileText, X } from 'lucide-react';

const JobApplicationForm = ({ jobTitle, onClose }) => {
    const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', linkedin: '', portfolio: '', msg: '' });
    const [file, setFile] = useState(null);
    const [formError, setFormError] = useState('');
    const [status, setStatus] = useState('idle');
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        // Basic security and format validation
        const allowedExtensions = ['.pdf', '.doc', '.docx'];
        const fileExtension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase();
        
        if (!allowedExtensions.includes(fileExtension)) {
            setFormError('פורמט לא נתמך. נא להעלות קובץ PDF או Word בלבד.');
            setFile(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
            return;
        }

        if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
            setFormError('הקובץ גדול מדי. הגודל המקסימלי הוא 5MB.');
            setFile(null);
            if (fileInputRef.current) fileInputRef.current.value = '';
            return;
        }

        setFormError('');
        setFile(selectedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');

        // Name validation (at least two words)
        const nameParts = formData.fullName.trim().split(/\s+/);
        if (nameParts.length < 2) {
            setFormError('נא להזין שם מלא (שם פרטי ושם משפחה).');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setFormError('נא להזין כתובת אימייל תקינה.');
            return;
        }

        // Israeli phone validation (allow spaces or hyphens, check prefixes)
        const cleanPhone = formData.phone.replace(/[\s-]/g, '');
        const phoneRegex = /^(05\d|0[23489]|07\d)\d{7}$/;
        if (!phoneRegex.test(cleanPhone)) {
            setFormError('נא להזין מספר טלפון ישראלי תקין (לדוגמה: 050-1234567)');
            return;
        }

        if (!file) {
            setFormError('חובה לצרף קורות חיים');
            return;
        }

        setStatus('loading');

        try {
            const formDataToSubmit = new FormData();
            formDataToSubmit.append('jobTitle', jobTitle);
            formDataToSubmit.append('fullName', formData.fullName);
            formDataToSubmit.append('phone', cleanPhone);
            formDataToSubmit.append('email', formData.email);
            formDataToSubmit.append('linkedin', formData.linkedin);
            formDataToSubmit.append('portfolio', formData.portfolio);
            formDataToSubmit.append('msg', formData.msg);
            formDataToSubmit.append('cv', file);

            // Add basic UTMs from URL if any
            const searchParams = new URLSearchParams(location.search);
            const trackingFields = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid', 'fbclid'];
            trackingFields.forEach(field => {
                if (searchParams.has(field)) {
                    formDataToSubmit.append(field, searchParams.get(field));
                }
            });

            // Post to the Make Webhook
            const response = await fetch('https://hook.eu2.make.com/jkjcrmaeyghepxxgp9c9ddd3mni46a57', {
                method: 'POST',
                body: formDataToSubmit,
            });

            if (!response.ok) {
                throw new Error('Webhook error');
            }

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
                        <label className="text-[#09102c] text-sm font-bold tracking-wide">שם מלא <span className="text-red-500">*</span></label>
                        <input required type="text" value={formData.fullName} onChange={e => {setFormData({ ...formData, fullName: e.target.value }); setFormError('');}} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="ישראל ישראלי" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[#09102c] text-sm font-bold tracking-wide">טלפון <span className="text-red-500">*</span></label>
                        <input required type="tel" value={formData.phone} onChange={e => {setFormData({ ...formData, phone: e.target.value }); setFormError('');}} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all dir-ltr text-right" placeholder="050-1234567" />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[#09102c] text-sm font-bold tracking-wide">אימייל <span className="text-red-500">*</span></label>
                    <input required type="email" value={formData.email} onChange={e => {setFormData({ ...formData, email: e.target.value }); setFormError('');}} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all" placeholder="email@gmail.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[#09102c] text-sm font-bold tracking-wide">קישור ללינקדאין <span className="text-red-500">*</span></label>
                        <input required type="url" value={formData.linkedin} onChange={e => {setFormData({ ...formData, linkedin: e.target.value }); setFormError('');}} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all dir-ltr text-right" placeholder="https://linkedin.com/in/..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[#09102c] text-sm font-bold tracking-wide">תיק עבודות / אתר (רשות)</label>
                        <input type="url" value={formData.portfolio} onChange={e => setFormData({ ...formData, portfolio: e.target.value })} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all dir-ltr text-right" placeholder="https://..." />
                    </div>
                </div>

                {/* קורות חיים */}
                <div className="space-y-2">
                    <label className="text-[#09102c] text-sm font-bold tracking-wide">קורות חיים (PDF, DOC, DOCX) <span className="text-red-500">*</span></label>
                    <div 
                        className={`relative border-2 border-dashed rounded-xl bg-white p-6 transition-all text-center flex flex-col items-center justify-center cursor-pointer group ${formError && !file ? 'border-red-400 bg-red-50' : 'border-gray-300 hover:border-[#2f4ea1] hover:bg-[#2f4ea1]/5'}`} 
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <input 
                            ref={fileInputRef}
                            type="file" 
                            accept=".pdf,.doc,.docx" 
                            onChange={handleFileChange} 
                            className="hidden" 
                        />
                        
                        {!file ? (
                            <>
                                <div className="w-12 h-12 rounded-full bg-[#2f4ea1]/10 flex items-center justify-center text-[#2f4ea1] mb-3 group-hover:scale-110 transition-transform">
                                    <UploadCloud size={24} />
                                </div>
                                <p className="text-[#09102c] font-bold text-sm mb-1">לחצו כאן כדי להעלות קובץ</p>
                                <p className="text-gray-500 text-xs">עד 5MB, בפורמט Word או PDF בלבד</p>
                            </>
                        ) : (
                            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg border border-gray-200 w-full max-w-sm justify-between dir-rtl" onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <FileText className="text-[#2f4ea1] shrink-0" size={20} />
                                    <span className="text-sm font-bold text-gray-700 truncate dir-ltr" dir="ltr">{file.name}</span>
                                </div>
                                <button type="button" onClick={() => { setFile(null); if (fileInputRef.current) fileInputRef.current.value = ''; }} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                                    <X size={18} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-[#09102c] text-sm font-bold tracking-wide">ספרו לנו קצת על עצמכם למה אתם מתאימים? <span className="text-red-500">*</span></label>
                    <textarea required rows="4" value={formData.msg} onChange={e => {setFormData({ ...formData, msg: e.target.value }); setFormError('');}} className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-[#09102c] focus:border-[#2f4ea1] focus:ring-2 focus:ring-[#2f4ea1]/20 outline-none transition-all resize-none" placeholder="הניסיון שלי כולל..."></textarea>
                </div>

                {formError && <p className="text-red-500 text-sm font-bold mt-2">{formError}</p>}

                <button type="submit" disabled={status === 'loading' || status === 'success'} className={`w-full mt-4 text-white font-black py-4 tracking-widest text-lg transition-all rounded-lg ${status === 'success' ? 'bg-green-500 hover:bg-green-600' : status === 'error' ? 'bg-red-500 hover:bg-red-600' : 'bg-[#2f4ea1] hover:bg-[#1c3166] hover:-translate-y-1 shadow-lg hover:shadow-xl'}`}>
                    {status === 'loading' ? 'שולח...' : status === 'success' ? 'המועמדות נשלחה! ניצור קשר בהקדם.' : status === 'error' ? 'שגיאה בשליחה' : 'שלחו מועמדות'}
                </button>
            </form>
        </Reveal>
    );
};

export default JobApplicationForm;

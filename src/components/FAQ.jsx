"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = ({ title = "שאלות נפוצות", data = [], className = "" }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    if (!data || data.length === 0) return null;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
            }
        }))
    };

    return (
        <section className={`py-12 md:py-20 bg-[#F5F7FA] ${className}`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="max-w-4xl mx-auto px-6 text-right">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#2f4ea1] tracking-tight">{title}</h2>
                </div>
                <div className="space-y-4">
                    {data.map((item, i) => (
                        <div key={i} className="faq-item reveal active border-b border-gray-200">
                            <button aria-expanded={openIndex === i} aria-label={openIndex === i ? "סגור שאלה" : "פתח שאלה"} onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full py-5 flex justify-between items-center text-right group gap-6 md:gap-8">
                                <h3 className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-[#2f4ea1]' : 'text-gray-800 group-hover:text-[#2f4ea1]'}`}>{item.q}</h3>
                                {openIndex === i ? <Minus className="text-[#2f4ea1] shrink-0" /> : <Plus className="text-gray-600 shrink-0" />}
                            </button>
                            <div className={`overflow-hidden transition-all duration-500 ${openIndex === i ? 'max-h-60 pb-5' : 'max-h-0'}`}>
                                <p className="text-gray-600 text-sm md:text-base font-light leading-relaxed">{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

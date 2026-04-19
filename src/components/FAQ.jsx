"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = ({ title = "שאלות נפוצות", data = [], className = "" }) => {
    const [openIndex, setOpenIndex] = useState(-1);

    if (!data || data.length === 0) return null;

    return (
        <section className={`py-12 md:py-20 bg-[#F5F7FA] ${className}`}>
            <div className="max-w-4xl mx-auto px-6 text-right">
                <div className="text-center mb-16">
                    <h3 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">{title}</h3>
                </div>
                <div className="space-y-4">
                    {data.map((item, i) => (
                        <div key={i} className="faq-item reveal active border-b border-gray-200">
                            <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full py-5 flex justify-between items-center text-right group gap-6 md:gap-8">
                                <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-[#2f4ea1]' : 'text-gray-800 group-hover:text-[#2f4ea1]'}`}>{item.q}</span>
                                {openIndex === i ? <Minus className="text-[#2f4ea1] shrink-0" /> : <Plus className="text-gray-400 shrink-0" />}
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

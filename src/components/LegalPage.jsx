"use client";
import { useEffect } from 'react';
import PageTransition from './PageTransition';

// Shared layout of the legal pages (privacy policy, terms of use). Sections
// come from src/content as { id, title, blocks }, where a block is a paragraph
// string or { list: [...] }.
const LegalPage = ({ title, header, sections, numberPrefix, footer }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PageTransition>
            <div className="pt-32 pb-20 px-6 min-h-screen bg-[#F5F7FA]">
                <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-2xl p-8 md:p-12 relative overflow-hidden shadow-sm">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#2f4ea1]/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-10 text-right">{title}</h1>

                    <div className="prose prose-lg max-w-none text-right font-light text-gray-600 space-y-6">
                        {header && <div className="border-b border-gray-100 pb-6 mb-8">{header}</div>}

                        <div className="space-y-8">
                            {sections.map((section, i) => (
                                <section key={section.id} id={section.id}>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3">{numberPrefix}{i + 1}. {section.title}</h2>
                                    {section.blocks.map((block, j) =>
                                        typeof block === 'string' ? (
                                            <p key={j} className={j > 0 ? 'mt-4' : undefined}>{block}</p>
                                        ) : (
                                            <ul key={j} className="list-disc pr-5 space-y-2 mt-4">
                                                {block.list.map((item, k) => <li key={k}>{item}</li>)}
                                            </ul>
                                        )
                                    )}
                                </section>
                            ))}
                        </div>

                        {footer}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default LegalPage;

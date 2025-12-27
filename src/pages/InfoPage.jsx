import React from 'react';

const InfoPage = ({ title, category, lastUpdated, sections }) => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card p-10 md:p-16 bg-white animate-fade-in-up border-none shadow-sm capitalize">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-primary-100 text-primary-700 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest">{category}</span>
                        </div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-8">{title}</h1>
                        <p className="text-slate-500 font-medium mb-10 pb-10 border-b border-slate-100 italic">
                            Last updated: {lastUpdated}. Your trust and security are our priority.
                        </p>

                        <div className="space-y-12">
                            {sections.map((section, idx) => (
                                <section key={idx} className="space-y-4">
                                    <h3 className="text-xl font-bold text-slate-900">{idx + 1}. {section.heading}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        {section.content}
                                    </p>
                                </section>
                            ))}
                        </div>

                        <div className="mt-16 p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="text-center md:text-left">
                                <h4 className="font-bold text-lg mb-1">Still need help?</h4>
                                <p className="text-slate-400 text-sm">Our support team is active 24/7 for you.</p>
                            </div>
                            <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-black text-sm hover:bg-primary-500 hover:text-white transition-colors">
                                Open Ticket
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoPage;

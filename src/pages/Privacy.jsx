import React from 'react';

const Privacy = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card p-10 md:p-16 bg-white animate-fade-in-up shadow-sm border-none">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center text-2xl shadow-inner">🛡️</div>
                            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
                        </div>

                        <p className="text-slate-500 font-medium mb-10 pb-10 border-b border-slate-100 italic">
                            Your security is our priority. Here's how we protect your data.
                        </p>

                        <div className="space-y-12">
                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">Security Measures</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We use industry-standard 256-bit SSL encryption to protect your personal and payment information during transmission. All sensitive data is stored in encrypted databases.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">Data Usage</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We collect your name, contact details, and travel preferences solely to facilitate your bookings and provide travel updates. We never sell your data to third-party advertisers.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">Cookies</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Our platform uses essential cookies to remember your login state and search preferences. You can disable these in your browser, though it may affect booking functionality.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">Third-Party Partners</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    We share only necessary travel data with transport operators to confirm your seat. They are contractually bound to maintain your privacy as per our standards.
                                </p>
                            </section>
                        </div>

                        <div className="mt-16 text-center text-slate-400 text-sm font-medium">
                            Questions about your data? Reach out to privacy@transporthub.in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;

import React from 'react';

const Partner = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 text-slate-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-primary-600 rounded-[3rem] p-12 md:p-20 text-white text-center mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                        <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">Empower Your Fleet</h1>
                        <p className="text-primary-100 text-lg mb-10 max-w-2xl mx-auto font-medium">
                            Join India's fastest growing transport network. Digitalize your bookings, optimize your routes, and scale your business with HubOps.
                        </p>
                        <button className="bg-white text-primary-600 px-8 py-4 rounded-2xl font-black text-lg shadow-xl shadow-primary-900/20 hover:scale-105 transition-all">
                            Register Your Fleet
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
                        {[
                            { title: 'Global Exposure', desc: 'Reach thousands of daily travelers searching for your routes.', icon: '🌍' },
                            { title: 'Smart Analytics', desc: 'Access real-time data on revenue, seat occupancy, and popular timings.', icon: '📊' },
                            { title: 'Zero Fee', desc: 'Start selling today with 0% platform fee for the first 3 months.', icon: '💰' }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-8 bg-white border-none shadow-sm">
                                <div className="text-4xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="glass-card p-8 md:p-12 bg-white border-none shadow-sm flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-3xl font-black tracking-tight">Ready to start?</h2>
                            <p className="text-slate-500 font-medium">Our onboarding team will help you set up your routes and vehicles in less than 24 hours.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">1</span>
                                    <span className="font-bold text-slate-700">Submit your business documents</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">2</span>
                                    <span className="font-bold text-slate-700">Add your vehicles and services</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">3</span>
                                    <span className="font-bold text-slate-700">Start receiving bookings</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 w-full bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="input-premium" />
                                <input type="email" placeholder="Business Email" className="input-premium" />
                                <input type="tel" placeholder="Phone Number" className="input-premium" />
                                <button className="btn-primary w-full py-4 text-lg">Send Inquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;

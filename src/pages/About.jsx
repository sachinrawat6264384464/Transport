import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 relative">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <div className="text-center mb-24 animate-fade-in-up">
                        <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
                            Our Story
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-8">
                            Redefining the way <br />
                            <span className="text-primary-600">India Travels.</span>
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
                            TransportHub was born from a simple idea: that booking a journey should be as exciting as the journey itself.
                        </p>
                    </div>

                    {/* Content Blocks */}
                    <div className="space-y-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="glass-card aspect-video bg-slate-900 overflow-hidden group">
                                <img
                                    src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80&w=1000"
                                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                                    alt="Luxury Bus"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white text-2xl">⚡</div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Visionary Fleet</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    We partner with only the top 5% of operators in the country. Our proprietary vetting process ensures every vehicle in our fleet meets international safety and comfort standards.
                                </p>
                                <ul className="space-y-4">
                                    {['Premium Lounge Access', 'Instant GPS Tracking', 'Zero Cancellation Fees'].map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                                            <span className="text-primary-600">✓</span> {feat}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="glass-card p-12 bg-white animate-fade-in-up shadow-sm border-none" style={{ animationDelay: '0.2s' }}>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                                <div>
                                    <div className="text-4xl font-black text-primary-600 mb-2">500k+</div>
                                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Happy Travelers</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-primary-600 mb-2">200+</div>
                                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Premium Routes</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-primary-600 mb-2">24/7</div>
                                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Elite Concierge</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center pt-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <h2 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Ready to start your next adventure?</h2>
                            <a href="/" className="btn-primary inline-flex items-center gap-2 py-4 px-10">
                                Browse Available Trips <span className="translate-y-0.5">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

import React from 'react';

const Careers = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Join the Journey</h1>
                        <p className="text-slate-500 font-medium text-lg">Help us redefine how the world moves. Build the future of transport.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="glass-card p-8 bg-white hover:shadow-xl transition-shadow border-none">
                            <span className="text-3xl mb-4 block">🚀</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Fast Growth</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">Join a team that grew 400% in the last year. We move fast and break barriers.</p>
                        </div>
                        <div className="glass-card p-8 bg-white hover:shadow-xl transition-shadow border-none">
                            <span className="text-3xl mb-4 block">💡</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Innovation First</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">We use the latest tech stacks to solve real-world logistics and passenger problems.</p>
                        </div>
                    </div>

                    <div className="glass-card overflow-hidden bg-white border-none shadow-sm">
                        <div className="p-8 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-black text-slate-900">Open Positions</h2>
                            <span className="bg-primary-100 text-primary-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">3 Active Roles</span>
                        </div>
                        <div className="divide-y divide-slate-100">
                            {[
                                { title: 'Senior Frontend Engineer', type: 'Full-time', location: 'Remote / Bangalore' },
                                { title: 'Operations Manager', type: 'Full-time', location: 'Mumbai' },
                                { title: 'Product UI Designer', type: 'Contract', location: 'Remote' }
                            ].map((job, idx) => (
                                <div key={idx} className="p-8 flex items-center justify-between hover:bg-slate-50/50 transition-colors cursor-pointer group">
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors">{job.title}</h4>
                                        <p className="text-sm text-slate-400 font-medium">{job.type} • {job.location}</p>
                                    </div>
                                    <button className="btn-outline py-2 px-4 text-xs">Apply Now</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-slate-400 text-sm font-medium">Don't see a fit? Reach out anyway at <span className="text-primary-600 font-bold">careers@transporthub.in</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;

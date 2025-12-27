import React, { useState } from 'react';

const Contact = () => {
    const [expandedCard, setExpandedCard] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleCard = (index) => {
        setExpandedCard(expandedCard === index ? null : index);
    };

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 pt-32 pb-20 relative overflow-hidden transition-colors duration-300">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100/50 dark:bg-primary-900/20 rounded-full blur-3xl animate-pulse"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Get in Touch</h1>
                        <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto">
                            Our travel specialists are standing by to assist with your journey. We're available 24 hours a day.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: '📱',
                                        title: 'WhatsApp Support',
                                        info: '+91 98765 43210',
                                        status: 'Online Now',
                                        statusColor: 'bg-emerald-500',
                                        details: 'Chat with our support team instantly. We respond within minutes for urgent queries and booking assistance.'
                                    },
                                    {
                                        icon: '📞',
                                        title: 'Direct Call',
                                        info: '+91 98765 43210',
                                        status: 'Available',
                                        statusColor: 'bg-primary-500',
                                        details: 'Speak directly with our customer service representatives. Available 24/7 for bookings and support.'
                                    },
                                    {
                                        icon: '📧',
                                        title: 'Email Enquiries',
                                        info: 'support@transporthub.in',
                                        status: '2h Response',
                                        statusColor: 'bg-blue-500',
                                        details: 'Send us detailed queries via email. We typically respond within 2 hours during business hours.'
                                    },
                                    {
                                        icon: '📍',
                                        title: 'Main Terminal',
                                        info: 'New Delhi, India',
                                        status: 'Office Open',
                                        statusColor: 'bg-amber-500',
                                        details: 'Visit our main office at Connaught Place, New Delhi. Open Mon-Sat, 9 AM - 6 PM.'
                                    },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="glass-card overflow-hidden animate-fade-in-up group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 cursor-pointer"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                        onClick={() => toggleCard(i)}
                                    >
                                        <div className="p-8">
                                            <div className="flex items-start justify-between">
                                                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${expandedCard === i ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-black text-slate-900 dark:text-white mb-1">{item.title}</h3>
                                            <p className="text-slate-500 dark:text-slate-400 font-medium mb-4">{item.info}</p>
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${item.statusColor} animate-pulse`}></span>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.status}</span>
                                            </div>
                                        </div>

                                        {/* Expandable Details */}
                                        <div className={`overflow-hidden transition-all duration-300 ${expandedCard === i ? 'max-h-40' : 'max-h-0'}`}>
                                            <div className="px-8 pb-8 pt-0 border-t border-slate-100 dark:border-slate-700">
                                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-4">{item.details}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="glass-card p-10 bg-slate-900 dark:bg-slate-800 text-white animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                                <h2 className="text-2xl font-black mb-4">Corporate Solutions</h2>
                                <p className="text-slate-400 dark:text-slate-300 leading-relaxed mb-8">
                                    Looking for bulk bookings or corporate travel management? Our B2B portal offers exclusive rates and dedicated account managers.
                                </p>
                                <button className="btn-primary py-3 px-8 text-sm">Enquire for Business</button>
                            </div>
                        </div>

                        {/* Quick Form Side */}
                        <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                            <div className="glass-card p-10 sticky top-32 bg-white dark:bg-slate-800">
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">Drop a Message</h3>
                                <form className="space-y-6">
                                    <div className="group">
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Your Name</label>
                                        <input type="text" placeholder="John Doe" className="input-premium" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Subject</label>
                                        <input type="text" placeholder="Help with Booking" className="input-premium" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Message</label>
                                        <textarea rows="4" placeholder="How can we help?" className="input-premium resize-none"></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary w-full py-4 text-sm font-black shadow-lg shadow-primary-200 dark:shadow-primary-900">
                                        Send Message →
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* FAQ Section with Accordion */}
                    <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">Frequently Asked Questions</h2>
                            <p className="text-slate-500 dark:text-slate-400 font-medium text-lg max-w-2xl mx-auto">
                                Quick answers to common queries. Click on any question to expand.
                            </p>
                        </div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {[
                                {
                                    question: 'How do I book a transport?',
                                    answer: 'You can book a transport by searching for your route on our homepage, selecting your preferred vehicle, and completing the booking form. Payment can be made online or at the terminal.'
                                },
                                {
                                    question: 'What is your cancellation policy?',
                                    answer: 'Cancellations made 24 hours before departure receive a full refund. Cancellations within 24 hours are subject to a 25% cancellation fee. No-shows are non-refundable.'
                                },
                                {
                                    question: 'Can I modify my booking?',
                                    answer: 'Yes, you can modify your booking up to 12 hours before departure through your account dashboard or by contacting our support team. Changes may be subject to availability and fare differences.'
                                },
                                {
                                    question: 'What payment methods do you accept?',
                                    answer: 'We accept all major credit/debit cards, UPI, net banking, and digital wallets. Cash payments are accepted at our terminals for walk-in bookings.'
                                },
                                {
                                    question: 'Is there a luggage limit?',
                                    answer: 'Each passenger is allowed one check-in bag (up to 20kg) and one carry-on bag (up to 7kg). Additional luggage can be added for a nominal fee at the time of booking.'
                                },
                                {
                                    question: 'Do you offer group discounts?',
                                    answer: 'Yes! Groups of 10 or more passengers are eligible for special discounts. Contact our corporate solutions team for customized group booking rates and dedicated support.'
                                }
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="glass-card overflow-hidden hover:bg-white dark:hover:bg-slate-800 transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full p-6 flex items-center justify-between text-left group"
                                    >
                                        <h3 className="text-lg font-black text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors pr-4">
                                            {faq.question}
                                        </h3>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="px-6 pb-6 border-t border-slate-100 dark:border-slate-700">
                                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

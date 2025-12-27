import React from 'react';

const Terms = () => {
    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="glass-card p-10 md:p-16 bg-white animate-fade-in-up shadow-sm border-none">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-8">Terms of Service</h1>
                        <p className="text-slate-500 font-medium mb-10 pb-10 border-b border-slate-100 italic">
                            Last updated: Dec 2025. By using TransportHub, you agree to the following conditions.
                        </p>

                        <div className="space-y-12">
                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">1. Booking and Reservations</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    All bookings made through TransportHub are subject to availability. A booking is only confirmed once a payment has been successfully processed and you have received an E-ticket.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">2. Cancellation and Refunds</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Cancellations made 24 hours prior to departure are eligible for a full refund. Cancellations within 12 hours may incur a 50% service charge. Instant bookings are non-refundable unless specified.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">3. Passenger Conduct</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    Passengers must arrive at the terminal at least 30 minutes before departure. Operators reserve the right to refuse service to any passenger displaying disruptive behavior.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h3 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    TransportHub acts as a facilitator and platform. We are not liable for mechanical delays, weather conditions, or lost luggage, though we will assist in resolution with the operator.
                                </p>
                            </section>
                        </div>

                        <div className="mt-16 p-8 bg-primary-50 rounded-2xl border border-primary-100">
                            <p className="text-xs font-bold text-primary-700 leading-relaxed">
                                Need clarification on these terms? Contact our legal team at legal@transporthub.in or call our support line.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;

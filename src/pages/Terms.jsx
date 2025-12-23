import React from 'react';

const Terms = () => {
    return (
        <div className="container terms-page">
            <h1 className="page-title">Terms of Service</h1>
            <div className="terms-content">
                <section className="terms-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>By accessing and using TransportHub, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
                </section>

                <section className="terms-section">
                    <h2>2. Booking & Cancellation</h2>
                    <p>Bookings are subject to availability. Cancellations made 24 hours prior to departure are eligible for a full refund. Late cancellations may incur a fee.</p>
                </section>

                <section className="terms-section">
                    <h2>3. User Responsibilities</h2>
                    <p>You agree to provide accurate information during booking. TransportHub is not responsible for issues arising from incorrect details provided by the user.</p>
                </section>

                <section className="terms-section">
                    <h2>4. Limitation of Liability</h2>
                    <p>TransportHub acts as an aggregator. We are not liable for delays, accidents, or service deficiencies caused by third-party transport operators.</p>
                </section>

                <p className="last-updated">Last updated: December 2025</p>
            </div>
        </div>
    );
};

export default Terms;

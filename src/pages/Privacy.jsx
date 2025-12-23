import React from 'react';

const Privacy = () => {
    return (
        <div className="container privacy-page">
            <h1 className="page-title">Privacy Policy</h1>
            <div className="privacy-content">
                <section className="privacy-section">
                    <h2>1. Information Collection</h2>
                    <p>We collect information you provide directly to us, such as when you create an account, make a booking, or contact customer support. This may include your name, email, phone number, and payment information.</p>
                </section>

                <section className="privacy-section">
                    <h2>2. Use of Information</h2>
                    <p>We use your information to facilitate bookings, communicate with you about your trips, improve our services, and send you relevant updates or promotional offers.</p>
                </section>

                <section className="privacy-section">
                    <h2>3. Data Protection</h2>
                    <p>We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.</p>
                </section>

                <section className="privacy-section">
                    <h2>4. Third-Party Sharing</h2>
                    <p>We may share your booking details with specific transport operators to fulfill your travel requests. We do not sell your personal data to advertisers.</p>
                </section>

                <p className="last-updated">Last updated: December 2025</p>
            </div>
        </div>
    );
};

export default Privacy;

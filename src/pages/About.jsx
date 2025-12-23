import React from 'react';

const About = () => {
    return (
        <div className="container about-page">
            <div className="about-hero">
                <h1 className="about-title">About TransportHub</h1>
                <p className="about-subtitle">Revolutionizing travel across India with speed, safety, and comfort.</p>
            </div>

            <div className="mission-section">
                <div className="mission-card">
                    <div className="mission-icon">🚀</div>
                    <h3>Our Mission</h3>
                    <p>To provide seamless, reliable, and affordable transport solutions for every traveler.</p>
                </div>
                <div className="mission-card">
                    <div className="mission-icon">🤝</div>
                    <h3>Our Vision</h3>
                    <p>Connecting people and places through a modernized network of verified operators.</p>
                </div>
                <div className="mission-card">
                    <div className="mission-icon">💡</div>
                    <h3>Our Values</h3>
                    <p>Safety first, customer obsession, and continuous innovation in travel tech.</p>
                </div>
            </div>

            <div className="story-section">
                <h2>Our Story</h2>
                <p>
                    Founded in 2025, TransportHub started with a simple idea: booking a bus or car shouldn't be a hassle.
                    We verified thousands of operators, built a robust platform, and made it easier than ever to travel inter-city.
                    Today, we serve millions of happy customers.
                </p>
            </div>
        </div>
    );
};

export default About;

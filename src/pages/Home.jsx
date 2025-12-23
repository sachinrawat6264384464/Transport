import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1 className="hero-title">
            Find Your <span className="highlight">Perfect Journey</span>
          </h1>
          <p className="hero-subtitle">
            Seamless travel across India. Book buses, cars, and more instantly.
          </p>

          {/* Search Form */}
          <form className="search-form" onSubmit={handleSearch}>
            <div className="form-group">
              <label className="form-label">From</label>
              <input
                type="text"
                className="form-input"
                placeholder="Departure City"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">To</label>
              <input
                type="text"
                className="form-input"
                placeholder="Destination City"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Date</label>
              <input
                type="date"
                className="form-input"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary search-btn">
              Search Transport
            </button>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section container">
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Safe Travel</h3>
          <p>Verified operators and sanitized vehicles for your safety.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast Booking</h3>
          <p>Book your tickets in less than 2 minutes with our fast flow.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎧</div>
          <h3>24/7 Support</h3>
          <p>Our customer support team is always here to help you.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;

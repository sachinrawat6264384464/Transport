import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const TransportDetail = () => {
  const { id } = useParams();
  const [transport, setTransport] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/transports/${id}/`)
      .then(response => setTransport(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!transport) return (
    <div className="container loading-state">
      <div className="spinner"></div>
      <p>Loading details...</p>
    </div>
  );

  return (
    <div className="container transport-detail-page">
      {/* Back Button */}
      <Link to="/search" className="back-link">
        ← Back to Results
      </Link>

      <div className="detail-grid">
        {/* Main Content */}
        <div className="detail-main">
          {/* Header Card */}
          <div className="detail-card">
            <div className="detail-header">
              <div>
                <h1 className="detail-title">{transport.name}</h1>
                <span className="vehicle-badge">
                  {transport.vehicle_type}
                </span>
              </div>
              <div className="text-right">
                <span className="price-large">₹{transport.fare}</span>
                <div className="detail-sub text-right">Per Ticket</div>
              </div>
            </div>

            {/* Route Visualizer */}
            <div className="route-visualizer">
              <div className="visualizer-item text-left">
                <div className="time-large">{new Date(transport.depart_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <div className="city-large">{transport.from_city}</div>
              </div>
              <div className="visualizer-divider">
                <span className="duration">Direct Route</span>
                <div className="line-dashed"></div>
              </div>
              <div className="visualizer-item text-right">
                <div className="time-large">{new Date(transport.arrive_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <div className="city-large">{transport.to_city}</div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="features-grid">
              {[
                { label: 'Seats', value: `${transport.seats_available} Left`, icon: '💺' },
                { label: 'AC', value: 'Yes', icon: '❄️' },
                { label: 'Rating', value: '4.8/5', icon: '⭐' },
                { label: 'Refund', value: 'Flexible', icon: '💸' },
              ].map((feature, i) => (
                <div key={i} className="feature-item">
                  <div className="feature-icon-sm">{feature.icon}</div>
                  <div className="feature-label">{feature.label}</div>
                  <div className="feature-value">{feature.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="detail-sidebar">
          {/* Booking Card */}
          <div className="booking-card-sidebar">
            <h3>Ready to go?</h3>
            <p>Secure your seat now. Instant confirmation sent to your email.</p>
            <Link to={`/booking/${transport.id}`} className="btn btn-primary btn-full">
              Book Ticket Now
            </Link>
            <div className="security-note">
              🔒 Secure Payment Encryption
            </div>
          </div>

          {/* Support Card */}
          <div className="support-card">
            <h3>Need Help?</h3>
            <div className="support-actions">
              <a href={`tel:${transport.phone}`} className="support-link">
                <span className="icon">📞</span> Call Operator
              </a>
              <a href={`https://wa.me/${transport.whatsapp}`} className="support-link">
                <span className="icon">💬</span> WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportDetail;

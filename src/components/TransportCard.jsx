import React from 'react';
import { Link } from 'react-router-dom';

const TransportCard = ({ transport }) => {
  // Helper to calculate duration
  const getDuration = () => {
    const diff = new Date(transport.arrive_time) - new Date(transport.depart_time);
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="transport-card">
      <div className="card-header">
        <h3 className="transport-name">{transport.name}</h3>
        <span className="vehicle-badge">{transport.vehicle_type}</span>
      </div>

      <div className="card-body">
        <div className="route-info">
          <div className="time-loc">
            <span className="time">{new Date(transport.depart_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span className="city">{transport.from_city}</span>
          </div>

          <div className="duration-divider">
            <span className="duration">{getDuration()}</span>
            <div className="line"></div>
          </div>

          <div className="time-loc text-right">
            <span className="time">{new Date(transport.arrive_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            <span className="city">{transport.to_city}</span>
          </div>
        </div>

        <div className="fare-info">
          <span className="price">₹{transport.fare}</span>
          <span className="seats">{transport.seats_available} seats left</span>
        </div>
      </div>

      <div className="card-footer">
        <div className="contact-actions">
          {/* Prevent navigation when clicking contact buttons */}
          <a href={`https://wa.me/${transport.whatsapp}`} className="icon-btn whatsapp" onClick={(e) => e.stopPropagation()}>
            💬
          </a>
          <a href={`tel:${transport.phone}`} className="icon-btn call" onClick={(e) => e.stopPropagation()}>
            📞
          </a>
        </div>
        <Link to={`/transport/${transport.id}`} className="btn btn-outline">Details</Link>
        <Link to={`/booking/${transport.id}`} className="btn btn-primary">Book</Link>
      </div>
    </div>
  );
};

export default TransportCard;

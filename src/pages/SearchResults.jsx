import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import TransportCard from '../components/TransportCard';

const SearchResults = () => {
  const [transports, setTransports] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // Parse query parameters
  const query = new URLSearchParams(location.search);
  const from = query.get('from');
  const to = query.get('to');
  const date = query.get('date');

  const fetchTransports = async () => {
    setLoading(true);
    try {
      // Updated to use the correct API endpoint and parameters
      // Assuming your TransportViewSet filters by from_city, to_city, etc.
      const response = await axios.get('http://127.0.0.1:8000/api/transports/', {
        params: {
          from_city: from,  // Ensure these match your Django filter fields
          to_city: to,
          // date: date // Add date filtering if supported by backend
        }
      });
      setTransports(response.data);
    } catch (error) {
      console.error('Error fetching transports:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransports();
  }, [location.search]);

  return (
    <div className="container search-results-page">
      <div className="results-header">
        <Link to="/" className="back-link">← Back</Link>
        <h2>{from} to {to}</h2>
        <div className="search-meta">
          <span>{new Date(date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{transports.length} Results</span>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Finding best routes...</p>
        </div>
      ) : transports.length > 0 ? (
        <div className="results-grid">
          {transports.map((transport) => (
            <TransportCard key={transport.id} transport={transport} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🏜️</div>
          <h3>No Transports Found</h3>
          <p>Try searching for a different date or route.</p>
          <Link to="/" className="btn btn-primary">Search Again</Link>
        </div>
      )}
    </div>
  );
};

export default SearchResults;

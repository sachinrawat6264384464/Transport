import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { getTransports } from '../api';
import TransportCard from '../components/TransportCard';

const SearchResults = () => {
  const [transports, setTransports] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const from = query.get('from');
  const to = query.get('to');
  const date = query.get('date');
  const selectedDay = query.get('day');

  const fetchTransports = async () => {
    setLoading(true);
    try {
      const response = await getTransports({
        from_city: from,
        to_city: to,
      });

      let filteredTransports = response.data;

      // Filter by day of week if selected
      if (selectedDay) {
        filteredTransports = filteredTransports.filter(transport => {
          // Robust check: split comma-separated days and check for exact match
          if (!transport.operating_days) return false;
          const days = transport.operating_days.split(',').map(d => d.trim());
          return days.includes(selectedDay);
        });
      }

      setTransports(filteredTransports);
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="animate-fade-in-up">
            <Link to="/" className="text-primary-600 dark:text-primary-400 font-bold text-sm hover:underline mb-4 block">
              ← Change Search
            </Link>
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">
              {from} <span className="text-slate-300 dark:text-slate-700 mx-2">→</span> {to}
            </h1>
            <div className="flex items-center gap-4 mt-2 text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap overflow-x-auto no-scrollbar pb-1 transition-colors">
              <span className="flex items-center gap-1">📅 {new Date(date).toLocaleDateString(undefined, { dateStyle: 'long' })}</span>
              {selectedDay && (
                <>
                  <span className="text-slate-300 dark:text-slate-700">•</span>
                  <span className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-black">📆 {selectedDay}day</span>
                </>
              )}
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="flex items-center gap-1">🚌 {transports.length} Options Found</span>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 animate-pulse">
            <div className="w-16 h-16 border-4 border-slate-200 dark:border-slate-800 border-t-primary-600 rounded-full animate-spin mb-6"></div>
            <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs transition-colors">Scanning Routes...</p>
          </div>
        ) : transports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transports.map((transport, idx) => (
              <div key={transport.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <TransportCard transport={transport} />
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card max-w-2xl mx-auto py-20 px-10 text-center animate-fade-in bg-white dark:bg-slate-900/50">
            <div className="text-6xl mb-8 animate-float">🏜️</div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 transition-colors">No Journeys Found</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto leading-relaxed text-lg transition-colors">
              {selectedDay
                ? `No transports available for this route on ${selectedDay}day. Try selecting a different day or exploring other routes!`
                : 'It seems there are no transports available for this route on the selected date. Try exploring other dates or cities!'
              }
            </p>
            <Link to="/" className="btn-primary inline-block">Search Again</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;

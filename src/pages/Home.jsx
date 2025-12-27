import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTransports } from '../api';
import TransportCard from '../components/TransportCard';

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [topTransports, setTopTransports] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchInitialTransports();
  }, []);

  const fetchInitialTransports = async () => {
    try {
      const response = await getTransports();
      setTopTransports(response.data.slice(0, 6));
    } catch (error) {
      console.error('Error fetching initial transports:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (from) params.append('from', from);
    if (to) params.append('to', to);
    if (date) params.append('date', date);
    if (selectedDay) params.append('day', selectedDay);
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Background Image & Overlay */}
      <div className="absolute top-0 inset-x-0 h-[80vh] z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=2000"
          alt="Travel Background"
          className="w-full h-full object-cover opacity-30 animate-scale-in"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/60 to-slate-50 dark:from-slate-950/10 dark:via-slate-950/60 dark:to-slate-950"></div>
      </div>

      {/* Background Blobs for extra depth */}
      <div className="absolute top-0 -right-40 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute top-40 -left-20 w-80 h-80 bg-secondary-200/20 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '1.5s' }}></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-6 transition-colors">
              Your Journey <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-400">Starts Here.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-colors">
              Experience the future of transport booking. Premium, responsive, and secure travel at your fingertips.
            </p>
          </div>

          {/* Search Form Card */}
          <div className="glass-card max-w-5xl mx-auto p-2 md:p-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3" onSubmit={handleSearch}>
              <div className="relative group p-4 text-left border-r border-slate-100 dark:border-slate-800 last:border-0">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 group-focus-within:text-primary-500 transition-colors">From</label>
                <input
                  type="text"
                  className="w-full bg-transparent focus:outline-none text-slate-900 dark:text-white font-semibold placeholder:text-slate-300 dark:placeholder:text-slate-700"
                  placeholder="Departure"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  required
                />
              </div>

              <div className="relative group p-4 text-left border-r border-slate-100 dark:border-slate-800 last:border-0">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 group-focus-within:text-primary-500 transition-colors">To</label>
                <input
                  type="text"
                  className="w-full bg-transparent focus:outline-none text-slate-900 dark:text-white font-semibold placeholder:text-slate-300 dark:placeholder:text-slate-700"
                  placeholder="Destination"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  required
                />
              </div>

              <div className="relative group p-4 text-left border-r border-slate-100 dark:border-slate-800 last:border-0">
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 group-focus-within:text-primary-500 transition-colors">Date</label>
                <input
                  type="date"
                  className="w-full bg-transparent focus:outline-none text-slate-900 dark:text-white font-semibold cursor-pointer"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn-primary flex items-center justify-center gap-2 group">
                <span>Explore Trips</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </form>

            {/* Day of Week Filter */}
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
              <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3 text-center">Filter by Day of Week</label>
              <div className="flex flex-wrap justify-center gap-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setSelectedDay(selectedDay === day ? '' : day)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all duration-300 border-2 ${selectedDay === day
                      ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-200 dark:shadow-primary-900 scale-105'
                      : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary-300 dark:hover:border-primary-600 hover:scale-105'
                      }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              {selectedDay && (
                <p className="text-center mt-3 text-sm font-medium text-primary-600 dark:text-primary-400 animate-fade-in">
                  Showing transports available on <span className="font-black">{selectedDay}day</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Available Trips */}
      <section className="py-24 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2 tracking-tight transition-colors">Top Routes Today</h2>
              <p className="text-slate-500 dark:text-slate-400">Most popular journeys hand-picked for you.</p>
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin"></div>
            </div>
          ) : (
            (() => {
              const filtered = selectedDay
                ? topTransports.filter(t => t.operating_days && t.operating_days.split(',').includes(selectedDay))
                : topTransports;

              return filtered.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtered.map((t, idx) => (
                    <div key={t.id} className="animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <TransportCard transport={t} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 glass-card bg-white/50 dark:bg-slate-900/50">
                  <div className="text-5xl mb-6">🔍</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Transports Found</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    {selectedDay
                      ? `We found no transports operating on ${selectedDay}day for these routes.`
                      : 'No trips available at the moment. Try searching above!'}
                  </p>
                </div>
              );
            })()
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: '🛡️', title: 'Safe Travel', desc: 'Secure payments and verified operators for peace of mind.', color: 'from-emerald-50 to-emerald-100/30 dark:from-emerald-950/20 dark:to-emerald-900/10' },
              { icon: '⚡', title: 'Express Booking', desc: 'Confirm your seats in seconds with our optimized flow.', color: 'from-primary-50 to-primary-100/30 dark:from-primary-950/20 dark:to-primary-900/10' },
              { icon: '🎧', title: 'Elite Support', desc: 'Dedicated 24/7 concierge for all your travel needs.', color: 'from-amber-50 to-amber-100/30 dark:from-amber-950/20 dark:to-amber-900/10' },
            ].map((f, i) => (
              <div key={i} className={`p-10 rounded-3xl bg-gradient-to-br ${f.color} border border-white dark:border-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
                <div className="text-5xl mb-8 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>{f.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 transition-colors">{f.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

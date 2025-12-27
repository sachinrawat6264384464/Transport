import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import SeatSelector from '../components/SeatSelector';
import { getTransport } from '../api';

const TransportDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [transport, setTransport] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    fetchTransportDetails();
  }, [id]);

  const fetchTransportDetails = async () => {
    try {
      const response = await getTransport(id);
      setTransport(response.data);

      const seats = response.data.bookings
        ? response.data.bookings.flatMap(b => b.selected_seats.split(',').filter(s => s))
        : [];
      setBookedSeats(seats);
    } catch (error) {
      console.error('Error fetching transport:', error);
    }
  };

  const calculateTotal = () => {
    if (!transport) return 0;
    return selectedSeats.reduce((total, seat) => {
      const isWindow = seat[0] === 'A' || seat[0] === 'D';
      return total + transport.fare + (isWindow ? transport.window_fare : 0);
    }, 0);
  };

  const handleBookingClick = () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat');
      return;
    }
    navigate(`/booking/${id}`, {
      state: {
        selectedSeats,
        totalFare: calculateTotal()
      }
    });
  };

  if (!transport) return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-4">
        <Link to="/search" className="text-primary-600 font-bold text-sm hover:underline mb-8 inline-block animate-fade-in">
          ← Back to Results
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-8 animate-fade-in-up">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-10 border-b border-slate-100">
                <div className="text-left">
                  <span className="px-3 py-1 bg-primary-100 text-primary-600 text-[10px] font-black rounded-full uppercase tracking-widest mb-3 inline-block">
                    {transport.vehicle_type}
                  </span>
                  <h1 className="text-4xl font-black text-slate-900 tracking-tight">{transport.name}</h1>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {transport.operating_days?.split(',').map(day => (
                      <span key={day} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[9px] font-black rounded-md uppercase border border-slate-200">
                        {day}
                      </span>
                    ))}
                  </div>
                  {transport.seats_available < 10 && (
                    <p className="text-rose-600 font-black text-xs mt-3 flex items-center gap-1 animate-pulse">
                      <span>⚠️</span> Only {transport.seats_available} seats remaining!
                    </p>
                  )}
                </div>
                <div className="text-left md:text-right">
                  <div className="text-4xl font-black text-primary-600 leading-none">₹{transport.fare}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-tighter mt-1">Starting Price</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="text-left">
                  <div className="text-3xl font-black text-slate-900">{new Date(transport.depart_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                  <div className="text-lg font-bold text-slate-600 mt-1">{transport.from_city}</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="text-xs font-black text-primary-500 uppercase tracking-widest mb-3">Direct</div>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary-500 shadow-lg shadow-primary-200 animate-pulse"></div>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-3xl font-black text-slate-900">{new Date(transport.arrive_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                  <div className="text-lg font-bold text-slate-600 mt-1">{transport.to_city}</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">Select Seats</h3>
              <p className="text-slate-500 mb-10">Pick your preferred spot. Window seats have a premium charge.</p>

              <div className="p-10 bg-slate-50/50 rounded-3xl border border-dashed border-slate-200">
                <SeatSelector
                  transport={transport}
                  bookedSeats={bookedSeats}
                  onSeatSelect={setSelectedSeats}
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 sticky top-32">
              <h3 className="text-xl font-black text-slate-900 mb-6 tracking-tight">Booking Summary</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-medium">Selected Seats</span>
                  <span className="font-bold text-slate-900">{selectedSeats.join(', ') || 'None'}</span>
                </div>
                <div className="flex justify-between items-center border-t border-slate-100 pt-6">
                  <span className="text-slate-900 font-bold">Total Payable</span>
                  <span className="text-3xl font-black text-primary-600">₹{calculateTotal()}</span>
                </div>
              </div>

              <button
                onClick={handleBookingClick}
                className="btn-primary w-full py-4 text-lg"
                disabled={selectedSeats.length === 0}
              >
                Book Seats Now
              </button>

              <div className="flex items-center justify-center gap-2 mt-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                <span>🔒 Secure Checkout</span>
                <span>•</span>
                <span>⚡ Instant E-Ticket</span>
              </div>
            </div>

            <div className="glass-card p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <h3 className="text-lg font-bold mb-4">Operator Support</h3>
              <div className="grid grid-cols-2 gap-3">
                <a href={`tel:${transport.phone}`} className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-sm font-bold">
                  📞 Call
                </a>
                <a href={`https://wa.me/${transport.whatsapp}`} className="flex items-center justify-center gap-2 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-sm font-bold">
                  💬 Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportDetail;

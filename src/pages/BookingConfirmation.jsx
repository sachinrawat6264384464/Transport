import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const { id } = useParams();
  const location = useLocation();
  const [booking] = useState(location.state?.booking || null);
  const [bookingRef] = useState(() => `TR-${id}-${Math.floor(Math.random() * 10000)}`);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20 print:p-0 print:bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-10 md:p-16 text-center animate-fade-in-up print:shadow-none print:border print:border-slate-200">
            <div className="mb-10 inline-flex items-center justify-center w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full text-4xl shadow-inner animate-float print:hidden">
              ✓
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Booking Confirmed!</h1>
            <p className="text-slate-500 text-lg mb-12 max-w-md mx-auto">
              Your ticket is ready. We've sent the confirmation details to <span className="text-slate-900 font-bold underline decoration-primary-500 decoration-2">{booking?.email || 'your email'}</span>.
            </p>

            {/* Ticket Card */}
            <div className="bg-slate-900 text-white rounded-3xl overflow-hidden mb-12 shadow-2xl relative">
              <div className="p-8 border-b border-white/10 flex justify-between items-center bg-white/5">
                <div className="text-left font-black tracking-widest text-[#94a3b8] uppercase text-[10px]">E-Ticket Entry</div>
                <div className="text-right font-black tracking-widest text-emerald-400 uppercase text-[10px]">Valid for Travel</div>
              </div>

              <div className="p-10 text-left space-y-12">
                <div className="flex justify-between gap-8">
                  <div className="space-y-1 flex-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Booking ID</label>
                    <div className="text-xl font-black text-white">#{bookingRef}</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date Issued</label>
                    <div className="text-sm font-bold text-white">{new Date(booking?.booking_time || Date.now()).toLocaleDateString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Passenger</label>
                    <div className="text-lg font-bold text-white leading-tight">{booking?.user_name}</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Seats</label>
                    <div className="text-xl font-black text-primary-400">{booking?.selected_seats}</div>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex justify-between items-end">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Total Paid</div>
                    <div className="text-4xl font-black text-white leading-none">₹{booking?.total_fare}</div>
                  </div>
                  <div className="w-16 h-16 bg-white p-2 rounded-xl">
                    <div className="w-full h-full bg-slate-900 rounded-[4px] relative overflow-hidden opacity-50">
                      {/* Simulated QR Code dots */}
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="absolute w-2 h-2 bg-white" style={{ top: `${(i % 3) * 33}%`, left: `${Math.floor(i / 3) * 33}%`, opacity: Math.random() }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative ticket cutouts */}
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-slate-50 rounded-full -translate-y-1/2 print:bg-white"></div>
              <div className="absolute top-1/2 -right-4 w-8 h-8 bg-slate-50 rounded-full -translate-y-1/2 print:bg-white"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 print:hidden">
              <button onClick={handlePrint} className="btn-primary flex-1 py-4 flex items-center justify-center gap-2">
                <span>Download PDF Ticket</span>
                <span>📥</span>
              </button>
              <Link to="/" className="btn-outline flex-1 py-4 flex items-center justify-center gap-2 hover:bg-slate-100">
                <span>Go to Dashboard</span>
                <span>🏠</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;

import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { createBooking } from '../api';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const { selectedSeats = [], totalFare = 0 } = location.state || {};

    const [formData, setFormData] = useState({
        user_name: '',
        phone: '',
        email: '',
        seats_booked: selectedSeats.length
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createBooking({
                ...formData,
                transport: id,
                selected_seats: selectedSeats.join(','),
                total_fare: totalFare
            });
            navigate(`/booking-confirmation/${response.data.id}`, { state: { booking: response.data } });
        } catch (error) {
            console.error('Error booking:', error);
            alert('Booking failed. Please check inputs and try again.');
        }
    };

    if (selectedSeats.length === 0) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="glass-card max-w-lg w-full p-12 text-center animate-fade-in-up">
                    <div className="text-6xl mb-8 animate-float">💺</div>
                    <h2 className="text-3xl font-black text-slate-900 mb-4">No Seats Selected</h2>
                    <p className="text-slate-500 mb-10 text-lg">Your selection timed out or you haven't picked any seats yet.</p>
                    <button onClick={() => navigate(-1)} className="btn-primary w-full">Go Back to Selection</button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 animate-fade-in-up text-center md:text-left">
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">Complete Your Booking</h1>
                        <p className="text-slate-500 font-medium">Passenger Information for Seats: <span className="text-primary-600 font-bold">{selectedSeats.join(', ')}</span></p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-3">
                            <div className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="group">
                                            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600 transition-colors">Full Passenger Name</label>
                                            <input
                                                type="text"
                                                className="input-premium"
                                                placeholder="e.g. Rahul Sharma"
                                                required
                                                value={formData.user_name}
                                                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="group">
                                                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600 transition-colors">WhatsApp Number</label>
                                                <input
                                                    type="tel"
                                                    className="input-premium"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    required
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className="group">
                                                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600 transition-colors">Email Address</label>
                                                <input
                                                    type="email"
                                                    className="input-premium"
                                                    placeholder="name@example.com"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            className="btn-primary w-full py-4 text-lg shadow-xl"
                                        >
                                            Confirm Ticket • ₹{totalFare}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="glass-card p-8 animate-fade-in-up space-y-8" style={{ animationDelay: '0.2s' }}>
                                <h3 className="text-xl font-black text-slate-900 tracking-tight">Order Details</h3>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="text-sm font-bold text-slate-900">Adult Fare</div>
                                            <div className="text-xs text-slate-400">{selectedSeats.length} Seats Selected</div>
                                        </div>
                                        <div className="font-bold">₹{totalFare}</div>
                                    </div>
                                    <div className="flex justify-between items-center text-emerald-600">
                                        <div className="text-sm font-bold">Taxes & Fees</div>
                                        <div className="text-xs font-black uppercase tracking-widest bg-emerald-100 px-2 py-0.5 rounded-full">Included</div>
                                    </div>
                                    <div className="pt-6 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-slate-900 font-bold">Total Payable</span>
                                        <span className="text-3xl font-black text-primary-600 leading-none">₹{totalFare}</span>
                                    </div>
                                </div>

                                <div className="p-4 bg-primary-50 rounded-2xl border border-primary-100 flex gap-4">
                                    <span className="text-2xl">🎁</span>
                                    <div>
                                        <div className="text-xs font-black text-primary-700 uppercase tracking-wider">Travel Insurance</div>
                                        <p className="text-[10px] text-primary-600 mt-0.5">Complementary coverage included for this trip.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;

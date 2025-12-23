import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Booking = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user_name: '',
        phone: '',
        email: '',
        seats_booked: 1
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/api/bookings/', { ...formData, transport: id });
            navigate(`/booking-confirmation/${id}`);
        } catch (error) {
            console.error('Error booking:', error);
            alert('Booking failed. Please check inputs.');
        }
    };

    return (
        <div className="container booking-page">
            <div className="booking-container">
                <div className="booking-header">
                    <h2>Complete Your Booking</h2>
                    <p>Fill in your details to secure your seat.</p>
                </div>

                <div className="booking-card">
                    <form onSubmit={handleSubmit} className="booking-form">
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="John Doe"
                                required
                                onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-input"
                                placeholder="+91 1234567890"
                                required
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <input
                                type="email"
                                className="form-input"
                                placeholder="john@example.com"
                                required
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Number of Seats</label>
                            <div className="input-with-suffix">
                                <input
                                    type="number"
                                    className="form-input"
                                    min="1"
                                    max="10"
                                    value={formData.seats_booked}
                                    required
                                    onChange={(e) => setFormData({ ...formData, seats_booked: e.target.value })}
                                />
                                <span className="input-suffix">Seats</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary btn-full booking-submit"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>

                <p className="terms-text">
                    By booking, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default Booking;

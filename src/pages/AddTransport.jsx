import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTransport } from '../api';

const AddTransport = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        from_city: '',
        to_city: '',
        depart_time: '',
        arrive_time: '',
        fare: '',
        seats_available: '',
        vehicle_type: 'Bus',
        whatsapp: '',
        phone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTransport(formData);
            alert('Transport added successfully');
            navigate('/admin/dashboard');
        } catch (error) {
            alert('Error adding transport');
        }
    };

    return (
        <div className="container add-transport-page">
            <div className="add-transport-card">
                <h2 className="page-title">Add New Transport</h2>
                <form onSubmit={handleSubmit} className="add-transport-form">
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-label">Transport Name</label>
                            <input type="text" required onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Vehicle Type</label>
                            <select onChange={(e) => setFormData({ ...formData, vehicle_type: e.target.value })} className="form-input select-input">
                                <option value="Bus">Bus</option>
                                <option value="Car">Car</option>
                                <option value="Tempo">Tempo</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">From City</label>
                            <input type="text" required onChange={(e) => setFormData({ ...formData, from_city: e.target.value })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">To City</label>
                            <input type="text" required onChange={(e) => setFormData({ ...formData, to_city: e.target.value })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Departure Time</label>
                            <input type="datetime-local" required onChange={(e) => setFormData({ ...formData, depart_time: e.target.value })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Arrival Time</label>
                            <input type="datetime-local" required onChange={(e) => setFormData({ ...formData, arrive_time: e.target.value })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Fare (₹)</label>
                            <input type="number" required onChange={(e) => setFormData({ ...formData, fare: e.target.value })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Seats Available</label>
                            <input type="number" required onChange={(e) => setFormData({ ...formData, seats_available: e.target.value })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">WhatsApp Number</label>
                            <input type="text" required onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Phone Number</label>
                            <input type="text" required onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="form-input" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Create Transport</button>
                </form>
            </div>
        </div>
    );
};

export default AddTransport;

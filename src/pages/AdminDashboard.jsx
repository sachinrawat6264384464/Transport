import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTransports, getBookings } from '../api';

const AdminDashboard = () => {
    const [transports, setTransports] = useState([]);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Removed forced login condition as requested
        fetchData();
    }, [navigate]);

    const fetchData = async () => {
        try {
            const transportRes = await getTransports();
            const bookingRes = await getBookings();
            setTransports(transportRes.data);
            setBookings(bookingRes.data);
        } catch (error) {
            console.error('Error fetching admin data', error);
            if (error.response && error.response.status === 401) {
                // Token invalid or expired
                localStorage.removeItem('token');
                navigate('/admin');
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin');
    };

    return (
        <div className="container admin-dashboard">
            <div className="admin-header">
                <h1>Operator Dashboard</h1>
                <button onClick={handleLogout} className="btn btn-outline logout-btn">Logout</button>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <h3>Total Transports</h3>
                    <div className="stat-value">{transports.length}</div>
                </div>
                <div className="stat-card">
                    <h3>Total Bookings</h3>
                    <div className="stat-value">{bookings.length}</div>
                </div>
                <div className="stat-card">
                    <h3>Revenue (Est.)</h3>
                    <div className="stat-value">₹{bookings.reduce((sum, b) => sum + (b.total_fare || 0), 0)}</div>
                </div>
            </div>

            <div className="dashboard-section">
                <div className="section-header">
                    <h2>Manage Transports</h2>
                    <Link to="/admin/add-transport" className="btn btn-primary">+ Add New</Link>
                </div>

                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Route</th>
                                <th>Type</th>
                                <th>Fare</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transports.map(t => (
                                <tr key={t.id}>
                                    <td>{t.name}</td>
                                    <td>{t.from_city} → {t.to_city}</td>
                                    <td>{t.vehicle_type}</td>
                                    <td>₹{t.fare}</td>
                                    <td>
                                        <button className="action-link delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="dashboard-section">
                <h2>Recent Bookings</h2>
                <div className="table-container">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Booking ID</th>
                                <th>Passenger</th>
                                <th>Transport</th>
                                <th>Seats</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map(b => (
                                <tr key={b.id}>
                                    <td>#{b.id}</td>
                                    <td>{b.user_name}</td>
                                    <td>{b.transport_name || 'N/A'}</td>
                                    <td>{b.seats_booked}</td>
                                    <td>{new Date(b.booking_time).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

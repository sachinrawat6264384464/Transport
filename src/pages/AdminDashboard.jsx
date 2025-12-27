import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTransports, getBookings, deleteTransport, deleteBooking } from '../api';

const AdminDashboard = () => {
    const [transports, setTransports] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
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
                localStorage.removeItem('token');
                navigate('/admin');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteTransport = async (id) => {
        if (!window.confirm("Are you sure you want to terminate this vehicle?")) return;
        try {
            await deleteTransport(id);
            setTransports(transports.filter(t => t.id !== id));
        } catch (error) {
            alert("Error deleting transport");
        }
    };

    const handleDeleteBooking = async (id) => {
        if (!window.confirm("Are you sure you want to delete this transaction?")) return;
        try {
            await deleteBooking(id);
            setBookings(bookings.filter(b => b.id !== id));
        } catch (error) {
            alert("Error deleting booking");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/admin');
    };

    const stats = [
        {
            label: 'Active Fleet',
            value: transports.length,
            icon: '🚌',
            gradient: 'from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700',
            hoverGradient: 'hover:from-blue-600 hover:to-indigo-700 dark:hover:from-blue-700 dark:hover:to-indigo-800',
            glowColor: 'from-blue-400/0 via-blue-400/20 to-blue-400/0'
        },
        {
            label: 'Confirmed Bookings',
            value: bookings.length,
            icon: '🎫',
            gradient: 'from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700',
            hoverGradient: 'hover:from-emerald-600 hover:to-teal-700 dark:hover:from-emerald-700 dark:hover:to-teal-800',
            glowColor: 'from-emerald-400/0 via-emerald-400/20 to-emerald-400/0'
        },
        {
            label: 'Total Revenue',
            value: `₹${bookings.reduce((sum, b) => sum + (b.total_fare || 0), 0)}`,
            icon: '💰',
            gradient: 'from-amber-500 to-orange-600 dark:from-amber-600 dark:to-orange-700',
            hoverGradient: 'hover:from-amber-600 hover:to-orange-700 dark:hover:from-amber-700 dark:hover:to-orange-800',
            glowColor: 'from-amber-400/0 via-amber-400/20 to-amber-400/0'
        },
    ];

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="w-12 h-12 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-24 pb-20 md:pt-32 transition-colors duration-300">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-12 animate-fade-in-up">
                    <div className="space-y-2">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary-500 rounded-full"></span>
                            <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">System Control</h1>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 font-medium md:text-lg">Real-time oversight for your transport logistics.</p>
                    </div>
                    <div className="flex flex-wrap gap-4 sm:gap-6">

                        <button onClick={handleLogout} className="btn-outline flex-1 sm:flex-none">Exit Hub</button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`glass-card p-6 md:p-8 group animate-fade-in-up bg-gradient-to-br ${stat.gradient} ${stat.hoverGradient} hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden cursor-pointer`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                        >
                            {/* Animated background glow on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-r ${stat.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="flex items-start justify-between mb-6 relative z-10">
                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm text-white shadow-lg text-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    {stat.icon}
                                </div>
                                <div className="text-[10px] font-black text-white/90 bg-white/20 dark:bg-white/10 px-2 py-1 rounded-full">+12.5%</div>
                            </div>
                            <div className="space-y-1 relative z-10">
                                <div className="text-xs font-black text-white/80 uppercase tracking-[0.15em]">{stat.label}</div>
                                <div className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">{stat.value}</div>
                            </div>
                        </div>
                    ))}


                    {/* Add Transport Quick Action Card */}
                    <div
                        onClick={() => navigate('/admin/add-transport')}
                        className="glass-card p-6 md:p-8 group animate-fade-in-up bg-gradient-to-br from-primary-500 to-primary-600 dark:from-purple-600 dark:to-indigo-700 hover:from-primary-600 hover:to-primary-700 dark:hover:from-purple-700 dark:hover:to-indigo-800 cursor-pointer hover:shadow-2xl dark:hover:shadow-purple-500/30 transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
                        style={{ animationDelay: '0.3s' }}
                    >
                        {/* Animated background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 dark:from-purple-400/0 dark:via-purple-400/20 dark:to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="flex items-start justify-between mb-6 relative z-10">
                            <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/20 dark:bg-white/10 backdrop-blur-sm text-white shadow-lg text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                ➕
                            </div>
                            <div className="text-[10px] font-black text-white/80 bg-white/20 dark:bg-white/10 px-2 py-1 rounded-full animate-pulse">QUICK ACTION</div>
                        </div>
                        <div className="space-y-2 relative z-10">
                            <div className="text-xs font-black text-white/80 uppercase tracking-[0.15em]">Quick Access</div>
                            <div className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">Add Transport</div>
                            <p className="text-sm text-white/70 font-medium">Register a new vehicle to your fleet</p>
                        </div>
                        <div className="mt-4 flex items-center gap-2 text-white/90 font-bold text-sm group-hover:gap-3 transition-all relative z-10">
                            <span>Click to Add</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:gap-16">
                    {/* Fleet Management Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between px-2">
                            <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                                <span className="text-2xl text-primary-500">🛡️</span> Active Fleet
                            </h2>
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full">
                                {transports.length} Verified Units
                            </span>
                        </div>

                        <div className="glass-card overflow-hidden bg-white dark:bg-slate-900/40 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="overflow-x-auto no-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[700px]">
                                    <thead>
                                        <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Unit Identification</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Route & Days</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Class</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Seating Status</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Pricing</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Ops</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                        {transports.map(t => (
                                            <tr key={t.id} className="hover:bg-primary-50/30 dark:hover:bg-primary-500/5 transition-colors group">
                                                <td className="px-8 py-6">
                                                    <div className="font-black text-slate-900 dark:text-slate-200 group-hover:text-primary-500 transition-colors">{t.name}</div>
                                                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-600">TRK-UID-{t.id.toString().padStart(4, '0')}</div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-400">
                                                            <span>{t.from_city}</span>
                                                            <span className="text-slate-300 dark:text-slate-700">→</span>
                                                            <span>{t.to_city}</span>
                                                        </div>
                                                        <div className="text-[9px] font-black text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-2 py-0.5 rounded-md inline-flex self-start border border-primary-100 dark:border-primary-900/30">
                                                            {t.operating_days || 'Daily'}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <span className="px-2.5 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black rounded-lg uppercase tracking-wider">{t.vehicle_type}</span>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className={`text-sm font-black ${t.seats_available < 5 ? 'text-rose-600 animate-pulse' : 'text-slate-600 dark:text-slate-400'}`}>
                                                        {t.seats_available} / {t.total_seats}
                                                        <div className="w-16 h-1 bg-slate-100 dark:bg-slate-800 rounded-full mt-1 overflow-hidden">
                                                            <div
                                                                className={`h-full transition-all duration-1000 ${t.seats_available < 5 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                                                                style={{ width: `${(t.seats_available / t.total_seats) * 100}%` }}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="font-black text-slate-900 dark:text-white text-lg">₹{t.fare}</div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <button
                                                        onClick={() => handleDeleteTransport(t.id)}
                                                        className="text-rose-400 hover:text-rose-600 font-black text-[10px] uppercase tracking-[0.1em] transition-all hover:tracking-[0.15em] bg-rose-50 dark:bg-rose-950/20 hover:bg-rose-100 dark:hover:bg-rose-950/40 px-3 py-2 rounded-lg"
                                                    >
                                                        Terminate
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Booking Stream Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between px-2">
                            <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                                <span className="text-2xl text-emerald-600">📡</span> Transaction Stream
                            </h2>
                            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-full"> Live Bookings </span>
                        </div>

                        <div className="glass-card overflow-hidden bg-white dark:bg-slate-900/40 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="overflow-x-auto no-scrollbar">
                                <table className="w-full text-left border-collapse min-w-[700px]">
                                    <thead>
                                        <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Passenger</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Linked Service</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Capacity</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Amount</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Timestamp</th>
                                            <th className="px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">Ops</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                                        {bookings.map(b => (
                                            <tr key={b.id} className="hover:bg-emerald-50/30 dark:hover:bg-emerald-500/5 transition-colors">
                                                <td className="px-8 py-6">
                                                    <div className="font-black text-slate-900 dark:text-slate-200">{b.user_name}</div>
                                                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-600 tracking-tight lowercase">{b.email}</div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="text-sm font-black text-primary-600 dark:text-primary-400">{b.transport_name || 'System Route'}</div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-6 h-6 rounded-md bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[10px] font-black text-slate-500 dark:text-slate-400">
                                                            {b.selected_seats || b.seats_booked}
                                                        </span>
                                                        <span className="text-xs font-bold text-slate-400 dark:text-slate-600">Seats</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 font-black text-emerald-600 dark:text-emerald-400 text-lg">₹{b.total_fare}</td>
                                                <td className="px-8 py-6">
                                                    <div className="text-[10px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-widest">
                                                        {new Date(b.booking_time).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })}
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <button
                                                        onClick={() => handleDeleteBooking(b.id)}
                                                        className="text-rose-400 hover:text-rose-600 font-bold text-[10px] uppercase hover:bg-rose-50 dark:hover:bg-rose-950/20 px-2 py-1 rounded transition-colors"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;

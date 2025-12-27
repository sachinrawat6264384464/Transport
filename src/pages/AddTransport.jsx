import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addTransport } from '../api';

const AddTransport = () => {
    const navigate = useNavigate();
    const [isDark, setIsDark] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        from_city: '',
        to_city: '',
        depart_time: '',
        arrive_time: '',
        fare: '',
        seats_available: '',
        window_fare: '100', // Default
        total_seats: '40', // Default
        vehicle_type: 'Bus',
        whatsapp: '',
        phone: '',
        operating_days: 'Mon,Tue,Wed,Thu,Fri,Sat,Sun'
    });

    useEffect(() => {
        // Initial theme check
        setIsDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        if (newDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const toggleDay = (day) => {
        const currentDays = formData.operating_days.split(',').filter(d => d);
        let newDays;
        if (currentDays.includes(day)) {
            newDays = currentDays.filter(d => d !== day);
        } else {
            newDays = [...currentDays, day];
        }
        setFormData({ ...formData, operating_days: newDays.join(',') });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTransport(formData);
            alert('Transport added successfully');
            navigate('/admin/dashboard');
        } catch (error) {
            console.error(error);
            alert('Error adding transport. Please check all fields.');
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-32 pb-20 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-in-up">
                        <div>
                            <Link to="/admin/dashboard" className="text-primary-600 dark:text-primary-400 font-bold text-sm hover:underline mb-4 block">
                                ← Back to Dashboard
                            </Link>
                            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Add New Transport</h1>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">Register a new vehicle to your fleet.</p>
                        </div>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group relative overflow-hidden self-end"
                            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 dark:from-amber-400/0 dark:via-amber-400/30 dark:to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {isDark ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 transform group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707" />
                                    <circle cx="12" cy="12" r="4" strokeWidth={2.5} />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 relative z-10 transform group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>

                    <div className="glass-card p-10 animate-fade-in-up bg-white dark:bg-slate-900/50" style={{ animationDelay: '0.1s' }}>
                        <form onSubmit={handleSubmit} className="space-y-10">
                            {/* Basic Info */}
                            <section className="space-y-6">
                                <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-4">Basic Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Service Name</label>
                                        <input type="text" required placeholder="e.g. Raj Express" onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="input-premium" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2">Vehicle Type</label>
                                        <select onChange={(e) => setFormData({ ...formData, vehicle_type: e.target.value })} className="input-premium">
                                            <option value="Bus">Bus (40 Seats)</option>
                                            <option value="Car">Car (4 Seats)</option>
                                            <option value="Tempo">Tempo (12 Seats)</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            {/* Route Info */}
                            <section className="space-y-6">
                                <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-4">Route & Schedule</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Departure City</label>
                                        <input type="text" required placeholder="From" onChange={(e) => setFormData({ ...formData, from_city: e.target.value })} className="input-premium" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Arrival City</label>
                                        <input type="text" required placeholder="To" onChange={(e) => setFormData({ ...formData, to_city: e.target.value })} className="input-premium" />
                                    </div>
                                    <div className="group md:col-span-2">
                                        <label className="block text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Operating Days</label>
                                        <div className="flex flex-wrap gap-3">
                                            {daysOfWeek.map(day => (
                                                <button
                                                    key={day}
                                                    type="button"
                                                    onClick={() => toggleDay(day)}
                                                    className={`px-4 py-2 rounded-xl text-xs font-black transition-all border-2 ${formData.operating_days.includes(day)
                                                        ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-200 dark:shadow-primary-900'
                                                        : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700 text-slate-400 dark:text-slate-500 hover:border-primary-200 dark:hover:border-primary-700'
                                                        }`}
                                                >
                                                    {day}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Departure Time</label>
                                        <input type="datetime-local" required onChange={(e) => setFormData({ ...formData, depart_time: e.target.value })} className="input-premium" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Arrival Time</label>
                                        <input type="datetime-local" required onChange={(e) => setFormData({ ...formData, arrive_time: e.target.value })} className="input-premium" />
                                    </div>
                                </div>
                            </section>

                            {/* Pricing Info */}
                            <section className="space-y-6">
                                <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-4">Inventory & Pricing</h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Base Fare (₹)</label>
                                        <input type="number" required placeholder="500" onChange={(e) => setFormData({ ...formData, fare: e.target.value })} className="input-premium" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Window Fare (₹)</label>
                                        <input type="number" required placeholder="100" value={formData.window_fare} onChange={(e) => setFormData({ ...formData, window_fare: e.target.value })} className="input-premium" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Total Seats</label>
                                        <input type="number" required placeholder="40" value={formData.total_seats} onChange={(e) => {
                                            const val = e.target.value;
                                            setFormData({ ...formData, total_seats: val, seats_available: val });
                                        }} className="input-premium" />
                                    </div>
                                </div>
                            </section>

                            {/* Contact Info */}
                            <section className="space-y-6">
                                <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800 pb-4">Contact Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">WhatsApp</label>
                                        <input type="text" required placeholder="91XXXXXXXXXX" onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })} className="input-premium" />
                                    </div>
                                    <div className="group">
                                        <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600">Phone</label>
                                        <input type="text" required placeholder="91XXXXXXXXXX" onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="input-premium" />
                                    </div>
                                </div>
                            </section>

                            <button type="submit" className="btn-primary w-full py-4 text-xl shadow-2xl">
                                Deploy Transport to System
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddTransport;

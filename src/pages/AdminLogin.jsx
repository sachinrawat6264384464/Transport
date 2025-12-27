import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const navigate = useNavigate();

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

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await login(credentials);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                navigate('/admin/dashboard');
            } else {
                alert('Login failed: Token not provided');
            }
        } catch (error) {
            console.error(error);
            alert('Login failed: Please check your credentials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4 transition-colors duration-300">
            <div className="max-w-md w-full animate-fade-in-up">
                {/* Theme Toggle Button */}
                <div className="flex justify-end mb-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group relative overflow-hidden"
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

                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-2xl shadow-xl shadow-primary-200 dark:shadow-primary-900 text-3xl mb-6">
                        ⚡
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Operator Login</h1>
                    <p className="text-slate-500 dark:text-slate-400 font-medium mt-2">Access the TransportHub management suite.</p>
                </div>

                <div className="glass-card p-10">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-4">
                            <div className="group">
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600 transition-colors">Username</label>
                                <input
                                    type="text"
                                    required
                                    value={credentials.username}
                                    onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                                    className="input-premium"
                                    placeholder="Enter operator ID"
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2 group-focus-within:text-primary-600 transition-colors">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={credentials.password}
                                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                                    className="input-premium"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn-primary w-full py-4 text-lg"
                            disabled={loading}
                        >
                            {loading ? 'Authenticating...' : 'Sign In To Dashboard'}
                        </button>
                    </form>
                </div>

                <p className="text-center mt-10 text-slate-400 dark:text-slate-500 text-sm">
                    Protected by end-to-end encryption. 🔒
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;

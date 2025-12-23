import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';

const AdminLogin = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await login(credentials);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                navigate('/admin/dashboard');
            } else {
                alert('Login failed: No token received');
            }
        } catch (error) {
            console.error(error);
            alert('Login failed: Invalid credentials');
        }
    };

    return (
        <div className="container login-page">
            <div className="login-card">
                <div className="login-header">
                    <h2>Admin Access</h2>
                    <p>Login to manage transports and bookings.</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            required
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-full login-btn">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;

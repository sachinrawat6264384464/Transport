import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});


api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export const getTransports = (params) => api.get('/transports/', { params });
export const getTransport = (id) => api.get(`/transports/${id}/`);
export const createBooking = (data) => api.post('/bookings/', data);
export const getBookings = () => api.get('/bookings/');
export const login = (credentials) => api.post('/auth/login/', credentials);
export const addTransport = (data) => api.post('/transports/', data);
export const updateTransport = (id, data) => api.put(`/transports/${id}/`, data);
export const deleteTransport = (id) => api.delete(`/transports/${id}/`);

export default api;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import TransportDetail from './pages/TransportDetail';
import Booking from './pages/Booking';
import BookingConfirmation from './pages/BookingConfirmation';
import Checkout from './pages/Checkout';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AddTransport from './pages/AddTransport';
import Contact from './pages/Contact';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import Careers from './pages/Careers';
import Partner from './pages/Partner';
import InfoPage from './pages/InfoPage';

import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        // Initialize theme
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return (
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div className="min-h-screen flex flex-col overflow-x-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<SearchResults />} />
                        <Route path="/transport/:id" element={<TransportDetail />} />
                        <Route path="/booking/:id" element={<Booking />} />
                        <Route path="/booking" element={<Navigate to="/" replace />} />
                        <Route path="/checkout/:id" element={<Checkout />} />
                        <Route path="/checkout" element={<Navigate to="/" replace />} />
                        <Route path="/booking-confirmation/:id" element={<BookingConfirmation />} />
                        <Route path="/booking-confirmation" element={<Navigate to="/" replace />} />
                        <Route path="/booking-confirmations" element={<Navigate to="/" replace />} />
                        <Route path="/admin" element={<AdminLogin />} />
                        <Route path="/admin/dashboard" element={<AdminDashboard />} />
                        <Route path="/admin/add-transport" element={<AddTransport />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/careers" element={<Careers />} />
                        <Route path="/partner" element={<Partner />} />
                        <Route path="/help" element={<InfoPage
                            title="Help Center"
                            category="Support"
                            lastUpdated="Dec 2025"
                            sections={[
                                { heading: 'How to Book?', content: 'Search by city, select transport, pick your seats, and pay. Your E-ticket is instantly generated.' },
                                { heading: 'Rescheduling', content: 'Contact our support at support@transporthub.in for rescheduling requests at least 6 hours before departure.' }
                            ]}
                        />} />
                        <Route path="/safety" element={<InfoPage
                            title="Safety Rules"
                            category="Compliance"
                            lastUpdated="Nov 2025"
                            sections={[
                                { heading: 'Vehicle Standards', content: 'All fleet partners undergo regular maintenance checks and must hold valid safety certifications.' },
                                { heading: 'Passenger Data', content: 'Your travel data is encrypted and only shared with the operator for verification purposes.' }
                            ]}
                        />} />
                        <Route path="/refund" element={<InfoPage
                            title="Refund Policy"
                            category="Finance"
                            lastUpdated="Oct 2025"
                            sections={[
                                { heading: 'Full Refunds', content: 'Cancellations made 24+ hours before departure qualify for 100% refund.' },
                                { heading: 'Partial Refunds', content: 'Cancellations within 12-24 hours get 50% refund. Within 12 hours, no refund is provided.' }
                            ]}
                        />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/cookies" element={<InfoPage
                            title="Cookie Policy"
                            category="Legal"
                            lastUpdated="Dec 2025"
                            sections={[
                                { heading: 'What are cookies?', content: 'Small files stored on your device that help us remember your search preferences and login state.' }
                            ]}
                        />} />
                        <Route path="/licenses" element={<InfoPage
                            title="Licenses"
                            category="Legal"
                            lastUpdated="Sep 2025"
                            sections={[
                                { heading: 'Open Source', content: 'TransportHub is built with open technologies including React, Tailwind CSS, and Django REST Framework.' }
                            ]}
                        />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

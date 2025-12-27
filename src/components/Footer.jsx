import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDark, setIsDark] = useState(false);
  const [openSections, setOpenSections] = useState({
    company: true,
    support: true,
    legal: true
  });

  useEffect(() => {
    // Initial theme check
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent"></div>
      <div className="absolute -top-24 -left-20 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-3xl">⚡</span>
              <span className="text-2xl font-black text-white tracking-tighter group-hover:text-primary-500 transition-colors">
                Transport<span className="text-primary-500">Hub</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs font-medium">
              Redefining transport logistics with speed, safety, and modern efficiency. Your journey, our commitment.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                <button
                  key={social}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  title={social}
                >
                  <span className="text-xs font-black">{social[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <button
              onClick={() => toggleSection('company')}
              className="w-full flex items-center justify-between text-white font-black uppercase tracking-widest text-xs mb-8 hover:text-primary-400 transition-colors group"
            >
              <span>Company</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-300 ${openSections.company ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className={`space-y-4 overflow-hidden transition-all duration-300 ${openSections.company ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Fleet', path: '/search' },
                { name: 'Careers', path: '/careers' },
                { name: 'Partner with Us', path: '/partner' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <button
              onClick={() => toggleSection('support')}
              className="w-full flex items-center justify-between text-white font-black uppercase tracking-widest text-xs mb-8 hover:text-primary-400 transition-colors group"
            >
              <span>Support</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-300 ${openSections.support ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className={`space-y-4 overflow-hidden transition-all duration-300 ${openSections.support ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {[
                { name: 'Contact Support', path: '/contact' },
                { name: 'Help Center', path: '/help' },
                { name: 'Safety Rules', path: '/safety' },
                { name: 'Refund Policy', path: '/refund' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Policy */}
          <div>
            <button
              onClick={() => toggleSection('legal')}
              className="w-full flex items-center justify-between text-white font-black uppercase tracking-widest text-xs mb-8 hover:text-primary-400 transition-colors group"
            >
              <span>Legal</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-300 ${openSections.legal ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <ul className={`space-y-4 overflow-hidden transition-all duration-300 ${openSections.legal ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              {[
                { name: 'Terms of Service', path: '/terms' },
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Cookie Policy', path: '/cookies' },
                { name: 'Licenses', path: '/licenses' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 transition-colors"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-bold text-slate-500 italic">
            "The world is a book, and those who do not travel read only a page."
          </p>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/20 hover:scale-110 group relative overflow-hidden"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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

          <div className="text-sm font-medium text-slate-400">
            © {currentYear} <span className="text-white font-black">TransportHub</span>. Engineered for Excellence.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

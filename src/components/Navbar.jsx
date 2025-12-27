import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initial theme check
    setIsDark(document.documentElement.classList.contains('dark'));

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'Add Transport', path: '/admin/add-transport' },
    { name: 'Dashboard', path: '/admin/dashboard' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="container mx-auto px-4">
        <div className={`glass-card mx-auto max-w-7xl px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled
          ? 'shadow-lg bg-white/80 dark:bg-slate-900/80'
          : 'shadow-none bg-white/40 dark:bg-slate-900/40'
          }`}>
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white group" onClick={closeMenu}>
            <span className="bg-primary-500 text-white w-10 h-10 flex items-center justify-center rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">⚡</span>
            <span>Transport<span className="text-primary-500">Hub</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-8 mr-4 border-r border-slate-200 dark:border-slate-800 pr-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors duration-200 hover:text-primary-500 ${location.pathname === link.path ? 'text-primary-500' : 'text-slate-600 dark:text-slate-400'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-inner hover:shadow-lg hover:scale-110 group relative overflow-hidden"
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

              <Link to="/admin" className="btn-primary py-2 text-sm px-6">Login</Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 hover:scale-110 group"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l.707.707M6.343 6.343l.707.707" />
                  <circle cx="12" cy="12" r="4" strokeWidth={2.5} />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-rotate-12 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button className="text-slate-900 dark:text-white p-2" onClick={toggleMenu}>
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}>
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white dark:bg-slate-900 shadow-2xl p-8 transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6 mt-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-bold transition-colors ${location.pathname === link.path ? 'text-primary-500' : 'text-slate-900 dark:text-white'}`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/admin" className="btn-primary mt-4" onClick={closeMenu}>Login</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

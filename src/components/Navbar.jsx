import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-icon">⚡</span> TransportHub
        </Link>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isMobileMenuOpen ? 'bar bar1 open' : 'bar bar1'}></div>
          <div className={isMobileMenuOpen ? 'bar bar2 open' : 'bar bar2'}></div>
          <div className={isMobileMenuOpen ? 'bar bar3 open' : 'bar bar3'}></div>
        </div>

        {/* Nav Links */}
        <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/dashboard" className={`nav-link ${location.pathname === '/admin/dashboard' ? 'active' : ''}`} onClick={closeMenu}>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/add-transport" className={`nav-link ${location.pathname === '/admin/add-transport' ? 'active' : ''}`} onClick={closeMenu}>Add Transport</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="btn btn-primary nav-btn" onClick={closeMenu}>Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

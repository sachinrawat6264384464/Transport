import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>⚡ TransportHub</h3>
          <p>Your journey is our priority. Travel safe, travel fast.</p>
        </div>

        <div className="footer-links">
          <a href="/contact">Contact</a>
          <a href="/about">About Us</a>
          <a href="/terms">Terms</a>
          <a href="/privacy">Privacy</a>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} TransportHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

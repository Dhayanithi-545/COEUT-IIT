import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-col">
          <h3 className="footer-brand-title">Center of Excellence in Urban Transport</h3>
          <p className="footer-dept">Department of Civil Engineering &middot; <span className="accent-cursive" style={{ color: 'var(--coe-gold-light)' }}>IIT Madras</span></p>
          <p className="footer-sponsors-text">Sponsored by Ministry of Urban Development, Ministry of Electronics & IT, and Ministry of Education, Government of India.</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-nav-list">
            <li><Link to="/about">About COE</Link></li>
            <li><Link to="/research">Research & Corridors</Link></li>
            <li><Link to="/labs">ITS & Simulation Laboratories</Link></li>
            <li><Link to="/people">Faculty & Staff Directory</Link></li>
            <li><Link to="/downloads">Downloads & Software Repositories</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Location & Contact</h4>
          <div className="footer-contacts">
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Department of Civil Engineering, IIT Madras, Chennai - 600036</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p>&copy; {currentYear} Center of Excellence in Urban Transport, IIT Madras. All rights reserved.</p>
          <div className="footer-ext-links">
            <a href="https://www.iitm.ac.in" target="_blank" rel="noopener noreferrer">
              IIT Madras Portal <ExternalLink size={12} />
            </a>
            <a href="https://civil.iitm.ac.in" target="_blank" rel="noopener noreferrer">
              Civil Engineering Dept <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

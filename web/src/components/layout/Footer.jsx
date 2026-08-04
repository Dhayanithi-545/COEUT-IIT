import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        {/* Column 1: Brand & Sponsoring info */}
        <div className="footer-col">
          <h3 className="footer-brand-title">
            Center of Excellence in Urban Transport
          </h3>
          <p className="footer-dept">Department of Civil Engineering &bull; <span className="accent-cursive" style={{ color: 'var(--coe-gold-light)' }}>IIT Madras</span></p>
          <p className="footer-sponsors-text">
            Sponsored by Ministry of Urban Development, Ministry of Electronics & IT, and Ministry of Education, Government of India.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Navigation</h4>
          <ul className="footer-nav-list">
            <li><Link to="/about">Home & About COE</Link></li>
            <li><Link to="/research">Research & Corridors</Link></li>
            <li><Link to="/labs">ITS & Simulation Laboratories</Link></li>
            <li><Link to="/people">Faculty & Staff Directory</Link></li>
            <li><Link to="/downloads">Downloads & Cyclo Help Software</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact details */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Information</h4>
          <div className="footer-contacts">
            <div className="contact-item">
              <MapPin size={16} className="contact-icon" />
              <span>238B, Transportation Engineering Division, Building Sciences Block, IIT Madras, Chennai - 600 036</span>
            </div>
            <div className="contact-item">
              <Phone size={16} className="contact-icon" />
              <a href="tel:+914422575301">+91 44 2257 5301</a>
            </div>
            <div className="contact-item">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:coeut@iitm.ac.in">coeut@iitm.ac.in</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p>&copy; {currentYear} Center of Excellence in Urban Transport, IIT Madras.</p>
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

      <style>{`
        .footer-root {
          background-color: var(--coe-maroon-dark);
          color: #ffffff;
          border-top: 3px solid var(--coe-gold);
          margin-top: auto;
        }
        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
          padding: 3rem 1rem 2.5rem;
        }
        .footer-brand-title {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        .footer-dept {
          color: var(--coe-gold-light);
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 0.85rem;
        }
        .footer-sponsors-text {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }
        .footer-heading {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: var(--coe-gold);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-nav-list li {
          margin-bottom: 0.5rem;
        }
        .footer-nav-list a {
          color: #E2DCC9;
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }
        .footer-nav-list a:hover {
          color: var(--coe-gold-light);
        }
        .footer-contacts {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.875rem;
          color: #E2DCC9;
        }
        .contact-item a {
          color: #ffffff;
        }
        .contact-item a:hover {
          color: var(--coe-gold);
        }
        .contact-icon {
          color: var(--coe-gold);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .footer-bottom-bar {
          background-color: #320A0A;
          padding: 1rem 0;
          font-size: 0.825rem;
          color: rgba(255, 255, 255, 0.6);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-ext-links {
          display: flex;
          gap: 1.25rem;
        }
        .footer-ext-links a {
          color: var(--coe-gold-light);
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .footer-bottom-inner {
            flex-direction: column;
            gap: 0.75rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

import React from 'react';
import { MapPin, Phone, Mail, Building2, Clock } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export const Contacts = () => {
  return (
    <div className="contacts-root">
      <h3 className="section-title">
        <MapPin size={22} /> Office Address & Contacts
      </h3>

      <div className="contacts-grid">
        <Card title="Postal Address" icon={Building2} className="contact-card">
          <div className="contact-detail-box">
            <p className="addr-line"><strong>Center of Excellence in Urban Transport</strong></p>
            <p className="addr-line">238B, Transportation Engineering Division</p>
            <p className="addr-line">Building Sciences Block (BSB)</p>
            <p className="addr-line">Department of Civil Engineering</p>
            <p className="addr-line">Indian Institute of Technology Madras</p>
            <p className="addr-line">Chennai – 600 036, Tamil Nadu, India</p>
          </div>
        </Card>

        <Card title="Direct Contact Info" icon={Phone} className="contact-card">
          <div className="contact-detail-box">
            <div className="contact-row">
              <Phone size={18} className="contact-row-icon" />
              <div>
                <span className="row-label">Office Phone</span>
                <p className="row-val"><a href="tel:+914422575301">+91 44 2257 5301</a></p>
              </div>
            </div>

            <div className="contact-row">
              <Mail size={18} className="contact-row-icon" />
              <div>
                <span className="row-label">Email Address</span>
                <p className="row-val"><a href="mailto:coeut@iitm.ac.in">coeut@iitm.ac.in</a></p>
              </div>
            </div>

            <div className="contact-row">
              <Clock size={18} className="contact-row-icon" />
              <div>
                <span className="row-label">Working Hours</span>
                <p className="row-val">Monday – Friday: 9:00 AM – 5:30 PM IST</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Map Location Embed Placeholder */}
      <div className="map-wrapper coe-card">
        <h4 className="map-heading">Location Map (IIT Madras Campus)</h4>
        <div className="map-frame">
          <iframe
            title="IIT Madras Civil Engineering Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.893690226388!2d80.23126831482207!3d12.978648990851173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52678d4db73e13%3A0x6b4fb6c952dfa5bf!2sDepartment%20of%20Civil%20Engineering%2C%20IIT%20Madras!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="320"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <style>{`
        .contacts-root {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }
        .contact-detail-box {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-top: 0.5rem;
        }
        .addr-line {
          font-size: 0.95rem;
          color: var(--coe-text);
          line-height: 1.4;
        }
        .contact-row {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.5rem 0;
          border-bottom: 1px dashed var(--coe-border);
        }
        .contact-row:last-child {
          border-bottom: none;
        }
        .contact-row-icon {
          color: var(--coe-maroon);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .row-label {
          font-size: 0.775rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--coe-gold);
        }
        .row-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--coe-text);
        }
        .row-val a {
          color: var(--coe-maroon);
        }
        .map-wrapper {
          border-left: 4px solid var(--coe-gold);
        }
        .map-heading {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.85rem;
        }
        .map-frame {
          width: 100%;
          overflow: hidden;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

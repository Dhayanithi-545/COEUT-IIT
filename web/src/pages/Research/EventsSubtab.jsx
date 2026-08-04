import React, { useState } from 'react';
import { CalendarDays, Users, Award, Mic } from 'lucide-react';
import { majorWorkshops, roadSafetyAudits, trainingPrograms, guestLectures } from '../../data/events';
import { Timeline } from '../../components/ui/Timeline';
import { Card } from '../../components/ui/Card';

export const EventsSubtab = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="events-subtab-root">
      <div className="section-header">
        <h3 className="section-title">
          <CalendarDays size={22} /> Continuing Education, Workshops & Guest Lectures
        </h3>
        <p className="section-desc">
          Capacity-building initiatives, national training programs for government engineers, and guest lectures by international experts.
        </p>
      </div>

      {/* Major Workshop Banner */}
      {majorWorkshops.map((ws, idx) => (
        <div key={idx} className="coe-card workshop-card">
          <div className="ws-badge">Major Event</div>
          <h4 className="ws-title">{ws.title}</h4>
          <div className="ws-meta">
            <span><strong>Dates:</strong> {ws.dates}</span> &bull; 
            <span><strong>Sponsor:</strong> {ws.sponsor}</span> &bull; 
            <span><strong>Venue:</strong> {ws.location}</span>
          </div>
          <p className="ws-desc">{ws.description}</p>
          <span className="coe-badge ws-part">
            <Users size={13} /> {ws.participants}
          </span>
        </div>
      ))}

      {/* Road Safety Audit Programs Grid */}
      <div className="section-block">
        <h4 className="sub-section-heading">
          <Award size={18} className="inline-icon" /> Road Safety Audit Training Programs (7 Cities)
        </h4>
        <p className="sub-desc">
          Conducted for engineers of the Highways Department, Government of Tamil Nadu:
        </p>

        <div className="rsa-grid">
          {roadSafetyAudits.map((rsa, idx) => (
            <div key={idx} className="rsa-card">
              <span className="rsa-num">0{idx + 1}</span>
              <div className="rsa-info">
                <h5 className="rsa-city">{rsa.location}</h5>
                <span className="rsa-dates">{rsa.dates}</span>
              </div>
              <span className="coe-badge rsa-badge">{rsa.participants} Participants</span>
            </div>
          ))}
        </div>
      </div>

      {/* Other Training & Guest Lectures */}
      <div className="section-block">
        <h4 className="sub-section-heading">
          <Mic size={18} className="inline-icon" /> International Guest Lectures & Special Seminars
        </h4>
        <Timeline items={guestLectures} />
      </div>

      <style>{`
        .events-subtab-root {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .section-desc {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
        }
        .workshop-card {
          border-left: 4px solid var(--coe-maroon);
          background: linear-gradient(135deg, #FFFFFF 0%, var(--coe-cream) 100%);
        }
        .ws-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--coe-maroon);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }
        .ws-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.5rem;
        }
        .ws-meta {
          font-size: 0.875rem;
          color: var(--coe-text-muted);
          margin-bottom: 0.75rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .ws-desc {
          font-size: 0.95rem;
          color: var(--coe-text);
          margin-bottom: 0.75rem;
        }
        .ws-part {
          gap: 0.35rem;
        }

        .sub-section-heading {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .sub-desc {
          font-size: 0.9rem;
          color: var(--coe-text-muted);
          margin-bottom: 1rem;
        }
        .rsa-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }
        .rsa-card {
          background-color: var(--coe-surface);
          border: 1px solid var(--coe-border);
          border-radius: 4px;
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          box-shadow: var(--shadow-sm);
        }
        .rsa-num {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--coe-gold);
        }
        .rsa-info {
          flex: 1;
        }
        .rsa-city {
          font-size: 1rem;
          font-weight: 700;
          color: var(--coe-maroon-dark);
        }
        .rsa-dates {
          font-size: 0.775rem;
          color: var(--coe-text-muted);
          display: block;
        }
        .rsa-badge {
          font-size: 0.75rem;
        }
        .inline-icon {
          color: var(--coe-maroon);
        }
      `}</style>
    </div>
  );
};

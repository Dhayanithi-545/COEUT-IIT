import React from 'react';
import { CalendarDays, MapPin, User, CheckCircle2 } from 'lucide-react';

export const Timeline = ({ items }) => {
  return (
    <div className="timeline-root">
      {items.map((item, idx) => (
        <div key={idx} className="timeline-item">
          <div className="timeline-marker">
            <div className="timeline-dot">
              <CalendarDays size={14} />
            </div>
            {idx < items.length - 1 && <div className="timeline-line" />}
          </div>
          <div className="timeline-content">
            <div className="timeline-date-badge">{item.date || item.dates}</div>
            <h4 className="timeline-title">{item.title || item.speaker}</h4>
            {item.topic && (
              <p className="timeline-topic">
                <strong>Topic:</strong> {item.topic}
              </p>
            )}
            {item.designation && (
              <p className="timeline-sub">
                <User size={13} className="inline-icon" /> {item.designation}
              </p>
            )}
            {item.location && (
              <p className="timeline-sub">
                <MapPin size={13} className="inline-icon" /> {item.location}
              </p>
            )}
            {item.description && <p className="timeline-desc">{item.description}</p>}
            {item.participants && (
              <span className="coe-badge timeline-participants">
                <CheckCircle2 size={12} className="inline-icon" /> {item.participants}
              </span>
            )}
          </div>
        </div>
      ))}

      <style>{`
        .timeline-root {
          position: relative;
          padding-left: 0.5rem;
          margin: 1.5rem 0;
        }
        .timeline-item {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 1.75rem;
          position: relative;
        }
        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--coe-maroon);
          color: var(--coe-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 2;
          box-shadow: 0 0 0 3px var(--coe-bg);
        }
        .timeline-line {
          width: 2px;
          flex: 1;
          background-color: var(--coe-border);
          margin-top: 0.25rem;
        }
        .timeline-content {
          background-color: var(--coe-surface);
          border: 1px solid var(--coe-border);
          border-radius: 4px;
          padding: 1.15rem;
          flex: 1;
          box-shadow: var(--shadow-sm);
        }
        .timeline-date-badge {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--coe-maroon);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
        }
        .timeline-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--coe-maroon-dark);
          line-height: 1.35;
          margin-bottom: 0.35rem;
        }
        .timeline-topic {
          font-size: 0.925rem;
          color: var(--coe-text);
          margin-bottom: 0.35rem;
        }
        .timeline-sub {
          font-size: 0.85rem;
          color: var(--coe-text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-bottom: 0.25rem;
        }
        .inline-icon {
          color: var(--coe-gold);
        }
        .timeline-desc {
          font-size: 0.9rem;
          color: var(--coe-text);
          margin-top: 0.5rem;
        }
        .timeline-participants {
          margin-top: 0.65rem;
          gap: 0.35rem;
        }
      `}</style>
    </div>
  );
};

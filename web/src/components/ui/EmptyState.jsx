import React from 'react';
import { Info, Clock } from 'lucide-react';

export const EmptyState = ({ 
  title = "Information Coming Soon", 
  message = "This section is currently being updated with latest research data and documentation from the Center of Excellence in Urban Transport.",
  icon: Icon = Clock 
}) => {
  return (
    <div className="empty-state-root">
      <div className="empty-state-card">
        <div className="empty-icon-circle">
          <Icon size={32} />
        </div>
        <h3 className="empty-title">{title}</h3>
        <p className="empty-message">{message}</p>
        <div className="empty-footer">
          <Info size={14} /> Center of Excellence in Urban Transport &bull; IIT Madras
        </div>
      </div>

      <style>{`
        .empty-state-root {
          padding: 3rem 1rem;
          display: flex;
          justify-content: center;
        }
        .empty-state-card {
          background-color: var(--coe-surface);
          border: 1px solid var(--coe-border);
          border-top: 4px solid var(--coe-gold);
          border-radius: 6px;
          padding: 2.5rem 2rem;
          max-width: 580px;
          text-align: center;
          box-shadow: var(--shadow-sm);
        }
        .empty-icon-circle {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: var(--coe-cream);
          color: var(--coe-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          border: 1px solid var(--coe-gold-light);
        }
        .empty-title {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.5rem;
        }
        .empty-message {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .empty-footer {
          font-size: 0.8rem;
          color: var(--coe-gold);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          border-top: 1px dashed var(--coe-border);
          padding-top: 1rem;
          width: 100%;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

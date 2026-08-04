import React from 'react';

export const StatCard = ({ value, label, icon: Icon, description }) => {
  return (
    <div className="stat-card">
      {Icon && (
        <div className="stat-icon-wrapper">
          <Icon size={24} />
        </div>
      )}
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        {description && <div className="stat-desc">{description}</div>}
      </div>

      <style>{`
        .stat-card {
          background: linear-gradient(135deg, #FFFFFF 0%, var(--coe-cream-2) 100%);
          border: 1px solid var(--coe-border);
          border-left: 4px solid var(--coe-gold);
          border-radius: 4px;
          padding: 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          box-shadow: var(--shadow-sm);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast);
        }
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--coe-maroon);
          color: var(--coe-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-value {
          font-family: var(--font-serif);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--coe-maroon-dark);
          line-height: 1.1;
        }
        .stat-label {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--coe-text);
          margin-top: 0.2rem;
        }
        .stat-desc {
          font-size: 0.8rem;
          color: var(--coe-text-muted);
        }
      `}</style>
    </div>
  );
};

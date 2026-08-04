import React from 'react';

export const Card = ({ title, subtitle, icon: Icon, children, className = '', badge = null }) => {
  return (
    <div className={`coe-card ${className}`}>
      {badge && <span className="coe-badge card-badge">{badge}</span>}
      <div className="card-header-block">
        {Icon && (
          <div className="card-icon-wrapper">
            <Icon size={20} className="card-icon" />
          </div>
        )}
        <div className="card-title-group">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      </div>
      {children && <div className="card-body">{children}</div>}

      <style>{`
        .card-header-block {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .card-icon-wrapper {
          padding: 0.5rem;
          background-color: var(--coe-cream);
          border: 1px solid var(--coe-gold-light);
          border-radius: 4px;
          color: var(--coe-maroon);
          flex-shrink: 0;
        }
        .card-title-group {
          flex: 1;
        }
        .card-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--coe-maroon-dark);
          line-height: 1.35;
        }
        .card-subtitle {
          font-size: 0.85rem;
          color: var(--coe-text-muted);
          margin-top: 0.15rem;
        }
        .card-badge {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
        }
        .card-body {
          font-size: 0.925rem;
          color: var(--coe-text);
          line-height: 1.55;
        }
      `}</style>
    </div>
  );
};

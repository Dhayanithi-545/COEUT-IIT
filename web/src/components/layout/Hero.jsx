import React from 'react';

export const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero-section-root">
      <div className="container">
        <div className="hero-clean-box">
          <div className="hero-text-content">
            <span className="hero-badge-tag">
              Center of Excellence in Urban Transport &bull; <strong>IIT Madras</strong>
            </span>
            <h1 className="hero-title">{title}</h1>
            {subtitle && <p className="hero-subtitle">{subtitle}</p>}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section-root {
          padding-top: 1.5rem;
          padding-bottom: 0.5rem;
          width: 100%;
        }
        .hero-clean-box {
          background: #ffffff;
          border: 1px solid var(--coe-border);
          border-left: 5px solid var(--coe-maroon);
          border-radius: var(--radius-md);
          padding: 1.75rem 2rem;
          box-shadow: var(--shadow-sm);
        }
        .hero-badge-tag {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--coe-gold-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.35rem;
          display: block;
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.25rem;
          line-height: 1.25;
        }
        .hero-subtitle {
          font-size: 1rem;
          color: var(--coe-text-muted);
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

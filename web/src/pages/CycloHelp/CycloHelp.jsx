import React from 'react';
import { Hero } from '../../components/layout/Hero';
import { Download, Cpu, CheckCircle2, Shield, FileText } from 'lucide-react';

export const CycloHelp = () => {
  const features = [
    "Fixed-time signal timing design for isolated signalized intersections",
    "Phase sequence optimization & green time calculation using Webster's Method",
    "Capacity analysis & Degree of Saturation (v/c) evaluation",
    "Cycle length optimization considering pedestrian clearance requirements",
    "Exportable signal timing charts and phase allocation reports"
  ];

  return (
    <div className="cyclo-help-page">
      <Hero 
        title="Download Signal Design Software: Cyclo Help" 
        subtitle="In-house traffic signal timing calculation and phase design software developed at IIT Madras" 
      />

      <main className="container page-content">
        <div className="coe-card cyclo-main-card">
          <div className="cyclo-header">
            <div className="cyclo-badge">COE-UT Software Tool</div>
            <h3 className="cyclo-title">Cyclo Help &bull; Traffic Signal Timing Suite</h3>
            <p className="cyclo-subtitle">
              Developed by Transportation Engineering Division, Department of Civil Engineering, IIT Madras
            </p>
          </div>

          <p className="cyclo-desc">
            <strong>Cyclo Help</strong> is an interactive software tool engineered specifically for transportation planners, highway engineers, and traffic police authorities to design and optimize signal timings for urban intersections under heterogeneous traffic flow.
          </p>

          <h4 className="feat-heading">Key Features & Modules:</h4>
          <ul className="feat-list">
            {features.map((f, i) => (
              <li key={i}>
                <CheckCircle2 size={16} className="feat-icon" /> {f}
              </li>
            ))}
          </ul>

          <div className="download-cta-box">
            <div className="dl-info">
              <h4 className="dl-title">Download Cyclo Help v2.0 Package</h4>
              <p className="dl-meta">
                Includes Windows Executable Installer, Sample Intersection Datasets & User Manual (PDF).
              </p>
            </div>
            <a href="#" className="coe-btn coe-btn-primary dl-main-btn">
              <Download size={18} /> Download Cyclo Help Software (ZIP, 14.5 MB)
            </a>
          </div>
        </div>
      </main>

      <style>{`
        .page-content {
          padding-top: 2rem;
        }
        .cyclo-main-card {
          border-left: 4px solid var(--coe-maroon);
          background: linear-gradient(135deg, #FFFFFF 0%, var(--coe-cream-2) 100%);
          padding: 2rem;
        }
        .cyclo-badge {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--coe-gold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .cyclo-title {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.2rem;
        }
        .cyclo-subtitle {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1.25rem;
        }
        .cyclo-desc {
          font-size: 1.025rem;
          color: var(--coe-text);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .feat-heading {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.85rem;
        }
        .feat-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .feat-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--coe-text);
          background-color: var(--coe-surface);
          padding: 0.65rem 1rem;
          border-radius: 4px;
          border: 1px solid var(--coe-border);
        }
        .feat-icon {
          color: var(--coe-maroon);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .download-cta-box {
          background-color: var(--coe-maroon-dark);
          color: #ffffff;
          border-radius: 6px;
          padding: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          border: 2px solid var(--coe-gold);
        }
        .dl-title {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        .dl-meta {
          font-size: 0.875rem;
          color: var(--coe-gold-light);
        }
        .dl-main-btn {
          background-color: var(--coe-gold);
          color: var(--coe-maroon-dark);
          font-size: 1rem;
          padding: 0.85rem 1.5rem;
          white-space: nowrap;
        }
        .dl-main-btn:hover {
          background-color: #e0b62e;
          color: var(--coe-maroon-dark);
        }

        @media (max-width: 768px) {
          .download-cta-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .dl-main-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

import React from 'react';
import { Briefcase, CheckCircle2, Mail, Users, ArrowRight } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export const OpportunitiesSubtab = () => {
  const requiredSkills = [
    "Traffic Modelers & Simulation Specialists",
    "Transportation Planners & Economists",
    "Civil & Transportation Engineers",
    "ITS System Integrators & Hardware Engineers",
    "Wireless Communication & IoT Experts",
    "Software Programmers (C/C++, Python, R, MATLAB)",
    "Full-Stack & Web Application Developers"
  ];

  return (
    <div className="opportunities-subtab-root">
      <div className="coe-card recruitment-main-card">
        <h3 className="section-title">
          <Briefcase size={22} /> Career & Research Recruitment
        </h3>
        <p className="lead-p">
          The Centre is actively involved in state-of-the-art research in ITS and urban transportation management technology. We are constantly looking for motivated professionals, project officers, research scholars, and software developers to join our team.
        </p>
        <p className="lead-p">
          We recruit year-round for active sponsored projects funded by government ministries and industry partners.
        </p>

        <h4 className="skills-heading">Desired Skill Sets:</h4>
        <div className="skills-grid">
          {requiredSkills.map((skill, idx) => (
            <div key={idx} className="skill-chip">
              <CheckCircle2 size={16} className="chip-icon" />
              <span>{skill}</span>
            </div>
          ))}
        </div>

        <div className="apply-cta-box">
          <div className="cta-content">
            <h4 className="cta-title">Interested in Working with Us?</h4>
            <p className="cta-desc">
              Send your CV/Resume along with a statement of research interest to the CoE coordinator email:
            </p>
            <a href="mailto:coeut@iitm.ac.in" className="coe-btn coe-btn-primary cta-btn">
              <Mail size={16} /> Apply via Email: coeut@iitm.ac.in
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .opportunities-subtab-root {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .recruitment-main-card {
          border-left: 4px solid var(--coe-maroon);
        }
        .lead-p {
          font-size: 1.025rem;
          color: var(--coe-text);
          line-height: 1.6;
          margin-bottom: 0.85rem;
        }
        .skills-heading {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--coe-maroon-dark);
          margin-top: 1.25rem;
          margin-bottom: 0.85rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1.75rem;
        }
        .skill-chip {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background-color: var(--coe-surface-alt);
          padding: 0.75rem 1rem;
          border-radius: 4px;
          font-size: 0.925rem;
          font-weight: 600;
          color: var(--coe-maroon-dark);
          border: 1px solid var(--coe-border);
        }
        .chip-icon {
          color: var(--coe-gold);
          flex-shrink: 0;
        }
        .apply-cta-box {
          background: linear-gradient(135deg, var(--coe-cream) 0%, #FFFFFF 100%);
          border: 1px solid var(--coe-gold-light);
          border-radius: 4px;
          padding: 1.5rem;
        }
        .cta-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.35rem;
        }
        .cta-desc {
          font-size: 0.925rem;
          color: var(--coe-text-muted);
          margin-bottom: 1rem;
        }
        .cta-btn {
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
};

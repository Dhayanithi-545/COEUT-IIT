import React from 'react';
import { Building2, MapPin } from 'lucide-react';
import { partnerInstitutes } from '../../data/partnerInstitutes';
import { Card } from '../../components/ui/Card';

export const PartnerInstitutes = () => {
  return (
    <div className="partner-institutes-root">
      <div className="section-header-box">
        <h3 className="section-title">
          <Building2 size={22} /> Partner Institutes
        </h3>
        <p className="section-desc">
          A multi-institutional and multi-disciplinary research team from eight premier engineering institutions across India are part of the Centre:
        </p>
      </div>

      <div className="institutes-grid">
        {partnerInstitutes.map((inst) => (
          <Card
            key={inst.id}
            title={inst.name}
            icon={Building2}
            badge={inst.id === 'iitm' ? 'Nodal Host' : 'Partner'}
          >
            <div className="inst-details">
              <span className="inst-location">
                <MapPin size={14} className="inline-icon" /> {inst.location}
              </span>
              <span className="inst-role">{inst.role}</span>
            </div>
          </Card>
        ))}
      </div>

      <style>{`
        .partner-institutes-root {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .section-desc {
          font-size: 1rem;
          color: var(--coe-text-muted);
          margin-bottom: 1rem;
        }
        .institutes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.25rem;
        }
        .inst-details {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          margin-top: 0.5rem;
        }
        .inst-location {
          font-size: 0.875rem;
          color: var(--coe-text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .inst-role {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--coe-maroon);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .inline-icon {
          color: var(--coe-gold);
        }
      `}</style>
    </div>
  );
};

import React from 'react';
import { ShieldCheck, UserCheck, MapPin } from 'lucide-react';
import { councilMembers, coeCoordinators } from '../../data/governingCouncil';
import { Card } from '../../components/ui/Card';

export const GoverningCouncil = () => {
  return (
    <div className="governing-council-root">
      {/* Council Members Section */}
      <div className="section-block">
        <h3 className="section-title">
          <ShieldCheck size={22} /> Governing Council Members
        </h3>
        <p className="section-intro">
          The Governing Council provides strategic oversight, policy guidance, and institutional coordination for the Centre of Excellence in Urban Transport.
        </p>

        <div className="council-grid">
          {councilMembers.map((member, idx) => (
            <Card
              key={idx}
              title={member.name}
              subtitle={member.designation}
              icon={ShieldCheck}
              badge={member.role}
              className={member.role === 'Chairman' ? 'chairman-card' : ''}
            >
              <div className="member-meta">
                <p className="member-inst">{member.institution}</p>
                <p className="member-addr">
                  <MapPin size={13} className="inline-icon" /> {member.address}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Coordinators Section */}
      <div className="section-block">
        <h3 className="section-title">
          <UserCheck size={22} /> CoE Coordinators
        </h3>
        <p className="section-intro">
          Faculty coordinators steering inter-institutional research, academic programs, and project execution across partner nodes.
        </p>

        <div className="council-grid">
          {coeCoordinators.map((coord, idx) => (
            <Card
              key={idx}
              title={coord.name}
              subtitle={coord.designation}
              icon={UserCheck}
            >
              <div className="member-meta">
                <p className="member-inst">{coord.institution}</p>
                <p className="member-addr">
                  <MapPin size={13} className="inline-icon" /> {coord.address}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <style>{`
        .governing-council-root {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .section-intro {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1.25rem;
        }
        .council-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .chairman-card {
          border-left: 4px solid var(--coe-gold) !important;
          background: linear-gradient(135deg, #FFFFFF 0%, var(--coe-cream) 100%) !important;
        }
        .member-meta {
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          font-size: 0.875rem;
        }
        .member-inst {
          font-weight: 600;
          color: var(--coe-maroon-dark);
        }
        .member-addr {
          color: var(--coe-text-muted);
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .inline-icon {
          color: var(--coe-gold);
        }
      `}</style>
    </div>
  );
};

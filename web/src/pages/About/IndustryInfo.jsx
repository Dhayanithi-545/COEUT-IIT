import React from 'react';
import { Building, Award, FileText, GraduationCap, Calendar, Globe } from 'lucide-react';
import { StatCard } from '../../components/ui/StatCard';

export const IndustryInfo = () => {
  return (
    <div className="industry-info-root">
      <div className="info-header">
        <h3 className="section-title">
          <Building size={22} /> Information for User Agencies & Industry
        </h3>
        <p className="info-lead">
          The Centre works closely with user agencies, industry, and sponsors in developing tailored solutions for urban transport problems.
        </p>
      </div>

      {/* Prominent Stat Band */}
      <div className="stat-grid">
        <StatCard
          value="15+ Years"
          label="ITS & Urban Transport Expertise"
          icon={Award}
          description="Leading research and advisory since 2009"
        />
        <StatCard
          value="₹5 Cr+"
          label="Completed Projects"
          icon={Building}
          description="Delivered high-impact solutions"
        />
        <StatCard
          value="₹12 Cr+"
          label="Current Research Grants"
          icon={Globe}
          description="Active national & state transport projects"
        />
        <StatCard
          value="250+"
          label="Journal & Conference Papers"
          icon={FileText}
          description="Peer-reviewed scientific publications"
        />
        <StatCard
          value="100+"
          label="M.Tech, M.S. & Ph.D Students"
          icon={GraduationCap}
          description="Trained transportation specialists"
        />
        <StatCard
          value="20+"
          label="Training & Workshops"
          icon={Calendar}
          description="Conducted for government engineers in last 5 years"
        />
      </div>

      {/* Associated Agencies Grid */}
      <div className="agencies-box coe-card">
        <h4 className="box-title">Associated National & International Agencies</h4>
        <p className="box-desc">The Centre collaborates with leading government ministries, state departments, and international bodies:</p>

        <div className="agencies-tags">
          {[
            "Department of Science and Technology (DST)",
            "Ministry of Urban Development (MoUD)",
            "Ministry of Road Transport and Highways (MoRTH)",
            "Chennai Metropolitan Development Authority (CMDA)",
            "Hyderabad Urban Development Authority (HUDA)",
            "Department of Information Technology (DIT)",
            "National Science Foundation (NSF - USA)",
            "United States Department of Transportation (USDOT)",
            "Virginia Department of Transportation (VDOT)",
            "Texas Department of Transportation (TXDOT)",
            "New York City Department of Transportation (NYCDOT)"
          ].map((agency, idx) => (
            <span key={idx} className="agency-chip">
              <Globe size={13} className="inline-chip-icon" /> {agency}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .industry-info-root {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-lead {
          font-size: 1.05rem;
          color: var(--coe-text);
          margin-bottom: 1rem;
        }
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .agencies-box {
          border-left: 4px solid var(--coe-gold);
        }
        .box-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.5rem;
        }
        .box-desc {
          font-size: 0.925rem;
          color: var(--coe-text-muted);
          margin-bottom: 1rem;
        }
        .agencies-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        .agency-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.45rem 0.85rem;
          background-color: var(--coe-surface-alt);
          border: 1px solid var(--coe-border);
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--coe-maroon-dark);
        }
        .inline-chip-icon {
          color: var(--coe-gold);
        }
      `}</style>
    </div>
  );
};

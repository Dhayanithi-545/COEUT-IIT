import React from 'react';
import buildingImg from '../../assets/hero-second.jpeg';
import {
  Navigation,
  BookOpen,
  Gauge,
  ShieldCheck,
  Database,
  Monitor,
  Users,
  Video
} from 'lucide-react';

export const Overview = () => {
  return (
    <div className="natural-overview-root">
      {/* Section 1: Main Overview Content + Building Photo */}
      <div className="overview-main-section">
        <div className="building-photo-box">
          <img src={buildingImg} alt="Department of Civil Engineering Building IIT Madras" className="building-photo" />
          <span className="building-caption">Department of Civil Engineering &bull; IIT Madras</span>
        </div>

        <div className="overview-text-block">
          <span className="official-tag">OFFICIAL RESEARCH CENTER &bull; IIT MADRAS</span>
          <h2 className="overview-heading">Advancing Sustainable & Intelligent Urban Transport Solutions</h2>

          <p className="overview-p">
            The <strong>Center of Excellence in Urban Transport (COE-UT)</strong> was established at <strong>IIT Madras in 2009</strong> under the auspices of the Ministry of Urban Development, Ministry of Electronics & IT, and Ministry of Education, Government of India.
          </p>

          <p className="overview-p">
            Hosted within the <strong>Department of Civil Engineering</strong>, the Centre serves as a national hub for cutting-edge research, technology development, policy advisory, and capacity building.
          </p>

          <p className="overview-p">
            Coordinated by senior faculty from the Transportation Engineering Division, the Centre works closely with central and state government agencies, municipal corporations, public transit authorities, and leading research institutions across India.
          </p>
        </div>
      </div>

      {/* Section 2: Core Research Thrust Areas */}
      <div className="thrust-section">
        <h3 className="section-title">Core Research Thrust Areas</h3>

        <div className="thrust-cards-grid">
          <div className="coe-card thrust-card">
            <div className="thrust-icon-circle">
              <Navigation size={22} />
            </div>
            <h4 className="thrust-title">Intelligent Transportation Systems (ITS)</h4>
            <p className="thrust-desc">
              Real-time traffic sensing via GPS probes, computer vision, Bluetooth receivers, automated incident detection, and Advanced Traveler Information Systems (ATIS).
            </p>
          </div>

          <div className="coe-card thrust-card">
            <div className="thrust-icon-circle">
              <BookOpen size={22} />
            </div>
            <h4 className="thrust-title">Urban Transport Planning</h4>
            <p className="thrust-desc">
              Travel demand forecasting, activity-based modeling, transit system performance optimization, and sustainable land-use transport interaction.
            </p>
          </div>

          <div className="coe-card thrust-card">
            <div className="thrust-icon-circle">
              <Gauge size={22} />
            </div>
            <h4 className="thrust-title">Congestion & Speed Management</h4>
            <p className="thrust-desc">
              Dynamic network modeling under heterogeneous mixed traffic, arterial signal coordination, bus arrival time prediction, and corridor bottleneck mitigation.
            </p>
          </div>

          <div className="coe-card thrust-card">
            <div className="thrust-icon-circle">
              <ShieldCheck size={22} />
            </div>
            <h4 className="thrust-title">Road Safety & Audit</h4>
            <p className="thrust-desc">
              Surrogate safety measure evaluation, work-zone traffic safety audits, blackspot identification, and specialized training for highway engineers.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Key Institutional Capabilities & Resources */}
      <div className="capabilities-section">
        <h3 className="section-title">Key Institutional Capabilities & Resources</h3>

        <div className="cap-cards-grid">
          <div className="coe-card cap-card">
            <div className="cap-icon-box">
              <Database size={24} />
            </div>
            <h4 className="cap-card-title">ITS & Planning Data Repository</h4>
            <p className="cap-card-desc">
              Comprehensive archive of real-time GPS trajectories, Bluetooth speeds, video traffic counts, and corridor flow matrices.
            </p>
          </div>

          <div className="coe-card cap-card">
            <div className="cap-icon-box">
              <Monitor size={24} />
            </div>
            <h4 className="cap-card-title">Decision Support Tools & Models</h4>
            <p className="cap-card-desc">
              In-house traffic simulation models, signal timing design software (Cyclo Help), and video data extraction tools (MCME).
            </p>
          </div>

          <div className="coe-card cap-card">
            <div className="cap-icon-box">
              <Users size={24} />
            </div>
            <h4 className="cap-card-title">Expertise & Training</h4>
            <p className="cap-card-desc">
              Highly qualified faculty, research scholars, and technical staff driving innovation, knowledge sharing & capacity building.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4: Center Video & Recent Activities (Kept in homepage) */}
      <div className="video-section">
        <h3 className="section-title">
          <Video size={22} className="inline-icon" /> Center Video & Recent Activities
        </h3>
        <p className="video-subtitle">A brief overview video showing recent research activities and field demonstrations of the center:</p>
        <div className="video-responsive">
          <iframe
            src="https://www.youtube-nocookie.com/embed/sYCTcf47Nc8"
            title="Center of Excellence in Urban Transport IIT Madras"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <style>{`
        .natural-overview-root {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          width: 100%;
        }

        /* Overview Main Section */
        .overview-main-section {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 2.5rem;
          align-items: start;
        }
        .building-photo-box {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--coe-border);
          background-color: #ffffff;
        }
        .building-photo {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
        }
        .building-caption {
          display: block;
          padding: 0.6rem 0.85rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--coe-maroon-dark);
          background-color: var(--coe-surface-alt);
          text-align: center;
        }
        .official-tag {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--coe-gold-muted);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 0.35rem;
          display: block;
        }
        .overview-heading {
          font-family: var(--font-heading);
          font-size: 1.85rem;
          font-weight: 800;
          color: var(--coe-maroon-dark);
          margin-bottom: 1rem;
          line-height: 1.25;
        }
        .overview-p {
          font-size: 1rem;
          color: var(--coe-text);
          line-height: 1.65;
          margin-bottom: 0.85rem;
        }

        /* Thrust Cards Grid */
        .thrust-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .thrust-card {
          border-top: 4px solid var(--coe-gold);
        }
        .thrust-icon-circle {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--coe-surface-alt);
          color: var(--coe-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .thrust-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.5rem;
        }
        .thrust-desc {
          font-size: 0.925rem;
          color: var(--coe-text-muted);
          line-height: 1.55;
        }

        /* Capabilities Grid */
        .cap-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .cap-card {
          border-left: 4px solid var(--coe-maroon);
        }
        .cap-icon-box {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-sm);
          background-color: var(--coe-cream);
          color: var(--coe-maroon);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          border: 1px solid var(--coe-border);
        }
        .cap-card-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.5rem;
        }
        .cap-card-desc {
          font-size: 0.925rem;
          color: var(--coe-text);
          line-height: 1.6;
        }

        /* Video Section */
        .video-subtitle {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1rem;
        }
        .inline-icon {
          color: var(--coe-maroon);
        }

        @media (max-width: 900px) {
          .overview-main-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

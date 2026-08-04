import React from 'react';
import { Navigation, MapPin, Compass, Layers } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export const StudyCorridorsSubtab = () => {
  return (
    <div className="corridors-subtab-root">
      <div className="section-header">
        <h3 className="section-title">
          <Navigation size={22} /> Chennai Urban Transport Test Bed Corridors
        </h3>
        <p className="section-desc">
          Initial ITS test beds were deployed on key arterial corridors in Chennai near IIT Madras to evaluate real-time data collection, bus arrival prediction, and signal priority.
        </p>
      </div>

      <div className="corridors-grid">
        <Card title="Corridor 1: Sardar Patel Road & IT Corridor" icon={Navigation} badge="15 km Test Bed">
          <p className="card-text">
            Extends along Sardar Patel Road, connecting Adyar, Guindy, and the Rajiv Gandhi Salai (OMR / IT Corridor). Equipped with GPS probes, video sensors, and automated signal controllers.
          </p>
        </Card>

        <Card title="Corridor 2: Velachery Road & Taramani Road" icon={Navigation} badge="Key Arterial">
          <p className="card-text">
            Runs along Velachery Road through Taramani Road. Serves dense mixed-traffic commuter flows between residential hubs and tech parks.
          </p>
        </Card>
      </div>

      <div className="corridor-stats-box coe-card">
        <h4 className="box-title">Corridor Testbed Specifications</h4>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-val">15 km</span>
            <span className="spec-lbl">Total Corridor Length</span>
          </div>
          <div className="spec-item">
            <span className="spec-val">13</span>
            <span className="spec-lbl">Signalized Intersections</span>
          </div>
          <div className="spec-item">
            <span className="spec-val">28</span>
            <span className="spec-lbl">Midblock Sections</span>
          </div>
          <div className="spec-item">
            <span className="spec-val">40+</span>
            <span className="spec-lbl">GPS MTC Bus Probes</span>
          </div>
        </div>
      </div>

      {/* Corridor Map Placeholder Box */}
      <div className="corridor-map-card coe-card">
        <h4 className="box-title">
          <Compass size={18} className="inline-icon" /> Map Schema of Study Area
        </h4>
        <div className="map-placeholder-graphic">
          <svg viewBox="0 0 800 400" className="corridor-svg" aria-label="Chennai Study Corridors Map">
            <rect width="800" height="400" fill="#FDF6E3" rx="6" />
            <path d="M50 350 C200 320, 300 200, 450 150 C600 100, 700 80, 750 50" fill="none" stroke="#7A1F1F" strokeWidth="6" strokeDasharray="8 4" />
            <path d="M100 80 C250 120, 350 250, 500 300 C650 330, 720 350, 780 370" fill="none" stroke="#B03A2E" strokeWidth="6" />
            
            {/* Intersections */}
            <circle cx="200" cy="220" r="10" fill="#C9A227" stroke="#ffffff" strokeWidth="2" />
            <text x="200" y="245" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2B2B2B">Sardar Patel Junction</text>

            <circle cx="450" cy="150" r="10" fill="#C9A227" stroke="#ffffff" strokeWidth="2" />
            <text x="450" y="135" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2B2B2B">IIT Madras Gate</text>

            <circle cx="500" cy="300" r="10" fill="#C9A227" stroke="#ffffff" strokeWidth="2" />
            <text x="500" y="325" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2B2B2B">Taramani / Velachery</text>

            <legend>
              <rect x="20" y="20" width="220" height="80" fill="#FFFFFF" stroke="#E2DCC9" rx="4" />
              <line x1="30" y1="40" x2="60" y2="40" stroke="#7A1F1F" strokeWidth="4" />
              <text x="70" y="44" fontSize="11" fill="#2B2B2B">Corridor 1: SP Road / IT Corridor</text>
              <line x1="30" y1="65" x2="60" y2="65" stroke="#B03A2E" strokeWidth="4" />
              <text x="70" y="69" fontSize="11" fill="#2B2B2B">Corridor 2: Velachery / Taramani</text>
            </legend>
          </svg>
        </div>
      </div>

      <style>{`
        .corridors-subtab-root {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .section-desc {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
        }
        .corridors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .card-text {
          font-size: 0.925rem;
          color: var(--coe-text);
          line-height: 1.5;
        }
        .corridor-stats-box {
          border-left: 4px solid var(--coe-gold);
        }
        .box-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 1rem;
        }
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
        }
        .spec-item {
          background-color: var(--coe-cream);
          padding: 1rem;
          border-radius: 4px;
          text-align: center;
          border: 1px solid var(--coe-gold-light);
        }
        .spec-val {
          font-family: var(--font-serif);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--coe-maroon-dark);
          display: block;
        }
        .spec-lbl {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--coe-text-muted);
          text-transform: uppercase;
        }
        .corridor-map-card {
          border-left: 4px solid var(--coe-maroon);
        }
        .map-placeholder-graphic {
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }
        .corridor-svg {
          width: 100%;
          height: auto;
          display: block;
        }
        .inline-icon {
          color: var(--coe-gold);
        }
      `}</style>
    </div>
  );
};

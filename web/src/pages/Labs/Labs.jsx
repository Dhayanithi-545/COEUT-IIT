import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../../components/layout/Hero';
import { labs, hardwareEquipment, softwareTools } from '../../data/labsData';
import { Card } from '../../components/ui/Card';
import { DataTable } from '../../components/ui/DataTable';
import { EmptyState } from '../../components/ui/EmptyState';
import {
  Cpu,
  CarFront,
  Gamepad2,
  Truck,
  Satellite,
  Bluetooth,
  Camera,
  Video,
  Scan,
  Radar,
  Code2,
  Download,
  CheckCircle2,
  HardDrive,
  Users,
  FlaskConical,
  Images,
  GraduationCap
} from 'lucide-react';

const iconMap = {
  Satellite,
  Bluetooth,
  Camera,
  Video,
  Scan,
  Radar,
  Cpu
};

const simulatorPeople = [
  {
    name: "Dr. Anmol Pahwa",
    designation: "Assistant Professor",
    interests: "Sustainable Transportation, Freight Transportation, City Logistics"
  },
  {
    name: "Dr. Bhargava Rama Chilukuri",
    designation: "Associate Professor",
    interests: "Traffic Flow Theory, Numerical Methods And Simulations to Traffic Control"
  },
  {
    name: "Dr. Gitakrishnan Ramadurai",
    designation: "Professor",
    interests: "Dynamic Traffic Assignment, Transportation Network Modeling"
  },
  {
    name: "Dr. Karthik K. S.",
    designation: "Professor",
    interests: "Travel Demand Modeling, Network Optimization"
  },
  {
    name: "Dr. Lelitha Devi Vanajakshi",
    designation: "Professor",
    interests: "Traffic Flow Modeling, Intelligent Transport Systems, Traffic Operations"
  }
];

export const Labs = () => {
  const location = useLocation();
  const rawHash = location.hash.replace('#', '');

  let activeLab = 'its-lab';
  let itsSubTab = 'overview';

  if (rawHash.startsWith('its-lab')) {
    activeLab = 'its-lab';
    if (rawHash === 'its-lab-hardware') itsSubTab = 'hardware';
    else if (rawHash === 'its-lab-software') itsSubTab = 'software';
    else itsSubTab = 'overview';
  } else if (rawHash === 'simulator-lab') {
    activeLab = 'simulator-lab';
  } else if (rawHash === 'caev-lab') {
    activeLab = 'caev-lab';
  } else if (rawHash === 'logniti-lab') {
    activeLab = 'logniti-lab';
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [rawHash]);

  const selectedLab = labs.find(l => l.id === activeLab) || labs[0];

  const softwareColumns = [
    {
      header: "Software Package",
      accessorKey: "name",
      width: "25%",
      render: (row) => (
        <div>
          <strong style={{ color: 'var(--coe-maroon-dark)', fontSize: '1rem' }}>{row.name}</strong>
          {row.isCustom && <span className="coe-badge" style={{ marginLeft: '0.5rem' }}>IIT Madras Tool</span>}
        </div>
      )
    },
    {
      header: "Category",
      accessorKey: "category",
      width: "25%",
      render: (row) => <span className="sw-cat-badge">{row.category}</span>
    },
    {
      header: "Capabilities & Details",
      accessorKey: "description",
      width: "50%",
      render: (row) => (
        <div>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>{row.description}</p>
          {row.downloads && (
            <div className="sw-downloads">
              {row.downloads.map((d, i) => (
                <a key={i} href={d.fileUrl} className="coe-btn coe-btn-secondary sw-dl-btn">
                  <Download size={13} /> {d.title}
                </a>
              ))}
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="labs-page">
      <Hero
        title="Laboratories under the Centre"
        subtitle="National research facilities for ITS, autonomous systems, driving simulation, and freight logistics"
      />

      <main className="container page-content">
        {activeLab === 'its-lab' && (
          <div className="its-lab-container">

            {itsSubTab === 'overview' && (
              <div className="coe-card lab-main-card">
                <h3 className="lab-title">{selectedLab.name}</h3>
                <p className="lab-tagline">{selectedLab.tagline}</p>
                <p className="lab-desc">{selectedLab.description}</p>

                <h4 className="cap-heading">Key Lab Capabilities:</h4>
                <ul className="cap-list">
                  {selectedLab.capabilities.map((cap, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="cap-icon" /> {cap}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {itsSubTab === 'hardware' && (
              <div className="hardware-grid">
                {hardwareEquipment.map((item) => {
                  const ItemIcon = iconMap[item.iconType] || HardDrive;
                  return (
                    <Card key={item.id} title={item.name} icon={ItemIcon} badge={item.count}>
                      <p>{item.description}</p>
                    </Card>
                  );
                })}
              </div>
            )}

            {itsSubTab === 'software' && (
              <DataTable
                columns={softwareColumns}
                data={softwareTools}
                searchPlaceholder="Filter software tools by name or category..."
                pageSize={10}
              />
            )}
          </div>
        )}

        {activeLab === 'simulator-lab' && (
          <div className="simulator-lab-container">
            <div className="coe-card lab-main-card mb-4">
              <h3 className="lab-title">{selectedLab.name}</h3>
              <p className="lab-tagline">{selectedLab.tagline}</p>
              <p className="lab-desc">{selectedLab.description}</p>

              <h4 className="cap-heading">Faculty & Researchers:</h4>
              <div className="sim-faculty-grid">
                {simulatorPeople.map((p, idx) => (
                  <div key={idx} className="sim-faculty-card">
                    <GraduationCap size={20} className="sim-icon" />
                    <div>
                      <h5 className="sim-name">{p.name}</h5>
                      <span className="sim-desig">{p.designation}</span>
                      <p className="sim-interests">{p.interests}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {(activeLab === 'caev-lab' || activeLab === 'logniti-lab') && (
          <div className="other-lab-content">
            <div className="coe-card lab-main-card mb-4">
              <h3 className="lab-title">{selectedLab.name}</h3>
              <p className="lab-tagline">{selectedLab.tagline}</p>
              <p className="lab-desc">{selectedLab.description}</p>
              <h4 className="cap-heading">Core Thrust Areas:</h4>
              <ul className="cap-list">
                {selectedLab.capabilities.map((cap, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="cap-icon" /> {cap}
                  </li>
                ))}
              </ul>
            </div>
            <EmptyState
              title={`${selectedLab.shortName} Media & Field Trials`}
              message="Field demonstration videos, experimental hardware setups, and research project outputs are being integrated into this section."
              icon={Images}
            />
          </div>
        )}
      </main>

      <style>{`
        .page-content {
          padding-top: 1rem;
        }
        .its-subtab-strip {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .its-subtab-pill {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1.15rem;
          border: 1px solid var(--coe-border);
          border-radius: var(--radius-pill);
          background-color: var(--coe-surface);
          font-family: var(--font-heading);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--coe-text-muted);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .its-subtab-pill:hover {
          color: var(--coe-maroon);
          border-color: var(--coe-gold);
        }
        .its-subtab-pill.active {
          background-color: var(--coe-maroon);
          color: #ffffff;
          border-color: var(--coe-maroon);
        }
        .lab-main-card {
          border-left: 4px solid var(--coe-maroon);
          margin-bottom: 1.5rem;
        }
        .lab-title {
          font-family: var(--font-heading);
          font-size: 1.6rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.25rem;
        }
        .lab-tagline {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--coe-gold-muted);
          margin-bottom: 1rem;
        }
        .lab-desc {
          font-size: 1rem;
          color: var(--coe-text);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .cap-heading {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.85rem;
        }
        .cap-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .cap-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--coe-text);
          background-color: var(--coe-surface-alt);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
        }
        .cap-icon {
          color: var(--coe-maroon);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .hardware-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .sw-cat-badge {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--coe-gold-muted);
        }
        .sw-downloads {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .sw-dl-btn {
          font-size: 0.775rem;
          padding: 0.35rem 0.65rem;
        }

        .sim-faculty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
          margin-top: 0.75rem;
        }
        .sim-faculty-card {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          background: var(--coe-surface-alt);
          padding: 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--coe-border);
        }
        .sim-icon {
          color: var(--coe-maroon);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .sim-name {
          font-family: var(--font-heading);
          font-size: 1rem;
          color: var(--coe-maroon-dark);
        }
        .sim-desig {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--coe-gold-muted);
          display: block;
        }
        .sim-interests {
          font-size: 0.85rem;
          color: var(--coe-text);
          margin-top: 0.25rem;
        }
      `}</style>
    </div>
  );
};

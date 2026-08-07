import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Cpu,
  CarFront,
  Gamepad2,
  Truck,
  HardDrive,
  Code2,
  CheckCircle2,
  Download,
  Info
} from 'lucide-react';
import { labs, hardwareEquipment, softwareList } from './data';

const labTabs = [
  { id: 'its-lab', label: 'ITS & Traffic Monitoring Lab', icon: Cpu },
  { id: 'caev-lab', label: 'Connected & Autonomous Vehicles', icon: CarFront },
  { id: 'simulator-lab', label: 'Driving Simulator Lab', icon: Gamepad2 },
  { id: 'logniti-lab', label: 'LogNiti Freight Lab', icon: Truck },
  { id: 'hardware', label: 'Hardware Equipment', icon: HardDrive },
  { id: 'software', label: 'Software Suite & Tools', icon: Code2 },
];

export const Labs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash.replace('#', '') || 'its-lab';
  const [activeLab, setActiveLab] = useState(hash);

  useEffect(() => {
    setActiveLab(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  const handleTabClick = (tabId) => {
    setActiveLab(tabId);
    navigate(`/labs#${tabId}`);
  };

  const selectedLab = labs.find((l) => l.id === activeLab);

  return (
    <div className="labs-page">
      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Laboratories & State-of-the-Art Research Facilities</h1>
          <p className="page-header-sub">National testbeds for ITS traffic sensing, human-in-the-loop driving simulation, connected autonomous vehicles, and sustainable freight logistics.</p>
        </div>
      </div>

      {/* Subtab Navigation Bar */}
      <div className="subtab-bar-root">
        <div className="container">
          <div className="subtab-nav-wrapper">
            {labTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`subtab-btn ${activeLab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="container page-content" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        {selectedLab ? (
          <LabDetailCard lab={selectedLab} />
        ) : activeLab === 'hardware' ? (
          <HardwareSection />
        ) : activeLab === 'software' ? (
          <SoftwareSection />
        ) : (
          <LabDetailCard lab={labs[0]} />
        )}
      </main>
    </div>
  );
};

const LabDetailCard = ({ lab }) => {
  return (
    <div className="coe-card lab-main-card">
      <div className="lab-badge-tag">{lab.shortName}</div>
      <h2 className="lab-title">{lab.name}</h2>
      <p className="lab-tagline">{lab.tagline}</p>
      <p className="lab-desc">{lab.description}</p>

      <h3 className="cap-heading">Key Laboratory Capabilities & Facilities:</h3>
      <ul className="cap-list">
        {lab.capabilities.map((cap, i) => (
          <li key={i}>
            <CheckCircle2 size={18} className="cap-icon" /> <span>{cap}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const HardwareSection = () => {
  return (
    <div className="hardware-root">
      <div className="section-intro-card coe-card">
        <h2>Hardware Equipment & Sensing Infrastructure</h2>
        <p>State-of-the-art field sensors, GPS units, radar detectors, video loggers, and traffic counters deployed by the Centre:</p>
      </div>

      <div className="hardware-grid">
        {hardwareEquipment.map((hw, idx) => (
          <div key={idx} className="coe-card hw-card">
            <div className="hw-badge">{hw.qty}</div>
            <h3 className="hw-title">{hw.name}</h3>
            <p className="hw-desc">{hw.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SoftwareSection = () => {
  return (
    <div className="software-root">
      <div className="section-intro-card coe-card">
        <h2>Software Suite for Traffic Management & Modeling</h2>
        <p>Advanced commercial and in-house transportation planning, traffic simulation, and optimization software suite available at the ITS Lab:</p>
      </div>

      {/* MCME Highlight */}
      <div className="coe-card mcme-highlight-card">
        <span className="mcme-badge">IIT MADRAS IN-HOUSE SOFTWARE</span>
        <h3>MCME (Manual Count Made Easy)</h3>
        <p>
          Data extraction from video has always been a tedious task for transportation engineers. Developed at IIT Madras, <strong>MCME</strong> is a graphical user interface working on the principle of speech recognition to effortlessly record vehicle counts from video recordings.
        </p>
        <div className="mcme-actions">
          <button type="button" className="coe-btn coe-btn-primary"><Download size={16} /> Download MCME V2 Software</button>
          <button type="button" className="coe-btn coe-btn-outline"><Download size={16} /> Download MCME User Manual</button>
        </div>
      </div>

      <div className="software-grid">
        {softwareList.map((sw, idx) => (
          <div key={idx} className="coe-card sw-card">
            <h3 className="sw-title">{sw.name}</h3>
            <p className="sw-desc">{sw.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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

      {/* Subtab Navigation Bar */}
      {/* <div className="subtab-bar-root">
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
      </div> */}

      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Laboratories & State-of-the-Art Research Facilities</h1>
          <p className="page-header-sub">National testbeds for ITS traffic sensing, human-in-the-loop driving simulation, connected autonomous vehicles, and sustainable freight logistics.</p>
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
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
      {/* Left: identity panel, sticky while capabilities scroll */}
      <div className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-4">
        <div className="lab-badge-tag w-fit">{lab.shortName}</div>
        <h2 className="lab-title">{lab.name}</h2>
        <p className="lab-tagline">{lab.tagline}</p>
        <p className="lab-desc">{lab.description}</p>
      </div>

      {/* Right: capabilities as a two-col checklist, not stacked in a box */}
      <div className="flex flex-col gap-6">
        <h3 className="cap-heading">Key Laboratory Capabilities & Facilities</h3>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          {lab.capabilities.map((cap, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 size={18} className="cap-icon shrink-0 mt-0.5" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const HardwareSection = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Header lives in the page flow, not inside a card */}
      <div className="max-w-2xl flex flex-col gap-3">
        <h2>Hardware Equipment & Sensing Infrastructure</h2>
        <p>State-of-the-art field sensors, GPS units, radar detectors, video loggers, and traffic counters deployed by the Centre:</p>
      </div>

      {/* Equipment as a numbered, divided row list — reads like a spec sheet */}
      <div className="flex flex-col divide-y">
        {hardwareEquipment.map((hw, idx) => (
          <div key={idx} className="grid grid-cols-[auto_1fr_auto] items-center gap-6 py-5">
            <span className="hw-index text-2xl font-semibold opacity-40">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="hw-title">{hw.name}</h3>
              <p className="hw-desc">{hw.desc}</p>
            </div>
            <span className="hw-badge shrink-0">{hw.qty}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SoftwareSection = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="max-w-2xl flex flex-col gap-3">
        <h2>Software Suite for Traffic Management & Modeling</h2>
        <p>Advanced commercial and in-house transportation planning, traffic simulation, and optimization software suite available at the ITS Lab:</p>
      </div>

      {/* MCME promoted to a featured split hero instead of a card */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 items-center border-t border-b py-10">
        <div className="flex flex-col gap-4">
          <span className="mcme-badge w-fit">IIT MADRAS IN-HOUSE SOFTWARE</span>
          <h3>MCME (Manual Count Made Easy)</h3>
          <p>
            Data extraction from video has always been a tedious task for transportation engineers.
            Developed at IIT Madras, <strong>MCME</strong> is a graphical user interface working on the
            principle of speech recognition to effortlessly record vehicle counts from video recordings.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button type="button" className="coe-btn coe-btn-primary w-full justify-center">
            <Download size={16} /> Download MCME V2 Software
          </button>
          <button type="button" className="coe-btn coe-btn-outline w-full justify-center">
            <Download size={16} /> Download MCME User Manual
          </button>
        </div>
      </div>

      {/* Remaining tools as a compact, divided two-column list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
        {softwareList.map((sw, idx) => (
          <div key={idx} className="flex flex-col gap-1 pb-4 border-b">
            <h3 className="sw-title">{sw.name}</h3>
            <p className="sw-desc">{sw.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );

};

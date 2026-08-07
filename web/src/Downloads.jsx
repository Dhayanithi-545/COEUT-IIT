import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Database,
  Download,
  FileText,
  Images,
  Code2,
  Maximize2,
  X,
  CheckCircle2
} from 'lucide-react';
import mainbanner from './assets/mainbanner.jpg';

const downloadTabs = [
  { id: 'datasets', label: 'Data Repositories', icon: Database },
  { id: 'software', label: 'MCME Software & Tools', icon: Code2 },
  { id: 'publications', label: 'Publications & Reports', icon: FileText },
  { id: 'gallery', label: 'Photo Gallery', icon: Images },
];

export const Downloads = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash.replace('#', '') || 'datasets';
  const [activeSection, setActiveSection] = useState(hash);

  useEffect(() => {
    setActiveSection(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  const handleTabClick = (tabId) => {
    setActiveSection(tabId);
    navigate(`/downloads#${tabId}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'datasets':
        return <DatasetsSection />;
      case 'software':
        return <SoftwareDownloadsSection />;
      case 'publications':
        return <PublicationsSection />;
      case 'gallery':
        return <GallerySection />;
      default:
        return <DatasetsSection />;
    }
  };

  return (
    <div className="downloads-page">
      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Downloads, Datasets & Resource Tools</h1>
          <p className="page-header-sub">Access open traffic data repositories, in-house software tools, synthesis reports, and photo archives.</p>
        </div>
      </div>

      {/* Subtab Navigation Bar */}
      <div className="subtab-bar-root">
        <div className="container">
          <div className="subtab-nav-wrapper">
            {downloadTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`subtab-btn ${activeSection === tab.id ? 'active' : ''}`}
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

      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        {renderContent()}
      </main>
    </div>
  );
};

const DatasetsSection = () => {
  return (
    <div className="datasets-root">
      <div className="section-intro-card coe-card">
        <h2>Open Traffic Data Repositories</h2>
        <p>High-resolution spatio-temporal datasets collected across Chennai study corridors for research and public evaluation:</p>
      </div>

      <div className="datasets-grid">
        <div className="coe-card dataset-card">
          <Database size={28} className="ds-icon" />
          <h3>MTC Bus GPS Trajectory Dataset</h3>
          <p>40 GPS probe vehicle data logs recording timestamps, latitude, longitude, and instantaneous speeds on Sardar Patel Road and OMR corridor.</p>
          <button type="button" className="coe-btn coe-btn-primary"><Download size={14} /> Download Sample Data (CSV)</button>
        </div>
        <div className="coe-card dataset-card">
          <Database size={28} className="ds-icon" />
          <h3>Bluetooth Travel Time & Speed Archives</h3>
          <p>Corridor travel time measurements recorded using dual Bluetooth receivers for arterial speed calculation.</p>
          <button type="button" className="coe-btn coe-btn-primary"><Download size={14} /> Download Sample Data (CSV)</button>
        </div>
        <div className="coe-card dataset-card">
          <Database size={28} className="ds-icon" />
          <h3>Heterogeneous Video Traffic Counts</h3>
          <p>Video count and headway datasets under non-lane-based mixed traffic conditions in Chennai intersections.</p>
          <button type="button" className="coe-btn coe-btn-primary"><Download size={14} /> Download Sample Data (CSV)</button>
        </div>
      </div>
    </div>
  );
};

const SoftwareDownloadsSection = () => {
  return (
    <div className="software-dl-root">
      <div className="coe-card mcme-highlight-card">
        <span className="mcme-badge">IIT MADRAS IN-HOUSE SOFTWARE TOOL</span>
        <h2>MCME V2 (Manual Count Made Easy)</h2>
        <p>
          Manual Count Made Easy (MCME) is a speech recognition GUI developed at IIT Madras designed to streamline video-based traffic data extraction for transportation engineers.
        </p>
        <div className="mcme-actions">
          <button type="button" className="coe-btn coe-btn-primary"><Download size={16} /> Download MCME_V2 Software</button>
          <button type="button" className="coe-btn coe-btn-outline"><Download size={16} /> Download MCME User Manual (PDF)</button>
        </div>
      </div>
    </div>
  );
};

const PublicationsSection = () => {
  return (
    <div className="pub-root">
      <div className="section-intro-card coe-card">
        <h2>Technical Reports & Publications PDF Downloads</h2>
        <p>Download full technical synthesis reports and research papers published by the Centre of Excellence in Urban Transport:</p>
      </div>

      <div className="pub-list">
        <div className="coe-card pub-card">
          <FileText size={24} />
          <div>
            <h4>ITS Synthesis Report</h4>
            <p>Comprehensive review of Intelligent Transportation Systems architecture for Indian cities.</p>
          </div>
          <button type="button" className="coe-btn coe-btn-outline"><Download size={14} /> Download PDF</button>
        </div>
        <div className="coe-card pub-card">
          <FileText size={24} />
          <div>
            <h4>Real Time Bus Arrival Time Prediction System Report</h4>
            <p>Bus arrival prediction algorithms and field trial results under mixed traffic.</p>
          </div>
          <button type="button" className="coe-btn coe-btn-outline"><Download size={14} /> Download PDF</button>
        </div>
        <div className="coe-card pub-card">
          <FileText size={24} />
          <div>
            <h4>Report on Urban Traffic Congestion Mitigation</h4>
            <p>Bottleneck identification and congestion management strategies.</p>
          </div>
          <button type="button" className="coe-btn coe-btn-outline"><Download size={14} /> Download PDF</button>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <div className="gallery-root">
      <div className="section-intro-card coe-card">
        <h2>Photo & Field Activity Gallery</h2>
      </div>

      <div className="gallery-grid">
        <div className="coe-card gallery-card">
          <img src={mainbanner} alt="COE-UT Research Facilities" className="gallery-img" />
          <div className="gallery-info">
            <h4>ITS & Traffic Monitoring Centre</h4>
            <p>Workstations, display servers, and real-time sensor monitoring consoles.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

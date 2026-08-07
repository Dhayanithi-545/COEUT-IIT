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

      {/* Subtab Navigation Bar
      <div className="subtab-bar-root">
        <div className="container">
          <div className="subtab-nav-wrapper overflow-x-auto flex gap-2 sm:gap-3 no-scrollbar">
            {downloadTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`subtab-btn shrink-0 ${activeSection === tab.id ? 'active' : ''}`}
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
          <h1 className="page-header-title">Downloads, Datasets & Resource Tools</h1>
          <p className="page-header-sub">Access open traffic data repositories, in-house software tools, synthesis reports, and photo archives.</p>
        </div>
      </div>

      <main className="container px-4 sm:px-6" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        {renderContent()}
      </main>
    </div>
  );
};

const DatasetsSection = () => {
  const datasets = [
    {
      title: 'MTC Bus GPS Trajectory Dataset',
      desc: '40 GPS probe vehicle data logs recording timestamps, latitude, longitude, and instantaneous speeds on Sardar Patel Road and OMR corridor.',
      meta: 'CSV · GPS Probe Data',
    },
    {
      title: 'Bluetooth Travel Time & Speed Archives',
      desc: 'Corridor travel time measurements recorded using dual Bluetooth receivers for arterial speed calculation.',
      meta: 'CSV · Bluetooth MAC Matching',
    },
    {
      title: 'Heterogeneous Video Traffic Counts',
      desc: 'Video count and headway datasets under non-lane-based mixed traffic conditions in Chennai intersections.',
      meta: 'CSV · Video-Derived Counts',
    },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="max-w-2xl flex flex-col gap-2 sm:gap-3">
        <h2>Open Traffic Data Repositories</h2>
        <p>High-resolution spatio-temporal datasets collected across Chennai study corridors for research and public evaluation:</p>
      </div>

      {/* Card grid — 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {datasets.map((ds, idx) => (
          <div
            key={idx}
            className="rounded-2xl  p-5 sm:p-6 flex flex-col gap-4 h-full"
          >
            <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-black/5">
              <Database size={20} className="ds-icon" />
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <h3 className="text-base font-semibold leading-snug">{ds.title}</h3>
              <p className="ds-desc text-sm leading-relaxed opacity-80">{ds.desc}</p>
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <span className="ds-meta text-xs uppercase tracking-wide opacity-60">{ds.meta}</span>
              <button type="button" className="coe-btn coe-btn-primary w-full justify-center">
                <Download size={14} /> Download Sample
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SoftwareDownloadsSection = () => {
  return (
    <div className="rounded-2xl  p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-10">
      <div className="flex flex-col gap-4 flex-1">
        <span className="mcme-badge w-fit">IIT MADRAS IN-HOUSE SOFTWARE TOOL</span>
        <h2>MCME V2 (Manual Count Made Easy)</h2>
        <p>
          Manual Count Made Easy (MCME) is a speech recognition GUI developed at IIT Madras
          designed to streamline video-based traffic data extraction for transportation engineers.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full lg:w-auto lg:min-w-[260px]">
        <button type="button" className="coe-btn coe-btn-primary w-full justify-center">
          <Download size={16} /> Download MCME V2 Software
        </button>
        <button type="button" className="coe-btn coe-btn-outline w-full justify-center">
          <Download size={16} /> Download User Manual (PDF)
        </button>
      </div>
    </div>
  );
};

const PublicationsSection = () => {
  const publications = [
    {
      title: 'ITS Synthesis Report',
      desc: 'Comprehensive review of Intelligent Transportation Systems architecture for Indian cities.',
    },
    {
      title: 'Real Time Bus Arrival Time Prediction System Report',
      desc: 'Bus arrival prediction algorithms and field trial results under mixed traffic.',
    },
    {
      title: 'Report on Urban Traffic Congestion Mitigation',
      desc: 'Bottleneck identification and congestion management strategies.',
    },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="max-w-2xl flex flex-col gap-2 sm:gap-3">
        <h2>Technical Reports & Publications</h2>
        <p>Download full technical synthesis reports and research papers published by the Centre of Excellence in Urban Transport:</p>
      </div>

      {/* Card grid instead of divided rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="rounded-2xl  p-5 sm:p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-black/5">
                <FileText size={20} />
              </div>
              <span className="text-xs font-mono opacity-40">{String(idx + 1).padStart(2, '0')}</span>
            </div>

            <div className="flex flex-col gap-2 flex-1">
              <h4 className="text-base font-semibold leading-snug">{pub.title}</h4>
              <p className="text-sm leading-relaxed opacity-80">{pub.desc}</p>
            </div>

            <button type="button" className="coe-btn coe-btn-outline w-full justify-center">
              <Download size={14} /> Download PDF
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const GallerySection = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="max-w-2xl flex flex-col gap-2 sm:gap-3">
        <h2>Photo & Field Activity Gallery</h2>
      </div>

      {/* Feature card — image on top for mobile, split for desktop */}
      <div className="rounded-2xl  overflow-hidden flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 aspect-video lg:aspect-auto">
          <img
            src={mainbanner}
            alt="COE-UT Research Facilities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-3 p-5 sm:p-6 lg:p-8 lg:w-2/5 justify-center">
          <span className="text-xs uppercase tracking-wide opacity-60">Facility Feature</span>
          <h3 className="text-lg font-semibold">ITS & Traffic Monitoring Centre</h3>
          <p className="opacity-80 text-sm leading-relaxed">
            Workstations, display servers, and real-time sensor monitoring consoles.
          </p>
        </div>
      </div>
    </div>
  );
};
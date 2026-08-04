import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../../components/layout/Hero';
import { Card } from '../../components/ui/Card';
import { Database, Download, FileText, Images, Maximize2, X, CheckCircle2, Code2 } from 'lucide-react';
import mainbanner from '../../assets/mainbanner.jpg';

export const Downloads = () => {
  const location = useLocation();
  const rawHash = location.hash.replace('#', '');
  const activeTab = rawHash || 'datasets';
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const datasets = [
    {
      title: "Chennai Arterial Corridor GPS Bus Trajectories",
      format: "CSV / GeoJSON",
      size: "450 MB",
      desc: "40 MTC bus GPS location logs at 5-second sampling intervals on Sardar Patel & Velachery arterial corridors.",
      access: "Research Access"
    },
    {
      title: "Mixed Traffic Inductive Loop Detector Raw Dataset",
      format: "ASCII / DAT",
      size: "120 MB",
      desc: "Electromagnetic waveform logs for non-lane-based vehicle classification collected at IIT Madras testbed.",
      access: "Open Access"
    },
    {
      title: "Intersection Video Count & Headway Dataset",
      format: "MP4 / Annotations",
      size: "2.4 GB",
      desc: "High-definition video feeds with MCME speech-annotated ground truth vehicle counts across 13 intersections.",
      access: "Request Access"
    },
    {
      title: "Bluetooth Sensor Travel Time & Speed Matrix",
      format: "JSON / CSV",
      size: "85 MB",
      desc: "Anonymized Bluetooth MAC detection time-stamps for space-mean speed estimation.",
      access: "Open Access"
    }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "ITS Lab Traffic Monitoring Workstations",
      category: "ITS Lab",
      src: mainbanner,
      caption: "Real-time traffic surveillance and signal optimization workstations at the ITS & Traffic Monitoring Lab."
    },
    {
      id: 2,
      title: "Indo-US Workshop ETITS 2010 Delegation",
      category: "Events",
      src: mainbanner,
      caption: "Eminent speakers and delegates at the Indo-US Workshop on Emerging Trends in Intelligent Transportation Systems."
    },
    {
      id: 3,
      title: "MTC Bus GPS Data Collector Deployment",
      category: "Hardware",
      src: mainbanner,
      caption: "On-board GPS probe-vehicle tracking equipment installed on Metropolitan Transport Corporation (MTC) buses."
    },
    {
      id: 4,
      title: "Driving Simulator Cockpit Testbed",
      category: "Simulator Lab",
      src: mainbanner,
      caption: "Full-vehicle driving simulator cockpit for driver behavior and surrogate safety evaluation."
    },
    {
      id: 5,
      title: "Inductive Loop Sensor Field Testing",
      category: "Sensors",
      src: mainbanner,
      caption: "Experimental inductive loop detector testing under mixed non-lane based traffic conditions."
    },
    {
      id: 6,
      title: "Road Safety Audit Program - Chennai",
      category: "Training",
      src: mainbanner,
      caption: "Highways Department engineers undergoing Road Safety Audit training conducted by COE-UT faculty."
    }
  ];

  const cycloFeatures = [
    "Fixed-time signal timing design for isolated signalized intersections",
    "Phase sequence optimization & green time calculation using Webster's Method",
    "Capacity analysis & Degree of Saturation (v/c) evaluation",
    "Cycle length optimization considering pedestrian clearance requirements",
    "Exportable signal timing charts and phase allocation reports"
  ];

  return (
    <div className="downloads-page">
      <Hero
        title="Downloads & Software Resources"
        subtitle="Open-access transport datasets, signal design software suite, and activity gallery"
      />
      <main className="container page-content">
        {activeTab === 'datasets' && (
          <div className="datasets-section">
            <h3 className="section-title">
              <Database size={22} /> Transport Data Repository
            </h3>
            <p className="section-desc">
              The Centre of Excellence in Urban Transport maintains a repository of traffic, ITS, road safety, and travel behavior data for academic and research purposes:
            </p>

            <div className="datasets-grid">
              {datasets.map((ds, idx) => (
                <Card key={idx} title={ds.title} icon={FileText} badge={ds.access}>
                  <div className="ds-card-body">
                    <p className="ds-desc">{ds.desc}</p>
                    <div className="ds-meta">
                      <span>Format: <strong>{ds.format}</strong></span> &bull;
                      <span>Size: <strong>{ds.size}</strong></span>
                    </div>
                    <a href="#" className="coe-btn coe-btn-primary ds-dl-btn">
                      <Download size={14} /> Download Dataset
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'software' && (
          <div className="software-section">
            <div className="coe-card cyclo-main-card">
              <div className="cyclo-header">
                <div className="cyclo-badge">COE-UT Software Tool</div>
                <h3 className="cyclo-title">Cyclo Help &bull; Signal Design Suite</h3>
                <p className="cyclo-subtitle">
                  Developed by Transportation Engineering Division, Department of Civil Engineering, IIT Madras
                </p>
              </div>

              <p className="cyclo-desc">
                <strong>Cyclo Help</strong> is an interactive software tool engineered specifically for transportation planners, highway engineers, and traffic police authorities to design and optimize signal timings for urban intersections under heterogeneous traffic flow.
              </p>

              <h4 className="feat-heading">Key Features & Modules:</h4>
              <ul className="feat-list">
                {cycloFeatures.map((f, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="feat-icon" /> {f}
                  </li>
                ))}
              </ul>

              <div className="download-cta-box">
                <div className="dl-info">
                  <h4 className="dl-title">Download Cyclo Help v2.0 Package</h4>
                  <p className="dl-meta">
                    Includes Windows Executable Installer, Sample Intersection Datasets & User Manual (PDF).
                  </p>
                </div>
                <a href="#" className="coe-btn coe-btn-primary dl-main-btn">
                  <Download size={18} /> Download Cyclo Help Software (ZIP, 14.5 MB)
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="gallery-section">
            <h3 className="section-title">
              <Images size={22} /> Center Photo & Activity Gallery
            </h3>

            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="gallery-card coe-card"
                  onClick={() => setActiveImage(item)}
                >
                  <div className="gallery-img-wrapper">
                    <img src={item.src} alt={item.title} className="gallery-img" />
                    <div className="gallery-hover-overlay">
                      <Maximize2 size={24} />
                      <span>Click to Expand</span>
                    </div>
                  </div>
                  <div className="gallery-info">
                    <span className="coe-badge gallery-badge">{item.category}</span>
                    <h4 className="gallery-title">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setActiveImage(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img src={activeImage.src} alt={activeImage.title} className="lightbox-img" />
            <div className="lightbox-caption-box">
              <span className="coe-badge">{activeImage.category}</span>
              <h4 className="lightbox-title">{activeImage.title}</h4>
              <p className="lightbox-desc">{activeImage.caption}</p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .page-content {
          padding-top: 1rem;
        }
        .section-desc {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1.5rem;
        }
        .datasets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }
        .ds-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 0.5rem;
        }
        .ds-desc {
          font-size: 0.925rem;
          color: var(--coe-text);
          line-height: 1.5;
        }
        .ds-meta {
          font-size: 0.825rem;
          color: var(--coe-text-muted);
        }
        .ds-dl-btn {
          width: fit-content;
          font-size: 0.85rem;
        }

        /* Cyclo Help Styles */
        .cyclo-main-card {
          border-left: 4px solid var(--coe-maroon);
          background: linear-gradient(135deg, #FFFFFF 0%, var(--coe-surface-alt) 100%);
          padding: 2rem;
        }
        .cyclo-badge {
          font-size: 0.775rem;
          font-weight: 800;
          color: var(--coe-gold-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.25rem;
        }
        .cyclo-title {
          font-family: var(--font-heading);
          font-size: 1.75rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.2rem;
        }
        .cyclo-subtitle {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1.25rem;
        }
        .cyclo-desc {
          font-size: 1.025rem;
          color: var(--coe-text);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .feat-heading {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.85rem;
        }
        .feat-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .feat-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.95rem;
          color: var(--coe-text);
          background-color: var(--coe-surface);
          padding: 0.65rem 1rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--coe-border);
        }
        .feat-icon {
          color: var(--coe-maroon);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .download-cta-box {
          background-color: var(--coe-maroon-dark);
          color: #ffffff;
          border-radius: var(--radius-md);
          padding: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          border: 2px solid var(--coe-gold);
        }
        .dl-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: #ffffff;
          margin-bottom: 0.25rem;
        }
        .dl-meta {
          font-size: 0.875rem;
          color: var(--coe-gold-light);
        }
        .dl-main-btn {
          background-color: var(--coe-gold);
          color: var(--coe-maroon-dark);
          font-size: 1rem;
          padding: 0.85rem 1.5rem;
          white-space: nowrap;
        }
        .dl-main-btn:hover {
          background-color: #e0b62e;
          color: var(--coe-maroon-dark);
        }

        /* Gallery Grid */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }
        .gallery-card {
          cursor: pointer;
          padding: 0;
          overflow: hidden;
        }
        .gallery-img-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background-color: #000;
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform var(--transition-normal);
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.05);
          opacity: 0.85;
        }
        .gallery-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(122, 31, 31, 0.65);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #ffffff;
          opacity: 0;
          transition: opacity var(--transition-fast);
          font-weight: 600;
          font-size: 0.9rem;
        }
        .gallery-card:hover .gallery-hover-overlay {
          opacity: 1;
        }
        .gallery-info {
          padding: 1rem;
        }
        .gallery-badge {
          margin-bottom: 0.4rem;
        }
        .gallery-title {
          font-family: var(--font-heading);
          font-size: 1.05rem;
          color: var(--coe-maroon-dark);
          line-height: 1.35;
        }

        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .lightbox-modal {
          background: var(--coe-surface);
          border-radius: var(--radius-md);
          max-width: 800px;
          width: 100%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
        .lightbox-close-btn {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: rgba(0, 0, 0, 0.6);
          border: none;
          color: #ffffff;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .lightbox-img {
          width: 100%;
          max-height: 450px;
          object-fit: cover;
          display: block;
        }
        .lightbox-caption-box {
          padding: 1.25rem 1.5rem;
        }
        .lightbox-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          color: var(--coe-maroon-dark);
          margin: 0.35rem 0;
        }
        .lightbox-desc {
          font-size: 0.95rem;
          color: var(--coe-text);
        }

        @media (max-width: 768px) {
          .download-cta-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .dl-main-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

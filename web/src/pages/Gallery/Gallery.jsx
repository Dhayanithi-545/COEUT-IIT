import React, { useState } from 'react';
import { Hero } from '../../components/layout/Hero';
import { Images, Maximize2, X } from 'lucide-react';
import mainbanner from '../../assets/mainbanner.jpg';

export const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

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

  return (
    <div className="gallery-page">
      <Hero 
        title="Photo & Event Gallery" 
        subtitle="Visual highlights from research activities, laboratory setups, workshops, and field experiments" 
      />

      <main className="container page-content">
        <h3 className="section-title">
          <Images size={22} /> Center Activities Gallery
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
      </main>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="lightbox-backdrop" onClick={() => setActiveImage(null)}>
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-close-btn"
              onClick={() => setActiveImage(null)}
              aria-label="Close image modal"
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
          padding-top: 2rem;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-top: 1.25rem;
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
          background: rgba(122, 31, 31, 0.6);
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
          font-family: var(--font-serif);
          font-size: 1.05rem;
          color: var(--coe-maroon-dark);
          line-height: 1.35;
        }

        .lightbox-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .lightbox-modal {
          background: var(--coe-surface);
          border-radius: 6px;
          max-width: 800px;
          width: 100%;
          overflow: hidden;
          position: relative;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
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
          transition: background var(--transition-fast);
        }
        .lightbox-close-btn:hover {
          background: var(--coe-maroon);
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
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--coe-maroon-dark);
          margin: 0.35rem 0;
        }
        .lightbox-desc {
          font-size: 0.95rem;
          color: var(--coe-text);
        }
      `}</style>
    </div>
  );
};

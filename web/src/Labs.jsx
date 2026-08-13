import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CheckCircle2, Images } from 'lucide-react';
import { labs } from './data';

export const Labs = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '') || 'its-lab';
  const [activeLab, setActiveLab] = useState(hash);

  useEffect(() => {
    setActiveLab(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  const selectedLab = labs.find((l) => l.id === activeLab) || labs[0];

  return (
    <div className="labs-page">
      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Laboratories under the Centre</h1>
        </div>
      </div>

      <main className="container page-content" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <LabDetail lab={selectedLab} />
      </main>
    </div>
  );
};

const LabDetail = ({ lab }) => {
  const hasCapabilities = lab.capabilities && lab.capabilities.length > 0;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
      {/* Left: identity panel */}
      <div className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-4">
        <div className="lab-badge-tag w-fit">{lab.shortName}</div>
        <h2 className="lab-title">{lab.name}</h2>
        {lab.description && <p className="lab-desc">{lab.description}</p>}

        <a href="#" className="coe-btn coe-btn-outline w-fit">
          <Images size={16} /> Click here to see pictures of this lab
        </a>
      </div>

      {/* Right: capabilities */}
      <div className="flex flex-col gap-6">
        {hasCapabilities ? (
          <>
            <h3 className="cap-heading">Laboratory Capabilities &amp; Facilities</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
              {lab.capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="cap-icon shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="empty-message">Details for this laboratory will be published shortly.</p>
        )}
      </div>
    </div>
  );
};

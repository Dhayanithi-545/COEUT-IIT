import React, { useEffect } from 'react';
import { Database, Download } from 'lucide-react';

export const Downloads = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="downloads-page">
      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Download Data</h1>
        </div>
      </div>

      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <div className="coe-card download-cta-box">
          <div className="cap-icon-box">
            <Database size={24} />
          </div>
          <h2 className="dl-title">Download data here</h2>
          <p className="cta-desc">
            Data collected and archived by the Centre is made available for research use.
          </p>
          <a href="#" className="coe-btn coe-btn-primary w-fit">
            <Download size={16} /> Download data
          </a>
        </div>
      </main>
    </div>
  );
};

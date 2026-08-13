import React, { useEffect } from 'react';
import { Code2, Download, FileText } from 'lucide-react';

export const SignalSoftware = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="software-page">
      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Signal Design Software</h1>
        </div>
      </div>

      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <div className="coe-card cyclo-main-card">
          <div className="cyclo-header">
            <span className="cyclo-badge">
              <Code2 size={14} /> Signal Design Software
            </span>
          </div>
          <h2 className="cyclo-title">Cyclo</h2>
          <p className="cyclo-desc">
            Download the signal design software developed at the Centre, along with its help documentation.
          </p>

          <div className="flex flex-col sm:flex-row gap-3" style={{ marginTop: '1.5rem' }}>
            <a href="#" className="coe-btn coe-btn-primary">
              <Download size={16} /> Download Cyclo
            </a>
            <a href="#" className="coe-btn coe-btn-outline">
              <FileText size={16} /> Cyclo Help
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

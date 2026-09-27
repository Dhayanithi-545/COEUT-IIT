import React, { useEffect } from 'react';
import { HeroSection } from './HeroSection';
import { Database, CheckCircle2, Building2 } from 'lucide-react';
import { centreResources, sponsors } from './data';

export const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="about-page">
      <HeroSection />

      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <div className="overview-root">
          <div className="overview-main-section">
            <div className="overview-text-block">
              <span className="official-tag">ABOUT THE CENTRE</span>
              <p className="overview-p">
                A <strong>Centre of Excellence in Urban Transport</strong> has been established at{' '}
                <strong>IIT Madras from 2009</strong>. The Centre undertakes cutting-edge research and
                development activities for solving Urban Transport&apos;s most pressing problems and
                challenges.
              </p>
              <p className="overview-p">
                The Centre is located in the <strong>Department of Civil Engineering at IIT Madras</strong>,
                and is coordinated by a group of faculty from the Transportation Engineering Division.
              </p>
              <p className="overview-p">
                The Centre works closely with government agencies, industry, and research institutions to
                develop solutions for urban transport problems.
              </p>
            </div>
          </div>

          {/* Resources developed */}
          <div className="capabilities-section">
            <h3 className="section-title">
              <Database size={20} /> Resources Developed
            </h3>
            <ul className="cap-list">
              {centreResources.map((res, i) => (
                <li key={i}>
                  <CheckCircle2 size={18} className="cap-icon" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video of recent activities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-4 order-2 lg:order-1">
              <h3 className="official-tag">Recent Activities of the Centre</h3>
              <p>A brief video showing recent activities of the Centre can be seen alongside.</p>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/sYCTcf47Nc8"
                  title="Recent activities of the Centre of Excellence in Urban Transport"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Sponsoring agencies */}
          <div className="capabilities-section">
            <h3 className="section-title">
              <Building2 size={20} /> Sponsoring Agencies
            </h3>
            <div className="cap-cards-grid">
              {sponsors.map((sp) => (
                <div key={sp.id} className="coe-card cap-card">
                  <div className="cap-icon-box">{sp.abbr}</div>
                  <h4 className="cap-card-title">{sp.name}</h4>
                  <p className="cap-card-desc">{sp.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

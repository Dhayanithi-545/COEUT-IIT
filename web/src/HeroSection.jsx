import React from 'react';
import heroSecond from './assets/hero-image.jpg';
import { Building2 } from 'lucide-react';
import { sponsors } from './data';

export const HeroSection = () => {
  return (
    <section className="hero-second-root">
      <div className="hero-bg-frame">
        <img src={heroSecond} alt="Center of Excellence in Urban Transport IIT Madras" className="hero-bg-img" />
        <div className="hero-maroon-overlay" />
      </div>

      <div className="container hero-container-inner">
        <div className="hero-main-content">
          <h1 className="hero-title-large">
            Center of Excellence in <span className="gold-text">Urban Transport</span>
          </h1>
          <span className="hero-gold-tag">DEPARTMENT OF CIVIL ENGINEERING • IIT MADRAS</span>
          

          <div className="hero-stats-grid">
            {sponsors.map((sp) => (
              <div key={sp.id} className="hero-stat-card">
                <div className="stat-icon-badge"><Building2 size={20} /></div>
                <div className="stat-text-group">
                  <span className="stat-val">{sp.abbr}</span>
                  <span className="stat-lbl">{sp.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

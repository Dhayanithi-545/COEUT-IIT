import React from 'react';
import heroSecond from './assets/hero-image.jpg';
import { Award, IndianRupee, BookOpen, Users } from 'lucide-react';

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
          <p className="hero-desc">
            A national research and development center sponsored by the Ministry of Urban Development, Ministry of Electronics & IT, and Ministry of Education, Government of India.
          </p>

          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-icon-badge"><Award size={20} /></div>
              <div className="stat-text-group">
                <span className="stat-val">15+</span>
                <span className="stat-lbl">Years R&D Leadership</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-badge"><IndianRupee size={20} /></div>
              <div className="stat-text-group">
                <span className="stat-val">₹17+ Cr</span>
                <span className="stat-lbl">Research Grants</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-badge"><BookOpen size={20} /></div>
              <div className="stat-text-group">
                <span className="stat-val">250+</span>
                <span className="stat-lbl">Publications</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-badge"><Users size={20} /></div>
              <div className="stat-text-group">
                <span className="stat-val">100+</span>
                <span className="stat-lbl">Scholars Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

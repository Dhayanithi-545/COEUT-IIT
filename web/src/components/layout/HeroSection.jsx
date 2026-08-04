import React from 'react';
import heroSecond from '../../assets/hero-image.jpg';
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
          <span className="hero-gold-tag">DEPARTMENT OF CIVIL ENGINEERING &bull; IIT MADRAS</span>
          <h1 className="hero-title">
            Center of Excellence in <span className="gold-text">Urban Transport</span>
          </h1>
          <p className="hero-desc">
            A national research and development center sponsored by the Ministry of Urban Development, Ministry of Electronics & IT, and Ministry of Education, Government of India.
          </p>

          {/* 4 Stat Badge Cards */}
          <div className="hero-stats-grid">
            <div className="hero-stat-card">
              <div className="stat-icon-badge">
                <Award size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-val">15+</span>
                <span className="stat-lbl">Years R&D Leadership</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-badge">
                <IndianRupee size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-val">₹17+ Cr</span>
                <span className="stat-lbl">Research Grants</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-badge">
                <BookOpen size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-val">250+</span>
                <span className="stat-lbl">Publications</span>
              </div>
            </div>

            <div className="hero-stat-card">
              <div className="stat-icon-badge">
                <Users size={20} />
              </div>
              <div className="stat-text-group">
                <span className="stat-val">100+</span>
                <span className="stat-lbl">Scholars Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-second-root {
          position: relative;
          width: 100%;
          min-height: 420px;
          background-color: var(--coe-maroon-dark);
          overflow: hidden;
          padding-top: 3rem;
          padding-bottom: 3.5rem;
        }
        .hero-bg-frame {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }
        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-maroon-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(66, 16, 16, 0.94) 0%, rgba(92, 23, 23, 0.88) 55%, rgba(122, 31, 31, 0.6) 100%);
        }
        .hero-container-inner {
          position: relative;
          z-index: 2;
        }
        .hero-main-content {
          max-width: 820px;
          color: #ffffff;
        }
        .hero-gold-tag {
          font-family: var(--font-heading);
          font-size: 0.825rem;
          font-weight: 800;
          color: var(--coe-gold-bright);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          display: block;
        }
        .hero-title {
          font-family: var(--font-heading);
          font-size: 2.85rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 0.85rem;
          letter-spacing: -0.02em;
        }
        .gold-text {
          color: var(--coe-gold-bright);
        }
        .hero-desc {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.6;
          margin-bottom: 2.25rem;
          max-width: 680px;
        }

        .hero-stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
          gap: 1.25rem;
          max-width: 780px;
        }
        .hero-stat-card {
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .stat-icon-badge {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background-color: var(--coe-maroon);
          color: var(--coe-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          border: 1px solid var(--coe-gold);
        }
        .stat-text-group {
          display: flex;
          flex-direction: column;
        }
        .stat-val {
          font-family: var(--font-heading);
          font-size: 1.45rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
        }
        .stat-lbl {
          font-size: 0.775rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-second-root {
            padding-top: 2rem;
            padding-bottom: 2.25rem;
          }
          .hero-title {
            font-size: 2rem;
          }
          .hero-desc {
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
          }
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.65rem;
          }
          .hero-gold-tag {
            font-size: 0.725rem;
          }
          .hero-stat-card {
            gap: 0.6rem;
          }
          .stat-icon-badge {
            width: 38px;
            height: 38px;
          }
          .stat-val {
            font-size: 1.2rem;
          }
          .stat-lbl {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Info, 
  FlaskConical, 
  Cpu, 
  Images, 
  Users, 
  Navigation, 
  Gamepad2, 
  CarFront, 
  Database, 
  Download, 
  Menu, 
  X 
} from 'lucide-react';

const navItems = [
  { path: '/about', label: 'About COE', icon: Info },
  { path: '/research', label: 'Research', icon: FlaskConical },
  { path: '/labs', label: 'Laboratories', icon: Cpu },
  { path: '/gallery', label: 'Gallery', icon: Images },
  { path: '/people', label: 'People', icon: Users },
  { path: '/atis', label: 'ATIS', icon: Navigation },
  { path: '/driving-simulator-lab', label: 'Simulator Lab', icon: Gamepad2 },
  { path: '/connected-intelligent-vehicle-lab', label: 'CIV Lab', icon: CarFront },
  { path: '/downloads', label: 'Download Data', icon: Database },
  { path: '/cyclo-help', label: 'Cyclo Help', icon: Download },
];

export const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar-root" aria-label="Main Navigation">
      <div className="container navbar-container">
        {/* Mobile menu header bar */}
        <div className="mobile-bar">
          <span className="mobile-title">Menu</span>
          <button 
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Horizontal Desktop List / Mobile Collapsible Drawer */}
        <ul className={`nav-list ${mobileMenuOpen ? 'mobile-open' : ''}`} role="tablist">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path} className="nav-item" role="presentation">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                  role="tab"
                >
                  <Icon size={15} className="nav-icon" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .navbar-root {
          background-color: var(--coe-maroon);
          border-bottom: 2px solid var(--coe-gold);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }
        .navbar-container {
          padding: 0;
        }
        .mobile-bar {
          display: none;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1.25rem;
          color: #ffffff;
        }
        .mobile-title {
          font-family: var(--font-serif);
          font-weight: 700;
          font-size: 1.1rem;
        }
        .mobile-toggle-btn {
          background: transparent;
          border: none;
          color: #ffffff;
          cursor: pointer;
        }
        .nav-list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .nav-list::-webkit-scrollbar {
          display: none;
        }
        .nav-item {
          flex-shrink: 0;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.85rem 0.9rem;
          color: #E8D9A0;
          font-size: 0.875rem;
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-fast);
          border-bottom: 3px solid transparent;
          white-space: nowrap;
        }
        .nav-link:hover {
          color: #ffffff;
          background-color: var(--coe-maroon-light);
        }
        .nav-link.active {
          color: #ffffff;
          background-color: var(--coe-maroon-dark);
          border-bottom-color: var(--coe-gold);
        }
        .nav-icon {
          color: var(--coe-gold);
        }
        .nav-link.active .nav-icon {
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .mobile-bar {
            display: flex;
          }
          .nav-list {
            display: none;
            flex-direction: column;
            width: 100%;
            background-color: var(--coe-maroon-dark);
          }
          .nav-list.mobile-open {
            display: flex;
          }
          .nav-link {
            padding: 0.85rem 1.25rem;
            border-bottom: 1px solid rgba(232, 217, 160, 0.15);
          }
        }
      `}</style>
    </nav>
  );
};

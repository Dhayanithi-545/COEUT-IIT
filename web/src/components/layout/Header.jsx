import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import iitmLogo from '../../assets/IIT_Madras_Logo.svg.webp';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-top-accent" />
      <div className="header-container">
        {/* Brand */}
        <Link
          to="/about"
          className="header-brand"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={iitmLogo}
            alt="IIT Madras Logo"
            className="header-brand-logo"
          />
          <div className="header-brand-text">
            <span className="header-brand-title">
              Center of Excellence in Urban Transport
            </span>
            <span className="header-brand-subtitle">
              Department of Civil Engineering &bull; IIT Madras
            </span>
          </div>
        </Link>

        {/* Desktop Mega Menu */}
        <div className="relative hidden flex-1 justify-center lg:flex">
          <MegaMenu onNavigate={() => setMobileOpen(false)} mode="desktop" />
        </div>

        {/* Sponsors + Mobile toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <div className="header-sponsors hidden xl:flex">
            <div className="h-[30px] w-6">
              <svg viewBox="0 0 40 50" className="h-full w-full" aria-label="Ashoka Emblem">
                <rect x="10" y="44" width="20" height="4" fill="#D4A017" />
                <circle cx="20" cy="34" r="5" fill="none" stroke="#7A1F1F" strokeWidth="1.5" />
                <path d="M14 30 C10 20, 12 10, 20 5 C28 10, 30 20, 26 30 Z" fill="#7A1F1F" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[0.625rem] font-extrabold uppercase tracking-wider text-[#B8860B]">
                Sponsored by
              </span>
              <span className="text-[0.725rem] font-bold leading-tight text-[#5C1717]">
                MoUD &bull; MeitY &bull; MoE
              </span>
              <span className="text-[0.65rem] text-[#5A5A5A]">Government of India</span>
            </div>
          </div>

          <button
            type="button"
            className="border-0 bg-transparent p-1 text-[#7A1F1F] lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="mobile-drawer lg:hidden">
          <MegaMenu onNavigate={() => setMobileOpen(false)} mode="mobile" />
        </div>
      )}
    </header>
  );
};

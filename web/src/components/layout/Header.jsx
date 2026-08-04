import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { MegaMenu } from './MegaMenu';
import iitmLogo from '../../assets/IIT_Madras_Logo.svg.webp';

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const mobileDrawer = mobileOpen
    ? createPortal(
      <div className="mobile-drawer-wrapper lg:hidden">
        <div className="mobile-drawer-backdrop" onClick={() => setMobileOpen(false)} aria-hidden="true" />
        <div className="mobile-drawer" id="mobile-navigation-drawer">
          <div className="mobile-drawer-header">
            <div className="mobile-drawer-brand">
              <img
                src={iitmLogo}
                alt="IIT Madras Logo"
                className="mobile-drawer-logo"
              />
              <div className="mobile-drawer-brand-text">
                <span className="mobile-drawer-brand-title">COEUT</span>
                <span className="mobile-drawer-brand-subtitle">IIT Madras</span>
              </div>
            </div>
            <button
              type="button"
              className="mobile-drawer-close"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <MegaMenu onNavigate={() => setMobileOpen(false)} mode="mobile" />
        </div>
      </div>,
      document.body
    )
    : null;

  return (
    <header className="site-header">
      <div className="header-top-accent" />
      <div className="header-container header-desktop-shell hidden lg:flex">
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

        <div className="header-sponsors hidden lg:flex xl:flex">
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
      </div>

      <div className="header-mobile-shell flex items-center justify-between gap-3 lg:hidden">
        <Link
          to="/about"
          className="header-mobile-brand"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={iitmLogo}
            alt="IIT Madras Logo"
            className="header-brand-logo header-mobile-logo"
          />
          <div className="header-brand-text header-mobile-text">
            <span className="header-brand-title header-mobile-title">
              Center of Excellence in Urban Transport
            </span>
            <span className="header-brand-subtitle header-mobile-subtitle">
              IIT Madras
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="mobile-toggle-btn header-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-drawer"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileDrawer}
    </header>
  );
};

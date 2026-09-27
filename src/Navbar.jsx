import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { navigationItems } from './data';
import iitmLogo from './assets/IIT_Madras_Logo.svg.webp';

/**
 * Header + Navbar — single unified component, single file.
 *
 * Design intent:
 * - Light theme, warm off-white background, institutional maroon as the
 *   accent / secondary colour, paired with the existing gold sponsor emblem.
 * - Submenus are compact hover dropdowns anchored under their own trigger —
 *   not full-width mega panels. Each opens only as wide as its content needs.
 * - Header and nav live in one <header>, with generous, even spacing between
 *   the brand row and the menu row.
 * - All CSS lives in the <style> block at the bottom of this file, so the
 *   whole thing drops in as one .jsx file — no separate stylesheet needed.
 */
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  const openDropdown = (itemId) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenMenu(itemId);
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const toggleMobileCategory = (catId) => {
    setMobileExpanded((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const isActiveCategory = (item) => location.pathname === item.path;

  const handleNavClick = (path, hash) => {
    setOpenMenu(null);
    setMobileOpen(false);
    navigate(hash ? `${path}#${hash}` : path);
  };

  return (
    <header className="site-header" onMouseLeave={scheduleClose}>
      <div className="site-header__accent" />

      {/* Brand row */}
      <div className="site-header__brand-row">
        <div className="container site-header__brand-inner">
          <Link to="/about" className="brand flex items-center gap-4 sm:gap-6 text-decoration-none text-left items-start mr-auto">
            <img src={iitmLogo} alt="IIT Madras Logo" className="brand__logo w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain shrink-0 transition-transform duration-200 hover:scale-105" />
            <div className="brand__text flex flex-col justify-center items-start text-left">
              <span className="brand__title font-['Outfit'] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-[#7A1F1F] tracking-tight leading-tight text-left">Center of Excellence in Urban Transport</span>
              <span className="brand__subtitle font-['Jost'] font-bold text-xs sm:text-sm md:text-base lg:text-[15px] text-[#5C1717] uppercase tracking-wider mt-1 text-left">Department of Civil Engineering &middot; IIT Madras</span>
            </div>
          </Link>

          <div className="sponsor-badge">
            <span className="sponsor-badge__emblem" aria-hidden="true">
              <svg viewBox="0 0 40 50">
                <rect x="10" y="44" width="20" height="4" />
                <circle cx="20" cy="34" r="5" />
                <path d="M14 30 C10 20, 12 10, 20 5 C28 10, 30 20, 26 30 Z" />
              </svg>
            </span>
            <div className="sponsor-badge__text text-left">
              <span className="sponsor-badge__label text-left">Sponsored by</span>
              <span className="sponsor-badge__names text-left">MoUD &middot; MeitY &middot; MoE</span>
              <span className="sponsor-badge__govt text-left">Government of India</span>
            </div>
          </div>

          <button
            type="button"
            className="mobile-toggle lg-hide"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu row */}
      <nav className="site-nav" aria-label="Main navigation">
        <div className="container flex justify-center">
          <ul className="site-nav__list flex justify-center items-center">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const hasSections = item.sections && item.sections.length > 0;
              const isOpen = hasSections && openMenu === item.id;
              const isCurrent = isActiveCategory(item);

              return (
                <li
                  key={item.id}
                  className="site-nav__item"
                  onMouseEnter={() => openDropdown(item.id)}
                >
                  <button
                    type="button"
                    className={`site-nav__trigger ${isCurrent ? 'is-current' : ''} ${isOpen ? 'is-open' : ''}`}
                    onClick={() => handleNavClick(item.path)}
                    aria-expanded={isOpen}
                  >
                    <Icon size={15} className="site-nav__icon" />
                    <span>{item.label}</span>
                    {hasSections && <ChevronDown size={13} className="site-nav__chevron" />}
                  </button>

                  {/* Compact dropdown, anchored to this item only — icon + label, no prose */}
                  {isOpen && (
                    <div
                      className="dropdown"
                      onMouseEnter={() => openDropdown(item.id)}
                      role="menu"
                    >
                      {item.sections.map((section) => (
                        <ul key={section.id} className="dropdown__list">
                          {section.children.map((child) => {
                            const ChildIcon = child.icon;
                            return (
                              <li key={child.id}>
                                <button
                                  type="button"
                                  className="dropdown__link"
                                  onClick={() => handleNavClick(child.path, child.hash)}
                                  role="menuitem"
                                >
                                  {ChildIcon && <ChildIcon size={15} className="dropdown__link-icon" />}
                                  <span className="dropdown__link-text">{child.label}</span>
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile backdrop & right sliding drawer */}
      {mobileOpen && (
        <>
          <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />
          <div className="mobile-drawer">
            <div className="mobile-drawer__header">
              <div className="flex items-center gap-2">
                <img src={iitmLogo} alt="IIT Madras" className="w-8 h-8 object-contain" />
                <span className="mobile-drawer__header-title font-['Outfit'] font-bold text-base text-[#7A1F1F]">Menu Navigation</span>
              </div>
              <button
                type="button"
                className="mobile-drawer__close"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer__scroll">
              <ul className="mobile-drawer__list">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isExpanded = mobileExpanded[item.id];
                  const hasSections = item.sections && item.sections.length > 0;

                  return (
                    <li key={item.id} className="mobile-drawer__item">
                      <div
                        className="mobile-drawer__row cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (hasSections) {
                            toggleMobileCategory(item.id);
                          } else {
                            handleNavClick(item.path);
                          }
                        }}
                      >
                        <button
                          type="button"
                          className="mobile-drawer__link"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (hasSections) {
                              toggleMobileCategory(item.id);
                            } else {
                              handleNavClick(item.path);
                            }
                          }}
                        >
                          <Icon size={17} />
                          <span>{item.label}</span>
                        </button>
                        {hasSections && (
                          <button
                            type="button"
                            className="mobile-drawer__expand"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleMobileCategory(item.id);
                            }}
                            aria-label="Expand submenu"
                          >
                            <ChevronDown size={17} className={isExpanded ? 'is-open' : ''} />
                          </button>
                        )}
                      </div>

                      {isExpanded && (
                        <div className="mobile-drawer__body">
                          {item.sections.map((section) => (
                            <div key={section.id} className="mobile-drawer__section">
                              <span className="mobile-drawer__section-title">{section.label}</span>
                              <ul>
                                {section.children.map((child) => {
                                  const ChildIcon = child.icon || ChevronRight;
                                  return (
                                    <li key={child.id}>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleNavClick(child.path, child.hash);
                                        }}
                                      >
                                        <ChildIcon size={14} />
                                        <span>{child.label}</span>
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}

      <style>{`
        /* ============ Tokens ============ */
        .site-header {
          --bg: #ffffff;
          --bg-subtle: #faf8f5;
          --ink: #211c1a;
          --ink-soft: #5A5A5A;
          --ink-faint: #948a84;
          --maroon: #7A1F1F;
          --maroon-dark: #5C1717;
          --maroon-tint: rgba(122, 31, 31, 0.08);
          --gold: #D4A017;
          --border: #e8e2da;
          --shadow: 0 12px 32px -12px rgba(33, 28, 26, 0.16);
          --radius: 10px;
          --serif: 'Outfit', sans-serif;
          --sans: 'Jost', 'Ubuntu', sans-serif;

          position: relative;
          font-family: var(--sans);
          background: var(--bg);
          color: var(--ink);
          border-bottom: 1px solid var(--border);
        }

        .site-header .container {
          width: 95%;
          max-width: 1480px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* ============ Top accent ============ */
        .site-header__accent {
          height: 4px;
          background: linear-gradient(90deg, var(--maroon) 0%, var(--maroon) 60%, var(--gold) 100%);
        }

        /* ============ Brand row ============ */
        .site-header__brand-row {
          background: var(--bg);
          padding-top: 14px;
          padding-bottom: 14px;
        }

        .site-header__brand-inner {
          display: flex;
          align-items: center;
          gap: 28px;
          padding: 30px 0;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          color: inherit;
          margin-right: auto;
          text-align: left;
        }

        .brand__logo {
          width: 88px;
          height: 88px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .brand__text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          text-align: left;
          align-items: flex-start;
        }

        .brand__title {
          font-family: var(--serif);
          font-size: 26px;
          font-weight: 800;
          line-height: 1.2;
          color: var(--maroon);
          letter-spacing: -0.015em;
          text-align: left;
        }

        .brand__subtitle {
          font-family: var(--sans);
          font-size: 15px;
          font-weight: 700;
          color: var(--maroon-dark);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-align: left;
        }

        .sponsor-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--bg-subtle);
          flex-shrink: 0;
          text-align: left;
        }

        .sponsor-badge__emblem svg {
          width: 22px;
          height: 28px;
        }
        .sponsor-badge__emblem rect,
        .sponsor-badge__emblem path {
          fill: var(--gold);
        }
        .sponsor-badge__emblem circle {
          fill: none;
          stroke: var(--gold);
          stroke-width: 1.5;
        }

        .sponsor-badge__text {
          display: flex;
          flex-direction: column;
          line-height: 1.3;
          text-align: left;
        }

        .sponsor-badge__label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--ink-faint);
          text-align: left;
        }

        .sponsor-badge__names {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--maroon);
          text-align: left;
        }

        .sponsor-badge__govt {
          font-size: 10.5px;
          color: var(--ink-soft);
          text-align: left;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 8px;
          color: var(--ink);
          cursor: pointer;
        }

        /* ============ Menu row ============ */
        .site-nav {
          display: flex;
          justify-content: center;
          width: 100%;
          background: var(--bg-subtle);
          border-top: 1px solid var(--border);
        }

        .site-nav__list {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          margin: 0 auto;
          padding: 0;
          gap: 4px;
        }

        .site-nav__item {
          position: relative;
        }

        .site-nav__trigger {
          display: flex;
          align-items: center;
          gap: 7px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 14px 16px;
          font-family: var(--serif);
          font-size: 15px;
          font-weight: 600;
          color: var(--ink);
          border-bottom: 2px solid transparent;
          transition: color 0.15s ease, border-color 0.15s ease, background 0.15s ease;
        }

        .site-nav__trigger:hover,
        .site-nav__trigger.is-open {
          color: var(--maroon);
          background: var(--maroon-tint);
        }

        .site-nav__trigger.is-current {
          color: var(--maroon);
          border-bottom-color: var(--maroon);
        }

        .site-nav__icon {
          color: var(--ink-faint);
          flex-shrink: 0;
        }
        .site-nav__trigger:hover .site-nav__icon,
        .site-nav__trigger.is-open .site-nav__icon {
          color: var(--maroon);
        }

        .site-nav__chevron {
          transition: transform 0.15s ease;
          color: var(--ink-faint);
        }
        .site-nav__trigger.is-open .site-nav__chevron {
          transform: rotate(180deg);
          color: var(--maroon);
        }

        /* ============ Compact dropdown ============ */
        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          min-width: 240px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 6px;
          z-index: 40;
          animation: dropdown-in 0.14s ease;
        }

        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dropdown__list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .dropdown__list + .dropdown__list {
          margin-top: 5px;
          padding-top: 5px;
          border-top: 1px solid var(--border);
        }

        .dropdown__link {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          padding: 9px 11px;
          border-radius: 6px;
          white-space: nowrap;
          transition: background 0.12s ease, color 0.12s ease;
        }

        .dropdown__link:hover {
          background: var(--maroon-tint);
        }

        .dropdown__link-icon {
          color: var(--ink-faint);
          flex-shrink: 0;
        }
        .dropdown__link:hover .dropdown__link-icon {
          color: var(--maroon);
        }

        .dropdown__link-text {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--ink);
        }
        .dropdown__link:hover .dropdown__link-text {
          color: var(--maroon);
        }

        /* ============ Mobile right sliding drawer ============ */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(3px);
          z-index: 998;
          animation: mobile-fade-in 0.2s ease;
        }

        @keyframes mobile-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 320px;
          max-width: 85vw;
          height: 100vh;
          background: var(--bg);
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.18);
          z-index: 999;
          display: flex;
          flex-direction: column;
          border-left: 1px solid var(--border);
          animation: slide-in-right 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slide-in-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        .mobile-drawer__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
          background: var(--bg-subtle);
        }

        .mobile-drawer__close {
          background: none;
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 6px;
          color: var(--ink-soft);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease, color 0.15s ease;
        }
        .mobile-drawer__close:hover {
          background: var(--maroon-tint);
          color: var(--maroon);
        }

        .mobile-drawer__scroll {
          flex: 1;
          overflow-y: auto;
          padding: 12px 16px 24px;
        }

        .mobile-drawer__list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-drawer__row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-drawer__link {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
          background: none;
          border: none;
          padding: 12px 4px;
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          cursor: pointer;
        }

        .mobile-drawer__expand {
          background: none;
          border: none;
          padding: 10px;
          color: var(--ink-soft);
          cursor: pointer;
        }
        .mobile-drawer__expand svg {
          transition: transform 0.15s ease;
        }
        .mobile-drawer__expand svg.is-open {
          transform: rotate(180deg);
        }

        .mobile-drawer__body {
          padding: 0 4px 12px 30px;
        }

        .mobile-drawer__section {
          margin-bottom: 10px;
        }

        .mobile-drawer__section-title {
          display: block;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--maroon);
          margin-bottom: 4px;
        }

        .mobile-drawer__section ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .mobile-drawer__section button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          padding: 8px 6px;
          font-size: 13px;
          color: var(--ink-soft);
          cursor: pointer;
          border-radius: 6px;
        }
        .mobile-drawer__section button:hover {
          background: var(--maroon-tint);
          color: var(--maroon);
        }

        /* ============ Responsive ============ */
        @media (max-width: 1280px) {
          .site-nav__trigger { padding: 14px 11px; font-size: 14px; }
        }

        @media (max-width: 1024px) {
          .site-nav { display: none; }
          .mobile-toggle { display: inline-flex; }
          .sponsor-badge { display: none; }
        }

        @media (max-width: 640px) {
          .site-header__brand-inner { padding: 18px 20px; gap: 14px; }
          .brand__title { font-size: 17px; }
          .brand__subtitle { font-size: 11px; }
        }
      `}</style>
    </header>
  );
};
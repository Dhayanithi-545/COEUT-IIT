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
          <Link to="/about" className="brand flex items-center gap-4 sm:gap-6 text-decoration-none mr-auto">
            <img src={iitmLogo} alt="IIT Madras Logo" className="brand__logo w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain shrink-0 transition-transform duration-200 hover:scale-105" />
            <div className="brand__text flex flex-col justify-center">
              <span className="brand__title font-['Outfit'] font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-[#7A1F1F] tracking-tight leading-tight">Center of Excellence in Urban Transport</span>
              <span className="brand__subtitle font-['Jost'] font-bold text-xs sm:text-sm md:text-base lg:text-[15px] text-[#5C1717] uppercase tracking-wider mt-1">Department of Civil Engineering &middot; IIT Madras</span>
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
            <div className="sponsor-badge__text">
              <span className="sponsor-badge__label">Sponsored by</span>
              <span className="sponsor-badge__names">MoUD &middot; MeitY &middot; MoE</span>
              <span className="sponsor-badge__govt">Government of India</span>
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
        <div className="container">
          <ul className="site-nav__list">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isOpen = openMenu === item.id;
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
                    <ChevronDown size={13} className="site-nav__chevron" />
                  </button>

                  {/* Compact dropdown, anchored to this item only — not a full-width mega panel */}
                  {isOpen && (
                    <div
                      className="dropdown"
                      onMouseEnter={() => openDropdown(item.id)}
                      role="menu"
                    >
                      {item.description && (
                        <p className="dropdown__intro">{item.description}</p>
                      )}

                      {item.sections.map((section) => {
                        const SecIcon = section.icon || ChevronRight;
                        return (
                          <div key={section.id} className="dropdown__section">
                            <h4 className="dropdown__section-title">
                              <SecIcon size={13} />
                              <span>{section.label}</span>
                            </h4>
                            <ul className="dropdown__list">
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
                                      {ChildIcon && <ChildIcon size={14} className="dropdown__link-icon" />}
                                      <span className="dropdown__link-text">
                                        {child.label}
                                        {child.desc && (
                                          <em className="dropdown__link-desc">{child.desc}</em>
                                        )}
                                      </span>
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        );
                      })}

                      <button
                        type="button"
                        className="dropdown__cta"
                        onClick={() => handleNavClick(item.path)}
                      >
                        View all {item.label}
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="mobile-drawer">
          <ul className="mobile-drawer__list">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = mobileExpanded[item.id];
              return (
                <li key={item.id} className="mobile-drawer__item">
                  <div className="mobile-drawer__row">
                    <button
                      type="button"
                      className="mobile-drawer__link"
                      onClick={() => handleNavClick(item.path)}
                    >
                      <Icon size={17} />
                      <span>{item.label}</span>
                    </button>
                    <button
                      type="button"
                      className="mobile-drawer__expand"
                      onClick={() => toggleMobileCategory(item.id)}
                      aria-label="Expand submenu"
                    >
                      <ChevronDown size={17} className={isExpanded ? 'is-open' : ''} />
                    </button>
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
                                    onClick={() => handleNavClick(child.path, child.hash)}
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
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ============ Top accent ============ */
        .site-header__accent {
          height: 4px;
          background: linear-gradient(90deg, var(--maroon) 0%, var(--maroon) 60%, var(--gold) 100%);
        }

        /* ============ Brand row ============ */
        .site-header__brand-row {
          background: var(--bg);
        }

        .site-header__brand-inner {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 26px 28px 22px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          color: inherit;
          margin-right: auto;
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
        }

        .brand__title {
          font-family: var(--serif);
          font-size: 26px;
          font-weight: 800;
          line-height: 1.2;
          color: var(--maroon);
          letter-spacing: -0.015em;
        }

        .brand__subtitle {
          font-family: var(--sans);
          font-size: 15px;
          font-weight: 700;
          color: var(--maroon-dark);
          letter-spacing: 0.04em;
          text-transform: uppercase;
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
        }

        .sponsor-badge__label {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--ink-faint);
        }

        .sponsor-badge__names {
          font-size: 12.5px;
          font-weight: 600;
          color: var(--maroon);
        }

        .sponsor-badge__govt {
          font-size: 10.5px;
          color: var(--ink-soft);
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
          background: var(--bg-subtle);
          border-top: 1px solid var(--border);
        }

        .site-nav__list {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 2px;
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
          min-width: 260px;
          max-width: 320px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          padding: 14px;
          z-index: 40;
          animation: dropdown-in 0.14s ease;
        }

        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .dropdown__intro {
          font-size: 12px;
          color: var(--ink-soft);
          line-height: 1.5;
          margin: 0 0 12px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border);
        }

        .dropdown__section + .dropdown__section {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border);
        }

        .dropdown__section-title {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0 0 6px;
          font-size: 10.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--maroon);
        }

        .dropdown__list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .dropdown__link {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          padding: 7px 8px;
          border-radius: 6px;
          border-left: 2px solid transparent;
          transition: background 0.12s ease, border-color 0.12s ease;
        }

        .dropdown__link:hover {
          background: var(--maroon-tint);
          border-left-color: var(--maroon);
        }

        .dropdown__link-icon {
          margin-top: 1px;
          color: var(--ink-faint);
          flex-shrink: 0;
        }
        .dropdown__link:hover .dropdown__link-icon {
          color: var(--maroon);
        }

        .dropdown__link-text {
          display: flex;
          flex-direction: column;
          gap: 1px;
          font-size: 13px;
          font-weight: 500;
          color: var(--ink);
        }

        .dropdown__link-desc {
          font-style: normal;
          font-size: 11px;
          font-weight: 400;
          color: var(--ink-faint);
        }

        .dropdown__cta {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 12px;
          padding: 8px;
          background: var(--maroon);
          color: #fff;
          border: none;
          border-radius: 7px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s ease;
        }
        .dropdown__cta:hover {
          background: var(--maroon-dark);
        }

        /* ============ Mobile drawer ============ */
        .mobile-drawer {
          background: var(--bg);
          border-top: 1px solid var(--border);
        }

        .mobile-drawer__list {
          list-style: none;
          margin: 0;
          padding: 8px 12px 16px;
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
import React from 'react';

export const TabNav = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="subtab-header-strip">
      <div className="container">
        <ul className="subtab-pill-list" role="tablist">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id} role="presentation">
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`subtab-pill-btn ${isActive ? 'active' : ''}`}
                  onClick={() => onTabChange(tab.id)}
                >
                  {Icon && <Icon size={15} className={`subtab-icon ${isActive ? 'active-icon' : ''}`} />}
                  <span>{tab.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .subtab-header-strip {
          background-color: var(--coe-surface-alt);
          border-bottom: 1px solid var(--coe-border);
          padding: 0.5rem 0;
          margin-bottom: 2rem;
          width: 100%;
        }
        .subtab-pill-list {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          list-style: none;
          padding: 0;
          margin: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .subtab-pill-list::-webkit-scrollbar {
          display: none;
        }
        .subtab-pill-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.5rem 1rem;
          background: #ffffff;
          border: 1px solid var(--coe-border);
          border-radius: var(--radius-pill);
          font-family: var(--font-heading);
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--coe-text);
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }
        .subtab-pill-btn:hover {
          color: var(--coe-maroon);
          border-color: var(--coe-gold);
          transform: translateY(-1px);
        }
        .subtab-pill-btn.active {
          color: #ffffff;
          background-color: var(--coe-maroon);
          border-color: var(--coe-maroon);
          box-shadow: 0 4px 12px rgba(122, 31, 31, 0.2);
        }
        .subtab-icon {
          color: var(--coe-maroon);
        }
        .active-icon {
          color: var(--coe-gold-light);
        }
      `}</style>
    </div>
  );
};

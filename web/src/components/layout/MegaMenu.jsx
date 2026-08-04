import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { buildNavHref, navigationItems } from '../../data/navigationData';

const FLYOUT_MIN_WIDTH = 280;

function hasChildren(item) {
  return Array.isArray(item.children) && item.children.length > 0;
}

function NavLinkItem({ item, depth = 0, isActive, isHighlighted, onHover, onFocus, onNavigate, itemRef }) {
  const href = buildNavHref(item);
  const showChevron = hasChildren(item);

  return (
    <Link
      ref={itemRef}
      to={href}
      role="menuitem"
      aria-haspopup={showChevron ? 'true' : undefined}
      aria-expanded={showChevron && isHighlighted ? 'true' : showChevron ? 'false' : undefined}
      tabIndex={isActive ? 0 : -1}
      onMouseEnter={onHover}
      onFocus={onFocus}
      onClick={onNavigate}
      className={`mega-link-item ${isHighlighted ? 'is-highlighted' : ''}`}
    >
      <span className="mega-link-item-content">
        {item.icon && (
          <item.icon
            size={16}
            className="mega-link-item-icon"
            aria-hidden="true"
          />
        )}
        <span>{item.label}</span>
      </span>
      {showChevron && (
        <ChevronRight
          size={15}
          className="mega-link-chevron"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

function FlyoutPanel({
  items,
  pathPrefix,
  activePath,
  onHoverPath,
  onFocusPath,
  onNavigate,
  depth,
  panelRef,
  itemRefs,
  focusedIndex,
}) {
  return (
    <div
      ref={panelRef}
      role="menu"
      aria-label={`Submenu level ${depth + 1}`}
      className="mega-flyout-panel"
      style={{ minWidth: FLYOUT_MIN_WIDTH }}
    >
      {items.map((item, index) => {
        const itemPath = [...pathPrefix, item.id];
        const pathKey = itemPath.join('/');
        const isHighlighted = activePath.length >= itemPath.length && activePath.slice(0, itemPath.length).every((id, i) => id === itemPath[i]);

        return (
          <div key={item.id} className="relative">
            <NavLinkItem
              item={item}
              depth={depth}
              isActive={focusedIndex === index}
              isHighlighted={isHighlighted}
              onHover={() => onHoverPath(itemPath)}
              onFocus={() => onFocusPath(itemPath, index)}
              onNavigate={onNavigate}
              itemRef={(el) => {
                itemRefs.current[pathKey] = el;
              }}
            />
            {hasChildren(item) && isHighlighted && (
              <FlyoutPanel
                items={item.children}
                pathPrefix={itemPath}
                activePath={activePath}
                onHoverPath={onHoverPath}
                onFocusPath={onFocusPath}
                onNavigate={onNavigate}
                depth={depth + 1}
                panelRef={null}
                itemRefs={itemRefs}
                focusedIndex={-1}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function MegaMenuPanel({ item, activeFlyoutPath, onHoverPath, onNavigate, panelRef, onPanelEnter }) {
  if (!item?.sections) return null;

  return (
    <div
      ref={panelRef}
      role="region"
      aria-label={`${item.label} menu`}
      onMouseEnter={onPanelEnter}
      className="mega-panel-wrapper"
    >
      <div className="mega-panel-inner">
        <div className="mega-banner">
          <p className="mega-banner-category">
            {item.label}
          </p>
          {item.description && (
            <p className="mega-banner-description">
              {item.description}
            </p>
          )}
        </div>

        <div className="mega-grid">
          {item.sections.map((section) => (
            <div key={section.id} className="min-w-0">
              <div className="mega-section-header">
                {section.icon && (
                  <section.icon size={18} className="mega-section-header-icon" aria-hidden="true" />
                )}
                <h3 className="mega-section-header-title">
                  {section.label}
                </h3>
              </div>
              <ul className="space-y-0.5" role="none">
                {section.children.map((child) => {
                  const childPath = [child.id];
                  const isHighlighted =
                    activeFlyoutPath.length > 0 &&
                    activeFlyoutPath[0] === child.id;

                  return (
                    <li key={child.id} className="relative" role="none">
                      <NavLinkItem
                        item={child}
                        isActive={false}
                        isHighlighted={isHighlighted}
                        onHover={() => onHoverPath(childPath)}
                        onFocus={() => onHoverPath(childPath)}
                        onNavigate={onNavigate}
                      />
                      {hasChildren(child) && isHighlighted && (
                        <div className="absolute left-full top-0 z-20 pl-0">
                          <FlyoutPanel
                            items={child.children}
                            pathPrefix={childPath}
                            activePath={activeFlyoutPath}
                            onHoverPath={onHoverPath}
                            onFocusPath={() => {}}
                            onNavigate={onNavigate}
                            depth={1}
                            panelRef={null}
                            itemRefs={{ current: {} }}
                            focusedIndex={-1}
                          />
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavSection({ item, onNavigate, depth = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const href = buildNavHref(item);
  const expandable = hasChildren(item) || (item.sections && item.sections.length > 0);

  if (item.sections) {
    return (
      <div className="border-b border-[#E2DCC9]">
        <button
          type="button"
          className="mobile-nav-section-btn"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <span className="flex items-center gap-2">
            {item.icon && <item.icon size={16} className="text-[#7A1F1F]" />}
            {item.label}
          </span>
          <ChevronRight size={16} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </button>
        {expanded && (
          <div className="mobile-nav-sublist pl-4">
            {item.sections.map((section) => (
              <MobileNavSection key={section.id} item={section} onNavigate={onNavigate} depth={depth + 1} />
            ))}
            <Link
              to={href}
              onClick={onNavigate}
              className="mobile-nav-link font-semibold text-[#7A1F1F]"
            >
              View all {item.label}
            </Link>
          </div>
        )}
      </div>
    );
  }

  if (expandable && item.children) {
    return (
      <div style={{ paddingLeft: depth * 12 }}>
        <button
          type="button"
          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-[#2B2B2B]"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {item.label}
          <ChevronRight size={14} className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </button>
        {expanded && item.children.map((child) => (
          <MobileNavSection key={child.id} item={child} onNavigate={onNavigate} depth={depth + 1} />
        ))}
      </div>
    );
  }

  return (
    <Link
      to={href}
      onClick={onNavigate}
      className="mobile-nav-link"
      style={{ paddingLeft: 16 + depth * 12 }}
    >
      {item.label}
    </Link>
  );
}

export function MegaMenu({ onNavigate, mode = 'desktop' }) {
  const location = useLocation();
  const navAreaRef = useRef(null);
  const panelRef = useRef(null);
  const triggerRefs = useRef([]);
  const itemRefs = useRef({});

  const [openItemId, setOpenItemId] = useState(null);
  const [flyoutPath, setFlyoutPath] = useState([]);
  const [focusedTriggerIndex, setFocusedTriggerIndex] = useState(-1);
  const [isKeyboardMode, setIsKeyboardMode] = useState(false);

  const openItem = navigationItems.find((item) => item.id === openItemId) ?? null;
  const isOpen = openItemId !== null;

  const closeMenu = useCallback(() => {
    setOpenItemId(null);
    setFlyoutPath([]);
    setFocusedTriggerIndex(-1);
  }, []);

  const handleNavigate = useCallback(() => {
    closeMenu();
    onNavigate?.();
  }, [closeMenu, onNavigate]);

  const openForItem = useCallback((itemId) => {
    setOpenItemId(itemId);
    setFlyoutPath([]);
  }, []);

  const handleNavAreaLeave = useCallback(
    (event) => {
      if (isKeyboardMode) return;
      const next = event.relatedTarget;
      if (next && navAreaRef.current?.contains(next)) return;
      closeMenu();
    },
    [closeMenu, isKeyboardMode]
  );

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!navAreaRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        event.preventDefault();
        closeMenu();
        triggerRefs.current[focusedTriggerIndex]?.focus();
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeMenu, isOpen, focusedTriggerIndex]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, closeMenu]);

  const handleTriggerKeyDown = (event, index, item) => {
    setIsKeyboardMode(true);

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (openItemId === item.id) {
          closeMenu();
        } else {
          openForItem(item.id);
          setFocusedTriggerIndex(index);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        openForItem(item.id);
        setFocusedTriggerIndex(index);
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (!isOpen) {
          openForItem(item.id);
        }
        break;
      case 'ArrowLeft':
        event.preventDefault();
        closeMenu();
        break;
      case 'Home':
        event.preventDefault();
        triggerRefs.current[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        triggerRefs.current[navigationItems.length - 1]?.focus();
        break;
      default:
        break;
    }
  };

  const handlePanelKeyDown = (event) => {
    if (!openItem) return;

    const allSectionItems = openItem.sections.flatMap((s) => s.children);
    const flatItems = flattenNavItems(allSectionItems);

    if (event.key === 'ArrowRight' && flyoutPath.length > 0) {
      event.preventDefault();
      const current = getItemAtPath(allSectionItems, flyoutPath);
      if (current && hasChildren(current) && current.children[0]) {
        setFlyoutPath([...flyoutPath, current.children[0].id]);
      }
    }

    if (event.key === 'ArrowLeft' && flyoutPath.length > 0) {
      event.preventDefault();
      setFlyoutPath(flyoutPath.slice(0, -1));
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const currentId = flyoutPath[0] ?? flatItems[0]?.id;
      const currentIndex = flatItems.findIndex((i) => i.id === currentId);
      const nextIndex =
        event.key === 'ArrowDown'
          ? Math.min(currentIndex + 1, flatItems.length - 1)
          : Math.max(currentIndex - 1, 0);
      const nextItem = flatItems[nextIndex];
      if (nextItem) setFlyoutPath([nextItem.id]);
    }
  };

  const isItemActive = (path) => {
    if (!path) return false;
    if (location.pathname !== path && !location.pathname.startsWith(path)) return false;
    return true;
  };

  if (mode === 'mobile') {
    return (
      <nav className="py-2" aria-label="Mobile navigation">
        {navigationItems.map((item) => (
          <MobileNavSection key={item.id} item={item} onNavigate={handleNavigate} />
        ))}
      </nav>
    );
  }

  return (
    <>
      {isOpen && <div className="mega-backdrop" onClick={closeMenu} aria-hidden="true" />}

      {/* Desktop mega menu */}
      <div
        ref={navAreaRef}
        className="relative"
        onMouseLeave={handleNavAreaLeave}
      >
        <ul className="mega-nav-list" role="menubar" aria-label="Main navigation">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            const isTriggerOpen = openItemId === item.id;
            const isActive = isItemActive(item.path);

            return (
              <li key={item.id} role="none">
                <button
                  ref={(el) => {
                    triggerRefs.current[index] = el;
                  }}
                  type="button"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={isTriggerOpen}
                  tabIndex={0}
                  onMouseEnter={() => {
                    setIsKeyboardMode(false);
                    openForItem(item.id);
                  }}
                  onFocus={() => {
                    setIsKeyboardMode(true);
                    setFocusedTriggerIndex(index);
                  }}
                  onKeyDown={(e) => handleTriggerKeyDown(e, index, item)}
                  className={`mega-nav-trigger ${isTriggerOpen ? 'is-open' : isActive ? 'is-active' : ''}`}
                >
                  <Icon
                    size={15}
                    className="trigger-icon"
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                  {item.sections && (
                    <ChevronDown
                      size={14}
                      className="trigger-chevron"
                      aria-hidden="true"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {isOpen && openItem && (
          <div onKeyDown={handlePanelKeyDown}>
            <MegaMenuPanel
              item={openItem}
              activeFlyoutPath={flyoutPath}
              onHoverPath={(path) => {
                setIsKeyboardMode(false);
                setFlyoutPath(path);
              }}
              onNavigate={handleNavigate}
              panelRef={panelRef}
              onPanelEnter={() => openForItem(openItem.id)}
            />
          </div>
        )}
      </div>
    </>
  );
}

function flattenNavItems(items, result = []) {
  for (const item of items) {
    result.push(item);
    if (hasChildren(item)) flattenNavItems(item.children, result);
  }
  return result;
}

function getItemAtPath(items, path) {
  if (!path.length) return null;
  let current = items.find((i) => i.id === path[0]);
  for (let i = 1; i < path.length && current; i++) {
    current = current.children?.find((c) => c.id === path[i]);
  }
  return current ?? null;
}

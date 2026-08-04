import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Syncs tab state with URL hash fragments.
 * Supports compound hashes like "its-lab-overview" via hashParts.
 */
export function useHashTab(defaultTab, validTabs = []) {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) return;

    const primary = hash.split('-')[0];
    const fullMatch = validTabs.find((t) => t === hash || t === primary);
    if (fullMatch) {
      setActiveTab(fullMatch);
      return;
    }

    if (validTabs.includes(primary)) {
      setActiveTab(primary);
    }
  }, [location.hash, validTabs]);

  const setTab = (tab) => {
    setActiveTab(tab);
    window.history.replaceState(null, '', `#${tab}`);
  };

  return [activeTab, setTab];
}

/**
 * For pages with a secondary sub-tab (e.g. Labs ITS sub-tabs).
 */
export function useHashSubTab(defaultSubTab, parentTab, activeParentTab) {
  const location = useLocation();
  const [subTab, setSubTab] = useState(defaultSubTab);

  useEffect(() => {
    if (activeParentTab !== parentTab) return;

    const hash = location.hash.replace('#', '');
    if (!hash.startsWith(`${parentTab}-`)) return;

    const sub = hash.slice(parentTab.length + 1);
    if (sub) setSubTab(sub);
  }, [location.hash, parentTab, activeParentTab]);

  const setSubTabWithHash = (tab) => {
    setSubTab(tab);
    window.history.replaceState(null, '', `#${parentTab}-${tab}`);
  };

  return [subTab, setSubTabWithHash];
}

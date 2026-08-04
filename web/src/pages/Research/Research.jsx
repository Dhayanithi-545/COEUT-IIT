import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../../components/layout/Hero';
import { ProjectsSubtab } from './ProjectsSubtab';
import { ReportsSubtab } from './ReportsSubtab';
import { StudyCorridorsSubtab } from './StudyCorridorsSubtab';
import { EventsSubtab } from './EventsSubtab';
import { OpportunitiesSubtab } from './OpportunitiesSubtab';
import { EmptyState } from '../../components/ui/EmptyState';
import { Radio } from 'lucide-react';

export const Research = () => {
  const location = useLocation();
  const rawHash = location.hash.replace('#', '');
  const activeTab = rawHash || 'projects';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsSubtab />;
      case 'reports':
        return <ReportsSubtab />;
      case 'corridors':
        return <StudyCorridorsSubtab />;
      case 'atis':
        return (
          <EmptyState
            title="Advanced Traveler Information System (ATIS)"
            message="The ATIS module provides real-time traveler information, bus arrival prediction, and departure time planning for Indian cities. Research data and tools are currently being integrated."
            icon={Radio}
          />
        );
      case 'events':
        return <EventsSubtab />;
      case 'opportunities':
        return <OpportunitiesSubtab />;
      default:
        return <ProjectsSubtab />;
    }
  };

  return (
    <div className="research-page">
      <Hero
        title="Research & Intelligent Transport Systems"
        subtitle="Sponsored R&D projects, synthesis reports, study corridors, ATIS tools, and workshop events"
      />
      <main className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        {renderTabContent()}
      </main>
    </div>
  );
};

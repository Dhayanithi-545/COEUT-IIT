import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../../components/layout/HeroSection';
import { Overview } from './Overview';
import { PartnerInstitutes } from './PartnerInstitutes';
import { GoverningCouncil } from './GoverningCouncil';
import { IndustryInfo } from './IndustryInfo';
import { StudentInfo } from './StudentInfo';
import { Newsletters } from './Newsletters';
import { Contacts } from './Contacts';

export const About = () => {
  const location = useLocation();
  const rawHash = location.hash.replace('#', '');
  const activeTab = rawHash || 'overview';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'partners':
        return <PartnerInstitutes />;
      case 'council':
        return <GoverningCouncil />;
      case 'industry':
        return <IndustryInfo />;
      case 'students':
        return <StudentInfo />;
      case 'newsletters':
        return <Newsletters />;
      case 'contacts':
        return <Contacts />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="home-about-page">
      {/* Cityscape Dark Navy Hero Section */}
      {activeTab === 'overview' && <HeroSection />}

      {/* Main Content Area */}
      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        {renderTabContent()}
      </main>
    </div>
  );
};

import React, { useState } from 'react';
import { Hero } from '../../components/layout/Hero';
import { EmptyState } from '../../components/ui/EmptyState';
import { CarFront, Users, Cpu, FlaskConical, Images } from 'lucide-react';

const tabs = [
  { id: 'people', label: 'People', icon: Users },
  { id: 'facilities', label: 'Facilities', icon: Cpu },
  { id: 'research', label: 'Research', icon: FlaskConical },
  { id: 'gallery', label: 'Gallery', icon: Images },
];

export const ConnectedIntelligentVehicleLab = () => {
  const [activeTab, setActiveTab] = useState('people');

  return (
    <div className="civ-lab-page">
      <Hero 
        title="Connected Intelligent Vehicle Lab" 
        subtitle="V2X communication, automated vehicle testing, and intelligent transportation infrastructure" 
      />

      <main className="container page-content">
        {activeTab === 'people' && (
          <EmptyState 
            title="CIV Lab Team Directory"
            message="Details about the research engineers, faculty advisors, and PhD candidates attached to the Connected Intelligent Vehicle Lab will be updated here."
            icon={Users}
          />
        )}
        {activeTab === 'facilities' && (
          <EmptyState 
            title="CIV Lab Facilities & Hardware"
            message="Specifications of DSRC/C-V2X roadside units (RSUs), vehicle onboard units (OBUs), and autonomous sensor test rigs."
            icon={Cpu}
          />
        )}
        {activeTab === 'research' && (
          <EmptyState 
            title="CIV Lab Research & Projects"
            message="Overview of ongoing V2I collision avoidance algorithms, cooperative adaptive cruise control (CACC), and eco-routing research."
            icon={FlaskConical}
          />
        )}
        {activeTab === 'gallery' && (
          <EmptyState 
            title="CIV Lab Image & Video Gallery"
            message="A collection of images showcasing the lab's experimental connected vehicle field trials will be added here in the future."
            icon={Images}
          />
        )}
      </main>

      <style>{`.page-content { padding-top: 1rem; }`}</style>
    </div>
  );
};

import React, { useState } from 'react';
import { Hero } from '../../components/layout/Hero';
import { Card } from '../../components/ui/Card';
import { EmptyState } from '../../components/ui/EmptyState';
import { Gamepad2, Users, Cpu, FlaskConical, Images, GraduationCap } from 'lucide-react';

const tabs = [
  { id: 'people', label: 'People', icon: Users },
  { id: 'facilities', label: 'Facilities', icon: Cpu },
  { id: 'research', label: 'Research', icon: FlaskConical },
  { id: 'gallery', label: 'Gallery', icon: Images },
];

const simulatorPeople = [
  {
    name: "Dr. Anmol Pahwa",
    designation: "Assistant Professor",
    interests: "Sustainable Transportation, Freight Transportation, City Logistics"
  },
  {
    name: "Dr. Bhargava Rama Chilukuri",
    designation: "Associate Professor",
    interests: "Traffic Flow Theory, Numerical Methods And Simulations to Traffic Control"
  },
  {
    name: "Dr. Gitakrishnan Ramadurai",
    designation: "Professor",
    interests: "Dynamic Traffic Assignment, Transportation Network Modeling"
  },
  {
    name: "Dr. Karthik K. S.",
    designation: "Professor",
    interests: "Travel Demand Modeling, Network Optimization"
  },
  {
    name: "Dr. Lelitha Devi Vanajakshi",
    designation: "Professor",
    interests: "Traffic Flow Modeling, Intelligent Transport Systems, Traffic Operations"
  }
];

export const DrivingSimulatorLab = () => {
  const [activeTab, setActiveTab] = useState('people');

  return (
    <div className="simulator-lab-page">
      <Hero 
        title="Driving Simulator Laboratory" 
        subtitle="Human-in-the-loop simulation testbed for autonomous vehicle interaction, driver behavior, and safety" 
      />

      <main className="container page-content">
        {activeTab === 'people' && (
          <div className="sim-people-section">
            <h3 className="section-title">
              <Users size={22} /> Driving Simulator Lab Research Team
            </h3>
            <p className="section-desc">
              Details about the team and researchers involved in the lab. Our team is dedicated to advancing driving simulation technology:
            </p>

            <div className="sim-people-grid">
              {simulatorPeople.map((p, idx) => (
                <Card key={idx} title={p.name} subtitle={p.designation} icon={GraduationCap}>
                  <div className="sim-person-body">
                    <span className="sim-interest-lbl">Broad Areas of Interest:</span>
                    <p className="sim-interest-txt">{p.interests}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'facilities' && (
          <div className="sim-facilities-section">
            <div className="coe-card sim-info-card">
              <h3 className="section-title">
                <Cpu size={22} /> Laboratory Facilities & Equipment
              </h3>
              <p className="sim-text">
                The Driving Simulator Lab at IIT Madras is equipped with state-of-the-art driving simulators to conduct multi-sensory human-in-the-loop research. Facilities include full-cabin mockup stations, multi-screen immersive visual displays, force-feedback steering controls, and high-frequency physiological measurement systems.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'research' && (
          <div className="sim-research-section">
            <div className="coe-card sim-info-card">
              <h3 className="section-title">
                <FlaskConical size={22} /> Simulator Research Thrusts
              </h3>
              <p className="sim-text">
                Overview of ongoing research projects and publications. Our team conducts groundbreaking research in autonomous driving takeover scenarios, vehicle dynamics under adverse weather, driver fatigue detection, and surrogate safety measures at urban intersections.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <EmptyState 
            title="Driving Simulator Lab Media Gallery"
            message="Explore images and videos of our lab and simulator in action. See how we create realistic driving simulations and test new technologies."
            icon={Images}
          />
        )}
      </main>

      <style>{`
        .page-content {
          padding-top: 1rem;
        }
        .section-desc {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1.25rem;
        }
        .sim-people-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .sim-person-body {
          margin-top: 0.5rem;
        }
        .sim-interest-lbl {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--coe-gold);
          text-transform: uppercase;
          display: block;
        }
        .sim-interest-txt {
          font-size: 0.9rem;
          color: var(--coe-text);
          margin-top: 0.2rem;
        }
        .sim-info-card {
          border-left: 4px solid var(--coe-maroon);
        }
        .sim-text {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--coe-text);
          margin-top: 0.75rem;
        }
      `}</style>
    </div>
  );
};

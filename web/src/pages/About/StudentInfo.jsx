import React from 'react';
import { GraduationCap, Cpu, Layers, Lightbulb, Briefcase, Award, Globe } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export const StudentInfo = () => {
  const opportunities = [
    {
      title: "State-of-the-Art Research Laboratories",
      icon: Cpu,
      desc: "Access to 4 specialized labs equipped with real-time sensors, traffic simulation suites, driving simulators, and high-performance computing servers."
    },
    {
      title: "M.S. & Ph.D Research Opportunities",
      icon: GraduationCap,
      desc: "Pursue cutting-edge doctoral and master's degree research under leading faculty while contributing directly to sponsored projects."
    },
    {
      title: "Live High-Impact Projects",
      icon: Layers,
      desc: "Work on real-world urban transport corridors benefiting hundreds of thousands of daily commuters across Indian metropolitan cities."
    },
    {
      title: "Advanced Sensor & Algorithm Experience",
      icon: Lightbulb,
      desc: "Hands-on experience with GPS tracking, computer vision, Bluetooth sensors, dynamic traffic assignment, and machine learning models."
    },
    {
      title: "National & International Career Pathways",
      icon: Briefcase,
      desc: "Direct recruitment pathways into top global consulting firms, government planning authorities, research labs, and academic institutions."
    },
    {
      title: "Patenting & Commercialization Assistance",
      icon: Award,
      desc: "Guidance and financial support for filing patents, developing software prototypes, and commercializing transport technologies."
    },
    {
      title: "Global Conference Exposure",
      icon: Globe,
      desc: "Present research papers at premier international conferences including TRB (USA), ASCE, and leading national symposiums."
    }
  ];

  return (
    <div className="student-info-root">
      <div className="info-header">
        <h3 className="section-title">
          <GraduationCap size={22} /> Information for Students & Young Professionals
        </h3>
        <p className="info-lead">
          The Centre offers an exciting research environment and attractive career opportunities for motivated students and young engineers.
        </p>
      </div>

      <div className="opp-grid">
        {opportunities.map((opp, idx) => (
          <Card key={idx} title={opp.title} icon={opp.icon}>
            <p>{opp.desc}</p>
          </Card>
        ))}
      </div>

      <style>{`
        .student-info-root {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .info-lead {
          font-size: 1rem;
          color: var(--coe-text-muted);
          margin-bottom: 1rem;
        }
        .opp-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
      `}</style>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  FlaskConical,
  Briefcase,
  FileText,
  Navigation,
  CalendarDays,
  CheckCircle2,
  Download,
  ExternalLink,
  BookOpen,
  MapPin,
  Users,
  ShieldCheck
} from 'lucide-react';
import {
  projects,
  synthesisReports,
  publicationStats,
  roadSafetyAudits,
  trainingPrograms,
  guestLectures
} from './data';

const researchTabs = [
  { id: 'overview', label: 'Research Focus Areas', icon: FlaskConical },
  { id: 'projects', label: 'Funded Projects', icon: Briefcase },
  { id: 'reports', label: 'Reports & Publications', icon: FileText },
  { id: 'corridors', label: 'Study Corridors', icon: Navigation },
  { id: 'events', label: 'Events & Training', icon: CalendarDays },
  { id: 'opportunities', label: 'Career Opportunities', icon: Briefcase },
];

export const Research = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash.replace('#', '') || 'overview';
  const [activeSection, setActiveSection] = useState(hash);

  useEffect(() => {
    setActiveSection(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  const handleTabClick = (tabId) => {
    setActiveSection(tabId);
    navigate(`/research#${tabId}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <ResearchOverview />;
      case 'projects':
        return <ResearchProjects />;
      case 'reports':
        return <ReportsAndPublications />;
      case 'corridors':
        return <StudyCorridors />;
      case 'events':
        return <EventsAndTraining />;
      case 'opportunities':
        return <ResearchOpportunities />;
      default:
        return <ResearchOverview />;
    }
  };

  return (
    <div className="research-page">
      {/* Subtab Navigation Bar */}
      {/* <div className="subtab-bar-root">
        <div className="container">
          <div className="subtab-nav-wrapper">
            {researchTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`subtab-btn ${activeSection === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div> */}

      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Research Programs, Projects & Field Corridors</h1>
          <p className="page-header-sub">Cutting-edge multi-institutional research in ITS, travel demand forecasting, mixed traffic congestion, and road safety.</p>
        </div>
      </div>



      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        {renderContent()}
      </main>
    </div>
  );
};

const ResearchOverview = () => {
  return (
    <div className="research-overview-root">
      <div className="section-intro-card coe-card">
        <h2>Core Research Domains</h2>
        <p>
          The Centre undertakes research, development, education, and technology transfer activities across three primary domains of urban transportation:
        </p>
      </div>

      <div className="thrust-cards-grid">
        <div className="coe-card thrust-card">
          <div className="thrust-icon-circle"><FlaskConical size={24} /></div>
          <h3>Intelligent Transportation Systems (ITS)</h3>
          <p>Development and field evaluation of video sensors, Bluetooth receivers, radar, and GPS probes for real-time traffic monitoring, bus arrival prediction, and traveler information.</p>
        </div>
        <div className="coe-card thrust-card">
          <div className="thrust-icon-circle"><BookOpen size={24} /></div>
          <h3>Urban Transportation Systems Planning</h3>
          <p>Activity-based modeling, travel demand forecasting, dynamic network assignment, multi-modal planning, and pavement deterioration modeling under Indian traffic.</p>
        </div>
        <div className="coe-card thrust-card">
          <div className="thrust-icon-circle"><Navigation size={24} /></div>
          <h3>Congestion Management & Road Safety</h3>
          <p>Urban speed management, arterial bottleneck mitigation, work-zone traffic safety audits, and blackspot identification for municipal and highway agencies.</p>
        </div>
      </div>
    </div>
  );
};

const ResearchProjects = () => {
  return (
    <div className="projects-root">
      <div className="section-intro-card coe-card">
        <h2>Funded Research Projects</h2>
        <p>A multi-institutional suite of 16 national research projects undertaken by partner universities and IIT Madras:</p>
      </div>

      <div className="coe-table-wrapper">
        <table className="coe-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name of the Project</th>
              <th>Principal Investigator</th>
              <th>Name of the Institute</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td className="font-semibold">{proj.title}</td>
                <td>{proj.pi}</td>
                <td className="text-muted">{proj.institute}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const ReportsAndPublications = () => {
  return (
    <div className="reports-root">
      <div className="section-intro-card coe-card">
        <h2>Synthesis Reports & Publications</h2>
        <p>Draft and final technical synthesis reports published by the Centre across key urban transportation fields.</p>
      </div>

      <div className="reports-categories-grid">
        {synthesisReports.map((cat, idx) => (
          <div key={idx} className="coe-card report-cat-card">
            <h3>{cat.category}</h3>
            <ul className="reports-list">
              {cat.reports.map((rep) => (
                <li key={rep.id} className="report-item">
                  <div>
                    <h4 className="report-title">{rep.title}</h4>
                    <p className="report-desc">{rep.desc}</p>
                  </div>
                  <button type="button" className="coe-btn coe-btn-sm coe-btn-outline">
                    <Download size={14} /> PDF
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Publications Stats */}
      <div className="publications-stats-card coe-card">
        <h3>Publications & International Presentations</h3>
        <p>
          The researchers at the Centre of Excellence in Urban Transport, IIT Madras have published <strong>22 international and national journal papers</strong> in leading transportation journals:
        </p>
        <ul className="journals-list">
          {publicationStats.journals.map((j, i) => (
            <li key={i}><CheckCircle2 size={16} /> {j}</li>
          ))}
        </ul>
        <p style={{ marginTop: '1rem' }}>
          The research work has also been presented in <strong>25 international and national conferences</strong> across {publicationStats.locations.join(', ')}.
        </p>
      </div>
    </div>
  );
};

const StudyCorridors = () => {
  return (
    <div className="corridors-root">
      <div className="section-intro-card coe-card">
        <h2>Chennai Study Corridors & Testbeds</h2>
        <p>Field implementation testbeds spread across Chennai city for real-time ITS evaluation and traveler information deployment.</p>
      </div>

      <div className="corridors-details-grid">
        <div className="coe-card corridor-card">
          <h3>Sardar Patel Road & IT Corridor Testbed (15 km)</h3>
          <p>
            One of the primary initial testbed corridors is located near IIT Madras on Sardar Patel Road, flanked by the residential districts of Adyar and Velachery.
          </p>
          <ul className="corridor-specs">
            <li><strong>Length of Testbed:</strong> Approximately 15 km</li>
            <li><strong>Intersections Included:</strong> 13 major signalized intersections</li>
            <li><strong>Midblock Sections:</strong> 28 directional midblock sections</li>
            <li><strong>Primary Corridor 1:</strong> Sardar Patel Road and OMR IT Corridor</li>
            <li><strong>Alternative Corridor 2:</strong> Velachery Road and Taramani Road</li>
          </ul>
        </div>

        <div className="coe-card corridor-card">
          <h3>Departure Time Planner & Bus Signal Priority</h3>
          <p>
            Specialized field testbeds implemented from <strong>T-Nagar corridor</strong> for dynamic departure time planning and bus signal priority demonstrations.
          </p>
        </div>
      </div>
    </div>
  );
};

const EventsAndTraining = () => {
  return (
    <div className="events-root">
      <div className="section-intro-card coe-card">
        <h2>Continuing Education, Seminars & Safety Workshops</h2>
        <p>Major international workshops, road safety audit training programs for highways engineers, and guest lectures hosted by the Centre.</p>
      </div>

      {/* Indo-US Workshop Highlight */}
      <div className="coe-card workshop-highlight-card">
        <span className="event-tag">INTERNATIONAL WORKSHOP</span>
        <h3>Indo-US Workshop on Emerging Trends in Intelligent Transportation Systems (ETITS)</h3>
        <p>
          Sponsored by the Indo-US Science and Technology Forum, conducted by COE-UT and IIT Madras from 11th to 13th February 2010. Attended by <strong>over 150 delegates</strong> from academia, industry, and government from India and USA.
        </p>
      </div>

      {/* Road Safety Audit Programs */}
      <div className="rsa-section">
        <h3 className="section-title"><ShieldCheck size={20} /> Road Safety Audit Training Programs (Govt. of Tamil Nadu)</h3>
        <div className="coe-table-wrapper">
          <table className="coe-table">
            <thead>
              <tr>
                <th>Location</th>
                <th>Dates</th>
                <th>Number of Participants</th>
              </tr>
            </thead>
            <tbody>
              {roadSafetyAudits.map((rsa, idx) => (
                <tr key={idx}>
                  <td className="font-semibold">{rsa.location}</td>
                  <td>{rsa.date}</td>
                  <td>{rsa.participants} Engineers</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guest Lectures Table */}
      <div className="lectures-section">
        <h3 className="section-title"><Users size={20} /> Lectures & Guest Seminars Organized</h3>
        <div className="coe-table-wrapper">
          <table className="coe-table">
            <thead>
              <tr>
                <th>Speaker</th>
                <th>Organization</th>
                <th>Topic / Lecture Title</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {guestLectures.map((lec, idx) => (
                <tr key={idx}>
                  <td className="font-semibold">{lec.speaker}</td>
                  <td>{lec.org}</td>
                  <td>{lec.topic}</td>
                  <td className="text-muted">{lec.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const ResearchOpportunities = () => {
  return (
    <div className="opportunities-root">
      <div className="section-intro-card coe-card">
        <h2>Research & Career Opportunities</h2>
        <p>
          The Centre is constantly looking for motivated professionals, traffic modelers, transportation planners, programmers, and research scholars to join our team.
        </p>
      </div>

      <div className="skills-grid">
        <div className="coe-card skill-card">
          <h4>Traffic Modelers & Planners</h4>
          <p>Expertise in VISSIM, TransCAD, CUBE, AIMSUN, and demand forecasting.</p>
        </div>
        <div className="coe-card skill-card">
          <h4>ITS Systems Integrators</h4>
          <p>Experience with sensor hardware, microcontrollers, GPS streams, and real-time comms.</p>
        </div>
        <div className="coe-card skill-card">
          <h4>Programmers & Web Developers</h4>
          <p>Full-stack web application development, data archiving, and GUI software (React, Python, C++).</p>
        </div>
      </div>
    </div>
  );
};

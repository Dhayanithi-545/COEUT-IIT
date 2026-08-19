import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarDays, CheckCircle2, Download, Briefcase, ExternalLink } from 'lucide-react';
import { PhotoGrid } from './PhotoGrid';
import {
  researchAreas,
  synthesisReports,
  publicationStats,
  opportunitySkills,
  eventPhotos,
  faculty,
} from './data';

export const Research = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '') || 'overview';
  const [activeSection, setActiveSection] = useState(hash);

  useEffect(() => {
    setActiveSection(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  const renderContent = () => {
    switch (activeSection) {
      case 'reports':
        return <ReportsAndPublications />;
      case 'corridors':
        return <StudyCorridors />;
      case 'events':
        return <Events />;
      case 'opportunities':
        return <Opportunities />;
      default:
        return <ResearchOverview />;
    }
  };

  return (
    <div className="research-page">
      {/* <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Research</h1>
          <p className="page-header-sub">
            The Centre undertakes research, development, education, and technology transfer activities in
            urban transport.
          </p>
        </div>
      </div> */}

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
        <h2>Research Areas</h2>
        <p>
          The Centre undertakes research, development, education, and technology transfer activities in the
          following areas.
        </p>
      </div>

      <div className="thrust-cards-grid">
        {researchAreas.map((area) => {
          const Icon = area.icon;
          return (
            <div key={area.id} className="coe-card thrust-card">
              <div className="thrust-icon-circle">
                <Icon size={24} />
              </div>
              <h3 className="thrust-title">{area.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const ReportsAndPublications = () => {
  return (
    <div className="reports-root">
      {/* Publications */}
      <div className="section-intro-card coe-card" style={{ marginTop: '2rem' }}>
        <h2>Publications</h2>
        <p>
          The researchers at the Centre of Excellence in Urban Transport, IIT Madras have published as
          given in the below links.
        </p>
      </div>

      <div className="pub-faculty-grid">
        {faculty.map((f) => (
          <div key={f.id} className="coe-card pub-faculty-card">
            <div className="pub-faculty-meta">
              <h4 className="pub-faculty-name">{f.name}</h4>
              <p className="pub-faculty-desig">{f.designation}</p>
              <p className="pub-faculty-dept">{f.department}</p>
            </div>
            <a
              href={f.publicationLink}
              className="coe-btn coe-btn-sm coe-btn-outline pub-faculty-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Publications of ${f.name}`}
            >
              Journal Link <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>
      <div className="section-intro-card coe-card">
        <h2>Synthesis Reports</h2>
        <p>Draft synthesis reports in the following areas are complete:</p>
      </div>

      <div className="reports-categories-grid">
        {synthesisReports.map((cat, idx) => (
          <div key={idx} className="coe-card report-cat-card">
            <h3>{cat.category}</h3>
            <ul className="reports-list">
              {cat.reports.map((rep) => (
                <li key={rep.id} className="report-item">
                  <h4 className="report-title">{rep.title}</h4>
                  <a
                    href={rep.fileUrl}
                    className="coe-btn coe-btn-sm coe-btn-outline"
                    aria-label={`Download ${rep.title}`}
                  >
                    <Download size={14} /> PDF
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      
    </div>
  );
};

const StudyCorridors = () => {
  return (
    <div className="corridors-root">
      <div className="section-intro-card coe-card">
        <h2>Study Corridors</h2>
        <p>Study sites are spread across the city of Chennai.</p>
      </div>

      <div className="corridors-details-grid">
        <div className="coe-card corridor-card">
          <h3>Sardar Patel Road &amp; IT Corridor Testbed</h3>
          <p>
            One of the initial study sites is near IIT Madras located on Sardar Patel Road, flanked by the
            residential districts of Adyar and Velachery. The study area comprises two alternative
            corridors. This is where many of the ITS solutions were implemented and demonstrated.
          </p>
          <ul className="corridor-specs">
            <li><strong>Corridor 1:</strong> Sardar Patel Road and IT Corridor</li>
            <li><strong>Corridor 2:</strong> Velachery Road and Taramani Road</li>
            <li><strong>Intersections:</strong> 13</li>
            <li><strong>Midblock sections</strong> (by traffic flow direction)<strong>:</strong> 28</li>
            <li><strong>Length of testbed:</strong> Approximately 15 km</li>
          </ul>
        </div>

        <div className="coe-card corridor-card">
          <h3>Departure Time Planner Corridor</h3>
          <p>
            The study corridor in which a departure time planner was implemented spread from T. Nagar.
          </p>
        </div>

        <div className="coe-card corridor-card">
          <h3>Bus Signal Priority Study Site</h3>
          <p>The study site where bus signal priority was demonstrated.</p>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="events-root">
      {/* National Workshop banner */}
      <div className="workshop-banner">
        <span className="workshop-banner__kicker">National Workshop on</span>
        <h2 className="workshop-banner__title">
          Recent Advances in Pavement &amp; Traffic Engineering
        </h2>
        <p className="workshop-banner__date">December 01-02, 2023</p>
        <p className="workshop-banner__venue">IIT Madras, Chennai, India</p>
      </div>

      <div className="coe-card workshop-organiser-card">
        <h3>Organized by</h3>
        <p>
          Transportation Engineering Division
          <br />
          Department of Civil Engineering
          <br />
          Indian Institute of Technology Madras
        </p>
      </div>

      {/* Workshop photographs */}
      <div>
        <h3 className="section-title">
          <CalendarDays size={20} /> Photographs from the Workshop
        </h3>
        <PhotoGrid photos={eventPhotos} />
      </div>
    </div>
  );
};

const Opportunities = () => {
  return (
    <div className="opportunities-root">
      <div className="section-intro-card coe-card">
        <h2>Opportunities</h2>
        <p>
          The Centre is involved in state-of-the-art research in ITS and urban transportation management
          technology. We are constantly looking for motivated professionals to work on these projects.
        </p>
      </div>

      <div>
        <h3 className="section-title">
          <Briefcase size={20} /> Skill Sets We Are Interested In
        </h3>
        <div className="skills-grid">
          {opportunitySkills.map((skill, idx) => (
            <div key={idx} className="skill-chip">
              <CheckCircle2 size={16} className="chip-icon" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="coe-card recruitment-main-card">
        <p className="lead-p">
          If you are interested in working at the Centre feel free to contact us anytime. We recruit year
          round and specific immediate openings, if any, are listed below.
        </p>
        <p className="empty-message">No immediate openings are listed at present.</p>
      </div> */}
    </div>
  );
};

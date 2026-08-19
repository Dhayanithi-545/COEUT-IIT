import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BookOpen, ExternalLink } from 'lucide-react';
import { faculty, currentStaff, formerStaff } from './data';

export const People = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '') || 'faculty';
  const [activeSection, setActiveSection] = useState(hash);

  useEffect(() => {
    setActiveSection(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  const renderContent = () => {
    switch (activeSection) {
      case 'students':
        return <StudentsSection />;
      case 'staff':
        return <StaffSection />;
      default:
        return <FacultySection />;
    }
  };

  return (
    <div className="people-page">
      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">People</h1>
          <p className="page-header-sub">
            People associated with the Centre include the faculty members, students, and technical and
            administrative staff.
          </p>
        </div>
      </div>

      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        {renderContent()}
      </main>
    </div>
  );
};

const FacultySection = () => {
  return (
    <div className="faculty-root">
      <div className="faculty-grid">
        {faculty.map((f) => (
          <div key={f.id} className="coe-card faculty-card">
            <div className="faculty-header">
              <div className="faculty-avatar">{f.name.charAt(4) || 'F'}</div>
              <div>
                <h3 className="faculty-name">{f.name}</h3>
                <p className="faculty-desig">{f.designation}</p>
                <p className="faculty-dept">{f.department}</p>
              </div>
            </div>
            <div className="faculty-body">
              <p>
                <strong>
                  <BookOpen size={14} /> Broad areas of Interest:
                </strong>{' '}
                {f.interests}
              </p>
              <a
                href={f.link}
                target="_blank"
                rel="noopener noreferrer"
                className="coe-btn coe-btn-outline coe-btn-sm w-fit"
              >
                View Profile <ExternalLink size={14} />
              </a>
              {f.publicationLink && (
                <a
                  href={f.publicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="coe-btn coe-btn-secondary coe-btn-sm w-fit"
                >
                  Journals & Publications <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StudentsSection = () => {
  return (
    <div className="students-root">
      <div className="section-intro-card coe-card">
        <h2>Students</h2>
        <p className="empty-message">Student details will be published shortly.</p>
      </div>
    </div>
  );
};

const StaffSection = () => {
  return (
    <div className="staff-root">
      <div className="section-intro-card coe-card">
        <h2>Current Working Staff</h2>
      </div>

      <div className="coe-table-wrapper" style={{ marginBottom: '3rem' }}>
        <table className="coe-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {currentStaff.map((st, i) => (
              <tr key={i}>
                <td className="font-semibold">{st.name}</td>
                <td className="text-muted">{st.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section-intro-card coe-card">
        <h2>Old Staff</h2>
      </div>

      <div className="coe-table-wrapper">
        <table className="coe-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Designation</th>
            </tr>
          </thead>
          <tbody>
            {formerStaff.map((fs, i) => (
              <tr key={i}>
                <td className="font-semibold">{fs.name}</td>
                <td className="text-muted">{fs.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

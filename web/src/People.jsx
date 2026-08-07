import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Users, GraduationCap, Briefcase, Mail, BookOpen } from 'lucide-react';
import { faculty, currentStaff, formerStaff } from './data';

const peopleTabs = [
  { id: 'faculty', label: 'Faculty Members', icon: GraduationCap },
  { id: 'students', label: 'Research Scholars', icon: Users },
  { id: 'staff', label: 'Staff Directory', icon: Briefcase },
];

export const People = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hash = location.hash.replace('#', '') || 'faculty';
  const [activeSection, setActiveSection] = useState(hash);

  useEffect(() => {
    setActiveSection(hash);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash]);

  const handleTabClick = (tabId) => {
    setActiveSection(tabId);
    navigate(`/people#${tabId}`);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'faculty':
        return <FacultySection />;
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
          <h1 className="page-header-title">People & Research Team Directory</h1>
          <p className="page-header-sub">Multi-institutional and multi-disciplinary team comprising faculty members, research scholars, and project administrative staff.</p>
        </div>
      </div>

      {/* Subtab Navigation Bar */}
      <div className="subtab-bar-root">
        <div className="container">
          <div className="subtab-nav-wrapper">
            {peopleTabs.map((tab) => {
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
      <div className="section-intro-card coe-card">
        <h2>Coordinating Faculty Members</h2>
        <p>Faculty members from the Transportation Engineering Division, Department of Civil Engineering, IIT Madras coordinating research projects at the Centre:</p>
      </div>

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
              <p><strong><BookOpen size={14} /> Areas of Interest:</strong> {f.interests}</p>
              {f.email && <p><strong><Mail size={14} /> Email:</strong> <a href={`mailto:${f.email}`}>{f.email}</a></p>}
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
        <h2>Research Scholars, M.S. & Ph.D. Students</h2>
        <p>Over 100 research scholars, M.S., Ph.D., and M.Tech students have been trained at the Centre of Excellence in Urban Transport working on live field projects.</p>
      </div>
    </div>
  );
};

const StaffSection = () => {
  return (
    <div className="staff-root">
      <div className="section-intro-card coe-card">
        <h2>Current Project & Administration Staff</h2>
      </div>

      <div className="staff-grid" style={{ marginBottom: '3rem' }}>
        {currentStaff.map((st, i) => (
          <div key={i} className="coe-card staff-card">
            <h4 className="staff-name">{st.name}</h4>
            <p className="staff-role">{st.designation}</p>
          </div>
        ))}
      </div>

      <div className="section-intro-card coe-card">
        <h2>Former Project Staff & Associates</h2>
        <p>Distinguished former project officers, senior executives, project associates, and assistants who have contributed to the Centre:</p>
      </div>

      <div className="former-staff-grid">
        {formerStaff.map((fs, i) => (
          <div key={i} className="coe-card former-staff-card">
            <h5 className="fs-name">{fs.name}</h5>
            <p className="fs-role">{fs.designation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

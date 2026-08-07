import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroSection } from './HeroSection';
import {
  Newspaper,
  Building2,
  Award,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Clock,
  Video,
  Navigation,
  BookOpen,
  Gauge,
  ShieldCheck,
  Database,
  Users,
  Briefcase,
  Target,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { partnerInstitutes, councilMembers, coeCoordinators } from './data';

const aboutTabs = [
  { id: 'overview', label: 'Overview & Mission', icon: Target },
  { id: 'partners', label: 'Partner Institutes', icon: Building2 },
  { id: 'council', label: 'Governing Council', icon: Award },
  { id: 'industry', label: 'Info for User Agencies / Industry', icon: Briefcase },
  { id: 'students', label: 'Info for Students & Professionals', icon: GraduationCap },
  { id: 'newsletters', label: 'Newsletters', icon: Newspaper },
  { id: 'contacts', label: 'Contacts & Location', icon: Mail },
];

export const About = () => {
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
    navigate(`/about#${tabId}`);
  };

  const renderContent = () => {
    switch (activeSection) {
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
    <div className="about-page">

      {/* Subtab Navigation Bar */}
      <div className="subtab-bar-root">
        <div className="container">
          <div className="subtab-nav-wrapper">
            {aboutTabs.map((tab) => {
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
      {activeSection === 'overview' && <HeroSection />}


      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        {renderContent()}
      </main>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="overview-root">
      <div className="overview-main-section">
        <div className="overview-text-block">
          <span className="official-tag">OFFICIAL RESEARCH CENTER • IIT MADRAS</span>
          {/* <h2 className="overview-heading">Center of Excellence in Urban Transport (COE-UT)</h2> */}
          <p className="overview-p">
            A <strong>Centre of Excellence in Urban Transport</strong> has been established at <strong>IIT Madras in 2009</strong> under the auspices of the Ministry of Urban Development (MoUD), Ministry of Electronics & IT (MeitY), and Ministry of Education (MoE), Government of India.
          </p>
          <p className="overview-p">
            The Centre undertakes cutting-edge research and development activities for solving Urban Transport's most pressing problems and challenges. Hosted within the <strong>Department of Civil Engineering at IIT Madras</strong>, it is coordinated by a distinguished group of faculty from the Transportation Engineering Division.
          </p>
          <p className="overview-p">
            The Centre works closely with central and state government agencies, municipal corporations, public transit authorities, industry partners, and leading research institutions across India and internationally.
          </p>
        </div>
      </div>

      {/* Video Highlight Block */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left column: text content */}
        <div className="flex flex-col gap-4 order-2 lg:order-1">
          <h3>Watch Centre of Excellence Highlights Video</h3>
          <p>
            Explore recent research breakthroughs, state-of-the-art ITS laboratory
            demonstrations, field deployment in Chennai corridors, and continuing
            education programs.
          </p>

          {/* structural addition: quick highlight list instead of plain paragraph-only */}
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <span>Research Breakthroughs</span>
            </li>
            <li className="flex items-center gap-2">
              <span>ITS Lab Demonstrations</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Chennai Corridor Deployment</span>
            </li>
            <li className="flex items-center gap-2">
              <span>Continuing Education Programs</span>
            </li>
          </ul>
        </div>

        {/* Right column: video, responsive aspect-ratio wrapper */}
        <div className="order-1 lg:order-2">
          <div className="relative w-full aspect-video overflow-hidden rounded-lg">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/sYCTcf47Nc8"
              title="Centre of Excellence Highlights"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

      </div>

      {/* Thrust Areas */}
      <div className="thrust-section">
        <h3 className="section-title"><Target size={20} /> Core Research Thrust Areas</h3>
        <div className="thrust-cards-grid">
          <div className="coe-card thrust-card">
            <div className="thrust-icon-circle"><Navigation size={22} /></div>
            <h4 className="thrust-title">Intelligent Transportation Systems (ITS)</h4>
            <p className="thrust-desc">Real-time traffic sensing via GPS probes, computer vision, Bluetooth receivers, automated incident detection, and Advanced Traveler Information Systems (ATIS).</p>
          </div>
          <div className="coe-card thrust-card">
            <div className="thrust-icon-circle"><BookOpen size={22} /></div>
            <h4 className="thrust-title">Urban Transportation Systems Planning</h4>
            <p className="thrust-desc">Travel demand forecasting, activity-based modeling, transit system performance optimization, and sustainable land-use transport interaction.</p>
          </div>
          <div className="coe-card thrust-card">
            <div className="thrust-icon-circle"><Gauge size={22} /></div>
            <h4 className="thrust-title">Congestion Management & Road Safety</h4>
            <p className="thrust-desc">Dynamic network modeling under heterogeneous mixed traffic, arterial signal coordination, bus arrival time prediction, and corridor bottleneck mitigation.</p>
          </div>
        </div>
      </div>

      {/* Resources Developed */}
      <div className="capabilities-section">
        <h3 className="section-title"><Database size={20} /> Key Resources & Capabilities Developed</h3>
        <div className="cap-cards-grid">
          <div className="coe-card cap-card">
            <div className="cap-icon-box"><Database size={24} /></div>
            <h4 className="cap-card-title">Repository of Traffic & ITS Data</h4>
            <p className="cap-card-desc">High-resolution spatial-temporal data archive for ITS, road safety, urban transport planning, and arterial congestion measures.</p>
          </div>
          <div className="coe-card cap-card">
            <div className="cap-icon-box"><Gauge size={24} /></div>
            <h4 className="cap-card-title">Decision Support Tools & Models</h4>
            <p className="cap-card-desc">Advanced simulation models, dynamic network assignment tools, and traffic prediction algorithms tailored for Indian mixed traffic.</p>
          </div>
          <div className="coe-card cap-card">
            <div className="cap-icon-box"><ShieldCheck size={24} /></div>
            <h4 className="cap-card-title">Best Practices & Advisory Guidelines</h4>
            <p className="cap-card-desc">Road safety audit guidelines, work-zone safety manuals, and customized advisory services for urban local bodies and highways departments.</p>
          </div>
          <div className="coe-card cap-card">
            <div className="cap-icon-box"><Users size={24} /></div>
            <h4 className="cap-card-title">Continuing Education & Training</h4>
            <p className="cap-card-desc">Professional technology transfer programs, capacity building workshops, and hands-on software training for municipal and state engineers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PartnerInstitutes = () => {
  return (
    <div className="partners-root">
      <div className="section-intro-card coe-card">
        <h2>Multi-Institutional & Multi-Disciplinary Research Team</h2>
        <p>
          A collaborative team from <strong>eight premier academic and research institutions</strong> across India forms the research backbone of the Centre of Excellence in Urban Transport:
        </p>
      </div>

      <div className="partners-grid">
        {partnerInstitutes.map((inst, index) => (
          <div key={index} className="partner-card coe-card">
            <div className="partner-badge">{inst.code}</div>
            <h3 className="partner-name">{inst.name}</h3>
            <p className="partner-loc"><MapPin size={14} /> {inst.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const GoverningCouncil = () => {
  return (
    <div className="council-root">
      <div className="section-intro-card coe-card">
        <h2>Governing Council & Leadership</h2>
        <p>The Governing Council guides the policy, strategic direction, and multi-agency collaboration of the Centre of Excellence in Urban Transport.</p>
      </div>

      <div className="coe-table-wrapper">
        <table className="coe-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Name & Designation</th>
              <th>Affiliation / Organization</th>
            </tr>
          </thead>
          <tbody>
            {councilMembers.map((member, idx) => (
              <tr key={idx}>
                <td>
                  <span className={`role-badge ${member.role === 'Chairman' ? 'chairman' : ''}`}>{member.role}</span>
                </td>
                <td className="font-semibold">{member.name}</td>
                <td className="text-muted">{member.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="coordinators-block">
        <h3 className="section-title"><Users size={20} /> CoE Coordinators (IIT Madras)</h3>
        <div className="coordinators-grid">
          {coeCoordinators.map((coord, idx) => (
            <div key={idx} className="coordinator-card coe-card">
              <div className="coord-avatar">{coord.name.charAt(4) || 'C'}</div>
              <div>
                <h4>{coord.name}</h4>
                <p>{coord.designation}, {coord.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const IndustryInfo = () => {
  return (
    <div className="industry-root">
      <div className="section-intro-card coe-card">
        <h2>Info for User Agencies, Industry & Sponsors</h2>
        <p>
          The Centre works closely with user agencies, municipal corporations, state transport departments, and industry partners to deliver practical, field-tested urban transport solutions.
        </p>
      </div>

      <div className="stats-row-grid">
        <div className="stat-card coe-card">
          <span className="stat-num">15+</span>
          <span className="stat-label">Years of ITS & Transport Experience</span>
        </div>
        <div className="stat-card coe-card">
          <span className="stat-num">₹5+ Cr</span>
          <span className="stat-label">Completed Research Projects</span>
        </div>
        <div className="stat-card coe-card">
          <span className="stat-num">₹12+ Cr</span>
          <span className="stat-label">Current Active Projects</span>
        </div>
        <div className="stat-card coe-card">
          <span className="stat-num">250+</span>
          <span className="stat-label">Journal & Conference Papers</span>
        </div>
        <div className="stat-card coe-card">
          <span className="stat-num">100+</span>
          <span className="stat-label">Trained M.Tech, M.S. & Ph.D. Graduates</span>
        </div>
      </div>

      <div className="industry-benefits-section">
        <h3 className="section-title"><CheckCircle2 size={20} /> Resources & Benefits for Partner Agencies</h3>
        <ul className="benefits-checklist">
          <li><strong>Data Repository:</strong> Access to comprehensive traffic databases for ITS, road safety, travel demand, and congestion modeling.</li>
          <li><strong>Decision Support Tools:</strong> Microscopic and macroscopic traffic simulation models, dynamic assignment toolboxes, and bus arrival algorithms.</li>
          <li><strong>Custom Advisory Services:</strong> Specialized consulting, corridor traffic evaluations, signal coordination design, and work-zone safety audits.</li>
          <li><strong>Professional Training:</strong> Customized continuing education programs, technology transfer workshops, and software hands-on sessions.</li>
        </ul>
      </div>

      <div className="associations-section coe-card">
        <h3>Associated National & International Agencies</h3>
        <p className="associations-p">
          DST, MoUD, MoRTH, CMDA (Chennai Metropolitan Development Authority), TNUIFSL, TNRDC, DIT, NSF (National Science Foundation, USA), USDOT, VDOT (Virginia Dept. of Transportation), TxDOT (Texas Dept. of Transportation), NYCDOT (New York City Dept. of Transportation).
        </p>
      </div>
    </div>
  );
};

const StudentInfo = () => {
  return (
    <div className="students-root">
      <div className="section-intro-card coe-card">
        <h2>Info for Students & Young Professionals</h2>
        <p>
          The Centre offers an exciting research environment and attractive career opportunities for motivated engineering students, researchers, and young professionals.
        </p>
      </div>

      <div className="student-opportunities-grid">
        <div className="coe-card student-opp-card">
          <div className="opp-icon"><Building2 size={24} /></div>
          <h4>State-of-the-Art Laboratories</h4>
          <p>Access to nation-leading facilities including ITS & Traffic Monitoring Lab, Driving Simulator Lab, CAEV Lab, and LogNiti Freight Logistics Lab with advanced sensors and software.</p>
        </div>
        <div className="coe-card student-opp-card">
          <div className="opp-icon"><GraduationCap size={24} /></div>
          <h4>M.S. & Ph.D. Research Opportunities</h4>
          <p>Pursue cutting-edge postgraduate and doctoral research at IIT Madras while actively contributing to high-impact funded research projects.</p>
        </div>
        <div className="coe-card student-opp-card">
          <div className="opp-icon"><Navigation size={24} /></div>
          <h4>Live Field Projects</h4>
          <p>Work on real-world testbeds in Chennai and South India, impacting daily transit choices for thousands of commuters.</p>
        </div>
        <div className="coe-card student-opp-card">
          <div className="opp-icon"><Award size={24} /></div>
          <h4>Technology Commercialization</h4>
          <p>Hands-on experience developing novel sensors, algorithms, and web tools with assistance for patent filing and commercialization.</p>
        </div>
      </div>
    </div>
  );
};

const Newsletters = () => {
  return (
    <div className="newsletters-root">
      <div className="section-intro-card coe-card">
        <h2>Centre News & Periodical Newsletters</h2>
        <p>Stay updated with quarterly research developments, project progress reports, event summaries, and upcoming training programs.</p>
      </div>

      <div className="newsletters-list">
        <div className="coe-card newsletter-card">
          <Newspaper size={32} className="nl-icon" />
          <div className="nl-info">
            <h3>COE-UT Research Newsletter • Volume 1 & 2</h3>
            <p>Comprehensive overview of ITS sensor evaluation, road safety audit workshops, bus arrival time prediction testbed results, and partner institution updates.</p>
          </div>
          <button type="button" className="coe-btn coe-btn-outline">Download PDF</button>
        </div>
      </div>
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="contacts-root">
      <div className="contacts-grid">
        <div className="coe-card contact-info-card">
          <h3><MapPin size={20} /> Centre Office Address</h3>
          <p className="address-p">
            <strong>Centre of Excellence in Urban Transport</strong><br />
            238B, Transportation Engineering Division<br />
            Building Sciences Block<br />
            Department of Civil Engineering<br />
            Indian Institute of Technology Madras<br />
            Chennai - 600 036, Tamil Nadu, India
          </p>

          <div className="contact-details">
            <p><Phone size={16} /> <strong>Office Phone:</strong> +91-44-2257 5301</p>
            <p><Mail size={16} /> <strong>Email:</strong> coeut@iitm.ac.in</p>
          </div>
        </div>

        <div className="coe-card contact-form-card">
          <h3>Enquiry / Contact Us</h3>
          <form onSubmit={(e) => e.preventDefault()} className="contact-form">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" className="coe-input" />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="name@domain.com" className="coe-input" />
            </div>
            <div className="form-group">
              <label>Organization / Department</label>
              <input type="text" placeholder="Agency / University / Company" className="coe-input" />
            </div>
            <div className="form-group">
              <label>Message / Query</label>
              <textarea rows={4} placeholder="How can the Centre assist your agency or research?" className="coe-input"></textarea>
            </div>
            <button type="submit" className="coe-btn coe-btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Code2, Download, ExternalLink, FileText, BookOpen } from 'lucide-react';

export const SignalSoftware = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const hashTab = location.hash.replace('#', '');
  const [activeTab, setActiveTab] = useState(hashTab === 'signal-code' ? 'signal-code' : 'cyclo-help');

  useEffect(() => {
    const nextTab = hashTab === 'signal-code' ? 'signal-code' : 'cyclo-help';
    setActiveTab(nextTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hashTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate({ pathname: '/software', hash: `#${tab}` });
  };

const pdfDocuments = {
  'cyclo-help': {
    id: 'cyclo-help',
    title: 'CycloHelp Software (Streamlit)',
    icon: BookOpen,
    pdfPath: '/Reports/Signal design code and software cyclo help/Cyclo-Help · Streamlit.pdf',
  },

  'signal-code': {
    id: 'signal-code',
    title: 'Traffic Signal Design Manual',
    icon: Code2,
    pdfPath: '/Reports/Signal design code and software cyclo help/Documentation and code for signal design.pdf',
  },
};

  const currentDoc = pdfDocuments[activeTab];
  const IconComponent = currentDoc.icon;
  const isCycloHelp = activeTab === 'cyclo-help';

  return (
    <div className="software-page">
      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport &bull; IIT Madras</span>
          <h1 className="page-header-title">Signal Design Code &amp; Software Cyclo Help</h1>
        </div>
      </div>

      <main className="container software-main">
        <div className="software-tabbar" role="tablist" aria-label="Signal design software documents">
          <button
            type="button"
            onClick={() => handleTabChange('cyclo-help')}
            className={`software-tab ${activeTab === 'cyclo-help' ? 'active' : ''}`}
            aria-pressed={activeTab === 'cyclo-help'}
          >
            <BookOpen size={18} />
            <span>CycloHelp Software</span>
          </button>
          <button
            type="button"
            onClick={() => handleTabChange('signal-code')}
            className={`software-tab ${activeTab === 'signal-code' ? 'active' : ''}`}
            aria-pressed={activeTab === 'signal-code'}
          >
            <Code2 size={18} />
            <span>Traffic Signal Design Manual</span>
          </button>
        </div>

        <article className="software-document-panel">
          <div className="software-document-header">
            <h2>{currentDoc.title}</h2>
          </div>

          <div className="software-actions">
            <a
              href={isCycloHelp ? 'https://cycloapp.streamlit.app/' : currentDoc.pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="software-action software-action-primary"
            >
              <ExternalLink size={16} /> {isCycloHelp ? 'Software' : 'Open PDF'}
            </a>
            {!isCycloHelp && (
              <a
                href={currentDoc.pdfPath}
                download
                className="software-action software-action-secondary"
              >
                <Download size={16} /> Download
              </a>
            )}
          </div>

          {/* <div className="pdf-viewer-wrap">
            <iframe
              src={`${currentDoc.pdfPath}#view=FitH`}
              title={currentDoc.title}
              loading="lazy"
            />
          </div> */}
        </article>
      </main>
    </div>
  );
};

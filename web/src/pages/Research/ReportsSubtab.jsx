import React from 'react';
import { FileText, Download, BookOpen, Award } from 'lucide-react';
import { synthesisReports, publicationStats } from '../../data/reports';
import { Card } from '../../components/ui/Card';

export const ReportsSubtab = () => {
  return (
    <div className="reports-subtab-root">
      <div className="section-block">
        <h3 className="section-title">
          <FileText size={22} /> Synthesis Reports & Technical Documents
        </h3>
        <p className="section-desc">
          Draft synthesis reports and technical manuals produced by COE-UT research teams across ITS, traffic congestion, and transport planning:
        </p>

        <div className="reports-grid">
          {synthesisReports.map((cat, idx) => (
            <div key={idx} className="coe-card category-card">
              <h4 className="category-title">{cat.category}</h4>
              <ul className="reports-list">
                {cat.reports.map((rep) => (
                  <li key={rep.id} className="report-item">
                    <span className="report-name">{rep.title}</span>
                    <a href={rep.fileUrl} className="coe-btn coe-btn-secondary download-btn">
                      <Download size={13} /> PDF
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Publications & Presentations Section */}
      <div className="section-block">
        <h3 className="section-title">
          <BookOpen size={22} /> Publications and Presentations
        </h3>

        <div className="pub-card coe-card">
          <div className="pub-stats-header">
            <div className="pub-badge-box">
              <span className="pub-big-num">{publicationStats.journalPapers}</span>
              <span className="pub-big-label">Journal Papers</span>
            </div>
            <div className="pub-badge-box">
              <span className="pub-big-num">{publicationStats.conferencePresentations}</span>
              <span className="pub-big-label">Conference Papers</span>
            </div>
          </div>

          <p className="pub-text">
            Researchers at the Centre of Excellence in Urban Transport, IIT Madras have published extensively in leading international and national journals.
          </p>

          <h5 className="sub-title">Featured Journal Outlets:</h5>
          <ul className="journal-list">
            {publicationStats.journals.map((j, idx) => (
              <li key={idx} className="journal-item">
                <Award size={14} className="inline-icon" /> {j}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .reports-subtab-root {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .section-desc {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1rem;
        }
        .reports-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.25rem;
        }
        .category-card {
          border-left: 4px solid var(--coe-gold);
        }
        .category-title {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          color: var(--coe-maroon-dark);
          margin-bottom: 0.85rem;
          border-bottom: 1px dashed var(--coe-border);
          padding-bottom: 0.4rem;
        }
        .reports-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .report-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          font-size: 0.9rem;
          padding: 0.4rem 0;
          border-bottom: 1px solid var(--coe-surface-alt);
        }
        .report-name {
          font-weight: 600;
          color: var(--coe-text);
        }
        .download-btn {
          font-size: 0.775rem;
          padding: 0.35rem 0.65rem;
          flex-shrink: 0;
        }

        .pub-card {
          border-left: 4px solid var(--coe-maroon);
        }
        .pub-stats-header {
          display: flex;
          gap: 2rem;
          margin-bottom: 1rem;
        }
        .pub-badge-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--coe-cream);
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          border: 1px solid var(--coe-gold-light);
        }
        .pub-big-num {
          font-family: var(--font-serif);
          font-size: 2rem;
          font-weight: 800;
          color: var(--coe-maroon-dark);
          line-height: 1;
        }
        .pub-big-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--coe-gold);
          text-transform: uppercase;
        }
        .pub-text {
          font-size: 0.95rem;
          color: var(--coe-text);
          margin-bottom: 1rem;
        }
        .sub-title {
          font-family: var(--font-serif);
          font-size: 1rem;
          color: var(--coe-maroon);
          margin-bottom: 0.5rem;
        }
        .journal-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 0.5rem;
        }
        .journal-item {
          font-size: 0.875rem;
          color: var(--coe-text);
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background-color: var(--coe-bg);
          padding: 0.45rem 0.75rem;
          border-radius: 4px;
        }
        .inline-icon {
          color: var(--coe-gold);
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};

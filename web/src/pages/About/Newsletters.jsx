import React from 'react';
import { Newspaper, Download, FileText } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export const Newsletters = () => {
  const newsletterList = [
    { title: "COE-UT Quarterly Newsletter - Volume 1 Issue 1", date: "2010", size: "1.2 MB" },
    { title: "COE-UT Special Issue on Road Safety Audit", date: "2010", size: "1.8 MB" },
    { title: "ITS Research Highlights Bulletin", date: "2011", size: "950 KB" }
  ];

  return (
    <div className="newsletters-root">
      <h3 className="section-title">
        <Newspaper size={22} /> Center Newsletters & Bulletins
      </h3>
      <p className="newsletters-desc">
        Periodical publications detailing research breakthroughs, lab activities, ongoing projects, and upcoming training schedules at COE-UT.
      </p>

      <div className="newsletter-grid">
        {newsletterList.map((nl, idx) => (
          <Card key={idx} title={nl.title} icon={FileText} badge={nl.date}>
            <div className="nl-body">
              <span className="nl-meta">PDF Document &bull; {nl.size}</span>
              <a href="#" className="coe-btn coe-btn-secondary nl-download-btn">
                <Download size={14} /> Download Newsletter
              </a>
            </div>
          </Card>
        ))}
      </div>

      <style>{`
        .newsletters-root {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .newsletters-desc {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
        }
        .newsletter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.25rem;
        }
        .nl-body {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
          margin-top: 0.75rem;
        }
        .nl-meta {
          font-size: 0.825rem;
          color: var(--coe-text-muted);
        }
        .nl-download-btn {
          width: fit-content;
          font-size: 0.85rem;
        }
      `}</style>
    </div>
  );
};

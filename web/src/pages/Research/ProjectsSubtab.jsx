import React from 'react';
import { FlaskConical } from 'lucide-react';
import { projects } from '../../data/projects';
import { DataTable } from '../../components/ui/DataTable';

export const ProjectsSubtab = () => {
  const columns = [
    {
      header: "#",
      accessorKey: "id",
      width: "50px",
      render: (row) => <span className="coe-badge">{row.id}</span>
    },
    {
      header: "Name of the Project",
      accessorKey: "title",
      width: "40%",
      render: (row) => (
        <div>
          <strong style={{ color: 'var(--coe-maroon-dark)', display: 'block' }}>{row.title}</strong>
          <span className="project-area-tag">{row.area}</span>
        </div>
      )
    },
    {
      header: "Principal Investigator",
      accessorKey: "pi",
      width: "25%",
      render: (row) => <span style={{ fontWeight: 600 }}>{row.pi}</span>
    },
    {
      header: "Institute / University",
      accessorKey: "institute",
      width: "30%",
      render: (row) => <span>{row.institute}</span>
    }
  ];

  return (
    <div className="projects-subtab-root">
      <div className="section-intro">
        <h3 className="section-title">
          <FlaskConical size={22} /> Sponsored Research Projects
        </h3>
        <p className="intro-text">
          The Centre undertakes research, development, education, and technology transfer in Intelligent Transportation Systems (ITS), Urban Transportation Systems Planning, and Congestion Management & Road Safety.
        </p>
      </div>

      <DataTable 
        columns={columns}
        data={projects}
        searchPlaceholder="Filter projects by title, PI, or institute..."
        pageSize={10}
      />

      <style>{`
        .projects-subtab-root {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .intro-text {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1rem;
        }
        .project-area-tag {
          font-size: 0.775rem;
          color: var(--coe-gold);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          display: inline-block;
          margin-top: 0.2rem;
        }
      `}</style>
    </div>
  );
};

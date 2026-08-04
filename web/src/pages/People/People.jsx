import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../../components/layout/Hero';
import { faculty, currentStaff, formerStaff } from '../../data/peopleData';
import { Card } from '../../components/ui/Card';
import { DataTable } from '../../components/ui/DataTable';
import { EmptyState } from '../../components/ui/EmptyState';
import { Users, GraduationCap, UserCheck, Mail, BookOpen } from 'lucide-react';

export const People = () => {
  const location = useLocation();
  const rawHash = location.hash.replace('#', '');
  const activeTab = rawHash || 'faculty';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Staff Table columns
  const staffColumns = [
    {
      header: "Name",
      accessorKey: "name",
      width: "45%",
      render: (row) => <strong style={{ color: 'var(--coe-maroon-dark)' }}>{row.name}</strong>
    },
    {
      header: "Designation / Role",
      accessorKey: "designation",
      width: "55%",
      render: (row) => <span>{row.designation}</span>
    }
  ];

  return (
    <div className="people-page">
      <Hero
        title="People & Researchers"
        subtitle="Faculty coordinators, research scholars, project engineers, and administrative staff"
      />

      <main className="container page-content">
        {activeTab === 'faculty' && (
          <div className="faculty-section">
            <h3 className="section-title">
              <GraduationCap size={22} /> COE-UT Faculty Coordinators & Professors
            </h3>
            <div className="faculty-grid">
              {faculty.map((f) => (
                <Card key={f.id} title={f.name} subtitle={f.designation} icon={GraduationCap}>
                  <div className="faculty-card-body">
                    <p className="faculty-dept">{f.department}</p>
                    <div className="faculty-interests">
                      <strong>Research Interests:</strong>
                      <p>{f.interests}</p>
                    </div>
                    {f.email && (
                      <div className="faculty-email">
                        <Mail size={14} className="inline-icon" />
                        <a href={`mailto:${f.email}`}>{f.email}</a>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'students' && (
          <div className="students-section">
            <h3 className="section-title">
              <Users size={22} /> M.S. & Ph.D Research Scholars
            </h3>
            <p className="section-desc">
              Over 100 M.Tech, M.S., and Ph.D students have been trained at the Centre of Excellence in Urban Transport.
            </p>
            <EmptyState
              title="Research Scholars Directory"
              message="The current roster of enrolled M.S. and Ph.D research scholars is being compiled and will be listed here shortly."
              icon={Users}
            />
          </div>
        )}

        {activeTab === 'staff' && (
          <div className="staff-section">
            {/* Current Staff */}
            <div className="staff-block">
              <h3 className="section-title">
                <UserCheck size={22} /> Current Working Staff
              </h3>
              <div className="current-staff-grid">
                {currentStaff.map((cs, idx) => (
                  <Card key={idx} title={cs.name} subtitle={cs.designation} icon={UserCheck} badge="Active Staff" />
                ))}
              </div>
            </div>

            {/* Former Staff */}
            <div className="staff-block" style={{ marginTop: '2.5rem' }}>
              <h3 className="section-title">
                <Users size={22} /> Former Project Staff & Alumni ({formerStaff.length})
              </h3>
              <p className="section-desc">
                Engineers, project officers, executives, and research associates who contributed to COE-UT projects over the years:
              </p>

              <DataTable
                columns={staffColumns}
                data={formerStaff}
                searchPlaceholder="Search former staff by name or designation..."
                pageSize={15}
              />
            </div>
          </div>
        )}
      </main>

      <style>{`
        .page-content {
          padding-top: 1rem;
        }
        .section-desc {
          font-size: 0.95rem;
          color: var(--coe-text-muted);
          margin-bottom: 1.25rem;
        }
        .faculty-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.25rem;
          margin-top: 1rem;
        }
        .faculty-card-body {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-top: 0.5rem;
        }
        .faculty-dept {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--coe-maroon-dark);
        }
        .faculty-interests {
          font-size: 0.875rem;
          color: var(--coe-text);
          background-color: var(--coe-cream-2);
          padding: 0.5rem 0.75rem;
          border-radius: 4px;
          border: 1px solid var(--coe-border);
        }
        .faculty-interests strong {
          color: var(--coe-maroon);
          display: block;
          font-size: 0.775rem;
          text-transform: uppercase;
        }
        .faculty-email {
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .faculty-email a {
          color: var(--coe-maroon);
          font-weight: 600;
        }
        .current-staff-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.25rem;
          margin-top: 1rem;
        }
        .inline-icon {
          color: var(--coe-gold);
        }
      `}</style>
    </div>
  );
};

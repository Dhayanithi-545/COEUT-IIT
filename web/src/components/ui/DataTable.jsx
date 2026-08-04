import React, { useState, useMemo } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

export const DataTable = ({ 
  columns, 
  data, 
  searchPlaceholder = "Search records...", 
  pageSize = 15,
  enableSearch = true 
}) => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    if (!query.trim()) return data;
    const lowerQuery = query.toLowerCase();
    return data.filter(row => {
      return Object.values(row).some(val => 
        String(val).toLowerCase().includes(lowerQuery)
      );
    });
  }, [data, query]);

  const totalPages = Math.ceil(filteredData.length / pageSize) || 1;
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, currentPage, pageSize]);

  return (
    <div className="datatable-root">
      {enableSearch && (
        <div className="datatable-controls">
          <div className="search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              className="coe-input search-input"
              placeholder={searchPlaceholder}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          <div className="record-count">
            Showing {filteredData.length} entries
          </div>
        </div>
      )}

      <div className="coe-table-wrapper">
        <table className="coe-table">
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} style={{ width: col.width || 'auto' }}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rIdx) => (
                <tr key={rIdx}>
                  {columns.map((col, cIdx) => (
                    <td key={cIdx}>
                      {col.render ? col.render(row) : row[col.accessorKey]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '2rem' }}>
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="pagination-controls">
          <button
            type="button"
            className="coe-btn coe-btn-secondary pag-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          >
            <ChevronLeft size={16} /> Previous
          </button>

          <span className="pagination-info">
            Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
          </span>

          <button
            type="button"
            className="coe-btn coe-btn-secondary pag-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      )}

      <style>{`
        .datatable-root {
          width: 100%;
          margin-bottom: 1.5rem;
        }
        .datatable-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.75rem;
        }
        .search-box {
          position: relative;
          max-width: 380px;
          width: 100%;
        }
        .search-icon {
          position: absolute;
          left: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--coe-text-muted);
        }
        .search-input {
          padding-left: 2.35rem;
        }
        .record-count {
          font-size: 0.85rem;
          color: var(--coe-text-muted);
          font-weight: 600;
        }
        .pagination-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 1rem;
          padding: 0.5rem 0;
        }
        .pagination-info {
          font-size: 0.875rem;
          color: var(--coe-text-muted);
        }
        .pag-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

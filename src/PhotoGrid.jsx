import React, { useState, useEffect, useCallback } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Responsive photo grid with a keyboard-navigable lightbox.
 * Used by the Events subtab and the Gallery tab.
 */
export const PhotoGrid = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback(
    (delta) => setActiveIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, close, step]);

  if (!photos || photos.length === 0) return null;

  const active = isOpen ? photos[activeIndex] : null;

  return (
    <>
      <div className="photo-grid">
        {photos.map((photo, idx) => (
          <button
            key={photo.id}
            type="button"
            className="photo-thumb"
            onClick={() => setActiveIndex(idx)}
            aria-label={`Open photograph ${idx + 1} of ${photos.length}`}
          >
            <img src={photo.src} alt={photo.caption} loading="lazy" />
            <span className="photo-thumb__overlay">
              <Maximize2 size={18} />
            </span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="lightbox-backdrop" onClick={close} role="dialog" aria-modal="true">
          <div className="lightbox-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="lightbox-close-btn" onClick={close} aria-label="Close">
              <X size={18} />
            </button>

            <img src={active.src} alt={active.caption} className="lightbox-img" />

            <div className="lightbox-caption-box flex items-center justify-between gap-4">
              <button
                type="button"
                className="coe-btn coe-btn-outline coe-btn-sm"
                onClick={() => step(-1)}
                aria-label="Previous photograph"
              >
                <ChevronLeft size={16} /> Previous
              </button>
              <span className="lightbox-desc">
                {activeIndex + 1} / {photos.length}
              </span>
              <button
                type="button"
                className="coe-btn coe-btn-outline coe-btn-sm"
                onClick={() => step(1)}
                aria-label="Next photograph"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

import React, { useEffect } from 'react';
import { Images } from 'lucide-react';
import { PhotoGrid } from './PhotoGrid';
import { eventPhotos } from './data';

export const Gallery = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="gallery-page">
      <div className="page-header-strip">
        <div className="container">
          <span className="header-badge">Center of Excellence in Urban Transport • IIT Madras</span>
          <h1 className="page-header-title">Gallery</h1>
        </div>
      </div>

      <main className="container" style={{ paddingBottom: '4rem', paddingTop: '2rem' }}>
        <h3 className="section-title">
          <Images size={20} /> National Workshop on Recent Advances in Pavement &amp; Traffic Engineering,
          December 2023
        </h3>
        <PhotoGrid photos={eventPhotos} />
      </main>
    </div>
  );
};

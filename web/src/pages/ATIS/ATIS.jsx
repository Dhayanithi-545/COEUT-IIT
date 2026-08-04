import React from 'react';
import { Hero } from '../../components/layout/Hero';
import { EmptyState } from '../../components/ui/EmptyState';
import { Navigation } from 'lucide-react';

export const ATIS = () => {
  return (
    <div className="atis-page">
      <Hero 
        title="Advanced Traveler Information System (ATIS)" 
        subtitle="Real-time traveler information, departure time planning, and transit prediction models" 
      />
      <main className="container page-content">
        <EmptyState 
          title="ATIS Portal Module Under Development"
          message="The Advanced Traveler Information System portal for Indian cities is currently being integrated into this web system. Real-time arrival predictions and departure planning tools will be accessible here."
          icon={Navigation}
        />
      </main>
      <style>{`.page-content { padding-top: 2rem; }`}</style>
    </div>
  );
};

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Pages
import { About } from './pages/About/About';
import { Research } from './pages/Research/Research';
import { Labs } from './pages/Labs/Labs';
import { People } from './pages/People/People';
import { Downloads } from './pages/Downloads/Downloads';

import './styles/global.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/people" element={<People />} />
            <Route path="/downloads" element={<Downloads />} />
            {/* Redirect legacy standalone routes to consolidated sections */}
            <Route path="/gallery" element={<Navigate to="/downloads#gallery" replace />} />
            <Route path="/atis" element={<Navigate to="/research#atis" replace />} />
            <Route path="/driving-simulator-lab" element={<Navigate to="/labs#simulator-lab" replace />} />
            <Route path="/connected-intelligent-vehicle-lab" element={<Navigate to="/labs#caev-lab" replace />} />
            <Route path="/cyclo-help" element={<Navigate to="/downloads#software" replace />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

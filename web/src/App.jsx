import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { About } from './About';
import { Research } from './Research';
import { Labs } from './Labs';
import { People } from './People';
import { Downloads } from './Downloads';

import './styles.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/people" element={<People />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

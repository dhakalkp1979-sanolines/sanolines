import React from 'react';
import './Portugal.css';

export default function Portugal({ onNavigate }) {
  return (
    <div className="portugal-page">
      {/* 1. STUNNING DEEP BLUE HEADER */}
      <nav className="sanolines-navbar">
        <div className="nav-container">
          <div className="brand-box">
            <div className="brand-logo">S</div>
            <div className="brand-text">
              <span className="brand-title">SANOLINES</span>
              <span className="brand-subtitle">Global Information & Services</span>
            </div>
          </div>
          <div className="nav-menu">
            <button onClick={() => onNavigate('Home')}>Home</button>
            <button className="active-tab" onClick={() => onNavigate('Portugal')}>Portugal</button>
            <button onClick={() => onNavigate('Services')}>Services</button>
            <button onClick={() => onNavigate('Tools')}>Tools</button>
          </div>
        </div>
      </nav>

      {/* 2. RICH HERO SECTION WITH GRADIENT */}
      <header className="portugal-hero-section">
        <div className="hero-max-width">
          <span className="hero-tag">Official Country Directory</span>
          <h1>Find useful information and official services in Portugal.</h1>
          <p>Sanolines helps people find official government portals, employment resources, immigration information, healthcare, free legal support and other essential services.</p>
          
          <div className="hero-search-group">
            <input type="text" placeholder="Search Portugal services, NIF, AIMA, healthcare, housing..." />
            <button>Search Portal</button>
          </div>
        </div>
      </header>

      {/* 3. PREMIUM CONTENT CARD GRID */}
      <main className="portugal-body-content">
        <div className="content-grid-wrapper">
          <div className="premium-feature-card">
            <div className="card-header-flex">
              <div>
                <span className="card-badge">EU MEMBER STATE</span>
                <h2>Portugal Information & Services</h2>
              </div>
              <img 
                src="https://flagcdn.com/w80/pt.png" 
                alt="Portugal Flag" 
                className="country-flag-badge" 
              />
            </div>
            
            <p className="card-lead-text">
              Find useful information and trusted official resources for everyday life, legal procedures, and bureaucracy in Portugal.
            </p>

            <div className="services-tags-row">
              <span>Government Services</span>
              <span>Immigration & AIMA</span>
              <span>Employment & IEFP</span>
              <span>Healthcare & SNS</span>
              <span>Housing & Leases</span>
              <span>Free Legal Aid</span>
            </div>

            <button className="premium-explore-btn" onClick={() => onNavigate('Services')}>
              Explore Portugal Services &rarr;
            </button>
          </div>
        </div>
      </main>

      {/* 4. PROFESSIONAL FOOTER */}
      <footer className="sanolines-footer">
        <div className="footer-max">
          <div className="footer-info">
            <h3>SANOLINES</h3>
            <p>Reliable global information & official service directories designed to guide everyday people securely without dead-ends.</p>
          </div>
          <div className="footer-links">
            <button onClick={() => onNavigate('Home')}>Home</button>
            <button onClick={() => onNavigate('Portugal')}>Portugal</button>
            <button onClick={() => onNavigate('Services')}>Services</button>
            <button onClick={() => onNavigate('Tools')}>Tools</button>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2026 Sanolines Global. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

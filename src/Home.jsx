import React, { useState } from "react";
import "./Home.css";

export default function Home({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setMobileMenuOpen(false);
    onNavigate(tab);
  };

  return (
    <div className="sanolines-home-page">

      {/* =========================
          PREMIUM NAVIGATION
      ========================== */}
      <nav className="sanolines-navbar">
        <div className="nav-container">

          <div
            className="brand-box"
            onClick={() => handleNavClick("Home")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleNavClick("Home");
            }}
          >
            <div className="brand-logo">S</div>

            <div className="brand-text">
              <span className="brand-title">SANOLINES</span>
              <span className="brand-subtitle">
                Portugal Information & Services
              </span>
            </div>
          </div>

          {/* Desktop / Mobile Navigation */}
          <div className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
            <button
              className="active-tab"
              onClick={() => handleNavClick("Home")}
            >
              Home
            </button>

            <button onClick={() => handleNavClick("Portugal")}>
              Portugal
            </button>

            <button onClick={() => handleNavClick("Services")}>
              Services
            </button>

            <button onClick={() => handleNavClick("Tools")}>
              Tools
            </button>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>


      {/* =========================
          MAIN LISBON HERO
      ========================== */}
      <header
        className="home-hero-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2000&q=85')",
        }}
      >

        <div className="hero-overlay"></div>

        <div className="hero-content-box">

          <span className="hero-badge">
            🇵🇹 PORTUGAL INFORMATION PORTAL
          </span>

          <h1>
            Find useful information and official services in Portugal.
          </h1>

          <p>
            Sanolines helps people find official government portals,
            employment resources, immigration information, healthcare,
            housing, legal support and other useful services in Portugal.
          </p>

          <div className="hero-search-wrapper">
            <input
              type="text"
              placeholder="Search Portugal services, NIF, AIMA, healthcare..."
              aria-label="Search Portugal services"
            />

            <button onClick={() => handleNavClick("Services")}>
              Search
            </button>
          </div>

          <div className="hero-trust-line">
            <span>Official sources</span>
            <span>•</span>
            <span>Useful information</span>
            <span>•</span>
            <span>Portugal focused</span>
          </div>

        </div>
      </header>


      {/* =========================
          PORTUGAL INTRODUCTION
      ========================== */}
      <main className="home-main-container">

        <section className="section-title-group">

          <span className="home-section-label">
            SANOLINES PORTUGAL
          </span>

          <h2>
            Information that helps you find the right place.
          </h2>

          <p>
            Explore Portuguese official services and trusted resources
            through one simple information directory.
          </p>

        </section>


        {/* =========================
            PREMIUM PORTUGAL CARD
        ========================== */}
        <section
          className="featured-country-card"
          onClick={() => handleNavClick("Portugal")}
        >

          <div className="card-image-side">

            <img
              src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85"
              alt="Lisbon Portugal"
            />

            <div className="image-badge">

              <img
                src="https://flagcdn.com/w40/pt.png"
                alt="Portugal Flag"
              />

              <span>Portugal</span>

            </div>

          </div>


          <div className="card-content-side">

            <span className="sub-tag">
              PORTUGAL INFORMATION HUB
            </span>

            <h3>
              Portugal Information & Services
            </h3>

            <p>
              Find useful information and trusted official resources
              for everyday life, administration, work, immigration,
              healthcare, housing and more in Portugal.
            </p>


            <div className="card-highlights">

              <span>
                ✓ Government & Official Services
              </span>

              <span>
                ✓ Immigration & Employment
              </span>

              <span>
                ✓ Healthcare & Social Support
              </span>

              <span>
                ✓ Housing & Legal Information
              </span>

            </div>


            <button
              className="explore-card-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleNavClick("Portugal");
              }}
            >
              Explore Portugal
              <span aria-hidden="true"> →</span>
            </button>

          </div>

        </section>


        {/* =========================
            WHAT YOU CAN FIND
        ========================== */}
        <section className="home-services-preview">

          <div className="section-title-group">

            <span className="home-section-label">
              EXPLORE
            </span>

            <h2>
              What you can find in Portugal
            </h2>

            <p>
              Browse practical information across important areas of
              everyday life and public services.
            </p>

          </div>


          <div className="home-service-grid">

            <div className="home-service-item">
              <div className="home-service-icon">01</div>
              <div>
                <h3>Government</h3>
                <p>
                  Official Portuguese public services and government portals.
                </p>
              </div>
            </div>


            <div className="home-service-item">
              <div className="home-service-icon">02</div>
              <div>
                <h3>Immigration</h3>
                <p>
                  AIMA, residence permits, visas and immigration resources.
                </p>
              </div>
            </div>


            <div className="home-service-item">
              <div className="home-service-icon">03</div>
              <div>
                <h3>Jobs</h3>
                <p>
                  Employment resources, IEFP and useful job information.
                </p>
              </div>
            </div>


            <div className="home-service-item">
              <div className="home-service-icon">04</div>
              <div>
                <h3>Healthcare</h3>
                <p>
                  SNS and other healthcare information and resources.
                </p>
              </div>
            </div>


            <div className="home-service-item">
              <div className="home-service-icon">05</div>
              <div>
                <h3>Housing</h3>
                <p>
                  Housing, rental and accommodation information.
                </p>
              </div>
            </div>


            <div className="home-service-item">
              <div className="home-service-icon">06</div>
              <div>
                <h3>Legal Support</h3>
                <p>
                  Legal aid and trusted organisations offering support.
                </p>
              </div>
            </div>

          </div>


          <div className="home-services-button-wrapper">

            <button
              className="home-view-services-btn"
              onClick={() => handleNavClick("Services")}
            >
              View All Portugal Services →
            </button>

          </div>

        </section>


        {/* =========================
            DIRECTORY NOTICE
        ========================== */}
        <section className="home-directory-notice">

          <div className="notice-icon">
            i
          </div>

          <div>

            <h3>
              Sanolines is an information directory
            </h3>

            <p>
              Sanolines does not directly provide government,
              immigration, medical, legal, employment or other
              professional services. We provide useful information
              and links to official or trusted organisations so
              visitors can contact the relevant service themselves.
            </p>

          </div>

        </section>

      </main>


      {/* =========================
          PROFESSIONAL FOOTER
      ========================== */}
      <footer className="sanolines-footer">

        <div className="footer-max">

          <div className="footer-info">

            <div className="footer-brand">
              <div className="footer-logo">S</div>

              <div>
                <h3>SANOLINES</h3>
                <span>
                  Portugal Information & Services
                </span>
              </div>
            </div>

            <p>
              A practical information directory helping people
              find official and trusted resources in Portugal.
            </p>

          </div>


          <div className="footer-links">

            <button onClick={() => handleNavClick("Home")}>
              Home
            </button>

            <button onClick={() => handleNavClick("Portugal")}>
              Portugal
            </button>

            <button onClick={() => handleNavClick("Services")}>
              Services
            </button>

            <button onClick={() => handleNavClick("Tools")}>
              Tools
            </button>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Sanolines Global. All rights reserved.
          </span>

          <span>
            Portugal Information Directory
          </span>

        </div>

      </footer>

    </div>
  );
}

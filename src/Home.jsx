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
          NAVIGATION
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

            {/* PROFESSIONAL SANOLINES LOGO */}
            <div className="brand-logo" aria-label="Sanolines logo">
              <svg
                viewBox="0 0 48 48"
                role="img"
                aria-hidden="true"
              >
                <path
                  d="M35.5 10.5
                     C31.5 7.5 25.5 7 20.5 8.5
                     C15 10 11 13.5 11 18
                     C11 22.5 14.5 24.5 21.5 26
                     L28 27.5
                     C33.5 28.8 36.5 31 36.5 35
                     C36.5 39.5 31.5 42 25.5 42
                     C19.5 42 14.5 40 11 36.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M36 11
                     C33 14 29.5 16 24.5 17.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="brand-text">
              <span className="brand-title">SANOLINES</span>

              <span className="brand-subtitle">
                Portugal Information & Services
              </span>
            </div>

          </div>


          {/* NAVIGATION MENU */}
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


          {/* MOBILE MENU */}
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
          HERO
      ========================== */}
      <header
        className="home-hero-section"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2200&q=90')",
        }}
      >

        <div className="hero-overlay"></div>

        <div className="hero-content-box">

          <span className="hero-badge">
            PORTUGAL INFORMATION PORTAL
          </span>

          <h1>
            Find your way in Portugal.
          </h1>

          <p>
            Discover official information, useful resources and trusted
            services for everyday life in Portugal — from government and
            immigration to jobs, healthcare, housing and community support.
          </p>

          <div className="hero-cta-group">

            <button
              className="primary-action-btn"
              onClick={() => handleNavClick("Portugal")}
            >
              Explore Portugal
              <span>→</span>
            </button>

            <button
              className="secondary-action-btn"
              onClick={() => handleNavClick("Services")}
            >
              View Services
            </button>

          </div>

        </div>
      </header>


      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main className="home-main-container">

        {/* INTRODUCTION */}
        <section className="intro-section">

          <span className="home-section-label">
            SANOLINES
          </span>

          <h2>
            Portugal, made easier to navigate.
          </h2>

          <p>
            Sanolines brings useful Portuguese information together in one
            place, helping visitors find the official organisation,
            service or resource they need.
          </p>

        </section>


        {/* =========================
            THREE MAIN AREAS
        ========================== */}
        <section className="programs-section">

          <div className="programs-grid">

            <article
              className="program-card"
              onClick={() => handleNavClick("Services")}
            >
              <div className="program-number">
                01
              </div>

              <span className="program-label">
                COMMUNITY
              </span>

              <h3>
                Community & Social Support
              </h3>

              <p>
                Find community organisations, social support resources,
                migrant assistance and useful local services in Portugal.
              </p>

              <span className="card-link">
                Explore support →
              </span>
            </article>


            <article
              className="program-card"
              onClick={() => handleNavClick("Services")}
            >
              <div className="program-number">
                02
              </div>

              <span className="program-label">
                EDUCATION
              </span>

              <h3>
                Education & Integration
              </h3>

              <p>
                Find education resources, language information, training
                opportunities and useful integration services.
              </p>

              <span className="card-link">
                Explore education →
              </span>
            </article>


            <article
              className="program-card"
              onClick={() => handleNavClick("Services")}
            >
              <div className="program-number">
                03
              </div>

              <span className="program-label">
                EMPLOYMENT
              </span>

              <h3>
                Jobs & Employment
              </h3>

              <p>
                Find employment services, job agencies, training resources
                and useful information for working in Portugal.
              </p>

              <span className="card-link">
                Explore employment →
              </span>
            </article>

          </div>

        </section>


        {/* =========================
            PORTUGAL FEATURE
        ========================== */}
        <section
          className="featured-country-card"
          onClick={() => handleNavClick("Portugal")}
        >

          <div className="card-image-side">

            <img
              src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1200&q=90"
              alt="Lisbon Portugal street and architecture"
            />

            <div className="image-badge">

              <img
                src="https://flagcdn.com/w40/pt.png"
                alt="Portugal flag"
              />

              <span>
                Portugal
              </span>

            </div>

          </div>


          <div className="card-content-side">

            <span className="sub-tag">
              PORTUGAL INFORMATION HUB
            </span>

            <h3>
              Everything starts here.
            </h3>

            <p>
              Explore Portuguese government portals, immigration information,
              employment resources, healthcare, housing, education, legal
              support and other essential services.
            </p>

            <div className="card-highlights">

              <span>
                ✓ Official government resources
              </span>

              <span>
                ✓ Immigration & residency information
              </span>

              <span>
                ✓ Jobs & employment resources
              </span>

              <span>
                ✓ Healthcare & social support
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
              <span>→</span>
            </button>

          </div>

        </section>


        {/* =========================
            SERVICES
        ========================== */}
        <section className="services-introduction">

          <div className="services-introduction-text">

            <span className="home-section-label">
              PORTUGAL SERVICES
            </span>

            <h2>
              One place to start your search.
            </h2>

            <p>
              Browse practical information across the areas that matter
              most in everyday life in Portugal.
            </p>

          </div>


          <button
            className="home-view-services-btn"
            onClick={() => handleNavClick("Services")}
          >
            View all services →
          </button>

        </section>


        {/* =========================
            SERVICE CATEGORIES
        ========================== */}
        <section className="service-category-grid">

          <div className="service-category">
            <span>01</span>
            <h3>Government</h3>
            <p>
              Official public services and administration.
            </p>
          </div>

          <div className="service-category">
            <span>02</span>
            <h3>Immigration</h3>
            <p>
              Visa, residency and AIMA information.
            </p>
          </div>

          <div className="service-category">
            <span>03</span>
            <h3>Jobs</h3>
            <p>
              Employment services and job resources.
            </p>
          </div>

          <div className="service-category">
            <span>04</span>
            <h3>Healthcare</h3>
            <p>
              SNS and healthcare resources.
            </p>
          </div>

          <div className="service-category">
            <span>05</span>
            <h3>Housing</h3>
            <p>
              Housing and rental information.
            </p>
          </div>

          <div className="service-category">
            <span>06</span>
            <h3>Legal Support</h3>
            <p>
              Legal aid and trusted support organisations.
            </p>
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

            <span className="notice-label">
              IMPORTANT
            </span>

            <h3>
              Sanolines is an information directory.
            </h3>

            <p>
              Sanolines does not directly provide government, immigration,
              medical, legal or employment services. We provide useful
              information and links to official or trusted organisations
              so visitors can find and contact the appropriate service.
            </p>

          </div>

        </section>

      </main>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="sanolines-footer">

        <div className="footer-max">

          <div className="footer-info">

            <div className="footer-brand">

              {/* SAME PROFESSIONAL LOGO */}
              <div className="footer-logo" aria-label="Sanolines logo">

                <svg
                  viewBox="0 0 48 48"
                  role="img"
                  aria-hidden="true"
                >
                  <path
                    d="M35.5 10.5
                       C31.5 7.5 25.5 7 20.5 8.5
                       C15 10 11 13.5 11 18
                       C11 22.5 14.5 24.5 21.5 26
                       L28 27.5
                       C33.5 28.8 36.5 31 36.5 35
                       C36.5 39.5 31.5 42 25.5 42
                       C19.5 42 14.5 40 11 36.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M36 11
                       C33 14 29.5 16 24.5 17.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />

                </svg>

              </div>


              <div>

                <h3>
                  SANOLINES
                </h3>

                <span>
                  Portugal Information & Services
                </span>

              </div>

            </div>


            <p>
              A practical information directory helping people find
              official and trusted resources in Portugal.
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

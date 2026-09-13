import React, { useState } from "react";
import "./App.css";

const globalServices = [
  "Government & Public Services",
  "Immigration & Visas",
  "Employment & Career Resources",
  "Global Banking & Finance",
  "Taxation & Compliance",
  "Healthcare & Medical Care",
  "Education & Student Support",
  "Transportation & Driver Licensing",
  "Emergency & Safety Services",
  "Travel & Tourism",
  "Housing & Real Estate",
  "Directory Contacts",
  "Legal Aid & Public Defenders",
  "Migrant & Refugee Services",
  "Community Organizations",
  "Social Welfare & Benefits",
  "Family & Child Support",
  "Consumer Rights & Protection",
  "Accessibility Services",
  "Emergency Relief & Shelter",
];

const featuredServices = [
  "Government & Public Services",
  "Immigration & Visas",
  "Employment & Career Resources",
  "Global Banking & Finance",
  "Healthcare & Medical Care",
  "Legal Aid & Public Defenders",
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [search, setSearch] = useState("");

  const filteredServices = globalServices.filter((service) =>
    service.toLowerCase().includes(search.toLowerCase())
  );

  const goToServices = () => {
    document
      .getElementById("global-services")
      ?.scrollIntoView({ behavior: "smooth" });

    setActiveTab("Services");
  };

  return (
    <div className="home-page">

      {/* NAVIGATION */}
      <nav className="site-nav">
        <div className="nav-inner">

          <div className="nav-brand-container">
            <div className="nav-logo">
              S
            </div>

            <div className="nav-brand-text">
              <strong>
                SANOLINES
              </strong>
              <span>
                Global Information & Services
              </span>
            </div>
          </div>

          <div className="nav-links">
            <button
              className={activeTab === "Home" ? "active" : ""}
              onClick={() => {
                setActiveTab("Home");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </button>

            <button
              className={activeTab === "Services" ? "active" : ""}
              onClick={goToServices}
            >
              Services
            </button>

            <button
              className={activeTab === "Tools" ? "active" : ""}
              onClick={() => {
                setActiveTab("Tools");
                document
                  .getElementById("tools")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Tools
            </button>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <header className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">
            INFORMATION & SERVICES DIRECTORY
          </span>

          <h1>
            Find useful information, trusted resources
            and official services.
          </h1>

          <p>
            Sanolines helps people find government information,
            employment resources, immigration guidance,
            healthcare, legal support, housing, education,
            and other useful services worldwide.
          </p>

          <div className="hero-search-bar">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search services, immigration, jobs, healthcare..."
              aria-label="Search Sanolines services"
            />

            <button
              type="button"
              onClick={goToServices}
            >
              Search
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="main-container">

        {/* FEATURED SERVICES */}
        <section className="services-showcase">
          <div className="showcase-title">
            <h2>
              Essential Resources
            </h2>
            <p>
              Start with some of the most useful
              services and information categories.
            </p>
          </div>

          <div className="services-pill-grid">
            {featuredServices.map((service, index) => (
              <button
                className="service-pill"
                key={index}
                type="button"
                onClick={goToServices}
              >
                <span className="pill-dot"></span>
                {service}
              </button>
            ))}
          </div>
        </section>

        {/* ALL SERVICES */}
        <section
          id="global-services"
          className="services-directory"
        >
          <div className="section-header-row">
            <div>
              <span className="continent-tag">
                20 SERVICE CATEGORIES
              </span>

              <h2>
                All Services
              </h2>

              <p>
                Browse information categories
                available through the Sanolines
                global directory.
              </p>
            </div>
          </div>

          <div className="continents-grid">
            {filteredServices.map((service, index) => (
              <div
                className="continent-card"
                key={service}
              >
                <div className="continent-top">
                  <span className="continent-tag">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {service}
                  </h3>
                </div>

                <p>
                  Find useful information and
                  trusted resources for{" "}
                  {service.toLowerCase()}.
                </p>

                <div className="continent-action">
                  Explore service
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="no-results">
              No matching service found.
            </div>
          )}
        </section>

        {/* DIRECTORY NOTICE */}
        <section className="directory-notice">
          <h2>
            Sanolines Global
          </h2>

          <p>
            Sanolines is an information-sharing
            directory. We do not directly provide
            government, legal, medical, immigration,
            employment, housing or other services.
            We provide useful information and links
            to official or trusted organizations so
            visitors can contact the relevant service
            themselves.
          </p>
        </section>

        {/* TOOLS */}
        <section
          id="tools"
          className="tools-section"
        >
          <div className="section-header-row">
            <div>
              <span className="continent-tag">
                TOOLS
              </span>

              <h2>
                Useful Tools
              </h2>

              <p>
                Useful online tools and calculators
                will be added here.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-footer-inner">
          <div>
            <strong>
              SANOLINES
            </strong>
            <p>
              Global information and official
              service directories for everyday
              people.
            </p>
          </div>

          <div className="footer-links-group">
            <button
              type="button"
              onClick={() => {
                setActiveTab("Home");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </button>

            <button
              type="button"
              onClick={goToServices}
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => {
                setActiveTab("Tools");
                document
                  .getElementById("tools")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Tools
            </button>
          </div>
        </div>

        <div className="home-footer-bottom">
          &copy; 2026 Sanolines Global. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

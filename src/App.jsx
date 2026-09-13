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

// Color variations matching your visual style reference
const cardColors = [
  "#6b4685", // Purple
  "#8c2447", // Magenta / Crimson
  "#4d3c78", // Deep Slate Violet
  "#7a2d58", // Dark Pink / Berry
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

        {/* ALL SERVICES */}
        <section
          id="global-services"
          className="services-directory"
        >
          <div className="continents-grid">
            {filteredServices.map((service, index) => {
              const bgColour = cardColors[index % cardColors.length];
              return (
                <div
                  className="continent-card"
                  key={service}
                  style={{
                    backgroundColor: bgColour,
                    color: "#ffffff",
                    borderRadius: "12px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                    border: "none",
                  }}
                >
                  <div className="continent-top">
                    <span
                      style={{
                        background: "rgba(255, 255, 255, 0.2)",
                        color: "#ffffff",
                        padding: "4px 8px",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        fontWeight: "600",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3
                      style={{
                        color: "#ffffff",
                        fontSize: "1.35rem",
                        marginTop: "16px",
                        marginBottom: "12px",
                        fontWeight: "700",
                        letterSpacing: "0.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {service}
                    </h3>
                  </div>

                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.85)",
                      fontSize: "0.95rem",
                      marginBottom: "20px",
                      lineHeight: "1.4",
                    }}
                  >
                    Information about {service.toLowerCase()} and official resources.
                  </p>

                  <div>
                    <button
                      type="button"
                      style={{
                        backgroundColor: "#ffffff",
                        color: "#222222",
                        border: "none",
                        padding: "8px 18px",
                        borderRadius: "6px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        fontSize: "0.85rem",
                        letterSpacing: "0.5px",
                        transition: "background 0.2s",
                      }}
                    >
                      LEARN MORE
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="no-results">
              No matching service found.
            </div>
          )}
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

        {/* DISCLAIMER */}
        <section className="directory-notice">
          <h2>
            Disclaimer
          </h2>

          <p style={{ marginBottom: "1rem" }}>
            Sanolines Global is an independent information-sharing directory.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            We do not directly provide government, immigration, legal, medical, employment, housing, financial, or other professional services.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Our website helps visitors find useful information, official websites, trusted organizations, public services, and relevant resources. Where possible, we provide links to official or trusted sources so visitors can contact the appropriate organization directly.
          </p>

          <p style={{ marginBottom: "1rem" }}>
            Information on Sanolines may change over time. Visitors should always verify important requirements, procedures, fees, deadlines, and eligibility directly with the relevant official organization before taking action.
          </p>

          <p>
            Sanolines Global is not a government agency and is not affiliated with any government authority unless specifically stated.
          </p>
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

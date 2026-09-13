import React, { useState } from "react";
import "./App.css";

const portugalServices = [
  "Government & Official Services",
  "Immigration & Visa",
  "Jobs & Employment",
  "Money & Banking",
  "Taxes",
  "Healthcare",
  "Education",
  "Transport & Driving",
  "Emergency Services",
  "Travel",
  "Housing",
  "Useful Contacts",
  "Legal Aid & Free Lawyers",
  "Migrant & Refugee Support",
  "Associations & Community Help",
  "Social Security & Benefits",
  "Family & Children Support",
  "Consumer Protection",
  "Disability & Accessibility Support",
  "Food, Shelter & Basic Assistance",
];

const featuredServices = [
  "Government & Official Services",
  "Immigration & Visa",
  "Jobs & Employment",
  "Money & Banking",
  "Healthcare & SNS",
  "Legal Aid & Free Lawyers",
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [search, setSearch] = useState("");

  const filteredServices = portugalServices.filter((service) =>
    service.toLowerCase().includes(search.toLowerCase())
  );

  const goToServices = () => {
    document
      .getElementById("portugal-services")
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
              className={
                activeTab === "Home" ? "active" : ""
              }
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
              className={
                activeTab === "Countries" ? "active" : ""
              }
              onClick={() => {
                setActiveTab("Countries");
                document
                  .getElementById("portugal")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Portugal
            </button>

            <button
              className={
                activeTab === "Services" ? "active" : ""
              }
              onClick={goToServices}
            >
              Services
            </button>

            <button
              className={
                activeTab === "Tools" ? "active" : ""
              }
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
            PORTUGAL INFORMATION PORTAL
          </span>

          <h1>
            Find useful information and
            official services in Portugal.
          </h1>

          <p>
            Sanolines helps people find official
            government portals, employment resources,
            immigration information, healthcare,
            legal support and other useful services.
          </p>

          <div className="hero-search-bar">

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search Portugal services, immigration, jobs, NIF..."
            />

            <button onClick={goToServices}>
              Search
            </button>

          </div>

        </div>

      </header>

      {/* MAIN */}

      <main className="main-container">

        {/* PORTUGAL */}

        <section
          id="portugal"
          className="portugal-section"
        >

          <div className="section-header-row">

            <div>

              <span className="continent-tag">
                PORTUGAL
              </span>

              <h2>
                Portugal Information & Services
              </h2>

              <p>
                Find useful information and trusted
                official resources for everyday life
                in Portugal.
              </p>

            </div>

          </div>

          <div className="portugal-card">

            <div className="portugal-card-content">

              <div className="portugal-flag">
                🇵🇹
              </div>

              <div>

                <h3>
                  Explore Portugal
                </h3>

                <p>
                  Government services, immigration,
                  employment, healthcare, housing,
                  education, legal support and more.
                </p>

                <button
                  className="continent-action"
                  onClick={goToServices}
                >
                  Explore Portugal
                  <span>&rarr;</span>
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* FEATURED SERVICES */}

        <section className="services-showcase">

          <div className="showcase-title">

            <h2>
              Essential Portugal Resources
            </h2>

            <p>
              Start with some of the most useful
              services and information categories.
            </p>

          </div>

          <div className="services-pill-grid">

            {featuredServices.map(
              (service, index) => (

                <button
                  className="service-pill"
                  key={index}
                  onClick={goToServices}
                >

                  <span className="pill-dot"></span>

                  {service}

                </button>

              )
            )}

          </div>

        </section>

        {/* ALL SERVICES */}

        <section
          id="portugal-services"
          className="services-directory"
        >

          <div className="section-header-row">

            <div>

              <span className="continent-tag">
                20 SERVICE CATEGORIES
              </span>

              <h2>
                Portugal Services
              </h2>

              <p>
                Browse information categories
                available through the Sanolines
                Portugal directory.
              </p>

            </div>

          </div>

          <div className="continents-grid">

            {filteredServices.map(
              (service, index) => (

                <div
                  className="continent-card"
                  key={service}
                >

                  <div className="continent-top">

                    <span className="continent-tag">
                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}
                    </span>

                    <h3>
                      {service}
                    </h3>

                  </div>

                  <p>
                    Find useful information and
                    trusted resources for{" "}
                    {service.toLowerCase()} in
                    Portugal.
                  </p>

                  <div className="continent-action">
                    Explore service
                    <span>&rarr;</span>
                  </div>

                </div>

              )
            )}

          </div>

          {filteredServices.length === 0 && (
            <div className="no-results">
              No Portugal service found.
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

        {/* TOOLS ANCHOR */}

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
              onClick={() => {
                setActiveTab("Countries");
                document
                  .getElementById("portugal")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Portugal
            </button>

            <button onClick={goToServices}>
              Services
            </button>

            <button
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

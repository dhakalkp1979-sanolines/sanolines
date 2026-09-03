import React from "react";
import "./Home.css";

function Home() {
  const continents = [
    "Asia",
    "Africa",
    "Europe",
    "North America",
    "South America",
    "Australia & Oceania",
    "Antarctica",
  ];

  const services = [
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
    "Calculators & Tools",
  ];

  return (
    <div className="app">

      {/* Header */}
      <header className="header">
        <div className="logo">

          <div className="logo-icon">
            S
          </div>

          <div className="logo-text">
            <div className="logo-name">
              SANO LINES
            </div>

            <div className="logo-tagline">
              Global Information & Services
            </div>
          </div>

        </div>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#continents">Countries</a>
          <a href="#services">Services</a>
          <a href="#tools">Tools</a>
        </nav>
      </header>


      {/* Hero */}
      <main>

        <section className="hero" id="home">

          <div className="hero-content">

            <div className="hero-label">
              GLOBAL INFORMATION PLATFORM
            </div>

            <h1>
              Information & Services,
              <br />
              Made Simple
            </h1>

            <p>
              Find useful information, official services and
              practical tools from countries around the world.
            </p>

            <div className="search-box">

              <input
                type="text"
                placeholder="Search countries, services, jobs, visas..."
              />

              <button>
                Search
              </button>

            </div>

          </div>

        </section>


        {/* Continents */}
        <section className="section" id="continents">

          <div className="section-heading">
            <div className="section-label">
              EXPLORE THE WORLD
            </div>

            <h2>
              Explore by Continent
            </h2>

            <p>
              Select a continent to discover countries,
              services and useful information.
            </p>
          </div>


          <div className="continent-grid">

            {continents.map((continent, index) => (

              <div
                className="continent-card"
                key={continent}
              >

                <div className="continent-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>
                  {continent}
                </h3>

                <p>
                  Explore countries and information
                </p>

                <span className="card-arrow">
                  →
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* Services */}
        <section
          className="section services-section"
          id="services"
        >

          <div className="section-heading">

            <div className="section-label">
              INFORMATION & SERVICES
            </div>

            <h2>
              What Can You Find?
            </h2>

            <p>
              Practical information organized in one simple
              global platform.
            </p>

          </div>


          <div className="service-grid">

            {services.map((service) => (

              <div
                className="service-card"
                key={service}
              >

                <div className="service-icon">
                  •
                </div>

                <div className="service-content">

                  <h3>
                    {service}
                  </h3>

                  <p>
                    Information and useful resources
                  </p>

                </div>

                <span className="service-arrow">
                  →
                </span>

              </div>

            ))}

          </div>

        </section>


        {/* Tools Preview */}
        <section
          className="tools-section"
          id="tools"
        >

          <div className="tools-content">

            <div className="section-label">
              PRACTICAL TOOLS
            </div>

            <h2>
              Useful Calculators & Tools
            </h2>

            <p>
              Simple tools designed to help you calculate,
              compare and understand everyday information.
            </p>

            <button className="tools-button">
              Explore Tools →
            </button>

          </div>

        </section>

      </main>


      {/* Footer */}
      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <div className="footer-logo">
              S
            </div>

            <div>

              <strong>
                SANO LINES
              </strong>

              <p>
                Global Information & Services
              </p>

            </div>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#continents">
              Countries
            </a>

            <a href="#services">
              Services
            </a>

            <a href="#tools">
              Tools
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Sanolines. All rights reserved.
          </span>

          <span>
            Information made simple.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Home;

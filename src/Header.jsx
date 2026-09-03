import React, { useState } from "react";
import "./Home.css";

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

function Home() {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) {
      alert("Please enter something to search.");
      return;
    }

    alert("Search: " + search);
  }

  return (
    <div className="home-page">
      <header className="header">
        <div className="logo">
          <div className="logo-icon">S</div>

          <div>
            <div className="logo-name">SANO LINES</div>
            <div className="logo-tagline">
              Global Information & Services
            </div>
          </div>
        </div>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#countries">Countries</a>
          <a href="#services">Services</a>
          <a href="#tools">Tools</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-label">
            GLOBAL INFORMATION PLATFORM
          </div>

          <h1>Information & Services, Made Simple</h1>

          <p>
            Find useful information, official services, jobs, travel,
            healthcare, education and practical resources from around
            the world.
          </p>

          <form className="search-box" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search countries, services or information..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button type="submit">Search</button>
          </form>
        </section>

        <section className="section" id="countries">
          <h2>Explore by Continent</h2>

          <p className="section-intro">
            Choose a continent and discover countries, services and
            useful information.
          </p>

          <div className="continent-grid">
            {continents.map((continent, index) => (
              <div className="continent-card" key={continent}>
                <div className="continent-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3>{continent}</h3>

                <p>
                  Explore countries and information from {continent}.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="services">
          <h2>Information & Services</h2>

          <p className="section-intro">
            Important topics gathered together in one simple platform.
          </p>

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card" key={service}>
                <h3>{service}</h3>

                <p>
                  Find useful information, resources and services.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section tools-section" id="tools">
          <div className="tools-container">
            <h2>Practical Tools</h2>

            <p className="section-intro">
              Simple tools to help with everyday calculations and
              information.
            </p>

            <div className="tools-grid">
              <div className="tool-card">
                <h3>Financial Calculators</h3>
                <p>
                  Salary, percentage and other useful calculations.
                </p>
              </div>

              <div className="tool-card">
                <h3>Travel Tools</h3>
                <p>
                  Useful tools for travel and planning.
                </p>
              </div>

              <div className="tool-card">
                <h3>Everyday Tools</h3>
                <p>
                  Simple tools for everyday needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div>
            <h3>SANO LINES</h3>

            <p>
              A global information and services platform making useful
              information easier to find.
            </p>
          </div>

          <div>
            <h3>Explore</h3>

            <a href="#countries">Countries</a>
            <a href="#services">Services</a>
            <a href="#tools">Tools</a>
          </div>

          <div>
            <h3>Information</h3>

            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#tools">Tools</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Sanolines. Global Information & Services.
        </div>
      </footer>
    </div>
  );
}

export default Home;

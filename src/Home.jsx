import React, { useState } from "react";
import "./Home.css";
import countries from "./data/countries";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);

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

  const continentCountries = selectedContinent
    ? countries.filter(
        (item) => item.continent === selectedContinent
      )
    : [];

  const filteredCountries = countries.filter((item) => {
    const text =
      `${item.country} ${item.continent} ${item.famousFor}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const result = document.getElementById("search-results");

    if (result) {
      result.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">S</div>

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


      {/* MAIN */}
      <main>

        {/* HERO */}
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

            <form
              className="search-box"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search countries, services, jobs, visas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <button type="submit">
                Search
              </button>
            </form>

          </div>
        </section>


        {/* CONTINENTS */}
        <section
          className="section"
          id="continents"
        >
          <div className="section-heading">

            <div className="section-label">
              EXPLORE THE WORLD
            </div>

            <h2>
              Explore by Continent
            </h2>

            <p>
              Select a continent to discover countries,
              famous places and useful services.
            </p>

          </div>


          <div className="continent-grid">

            {continents.map((continent, index) => {

              const count = countries.filter(
                (item) =>
                  item.continent === continent
              ).length;

              return (
                <button
                  className={`continent-card ${
                    selectedContinent === continent
                      ? "active"
                      : ""
                  }`}
                  key={continent}
                  onClick={() =>
                    setSelectedContinent(continent)
                  }
                >

                  <div className="continent-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3>
                    {continent}
                  </h3>

                  <p>
                    {count} countries and regions
                  </p>

                  <span className="card-arrow">
                    →
                  </span>

                </button>
              );
            })}

          </div>
        </section>


        {/* COUNTRIES */}
        {selectedContinent && (
          <section
            className="section country-section"
          >

            <div className="section-heading">

              <div className="section-label">
                {selectedContinent.toUpperCase()}
              </div>

              <h2>
                Countries & Information
              </h2>

              <p>
                Explore countries, what they are famous
                for, and useful services.
              </p>

            </div>


            <div className="country-grid">

              {continentCountries.map((item) => (

                <div
                  className="country-card"
                  key={item.country}
                >

                  <div className="country-card-top">
                    <span className="country-continent">
                      {item.continent}
                    </span>
                  </div>

                  <h3>
                    {item.country}
                  </h3>

                  <div className="famous-label">
                    FAMOUS FOR
                  </div>

                  <p className="famous-text">
                    {item.famousFor}
                  </p>

                  <div className="country-topics">

                    {item.topics
                      .slice(0, 6)
                      .map((topic) => (

                        <span
                          className="topic-tag"
                          key={topic}
                        >
                          {topic}
                        </span>

                      ))}

                  </div>

                  <button
                    className="country-button"
                    onClick={() => {
                      setSelectedContinent(
                        item.continent
                      );
                    }}
                  >
                    Explore {item.country} →
                  </button>

                </div>

              ))}

            </div>

          </section>
        )}


        {/* SEARCH RESULTS */}
        {search.trim() && (
          <section
            className="section search-results-section"
            id="search-results"
          >

            <div className="section-heading">

              <div className="section-label">
                SEARCH
              </div>

              <h2>
                Search Results
              </h2>

              <p>
                Countries matching "{search}"
              </p>

            </div>


            <div className="country-grid">

              {filteredCountries.length > 0 ? (

                filteredCountries.map((item) => (

                  <div
                    className="country-card"
                    key={item.country}
                  >

                    <div className="country-card-top">
                      <span className="country-continent">
                        {item.continent}
                      </span>
                    </div>

                    <h3>
                      {item.country}
                    </h3>

                    <div className="famous-label">
                      FAMOUS FOR
                    </div>

                    <p className="famous-text">
                      {item.famousFor}
                    </p>

                    <button
                      className="country-button"
                      onClick={() => {
                        setSelectedContinent(
                          item.continent
                        );

                        setSearch("");

                        setTimeout(() => {
                          document
                            .getElementById("continents")
                            ?.scrollIntoView({
                              behavior: "smooth",
                            });
                        }, 100);
                      }}
                    >
                      Explore {item.country} →
                    </button>

                  </div>

                ))

              ) : (

                <div className="no-results">

                  <h3>
                    No country found
                  </h3>

                  <p>
                    Try searching for another country.
                  </p>

                </div>

              )}

            </div>

          </section>
        )}


        {/* SERVICES */}
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
              Practical information organized in one
              simple global platform.
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


        {/* TOOLS */}
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


      {/* FOOTER */}
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

            <a href="./disclaimer.html">
              Disclaimer
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

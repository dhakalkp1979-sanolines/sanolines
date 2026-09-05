import React, { useState } from "react";
import "./Home.css";
import countries from "./data/countries";
import CountryPage from "./pages/CountryPage";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const continents = [
    {
      name: "Asia",
      image:
        "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Africa",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Europe",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "North America",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "South America",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Australia & Oceania",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Antarctica",
      image:
        "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1200&q=85",
    },
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

  function handleServiceClick(service) {
    if (service === "Calculators & Tools") {
      document.getElementById("tools")?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    document.getElementById("continents")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  if (selectedCountry) {
    return (
      <CountryPage
        country={selectedCountry.country}
        continent={selectedCountry.continent}
        famousFor={selectedCountry.famousFor}
        topics={selectedCountry.topics}
      />
    );
  }

  return (
    <div className="app">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="header">
        <a href="#home" className="logo">
          <div className="logo-icon">
            S
          </div>

          <div className="logo-text">
            <div className="logo-name">
              SANOLINES
            </div>

            <div className="logo-tagline">
              Global Information & Services
            </div>
          </div>
        </a>

        <nav className="navigation">
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
        </nav>
      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main>

        {/* ===================================================
            NEW PROFESSIONAL HERO
        =================================================== */}

        <section className="home-hero" id="home">
          <div className="home-hero-inner">

            <span className="hero-label">
              SANOLINES GLOBAL
            </span>

            <h1>
              Information and services
              <br />
              for the world
            </h1>

            <p>
              Find useful information about government services,
              immigration, jobs, healthcare, education, travel,
              housing and more.
            </p>

            <form
              className="home-search"
              onSubmit={handleSearch}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                />

                <path d="m20 20-4-4" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedContinent(null);
                }}
                placeholder="Search for a country or service..."
                aria-label="Search for a country or service"
              />

              {search && (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

              <button
                type="submit"
                className="hero-search-button"
              >
                Search
              </button>
            </form>

          </div>
        </section>


        {/* ===================================================
            CONTINENTS
        =================================================== */}

        <section
          className="section continents-section"
          id="continents"
        >

          <div className="section-heading">

            <div className="section-label">
              EXPLORE THE WORLD
            </div>

            <h2>
              Discover by Continent
            </h2>

            <p>
              Choose a region and explore countries,
              services and useful information.
            </p>

          </div>


          <div className="continent-grid">

            {continents.map((continent, index) => {

              const count = countries.filter(
                (item) =>
                  item.continent === continent.name
              ).length;

              return (
                <button
                  className={`continent-card ${
                    selectedContinent === continent.name
                      ? "active"
                      : ""
                  }`}
                  key={continent.name}
                  type="button"
                  onClick={() => {
                    setSelectedContinent(
                      continent.name
                    );

                    setTimeout(() => {
                      const section =
                        document.getElementById(
                          "country-results"
                        );

                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }, 50);
                  }}
                >

                  <div
                    className="continent-image"
                    style={{
                      backgroundImage:
                        `url("${continent.image}")`,
                    }}
                  >

                    <div className="continent-image-overlay" />

                    <span className="continent-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="continent-arrow">
                      →
                    </span>

                  </div>

                  <div className="continent-info">

                    <h3>
                      {continent.name}
                    </h3>

                    <p>
                      {count} countries and regions
                    </p>

                  </div>

                </button>
              );
            })}

          </div>

        </section>


        {/* ===================================================
            COUNTRIES
        =================================================== */}

        {selectedContinent && (

          <section
            className="section country-section"
            id="country-results"
          >

            <div className="section-heading">

              <div className="section-label">
                {selectedContinent.toUpperCase()}
              </div>

              <h2>
                Countries & Information
              </h2>

              <p>
                Select a country to explore its
                information and services.
              </p>

              <button
                type="button"
                className="service-back-button"
                onClick={() =>
                  setSelectedContinent(null)
                }
              >
                Clear selection
              </button>

            </div>


            <div className="country-grid">

              {continentCountries.map((item) => (

                <article
                  className="country-card"
                  key={item.country}
                >

                  <div className="country-card-top">

                    <span className="country-continent">
                      {item.continent}
                    </span>

                    {item.flag && (
                      <img
                        className="country-flag"
                        src={item.flag}
                        alt={`${item.country} flag`}
                        loading="lazy"
                      />
                    )}

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
                      ?.slice(0, 5)
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
                    type="button"
                    className="country-button"
                    onClick={() =>
                      setSelectedCountry(item)
                    }
                  >
                    Explore country
                    <span>
                      →
                    </span>
                  </button>

                </article>

              ))}

            </div>

          </section>

        )}


        {/* ===================================================
            SEARCH RESULTS
        =================================================== */}

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
                Results matching "{search}"
              </p>

            </div>


            <div className="country-grid">

              {filteredCountries.length > 0 ? (

                filteredCountries.map((item) => (

                  <article
                    className="country-card"
                    key={item.country}
                  >

                    <div className="country-card-top">

                      <span className="country-continent">
                        {item.continent}
                      </span>

                      {item.flag && (
                        <img
                          className="country-flag"
                          src={item.flag}
                          alt={`${item.country} flag`}
                          loading="lazy"
                        />
                      )}

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
                      type="button"
                      className="country-button"
                      onClick={() => {
                        setSelectedCountry(item);
                        setSearch("");
                      }}
                    >
                      Explore country
                      <span>
                        →
                      </span>
                    </button>

                  </article>

                ))

              ) : (

                <div className="no-results">

                  <div className="no-results-icon">
                    ?
                  </div>

                  <h3>
                    No country found
                  </h3>

                  <p>
                    Try another country or search term.
                  </p>

                </div>

              )}

            </div>

          </section>

        )}


        {/* ===================================================
            SERVICES
        =================================================== */}

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
              Important everyday information organized
              in one simple platform.
            </p>

          </div>


          <div className="service-grid">

            {services.map((service, index) => (

              <button
                className="service-card"
                key={service}
                type="button"
                onClick={() =>
                  handleServiceClick(service)
                }
              >

                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>


                <div className="service-content">

                  <h3>
                    {service}
                  </h3>

                  <p>
                    Find useful information and
                    relevant resources.
                  </p>

                </div>


                <span className="service-arrow">
                  →
                </span>

              </button>

            ))}

          </div>

        </section>


        {/* ===================================================
            TOOLS
        =================================================== */}

        <section
          className="tools-section"
          id="tools"
        >

          <div className="tools-inner">

            <div className="tools-copy">

              <div className="section-label">
                PRACTICAL TOOLS
              </div>

              <h2>
                Useful Calculators
                <br />
                & Everyday Tools
              </h2>

              <p>
                Simple tools to help you calculate,
                compare and understand everyday
                information.
              </p>

              <button
                className="tools-button"
                type="button"
                onClick={() =>
                  window.location.href = "/tools"
                }
              >
                Explore Tools
                <span>
                  →
                </span>
              </button>

            </div>


            <div className="tools-visual">

              <div className="tool-circle">
                %
              </div>

              <div className="tool-card-small tool-one">
                Salary
              </div>

              <div className="tool-card-small tool-two">
                Tax
              </div>

              <div className="tool-card-small tool-three">
                Currency
              </div>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="footer">

        <div className="footer-inner">

          <div className="footer-brand">

            <div className="footer-logo">
              S
            </div>

            <div>

              <strong>
                SANOLINES
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

            <a href="./privacy.html">
              Privacy Policy
            </a>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Sanolines. All rights reserved.
          </span>

          <span>
            Global information made simple.
          </span>

        </div>

      </footer>

    </div>
  );
}

export default Home;

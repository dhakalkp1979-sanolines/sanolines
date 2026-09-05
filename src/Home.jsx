import React, { useState } from "react";
import "./Home.css";
import countries from "./data/countries";
import CountryPage from "./pages/CountryPage";

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

function Home() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const continentCountries = selectedContinent
    ? countries.filter(function (item) {
        return item.continent === selectedContinent;
      })
    : [];

  const filteredCountries = countries.filter(function (item) {
    const text = String(
      item.country + " " + item.continent + " " + item.famousFor
    ).toLowerCase();

    return text.includes(search.toLowerCase());
  });

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim()) {
      setSelectedContinent(null);
    }
  }

  function handleCountryClick(country) {
    setSelectedCountry(country);
    setSelectedService(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleBackHome() {
    setSelectedCountry(null);
    setSelectedService(null);
    setSelectedContinent(null);
    setSearch("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  if (selectedCountry) {
    return (
      <CountryPage
        country={selectedCountry}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        onBack={handleBackHome}
      />
    );
  }

  return (
    <div className="sanolines-home">
      {/* =========================================
          HEADER
      ========================================= */}

      <header className="home-header">
        <button
          className="home-brand"
          onClick={handleBackHome}
          aria-label="Sanolines Home"
        >
          <span className="home-brand-mark">S</span>

          <span className="home-brand-text">
            <strong>SANOLINES</strong>
            <small>GLOBAL INFORMATION & SERVICES</small>
          </span>
        </button>

        <nav className="home-nav">
          <button onClick={handleBackHome}>Home</button>

          <button
            onClick={function () {
              document
                .getElementById("continents")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Countries
          </button>

          <button
            onClick={function () {
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Services
          </button>

          <button
            onClick={function () {
              document
                .getElementById("tools")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Tools
          </button>
        </nav>
      </header>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="home-hero">
        <div className="home-hero-overlay"></div>

        <div className="home-hero-content">
          <div className="hero-badge">
            GLOBAL INFORMATION PLATFORM
          </div>

          <h1>Information and services for the world</h1>

          <p>
            Find useful information, official services, immigration,
            jobs, healthcare, education, travel and more for countries
            around the world.
          </p>

          <form className="hero-search" onSubmit={handleSearch}>
            <span className="search-icon">⌕</span>

            <input
              type="text"
              value={search}
              onChange={function (e) {
                setSearch(e.target.value);
              }}
              placeholder="Search a country..."
              aria-label="Search a country"
            />

            <button type="submit">Search</button>
          </form>

          <div className="hero-note">
            Simple information • Useful services • Worldwide
          </div>
        </div>
      </section>

      {/* =========================================
          MAIN
      ========================================= */}

      <main className="home-main">
        {/* =========================================
            SEARCH RESULTS
        ========================================= */}

        {search.trim() && (
          <section className="home-section search-results-section">
            <div className="section-heading">
              <div>
                <span className="section-label">SEARCH</span>

                <h2>Countries matching your search</h2>

                <p>
                  {filteredCountries.length} country
                  {filteredCountries.length !== 1 ? "ies" : ""}
                  found
                </p>
              </div>

              <button
                className="clear-search"
                onClick={function () {
                  setSearch("");
                }}
              >
                Clear search
              </button>
            </div>

            {filteredCountries.length > 0 ? (
              <div className="country-grid">
                {filteredCountries.map(function (item) {
                  return (
                    <button
                      className="country-card"
                      key={item.country}
                      onClick={function () {
                        handleCountryClick(item);
                      }}
                    >
                      <div className="country-card-inner">
                        <img
                          className="country-flag"
                          src={item.flag}
                          alt={item.country + " flag"}
                          onError={function (e) {
                            e.currentTarget.style.display = "none";
                          }}
                        />

                        <span className="country-continent">
                          {item.continent}
                        </span>

                        <strong>{item.country}</strong>

                        <span className="country-famous">
                          {item.famousFor}
                        </span>

                        <span className="country-action">
                          Explore country →
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="empty-state">
                <h3>No country found</h3>
                <p>
                  Try searching for another country or continent.
                </p>
              </div>
            )}
          </section>
        )}

        {/* =========================================
            CONTINENTS
        ========================================= */}

        {!search.trim() && (
          <section className="home-section" id="continents">
            <div className="section-heading">
              <div>
                <span className="section-label">EXPLORE THE WORLD</span>

                <h2>Explore by continent</h2>

                <p>
                  Select a continent to discover countries and
                  useful services.
                </p>
              </div>
            </div>

            <div className="continent-grid">
              {continents.map(function (continent) {
                const count = countries.filter(function (item) {
                  return item.continent === continent.name;
                }).length;

                return (
                  <button
                    className={
                      "continent-card " +
                      (selectedContinent === continent.name
                        ? "active"
                        : "")
                    }
                    key={continent.name}
                    onClick={function () {
                      setSelectedContinent(continent.name);

                      setTimeout(function () {
                        document
                          .getElementById("country-list")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }, 50);
                    }}
                  >
                    <img
                      src={continent.image}
                      alt={continent.name}
                      className="continent-image"
                    />

                    <span className="continent-overlay"></span>

                    <span className="continent-content">
                      <strong>{continent.name}</strong>

                      <span>
                        {count} {count === 1 ? "country" : "countries"}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================
            COUNTRY LIST
        ========================================= */}

        {!search.trim() && selectedContinent && (
          <section
            className="home-section country-list-section"
            id="country-list"
          >
            <div className="section-heading">
              <div>
                <span className="section-label">
                  {selectedContinent}
                </span>

                <h2>Countries & information</h2>

                <p>
                  Select a country to explore its information and
                  services.
                </p>
              </div>

              <button
                className="clear-search"
                onClick={function () {
                  setSelectedContinent(null);
                }}
              >
                All continents
              </button>
            </div>

            <div className="country-grid">
              {continentCountries.map(function (item) {
                return (
                  <button
                    className="country-card"
                    key={item.country}
                    onClick={function () {
                      handleCountryClick(item);
                    }}
                  >
                    <div className="country-card-inner">
                      <img
                        className="country-flag"
                        src={item.flag}
                        alt={item.country + " flag"}
                        onError={function (e) {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      <span className="country-continent">
                        {item.continent}
                      </span>

                      <strong>{item.country}</strong>

                      <span className="country-famous">
                        {item.famousFor}
                      </span>

                      <span className="country-action">
                        Explore country →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================
            SERVICES
        ========================================= */}

        {!search.trim() && !selectedContinent && (
          <section className="home-section" id="services">
            <div className="section-heading">
              <div>
                <span className="section-label">SERVICES</span>

                <h2>Core professional topics</h2>

                <p>
                  Quickly find the type of information you need.
                </p>
              </div>
            </div>

            <div className="services-grid">
              {services.map(function (service) {
                return (
                  <button
                    className="service-card"
                    key={service}
                    onClick={function () {
                      setSelectedService(service);
                    }}
                  >
                    <span className="service-icon">
                      →
                    </span>

                    <span>{service}</span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* =========================================
            TOOLS
        ========================================= */}

        {!search.trim() && !selectedContinent && (
          <section className="home-section tools-section" id="tools">
            <div className="tools-box">
              <div>
                <span className="section-label">TOOLS</span>

                <h2>Useful tools for everyday life</h2>

                <p>
                  Calculators and practical tools will be available
                  here as Sanolines grows.
                </p>
              </div>

              <button
                onClick={function () {
                  setSelectedService("Calculators & Tools");
                }}
              >
                Explore tools →
              </button>
            </div>
          </section>
        )}
      </main>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="home-footer">
        <div className="footer-brand">
          <span className="home-brand-mark">S</span>

          <div>
            <strong>SANOLINES</strong>
            <p>Global Information & Services</p>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Sanolines. Information and
          services for the world.
        </p>
      </footer>
    </div>
  );
}

export default Home;

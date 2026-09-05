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

  const filteredCountries = countries.filter((item) => {
    const searchText = search.toLowerCase().trim();

    if (!searchText) {
      return false;
    }

    return (
      item.country?.toLowerCase().includes(searchText) ||
      item.continent?.toLowerCase().includes(searchText) ||
      item.famousFor?.toLowerCase().includes(searchText) ||
      item.topics?.some((topic) =>
        topic.toLowerCase().includes(searchText)
      )
    );
  });

  const selectedCountries = selectedContinent
    ? countries.filter(
        (item) => item.continent === selectedContinent
      )
    : [];

  const continentSearchPlaceholder = {
    Asia: "Search Asian country...",
    Africa: "Search African country...",
    Europe: "Search European country...",
    "North America": "Search North American country...",
    "South America": "Search South American country...",
    "Australia & Oceania":
      "Search Australian or Oceanian country...",
    Antarctica: "Search Antarctic country...",
  };

  const getCountryFlag = (item) => {
    if (item.flag) {
      return item.flag;
    }

    if (item.flagCode) {
      return `https://flagcdn.io/w320/${item.flagCode}.png`;
    }

    return "";
  };

  const openCountry = (country) => {
    setSelectedCountry(country);
    setSearch("");
  };

  const selectContinent = (continentName) => {
    setSelectedContinent(continentName);
    setSearch("");

    setTimeout(() => {
      document
        .getElementById("country-results")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    document
      .getElementById("search-results")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const handleServiceClick = (service) => {
    if (service === "Calculators & Tools") {
      window.location.href = "/tools";
      return;
    }

    document
      .getElementById("services")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

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
    <div className="home-page">

      {/* =====================================================
          PROFESSIONAL NAVIGATION
      ===================================================== */}

      <header className="top-navigation">
        <div className="navigation-inner">

          <button
            type="button"
            className="brand"
            onClick={() => {
              setSelectedContinent(null);
              setSearch("");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <span className="brand-name">
              SANOLINES
            </span>

            <span className="brand-tagline">
              Global Information & Services
            </span>
          </button>


          <nav className="main-navigation">

            <button
              type="button"
              className="nav-link active"
              onClick={() => {
                setSelectedContinent(null);
                setSearch("");

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
              className="nav-link"
              onClick={() => {
                document
                  .getElementById("continents")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Countries
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Services
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => {
                document
                  .getElementById("tools")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Tools
            </button>

          </nav>

        </div>
      </header>


      {/* =====================================================
          PROFESSIONAL HERO
      ===================================================== */}

      <section className="professional-hero">

        <div className="professional-hero-inner">

          <div className="hero-badge">
            <span className="hero-badge-dot"></span>

            <span>
              Sanolines Global Directory
            </span>
          </div>


          <h1>
            Information and services
            <br className="desktop-break" />
            {" "}for the world
          </h1>


          <p>
            Find useful information about government
            services, immigration, jobs, healthcare,
            education, travel, housing and more.
          </p>


          <form
            className="professional-search"
            onSubmit={handleSearch}
          >

            <div className="professional-search-icon">

              <svg
                width="21"
                height="21"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>

            </div>


            <input
              type="text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setSelectedContinent(null);
              }}
              placeholder="Search for a country, city, or service..."
              aria-label="Search for a country, city, or service"
            />


            {search && (
              <button
                type="button"
                className="professional-search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}


            <button
              type="submit"
              className="professional-search-button"
            >
              Search
            </button>

          </form>

        </div>

      </section>


      {/* =====================================================
          CONTINENTS
      ===================================================== */}

      <section
        className="home-section continents-section"
        id="continents"
      >

        <div className="section-heading">

          <span className="section-label">
            EXPLORE THE WORLD
          </span>

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

            const countryCount = countries.filter(
              (item) =>
                item.continent === continent.name
            ).length;

            return (
              <button
                key={continent.name}
                type="button"
                className={`continent-card ${
                  selectedContinent === continent.name
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  selectContinent(continent.name)
                }
              >

                <img
                  src={continent.image}
                  alt={continent.name}
                  className="continent-image"
                  loading="lazy"
                />

                <div className="continent-overlay"></div>


                <div className="continent-content">

                  <span className="continent-label">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {continent.name}
                  </h3>

                  <p>
                    {countryCount} countries
                    <span>→</span>
                  </p>

                </div>

              </button>
            );
          })}

        </div>

      </section>


      {/* =====================================================
          SELECTED CONTINENT COUNTRIES
      ===================================================== */}

      {selectedContinent && (

        <section
          className="home-section selected-continent-section"
          id="country-results"
        >

          <div className="country-section-header">

            <div>

              <span className="section-label">
                {selectedContinent}
              </span>

              <h2>
                Countries & Information
              </h2>

              <p>
                Select a country to explore its
                information and services.
              </p>

            </div>


            <div className="country-filter">

              <input
                type="text"
                placeholder={
                  continentSearchPlaceholder[
                    selectedContinent
                  ] || "Search country..."
                }
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                value={search}
              />

            </div>

          </div>


          {selectedCountries.filter((item) => {

            if (!search.trim()) {
              return true;
            }

            const text =
              `${item.country} ${item.famousFor} ${
                item.topics?.join(" ") || ""
              }`.toLowerCase();

            return text.includes(
              search.toLowerCase()
            );

          }).length > 0 ? (

            <div className="country-grid">

              {selectedCountries
                .filter((item) => {

                  if (!search.trim()) {
                    return true;
                  }

                  const text =
                    `${item.country} ${
                      item.famousFor
                    } ${
                      item.topics?.join(" ") || ""
                    }`.toLowerCase();

                  return text.includes(
                    search.toLowerCase()
                  );

                })
                .map((item) => {

                  const flag = getCountryFlag(item);

                  return (
                    <article
                      className="country-card"
                      key={item.country}
                    >

                      <div className="country-card-main">

                        <div className="country-card-top">

                          <span className="country-continent">
                            {item.continent}
                          </span>

                          {flag ? (
                            <img
                              className="country-flag"
                              src={flag}
                              alt={`${item.country} flag`}
                              loading="lazy"
                            />
                          ) : (
                            <span className="country-flag-placeholder">
                              🌐
                            </span>
                          )}

                        </div>


                        <h3>
                          {item.country}
                        </h3>


                        <p>
                          {item.famousFor}
                        </p>

                      </div>


                      <div className="country-card-footer">

                        <span>
                          Explore country
                        </span>

                        <span className="country-arrow">
                          →
                        </span>

                      </div>


                      <button
                        type="button"
                        className="country-card-overlay-button"
                        aria-label={`Explore ${item.country}`}
                        onClick={() =>
                          openCountry(item)
                        }
                      />

                    </article>
                  );
                })}

            </div>

          ) : (

            <div className="empty-search">

              <h3>
                No country found
              </h3>

              <p>
                Try another country name.
              </p>

            </div>

          )}

        </section>

      )}


      {/* =====================================================
          GLOBAL SEARCH RESULTS
      ===================================================== */}

      {search.trim() && !selectedContinent && (

        <section
          className="home-section search-results-section"
          id="search-results"
        >

          <div className="section-heading">

            <span className="section-label">
              SEARCH RESULTS
            </span>

            <h2>
              Results for "{search}"
            </h2>

            <p>
              Countries and information matching
              your search.
            </p>

          </div>


          {filteredCountries.length > 0 ? (

            <div className="country-grid">

              {filteredCountries.map((item) => {

                const flag = getCountryFlag(item);

                return (
                  <article
                    className="country-card"
                    key={`${item.continent}-${item.country}`}
                  >

                    <div className="country-card-main">

                      <div className="country-card-top">

                        <span className="country-continent">
                          {item.continent}
                        </span>

                        {flag ? (
                          <img
                            className="country-flag"
                            src={flag}
                            alt={`${item.country} flag`}
                            loading="lazy"
                          />
                        ) : (
                          <span className="country-flag-placeholder">
                            🌐
                          </span>
                        )}

                      </div>


                      <h3>
                        {item.country}
                      </h3>


                      <p>
                        {item.famousFor}
                      </p>

                    </div>


                    <div className="country-card-footer">

                      <span>
                        Explore country
                      </span>

                      <span className="country-arrow">
                        →
                      </span>

                    </div>


                    <button
                      type="button"
                      className="country-card-overlay-button"
                      aria-label={`Explore ${item.country}`}
                      onClick={() =>
                        openCountry(item)
                      }
                    />

                  </article>
                );
              })}

            </div>

          ) : (

            <div className="empty-search">

              <h3>
                No results found
              </h3>

              <p>
                Try searching for a country,
                service or topic.
              </p>

            </div>

          )}

        </section>

      )}


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="home-section services-section"
        id="services"
      >

        <div className="section-heading">

          <span className="section-label">
            INFORMATION & SERVICES
          </span>

          <h2>
            What Can You Find?
          </h2>

          <p>
            Important everyday information organized
            in one simple global platform.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => (

            <button
              key={service}
              type="button"
              className="service-card"
              onClick={() =>
                handleServiceClick(service)
              }
            >

              <div className="service-card-left">

                <span className="service-icon">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>
                  {service}
                </span>

              </div>


              <span className="service-arrow">
                →
              </span>

            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          TOOLS
      ===================================================== */}

      <section
        className="home-section tools-section"
        id="tools"
      >

        <div className="tools-box">

          <div className="tools-content">

            <span className="section-label">
              PRACTICAL TOOLS
            </span>

            <h2>
              Calculators & Everyday Tools
            </h2>

            <p>
              Simple tools to help you calculate,
              compare and understand everyday
              information.
            </p>

          </div>


          <div className="tools-action">

            <button
              type="button"
              onClick={() =>
                (window.location.href = "/tools")
              }
            >
              Explore Tools

              <span className="tools-arrow">
                →
              </span>

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="home-footer">

        <div className="home-footer-inner">

          <div>

            <strong>
              SANOLINES
            </strong>

            <p>
              Global Information & Services
            </p>

          </div>


          <div className="footer-links">

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Home
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("continents")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Countries
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Services
            </button>

            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("tools")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Tools
            </button>

            <a href="/privacy.html">
              Privacy Policy
            </a>

            <a href="/disclaimer.html">
              Disclaimer
            </a>

          </div>

        </div>


        <div className="home-footer-bottom">

          © 2026 Sanolines. All rights reserved.

        </div>

      </footer>

    </div>
  );
}

export default Home;

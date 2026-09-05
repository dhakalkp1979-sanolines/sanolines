import React, { useMemo, useState } from "react";
import "./Home.css";
import countries from "./data/countries";
import CountryPage from "./pages/CountryPage";

/* =========================================
   CONTINENTS
========================================= */

const continents = [
  {
    name: "Asia",
    image:
      "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Africa",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Europe",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "North America",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "South America",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Australia & Oceania",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Antarctica",
    image:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1200&q=80",
  },
];

/* =========================================
   SERVICES
========================================= */

const services = [
  {
    name: "Government & Official Services",
    type: "government",
  },
  {
    name: "Immigration & Visa",
    type: "immigration",
  },
  {
    name: "Jobs & Employment",
    type: "jobs",
  },
  {
    name: "Money & Banking",
    type: "money",
  },
  {
    name: "Taxes",
    type: "taxes",
  },
  {
    name: "Healthcare",
    type: "health",
  },
  {
    name: "Education",
    type: "education",
  },
  {
    name: "Transport & Driving",
    type: "transport",
  },
  {
    name: "Emergency Services",
    type: "emergency",
  },
  {
    name: "Travel",
    type: "travel",
  },
  {
    name: "Housing",
    type: "housing",
  },
  {
    name: "Useful Contacts",
    type: "contacts",
  },
  {
    name: "Calculators & Tools",
    type: "tools",
  },
];

/* =========================================
   SERVICE ICONS
========================================= */

function ServiceIcon({ type }) {
  const commonProps = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (type) {
    case "government":
      return (
        <svg {...commonProps}>
          <path d="M3 10h18" />
          <path d="M5 10v8" />
          <path d="M9 10v8" />
          <path d="M15 10v8" />
          <path d="M19 10v8" />
          <path d="M3 18h18" />
          <path d="M12 3l9 5H3l9-5z" />
        </svg>
      );

    case "immigration":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c3 3 3 15 0 18" />
          <path d="M12 3c-3 3-3 15 0 18" />
        </svg>
      );

    case "jobs":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </svg>
      );

    case "money":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M7 9h.01" />
          <path d="M17 15h.01" />
        </svg>
      );

    case "taxes":
      return (
        <svg {...commonProps}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 7h8" />
          <path d="M8 11h2" />
          <path d="M14 11h2" />
          <path d="M8 15h2" />
          <path d="M14 15h2" />
          <path d="M8 18h8" />
        </svg>
      );

    case "health":
      return (
        <svg {...commonProps}>
          <path d="M12 21s-7-4.5-9-9.5C1.5 7.5 4 4 7.5 4c2 0 3.5 1.2 4.5 3 1-1.8 2.5-3 4.5-3C20 4 22.5 7.5 21 11.5 19 16.5 12 21 12 21z" />
          <path d="M9 11h6" />
          <path d="M12 8v6" />
        </svg>
      );

    case "education":
      return (
        <svg {...commonProps}>
          <path d="M3 9l9-5 9 5-9 5-9-5z" />
          <path d="M7 11v5c2.5 2 7.5 2 10 0v-5" />
          <path d="M21 9v6" />
        </svg>
      );

    case "transport":
      return (
        <svg {...commonProps}>
          <path d="M5 17h14l-1-7H6l-1 7z" />
          <path d="M7 10l1-4h8l1 4" />
          <circle cx="8" cy="18" r="1.5" />
          <circle cx="16" cy="18" r="1.5" />
        </svg>
      );

    case "emergency":
      return (
        <svg {...commonProps}>
          <path d="M12 3l9 17H3L12 3z" />
          <path d="M12 9v5" />
          <path d="M12 17h.01" />
        </svg>
      );

    case "travel":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9" />
          <path d="M12 3c-2.5 2.5-3.5 5.5-3.5 9s1 6.5 3.5 9" />
        </svg>
      );

    case "housing":
      return (
        <svg {...commonProps}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M9 20v-6h6v6" />
        </svg>
      );

    case "contacts":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3" />
          <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
          <path d="M4 6h.01" />
          <path d="M20 6h.01" />
        </svg>
      );

    case "tools":
      return (
        <svg {...commonProps}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.8-2.8 2-2.4z" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

/* =========================================
   SEARCH ICON
========================================= */

function SearchIcon() {
  return (
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
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

/* =========================================
   ARROW ICON
========================================= */

function ArrowIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

/* =========================================
   HOME
========================================= */

export default function Home() {
  const [search, setSearch] = useState("");
  const [continentSearch, setContinentSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  /* =========================================
     GLOBAL SEARCH
  ========================================= */

  const filteredCountries = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return [];
    }

    return countries.filter((item) => {
      const countryName = item.country?.toLowerCase() || "";
      const continentName = item.continent?.toLowerCase() || "";
      const famousFor = item.famousFor?.toLowerCase() || "";

      return (
        countryName.includes(query) ||
        continentName.includes(query) ||
        famousFor.includes(query)
      );
    });
  }, [search]);

  /* =========================================
     COUNTRY HELPERS
  ========================================= */

  const getContinentCountries = (continentName) => {
    return countries.filter(
      (item) => item.continent === continentName
    );
  };

  const visibleContinentCountries = selectedContinent
    ? getContinentCountries(selectedContinent).filter((item) =>
        item.country
          ?.toLowerCase()
          .includes(continentSearch.trim().toLowerCase())
      )
    : [];

  /* =========================================
     COUNTRY CLICK
  ========================================= */

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setSelectedContinent(null);
    setSelectedService(null);
    setSearch("");
    setContinentSearch("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================
     BACK HOME
  ========================================= */

  const handleBackHome = () => {
    setSelectedCountry(null);
    setSelectedContinent(null);
    setSelectedService(null);
    setSearch("");
    setContinentSearch("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================
     CONTINENT CLICK
  ========================================= */

  const handleContinentClick = (continentName) => {
    const isSameContinent =
      selectedContinent === continentName;

    setSelectedContinent(
      isSameContinent ? null : continentName
    );

    setContinentSearch("");
    setSelectedService(null);

    if (!isSameContinent) {
      setTimeout(() => {
        const section = document.getElementById("countries");

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  /* =========================================
     SERVICE CLICK
  ========================================= */

  const handleServiceClick = (service) => {
    setSelectedService(service);

    if (service.name === "Calculators & Tools") {
      window.location.href = "/tools";
      return;
    }

    const section = document.getElementById("continents");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================================
     NAVIGATION
  ========================================= */

  const goHome = () => {
    setSelectedCountry(null);
    setSelectedContinent(null);
    setSelectedService(null);
    setSearch("");
    setContinentSearch("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goCountries = () => {
    setSelectedCountry(null);
    setSearch("");

    document
      .getElementById("continents")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const goServices = () => {
    setSelectedCountry(null);
    setSearch("");

    document
      .getElementById("services")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  const goTools = () => {
    window.location.href = "/tools";
  };

  /* =========================================
     COUNTRY PAGE
  ========================================= */

  if (selectedCountry) {
    return (
      <CountryPage
        country={selectedCountry}
        continent={selectedCountry.continent}
        famousFor={selectedCountry.famousFor}
        topics={selectedCountry.topics || []}
        onBack={handleBackHome}
      />
    );
  }

  /* =========================================
     MAIN HOME
  ========================================= */

  return (
    <main className="home-page">

      {/* =====================================
          TOP NAVIGATION
      ===================================== */}

      <header className="top-navigation">
        <div className="top-navigation-inner">

          <button
            type="button"
            className="brand"
            onClick={goHome}
            aria-label="Sanolines home"
          >
            <span className="brand-name">
              SANOLINES
            </span>

            <span className="brand-subtitle">
              Global Information & Services
            </span>
          </button>

          <nav className="main-navigation">
            <button
              type="button"
              className="nav-link active"
              onClick={goHome}
            >
              Home
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={goCountries}
            >
              Countries
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={goServices}
            >
              Services
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={goTools}
            >
              Tools
            </button>
          </nav>

        </div>
      </header>

      {/* =====================================
          HERO
      ===================================== */}

      <section className="professional-hero">
        <div className="professional-hero-inner">

          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>
              Sanolines Global Directory
            </span>
          </div>

          <h1>
            Information and services
            <br className="desktop-break" />
            for the world
          </h1>

          <p>
            Find useful information about government services,
            immigration, jobs, healthcare, education, travel,
            housing and more.
          </p>

          <div className="professional-search">

            <div className="professional-search-icon">
              <SearchIcon />
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
              type="button"
              className="professional-search-button"
              onClick={() => {
                document
                  .getElementById("search-results")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
            >
              Search
            </button>

          </div>

        </div>
      </section>

      {/* =====================================
          SEARCH RESULTS
      ===================================== */}

      {search.trim() && (
        <section
          className="home-section search-results-section"
          id="search-results"
        >
          <div className="section-heading">

            <span className="section-label">
              Search Results
            </span>

            <h2>
              {filteredCountries.length}{" "}
              {filteredCountries.length === 1
                ? "country"
                : "countries"}{" "}
              found
            </h2>

            <p>
              Select a country to explore its information
              and services.
            </p>

          </div>

          {filteredCountries.length > 0 ? (
            <div className="country-grid">

              {filteredCountries.map((item) => (
                <button
                  type="button"
                  className="country-card"
                  key={`${item.continent}-${item.country}`}
                  onClick={() =>
                    handleCountryClick(item)
                  }
                >
                  <div className="country-card-main">

                    <div className="country-card-top">

                      <span className="country-continent">
                        {item.continent}
                      </span>

                      {item.flag ? (
                        <img
                          src={item.flag}
                          alt={`${item.country} flag`}
                          className="country-flag"
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
                      <ArrowIcon />
                    </span>
                  </div>
                </button>
              ))}

            </div>
          ) : (
            <div className="empty-search">

              <div className="empty-search-icon">
                <SearchIcon />
              </div>

              <h3>
                No country found
              </h3>

              <p>
                Try searching with another country name.
              </p>

            </div>
          )}
        </section>
      )}

      {/* =====================================
          MAIN CONTENT
      ===================================== */}

      {!search.trim() && (
        <>

          {/* =================================
              CONTINENTS
          ================================= */}

          <section
            className="home-section continents-section"
            id="continents"
          >

            <div className="section-heading">

              <span className="section-label">
                Explore The World
              </span>

              <h2>
                Countries by continent
              </h2>

              <p>
                Choose a continent to explore countries
                and useful information.
              </p>

            </div>

            <div className="continent-grid">

              {continents.map((continent) => {
                const continentCountries =
                  getContinentCountries(continent.name);

                return (
                  <button
                    type="button"
                    className={`continent-card ${
                      selectedContinent === continent.name
                        ? "active"
                        : ""
                    }`}
                    key={continent.name}
                    onClick={() =>
                      handleContinentClick(
                        continent.name
                      )
                    }
                  >

                    <img
                      src={continent.image}
                      alt={continent.name}
                      className="continent-image"
                      loading="lazy"
                    />

                    <div className="continent-overlay" />

                    <div className="continent-content">

                      <span className="continent-label">
                        EXPLORE REGION
                      </span>

                      <h3>
                        {continent.name}
                      </h3>

                      <p>
                        {continentCountries.length}{" "}
                        {continentCountries.length === 1
                          ? "country"
                          : "countries"}

                        <span>
                          <ArrowIcon />
                        </span>
                      </p>

                    </div>

                  </button>
                );
              })}

            </div>

          </section>

          {/* =================================
              SELECTED CONTINENT COUNTRIES
          ================================= */}

          {selectedContinent && (
            <section
              className="home-section selected-continent-section"
              id="countries"
            >

              <div className="country-section-header">

                <div className="country-section-heading">

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

                  <SearchIcon />

                  <input
                    type="text"
                    placeholder={`Search ${selectedContinent} country...`}
                    value={continentSearch}
                    onChange={(event) =>
                      setContinentSearch(
                        event.target.value
                      )
                    }
                    aria-label="Search country"
                  />

                  {continentSearch && (
                    <button
                      type="button"
                      className="country-filter-clear"
                      onClick={() =>
                        setContinentSearch("")
                      }
                      aria-label="Clear country search"
                    >
                      ×
                    </button>
                  )}

                </div>

              </div>

              {visibleContinentCountries.length > 0 ? (
                <div className="country-grid">

                  {visibleContinentCountries.map(
                    (item) => (
                      <button
                        type="button"
                        className="country-card"
                        key={`${item.continent}-${item.country}`}
                        onClick={() =>
                          handleCountryClick(item)
                        }
                      >

                        <div className="country-card-main">

                          <div className="country-card-top">

                            <span className="country-continent">
                              {item.continent}
                            </span>

                            {item.flag ? (
                              <img
                                src={item.flag}
                                alt={`${item.country} flag`}
                                className="country-flag"
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
                            <ArrowIcon />
                          </span>

                        </div>

                      </button>
                    )
                  )}

                </div>
              ) : (
                <div className="empty-search">

                  <div className="empty-search-icon">
                    <SearchIcon />
                  </div>

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

          {/* =================================
              SERVICES
          ================================= */}

          <section
            className="home-section services-section"
            id="services"
          >

            <div className="services-container">

              <div className="section-heading services-heading">

                <span className="section-label">
                  Information & Services
                </span>

                <h2>
                  What Can You Find?
                </h2>

                <p>
                  Important everyday information
                  organized in one simple global platform.
                </p>

              </div>

              <div className="services-grid">

                {services.map((service, index) => (
                  <button
                    type="button"
                    className={`service-card ${
                      selectedService?.name === service.name
                        ? "active"
                        : ""
                    }`}
                    key={service.name}
                    onClick={() =>
                      handleServiceClick(service)
                    }
                  >

                    <div className="service-card-left">

                      <div className="service-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="service-icon">
                        <ServiceIcon
                          type={service.type}
                        />
                      </div>

                      <span>
                        {service.name}
                      </span>

                    </div>

                    <span className="service-arrow">
                      <ArrowIcon />
                    </span>

                  </button>
                ))}

              </div>

            </div>

          </section>

          {/* =================================
              TOOLS
          ================================= */}

          <section
            className="home-section tools-section"
            id="tools"
          >

            <div className="tools-box">

              <div className="tools-content">

                <span className="section-label">
                  Tools
                </span>

                <h2>
                  Useful tools for everyday life
                </h2>

                <p>
                  Calculators and practical tools
                  designed to make everyday tasks easier.
                </p>

              </div>

              <div className="tools-action">

                <button
                  type="button"
                  onClick={goTools}
                >
                  <span>
                    Explore tools
                  </span>

                  <span className="tools-arrow">
                    <ArrowIcon />
                  </span>
                </button>

              </div>

            </div>

          </section>

        </>
      )}

      {/* =====================================
          FOOTER
      ===================================== */}

      <footer className="home-footer">

        <div className="home-footer-inner">

          <div className="footer-brand">

            <strong>
              SANOLINES
            </strong>

            <span>
              Global Information & Services
            </span>

            <p>
              Useful information and services
              for everyday life around the world.
            </p>

          </div>

          <div className="footer-navigation">

            <div>
              <span className="footer-title">
                Explore
              </span>

              <button
                type="button"
                onClick={goHome}
              >
                Home
              </button>

              <button
                type="button"
                onClick={goCountries}
              >
                Countries
              </button>
            </div>

            <div>
              <span className="footer-title">
                Services
              </span>

              <button
                type="button"
                onClick={goServices}
              >
                Services
              </button>

              <button
                type="button"
                onClick={goTools}
              >
                Tools
              </button>
            </div>

          </div>

        </div>

        <div className="home-footer-bottom">

          <span>
            © {new Date().getFullYear()} Sanolines.
            All rights reserved.
          </span>

          <span>
            Global Information & Services
          </span>

        </div>

      </footer>

    </main>
  );
}

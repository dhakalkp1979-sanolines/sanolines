import React, { useMemo, useState } from "react";
import "./Home.css";
import countries from "../data/countries";
import CountryPage from "./CountryPage";

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
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
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
   SERVICE ICON
========================================= */

function ServiceIcon({ type }) {
  const commonProps = {
    width: 22,
    height: 22,
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
   HOME COMPONENT
========================================= */

export default function Home() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  /* =========================================
     SEARCH
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
     CONTINENT COUNTS
  ========================================= */

  const getContinentCountries = (continentName) => {
    return countries.filter(
      (item) => item.continent === continentName
    );
  };

  /* =========================================
     COUNTRY CLICK
  ========================================= */

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setSelectedContinent(null);
    setSelectedService(null);

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

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================
     COUNTRY PAGE
  ========================================= */

  if (selectedCountry) {
    return (
      <CountryPage
        country={selectedCountry}
        onBack={handleBackHome}
      />
    );
  }

  /* =========================================
     SERVICE SELECTION
  ========================================= */

  const handleServiceClick = (service) => {
    setSelectedService(service);

    if (service.name === "Calculators & Tools") {
      window.location.href = "/tools";
      return;
    }

    const servicesSection = document.getElementById("countries");

    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  /* =========================================
     RENDER
  ========================================= */

  return (
    <main className="home-page">
      {/* =====================================
          HERO
      ===================================== */}

      <section className="home-hero">
        <div className="home-hero-inner">
          <span className="hero-label">
            GLOBAL INFORMATION & SERVICES
          </span>

          <h1>
            Information and services
            <br />
            for countries around the world
          </h1>

          <p>
            Find useful information about government services,
            immigration, jobs, healthcare, education, travel,
            housing and more.
          </p>

          {/* SEARCH */}

          <div className="home-search">
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

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for a country..."
              aria-label="Search for a country"
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
          </div>
        </div>
      </section>

      {/* =====================================
          SEARCH RESULTS
      ===================================== */}

      {search.trim() && (
        <section className="home-section search-results-section">
          <div className="section-heading">
            <span className="section-label">SEARCH</span>

            <h2>
              {filteredCountries.length}{" "}
              {filteredCountries.length === 1
                ? "country"
                : "countries"}{" "}
              found
            </h2>

            <p>
              Select a country to explore its information and
              services.
            </p>
          </div>

          {filteredCountries.length > 0 ? (
            <div className="country-grid">
              {filteredCountries.map((item) => (
                <button
                  type="button"
                  className="country-card"
                  key={`${item.continent}-${item.country}`}
                  onClick={() => handleCountryClick(item)}
                >
                  <div className="country-card-top">
                    {item.flag ? (
                      <img
                        src={item.flag}
                        alt={`${item.country} flag`}
                        className="country-flag"
                      />
                    ) : (
                      <div className="country-flag-placeholder">
                        {item.country?.charAt(0)}
                      </div>
                    )}

                    <div>
                      <span className="country-continent">
                        {item.continent}
                      </span>

                      <h3>{item.country}</h3>
                    </div>
                  </div>

                  <p>{item.famousFor}</p>

                  <span className="country-link">
                    Explore country →
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="empty-search">
              <h3>No country found</h3>
              <p>
                Try searching with another country or continent
                name.
              </p>
            </div>
          )}
        </section>
      )}

      {/* =====================================
          CONTINENTS
      ===================================== */}

      {!search.trim() && (
        <>
          <section
            className="home-section continents-section"
            id="continents"
          >
            <div className="section-heading">
              <span className="section-label">
                EXPLORE THE WORLD
              </span>

              <h2>Countries by continent</h2>

              <p>
                Explore countries and discover useful information
                and services for each region.
              </p>
            </div>

            <div className="continent-grid">
              {continents.map((continent) => {
                const continentCountries =
                  getContinentCountries(continent.name);

                return (
                  <button
                    type="button"
                    className="continent-card"
                    key={continent.name}
                    onClick={() =>
                      setSelectedContinent(
                        selectedContinent === continent.name
                          ? null
                          : continent.name
                      )
                    }
                  >
                    <img
                      src={continent.image}
                      alt={continent.name}
                      className="continent-image"
                    />

                    <div className="continent-overlay" />

                    <div className="continent-content">
                      <span className="continent-label">
                        EXPLORE REGION
                      </span>

                      <h3>{continent.name}</h3>

                      <p>
                        {continentCountries.length}{" "}
                        {continentCountries.length === 1
                          ? "country"
                          : "countries"}{" "}
                        <span>→</span>
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* =====================================
              SELECTED CONTINENT
          ===================================== */}

          {selectedContinent && (
            <section
              className="home-section selected-continent-section"
              id="countries"
            >
              <div className="section-heading">
                <span className="section-label">
                  {selectedContinent.toUpperCase()}
                </span>

                <h2>
                  Countries in {selectedContinent}
                </h2>

                <p>
                  Select a country to explore its information and
                  services.
                </p>
              </div>

              <div className="country-grid">
                {getContinentCountries(selectedContinent).map(
                  (item) => (
                    <button
                      type="button"
                      className="country-card"
                      key={`${item.continent}-${item.country}`}
                      onClick={() =>
                        handleCountryClick(item)
                      }
                    >
                      <div className="country-card-top">
                        {item.flag ? (
                          <img
                            src={item.flag}
                            alt={`${item.country} flag`}
                            className="country-flag"
                          />
                        ) : (
                          <div className="country-flag-placeholder">
                            {item.country?.charAt(0)}
                          </div>
                        )}

                        <div>
                          <span className="country-continent">
                            {item.continent}
                          </span>

                          <h3>{item.country}</h3>
                        </div>
                      </div>

                      <p>{item.famousFor}</p>

                      <span className="country-link">
                        Explore country →
                      </span>
                    </button>
                  )
                )}
              </div>
            </section>
          )}

          {/* =====================================
              SERVICES
          ===================================== */}

          <section
            className="home-section services-section"
            id="services"
          >
            <div className="section-heading">
              <span className="section-label">
                SERVICES
              </span>

              <h2>Core Professional Topics</h2>

              <p>
                Quickly find the type of information and services
                you need.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <button
                  type="button"
                  className={`service-card ${
                    selectedService?.name === service.name
                      ? "active"
                      : ""
                  }`}
                  key={service.name}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className="service-card-left">
                    <div className="service-icon">
                      <ServiceIcon type={service.type} />
                    </div>

                    <span>{service.name}</span>
                  </div>

                  <span className="service-arrow">
                    →
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* =====================================
              TOOLS
          ===================================== */}

          <section
            className="home-section tools-section"
            id="tools"
          >
            <div className="tools-box">
              <div className="tools-content">
                <span className="section-label">
                  TOOLS
                </span>

                <h2>
                  Useful tools for everyday life
                </h2>

                <p>
                  Calculators and practical tools will be
                  available here as Sanolines grows.
                </p>
              </div>

              <div className="tools-action">
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/tools";
                  }}
                >
                  <span>Explore tools</span>
                  <span className="tools-arrow">
                    →
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
          <div>
            <strong>Sanolines</strong>

            <p>
              Global information and services for everyday life.
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
              onClick={() => {
                window.location.href = "/tools";
              }}
            >
              Tools
            </button>
          </div>
        </div>

        <div className="home-footer-bottom">
          © {new Date().getFullYear()} Sanolines. All rights
          reserved.
        </div>
      </footer>
    </main>
  );
}

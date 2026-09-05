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
  {
    name: "Government & Official Services",
    icon: "government",
  },
  {
    name: "Immigration & Visa",
    icon: "immigration",
  },
  {
    name: "Jobs & Employment",
    icon: "jobs",
  },
  {
    name: "Money & Banking",
    icon: "money",
  },
  {
    name: "Taxes",
    icon: "taxes",
  },
  {
    name: "Healthcare",
    icon: "healthcare",
  },
  {
    name: "Education",
    icon: "education",
  },
  {
    name: "Transport & Driving",
    icon: "transport",
  },
  {
    name: "Emergency Services",
    icon: "emergency",
  },
  {
    name: "Travel",
    icon: "travel",
  },
  {
    name: "Housing",
    icon: "housing",
  },
  {
    name: "Useful Contacts",
    icon: "contacts",
  },
  {
    name: "Calculators & Tools",
    icon: "tools",
  },
];

function ServiceIcon({ type }) {
  if (type === "government") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M5 21V10h14v11" />
        <path d="M3 10h18L12 4 3 10Z" />
        <path d="M8 14v4" />
        <path d="M12 14v4" />
        <path d="M16 14v4" />
      </svg>
    );
  }

  if (type === "immigration") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
        <path d="M18 5h3v3" />
        <path d="M21 5l-4 4" />
      </svg>
    );
  }

  if (type === "jobs") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
        <path d="M10 12v2h4v-2" />
      </svg>
    );
  }

  if (type === "money") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="12" cy="12" r="3" />
        <path d="M7 9h.01" />
        <path d="M17 15h.01" />
      </svg>
    );
  }

  if (type === "taxes") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 3h9l4 4v14H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
        <path d="M8 9h2" />
      </svg>
    );
  }

  if (type === "healthcare") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-8-4.6-8-11a4.5 4.5 0 0 1 8-2.7A4.5 4.5 0 0 1 20 10c0 6.4-8 11-8 11Z" />
        <path d="M12 8v6" />
        <path d="M9 11h6" />
      </svg>
    );
  }

  if (type === "education") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 9 9-5 9 5-9 5-9-5Z" />
        <path d="M7 11v5c2 2 8 2 10 0v-5" />
        <path d="M21 9v6" />
      </svg>
    );
  }

  if (type === "transport") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 17h14l-1-7H6l-1 7Z" />
        <path d="M7 10 8 6h8l1 4" />
        <circle cx="8" cy="18" r="1.5" />
        <circle cx="16" cy="18" r="1.5" />
      </svg>
    );
  }

  if (type === "emergency") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 3 20h18L12 3Z" />
        <path d="M12 9v5" />
        <circle cx="12" cy="17" r=".7" />
      </svg>
    );
  }

  if (type === "travel") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 3 15 0 18" />
        <path d="M12 3c-3 3-3 15 0 18" />
      </svg>
    );
  }

  if (type === "housing") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10" />
        <path d="M9 20v-6h6v6" />
      </svg>
    );
  }

  if (type === "contacts") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6" />
        <path d="M16 5a3 3 0 0 1 0 6" />
        <path d="M18 14c2 .8 3 2.4 3 5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h12v18H6z" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h3" />
      <path d="M15 15h.01" />
    </svg>
  );
}

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

  function handleServiceClick(service) {
    setSelectedService(service);

    const countrySection = document.getElementById("continents");

    if (countrySection) {
      countrySection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

      <main className="home-main">
        {search.trim() && (
          <section className="home-section search-results-section">
            <div className="section-heading">
              <div>
                <span className="section-label">SEARCH</span>

                <h2>Countries matching your search</h2>

                <p>
                  {filteredCountries.length}{" "}
                  {filteredCountries.length === 1
                    ? "country"
                    : "countries"}{" "}
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

        {!search.trim() && (
          <section className="home-section" id="continents">
            <div className="section-heading">
              <div>
                <span className="section-label">
                  EXPLORE THE WORLD
                </span>

                <h2>Explore by continent</h2>

                <p>
                  Select a continent to discover countries and useful
                  services.
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
                      <span className="continent-label">
                        EXPLORE REGION
                      </span>

                      <strong>{continent.name}</strong>

                      <span className="continent-count">
                        {count}{" "}
                        {count === 1 ? "country" : "countries"}
                      </span>

                      <span className="continent-action">
                        Explore countries →
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

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

                <h2>Countries & Information</h2>

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

        {!search.trim() && !selectedContinent && (
          <section className="home-section services-section" id="services">
            <div className="section-heading">
              <div>
                <span className="section-label">SERVICES</span>

                <h2>Core Professional Topics</h2>

                <p>
                  Quickly find the type of information and services
                  you need.
                </p>
              </div>
            </div>

            <div className="services-grid">
              {services.map(function (service) {
                return (
                  <button
                    className={
                      "service-card " +
                      (selectedService === service.name
                        ? "active"
                        : "")
                    }
                    key={service.name}
                    onClick={function () {
                      handleServiceClick(service.name);
                    }}
                  >
                    <span className="service-card-left">
                      <span className="service-icon">
                        <ServiceIcon type={service.icon} />
                      </span>

                      <span className="service-name">
                        {service.name}
                      </span>
                    </span>

                    <span className="service-arrow">→</span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

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

                  document
                    .getElementById("services")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
              >
                Explore tools →
              </button>
            </div>
          </section>
        )}
      </main>

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

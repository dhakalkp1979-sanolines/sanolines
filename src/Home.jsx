import React, { useMemo, useState } from "react";
import "./Home.css";
import countries from "./data/countries";
import CountryPage from "./pages/CountryPage";

const continents = [
  {
    name: "Asia",
    description: "Explore countries, services and useful information across Asia.",
    image:
      "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Africa",
    description: "Discover essential information and services across Africa.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Europe",
    description: "Find useful information and services for European countries.",
    image:
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "North America",
    description: "Explore countries and practical services across North America.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "South America",
    description: "Access useful information for countries across South America.",
    image:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Oceania",
    description: "Explore countries and services across Australia and Oceania.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Antarctica",
    description: "Learn about Antarctica and its unique environment.",
    image:
      "https://images.unsplash.com/photo-1517783997329-01e1e779c16db?auto=format&fit=crop&w=1200&q=80",
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
];

function Home() {
  const [selectedContinent, setSelectedContinent] = useState("Asia");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getCountryName = (item) =>
    item.country || item.name || item.title || "";

  const getCountryContinent = (item) =>
    item.continent || item.region || item.area || "";

  const getCountryDescription = (item) =>
    item.famousFor ||
    item.description ||
    item.about ||
    "Useful information and services for this country.";

  const filteredCountries = useMemo(() => {
    return countries.filter((item) => {
      const continent = getCountryContinent(item);
      const countryName = getCountryName(item);

      return (
        continent.toLowerCase() === selectedContinent.toLowerCase() &&
        countryName.toLowerCase().includes(countryFilter.toLowerCase())
      );
    });
  }, [selectedContinent, countryFilter]);

  const searchResults = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    if (!term) return [];

    return countries.filter((item) => {
      const countryName = getCountryName(item).toLowerCase();
      const continent = getCountryContinent(item).toLowerCase();
      const description = getCountryDescription(item).toLowerCase();

      return (
        countryName.includes(term) ||
        continent.includes(term) ||
        description.includes(term)
      );
    });
  }, [searchTerm]);

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
    setCountryFilter("");
    setSearchTerm("");

    setTimeout(() => {
      document
        .getElementById("countries")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSearch = (event) => {
    event.preventDefault();

    if (!searchTerm.trim()) return;

    document
      .getElementById("search-results")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBackHome = () => {
    setSelectedCountry(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNav = (sectionId) => {
    setMobileMenuOpen(false);

    if (sectionId === "home") {
      setSelectedCountry(null);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  if (selectedCountry) {
    return (
      <CountryPage
        country={getCountryName(selectedCountry)}
        continent={getCountryContinent(selectedCountry)}
        famousFor={getCountryDescription(selectedCountry)}
        topics={services}
        onBack={handleBackHome}
      />
    );
  }

  return (
    <div className="home-page">
      {/* =====================================================
          NAVIGATION
      ====================================================== */}
      <header className="top-navigation">
        <div className="navigation-inner">
          <button
            type="button"
            className="brand"
            onClick={() => handleNav("home")}
            aria-label="Sanolines Home"
            style={{
              border: "0",
              background: "transparent",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <span className="brand-name">SANOLINES</span>
            <span className="brand-subtitle">
              Global Information & Services
            </span>
          </button>

          <nav className="main-navigation">
            <button
              type="button"
              className="nav-link nav-link-active"
              onClick={() => handleNav("home")}
            >
              Home
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleNav("continents")}
            >
              Countries
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleNav("services")}
            >
              Services
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleNav("tools")}
            >
              Tools
            </button>
          </nav>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            style={{
              borderTop: "1px solid #eef1f5",
              background: "#ffffff",
              padding: "10px 20px 18px",
            }}
          >
            <button
              type="button"
              className="nav-link"
              onClick={() => handleNav("home")}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                border: 0,
                background: "transparent",
              }}
            >
              Home
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleNav("continents")}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                border: 0,
                background: "transparent",
              }}
            >
              Countries
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleNav("services")}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                border: 0,
                background: "transparent",
              }}
            >
              Services
            </button>

            <button
              type="button"
              className="nav-link"
              onClick={() => handleNav("tools")}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                border: 0,
                background: "transparent",
              }}
            >
              Tools
            </button>
          </div>
        )}
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="professional-hero" id="home">
        <div className="professional-hero-inner">
          <div className="hero-badge">Sanolines Global Directory</div>

          <h1>
            Information and services
            <br />
            for the world
          </h1>

          <p>
            Find useful information about government services, immigration,
            jobs, healthcare, education, travel, housing and more.
          </p>

          <form className="professional-search" onSubmit={handleSearch}>
            <div className="professional-search-icon">⌕</div>

            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search for a country, city, or service..."
              aria-label="Search"
            />

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
          SEARCH RESULTS
      ====================================================== */}
      {searchTerm.trim() && (
        <section
          className="search-results-section"
          id="search-results"
        >
          <h2>
            Search Results
            <span
              style={{
                color: "#64748b",
                fontSize: "14px",
                fontWeight: 600,
                marginLeft: "10px",
              }}
            >
              {searchResults.length}
            </span>
          </h2>

          {searchResults.length === 0 ? (
            <div className="empty-search">
              No countries found for "{searchTerm}".
            </div>
          ) : (
            <div className="country-grid">
              {searchResults.map((item, index) => (
                <button
                  type="button"
                  className="country-card"
                  key={`${getCountryName(item)}-${index}`}
                  onClick={() => handleCountryClick(item)}
                >
                  <div>
                    <div className="country-card-top">
                      <span className="country-continent-label">
                        {getCountryContinent(item)}
                      </span>

                      {item.flag && (
                        <img
                          className="country-flag"
                          src={item.flag}
                          alt={`${getCountryName(item)} flag`}
                        />
                      )}
                    </div>

                    <h3>{getCountryName(item)}</h3>

                    <p className="country-card-description">
                      {getCountryDescription(item)}
                    </p>
                  </div>

                  <div className="country-card-footer">
                    <span>Explore country</span>
                    <span>→</span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* =====================================================
          CONTINENTS
      ====================================================== */}
      <section
        className="home-section continents-section"
        id="continents"
      >
        <div className="section-heading">
          <span className="section-label">Explore the world</span>

          <h2>Choose a continent</h2>

          <p>
            Select a region to discover countries and useful information.
          </p>
        </div>

        <div className="continent-grid">
          {continents.map((continent) => (
            <button
              type="button"
              className="continent-card"
              key={continent.name}
              onClick={() => handleContinentSelect(continent.name)}
            >
              <img
                className="continent-image"
                src={continent.image}
                alt={continent.name}
                loading="lazy"
              />

              <div className="continent-overlay"></div>

              <div className="continent-content">
                <span className="continent-label">
                  Global region
                </span>

                <h3>{continent.name}</h3>

                <p>
                  Explore countries
                  <span>→</span>
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================================
          COUNTRIES
      ====================================================== */}
      <section
        className="selected-continent-section"
        id="countries"
      >
        <div className="country-section-header">
          <div className="country-section-title">
            <span className="section-label">
              Selected continent
            </span>

            <h2>{selectedContinent}</h2>

            <p>
              Explore countries and their information and services.
            </p>
          </div>

          <input
            type="text"
            className="country-filter"
            value={countryFilter}
            onChange={(event) => setCountryFilter(event.target.value)}
            placeholder="Search countries..."
            aria-label="Search countries"
          />
        </div>

        {filteredCountries.length === 0 ? (
          <div className="empty-search">
            No countries found in {selectedContinent}.
          </div>
        ) : (
          <div className="country-grid">
            {filteredCountries.map((item, index) => (
              <button
                type="button"
                className="country-card"
                key={`${getCountryName(item)}-${index}`}
                onClick={() => handleCountryClick(item)}
              >
                <div>
                  <div className="country-card-top">
                    <span className="country-continent-label">
                      {getCountryContinent(item)}
                    </span>

                    {item.flag && (
                      <img
                        className="country-flag"
                        src={item.flag}
                        alt={`${getCountryName(item)} flag`}
                      />
                    )}
                  </div>

                  <h3>{getCountryName(item)}</h3>

                  <p className="country-card-description">
                    {getCountryDescription(item)}
                  </p>
                </div>

                <div className="country-card-footer">
                  <span>Explore country</span>
                  <span>→</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section
        className="services-section"
        id="services"
      >
        <div className="services-container">
          <div className="section-heading">
            <span className="section-label">Useful information</span>

            <h2>Global services</h2>

            <p>
              Find practical information across the most important
              everyday services.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <button
                type="button"
                className="service-card"
                key={service}
                onClick={() => {
                  const target = document.getElementById("countries");

                  if (target) {
                    target.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <div className="service-card-content">
                  <span className="service-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{service}</h3>
                </div>

                <span className="service-arrow">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLS
      ====================================================== */}
      <section
        className="home-section tools-section"
        id="tools"
      >
        <div className="tools-box">
          <div className="tools-content">
            <span className="section-label">
              Sanolines tools
            </span>

            <h2>Useful tools in one place</h2>

            <p>
              Access practical calculators and tools designed to make
              everyday information easier to understand.
            </p>
          </div>

          <div className="tools-action">
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("services")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
            >
              Explore tools
              <span className="tools-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="home-footer">
        <div className="home-footer-inner">
          <div className="home-footer-brand">
            <strong>SANOLINES</strong>

            <p>
              Global information and services for people looking for
              useful, practical and easy-to-understand information.
            </p>
          </div>

          <div className="footer-navigation">
            <button
              type="button"
              onClick={() => handleNav("home")}
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => handleNav("continents")}
            >
              Countries
            </button>

            <button
              type="button"
              onClick={() => handleNav("services")}
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => handleNav("tools")}
            >
              Tools
            </button>
          </div>
        </div>

        <div className="home-footer-bottom">
          © {new Date().getFullYear()} Sanolines. Global Information &
          Services.
        </div>
      </footer>
    </div>
  );
}

export default Home;

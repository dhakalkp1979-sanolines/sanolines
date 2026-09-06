import React, { useMemo, useState } from "react";
import "./Home.css";
import countries from "./data/countries";
import CountryPage from "./pages/CountryPage";
import { calculatePercentage } from "./data/calculatorsLogic";

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

const continents = [
  {
    name: "Asia",
    code: "ASIA",
    image:
      "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Africa",
    code: "AFRICA",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Europe",
    code: "EUROPE",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "North America",
    code: "NORTH AMERICA",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "South America",
    code: "SOUTH AMERICA",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Oceania",
    code: "OCEANIA",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Antarctica",
    code: "ANTARCTICA",
    image:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=85",
  },
];

function getCountryName(item) {
  return item?.country || item?.name || "";
}

function getCountryContinent(item) {
  return item?.continent || item?.region || "";
}

function getCountryDescription(item) {
  return (
    item?.famousFor ||
    item?.description ||
    item?.famous ||
    "Useful information and services for this country."
  );
}

function Home() {
  const [selectedContinent, setSelectedContinent] = useState("Asia");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [percentageAmount, setPercentageAmount] = useState("");
  const [percentageValue, setPercentageValue] = useState("");
  const [percentageResult, setPercentageResult] = useState(null);

  const filteredCountries = useMemo(() => {
    const continentCountries = countries.filter((item) => {
      return (
        getCountryContinent(item).toLowerCase() ===
        selectedContinent.toLowerCase()
      );
    });

    if (!countryFilter.trim()) {
      return continentCountries;
    }

    return continentCountries.filter((item) =>
      getCountryName(item)
        .toLowerCase()
        .includes(countryFilter.toLowerCase())
    );
  }, [selectedContinent, countryFilter]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }

    const term = searchTerm.toLowerCase();

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

    setTimeout(() => {
      document.getElementById("countries")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
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

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const handleNavigation = (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleExploreTools = () => {
    handleNavigation("tools");
  };

  const handlePercentageCalculate = () => {
    if (
      percentageAmount === "" ||
      percentageValue === "" ||
      Number.isNaN(Number(percentageAmount)) ||
      Number.isNaN(Number(percentageValue))
    ) {
      setPercentageResult(null);
      return;
    }

    const result = calculatePercentage(
      percentageAmount,
      percentageValue
    );

    setPercentageResult(result);
  };

  const handlePercentageReset = () => {
    setPercentageAmount("");
    setPercentageValue("");
    setPercentageResult(null);
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

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="site-header">
        <div className="site-header-inner">

          <div className="site-brand">
            Sanolines Global
          </div>

          <nav className="site-navigation">

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
              onClick={() => handleNavigation("countries")}
            >
              Countries
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("services")}
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("tools")}
            >
              Tools
            </button>

          </nav>

        </div>
      </header>


      {/* =========================================
          HERO
      ========================================= */}

      <section className="home-hero">

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
            Find useful information about countries,
            government services, immigration, jobs,
            healthcare, education, travel, housing
            and everyday life.
          </p>

          <div className="home-search">

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search for a country or service..."
              aria-label="Search for a country or service"
            />

            {searchTerm && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}

          </div>

        </div>

      </section>


      {/* =========================================
          SEARCH RESULTS
      ========================================= */}

      {searchTerm.trim() && (
        <section className="home-section search-results-section">

          <div className="section-heading">

            <span className="section-label">
              Search
            </span>

            <h2>
              Search Results
            </h2>

          </div>

          {searchResults.length > 0 ? (

            <div className="country-grid">

              {searchResults.map((item, index) => (

                <article
                  className="country-card"
                  key={`${getCountryName(item)}-${index}`}
                  onClick={() => handleCountryClick(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleCountryClick(item);
                    }
                  }}
                >

                  <div className="country-card-top">

                    <div className="country-continent-label">
                      {getCountryContinent(item)}
                    </div>

                    {item.flag && (
                      <img
                        className="country-flag"
                        src={item.flag}
                        alt={`${getCountryName(item)} flag`}
                      />
                    )}

                  </div>

                  <h3>
                    {getCountryName(item)}
                  </h3>

                  <p className="country-card-description">
                    {getCountryDescription(item)}
                  </p>

                  <div className="country-card-footer">
                    Explore country
                    <span>→</span>
                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="empty-search">
              No country found for "{searchTerm}".
            </div>

          )}

        </section>
      )}


      {/* =========================================
          CONTINENTS
      ========================================= */}

      {!searchTerm.trim() && (
        <section className="home-section continents-section">

          <div className="section-heading">

            <span className="section-label">
              Explore The World
            </span>

            <h2>
              Continents
            </h2>

            <p>
              Explore countries and useful information
              from around the world.
            </p>

          </div>

          <div className="continent-grid">

            {continents.map((continent) => (

              <button
                type="button"
                className={`continent-card ${
                  selectedContinent === continent.name
                    ? "continent-card-active"
                    : ""
                }`}
                key={continent.name}
                onClick={() =>
                  handleContinentSelect(continent.name)
                }
                style={{
                  backgroundImage:
                    `url("${continent.image}")`,
                }}
              >

                <div className="continent-overlay"></div>

                <div className="continent-content">

                  <span className="continent-label">
                    {continent.code}
                  </span>

                  <h3>
                    {continent.name}
                  </h3>

                  <p>
                    Explore countries →
                  </p>

                </div>

              </button>

            ))}

          </div>

        </section>
      )}


      {/* =========================================
          COUNTRIES
      ========================================= */}

      {!searchTerm.trim() && (
        <section
          className="home-section selected-continent-section"
          id="countries"
        >

          <div className="country-section-header">

            <div>

              <span className="section-label">
                Countries
              </span>

              <h2 className="country-section-title">
                {selectedContinent}
              </h2>

            </div>

            <div className="country-filter">

              <input
                type="text"
                value={countryFilter}
                onChange={(event) =>
                  setCountryFilter(event.target.value)
                }
                placeholder={`Search ${selectedContinent}...`}
              />

            </div>

          </div>

          {filteredCountries.length > 0 ? (

            <div className="country-grid">

              {filteredCountries.map((item, index) => (

                <article
                  className="country-card"
                  key={`${getCountryName(item)}-${index}`}
                  onClick={() => handleCountryClick(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleCountryClick(item);
                    }
                  }}
                >

                  <div className="country-card-top">

                    <div className="country-continent-label">
                      {getCountryContinent(item)}
                    </div>

                    {item.flag && (
                      <img
                        className="country-flag"
                        src={item.flag}
                        alt={`${getCountryName(item)} flag`}
                      />
                    )}

                  </div>

                  <h3>
                    {getCountryName(item)}
                  </h3>

                  <p className="country-card-description">
                    {getCountryDescription(item)}
                  </p>

                  <div className="country-card-footer">
                    Explore {getCountryName(item)}
                    <span>→</span>
                  </div>

                </article>

              ))}

            </div>

          ) : (

            <div className="empty-search">
              No countries found.
            </div>

          )}

        </section>
      )}


      {/* =========================================
          SERVICES
      ========================================= */}

      {!searchTerm.trim() && (
        <section
          className="services-section"
          id="services"
        >

          <div className="services-inner">

            <div className="services-heading">

              <span className="section-label">
                Information & Services
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
                  type="button"
                  className="service-card"
                  key={service}
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                >

                  <div className="service-card-content">

                    <div className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3>
                      {service}
                    </h3>

                  </div>

                  <span className="service-arrow">
                    →
                  </span>

                </button>

              ))}

            </div>

          </div>

        </section>
      )}


      {/* =========================================
          TOOLS
      ========================================= */}

      {!searchTerm.trim() && (
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
                Simple calculators and practical tools
                to help with everyday decisions.
              </p>

            </div>

            <div className="tools-action">

              <button
                type="button"
                onClick={handleExploreTools}
              >
                Explore tools
                <span>→</span>
              </button>

            </div>

          </div>


          {/* =========================================
              PERCENTAGE CALCULATOR
          ========================================= */}

          <div className="percentage-calculator">

            <div className="percentage-calculator-header">

              <span className="section-label">
                Calculator 01
              </span>

              <h3>
                Percentage Calculator
              </h3>

              <p>
                Calculate a percentage of any number quickly
                and easily.
              </p>

            </div>


            <div className="percentage-calculator-body">

              <div className="percentage-input-group">

                <label htmlFor="percentage-amount">
                  Number
                </label>

                <input
                  id="percentage-amount"
                  type="number"
                  inputMode="decimal"
                  value={percentageAmount}
                  onChange={(event) =>
                    setPercentageAmount(event.target.value)
                  }
                  placeholder="Example: 500"
                />

              </div>


              <div className="percentage-symbol">
                ×
              </div>


              <div className="percentage-input-group">

                <label htmlFor="percentage-value">
                  Percentage
                </label>

                <div className="percentage-input-wrapper">

                  <input
                    id="percentage-value"
                    type="number"
                    inputMode="decimal"
                    value={percentageValue}
                    onChange={(event) =>
                      setPercentageValue(event.target.value)
                    }
                    placeholder="Example: 20"
                  />

                  <span>
                    %
                  </span>

                </div>

              </div>


              <div className="percentage-actions">

                <button
                  type="button"
                  className="percentage-calculate-button"
                  onClick={handlePercentageCalculate}
                >
                  Calculate
                </button>

                <button
                  type="button"
                  className="percentage-reset-button"
                  onClick={handlePercentageReset}
                >
                  Reset
                </button>

              </div>

            </div>


            {percentageResult !== null && (
              <div className="percentage-result">

                <span>
                  Result
                </span>

                <strong>
                  {Number(percentageResult).toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2,
                    }
                  )}
                </strong>

                <p>
                  {percentageValue}% of{" "}
                  {Number(percentageAmount).toLocaleString()}
                  {" "}is{" "}
                  {Number(percentageResult).toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2,
                    }
                  )}
                  .
                </p>

              </div>
            )}

          </div>

        </section>
      )}


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="home-footer">

        <div className="home-footer-inner">

          <div>

            <strong>
              Sanolines Global
            </strong>

            <p>
              Global information & services for
              everyday people around the world.
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
                handleNavigation("countries")
              }
            >
              Countries
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("services")
              }
            >
              Services
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("tools")
              }
            >
              Tools
            </button>

          </div>

        </div>

        <div className="home-footer-bottom">
          © 2026 Sanolines Global. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;

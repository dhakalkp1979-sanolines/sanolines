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

  /* =========================================
     PERCENTAGE CALCULATOR
  ========================================= */

  const [percentageAmount, setPercentageAmount] = useState("");
  const [percentageValue, setPercentageValue] = useState("");
  const [percentageResult, setPercentageResult] = useState(null);

  /* =========================================
     SALARY CALCULATOR
  ========================================= */

  const [salaryMonthly, setSalaryMonthly] = useState("");
  const [salaryHours, setSalaryHours] = useState("40");
  const [salaryWeeks, setSalaryWeeks] = useState("52");
  const [salaryResult, setSalaryResult] = useState(null);

  /* =========================================
     CURRENCY CONVERTER
  ========================================= */

  const [currencyAmount, setCurrencyAmount] = useState("");
  const [currencyRate, setCurrencyRate] = useState("");
  const [currencyResult, setCurrencyResult] = useState(null);

  /* =========================================
     AGE CALCULATOR
  ========================================= */

  const [birthDate, setBirthDate] = useState("");
  const [ageResult, setAgeResult] = useState(null);

  /* =========================================
     DATE CALCULATOR
  ========================================= */

  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [dateResult, setDateResult] = useState(null);

  /* =========================================
     UNIT CONVERTER
  ========================================= */

  const [unitValue, setUnitValue] = useState("");
  const [unitType, setUnitType] = useState("km-miles");
  const [unitResult, setUnitResult] = useState(null);

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

  /* =========================================
     PERCENTAGE CALCULATE
  ========================================= */

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

  /* =========================================
     SALARY CALCULATE
  ========================================= */

  const handleSalaryCalculate = () => {
    const monthly = Number(salaryMonthly);
    const hours = Number(salaryHours);
    const weeks = Number(salaryWeeks);

    if (
      !Number.isFinite(monthly) ||
      !Number.isFinite(hours) ||
      !Number.isFinite(weeks) ||
      monthly < 0 ||
      hours <= 0 ||
      weeks <= 0
    ) {
      setSalaryResult(null);
      return;
    }

    const annual = monthly * 12;
    const weekly = monthly * 12 / weeks;
    const hourly = weekly / hours;

    setSalaryResult({
      annual,
      weekly,
      hourly,
    });
  };

  const handleSalaryReset = () => {
    setSalaryMonthly("");
    setSalaryHours("40");
    setSalaryWeeks("52");
    setSalaryResult(null);
  };

  /* =========================================
     CURRENCY CALCULATE
  ========================================= */

  const handleCurrencyCalculate = () => {
    const amount = Number(currencyAmount);
    const rate = Number(currencyRate);

    if (
      !Number.isFinite(amount) ||
      !Number.isFinite(rate) ||
      amount < 0 ||
      rate < 0
    ) {
      setCurrencyResult(null);
      return;
    }

    setCurrencyResult(amount * rate);
  };

  const handleCurrencyReset = () => {
    setCurrencyAmount("");
    setCurrencyRate("");
    setCurrencyResult(null);
  };

  /* =========================================
     AGE CALCULATE
  ========================================= */

  const handleAgeCalculate = () => {
    if (!birthDate) {
      setAgeResult(null);
      return;
    }

    const birth = new Date(`${birthDate}T00:00:00`);
    const today = new Date();

    if (Number.isNaN(birth.getTime()) || birth > today) {
      setAgeResult(null);
      return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();

    if (today.getDate() < birth.getDate()) {
      months -= 1;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAgeResult({
      years,
      months,
    });
  };

  const handleAgeReset = () => {
    setBirthDate("");
    setAgeResult(null);
  };

  /* =========================================
     DATE CALCULATE
  ========================================= */

  const handleDateCalculate = () => {
    if (!dateStart || !dateEnd) {
      setDateResult(null);
      return;
    }

    const start = new Date(`${dateStart}T00:00:00`);
    const end = new Date(`${dateEnd}T00:00:00`);

    if (
      Number.isNaN(start.getTime()) ||
      Number.isNaN(end.getTime())
    ) {
      setDateResult(null);
      return;
    }

    const difference = Math.abs(end - start);
    const days = Math.round(
      difference / (1000 * 60 * 60 * 24)
    );

    setDateResult(days);
  };

  const handleDateReset = () => {
    setDateStart("");
    setDateEnd("");
    setDateResult(null);
  };

  /* =========================================
     UNIT CALCULATE
  ========================================= */

  const handleUnitCalculate = () => {
    const value = Number(unitValue);

    if (!Number.isFinite(value)) {
      setUnitResult(null);
      return;
    }

    let result = 0;

    if (unitType === "km-miles") {
      result = value * 0.621371;
    }

    if (unitType === "miles-km") {
      result = value * 1.609344;
    }

    if (unitType === "kg-pounds") {
      result = value * 2.2046226218;
    }

    if (unitType === "pounds-kg") {
      result = value * 0.45359237;
    }

    if (unitType === "celsius-fahrenheit") {
      result = (value * 9) / 5 + 32;
    }

    if (unitType === "fahrenheit-celsius") {
      result = ((value - 32) * 5) / 9;
    }

    setUnitResult(result);
  };

  const handleUnitReset = () => {
    setUnitValue("");
    setUnitType("km-miles");
    setUnitResult(null);
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
                <span>↓</span>
              </button>

            </div>

          </div>


          {/* =========================================
              TOOL 01 — PERCENTAGE
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


          {/* =========================================
              TOOL 02 — SALARY
          ========================================= */}

          <div className="percentage-calculator salary-calculator">

            <div className="percentage-calculator-header">

              <span className="section-label">
                Calculator 02
              </span>

              <h3>
                Monthly Salary Calculator
              </h3>

              <p>
                Estimate annual, weekly and hourly income
                from a monthly salary.
              </p>

            </div>

            <div className="percentage-calculator-body">

              <div className="percentage-input-group">

                <label htmlFor="salary-monthly">
                  Monthly Salary
                </label>

                <input
                  id="salary-monthly"
                  type="number"
                  inputMode="decimal"
                  value={salaryMonthly}
                  onChange={(event) =>
                    setSalaryMonthly(event.target.value)
                  }
                  placeholder="Example: 1500"
                />

              </div>

              <div className="percentage-input-group">

                <label htmlFor="salary-hours">
                  Hours Per Week
                </label>

                <input
                  id="salary-hours"
                  type="number"
                  inputMode="decimal"
                  value={salaryHours}
                  onChange={(event) =>
                    setSalaryHours(event.target.value)
                  }
                  placeholder="40"
                />

              </div>

              <div className="percentage-input-group">

                <label htmlFor="salary-weeks">
                  Weeks Per Year
                </label>

                <input
                  id="salary-weeks"
                  type="number"
                  inputMode="decimal"
                  value={salaryWeeks}
                  onChange={(event) =>
                    setSalaryWeeks(event.target.value)
                  }
                  placeholder="52"
                />

              </div>

              <div className="percentage-actions">

                <button
                  type="button"
                  className="percentage-calculate-button"
                  onClick={handleSalaryCalculate}
                >
                  Calculate
                </button>

                <button
                  type="button"
                  className="percentage-reset-button"
                  onClick={handleSalaryReset}
                >
                  Reset
                </button>

              </div>

            </div>

            {salaryResult && (
              <div className="percentage-result">

                <span>
                  Estimated Results
                </span>

                <strong>
                  Annual:{" "}
                  {salaryResult.annual.toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2,
                    }
                  )}
                </strong>

                <p>
                  Weekly:{" "}
                  {salaryResult.weekly.toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2,
                    }
                  )}
                  {" • "}
                  Hourly:{" "}
                  {salaryResult.hourly.toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2,
                    }
                  )}
                </p>

              </div>
            )}

          </div>


          {/* =========================================
              TOOL 03 — CURRENCY
          ========================================= */}

          <div className="percentage-calculator currency-calculator">

            <div className="percentage-calculator-header">

              <span className="section-label">
                Calculator 03
              </span>

              <h3>
                Currency Converter
              </h3>

              <p>
                Convert an amount using an exchange rate
                you provide.
              </p>

            </div>

            <div className="percentage-calculator-body">

              <div className="percentage-input-group">

                <label htmlFor="currency-amount">
                  Amount
                </label>

                <input
                  id="currency-amount"
                  type="number"
                  inputMode="decimal"
                  value={currencyAmount}
                  onChange={(event) =>
                    setCurrencyAmount(event.target.value)
                  }
                  placeholder="Example: 100"
                />

              </div>

              <div className="percentage-symbol">
                ×
              </div>

              <div className="percentage-input-group">

                <label htmlFor="currency-rate">
                  Exchange Rate
                </label>

                <input
                  id="currency-rate"
                  type="number"
                  inputMode="decimal"
                  value={currencyRate}
                  onChange={(event) =>
                    setCurrencyRate(event.target.value)
                  }
                  placeholder="Example: 1.08"
                />

              </div>

              <div className="percentage-actions">

                <button
                  type="button"
                  className="percentage-calculate-button"
                  onClick={handleCurrencyCalculate}
                >
                  Convert
                </button>

                <button
                  type="button"
                  className="percentage-reset-button"
                  onClick={handleCurrencyReset}
                >
                  Reset
                </button>

              </div>

            </div>

            {currencyResult !== null && (
              <div className="percentage-result">

                <span>
                  Converted Amount
                </span>

                <strong>
                  {currencyResult.toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 2,
                    }
                  )}
                </strong>

                <p>
                  Amount × exchange rate.
                </p>

              </div>
            )}

          </div>


          {/* =========================================
              TOOL 04 — AGE
          ========================================= */}

          <div className="percentage-calculator age-calculator">

            <div className="percentage-calculator-header">

              <span className="section-label">
                Calculator 04
              </span>

              <h3>
                Age Calculator
              </h3>

              <p>
                Calculate your age from your date of birth.
              </p>

            </div>

            <div className="percentage-calculator-body">

              <div className="percentage-input-group">

                <label htmlFor="birth-date">
                  Date of Birth
                </label>

                <input
                  id="birth-date"
                  type="date"
                  value={birthDate}
                  onChange={(event) =>
                    setBirthDate(event.target.value)
                  }
                />

              </div>

              <div className="percentage-actions">

                <button
                  type="button"
                  className="percentage-calculate-button"
                  onClick={handleAgeCalculate}
                >
                  Calculate Age
                </button>

                <button
                  type="button"
                  className="percentage-reset-button"
                  onClick={handleAgeReset}
                >
                  Reset
                </button>

              </div>

            </div>

            {ageResult && (
              <div className="percentage-result">

                <span>
                  Your Age
                </span>

                <strong>
                  {ageResult.years} years
                </strong>

                <p>
                  Approximately {ageResult.months} additional
                  month{ageResult.months === 1 ? "" : "s"}.
                </p>

              </div>
            )}

          </div>


          {/* =========================================
              TOOL 05 — DATE
          ========================================= */}

          <div className="percentage-calculator date-calculator">

            <div className="percentage-calculator-header">

              <span className="section-label">
                Calculator 05
              </span>

              <h3>
                Date Calculator
              </h3>

              <p>
                Find the number of days between two dates.
              </p>

            </div>

            <div className="percentage-calculator-body">

              <div className="percentage-input-group">

                <label htmlFor="date-start">
                  Start Date
                </label>

                <input
                  id="date-start"
                  type="date"
                  value={dateStart}
                  onChange={(event) =>
                    setDateStart(event.target.value)
                  }
                />

              </div>

              <div className="percentage-input-group">

                <label htmlFor="date-end">
                  End Date
                </label>

                <input
                  id="date-end"
                  type="date"
                  value={dateEnd}
                  onChange={(event) =>
                    setDateEnd(event.target.value)
                  }
                />

              </div>

              <div className="percentage-actions">

                <button
                  type="button"
                  className="percentage-calculate-button"
                  onClick={handleDateCalculate}
                >
                  Calculate Days
                </button>

                <button
                  type="button"
                  className="percentage-reset-button"
                  onClick={handleDateReset}
                >
                  Reset
                </button>

              </div>

            </div>

            {dateResult !== null && (
              <div className="percentage-result">

                <span>
                  Difference
                </span>

                <strong>
                  {dateResult.toLocaleString()} days
                </strong>

                <p>
                  Number of calendar days between the selected
                  dates.
                </p>

              </div>
            )}

          </div>


          {/* =========================================
              TOOL 06 — UNIT
          ========================================= */}

          <div className="percentage-calculator unit-calculator">

            <div className="percentage-calculator-header">

              <span className="section-label">
                Calculator 06
              </span>

              <h3>
                Unit Converter
              </h3>

              <p>
                Convert common distance, weight and temperature
                units.
              </p>

            </div>

            <div className="percentage-calculator-body">

              <div className="percentage-input-group">

                <label htmlFor="unit-value">
                  Value
                </label>

                <input
                  id="unit-value"
                  type="number"
                  inputMode="decimal"
                  value={unitValue}
                  onChange={(event) =>
                    setUnitValue(event.target.value)
                  }
                  placeholder="Example: 10"
                />

              </div>

              <div className="percentage-input-group">

                <label htmlFor="unit-type">
                  Conversion
                </label>

                <select
                  id="unit-type"
                  value={unitType}
                  onChange={(event) => {
                    setUnitType(event.target.value);
                    setUnitResult(null);
                  }}
                >
                  <option value="km-miles">
                    Kilometres → Miles
                  </option>

                  <option value="miles-km">
                    Miles → Kilometres
                  </option>

                  <option value="kg-pounds">
                    Kilograms → Pounds
                  </option>

                  <option value="pounds-kg">
                    Pounds → Kilograms
                  </option>

                  <option value="celsius-fahrenheit">
                    Celsius → Fahrenheit
                  </option>

                  <option value="fahrenheit-celsius">
                    Fahrenheit → Celsius
                  </option>
                </select>

              </div>

              <div className="percentage-actions">

                <button
                  type="button"
                  className="percentage-calculate-button"
                  onClick={handleUnitCalculate}
                >
                  Convert
                </button>

                <button
                  type="button"
                  className="percentage-reset-button"
                  onClick={handleUnitReset}
                >
                  Reset
                </button>

              </div>

            </div>

            {unitResult !== null && (
              <div className="percentage-result">

                <span>
                  Converted Result
                </span>

                <strong>
                  {unitResult.toLocaleString(
                    undefined,
                    {
                      maximumFractionDigits: 4,
                    }
                  )}
                </strong>

                <p>
                  Conversion completed.
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

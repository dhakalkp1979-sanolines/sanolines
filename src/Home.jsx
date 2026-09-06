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

  /* =========================================
     COUNTRY FILTER
  ========================================= */

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

  /* =========================================
     GLOBAL SEARCH
  ========================================= */

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

  /* =========================================
     NAVIGATION
  ========================================= */

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
     COUNTRY PAGE
  ========================================= */

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
          PROFESSIONAL TOOLS
      ========================================= */}

      {!searchTerm.trim() && (
        <section
          className="home-section tools-section"
          id="tools"
        >

          <div className="tools-hero">

            <div className="tools-hero-content">

              <span className="section-label">
                TOOLS
              </span>

              <h2>
                Simple tools.
                <br />
                Useful every day.
              </h2>

              <p>
                Practical calculators and converters designed
                to make everyday decisions faster and easier.
              </p>

              <button
                type="button"
                className="tools-hero-button"
                onClick={handleExploreTools}
              >
                Explore all tools
                <span>↓</span>
              </button>

            </div>

            <div className="tools-hero-image">

              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=85"
                alt="Professional financial and everyday planning workspace"
              />

            </div>

          </div>

          <div className="tools-grid">

            {/* =====================================
                TOOL 01 - PERCENTAGE
            ===================================== */}

            <div className="tool-card">

              <div className="tool-card-number">
                01
              </div>

              <div className="tool-icon">
                %
              </div>

              <h3>
                Percentage Calculator
              </h3>

              <p>
                Quickly calculate percentages for prices,
                discounts, increases and everyday calculations.
              </p>

              <div className="percentage-calculator">

                <div className="percentage-calculator-header">
                  <span>
                    Calculate percentage
                  </span>
                </div>

                <div className="percentage-calculator-body">

                  <div className="percentage-input-group">

                    <label>
                      Amount
                    </label>

                    <div className="percentage-input-wrapper">

                      <input
                        type="number"
                        value={percentageAmount}
                        onChange={(e) =>
                          setPercentageAmount(e.target.value)
                        }
                        placeholder="1000"
                      />

                    </div>

                  </div>

                  <div className="percentage-input-group">

                    <label>
                      Percentage
                    </label>

                    <div className="percentage-input-wrapper">

                      <input
                        type="number"
                        value={percentageValue}
                        onChange={(e) =>
                          setPercentageValue(e.target.value)
                        }
                        placeholder="20"
                      />

                      <span className="percentage-symbol">
                        %
                      </span>

                    </div>

                  </div>

                  <div className="percentage-actions">

                    <button
                      type="button"
                      className="percentage-calculate-button"
                      onClick={() =>
                        setPercentageResult(
                          calculatePercentage(
                            percentageAmount,
                            percentageValue
                          )
                        )
                      }
                    >
                      Calculate
                    </button>

                    <button
                      type="button"
                      className="percentage-reset-button"
                      onClick={() => {
                        setPercentageAmount("");
                        setPercentageValue("");
                        setPercentageResult(null);
                      }}
                    >
                      Reset
                    </button>

                  </div>

                  {percentageResult !== null && (
                    <div className="percentage-result">

                      <span>
                        Result
                      </span>

                      <strong>
                        {percentageResult.toFixed(2)}
                      </strong>

                    </div>
                  )}

                </div>

              </div>

            </div>

            {/* =====================================
                TOOL 02 - SALARY
            ===================================== */}

            <div className="tool-card">

              <div className="tool-card-number">
                02
              </div>

              <div className="tool-icon">
                €
              </div>

              <h3>
                Salary Calculator
              </h3>

              <p>
                Estimate annual, weekly and hourly income
                from a monthly salary.
              </p>

              <div className="tool-form">

                <label>
                  Monthly salary
                </label>

                <input
                  type="number"
                  value={salaryMonthly}
                  onChange={(e) =>
                    setSalaryMonthly(e.target.value)
                  }
                  placeholder="1500"
                />

                <label>
                  Hours per week
                </label>

                <input
                  type="number"
                  value={salaryHours}
                  onChange={(e) =>
                    setSalaryHours(e.target.value)
                  }
                  placeholder="40"
                />

                <label>
                  Weeks per year
                </label>

                <input
                  type="number"
                  value={salaryWeeks}
                  onChange={(e) =>
                    setSalaryWeeks(e.target.value)
                  }
                  placeholder="52"
                />

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    const monthly =
                      Number(salaryMonthly);

                    const hours =
                      Number(salaryHours);

                    const weeks =
                      Number(salaryWeeks);

                    if (
                      monthly > 0 &&
                      hours > 0 &&
                      weeks > 0
                    ) {

                      const annual =
                        monthly * 12;

                      const weekly =
                        annual / weeks;

                      const hourly =
                        weekly / hours;

                      setSalaryResult({
                        annual,
                        weekly,
                        hourly,
                      });

                    }

                  }}
                >
                  Calculate salary
                </button>

                {salaryResult && (

                  <div className="tool-result-list">

                    <div>
                      <span>
                        Annual
                      </span>

                      <strong>
                        €{salaryResult.annual.toFixed(2)}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Weekly
                      </span>

                      <strong>
                        €{salaryResult.weekly.toFixed(2)}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Hourly
                      </span>

                      <strong>
                        €{salaryResult.hourly.toFixed(2)}
                      </strong>
                    </div>

                  </div>

                )}

              </div>

            </div>

            {/* =====================================
                TOOL 03 - CURRENCY
            ===================================== */}

            <div className="tool-card">

              <div className="tool-card-number">
                03
              </div>

              <div className="tool-icon">
                ↔
              </div>

              <h3>
                Currency Converter
              </h3>

              <p>
                Convert money using an exchange rate.
                Live rates can be added later.
              </p>

              <div className="tool-form">

                <label>
                  Amount
                </label>

                <input
                  type="number"
                  value={currencyAmount}
                  onChange={(e) =>
                    setCurrencyAmount(e.target.value)
                  }
                  placeholder="100"
                />

                <label>
                  Exchange rate
                </label>

                <input
                  type="number"
                  value={currencyRate}
                  onChange={(e) =>
                    setCurrencyRate(e.target.value)
                  }
                  placeholder="1.08"
                  step="0.0001"
                />

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    const amount =
                      Number(currencyAmount);

                    const rate =
                      Number(currencyRate);

                    if (
                      amount > 0 &&
                      rate > 0
                    ) {
                      setCurrencyResult(
                        amount * rate
                      );
                    }

                  }}
                >
                  Convert
                </button>

                {currencyResult !== null && (

                  <div className="single-tool-result">

                    <span>
                      Converted amount
                    </span>

                    <strong>
                      {currencyResult.toFixed(2)}
                    </strong>

                  </div>

                )}

              </div>

            </div>

            {/* =====================================
                TOOL 04 - AGE
            ===================================== */}

            <div className="tool-card">

              <div className="tool-card-number">
                04
              </div>

              <div className="tool-icon">
                ◷
              </div>

              <h3>
                Age Calculator
              </h3>

              <p>
                Calculate your exact age from your
                date of birth.
              </p>

              <div className="tool-form">

                <label>
                  Date of birth
                </label>

                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) =>
                    setBirthDate(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    if (!birthDate) return;

                    const birth =
                      new Date(birthDate);

                    const today =
                      new Date();

                    let years =
                      today.getFullYear() -
                      birth.getFullYear();

                    let months =
                      today.getMonth() -
                      birth.getMonth();

                    if (
                      today.getDate() <
                      birth.getDate()
                    ) {
                      months--;
                    }

                    if (months < 0) {
                      years--;
                      months += 12;
                    }

                    setAgeResult({
                      years,
                      months,
                    });

                  }}
                >
                  Calculate age
                </button>

                {ageResult && (

                  <div className="age-result">

                    <strong>
                      {ageResult.years}
                    </strong>

                    <span>
                      years
                    </span>

                    <strong>
                      {ageResult.months}
                    </strong>

                    <span>
                      months
                    </span>

                  </div>

                )}

              </div>

            </div>

            {/* =====================================
                TOOL 05 - DATE
            ===================================== */}

            <div className="tool-card">

              <div className="tool-card-number">
                05
              </div>

              <div className="tool-icon">
                ▣
              </div>

              <h3>
                Date Calculator
              </h3>

              <p>
                Find the number of days between
                two dates.
              </p>

              <div className="tool-form">

                <label>
                  Start date
                </label>

                <input
                  type="date"
                  value={dateStart}
                  onChange={(e) =>
                    setDateStart(e.target.value)
                  }
                />

                <label>
                  End date
                </label>

                <input
                  type="date"
                  value={dateEnd}
                  onChange={(e) =>
                    setDateEnd(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    if (
                      !dateStart ||
                      !dateEnd
                    ) {
                      return;
                    }

                    const start =
                      new Date(dateStart);

                    const end =
                      new Date(dateEnd);

                    const difference =
                      Math.abs(
                        end.getTime() -
                        start.getTime()
                      );

                    const days =
                      Math.ceil(
                        difference /
                        (1000 * 60 * 60 * 24)
                      );

                    setDateResult(days);

                  }}
                >
                  Calculate days
                </button>

                {dateResult !== null && (

                  <div className="single-tool-result">

                    <span>
                      Difference
                    </span>

                    <strong>
                      {dateResult} days
                    </strong>

                  </div>

                )}

              </div>

            </div>

            {/* =====================================
                TOOL 06 - UNIT
            ===================================== */}

            <div className="tool-card">

              <div className="tool-card-number">
                06
              </div>

              <div className="tool-icon">
                ↗
              </div>

              <h3>
                Unit Converter
              </h3>

              <p>
                Convert distance, weight and
                temperature quickly.
              </p>

              <div className="tool-form">

                <label>
                  Value
                </label>

                <input
                  type="number"
                  value={unitValue}
                  onChange={(e) =>
                    setUnitValue(e.target.value)
                  }
                  placeholder="10"
                />

                <label>
                  Conversion
                </label>

                <select
                  value={unitType}
                  onChange={(e) =>
                    setUnitType(e.target.value)
                  }
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

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    const value =
                      Number(unitValue);

                    if (
                      Number.isNaN(value)
                    ) {
                      return;
                    }

                    let result = 0;

                    if (
                      unitType === "km-miles"
                    ) {
                      result =
                        value * 0.621371;
                    }

                    if (
                      unitType === "miles-km"
                    ) {
                      result =
                        value * 1.60934;
                    }

                    if (
                      unitType === "kg-pounds"
                    ) {
                      result =
                        value * 2.20462;
                    }

                    if (
                      unitType === "pounds-kg"
                    ) {
                      result =
                        value * 0.453592;
                    }

                    if (
                      unitType ===
                      "celsius-fahrenheit"
                    ) {
                      result =
                        (value * 9) / 5 + 32;
                    }

                    if (
                      unitType ===
                      "fahrenheit-celsius"
                    ) {
                      result =
                        ((value - 32) * 5) / 9;
                    }

                    setUnitResult(result);

                  }}
                >
                  Convert
                </button>

                {unitResult !== null && (

                  <div className="single-tool-result">

                    <span>
                      Result
                    </span>

                    <strong>
                      {unitResult.toFixed(2)}
                    </strong>

                  </div>

                )}

              </div>

            </div>

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

```jsx
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
        "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Africa",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Europe",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "North America",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "South America",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Australia & Oceania",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=900&q=80",
    },
    {
      name: "Antarctica",
      image:
        "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const services = [
    {
      name: "Government & Official Services",
      icon: "🏛",
    },
    {
      name: "Immigration & Visa",
      icon: "🛂",
    },
    {
      name: "Jobs & Employment",
      icon: "💼",
    },
    {
      name: "Money & Banking",
      icon: "🏦",
    },
    {
      name: "Taxes",
      icon: "📑",
    },
    {
      name: "Healthcare",
      icon: "⚕",
    },
    {
      name: "Education",
      icon: "🎓",
    },
    {
      name: "Transport & Driving",
      icon: "🚗",
    },
    {
      name: "Emergency Services",
      icon: "🚨",
    },
    {
      name: "Travel",
      icon: "✈",
    },
    {
      name: "Housing",
      icon: "⌂",
    },
    {
      name: "Useful Contacts",
      icon: "☎",
    },
    {
      name: "Calculators & Tools",
      icon: "▦",
    },
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

      {/* HEADER */}

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


      {/* HERO */}

      <main>

        <section className="hero" id="home">

          <div className="hero-background" />

          <div className="hero-overlay" />

          <div className="hero-content">

            <div className="hero-label">
              GLOBAL INFORMATION PLATFORM
            </div>

            <h1>
              Information for
              <br />
              the World
            </h1>

            <p>
              Find countries, official services, useful
              information and practical tools in one place.
            </p>

            <form
              className="search-box"
              onSubmit={handleSearch}
            >

              <div className="search-icon">
                ⌕
              </div>

              <input
                type="text"
                placeholder="Search a country, service, job, visa..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              <button type="submit">
                Search
              </button>

            </form>

            <div className="hero-note">
              Explore information from countries around
              the world
            </div>

          </div>

        </section>


        {/* CONTINENTS */}

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
                  onClick={() =>
                    setSelectedContinent(
                      continent.name
                    )
                  }
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


        {/* COUNTRIES */}

        {selectedContinent && (

          <section className="section country-section">

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
                      .slice(0, 5)
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
                    className="country-button"
                    onClick={() =>
                      setSelectedCountry(item)
                    }
                  >
                    Explore {item.country}
                    <span>→</span>
                  </button>

                </article>

              ))}

            </div>

          </section>

        )}


        {/* SEARCH */}

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
                      className="country-button"
                      onClick={() => {
                        setSelectedCountry(item);
                        setSearch("");
                      }}
                    >
                      Explore {item.country}
                      <span>→</span>
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


        {/* SERVICES */}

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
                key={service.name}
                type="button"
                onClick={() =>
                  handleServiceClick(service.name)
                }
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <div className="service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="service-content">

                  <h3>
                    {service.name}
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


        {/* TOOLS */}

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
                  document
                    .getElementById("tools")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                Explore Tools
                <span>→</span>
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


      {/* FOOTER */}

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
```

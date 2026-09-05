import React, { useState } from "react";
import "./Home.css";
import countries from "./data/countries";
import CountryPage from "./pages/CountryPage";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

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
      icon: "🏛",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find government departments, public services, documents and official information.",
      details:
        "Access information about government services, identification documents, registrations, public administration and official procedures.",
    },
    {
      name: "Immigration & Visa",
      icon: "🛂",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
      description:
        "Understand visas, residence, immigration procedures and travel documentation.",
      details:
        "Find practical information about visas, residence permits, immigration procedures, entry requirements and official immigration resources.",
    },
    {
      name: "Jobs & Employment",
      icon: "💼",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
      description:
        "Explore employment information, career resources and workplace services.",
      details:
        "Find job-search resources, employment services, workplace information, CV guidance and useful career tools.",
    },
    {
      name: "Money & Banking",
      icon: "🏦",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Understand banking, payments, accounts, transfers and everyday money matters.",
      details:
        "Find information about bank accounts, payments, international transfers, financial services and everyday money management.",
    },
    {
      name: "Taxes",
      icon: "📑",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find tax information, documents, deadlines and official tax services.",
      details:
        "Understand basic tax responsibilities, tax documents, filing procedures, deadlines and links to official tax authorities.",
    },
    {
      name: "Healthcare",
      icon: "⚕",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find healthcare systems, services, appointments and health information.",
      details:
        "Explore healthcare services, public health systems, emergency care, appointments and useful health resources.",
    },
    {
      name: "Education",
      icon: "🎓",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
      description:
        "Explore schools, universities, training, courses and education services.",
      details:
        "Find information about education systems, universities, vocational training, language learning and student services.",
    },
    {
      name: "Transport & Driving",
      icon: "🚗",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find driving licences, public transport, roads and vehicle information.",
      details:
        "Explore driving licence information, public transport, vehicle registration, road rules and transport services.",
    },
    {
      name: "Emergency Services",
      icon: "🚨",
      image:
        "https://images.unsplash.com/photo-1584483766114-2cea6c2a8e5d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find emergency numbers and essential emergency information.",
      details:
        "Find emergency contacts, police, fire, ambulance and other urgent services. Always use the official emergency number for your country.",
    },
    {
      name: "Travel",
      icon: "✈",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
      description:
        "Plan travel with practical information about countries and destinations.",
      details:
        "Explore travel information including entry requirements, transport, destinations, useful contacts and practical travel preparation.",
    },
    {
      name: "Housing",
      icon: "⌂",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find housing information, renting guidance and accommodation resources.",
      details:
        "Learn about renting, accommodation, housing documents, deposits, utilities and practical housing resources.",
    },
    {
      name: "Useful Contacts",
      icon: "☎",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find important organisations, public offices and useful contacts.",
      details:
        "Find practical contact information for public authorities, services, organisations and other useful resources.",
    },
    {
      name: "Calculators & Tools",
      icon: "▦",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      description:
        "Use simple tools for everyday calculations and comparisons.",
      details:
        "Explore practical calculators and tools for salary, percentages, taxes, currency, dates, conversions and other everyday needs.",
    },
  ];

  const continentCountries = selectedContinent
    ? countries.filter(
        (item) => item.continent === selectedContinent
      )
    : [];

  const filteredCountries = countries.filter((item) => {
    const text = String(
      item.country +
        " " +
        item.continent +
        " " +
        item.famousFor
    ).toLowerCase();

    return text.includes(search.toLowerCase());
  });

  function getContinentImage(continent) {
    const found = continents.find(
      (item) => item.name === continent
    );

    return found
      ? found.image
      : continents[2].image;
  }

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
    const found = services.find(
      (item) => item.name === service
    );

    setSelectedService(found || null);

    setTimeout(() => {
      document
        .getElementById("service-information")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);
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
              Explore countries, services and useful
              information around the world
            </div>

          </div>

        </section>

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
              services and practical information.
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
                  className={
                    "continent-card " +
                    (selectedContinent === continent.name
                      ? "active"
                      : "")
                  }
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
                        'url("' +
                        continent.image +
                        '")',
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
                  style={{
                    backgroundImage:
                      'url("' +
                      getContinentImage(item.continent) +
                      '")',
                  }}
                >

                  <div className="country-card-overlay" />

                  <div className="country-card-content">

                    <div className="country-card-top">

                      <span className="country-continent">
                        {item.continent}
                      </span>

                    </div>

                    <div className="country-spacer" />

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

                  </div>

                </article>

              ))}

            </div>

          </section>

        )}

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
                    style={{
                      backgroundImage:
                        'url("' +
                        getContinentImage(item.continent) +
                        '")',
                    }}
                  >

                    <div className="country-card-overlay" />

                    <div className="country-card-content">

                      <div className="country-card-top">

                        <span className="country-continent">
                          {item.continent}
                        </span>

                      </div>

                      <div className="country-spacer" />

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

                    </div>

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

        <section
          className="section services-section"
          id="services"
        >

          <div className="section-heading">

            <div className="section-label">
              INFORMATION & SERVICES
            </div>

            <h2>
              Everything You Need
            </h2>

            <p>
              Practical information and essential services
              organised clearly in one global platform.
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
                style={{
                  backgroundImage:
                    'url("' +
                    service.image +
                    '")',
                }}
              >

                <div className="service-card-overlay" />

                <div className="service-card-content">

                  <div className="service-top">

                    <div className="service-icon">
                      {service.icon}
                    </div>

                    <div className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                  </div>

                  <div className="service-spacer" />

                  <h3>
                    {service.name}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <div className="service-action">
                    Explore Service
                    <span>→</span>
                  </div>

                </div>

              </button>

            ))}

          </div>

        </section>

        {selectedService && (

          <section
            className="service-information"
            id="service-information"
          >

            <div className="service-information-inner">

              <div className="service-information-image">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                />
              </div>

              <div className="service-information-copy">

                <div className="section-label">
                  SANOLINES SERVICE
                </div>

                <h2>
                  {selectedService.name}
                </h2>

                <p className="service-lead">
                  {selectedService.description}
                </p>

                <p>
                  {selectedService.details}
                </p>

                <div className="service-information-list">

                  <div>
                    <strong>What you can find</strong>
                    <span>
                      Official information, practical guidance
                      and useful resources.
                    </span>
                  </div>

                  <div>
                    <strong>Country specific</strong>
                    <span>
                      Select a country above to find information
                      relevant to that location.
                    </span>
                  </div>

                  <div>
                    <strong>Official sources</strong>
                    <span>
                      Sanolines is designed to help you locate
                      the correct official services and resources.
                    </span>
                  </div>

                </div>

                <button
                  className="service-back-button"
                  type="button"
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                >
                  ← Back to Services
                </button>

              </div>

            </div>

          </section>

        )}

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
                  handleServiceClick("Calculators & Tools")
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

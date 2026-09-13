import React, { useState } from "react";
import countries from "./data/countries";
import CountryPage from "./data/CountryPage";
import "./Home.css";

function Home() {
  const continents = [
    "Asia",
    "Africa",
    "Europe",
    "North America",
    "South America",
    "Oceania",
    "Antarctica",
  ];

  const [selectedContinent, setSelectedContinent] =
    useState("Europe");

  const [selectedCountry, setSelectedCountry] =
    useState(null);

  const filteredCountries = countries.filter(
    (item) =>
      item.continent === selectedContinent
  );

  /* COUNTRY PAGE */

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

  /* HOME PAGE */

  return (
    <div className="home-page">

      {/* HERO */}

      <section className="home-hero">

        <div className="home-hero-content">

          <div className="home-label">
            SANOLINES GLOBAL
          </div>

          <h1>
            Explore The World
          </h1>

          <p>
            Explore countries and useful information
            from around the world.
          </p>

        </div>

      </section>

      {/* MAIN */}

      <main className="home-main">

        {/* CONTINENTS */}

        <div className="home-section-heading">

          <div className="home-section-label">
            CONTINENTS
          </div>

          <h2>
            Explore countries
          </h2>

          <p>
            Explore countries and useful information
            from around the world.
          </p>

        </div>

        <div className="continent-grid">

          {continents.map((continent) => (

            <button
              key={continent}
              type="button"
              className={`continent-card ${
                selectedContinent === continent
                  ? "active"
                  : ""
              }`}
              onClick={() => {
                setSelectedContinent(continent);
                setSelectedCountry(null);
              }}
            >

              <div className="continent-content">

                <div className="continent-label">
                  {continent.toUpperCase()}
                </div>

                <h3>
                  {continent}
                </h3>

                <span>
                  Explore countries →
                </span>

              </div>

            </button>

          ))}

        </div>

        {/* COUNTRIES */}

        <section className="countries-section">

          <div className="home-section-heading">

            <div className="home-section-label">
              COUNTRIES
            </div>

            <h2>
              {selectedContinent}
            </h2>

            <p>
              Select a country to explore useful
              information and services.
            </p>

          </div>

          {filteredCountries.length === 0 ? (

            <div className="no-countries">
              No countries found.
            </div>

          ) : (

            <div className="countries-grid">

              {filteredCountries.map((item) => (

                <button
                  key={item.country}
                  type="button"
                  className="country-card"
                  onClick={() =>
                    setSelectedCountry(item)
                  }
                >

                  <div className="country-card-flag">

                    {item.flag ? (

                      <img
                        src={item.flag}
                        alt={`${item.country} flag`}
                      />

                    ) : (

                      <span>🌍</span>

                    )}

                  </div>

                  <div className="country-card-content">

                    <div className="country-card-continent">
                      {item.continent}
                    </div>

                    <h3>
                      {item.country}
                    </h3>

                    {item.famousFor && (
                      <p>
                        {item.famousFor}
                      </p>
                    )}

                    <span>
                      Explore →
                    </span>

                  </div>

                </button>

              ))}

            </div>

          )}

        </section>

      </main>

      {/* FOOTER */}

      <footer className="home-footer">

        <strong>
          SANOLINES
        </strong>

        <span>
          Global Information & Services
        </span>

        <span>
          © 2026 Sanolines
        </span>

      </footer>

    </div>
  );
}

export default Home;

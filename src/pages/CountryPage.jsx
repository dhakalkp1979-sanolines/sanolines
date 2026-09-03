import React from "react";
import "./CountryPage.css";

function CountryPage({
  country,
  continent,
  famousFor,
  topics = [],
}) {
  const defaultTopics = [
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
    "Calculators & Tools",
  ];

  const countryTopics =
    topics.length > 0 ? topics : defaultTopics;

  return (
    <div className="country-page">

      {/* HEADER */}
      <header className="country-header">

        <div className="country-logo">
          <div className="country-logo-icon">
            S
          </div>

          <div>
            <div className="country-logo-name">
              SANOLINES
            </div>

            <div className="country-logo-tagline">
              Global Information
            </div>
          </div>
        </div>

        <a href="./" className="country-back">
          ← Home
        </a>

      </header>


      {/* HERO */}
      <section className="country-hero">

        <div className="country-hero-overlay">

          <div className="country-continent">
            {continent || "GLOBAL"}
          </div>

          <h1>
            {country || "Country"}
          </h1>

          {famousFor && (
            <p>{famousFor}</p>
          )}

        </div>

      </section>


      {/* CONTENT */}
      <main className="country-main">

        <div className="country-intro">

          <div className="country-label">
            EXPLORE
          </div>

          <h2>
            {country} Information
          </h2>

          <p>
            Find useful information about living,
            working, travelling and accessing services
            in {country}.
          </p>

        </div>


        {/* TOPICS */}
        <div className="country-topic-grid">

          {countryTopics.map((topic, index) => (

            <a
              href="#"
              className="country-topic-card"
              key={topic}
            >

              <div className="topic-top">

                <span className="topic-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="topic-arrow">
                  →
                </span>

              </div>

              <h3>
                {topic}
              </h3>

              <p>
                Information, useful guidance and
                links to relevant services.
              </p>

            </a>

          ))}

        </div>


        {/* OFFICIAL INFORMATION */}
        <section className="official-box">

          <div className="official-badge">
            OFFICIAL SOURCES
          </div>

          <h2>
            Information from trusted sources
          </h2>

          <p>
            Sanolines helps you find information and
            connect directly to relevant official
            government websites, public services and
            trusted organisations.
          </p>

          <p>
            Always check the original official source
            for current requirements, fees, deadlines
            and procedures.
          </p>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="country-footer">

        <div className="footer-logo">
          SANOLINES
        </div>

        <div className="footer-links">

          <a href="./">
            Home
          </a>

          <a href="./disclaimer.html">
            Disclaimer
          </a>

          <a href="./privacy.html">
            Privacy Policy
          </a>

        </div>

        <div className="footer-copy">
          © 2026 Sanolines — Global Information
        </div>

      </footer>

    </div>
  );
}

export default CountryPage;

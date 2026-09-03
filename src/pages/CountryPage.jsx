import React from "react";

function CountryPage({ country, continent, famousFor, topics = [] }) {
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
      <header className="country-page-header">

        <div className="country-page-logo">
          <div className="country-page-logo-icon">
            S
          </div>

          <div>
            <div className="country-page-logo-name">
              SANO LINES
            </div>

            <div className="country-page-logo-tagline">
              Global Information & Services
            </div>
          </div>
        </div>

        <a href="./" className="country-page-home">
          ← Back to Home
        </a>

      </header>


      {/* COUNTRY HERO */}
      <section className="country-hero">

        <div className="country-label">
          {continent || "GLOBAL"}
        </div>

        <h1>
          {country || "Country"}
        </h1>

        {famousFor && (
          <p>
            {famousFor}
          </p>
        )}

      </section>


      {/* TOPICS */}
      <main className="country-content">

        <div className="country-section-heading">

          <div className="country-small-label">
            EXPLORE
          </div>

          <h2>
            Information & Services
          </h2>

          <p>
            Find useful information and official services
            for {country || "this country"}.
          </p>

        </div>


        <div className="country-topic-grid">

          {countryTopics.map((topic) => (

            <a
              href="#"
              className="country-topic-card"
              key={topic}
            >

              <div className="country-topic-number">
                {String(
                  countryTopics.indexOf(topic) + 1
                ).padStart(2, "0")}
              </div>

              <h3>
                {topic}
              </h3>

              <p>
                Information, guidance and useful
                resources.
              </p>

              <span className="country-topic-arrow">
                →
              </span>

            </a>

          ))}

        </div>


        {/* INFORMATION NOTICE */}
        <section className="country-notice">

          <h2>
            Official Information
          </h2>

          <p>
            Sanolines provides general information and
            helps users find relevant official services.
            Always verify important requirements,
            fees, deadlines and procedures with the
            appropriate official authority.
          </p>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="country-footer">

        <div className="country-footer-links">

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

        <div className="country-footer-bottom">
          © 2026 Sanolines. Global Information & Services.
        </div>

      </footer>

    </div>
  );
}

export default CountryPage;

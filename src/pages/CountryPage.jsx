import React, { useState } from "react";
import "./CountryPage.css";
import countryServices from "../data/countryServices";
import ImmigrationPage from "./ImmigrationPage";

function CountryPage({
  country,
  continent,
  famousFor,
  topics = [],
}) {
  const [showImmigration, setShowImmigration] = useState(false);

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

  const services = countryServices[country] || {};

  const countryImages = {
    Portugal:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=2200&q=85",
  };

  const countryFlags = {
    Portugal: "🇵🇹",
  };

  const topicIcons = {
    "Government & Official Services": "🏛️",
    "Immigration & Visa": "🛂",
    "Jobs & Employment": "💼",
    "Money & Banking": "💳",
    Taxes: "🧾",
    Healthcare: "🏥",
    Education: "🎓",
    "Transport & Driving": "🚗",
    "Emergency Services": "🚨",
    Travel: "✈️",
    Housing: "🏠",
    "Useful Contacts": "📞",
    "Calculators & Tools": "🧮",
  };

  const heroImage =
    countryImages[country] ||
    "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=2200&q=85";

  const flag = countryFlags[country] || "🌍";


  /* IMMIGRATION PAGE */

  if (showImmigration) {
    return (
      <div>

        <ImmigrationPage
          country={country}
        />

        <button
          onClick={() => setShowImmigration(false)}
          style={{
            position: "fixed",
            bottom: "25px",
            left: "25px",
            zIndex: 100,
            padding: "12px 18px",
            borderRadius: "8px",
            border: "none",
            background: "#10243e",
            color: "#ffffff",
            cursor: "pointer",
            fontWeight: "700",
          }}
        >
          ← Back to {country}
        </button>

      </div>
    );
  }


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

      <section
        className="country-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(10, 22, 38, 0.88),
              rgba(10, 22, 38, 0.58),
              rgba(10, 22, 38, 0.35)
            ),
            url("${heroImage}")
          `,
        }}
      >

        <div className="country-hero-overlay">

          <div className="country-continent">
            {continent || "GLOBAL"}
          </div>

          <div className="country-identity">

            <div className="country-flag">
              {flag}
            </div>

            <div>

              <h1>
                {country || "Country"}
              </h1>

              <div className="country-region">
                {continent || "Global"}
              </div>

            </div>

          </div>

          {famousFor && (
            <p>
              {famousFor}
            </p>
          )}

        </div>

      </section>


      {/* QUICK BAR */}

      <section className="country-quick-bar">

        <div className="quick-item">

          <span className="quick-icon">
            🌍
          </span>

          <div>
            <strong>Continent</strong>

            <span>
              {continent || "Global"}
            </span>
          </div>

        </div>


        <div className="quick-item">

          <span className="quick-icon">
            🏛️
          </span>

          <div>
            <strong>Country</strong>

            <span>
              {country || "Country"}
            </span>
          </div>

        </div>


        <div className="quick-item">

          <span className="quick-icon">
            🔗
          </span>

          <div>
            <strong>Official Sources</strong>

            <span>
              Direct links
            </span>
          </div>

        </div>

      </section>


      {/* MAIN */}

      <main className="country-main">

        <div className="country-intro">

          <div className="country-label">
            EXPLORE {country?.toUpperCase()}
          </div>

          <h2>
            {country} Information
          </h2>

          <p>
            Find useful information and connect
            directly to relevant official websites,
            public services and trusted organisations.
          </p>

        </div>


        {/* TOPICS */}

        <div className="country-topic-grid">

          {countryTopics.map((topic, index) => {

            const service = services[topic];

            const icon =
              topicIcons[topic] || "📌";

            const isImmigration =
              topic === "Immigration & Visa";

            return (
              <article
                className="country-topic-card"
                key={topic}
                onClick={() => {
                  if (isImmigration) {
                    setShowImmigration(true);
                  }
                }}
                style={{
                  cursor: isImmigration
                    ? "pointer"
                    : "default",
                }}
              >

                <div className="topic-card-header">

                  <div className="topic-icon">
                    {icon}
                  </div>

                  <div className="topic-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                </div>


                <h3>
                  {topic}
                </h3>


                <p>
                  {service?.description ||
                    "Information, useful guidance and relevant resources."}
                </p>


                {isImmigration && (

                  <div
                    className="service-links"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  >

                    <div
                      className="service-link"
                      style={{
                        cursor: "pointer",
                      }}
                    >

                      <div className="service-link-text">

                        <span className="official-label">
                          SANOLINES INFORMATION PAGE
                        </span>

                        <span className="service-name">
                          Explore Immigration & Visa
                        </span>

                      </div>

                      <span className="service-arrow">
                        →
                      </span>

                    </div>

                  </div>

                )}


                {!isImmigration &&
                  service?.links?.length > 0 && (

                    <div className="service-links">

                      {service.links.map((link) => (

                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="service-link"
                        >

                          <div className="service-link-text">

                            <span className="official-label">
                              {link.official
                                ? "OFFICIAL SOURCE"
                                : "SANOLINES"}
                            </span>

                            <span className="service-name">
                              {link.name}
                            </span>

                          </div>

                          <span className="service-arrow">
                            →
                          </span>

                        </a>

                      ))}

                    </div>

                  )}

              </article>
            );

          })}

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

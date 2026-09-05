import React, { useState } from "react";
import countryServices from "../data/countryServices";
import serviceKeyMap from "../data/serviceContent";
import ImmigrationPage from "./ImmigrationPage";
import ServicePage from "./ServicePage";
import "./CountryPage.css";

function CountryPage({
  country,
  continent,
  famousFor,
  topics = [],
}) {
  const [showImmigration, setShowImmigration] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

  const serviceTopics =
    topics.length > 0 ? topics : defaultTopics;

  const services = countryServices[country] || {};

  if (showImmigration) {
    return (
      <ImmigrationPage
        country={country}
        continent={continent}
        onBack={() => setShowImmigration(false)}
      />
    );
  }

  if (selectedService) {
    const serviceKey = serviceKeyMap[selectedService];
    const serviceData = services[serviceKey] || {};

    return (
      <ServicePage
        country={country}
        continent={continent}
        service={selectedService}
        description={
          serviceData.description ||
          "Find useful information, guidance and resources for " +
            selectedService +
            " in " +
            country +
            "."
        }
        links={serviceData.links || []}
        onBack={() => setSelectedService(null)}
      />
    );
  }

  return (
    <div className="country-page">

      <header className="country-header">
        <button
          type="button"
          className="country-home"
          onClick={() => {
            window.location.href = "./";
          }}
        >
          ← Home
        </button>

        <div className="country-header-title">
          SANOLINES
        </div>

        <div className="country-header-right">
          GLOBAL INFORMATION
        </div>
      </header>

      <section className="country-hero">
        <div className="country-hero-overlay"></div>

        <div className="country-hero-content">

          <div className="country-breadcrumb">
            SANOLINES
            <span> / </span>
            {continent || "GLOBAL"}
          </div>

          <div className="country-continent">
            {continent || "GLOBAL"}
          </div>

          <div className="country-flag">
            🌍
          </div>

          <h1>{country}</h1>

          {famousFor && (
            <p>{famousFor}</p>
          )}

          <div className="country-hero-note">
            Information & services for {country}
          </div>

        </div>
      </section>

      <main className="country-main">

        <div className="country-section-heading">

          <div className="country-section-label">
            SANOLINES COUNTRY GUIDE
          </div>

          <h2>
            Explore {country}
          </h2>

          <p>
            Find practical information, services and useful
            resources for people living in, moving to or
            visiting {country}.
          </p>

        </div>

        <div className="country-services-grid">

          {serviceTopics.map((topic, index) => {
            const serviceKey = serviceKeyMap[topic];
            const service = services[serviceKey];

            const isImmigration =
              topic === "Immigration & Visa";

            const isTools =
              topic === "Calculators & Tools";

            return (
              <button
                key={topic}
                type="button"
                className="country-service-card"
                onClick={() => {

                  if (isImmigration) {
                    setShowImmigration(true);
                    return;
                  }

                  if (isTools) {
                    window.location.href = "./#tools";
                    return;
                  }

                  setSelectedService(topic);
                }}
              >

                <div className="country-service-top">

                  <div className="country-service-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="country-service-icon">
                    {getServiceIcon(topic)}
                  </div>

                </div>

                <div className="country-service-content">

                  <h3>{topic}</h3>

                  <p>
                    {service?.description ||
                      "Information and useful resources for " +
                        topic +
                        " in " +
                        country +
                        "."}
                  </p>

                </div>

                <div className="country-service-footer">

                  <span>
                    Explore information
                  </span>

                  <span className="country-service-arrow">
                    →
                  </span>

                </div>

              </button>
            );
          })}

        </div>

        <section className="country-info-strip">

          <div>
            <span className="country-info-label">
              COUNTRY
            </span>

            <strong>{country}</strong>
          </div>

          <div>
            <span className="country-info-label">
              CONTINENT
            </span>

            <strong>{continent || "Global"}</strong>
          </div>

          <div>
            <span className="country-info-label">
              SERVICES
            </span>

            <strong>{serviceTopics.length} areas</strong>
          </div>

        </section>

      </main>

      <footer className="country-footer">

        <div className="country-footer-brand">
          <strong>SANOLINES</strong>

          <span>
            Global Information & Services
          </span>
        </div>

        <div className="country-footer-copy">
          Information platform for countries,
          services and everyday life.
        </div>

        <div className="country-footer-year">
          © 2026 Sanolines
        </div>

      </footer>

    </div>
  );
}

function getServiceIcon(topic) {
  const icons = {
    "Government & Official Services": "🏛",
    "Immigration & Visa": "🛂",
    "Jobs & Employment": "💼",
    "Money & Banking": "🏦",
    Taxes: "📑",
    Healthcare: "⚕",
    Education: "🎓",
    "Transport & Driving": "🚗",
    "Emergency Services": "🚨",
    Travel: "✈",
    Housing: "⌂",
    "Useful Contacts": "☎",
    "Calculators & Tools": "▦",
  };

  return icons[topic] || "•";
}

export default CountryPage;

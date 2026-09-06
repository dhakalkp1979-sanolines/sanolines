import React, { useState } from "react";
import asiaServices from "../data/asiaServices";
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
    "Legal Aid & Free Lawyers",
    "Migrant & Refugee Support",
    "Associations & Community Help",
    "Social Security & Benefits",
    "Family & Children Support",
    "Consumer Protection",
    "Disability & Accessibility Support",
    "Food, Shelter & Basic Assistance",
    "Calculators & Tools",
  ];

  const serviceTopics =
    topics.length > 0 ? topics : defaultTopics;

  /*
    ASIA SERVICES

    The country name must match the name used in asiaServices.js.
    Example:
    "Türkiye" must remain "Türkiye".
  */
  const services = asiaServices[country] || {};

  /*
    Get service data safely.

    The new asiaServices.js uses the full service names
    as its keys. We first check the service name directly,
    then check serviceKeyMap for compatibility with the
    older system.
  */
  const getServiceData = (topic) => {
    if (services[topic]) {
      return services[topic];
    }

    const serviceKey = serviceKeyMap[topic];

    if (serviceKey && services[serviceKey]) {
      return services[serviceKey];
    }

    return {};
  };

  /* IMMIGRATION PAGE */

  if (showImmigration) {
    return (
      <ImmigrationPage
        country={country}
        continent={continent}
        onBack={() => setShowImmigration(false)}
      />
    );
  }

  /* SERVICE PAGE */

  if (selectedService) {
    const serviceData = getServiceData(selectedService);

    return (
      <ServicePage
        country={country}
        continent={continent}
        service={selectedService}
        description={
          serviceData.description ||
          `Find useful information and trusted resources for ${selectedService} in ${country}.`
        }
        links={serviceData.links || []}
        onBack={() => setSelectedService(null)}
      />
    );
  }

  /* COUNTRY PAGE */

  return (
    <div className="country-page">

      {/* HEADER */}

      <header className="country-header">

        <a href="./" className="country-home">
          ← Home
        </a>

        <div className="country-header-title">
          SANOLINES
        </div>

      </header>

      {/* HERO */}

      <section className="country-hero">

        <div className="country-hero-content">

          <div className="country-continent">
            {continent || "GLOBAL"}
          </div>

          <div className="country-flag">
            🌍
          </div>

          <h1>
            {country}
          </h1>

          {famousFor && (
            <p>
              {famousFor}
            </p>
          )}

        </div>

      </section>

      {/* SERVICES */}

      <main className="country-main">

        <div className="country-section-heading">

          <div className="country-section-label">
            INFORMATION & SERVICES
          </div>

          <h2>
            Explore {country}
          </h2>

          <p>
            Select a service to find useful information
            and trusted resources for {country}.
          </p>

        </div>

        <div className="country-services-grid">

          {serviceTopics.map((topic, index) => {

            const service = getServiceData(topic);

            return (
              <button
                key={topic}
                type="button"
                className="country-service-card"
                onClick={() => {

                  /* IMMIGRATION */

                  if (topic === "Immigration & Visa") {
                    setShowImmigration(true);
                    return;
                  }

                  /* CALCULATORS & TOOLS */

                  if (topic === "Calculators & Tools") {
                    window.location.href = "./#tools";
                    return;
                  }

                  /* NORMAL SERVICE */

                  setSelectedService(topic);
                }}
              >

                <div className="country-service-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="country-service-content">

                  <h3>
                    {topic}
                  </h3>

                  <p>
                    {service.description ||
                      `Information and useful resources for ${topic} in ${country}.`}
                  </p>

                </div>

                <div className="country-service-arrow">
                  →
                </div>

              </button>
            );

          })}

        </div>

      </main>

      {/* FOOTER */}

      <footer className="country-footer">

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

export default CountryPage;

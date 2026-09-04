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
    const serviceKey = serviceKeyMap[selectedService];
    const serviceData = services[serviceKey] || {};

    return (
      <ServicePage
        country={country}
        continent={continent}
        service={selectedService}
        description={
          serviceData.description ||
          `Find useful information, guidance and resources for ${selectedService} in ${country}.`
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

            const serviceKey = serviceKeyMap[topic];
            const service = services[serviceKey];

            return (
              <button
                key={topic}
                type="button"
                className="country-service-card"
                onClick={() => {

                  if (topic === "Immigration & Visa") {
                    setShowImmigration(true);
                    return;
                  }

                  if (topic === "Calculators & Tools") {
                    window.location.href = "/#calculators";
                    return;
                  }

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
                    {service?.description ||
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

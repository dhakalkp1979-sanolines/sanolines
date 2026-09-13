import React, { useState } from "react";
import asiaServices from "./asiaServices";
import serviceKeyMap from "./serviceContent";
import ImmigrationPage from "../pages/ImmigrationPage";
import ServicePage from "../pages/ServicePage";
import "../pages/CountryPage.css";

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
  ];

  const serviceTopics =
    topics.length > 0 ? topics : defaultTopics;

  const services = asiaServices[country] || {};

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

        information={serviceData.information || []}

        usefulInformation={
          serviceData.usefulInformation || []
        }

        authority={serviceData.authority || ""}

        sourceType={serviceData.sourceType || ""}

        officialWebsite={
          serviceData.officialWebsite || ""
        }

        websiteButton={
          serviceData.websiteButton || null
        }

        mapButton={
          serviceData.mapButton || null
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

                  if (topic === "Immigration & Visa") {
                    setShowImmigration(true);
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

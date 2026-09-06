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

  /*
   * SANOLINES GLOBAL
   * Information directory only.
   *
   * Sanolines does not provide these services directly.
   * We share useful information and, where available,
   * point visitors toward official organisations,
   * associations and support services.
   */

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

  /*
   * If the country data already contains its own topics,
   * use them. Otherwise use the complete 20-section guide.
   */
  const serviceTopics = defaultTopics;

  const services = countryServices[country] || {};

  /*
   * Immigration has its own detailed page.
   */
  if (showImmigration) {
    return (
      <ImmigrationPage
        country={country}
        continent={continent}
        onBack={() => setShowImmigration(false)}
      />
    );
  }

  /*
   * Individual service page.
   */
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
          "Find useful information, guidance and verified resources for " +
            selectedService +
            " in " +
            country +
            ". Sanolines shares information so you can contact the relevant organisation yourself."
        }
        links={serviceData.links || []}
        onBack={() => setSelectedService(null)}
      />
    );
  }

  return (
    <div className="country-page">

      {/* =====================================================
          HEADER
      ===================================================== */}

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


      {/* =====================================================
          COUNTRY HERO
      ===================================================== */}

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
            Information & useful resources for {country}
          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN COUNTRY GUIDE
      ===================================================== */}

      <main className="country-main">

        <div className="country-section-heading">

          <div className="country-section-label">
            SANOLINES COUNTRY GUIDE
          </div>

          <h2>
            Explore {country}
          </h2>

          <p>
            Find useful information about government services,
            everyday life, legal support, employment, immigration,
            community organisations and other resources in {country}.
          </p>

          <div className="country-guide-note">
            Sanolines is an information platform. We do not provide
            these services directly. Where verified resources are
            available, visitors can use the information to contact
            the relevant organisation themselves.
          </div>

        </div>


        {/* =====================================================
            20 SERVICE / INFORMATION CARDS
        ===================================================== */}

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

                {/* CARD TOP */}

                <div className="country-service-top">

                  <div className="country-service-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="country-service-icon">
                    {getServiceIcon(topic)}
                  </div>

                </div>


                {/* CARD CONTENT */}

                <div className="country-service-content">

                  <h3>
                    {topic}
                  </h3>

                  <p>
                    {service?.description ||
                      getServiceDescription(topic, country)}
                  </p>

                </div>


                {/* CARD FOOTER */}

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


        {/* =====================================================
            COUNTRY INFORMATION
        ===================================================== */}

        <section className="country-info-strip">

          <div>
            <span className="country-info-label">
              COUNTRY
            </span>

            <strong>
              {country}
            </strong>
          </div>

          <div>
            <span className="country-info-label">
              CONTINENT
            </span>

            <strong>
              {continent || "Global"}
            </strong>
          </div>

          <div>
            <span className="country-info-label">
              INFORMATION AREAS
            </span>

            <strong>
              {serviceTopics.length} areas
            </strong>
          </div>

        </section>


        {/* =====================================================
            SANOLINES INFORMATION NOTICE
        ===================================================== */}

        <section className="country-information-notice">

          <div className="country-information-notice-number">
            01
          </div>

          <div>

            <h3>
              Information, not the service provider
            </h3>

            <p>
              Sanolines shares information to help people find
              the right organisation or service. Government
              departments, lawyers, associations, charities,
              hospitals and other organisations operate their
              own services. Visitors should contact the relevant
              organisation directly and check its current
              requirements.
            </p>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="country-footer">

        <div className="country-footer-brand">

          <strong>
            SANOLINES
          </strong>

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


/* =========================================================
   SERVICE DESCRIPTIONS
   ========================================================= */

function getServiceDescription(topic, country) {
  const descriptions = {
    "Government & Official Services":
      `Find information about government departments, public administration and official services in ${country}.`,

    "Immigration & Visa":
      `Find information about visas, residence, immigration procedures and citizenship in ${country}.`,

    "Jobs & Employment":
      `Find information about employment services, job searching, contracts, worker rights and employment support in ${country}.`,

    "Money & Banking":
      `Find information about banking, payments, accounts and financial services available in ${country}.`,

    Taxes:
      `Find information about tax authorities, taxpayer services, registration and tax procedures in ${country}.`,

    Healthcare:
      `Find information about public healthcare, health services, hospitals and healthcare support in ${country}.`,

    Education:
      `Find information about schools, universities, vocational training and education services in ${country}.`,

    "Transport & Driving":
      `Find information about driving licences, vehicle services, public transport and road rules in ${country}.`,

    "Emergency Services":
      `Find emergency numbers and information about police, fire, ambulance and urgent assistance in ${country}.`,

    Travel:
      `Find useful travel information, official travel requirements, transport hubs and travel services for ${country}.`,

    Housing:
      `Find information about renting, housing services, tenant support, social housing and homelessness assistance in ${country}.`,

    "Useful Contacts":
      `Find useful government departments, public organisations, helplines and important contacts in ${country}.`,

    "Legal Aid & Free Lawyers":
      `Find information about legal aid, access to justice and organisations that may provide free or low-cost legal assistance in ${country}.`,

    "Migrant & Refugee Support":
      `Find organisations and support resources that may assist migrants, refugees and newcomers in ${country}.`,

    "Associations & Community Help":
      `Find community associations, charities and local organisations that may provide practical support in ${country}.`,

    "Social Security & Benefits":
      `Find information about social security, pensions, unemployment support and public benefits in ${country}.`,

    "Family & Children Support":
      `Find information about family services, childcare, children's services and family support organisations in ${country}.`,

    "Consumer Protection":
      `Find information about consumer rights, complaints, refunds and consumer protection organisations in ${country}.`,

    "Disability & Accessibility Support":
      `Find information about disability services, accessibility, benefits and support organisations in ${country}.`,

    "Food, Shelter & Basic Assistance":
      `Find information about food assistance, shelters, emergency accommodation and essential support organisations in ${country}.`,
  };

  return (
    descriptions[topic] ||
    `Find useful information and resources for ${topic} in ${country}.`
  );
}


/* =========================================================
   SERVICE ICONS
   ========================================================= */

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
    "Legal Aid & Free Lawyers": "⚖",
    "Migrant & Refugee Support": "🌍",
    "Associations & Community Help": "🤝",
    "Social Security & Benefits": "▣",
    "Family & Children Support": "⌂",
    "Consumer Protection": "✓",
    "Disability & Accessibility Support": "♿",
    "Food, Shelter & Basic Assistance": "♡",
    "Calculators & Tools": "▦",
  };

  return icons[topic] || "•";
}

export default CountryPage;

import React from "react";
import "./ServicePage.css";

function ServicePage({
  country,
  continent,
  service,
  description,
  information = [],
  links = [],
  onBack,
}) {
  // Create a Google Maps search for the organisation/service
  const getMapUrl = (linkName) => {
    const searchText = `${linkName} ${country}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      searchText
    )}`;
  };

  // General map search for the service in the country
  const getServiceMapUrl = () => {
    const searchText = `${service} ${country}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      searchText
    )}`;
  };

  return (
    <div className="service-page">

      {/* HEADER */}
      <header className="service-header">
        <div className="service-logo">

          <div className="service-logo-icon">
            S
          </div>

          <div>
            <div className="service-logo-name">
              SANOLINES
            </div>

            <div className="service-logo-tagline">
              Global Information & Services
            </div>
          </div>

        </div>

        <button
          className="service-back"
          onClick={onBack}
          type="button"
        >
          ← Back
        </button>
      </header>


      {/* HERO */}
      <section className="service-hero">

        <div className="service-hero-content">

          <div className="service-label">
            {continent || "GLOBAL"}
          </div>

          <div className="service-country">
            {country || "Country"}
          </div>

          <h1>
            {service || "Service"}
          </h1>

          <p>
            {description ||
              `Find useful information, guidance and trusted resources for ${
                service || "this service"
              } in ${country || "this country"}.`}
          </p>

          <div className="service-directory-note">
            Sanolines shares information so you can
            contact the relevant organisation yourself.
            Sanolines does not provide the service
            directly.
          </div>

        </div>

      </section>


      {/* MAIN */}
      <main className="service-main">

        {/* INTRO */}
        <section className="service-intro">

          <div className="service-section-label">
            SANOLINES INFORMATION
          </div>

          <h2>
            {service}
          </h2>

          <p>
            Explore information and trusted resources
            related to {service?.toLowerCase()} in{" "}
            {country}.
          </p>

        </section>


        {/* SERVICE DESCRIPTION */}
        <section className="service-information-card">

          <div className="service-information-number">
            01
          </div>

          <div>

            <h3>
              What this service covers
            </h3>

            <p>
              {description ||
                `Information about ${service?.toLowerCase()} in ${country}.`}
            </p>

          </div>

        </section>


        {/* INFORMATION */}
        {information.length > 0 && (
          <section className="service-details">

            <div className="service-section-label">
              INFORMATION
            </div>

            <h2>
              Useful Information
            </h2>

            <div className="service-detail-list">

              {information.map((item, index) => (

                <div
                  className="service-detail-item"
                  key={index}
                >

                  <div className="service-detail-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <p>
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </section>
        )}


        {/* OFFICIAL SOURCES */}
        {links.length > 0 && (
          <section className="service-links-section">

            <div className="service-section-label">
              OFFICIAL & TRUSTED RESOURCES
            </div>

            <h2>
              Where to find more information
            </h2>

            <p className="service-links-intro">
              Use the official or trusted source below
              to check current information, requirements,
              applications and contact details.
            </p>


            {/* RESOURCE CARDS */}
            <div className="service-resource-list">

              {links.map((link, index) => (

                <div
                  className="service-resource-card"
                  key={link.name || index}
                >

                  {/* NUMBER */}
                  <div className="resource-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  {/* INFORMATION */}
                  <div className="resource-content">

                    <span className="resource-label">
                      {link.official
                        ? "OFFICIAL SOURCE"
                        : "TRUSTED RESOURCE"}
                    </span>

                    <strong>
                      {link.name}
                    </strong>

                    <small>
                      Official information and
                      contact resources
                    </small>

                  </div>


                  {/* BUTTONS */}
                  <div className="resource-actions">

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-website-button"
                    >
                      Website →
                    </a>

                    <a
                      href={getMapUrl(link.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resource-map-button"
                    >
                      Map →
                    </a>

                  </div>

                </div>

              ))}

            </div>

          </section>
        )}


        {/* SERVICE MAP */}
        <section className="service-map-section">

          <div className="service-section-label">
            LOCATION
          </div>

          <h2>
            Find this service on the map
          </h2>

          <p>
            Search Google Maps for relevant offices,
            organisations and service locations in{" "}
            {country}.
          </p>

          <a
            href={getServiceMapUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="service-main-map-button"
          >
            View {service} on Google Maps →
          </a>

        </section>


        {/* NO LINK */}
        {links.length === 0 && (
          <section className="service-information-card">

            <div className="service-information-number">
              02
            </div>

            <div>

              <h3>
                Official information
              </h3>

              <p>
                No specific source has been added to
                this category yet. Please check the
                country's official government portal
                for current information.
              </p>

              <a
                href={getServiceMapUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="service-main-map-button"
              >
                Search on Google Maps →
              </a>

            </div>

          </section>
        )}


        {/* IMPORTANT */}
        <section className="service-notice">

          <div className="service-notice-label">
            IMPORTANT
          </div>

          <h2>
            Always check the original source
          </h2>

          <p>
            Information, requirements, fees and
            procedures can change. Always verify
            important details with the relevant
            official authority or trusted organisation.
          </p>

        </section>


        {/* SANOLINES DISCLAIMER */}
        <section className="service-directory-notice">

          <strong>
            SANOLINES INFORMATION PLATFORM
          </strong>

          <p>
            Sanolines provides information and points
            visitors toward relevant organisations and
            official resources. Sanolines does not
            provide government, legal, medical,
            immigration, employment or other services
            directly.
          </p>

        </section>

      </main>


      {/* FOOTER */}
      <footer className="service-footer">

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

export default ServicePage;

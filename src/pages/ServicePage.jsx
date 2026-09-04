import React from "react";
import "./ServicePage.css";

function ServicePage({
  country,
  continent,
  service,
  description,
  links = [],
  onBack,
}) {
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
              `Find useful information, guidance and relevant resources for ${service || "this service"} in ${country || "this country"}.`}
          </p>

        </div>

      </section>


      {/* MAIN */}

      <main className="service-main">

        <div className="service-intro">

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

        </div>


        {/* INFORMATION CARD */}

        <section className="service-information-card">

          <div className="service-information-number">
            01
          </div>

          <div>

            <h3>
              Useful Information
            </h3>

            <p>
              Sanolines organizes important information
              to help you understand services and find
              the correct resources for your country.
            </p>

          </div>

        </section>


        {/* LINKS */}

        {links.length > 0 && (

          <section className="service-links-section">

            <div className="service-section-label">
              USEFUL RESOURCES
            </div>

            <h2>
              Official & Trusted Sources
            </h2>

            <div className="service-resource-list">

              {links.map((link, index) => (

                <a
                  key={link.name || index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="service-resource"
                >

                  <div className="resource-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="resource-content">

                    <span className="resource-label">
                      {link.official
                        ? "OFFICIAL SOURCE"
                        : "USEFUL RESOURCE"}
                    </span>

                    <strong>
                      {link.name}
                    </strong>

                  </div>

                  <span className="resource-arrow">
                    →
                  </span>

                </a>

              ))}

            </div>

          </section>

        )}


        {/* NOTICE */}

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
            official authority or trusted organization.
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

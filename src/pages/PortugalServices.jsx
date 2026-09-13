import React from "react";
import "./PortugalServices.css";

const services = [
  {
    number: "01",
    title: "Government & Official Services",
    description:
      "Find Portuguese government departments, public services, forms, applications and official information.",
    link: "https://www.gov.pt/",
    linkText: "Official Government Portal →",
  },
  {
    number: "02",
    title: "Immigration & Visa",
    description:
      "Information about residence permits, immigration procedures, visas and residence services in Portugal.",
    link: "https://aima.gov.pt/",
    linkText: "AIMA Official Website →",
  },
  {
    number: "03",
    title: "Jobs & Employment",
    description:
      "Find employment services, job opportunities, professional training, internships and employment support.",
    link: "https://www.iefp.pt/",
    linkText: "IEFP Official Website →",
  },
  {
    number: "04",
    title: "Money & Banking",
    description:
      "Useful information about banks, banking services, payments and financial services in Portugal.",
    link: "https://www.bportugal.pt/",
    linkText: "Banco de Portugal →",
  },
  {
    number: "05",
    title: "Taxes",
    description:
      "Information about NIF, tax obligations, tax declarations and Portuguese tax services.",
    link: "https://www.portaldasfinancas.gov.pt/",
    linkText: "Portal das Finanças →",
  },
  {
    number: "06",
    title: "Healthcare",
    description:
      "Find information about Portugal's National Health Service, healthcare access and health services.",
    link: "https://www.sns.gov.pt/",
    linkText: "SNS Official Website →",
  },
  {
    number: "07",
    title: "Education",
    description:
      "Information about schools, universities, higher education, qualifications and education services.",
    link: "https://www.dges.gov.pt/",
    linkText: "DGES Official Website →",
  },
  {
    number: "08",
    title: "Transport & Driving",
    description:
      "Find information about driving licences, vehicle services, transport regulations and mobility.",
    link: "https://www.imt-ip.pt/",
    linkText: "IMT Official Website →",
  },
  {
    number: "09",
    title: "Emergency Services",
    description:
      "Important emergency contacts and official information for police, medical emergencies, fire and civil protection.",
    link: "https://www.gov.pt/guias/contactos-de-emergencia-em-portugal",
    linkText: "Emergency Contacts →",
  },
  {
    number: "10",
    title: "Travel",
    description:
      "Useful information for travelling in Portugal, tourism, destinations and official travel resources.",
    link: "https://www.visitportugal.com/",
    linkText: "Visit Portugal →",
  },
  {
    number: "11",
    title: "Housing",
    description:
      "Information about housing, rental support, housing programmes and public housing resources.",
    link: "https://www.ihru.pt/",
    linkText: "IHRU Official Website →",
  },
  {
    number: "12",
    title: "Useful Contacts",
    description:
      "Find important public authorities, organisations, telephone numbers and useful contacts in Portugal.",
    link: "https://www.gov.pt/",
    linkText: "Government Directory →",
  },
  {
    number: "13",
    title: "Legal Aid & Free Lawyers",
    description:
      "Information about legal protection and access to legal assistance for people who need support.",
    link: "https://justica.gov.pt/Servicos/Protecao-juridica",
    linkText: "Legal Protection →",
  },
  {
    number: "14",
    title: "Migrant & Refugee Support",
    description:
      "Find information and organisations supporting migrants, refugees and people integrating into Portugal.",
    link: "https://www.gov.pt/servicos/centros-locais-de-apoio-a-integracao-de-migrantes-claim-",
    linkText: "CLAIM Information →",
  },
  {
    number: "15",
    title: "Associations & Community Help",
    description:
      "Find community organisations, associations and support networks available in Portugal.",
    link: "https://www.gov.pt/",
    linkText: "Find Official Resources →",
  },
  {
    number: "16",
    title: "Social Security & Benefits",
    description:
      "Information about Social Security, benefits, contributions, pensions and social support.",
    link: "https://www.seg-social.pt/",
    linkText: "Social Security →",
  },
  {
    number: "17",
    title: "Family & Children Support",
    description:
      "Find official information about family support, children, parental benefits and family services.",
    link: "https://www.seg-social.pt/",
    linkText: "Family Support →",
  },
  {
    number: "18",
    title: "Consumer Protection",
    description:
      "Information about consumer rights, complaints, contracts and consumer protection services.",
    link: "https://www.consumidor.gov.pt/",
    linkText: "Consumer Portal →",
  },
  {
    number: "19",
    title: "Disability & Accessibility Support",
    description:
      "Find information about disability support, accessibility, rights and relevant public services.",
    link: "https://www.inr.pt/",
    linkText: "INR Official Website →",
  },
  {
    number: "20",
    title: "Food, Shelter & Basic Assistance",
    description:
      "Find information about organisations providing food assistance, social support and basic needs.",
    link: "https://www.bancoalimentar.pt/",
    linkText: "Banco Alimentar →",
  },
];

function PortugalServices({ onNavigate }) {
  return (
    <div className="portugal-services-page">
      <nav className="site-nav">
        <div className="nav-inner">
          <div className="nav-brand-container">
            <div className="nav-logo">S</div>

            <div className="nav-brand-text">
              <strong>SANOLINES</strong>
              <span>Global Information & Services</span>
            </div>
          </div>

          <div className="nav-links">
            <button onClick={() => onNavigate?.("Home")}>
              Home
            </button>

            <button onClick={() => onNavigate?.("Portugal")}>
              Portugal
            </button>

            <button className="active">
              Services
            </button>

            <button onClick={() => onNavigate?.("Tools")}>
              Tools
            </button>
          </div>
        </div>
      </nav>

      <header className="services-hero">
        <div className="services-hero-container">
          <span className="services-label">
            PORTUGAL INFORMATION DIRECTORY
          </span>

          <h1>Portugal Services</h1>

          <p>
            Find useful information, official websites and trusted
            resources for everyday services in Portugal.
          </p>

          <div className="services-search">
            <input
              type="text"
              placeholder="Search Portugal services, NIF, jobs, healthcare..."
            />

            <button type="button">
              Search
            </button>
          </div>
        </div>
      </header>

      <main className="services-content">
        <div className="services-heading">
          <div>
            <span>PORTUGAL</span>

            <h2>
              Information & Services
            </h2>

            <p>
              Explore important service categories and access
              official or trusted sources directly.
            </p>
          </div>

          <img
            src="https://flagcdn.com/w80/pt.png"
            alt="Portugal flag"
            className="services-flag"
          />
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.number}
            >
              <div className="service-card-number">
                {service.number}
              </div>

              <div className="service-card-body">
                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.linkText}
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="directory-notice">
          <strong>Sanolines Directory Notice</strong>

          <p>
            Sanolines is an information-sharing directory.
            We do not directly provide government, immigration,
            legal, medical, employment, housing or other services.
            The information and links are provided to help visitors
            find the relevant official or trusted organisation.
          </p>
        </section>
      </main>

      <footer className="services-footer">
        <div className="services-footer-inner">
          <div>
            <strong>SANOLINES</strong>

            <p>
              Global information & official service directories
              for everyday people worldwide.
            </p>
          </div>

          <div className="footer-links-group">
            <button onClick={() => onNavigate?.("Home")}>
              Home
            </button>

            <button onClick={() => onNavigate?.("Portugal")}>
              Portugal
            </button>

            <button onClick={() => onNavigate?.("Services")}>
              Services
            </button>

            <button onClick={() => onNavigate?.("Tools")}>
              Tools
            </button>
          </div>
        </div>

        <div className="services-footer-bottom">
          © 2026 Sanolines Global. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default PortugalServices;

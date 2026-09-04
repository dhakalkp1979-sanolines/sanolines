import React from "react";
import "./ImmigrationPage.css";

function ImmigrationPage({
  country = "Portugal",
}) {
  const sections = [
    {
      icon: "🛂",
      title: "Visa Types",
      text: "Explore official information about different visa options for entering Portugal.",
      label: "GOV.PT",
      url: "https://www.gov.pt/servicos/pedir-um-visto-de-residencia-para-trabalho-dependente",
      link: "View visa information",
    },
    {
      icon: "🏠",
      title: "Residence Permit",
      text: "Find official information about residence permits and requirements.",
      label: "AIMA",
      url: "https://aima.gov.pt/pt/viver/autorizacao-de-residencia-regime-e-requisitos-gerais-art-o-77-o-n-o-1",
      link: "View residence information",
    },
    {
      icon: "💼",
      title: "Work in Portugal",
      text: "Information for people who want to work and live in Portugal.",
      label: "GOV.PT",
      url: "https://www.gov.pt/servicos/pedir-um-visto-de-residencia-para-trabalho-dependente",
      link: "View work visa information",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Family Reunification",
      text: "Information for eligible family members joining relatives living in Portugal.",
      label: "AIMA",
      url: "https://aima.gov.pt/",
      link: "Visit AIMA",
    },
    {
      icon: "🔄",
      title: "Residence Renewal",
      text: "Find official information about renewing an existing residence permit.",
      label: "GOV.PT",
      url: "https://www.gov.pt/servicos/renovar-a-autorizacao-de-residencia",
      link: "View renewal information",
    },
    {
      icon: "🇪🇺",
      title: "EU Citizens",
      text: "Information for EU citizens and their family members living in Portugal.",
      label: "AIMA",
      url: "https://aima.gov.pt/",
      link: "Visit AIMA",
    },
    {
      icon: "🎓",
      title: "Study in Portugal",
      text: "Information for international students and education-related immigration.",
      label: "GOV.PT",
      url: "https://www.gov.pt/educacao",
      link: "View education information",
    },
    {
      icon: "📞",
      title: "Immigration Help",
      text: "Find official immigration information and contact services.",
      label: "AIMA",
      url: "https://aima.gov.pt/",
      link: "Visit AIMA",
    },
  ];

  return (
    <div className="immigration-page">

      {/* HEADER */}

      <header className="immigration-header">

        <div className="immigration-brand">

          <div className="immigration-logo">
            S
          </div>

          <div>
            <div className="immigration-brand-name">
              SANOLINES
            </div>

            <div className="immigration-brand-tagline">
              Global Information
            </div>
          </div>

        </div>

        <a
          href="./"
          className="immigration-home"
        >
          ← Home
        </a>

      </header>


      {/* HERO */}

      <section className="immigration-hero">

        <div className="immigration-hero-overlay">

          <div className="immigration-breadcrumb">
            {country} / Immigration & Visa
          </div>

          <div className="immigration-hero-icon">
            🛂
          </div>

          <h1>
            Immigration & Visa
          </h1>

          <p>
            Find official information about visas,
            residence permits, work, family
            reunification and immigration services
            in {country}.
          </p>

        </div>

      </section>


      {/* MAIN */}

      <main className="immigration-main">

        <section className="immigration-intro">

          <div className="immigration-label">
            {country.toUpperCase()}
          </div>

          <h2>
            Find what you need
          </h2>

          <p>
            Select an immigration topic below.
            Sanolines helps you find the right
            information and then connects you directly
            to the official source.
          </p>

        </section>


        {/* IMMIGRATION SECTIONS */}

        <section className="immigration-options">

          {sections.map((section) => (

            <article
              className="immigration-card"
              key={section.title}
            >

              <div className="immigration-card-icon">
                {section.icon}
              </div>

              <h3>
                {section.title}
              </h3>

              <p>
                {section.text}
              </p>

              <div className="immigration-status">
                {section.label}
              </div>

              <a
                href={section.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {section.link} →
              </a>

            </article>

          ))}

        </section>


        {/* HOW SANOLINES WORKS */}

        <section className="immigration-process">

          <div className="process-label">
            HOW SANOLINES WORKS
          </div>

          <h2>
            Find information in 3 simple steps
          </h2>

          <div className="process-grid">

            <div className="process-step">

              <div className="process-number">
                01
              </div>

              <h3>
                Choose a topic
              </h3>

              <p>
                Select the immigration information
                you are looking for.
              </p>

            </div>


            <div className="process-step">

              <div className="process-number">
                02
              </div>

              <h3>
                Understand
              </h3>

              <p>
                Sanolines helps you understand where
                to find the relevant information.
              </p>

            </div>


            <div className="process-step">

              <div className="process-number">
                03
              </div>

              <h3>
                Go to the official source
              </h3>

              <p>
                Use the direct link to check the latest
                official requirements and procedures.
              </p>

            </div>

          </div>

        </section>


        {/* IMPORTANT NOTICE */}

        <section className="immigration-notice">

          <div className="notice-icon">
            !
          </div>

          <div>

            <h3>
              Always check the official source
            </h3>

            <p>
              Immigration rules, requirements, fees,
              appointments and procedures can change.
              Sanolines provides navigation and
              information. The official authority
              determines the current requirements.
            </p>

          </div>

        </section>


        {/* OFFICIAL SOURCES */}

        <section className="official-sources">

          <div className="official-sources-label">
            OFFICIAL SOURCES
          </div>

          <h2>
            Portugal immigration authorities
          </h2>

          <div className="official-source-links">

            <a
              href="https://aima.gov.pt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                AIMA
              </strong>

              <span>
                Agency for Integration, Migration and Asylum →
              </span>
            </a>


            <a
              href="https://www.gov.pt/guias/migrantes-vistos-e-autorizacoes-para-entrar-e-viver-em-portugal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                gov.pt
              </strong>

              <span>
                Migrants, visas and residence information →
              </span>
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="immigration-footer">

        <div className="immigration-footer-logo">
          SANOLINES
        </div>

        <div>
          Global Information
        </div>

        <div>
          © 2026 Sanolines
        </div>

      </footer>

    </div>
  );
}

export default ImmigrationPage;

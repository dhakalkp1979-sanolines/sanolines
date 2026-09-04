import React from "react";
import "./ImmigrationPage.css";

function ImmigrationPage({
  country = "Portugal",
}) {
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
            residence permits, immigration procedures
            and services for people coming to {country}.
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
            Immigration information
          </h2>

          <p>
            Sanolines brings together important
            immigration information and connects you
            directly with official government sources.
          </p>

        </section>


        {/* MAIN OPTIONS */}

        <section className="immigration-options">

          <article className="immigration-card">

            <div className="immigration-card-icon">
              🛂
            </div>

            <h3>
              Visas
            </h3>

            <p>
              Information about residence visas and
              other visa options for entering Portugal.
            </p>

            <div className="immigration-status">
              OFFICIAL INFORMATION
            </div>

            <a
              href="https://www.gov.pt/servicos/pedir-um-visto-de-residencia-para-trabalho-dependente"
              target="_blank"
              rel="noopener noreferrer"
            >
              View official visa information →
            </a>

          </article>


          <article className="immigration-card">

            <div className="immigration-card-icon">
              🏠
            </div>

            <h3>
              Residence Permit
            </h3>

            <p>
              Information about applying for an
              authorization of residence in Portugal.
            </p>

            <div className="immigration-status">
              AIMA
            </div>

            <a
              href="https://aima.gov.pt/pt/viver/autorizacao-de-residencia-regime-e-requisitos-gerais-art-o-77-o-n-o-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View AIMA residence information →
            </a>

          </article>


          <article className="immigration-card">

            <div className="immigration-card-icon">
              🔄
            </div>

            <h3>
              Residence Renewal
            </h3>

            <p>
              Find information about renewing an
              existing residence permit.
            </p>

            <div className="immigration-status">
              OFFICIAL INFORMATION
            </div>

            <a
              href="https://www.gov.pt/servicos/renovar-a-autorizacao-de-residencia"
              target="_blank"
              rel="noopener noreferrer"
            >
              View renewal information →
            </a>

          </article>


          <article className="immigration-card">

            <div className="immigration-card-icon">
              👨‍👩‍👧
            </div>

            <h3>
              Family Reunification
            </h3>

            <p>
              Information for eligible family members
              joining relatives living in Portugal.
            </p>

            <div className="immigration-status">
              AIMA
            </div>

            <a
              href="https://aima.gov.pt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit AIMA →
            </a>

          </article>


          <article className="immigration-card">

            <div className="immigration-card-icon">
              💼
            </div>

            <h3>
              Work Immigration
            </h3>

            <p>
              Information about immigration routes
              connected with employment in Portugal.
            </p>

            <div className="immigration-status">
              OFFICIAL INFORMATION
            </div>

            <a
              href="https://www.gov.pt/servicos/pedir-um-visto-de-residencia-para-trabalho-dependente"
              target="_blank"
              rel="noopener noreferrer"
            >
              View work visa information →
            </a>

          </article>


          <article className="immigration-card">

            <div className="immigration-card-icon">
              🇪🇺
            </div>

            <h3>
              EU Citizens
            </h3>

            <p>
              Information for EU citizens and their
              family members living in Portugal.
            </p>

            <div className="immigration-status">
              AIMA
            </div>

            <a
              href="https://aima.gov.pt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit AIMA →
            </a>

          </article>

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
              information, but the official authority
              is responsible for the current procedure.
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

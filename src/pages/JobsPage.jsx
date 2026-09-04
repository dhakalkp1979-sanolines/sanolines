import React from "react";
import "./JobsPage.css";

function JobsPage({
  country = "Portugal",
}) {
  const sections = [
    {
      icon: "🔎",
      title: "Find a Job",
      text: "Search current employment opportunities through the official IEFP employment portal.",
      label: "IEFP",
      url: "https://iefponline.iefp.pt/",
      link: "Search job offers",
    },
    {
      icon: "📝",
      title: "Register for Employment",
      text: "Learn how to register with IEFP and access employment services and support.",
      label: "IEFP",
      url: "https://www.iefp.pt/inscricao-para-emprego",
      link: "View registration information",
    },
    {
      icon: "🎓",
      title: "Training",
      text: "Find professional training and courses that can help improve your skills.",
      label: "IEFP",
      url: "https://iefponline.iefp.pt/",
      link: "Find training",
    },
    {
      icon: "🏢",
      title: "Employment Offices",
      text: "Find IEFP employment and training centres in different areas of Portugal.",
      label: "IEFP",
      url: "https://iefponline.iefp.pt/IEFP/centros-emprego-pesquisar.do",
      link: "Find an employment office",
    },
    {
      icon: "💶",
      title: "Employment Support",
      text: "Explore official employment measures and support available to eligible job seekers.",
      label: "GOV.PT",
      url: "https://www.gov.pt/servicos/procurar-apoios-para-conseguir-um-emprego",
      link: "View employment support",
    },
    {
      icon: "🌍",
      title: "Work in Europe",
      text: "Explore EURES and European employment opportunities for people looking for work abroad.",
      label: "EURES / IEFP",
      url: "https://iefponline.iefp.pt/",
      link: "Explore European opportunities",
    },
    {
      icon: "🏆",
      title: "Internships",
      text: "Find information about professional internships and employment-entry programmes.",
      label: "IEFP",
      url: "https://iefponline.iefp.pt/",
      link: "Find internships",
    },
    {
      icon: "📋",
      title: "Work Information",
      text: "Learn about working in Portugal, contracts, rights and important employment information.",
      label: "GOV.PT",
      url: "https://www.gov.pt/guias/trabalhar-em-portugal",
      link: "Working in Portugal",
    },
  ];

  return (
    <div className="jobs-page">

      {/* HEADER */}

      <header className="jobs-header">

        <div className="jobs-brand">

          <div className="jobs-logo">
            S
          </div>

          <div>
            <div className="jobs-brand-name">
              SANOLINES
            </div>

            <div className="jobs-brand-tagline">
              Global Information
            </div>
          </div>

        </div>

        <a
          href="./"
          className="jobs-home"
        >
          ← Home
        </a>

      </header>


      {/* HERO */}

      <section className="jobs-hero">

        <div className="jobs-hero-overlay">

          <div className="jobs-breadcrumb">
            {country} / Jobs & Employment
          </div>

          <div className="jobs-hero-icon">
            💼
          </div>

          <h1>
            Jobs & Employment
          </h1>

          <p>
            Find jobs, employment services, training,
            internships and official work information
            in {country}.
          </p>

        </div>

      </section>


      {/* MAIN */}

      <main className="jobs-main">

        <section className="jobs-intro">

          <div className="jobs-label">
            {country.toUpperCase()}
          </div>

          <h2>
            Find your next opportunity
          </h2>

          <p>
            Sanolines helps you find the right
            employment information and connects you
            directly with official employment services.
          </p>

        </section>


        {/* JOB OPTIONS */}

        <section className="jobs-options">

          {sections.map((section) => (

            <article
              className="jobs-card"
              key={section.title}
            >

              <div className="jobs-card-icon">
                {section.icon}
              </div>

              <h3>
                {section.title}
              </h3>

              <p>
                {section.text}
              </p>

              <div className="jobs-status">
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


        {/* QUICK START */}

        <section className="jobs-start">

          <div className="jobs-start-label">
            QUICK START
          </div>

          <h2>
            Looking for work in Portugal?
          </h2>

          <p>
            Start with the official IEFP employment
            portal. You can search job offers, training,
            internships and other employment services.
          </p>

          <a
            href="https://iefponline.iefp.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="jobs-start-button"
          >
            Open IEFP Employment Portal →
          </a>

        </section>


        {/* HOW IT WORKS */}

        <section className="jobs-process">

          <div className="jobs-process-label">
            HOW SANOLINES WORKS
          </div>

          <h2>
            Find employment information in 3 steps
          </h2>

          <div className="jobs-process-grid">

            <div className="jobs-process-step">

              <div className="jobs-process-number">
                01
              </div>

              <h3>
                Choose
              </h3>

              <p>
                Choose the type of employment
                information you need.
              </p>

            </div>


            <div className="jobs-process-step">

              <div className="jobs-process-number">
                02
              </div>

              <h3>
                Explore
              </h3>

              <p>
                Read the basic information and
                understand where to go.
              </p>

            </div>


            <div className="jobs-process-step">

              <div className="jobs-process-number">
                03
              </div>

              <h3>
                Apply
              </h3>

              <p>
                Continue directly to the official
                employment service or job portal.
              </p>

            </div>

          </div>

        </section>


        {/* IMPORTANT NOTICE */}

        <section className="jobs-notice">

          <div className="jobs-notice-icon">
            !
          </div>

          <div>

            <h3>
              Check the original job source
            </h3>

            <p>
              Job offers, requirements, salaries,
              deadlines and employment programmes can
              change. Always check the official source
              before applying.
            </p>

          </div>

        </section>


        {/* OFFICIAL SOURCES */}

        <section className="jobs-official">

          <div className="jobs-official-label">
            OFFICIAL SOURCES
          </div>

          <h2>
            Portugal employment services
          </h2>

          <div className="jobs-official-grid">

            <a
              href="https://www.iefp.pt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                IEFP
              </strong>

              <span>
                Employment and professional training →
              </span>
            </a>


            <a
              href="https://iefponline.iefp.pt/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                IEFPonline
              </strong>

              <span>
                Job offers, training and internships →
              </span>
            </a>


            <a
              href="https://www.gov.pt/servicos/procurar-emprego"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                gov.pt
              </strong>

              <span>
                Official job-search service →
              </span>
            </a>

          </div>

        </section>

      </main>


      {/* FOOTER */}

      <footer className="jobs-footer">

        <div className="jobs-footer-logo">
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

export default JobsPage;

import React from "react";
import "./JobsEmployment.css";

const services = [
  {
    title: "Job Offers",
    text: "Search current job vacancies available in Portugal.",
    link: "https://iefponline.iefp.pt/IEFP/search.do?cat=ofertaEmprego",
  },
  {
    title: "Employment Registration",
    text: "Register with IEFP and access employment services.",
    link: "https://iefponline.iefp.pt/IEFP/index2.jsp",
  },
  {
    title: "Training & Skills",
    text: "Find professional training and develop your skills.",
    link: "https://iefponline.iefp.pt/IEFP/index2.jsp",
  },
  {
    title: "Internships",
    text: "Explore internship opportunities through IEFP.",
    link: "https://iefponline.iefp.pt/IEFP/index2.jsp",
  },
  {
    title: "Employment Support",
    text: "Find support for entering or returning to the labour market.",
    link: "https://iefponline.iefp.pt/IEFP/index2.jsp",
  },
  {
    title: "EURES — Jobs in Europe",
    text: "Explore employment opportunities across Europe.",
    link: "https://iefponline.iefp.pt/IEFP/index2.jsp",
  },
  {
    title: "Employment Offices",
    text: "Find IEFP employment and professional training centres.",
    link: "https://iefponline.iefp.pt/IEFP/centros-emprego-pesquisar.do",
  },
];

function JobsEmployment() {
  return (
    <main className="jobs-page">

      <section className="jobs-hero">
        <h1>Jobs & Employment</h1>

        <p>
          Find jobs, training, internships and employment support
          services in Portugal.
        </p>
      </section>

      <section className="jobs-services">

        {services.map((service) => (
          <article className="jobs-card" key={service.title}>

            <h2>{service.title}</h2>

            <p>{service.text}</p>

            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Official Service
            </a>

          </article>
        ))}

      </section>

      <section className="jobs-info">

        <h2>Official Employment Information</h2>

        <p>
          Sanolines provides a simple starting point for finding
          official employment resources. Job offers, training,
          internships and employment services are available through
          IEFP.
        </p>

      </section>

    </main>
  );
}

export default JobsEmployment;

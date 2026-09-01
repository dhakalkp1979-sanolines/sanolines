import { portugalServices } from "../data/servicesData";

function PortugalServices() {
  return (
    <section id="portugal">
      <h2>Portugal Services</h2>

      <p>
        Simple information about important services in Portugal.
        Always check the official website for the latest requirements,
        fees and procedures.
      </p>

      <div className="service-grid">
        {portugalServices.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a
              href={service.official}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PortugalServices;

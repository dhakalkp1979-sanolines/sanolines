import { visaTopics } from "../data/servicesData";

function VisaImmigration() {
  return (
    <section id="visa">
      <h2>Visa & Immigration</h2>

      <p>
        Simple information about Portugal visas and immigration.
        Requirements, fees and procedures can change, so always check
        the official source before applying.
      </p>

      <div className="visa-grid">
        {visaTopics.map((topic) => (
          <article key={topic.title} className="visa-card">
            <h3>{topic.title}</h3>

            <p>{topic.description}</p>

            <a
              href={topic.official}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Information →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VisaImmigration;

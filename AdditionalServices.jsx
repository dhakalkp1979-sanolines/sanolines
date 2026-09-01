import { additionalSections } from "../data/additionalData";

function AdditionalServices() {
  return (
    <section id="additional">
      <h2>More Useful Information</h2>

      <p>
        Useful information and official resources for everyday life in
        Portugal.
      </p>

      <div className="service-grid">
        {additionalSections.map((section) => (
          <article key={section.title} className="service-card">
            <h3>{section.title}</h3>

            <p>{section.description}</p>

            <a
              href={section.link}
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

export default AdditionalServices;

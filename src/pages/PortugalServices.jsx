function PortugalServices() {
  return (
    <section id="portugal">
      <h2>Portugal Services</h2>

      <p>
        Simple information about important services in Portugal.
      </p>

      <div className="service-grid">

        <article className="service-card">
          <h3>AIMA / Residence Permit</h3>
          <p>
            Residence permits, immigration procedures and official
            information for Portugal.
          </p>
          <a href="/immigration">
            Explore Immigration & Residence →
          </a>
        </article>

        <article className="service-card">
          <h3>NIF</h3>
          <p>
            Portuguese tax identification number information.
          </p>
          <a
            href="https://www.portaldasfinancas.gov.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website →
          </a>
        </article>

        <article className="service-card">
          <h3>NISS</h3>
          <p>
            Social Security identification information.
          </p>
          <a
            href="https://www.seg-social.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website →
          </a>
        </article>

        <article className="service-card">
          <h3>SNS</h3>
          <p>
            Portugal National Health Service information.
          </p>
          <a
            href="https://www.sns.gov.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website →
          </a>
        </article>

        <article className="service-card">
          <h3>Jobs & Employment</h3>
          <p>
            Find job opportunities, employment services, professional
            training, internships and support in Portugal.
          </p>
          <a href="/jobs-employment">
            Explore Jobs & Employment →
          </a>
        </article>

        <article className="service-card">
          <h3>Social Security</h3>
          <p>
            Social Security services and information.
          </p>
          <a
            href="https://www.seg-social.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Official Website →
          </a>
        </article>

      </div>
    </section>
  );
}

export default PortugalServices;

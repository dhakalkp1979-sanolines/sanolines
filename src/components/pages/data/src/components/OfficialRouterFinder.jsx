import { officialLinks } from "../data/officialLinks";

function OfficialRouterFinder() {
  return (
    <section id="directory">
      <h2>Find Official Website</h2>

      <p>
        Find the official Portuguese website for the service you need.
        Sanolines provides information and directs you to the official source.
      </p>

      <div className="official-links">
        {officialLinks.map((item) => (
          <article key={item.name} className="official-card">
            <h3>{item.name}</h3>

            <p>{item.description}</p>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Official Website →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OfficialRouterFinder;

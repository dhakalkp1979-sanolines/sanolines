import { useState } from "react";
import { officialLinks } from "../data/officialLinks";

function OfficialRouterFinder() {
  const [search, setSearch] = useState("");

  const filteredLinks = officialLinks.filter((item) =>
    `${item.name} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <section id="directory">
      <h2>Find Official Website</h2>

      <p>
        Search for the government service you need and go directly to the
        official website.
      </p>

      <input
        type="text"
        placeholder="Search AIMA, NIF, NISS, SNS, IEFP..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "14px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontSize: "16px",
          marginTop: "15px"
        }}
      />

      <div className="official-links">
        {filteredLinks.map((item) => (
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

      {filteredLinks.length === 0 && <p>No matching service found.</p>}
    </section>
  );
}

export default OfficialRouterFinder;

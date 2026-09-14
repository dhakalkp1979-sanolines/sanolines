import React, { useState } from "react";

const categories = [
  {
    number: "01",
    title: "Immigration & Residency",
    description: "Official portals for visas, residence permits, and residency support.",
    bgColor: "#5c4077", // Deep purple shade
  },
  {
    number: "02",
    title: "Tax & Public Finance",
    description: "Tax submission, declarations, and fiscal management portals.",
    bgColor: "#773b4c", // Deep burgundy shade
  },
  {
    number: "03",
    title: "Social Security",
    description: "Benefits, contributions, family support, and social security services.",
    bgColor: "#5c4077",
  },
  {
    number: "04",
    title: "Employment & Jobs",
    description: "Job centers, professional training, and career listings.",
    bgColor: "#773b4c",
  },
  {
    number: "05",
    title: "Healthcare & Public Health",
    description: "Health service portals, scheduling, and digital medical user cards.",
    bgColor: "#5c4077",
  },
  {
    number: "06",
    title: "Housing & Utilities",
    description: "Property registration, rental support, and energy resources.",
    bgColor: "#773b4c",
  },
  {
    number: "07",
    title: "Transportation & Transit",
    description: "Public transit networks, driving licenses, and vehicle registration.",
    bgColor: "#5c4077",
  },
  {
    number: "08",
    title: "Education & Learning",
    description: "Public schools, university enrolment, and student resources.",
    bgColor: "#773b4c",
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter((cat) =>
    cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", fontFamily: "sans-serif", padding: "40px 20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#111", marginBottom: "10px" }}>
          Sanolines
        </h1>
        <p style={{ color: "#666", fontSize: "1rem", marginBottom: "25px" }}>
          Your clean, independent directory for official public services and information.
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Search services, portals, or information..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "600px",
              padding: "14px 20px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "1rem",
              outline: "none",
              boxShadow: "0 2px 5px rgba(0,0,0,0.02)"
            }}
          />
        </div>
      </header>

      {selectedCategory ? (
        <div style={{ maxWidth: "800px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
          <button
            onClick={() => setSelectedCategory(null)}
            style={{ marginBottom: "20px", padding: "8px 16px", cursor: "pointer", background: "#eee", border: "none", borderRadius: "4px", fontWeight: "bold" }}
          >
            &larr; Back to Directory
          </button>
          <h2 style={{ color: selectedCategory.bgColor, fontSize: "2rem", marginBottom: "15px" }}>
            {selectedCategory.number}. {selectedCategory.title}
          </h2>
          <p style={{ color: "#444", fontSize: "1.1rem", lineHeight: "1.6" }}>
            {selectedCategory.description}
          </p>
          <p style={{ marginTop: "20px", color: "#666" }}>
            Directory details and external portal links for {selectedCategory.title} will appear here.
          </p>
        </div>
      ) : (
        <main style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <section>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {filteredCategories.map((category, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: category.bgColor,
                      borderRadius: "12px",
                      padding: "24px",
                      color: "#ffffff",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
                      minHeight: "240px",
                    }}
                  >
                    <div>
                      {/* Number Badge */}
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          padding: "4px 10px",
                          borderRadius: "4px",
                          fontSize: "0.8rem",
                          fontWeight: "bold",
                          marginBottom: "16px",
                          letterSpacing: "1px",
                        }}
                      >
                        {category.number}
                      </span>

                      {/* Title */}
                      <h3
                        style={{
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          marginBottom: "12px",
                          lineHeight: "1.4",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {category.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: "1.5",
                          color: "rgba(255, 255, 255, 0.85)",
                          marginBottom: "20px",
                        }}
                      >
                        {category.description}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategory(category);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#222222",
                          border: "none",
                          padding: "8px 16px",
                          borderRadius: "4px",
                          fontWeight: "bold",
                          cursor: "pointer",
                          fontSize: "0.75rem",
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                          transition: "background 0.2s",
                        }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

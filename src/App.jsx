import React, { useState } from "react";
import "./App.css";

const categoriesData = [
  {
    title: "Jobs",
    description: "National employment centers, private job agencies, international recruitment, and freelancing.",
    details: "Job search platforms, employment placement institutes, and professional career networking tools.",
    items: [
      {
        title: "IEFP Employment Center",
        description: "National employment center for jobs and training.",
        links: [{ label: "IEFP Portal", url: "https://iefp.pt" }],
        mapQuery: "Centro de Emprego IEFP",
        icon: "💼",
        color: "#2b4c7e"
      },
      {
        title: "Private Job Agencies",
        description: "Job placement via agencies such as Randstad, Adecco, and Manpower.",
        links: [
          { label: "Randstad", url: "https://randstad.pt" },
          { label: "Adecco", url: "https://adecco.pt" }
        ],
        mapQuery: "Randstad Office",
        icon: "🏢",
        color: "#2a6f49"
      }
    ]
  },
  {
    title: "Room Rent",
    description: "Shared rooms, medium-term rentals, and verified student or expat accommodations.",
    details: "Find flexible room rentals and mid-term housing solutions across Portugal.",
    items: [
      {
        title: "Uniplaces Rooms",
        description: "Verified mid-to-long term rooms and apartments for students and expats.",
        links: [{ label: "Uniplaces Rentals", url: "https://www.uniplaces.com" }],
        mapQuery: "Uniplaces",
        icon: "🛏️",
        color: "#8c4a24"
      }
    ]
  },
  {
    title: "Housing",
    description: "Apartments for rent, real estate portals, and long-term lease guides.",
    details: "Real estate directories and official tenant guidelines for long-term housing.",
    items: [
      {
        title: "Housing Portals",
        description: "Rent and buy homes via major property portals like Idealista and Imovirtual.",
        links: [{ label: "Idealista Portugal", url: "https://www.idealista.pt" }],
        mapQuery: "Imobiliária",
        icon: "🏠",
        color: "#5c3d78"
      }
    ]
  },
  {
    title: "Immigration",
    description: "Residency permits, visa applications, citizenship rules, and border guidance.",
    details: "Immigration management, legal status, visa processing, and border entry regulations.",
    items: [
      {
        title: "AIMA Residency",
        description: "Residency permits and renewals for migrant residency.",
        links: [{ label: "AIMA Portal", url: "https://aima.gov.pt" }],
        mapQuery: "AIMA offices",
        icon: "🛂",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Open Bank Account",
    description: "Traditional banks, digital expat-friendly accounts, and required documentation.",
    details: "Banking instructions, tax numbers, and financial institution guides.",
    items: [
      {
        title: "Banking Institutions",
        description: "National banks including CGD and Millennium BCP.",
        links: [{ label: "Caixa Geral de Depósitos", url: "https://www.cgd.pt" }],
        mapQuery: "Banco CGD",
        icon: "🏦",
        color: "#8c2447"
      }
    ]
  },
  {
    title: "Recruitment Agencies",
    description: "Temporary work services, business networks, and career placement agencies.",
    details: "Corporate staffing entities and migrant integration offices.",
    items: [
      {
        title: "Temporary Work",
        description: "Short-term jobs and staffing agencies.",
        links: [{ label: "Manpower Portugal", url: "https://manpower.pt" }],
        mapQuery: "Temporary Work Agency",
        icon: "⏱️",
        color: "#4d5d53"
      }
    ]
  },
  {
    title: "Health Services",
    description: "Public healthcare hospitals, private clinics, pharmacies, and emergency numbers.",
    details: "Healthcare clinics, public health systems, and emergency contacts.",
    items: [
      {
        title: "Public Healthcare (SNS)",
        description: "Hospitals, health centers, and medical services.",
        links: [{ label: "SNS Portal", url: "https://sns.gov.pt" }],
        mapQuery: "Centro de Saúde Hospital Público",
        icon: "🏥",
        color: "#78532f"
      }
    ]
  },
  {
    title: "Public Transport",
    description: "Trains, metros, buses, and local transport network cards.",
    details: "Public transit lines, local card passes, and schedules.",
    items: [
      {
        title: "Train Services",
        description: "National railway network across Portugal.",
        links: [{ label: "Comboios de Portugal", url: "https://www.cp.pt" }],
        mapQuery: "Estação de Caminhos de Ferro CP",
        icon: "🚆",
        color: "#3b5998"
      }
    ]
  },
  {
    title: "Driving Licence",
    description: "Licence exchange rules, applications, driving schools, and vehicle registry.",
    details: "Driving credentials, licensing offices, and vehicle documents.",
    items: [
      {
        title: "IMT Driving License",
        description: "License exchange and driving rules.",
        links: [{ label: "IMT IP", url: "https://www.imt-ip.pt" }],
        mapQuery: "IMT Balcão de Atendimento",
        icon: "🚗",
        color: "#6b4226"
      }
    ]
  },
  {
    title: "Education & Training",
    description: "Public schools, universities, language courses, and professional training centers.",
    details: "Public education directorates, schools, and professional skill development.",
    items: [
      {
        title: "Schools & Universities",
        description: "Education system and school placement info.",
        links: [{ label: "DGE Portal", url: "https://www.dge.mec.pt" }],
        mapQuery: "Escola Secundária Agrupamento",
        icon: "🎓",
        color: "#2b4c7e"
      }
    ]
  },
  {
    title: "Pharmacies & Daily Life",
    description: "Local pharmacies, utility providers, postal mail, and daily essentials.",
    details: "Utilities, mail services, and emergency pharmacy locations.",
    items: [
      {
        title: "Pharmacies",
        description: "Medicine and emergency pharmacy locations.",
        links: [{ label: "Farmácias Portuguesas", url: "https://farmaciasportuguesas.pt" }],
        mapQuery: "Farmácia",
        icon: "💊",
        color: "#2a6f49"
      }
    ]
  },
  {
    title: "Travel & Tourism",
    description: "Hotels, short-term stays, travel guides, and partner booking platforms.",
    details: "Short-term lodging, travel bookings, and regional tourism guides.",
    items: [
      {
        title: "Booking Platforms",
        description: "Hotels, short stays, and travel booking partners.",
        links: [{ label: "Booking.com", url: "https://www.booking.com" }],
        mapQuery: "Hotel",
        icon: "✈️",
        color: "#8c4a24"
      }
    ]
  }
];

const cardColors = [
  "#2b4c7e", "#2a6f49", "#8c4a24", "#5c3d78", 
  "#1d6363", "#8c2447", "#4d5d53", "#78532f", 
  "#3b5998", "#6b4226", "#2b4c7e", "#2a6f49"
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategories = categoriesData.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase()) ||
    cat.description.toLowerCase().includes(search.toLowerCase()) ||
    cat.items.some(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
  );

  const goToServices = () => {
    setSelectedCategory(null);
    document.getElementById("global-services")?.scrollIntoView({ behavior: "smooth" });
    setActiveTab("Services");
  };

  return (
    <div className="home-page">
      {/* NAVIGATION */}
      <nav className="site-nav">
        <div className="nav-inner">
          <div className="nav-brand-container" onClick={() => { setSelectedCategory(null); setActiveTab("Home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ cursor: "pointer" }}>
            <div className="nav-logo">S</div>
            <div className="nav-brand-text">
              <strong>SANOLINES</strong>
              <span>Independent Information & Services Directory</span>
            </div>
          </div>

          <div className="nav-links">
            <button
              className={activeTab === "Home" && !selectedCategory ? "active" : ""}
              onClick={() => {
                setSelectedCategory(null);
                setActiveTab("Home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </button>
            <button
              className={activeTab === "Services" || selectedCategory ? "active" : ""}
              onClick={goToServices}
            >
              Services
            </button>
          </div>
        </div>
      </nav>

      {/* CONDITIONAL VIEW */}
      {selectedCategory ? (
        <main className="main-container" style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            style={{
              background: "none", border: "none", color: "#2b4c7e", fontWeight: "600",
              cursor: "pointer", marginBottom: "20px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.95rem"
            }}
          >
            &larr; Back to all service groups
          </button>

          <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "40px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)", borderTop: "6px solid #2b4c7e", marginBottom: "40px" }}>
            <span style={{ background: "#edf2f7", color: "#2b4c7e", padding: "6px 12px", borderRadius: "6px", fontWeight: "600", fontSize: "0.85rem" }}>
              Independent Directory Topic
            </span>
            <h1 style={{ fontSize: "2.2rem", color: "#1a1a1a", marginTop: "15px", marginBottom: "15px" }}>
              {selectedCategory.title}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6", marginBottom: "20px" }}>
              {selectedCategory.description}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6", background: "#f8fafc", padding: "15px", borderRadius: "8px" }}>
              {selectedCategory.details}
            </p>
          </div>

          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#222" }}>Included Resources & Links</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {selectedCategory.items.map((subItem, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  backgroundColor: "#ffffff", borderRadius: "12px", padding: "24px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0",
                  borderTop: `5px solid ${subItem.color || "#2b4c7e"}`, display: "flex", flexDirection: "column", justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "1.8rem" }}>{subItem.icon || "📌"}</span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", color: "#1a1a1a", margin: "0 0 8px 0" }}>{subItem.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.5", marginBottom: "15px" }}>{subItem.description}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                  {subItem.links.map((lnk, lIdx) => (
                    <a
                      key={lIdx}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#f8fafc", color: "#2b4c7e", border: "1px solid #e2e8f0",
                        textDecoration: "none", padding: "8px 12px", borderRadius: "6px", fontWeight: "600",
                        fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "space-between"
                      }}
                    >
                      <span>🌐 {lnk.label}</span>
                      <span style={{ fontSize: "0.8rem", color: "#8c4a24" }}>&rarr;</span>
                    </a>
                  ))}

                  {subItem.mapQuery && (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(subItem.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#ffffff", color: "#4a5568", border: "1px dashed #cbd5e0",
                        textDecoration: "none", padding: "6px 12px", borderRadius: "6px", fontWeight: "500",
                        fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "4px"
                      }}
                    >
                      📍 Find on Maps
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid #eaeaea", padding: "20px", borderRadius: "10px", marginTop: "40px" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>Important Notice</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>
              Sanolines Information is an independent information directory and guidance platform. Users are solely responsible for verifying information directly with the relevant official authority before relying on it or taking any action.
            </p>
          </div>
        </main>
      ) : (
        <>
          {/* HERO */}
          <header className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">SERVICES & SEARCH DIRECTORY</span>
              <h1>Find official services, room rentals, bank setup, and essential resources.</h1>
              <p>
                Sanolines Information is an independent information directory and guidance platform that helps you locate official state portals, 
                jobs, housing rentals, open bank accounts, and daily life essentials. Users are solely responsible for verifying information directly with the relevant official authority.
              </p>

              <div className="hero-search-bar">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search jobs, room rent, housing, bank account, transport..."
                  aria-label="Search services"
                />
                <button type="button" onClick={goToServices}>Search</button>
              </div>
            </div>
          </header>

          {/* MAIN 12-BOX GRID */}
          <main className="main-container">
            <section id="global-services" className="services-directory">
              <div className="continents-grid">
                {filteredCategories.map((category, index) => {
                  const bgColour = cardColors[index % cardColors.length];
                  return (
                    <div
                      className="continent-card"
                      key={category.title}
                      style={{
                        backgroundColor: bgColour,
                        color: "#ffffff",
                        borderRadius: "12px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}
                    >
                      <div>
                        <h2 style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "12px", letterSpacing: "0.5px" }}>
                          {category.title}
                        </h2>
                        <p style={{ fontSize: "0.9rem", lineHeight: "1.5", opacity: "0.95", marginBottom: "20px" }}>
                          {category.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#1a1a1a",
                          border: "none",
                          padding: "10px 16px",
                          borderRadius: "6px",
                          fontWeight: "700",
                          fontSize: "0.8rem",
                          cursor: "pointer",
                          width: "max-content",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                        }}
                      >
                        VIEW SERVICES &rarr;
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

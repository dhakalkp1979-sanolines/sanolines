import React, { useState } from "react";
import "./App.css";

const globalServices = [
  {
    title: "Government & Public Services",
    description: "Official portals, civil registries, public documents, and administrative assistance.",
    details: "Find links and resources for local municipal offices, civil registration, vital statistics, citizen identity cards, passport issuance, and general public administration portals."
  },
  {
    title: "Immigration & Visas",
    description: "Visas, residence permits, citizenship pathways, and border control info.",
    details: "Access official immigration authorities, visa application guidelines, permanent residency requirements, work permits, family reunification procedures, and citizenship rules."
  },
  {
    title: "Employment & Career Resources",
    description: "Job portals, labor rights, unemployment benefits, and professional training.",
    details: "Explore national employment centers, job search engines, worker rights protection agencies, vocational training programs, and unemployment support registration."
  },
  {
    title: "Global Banking & Finance",
    description: "Opening accounts, digital banking, international transfers, and financial regulation.",
    details: "Learn about opening non-resident or resident bank accounts, anti-money laundering compliance, consumer banking rights, financial ombudsmen, and currency exchange controls."
  },
  {
    title: "Taxation & Compliance",
    description: "Tax IDs, filing returns, VAT regulations, and compliance assistance.",
    details: "Connect with national tax authorities, register for fiscal identification numbers, learn deadlines for annual income tax returns, and understand corporate or individual tax obligations."
  },
  {
    title: "Healthcare & Medical Care",
    description: "Public health systems, emergency medical aid, clinics, and health insurance.",
    details: "Find public health service numbers, register for national health insurance cards, locate emergency hospitals, mental health resources, and pharmaceutical guidelines."
  },
  {
    title: "Education & Student Support",
    description: "Schools, universities, student visas, scholarships, and credential recognition.",
    details: "Discover public education networks, university admission portals, student grant programs, diploma recognition services (ENIC/NARIC), and lifelong learning centers."
  },
  {
    title: "Transportation & Driver Licensing",
    description: "Driver's license exchange, vehicle registration, public transit, and transit fines.",
    details: "Learn how to convert a foreign driver's license, register motor vehicles, pay transit tolls, access national rail/bus networks, and check traffic regulation authorities."
  },
  {
    title: "Emergency & Safety Services",
    description: "Emergency dispatch numbers, police, fire departments, and civil protection.",
    details: "Immediate access numbers for police, medical emergencies, fire brigades, disaster management alerts, and consular emergency support lines for travelers."
  },
  {
    title: "Travel & Tourism",
    description: "Official tourism boards, travel advisories, cultural heritage, and local guides.",
    details: "Plan trips safely using official government travel advice, national tourism office registries, cultural destination guides, and customs/border entry allowances."
  },
  {
    title: "Housing & Real Estate",
    description: "Tenant rights, social housing, property registration, and real estate regulations.",
    details: "Understand rental contract laws, tenant dispute resolution boards, public housing application criteria, property deed registries, and urban planning offices."
  },
  {
    title: "Directory Contacts",
    description: "Embassies, consulates, municipal directories, and public institution helplines.",
    details: "A comprehensive phone and address directory for foreign embassies, diplomatic missions, ministries, municipal headquarters, and public customer service desks."
  },
  {
    title: "Legal Aid & Public Defenders",
    description: "Free legal advice, court systems, public defenders, and consumer arbitration.",
    details: "Find state-funded legal aid offices, pro-bono lawyer associations, court directory databases, mediation centers, and alternative dispute resolution services."
  },
  {
    title: "Migrant & Refugee Services",
    description: "Integration support, asylum procedures, language courses, and community aid.",
    details: "Connect with specialized integration centers, asylum seeker support agencies, humanitarian aid organizations, and government-sponsored language learning programs."
  },
  {
    title: "Community Organizations",
    description: "Cultural associations, expat networks, volunteer groups, and local charities.",
    details: "Discover local non-profit organizations, immigrant support associations, cultural clubs, neighborhood volunteer groups, and community outreach hubs."
  },
  {
    title: "Social Welfare & Benefits",
    description: "Pensions, disability allowances, child benefits, and financial assistance.",
    details: "Check eligibility criteria for state pensions, disability support grants, family allowances, low-income subsidies, and social security administration offices."
  },
  {
    title: "Family & Child Support",
    description: "Childcare services, adoption agencies, family counseling, and maternity rights.",
    details: "Access public nurseries, parental leave guidelines, child protection services, family mediation offices, and maternity/paternity support documentation."
  },
  {
    title: "Consumer Rights & Protection",
    description: "Filing complaints, product safety, scam alerts, and consumer advocacy.",
    details: "Submit formal consumer grievances, check product recall databases, report online scams, and learn about utility provider dispute rights."
  },
  {
    title: "Accessibility Services",
    description: "Disability support, specialized transit, parking permits, and inclusive housing.",
    details: "Apply for disability parking cards, find wheelchair-accessible public facilities, learn about assistive technology grants, and specialized care support."
  },
  {
    title: "Emergency Relief & Shelter",
    description: "Homeless shelters, food banks, disaster relief, and crisis hotlines.",
    details: "Locate temporary emergency accommodation, community food distribution centers, winter warming shelters, and immediate crisis support helplines."
  },
];

// Color variations matching your visual style reference
const cardColors = [
  "#6b4685", // Purple
  "#8c2447", // Magenta / Crimson
  "#4d3c78", // Deep Slate Violet
  "#7a2d58", // Dark Pink / Berry
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [search, setSearch] = useState("");
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = globalServices.filter((service) =>
    service.title.toLowerCase().includes(search.toLowerCase())
  );

  const goToServices = () => {
    setSelectedService(null);
    document
      .getElementById("global-services")
      ?.scrollIntoView({ behavior: "smooth" });

    setActiveTab("Services");
  };

  return (
    <div className="home-page">

      {/* NAVIGATION */}
      <nav className="site-nav">
        <div className="nav-inner">

          <div className="nav-brand-container" onClick={() => { setSelectedService(null); setActiveTab("Home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ cursor: "pointer" }}>
            <div className="nav-logo">
              S
            </div>

            <div className="nav-brand-text">
              <strong>
                SANOLINES
              </strong>
              <span>
                Information & Services
              </span>
            </div>
          </div>

          <div className="nav-links">
            <button
              className={activeTab === "Home" && !selectedService ? "active" : ""}
              onClick={() => {
                setSelectedService(null);
                setActiveTab("Home");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </button>

            <button
              className={activeTab === "Services" || selectedService ? "active" : ""}
              onClick={goToServices}
            >
              Services
            </button>
          </div>

        </div>
      </nav>

      {/* CONDITIONAL VIEW: INDIVIDUAL SERVICE PAGE OR HOME/DIRECTORY */}
      {selectedService ? (
        /* INDIVIDUAL SERVICE DETAIL VIEW */
        <main className="main-container" style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
          <button
            type="button"
            onClick={() => setSelectedService(null)}
            style={{
              background: "none",
              border: "none",
              color: "#6b4685",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.95rem",
            }}
          >
            &larr; Back to all services
          </button>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              borderTop: "6px solid #6b4685",
            }}
          >
            <span style={{ background: "#f3ebf7", color: "#6b4685", padding: "6px 12px", borderRadius: "6px", fontWeight: "600", fontSize: "0.85rem" }}>
              Official Directory Resource
            </span>
            <h1 style={{ fontSize: "2.2rem", color: "#1a1a1a", marginTop: "15px", marginBottom: "15px" }}>
              {selectedService.title}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6", marginBottom: "30px" }}>
              {selectedService.description}
            </p>

            <div style={{ background: "#faf8fb", padding: "25px", borderRadius: "10px", borderLeft: "4px solid #8c2447", marginBottom: "30px" }}>
              <h3 style={{ margin: "0 0 10px 0", color: "#222" }}>Overview & Information</h3>
              <p style={{ margin: 0, lineHeight: "1.7", color: "#444" }}>
                {selectedService.details}
              </p>
            </div>

            <div style={{ background: "#fff", border: "1px solid #eaeaea", padding: "20px", borderRadius: "10px" }}>
              <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>Important Notice</h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>
                Sanolines Information is an independent guide directory. Always verify requirements, application forms, deadlines, and official procedures directly through authorized government or organizational portals before taking action.
              </p>
            </div>
          </div>
        </main>
      ) : (
        /* HOMEPAGE DIRECTORY VIEW */
        <>
          {/* HERO */}
          <header className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">
                INFORMATION & SERVICES DIRECTORY
              </span>

              <h1>
                Find useful information, trusted resources
                and official services.
              </h1>

              <p>
                Sanolines helps people find government information,
                employment resources, immigration guidance,
                healthcare, legal support, housing, education,
                and other useful services.
              </p>

              <div className="hero-search-bar">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search services, immigration, jobs, healthcare..."
                  aria-label="Search Sanolines services"
                />

                <button
                  type="button"
                  onClick={goToServices}
                >
                  Search
                </button>
              </div>
            </div>
          </header>

          {/* MAIN */}
          <main className="main-container">

            {/* ALL SERVICES */}
            <section
              id="global-services"
              className="services-directory"
            >
              <div className="continents-grid">
                {filteredServices.map((service, index) => {
                  const bgColour = cardColors[index % cardColors.length];
                  return (
                    <div
                      className="continent-card"
                      key={service.title}
                      style={{
                        backgroundColor: bgColour,
                        color: "#ffffff",
                        borderRadius: "12px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        border: "none",
                      }}
                    >
                      <div className="continent-top">
                        <span
                          style={{
                            background: "rgba(255, 255, 255, 0.2)",
                            color: "#ffffff",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            fontSize: "0.85rem",
                            fontWeight: "600",
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3
                          style={{
                            color: "#ffffff",
                            fontSize: "1.35rem",
                            marginTop: "16px",
                            marginBottom: "12px",
                            fontWeight: "700",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                          }}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.85)",
                          fontSize: "0.95rem",
                          marginBottom: "20px",
                          lineHeight: "1.4",
                        }}
                      >
                        {service.description}
                      </p>

                      <div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedService(service);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                          }}
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#222222",
                            border: "none",
                            padding: "8px 18px",
                            borderRadius: "6px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            letterSpacing: "0.5px",
                            transition: "background 0.2s",
                          }}
                        >
                          LEARN MORE
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredServices.length === 0 && (
                <div className="no-results">
                  No matching service found.
                </div>
              )}
            </section>

          </main>
        </>
      )}

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="home-footer-inner">
          <div>
            <strong>
              SANOLINES
            </strong>
            <p>
              Information and official
              service directories for everyday
              people.
            </p>
          </div>

          <div className="footer-links-group">
            <button
              type="button"
              onClick={() => {
                setSelectedService(null);
                setActiveTab("Home");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Home
            </button>

            <button
              type="button"
              onClick={goToServices}
            >
              Services
            </button>

            <button
              type="button"
              onClick={() => setShowDisclaimer(true)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "inherit",
                font: "inherit",
                padding: 0,
                textDecoration: "underline",
              }}
            >
              Disclaimer
            </button>
          </div>
        </div>

        <div className="home-footer-bottom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
          <span>&copy; 2026 Sanolines Information. All rights reserved.</span>
          <button
            type="button"
            onClick={() => setShowDisclaimer(true)}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              padding: "6px 14px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontWeight: "500",
            }}
          >
            View Disclaimer
          </button>
        </div>
      </footer>

      {/* DISCLAIMER MODAL */}
      {showDisclaimer && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            padding: "20px",
          }}
          onClick={() => setShowDisclaimer(false)}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              color: "#333333",
              borderRadius: "12px",
              maxWidth: "600px",
              width: "100%",
              padding: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              position: "relative",
              maxHeight: "85vh",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #eaeaea", paddingBottom: "12px" }}>
              <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#1a1a1a" }}>Disclaimer</h2>
              <button
                type="button"
                onClick={() => setShowDisclaimer(false)}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#666",
                }}
              >
                &times;
              </button>
            </div>

            <div style={{ fontSize: "0.95rem", lineHeight: "1.6", color: "#444" }}>
              <p style={{ marginBottom: "1rem" }}>
                <strong>Sanolines Information</strong> is an independent information-sharing directory.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                We do not directly provide government, immigration, legal, medical, employment, housing, financial, or other professional services.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Our website helps visitors find useful information, official websites, trusted organizations, public services, and relevant resources. Where possible, we provide links to official or trusted sources so visitors can contact the appropriate organization directly.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Information on Sanolines may change over time. Visitors should always verify important requirements, procedures, fees, deadlines, and eligibility directly with the relevant official organization before taking action.
              </p>
              <p style={{ marginBottom: "0" }}>
                Sanolines Information is not a government agency and is not affiliated with any government authority unless specifically stated.
              </p>
            </div>

            <div style={{ marginTop: "25px", textAlign: "right" }}>
              <button
                type="button"
                onClick={() => setShowDisclaimer(false)}
                style={{
                  backgroundColor: "#6b4685",
                  color: "#ffffff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

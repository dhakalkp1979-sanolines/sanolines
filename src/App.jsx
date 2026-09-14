import React, { useState } from "react";
import "./App.css";

const globalServices = [
  {
    title: "Government & Public Services",
    description: "Official portals, civil registries, public documents, and administrative assistance.",
    details: "In Portugal, public administration is centralized through multiple state portals and digital citizen service platforms for identity management, documents, and civil acts.",
    links: [
      { label: "Official gov.pt Portal", url: "https://www.gov.pt" },
      { label: "ePortugal Public Services", url: "https://eportugal.gov.pt" },
      { label: "Civil Online Certificates", url: "https://www.civilonline.mj.pt" }
    ],
    mapQuery: "Loja do Cidadao Lisbon Portugal"
  },
  {
    title: "Immigration & Visas",
    description: "Visas, residence permits, citizenship pathways, and border control info.",
    details: "Immigration, legal residency, visa processes, and nationality applications are coordinated through multiple official state authorities and diplomatic networks.",
    links: [
      { label: "AIMA Immigration Portal", url: "https://aima.gov.pt" },
      { label: "Portuguese Diplomatic Portal", url: "https://www.portaldiplomatico.mne.gov.pt" },
      { label: "e-Justice Nationality Portal", url: "https://justica.gov.pt" }
    ],
    mapQuery: "AIMA servicos de immigracao Portugal"
  },
  {
    title: "Employment & Career Resources",
    description: "Job portals, labor rights, unemployment benefits, and professional training.",
    details: "Job hunting and professional placement involve a mix of public employment centers, vocational training boards, and major commercial job boards.",
    links: [
      { label: "IEFP Employment Institute", url: "https://www.iefp.pt" },
      { label: "NetEmpregos Job Board", url: "https://www.netempregos.com" },
      { label: "SAPO Emprego Portal", url: "https://emprego.sapo.pt" }
    ],
    mapQuery: "IEFP Centro de Emprego Portugal"
  },
  {
    title: "Global Banking & Finance",
    description: "Opening accounts, digital banking, international transfers, and financial regulation.",
    details: "Financial and banking infrastructure spans national regulatory central banks, commercial retail institutions, and digital banking platforms.",
    links: [
      { label: "Banco de Portugal (Central Bank)", url: "https://www.bportugal.pt" },
      { label: "Caixa Geral de Depósitos (CGD)", url: "https://www.cgd.pt" },
      { label: "Novo Banco Consumer Services", url: "https://www.novobanco.pt" }
    ],
    mapQuery: "Banco de Portugal Lisbon"
  },
  {
    title: "Taxation & Compliance",
    description: "Tax IDs, filing returns, VAT regulations, and compliance assistance.",
    details: "Tax management, NIF registrations, electronic invoicing systems, and annual tax declarations are processed through the national financial authority portals.",
    links: [
      { label: "Portal das Finanças", url: "https://www.portaldasfinancas.gov.pt" },
      { label: "Autoridade Tributária e Aduaneira", url: "https://www.portaldasfinancas.gov.pt" },
      { label: "e-Fatura Portal", url: "https://efatura.portaldasfinancas.gov.pt" }
    ],
    mapQuery: "Autoridade Tributaria e Aduaneira Servicos de Financas"
  },
  {
    title: "Healthcare & Medical Care",
    description: "Public health systems, emergency medical aid, clinics, and health insurance.",
    details: "Public healthcare is delivered through the national health service, specialized health portals, and regional public health directorates.",
    links: [
      { label: "SNS 24 Health Portal", url: "https://www.sns24.gov.pt" },
      { label: "Serviço Nacional de Saúde (SNS)", url: "https://www.sns.gov.pt" },
      { label: "Direção-Geral da Saúde (DGS)", url: "https://www.dgs.pt" }
    ],
    mapQuery: "Centro de Saude Hospital publico Portugal"
  },
  {
    title: "Education & Student Support",
    description: "Schools, universities, student visas, scholarships, and credential recognition.",
    details: "Educational infrastructure includes higher education placement directorates, ministry administrative portals, and academic database networks.",
    links: [
      { label: "DGES Higher Education Directorate", url: "https://www.dges.gov.pt" },
      { label: "Ministry of Education Portal", url: "https://www.gov.pt" },
      { label: "Study Portals Europe", url: "https://www.studyportals.com" }
    ],
    mapQuery: "Ministerio da Educacao Portugal"
  },
  {
    title: "Transportation & Driver Licensing",
    description: "Driver's license exchange, vehicle registration, public transit, and transit fines.",
    details: "Transportation services involve driving institutes, road safety monitoring bodies, and national public railway networks.",
    links: [
      { label: "IMT Mobility & Transport Institute", url: "https://www.imt-ip.pt" },
      { label: "ANSR Road Safety Authority", url: "https://www.ansr.pt" },
      { label: "CP Train Networks Portugal", url: "https://www.cp.pt" }
    ],
    mapQuery: "IMT balcão atendimentos transportes Portugal"
  },
  {
    title: "Emergency & Safety Services",
    description: "Emergency dispatch numbers, police, fire departments, and civil protection.",
    details: "Public safety and emergency responses are handled by national civil protection directorates and specialized security police forces.",
    links: [
      { label: "Prociv Civil Protection Authority", url: "https://www.prociv.gov.pt" },
      { label: "PSP Public Security Police", url: "https://www.psp.pt" },
      { label: "GNR National Republican Guard", url: "https://www.gnr.pt" }
    ],
    mapQuery: "Esquadra da Policia de Seguranca Publica PSP"
  },
  {
    title: "Travel & Tourism",
    description: "Official tourism boards, travel advisories, cultural heritage, and local guides.",
    details: "Tourism promotion and cultural heritage preservation are coordinated via official national tourism boards and heritage directorates.",
    links: [
      { label: "Turismo de Portugal", url: "https://www.turismodeportugal.pt" },
      { label: "Visit Portugal Official Board", url: "https://www.visitportugal.com" },
      { label: "Património Cultural Portal", url: "https://www.patrimoniocultural.gov.pt" }
    ],
    mapQuery: "Turismo de Portugal official office"
  },
  {
    title: "Housing & Real Estate",
    description: "Tenant rights, social housing, property registration, and real estate regulations.",
    details: "Housing assistance, tenant support policies, and major online property marketplaces help citizens find accommodation and real estate guidance.",
    links: [
      { label: "Portal da Habitação", url: "https://www.portaldabitacao.pt" },
      { label: "IHRU Housing Institute", url: "https://www.ihru.pt" },
      { label: "Casa Sapo Real Estate", url: "https://www.casa.sapo.pt" }
    ],
    mapQuery: "Conservatoria do Registo Predial Portugal"
  },
  {
    title: "Directory Contacts",
    description: "Embassies, consulates, municipal directories, and public institution helplines.",
    details: "Directory information covers diplomatic networks, national municipal associations, and general public administration helpline desks.",
    links: [
      { label: "Portal Diplomático", url: "https://www.portaldiplomatico.mne.gov.pt" },
      { label: "ANMP Municipal Association", url: "https://www.anmp.pt" },
      { label: "ePortugal Contact Center", url: "https://eportugal.gov.pt" }
    ],
    mapQuery: "Camara Municipal Camara local Portugal"
  },
  {
    title: "Legal Aid & Public Defenders",
    description: "Free legal advice, court systems, public defenders, and consumer arbitration.",
    details: "Legal assistance is supported by the official bar association, public justice access portals, and alternative dispute resolution centers.",
    links: [
      { label: "Ordem dos Advogados (Bar Association)", url: "https://portal.oa.pt" },
      { label: "Portal da Justiça", url: "https://www.portaldejustica.pt" },
      { label: "Consumer Arbitration Centers", url: "https://www.arbitragemdeconsumo.org" }
    ],
    mapQuery: "Tribunal Juizos Locais Portugal"
  },
  {
    title: "Migrant & Refugee Services",
    description: "Integration support, asylum procedures, language courses, and community aid.",
    details: "Migrant support utilizes local integration support centers, migrant communication archives, and official assistance networks.",
    links: [
      { label: "AIMA Migrant Support", url: "https://aima.gov.pt" },
      { label: "ACM Migration Archives", url: "https://www.acm.gov.pt" },
      { label: "CLAIM Local Support Network", url: "https://aima.gov.pt" }
    ],
    mapQuery: "CLAIM Centro Local de Apoio ao Migrante"
  },
  {
    title: "Community Organizations",
    description: "Cultural associations, expat networks, volunteer groups, and local charities.",
    details: "Community integration is supported by cultural immigrant associations, migrant solidarity groups, and volunteer platforms.",
    links: [
      { label: "Casa do Brasil em Lisboa", url: "https://www.casadobrasilisboa.pt" },
      { label: "Solidariedade Imigrante Association", url: "https://www.solimigrante.org" },
      { label: "Rede de Voluntariado", url: "https://www.voluntariado.pt" }
    ],
    mapQuery: "Associacao cultural comunidade Portugal"
  },
  {
    title: "Social Welfare & Benefits",
    description: "Pensions, disability allowances, child benefits, and financial assistance.",
    details: "Social security services are managed directly through dedicated state portals providing pensions, social allowances, and welfare updates.",
    links: [
      { label: "Segurança Social Direta", url: "https://www.seg-social.pt" },
      { label: "Instituto da Segurança Social", url: "https://www.seg-social.pt" },
      { label: "Portal Social Public Welfare", url: "https://www.portalsocial.gov.pt" }
    ],
    mapQuery: "Seguranca Social servico atendimento Portugal"
  },
  {
    title: "Family & Child Support",
    description: "Childcare services, adoption agencies, family counseling, and maternity rights.",
    details: "Family and youth protection is handled through social security family departments and child protection commissions.",
    links: [
      { label: "Segurança Social - Família", url: "https://www.seg-social.pt" },
      { label: "CPCJ Child Protection Commission", url: "https://www.cnpcj.gov.pt" },
      { label: "ePortugal Family Platforms", url: "https://eportugal.gov.pt" }
    ],
    mapQuery: "Centro de Apoio Familiar e Crianca Portugal"
  },
  {
    title: "Consumer Rights & Protection",
    description: "Filing complaints, product safety, scam alerts, and consumer advocacy.",
    details: "Consumer protection involves electronic complaint books, national consumer directorates, and independent consumer defense associations.",
    links: [
      { label: "Livro de Reclamações Eletrónico", url: "https://www.livroreclamacoes.pt" },
      { label: "Direcção-Geral do Consumidor", url: "https://www.consumidor.gov.pt" },
      { label: "DECO Consumer Protection Association", url: "https://www.deco.proteste.pt" }
    ],
    mapQuery: "Direccao Geral do Consumidor Portugal"
  },
  {
    title: "Accessibility Services",
    description: "Disability support, specialized transit, parking permits, and inclusive housing.",
    details: "Accessibility initiatives are promoted via national rehabilitation institutes and inclusion employment portals.",
    links: [
      { label: "INR National Rehabilitation Institute", url: "https://www.inr.pt" },
      { label: "Emprego Inclusivo Portal", url: "https://www.iefp.pt" },
      { label: "Fundação para a Reabilitação", url: "https://www.inr.pt" }
    ],
    mapQuery: "Instituto Nacional para a Reabilitacao INR"
  },
  {
    title: "Emergency Relief & Shelter",
    description: "Homeless shelters, food banks, disaster relief, and crisis hotlines.",
    details: "Emergency relief and social assistance networks rely on major food banks, red cross chapters, and community shelters.",
    links: [
      { label: "Banco Alimentar Contra a Fome", url: "https://www.bancoalimentar.pt" },
      { label: "Cruz Vermelha Portuguesa", url: "https://www.cruzvermelha.pt" },
      { label: "Comunidade Vida e Paz", url: "https://www.cvp.org.pt" }
    ],
    mapQuery: "Centro de Acolhimento de Emergencia Social Portugal"
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

            {/* MULTIPLE OFFICIAL WEBSITES LIST */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.1rem", color: "#222", marginBottom: "12px" }}>Available Websites & Portals</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {selectedService.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: "#f9f6fc",
                      color: "#6b4685",
                      border: "1px solid #e2d3ed",
                      textDecoration: "none",
                      padding: "12px 18px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      fontSize: "0.95rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      transition: "background 0.2s"
                    }}
                  >
                    <span>🌐 {link.label}</span>
                    <span style={{ fontSize: "0.85rem", color: "#8c2447" }}>Visit Site &rarr;</span>
                  </a>
                ))}
              </div>
            </div>

            {/* GOOGLE MAPS LOCATION BUTTON */}
            <div style={{ marginBottom: "30px" }}>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedService.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#ffffff",
                  color: "#8c2447",
                  border: "2px solid #8c2447",
                  textDecoration: "none",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  fontSize: "0.95rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                📍 Find Physical Offices on Google Maps &rarr;
              </a>
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

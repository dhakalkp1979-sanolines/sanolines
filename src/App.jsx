import React, { useState } from "react";
import "./App.css";

const portugalServices = [
  {
    title: "Government & Citizen Portals",
    description: "Official administrative assistance, digital citizen services, and public registries.",
    details: "Portugal's central public administration offers digital portals for managing official documents, civil acts, and citizen identification securely.",
    links: [
      { label: "Portal do Governo de Portugal", url: "https://www.gov.pt" },
      { label: "ePortugal Digital Services", url: "https://eportugal.gov.pt" },
      { label: "Civil Online Registry", url: "https://www.civilonline.mj.pt" }
    ],
    mapQuery: "Loja do Cidadão Lisboa Portugal"
  },
  {
    title: "Immigration & Legal Residency",
    description: "Residence permits, visa processes, border control, and nationality applications.",
    details: "Immigration management, legal status, and citizenship processing within Portugal are handled by specialized state bodies and diplomatic authorities.",
    links: [
      { label: "AIMA Immigration Portal", url: "https://aima.gov.pt" },
      { label: "Portal Diplomático de Portugal", url: "https://www.portaldiplomatico.mne.gov.pt" },
      { label: "Justiça.gov.pt Nationality", url: "https://justica.gov.pt" }
    ],
    mapQuery: "AIMA balcão atendimento Lisboa"
  },
  {
    title: "Employment & Professional Training",
    description: "National employment centers, job boards, labor rights, and career training.",
    details: "Finding work and professional placement in Portugal involves public employment institutes, vocational training boards, and domestic job platforms.",
    links: [
      { label: "IEFP Instituto do Emprego", url: "https://www.iefp.pt" },
      { label: "NetEmpregos Portugal Job Board", url: "https://www.netempregos.com" },
      { label: "SAPO Emprego Portal", url: "https://emprego.sapo.pt" }
    ],
    mapQuery: "IEFP Centro de Emprego Lisboa"
  },
  {
    title: "Banking & Financial Services",
    description: "National retail banks, central banking regulations, and financial accounts.",
    details: "The Portuguese financial sector includes the national central regulatory bank, major commercial high-street banks, and digital credit institutions.",
    links: [
      { label: "Banco de Portugal Central Bank", url: "https://www.bportugal.pt" },
      { label: "Caixa Geral de Depósitos (CGD)", url: "https://www.cgd.pt" },
      { label: "Novo Banco Consumer Services", url: "https://www.novobanco.pt" }
    ],
    mapQuery: "Banco de Portugal Lisboa"
  },
  {
    title: "Taxation & Customs Authorities",
    description: "Tax ID (NIF) setup, annual declarations, VAT, and customs compliance.",
    details: "Tax management, electronic invoicing systems, and financial compliance are processed directly through national tax and customs authorities.",
    links: [
      { label: "Portal das Finanças", url: "https://www.portaldasfinancas.gov.pt" },
      { label: "Autoridade Tributária e Aduaneira", url: "https://www.portaldasfinancas.gov.pt" },
      { label: "e-Fatura Official Portal", url: "https://efatura.portaldasfinancas.gov.pt" }
    ],
    mapQuery: "Serviços de Finanças Lisboa"
  },
  {
    title: "Public Healthcare & SNS",
    description: "National health service, public hospitals, local health centers, and medical guidance.",
    details: "Public medical care across Portugal is delivered through the National Health Service (SNS), health centers, and regional health directorates.",
    links: [
      { label: "SNS 24 Saúde Portal", url: "https://www.sns24.gov.pt" },
      { label: "Serviço Nacional de Saúde (SNS)", url: "https://www.sns.gov.pt" },
      { label: "Direção-Geral da Saúde (DGS)", url: "https://www.dgs.pt" }
    ],
    mapQuery: "Centro de Saúde Hospital Público Portugal"
  },
  {
    title: "Education & Academic Recognition",
    description: "Public schools, higher education placement, and diploma recognition.",
    details: "Educational infrastructure in Portugal covers higher education directorates, ministry administrative portals, and academic credential boards.",
    links: [
      { label: "DGES Higher Education Directorate", url: "https://www.dges.gov.pt" },
      { label: "Ministério da Educação e Ciência", url: "https://www.gov.pt" },
      { label: "Fundação para a Ciência e a Tecnologia", url: "https://www.fct.pt" }
    ],
    mapQuery: "Ministério da Educação Lisboa"
  },
  {
    title: "Transportation & Driving License",
    description: "Driver's license exchange, vehicle registration, and national transit networks.",
    details: "Mobility services involve the national transport institute, road safety authorities, and public railway networks operating within Portugal.",
    links: [
      { label: "IMT Mobility & Transport Institute", url: "https://www.imt-ip.pt" },
      { label: "ANSR Road Safety Authority", url: "https://www.ansr.pt" },
      { label: "CP Comboios de Portugal Trains", url: "https://www.cp.pt" }
    ],
    mapQuery: "IMT balcão de atendimento Lisboa"
  },
  {
    title: "Emergency & Security Forces",
    description: "Public safety, police forces, fire departments, and civil protection dispatch.",
    details: "National security and public emergency responses are coordinated by civil protection authorities and national police departments.",
    links: [
      { label: "Autoridade Nacional de Emergência e Proteção Civil", url: "https://www.prociv.gov.pt" },
      { label: "PSP Public Security Police", url: "https://www.psp.pt" },
      { label: "GNR National Republican Guard", url: "https://www.gnr.pt" }
    ],
    mapQuery: "Esquadra da Polícia de Segurança Pública Lisboa"
  },
  {
    title: "National Tourism & Culture",
    description: "Official tourism boards, cultural heritage networks, and national landmarks.",
    details: "Tourism promotion and cultural heritage preservation are administered via official national tourism boards and historical directorates.",
    links: [
      { label: "Turismo de Portugal Official Agency", url: "https://www.turismodeportugal.pt" },
      { label: "Visit Portugal Official Tourism Board", url: "https://www.visitportugal.com" },
      { label: "Património Cultural Directorate", url: "https://www.patrimoniocultural.gov.pt" }
    ],
    mapQuery: "Turismo de Portugal sede Lisboa"
  },
  {
    title: "Housing & Real Estate Portals",
    description: "Tenant support policies, social housing institutes, and property registries.",
    details: "Housing support, tenancy contracts, and real estate registries are overseen by national housing bodies and property platforms.",
    links: [
      { label: "Portal da Habitação", url: "https://www.portaldabitacao.pt" },
      { label: "IHRU Housing & Urban Rehabilitation Institute", url: "https://www.ihru.pt" },
      { label: "Casa Sapo Real Estate Portal", url: "https://www.casa.sapo.pt" }
    ],
    mapQuery: "Conservatória do Registo Predial Lisboa"
  },
  {
    title: "Municipalities & Local Associations",
    description: "Local town halls (Câmaras Municipais) and national municipal associations.",
    details: "Local governance across Portugal is structured through municipal chambers and regional municipal cooperation associations.",
    links: [
      { label: "ANMP National Association of Portuguese Municipalities", url: "https://www.anmp.pt" },
      { label: "Câmara Municipal de Lisboa", url: "https://www.lisboa.pt" },
      { label: "Câmara Municipal do Porto", url: "https://www.cm-porto.pt" }
    ],
    mapQuery: "Câmara Municipal de Lisboa"
  },
  {
    title: "Legal Aid & Bar Association",
    description: "Official bar association, public defenders, and judicial access portals.",
    details: "Legal representation and court access are supported by the national bar association and official justice administration portals.",
    links: [
      { label: "Ordem dos Advogados (Portuguese Bar Association)", url: "https://portal.oa.pt" },
      { label: "Portal da Justiça de Portugal", url: "https://www.portaldejustica.pt" },
      { label: "Centro de Arbitragem de Conflitos de Consumo", url: "https://www.arbitragemdeconsumo.org" }
    ],
    mapQuery: "Ordem dos Advogados Lisboa"
  },
  {
    title: "Migrant Integration & Support",
    description: "Local migrant support centers (CLAIM), integration agencies, and cultural networks.",
    details: "Migrant support services utilize localized integration centers, communication archives, and official assistance frameworks across Portugal.",
    links: [
      { label: "AIMA Migrant Support Centers", url: "https://aima.gov.pt" },
      { label: "ACM Migration Archives & Intercultural Dialogue", url: "https://www.acm.gov.pt" },
      { label: "Rede CLAIM Support Network", url: "https://aima.gov.pt" }
    ],
    mapQuery: "CLAIM Centro Local de Apoio ao Migrante Lisboa"
  },
  {
    title: "Immigrant & Expat Associations",
    description: "Cultural immigrant associations, community support groups, and solidarity networks.",
    details: "Integration within Portuguese communities is championed by organized cultural groups, migrant solidarity leagues, and volunteer bodies.",
    links: [
      { label: "Casa do Brasil em Lisboa", url: "https://www.casadobrasilisboa.pt" },
      { label: "Solidariedade Imigrante Association", url: "https://www.solimigrante.org" },
      { label: "Plataforma de Voluntariado de Portugal", url: "https://www.voluntariado.pt" }
    ],
    mapQuery: "Associação Solidariedade Imigrante Lisboa"
  },
  {
    title: "Social Security & Welfare",
    description: "Social security direct portals, pensions, unemployment subsidies, and child allowances.",
    details: "Social welfare services are managed through dedicated state portals providing pensions, social support allowances, and family benefits.",
    links: [
      { label: "Segurança Social Direta Portal", url: "https://www.seg-social.pt" },
      { label: "Instituto da Segurança Social", url: "https://www.seg-social.pt" },
      { label: "Portal Social de Proteção", url: "https://www.portalsocial.gov.pt" }
    ],
    mapQuery: "Segurança Social atendimento Lisboa"
  },
  {
    title: "Family & Child Protection",
    description: "Child protection commissions (CPCJ), family support centers, and maternity rights.",
    details: "Child safety and youth protection are coordinated by national protection commissions and family social service departments.",
    links: [
      { label: "CPCJ National Commission for Child Protection", url: "https://www.cnpcj.gov.pt" },
      { label: "Segurança Social - Família e Criança", url: "https://www.seg-social.pt" },
      { label: "ePortugal Family Life Services", url: "https://eportugal.gov.pt" }
    ],
    mapQuery: "CPCJ Comissão de Proteção de Crianças e Jovens"
  },
  {
    title: "Consumer Rights & Complaints",
    description: "Electronic complaint books, consumer protection associations, and market regulation.",
    details: "Consumer advocacy involves official electronic complaint platforms, national consumer directorates, and independent consumer defense groups.",
    links: [
      { label: "Livro de Reclamações Eletrónico", url: "https://www.livroreclamacoes.pt" },
      { label: "Direcção-Geral do Consumidor", url: "https://www.consumidor.gov.pt" },
      { label: "DECO Proteste Consumer Association", url: "https://www.deco.proteste.pt" }
    ],
    mapQuery: "Direcção-Geral do Consumidor Lisboa"
  },
  {
    title: "Disability & Inclusion Services",
    description: "National rehabilitation institutes, inclusive employment programs, and accessibility permits.",
    details: "Accessibility initiatives and disability support are directed through national rehabilitation boards and inclusion employment portals in Portugal.",
    links: [
      { label: "INR National Rehabilitation Institute", url: "https://www.inr.pt" },
      { label: "IEFP Emprego Inclusivo Portal", url: "https://www.iefp.pt" },
      { label: "Fundação para a Reabilitação e Integração", url: "https://www.inr.pt" }
    ],
    mapQuery: "Instituto Nacional para a Reabilitação INR Lisboa"
  },
  {
    title: "Emergency Relief & Food Banks",
    description: "National food banks, red cross chapters, crisis shelters, and social charities.",
    details: "Emergency relief and social aid networks rely on national food bank federations, red cross organizations, and community shelters.",
    links: [
      { label: "Banco Alimentar Contra a Fome Portugal", url: "https://www.bancoalimentar.pt" },
      { label: "Cruz Vermelha Portuguesa", url: "https://www.cruzvermelha.pt" },
      { label: "Comunidade Vida e Paz Shelter Network", url: "https://www.cvp.org.pt" }
    ],
    mapQuery: "Cruz Vermelha Portuguesa Sede Lisboa"
  },
  {
    title: "Private Employment & Recruitment Agencies",
    description: "Private job placement agencies, temporary work services, and corporate recruiting.",
    details: "Private recruitment firms and temporary staffing agencies operating across Portugal to match professionals with corporate employers.",
    links: [
      { label: "Adecco Portugal Employment Agency", url: "https://www.adecco.pt" },
      { label: "Hays Portugal Recruitment", url: "https://www.hays.pt" },
      { label: "Michael Page Portugal", url: "https://www.michaelpage.pt" }
    ],
    mapQuery: "Adecco Lisboa Portugal"
  },
  {
    title: "Business & Trade Associations",
    description: "Industrial chambers, commercial associations, and business networks.",
    details: "Organizations supporting enterprise development, commercial networking, and industrial advocacy within the Portuguese market.",
    links: [
      { label: "CCIP - Câmara de Comércio e Indústria Portuguesa", url: "https://www.ccip.pt" },
      { label: "AIP - Associação Industrial Portuguesa", url: "https://www.aip.pt" },
      { label: "Associação do Comércio e Serviços de Lisboa (ACSL)", url: "https://www.acsl.pt" }
    ],
    mapQuery: "CCIP Lisboa Portugal"
  }
];

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

  const filteredServices = portugalServices.filter((service) =>
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
                Portugal Information & Services
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
            &larr; Back to all Portugal services
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
              Portugal Official Directory Resource
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

            {/* PORTUGAL WEBSITES LIST */}
            <div style={{ marginBottom: "30px" }}>
              <h3 style={{ fontSize: "1.1rem", color: "#222", marginBottom: "12px" }}>Official Portuguese Websites & Portals</h3>
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
                    <span>🇵🇹 {link.label}</span>
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
                📍 Find Physical Offices in Portugal on Google Maps &rarr;
              </a>
            </div>

            <div style={{ background: "#fff", border: "1px solid #eaeaea", padding: "20px", borderRadius: "10px" }}>
              <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>Important Notice</h4>
              <p style={{ margin: 0, fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>
                Sanolines Portugal is an independent directory guide. Always verify application requirements, deadlines, fees, and official procedures directly through authorized Portuguese government bodies or organizations before taking action.
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
                PORTUGAL SERVICES & AGENCIES DIRECTORY
              </span>

              <h1>
                Find official Portuguese services, government portals,
                and trusted agencies.
              </h1>

              <p>
                Sanolines Portugal helps you find official state portals, 
                employment centers, immigration agencies, tax offices, healthcare, 
                housing, and community associations across Portugal.
              </p>

              <div className="hero-search-bar">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search AIMA, Finanças, IEFP, SNS, housing..."
                  aria-label="Search Portugal services"
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
                  No matching Portugal service found.
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
              SANOLINES PORTUGAL
            </strong>
            <p>
              Official Portuguese service directories,
              agencies, and public portals.
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
          <span>&copy; 2026 Sanolines Portugal Information. All rights reserved.</span>
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
                <strong>Sanolines Portugal Information</strong> is an independent information directory guide.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                We are not a government agency and are not officially affiliated with any Portuguese state authority, ministry, or department.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Our website compiles helpful public links, official state portals, and trusted agencies in Portugal to assist users in locating administrative resources quickly.
              </p>
              <p style={{ marginBottom: "0" }}>
                Users should always verify requirements, application steps, and official regulations directly through authorized Portuguese public administration channels.
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

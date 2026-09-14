import React, { useState } from "react";
import "./App.css";

const categoriesData = [
  {
    title: "Government & Administration",
    description: "Official national portals, municipal services, civil registry, identity documents, and digital government systems.",
    details: "Essential public administration access for managing official documents, civil acts, identity verification, and local town hall municipal services.",
    items: [
      {
        title: "Government Portals",
        description: "Official national portals for public services.",
        links: [{ label: "ePortugal Portal", url: "https://eportugal.gov.pt" }],
        mapQuery: "Loja do Cidadão",
        icon: "🏛️",
        color: "#2b4c7e"
      },
      {
        title: "Municipalities",
        description: "Local town halls (Câmaras Municipais) for local services, housing, and community support.",
        links: [{ label: "Portal Autárquico", url: "https://www.portalautarquico.dgal.gov.pt" }],
        mapQuery: "Câmara Municipal",
        icon: "🏢",
        color: "#2a6f49"
      },
      {
        title: "Civil Registry",
        description: "Birth, marriage, and death certificates for legal documents and family registration.",
        links: [{ label: "Justiça.gov.pt", url: "https://justica.gov.pt" }],
        mapQuery: "Civil Registry Office",
        icon: "📜",
        color: "#8c4a24"
      },
      {
        title: "National ID & Passport",
        description: "Citizen card and passport renewal for identity documents.",
        links: [{ label: "IRN Portal", url: "https://www.irn.mj.pt" }],
        mapQuery: "Loja do Cidadão",
        icon: "🪪",
        color: "#5c3d78"
      },
      {
        title: "Digital Government",
        description: "Digital signature and online login for secure access to government services.",
        links: [{ label: "Autenticação.gov", url: "https://autenticação.gov.pt" }],
        mapQuery: "Loja do Cidadão",
        icon: "🔐",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Immigration & Borders",
    description: "Residency permits, visa applications, citizenship rules, border control, and travel guidance.",
    details: "Immigration management, legal status, visa processing, and border entry regulations handled by state bodies.",
    items: [
      {
        title: "AIMA Residency",
        description: "Residency permits and renewals for migrant residency.",
        links: [{ label: "AIMA Portal", url: "https://aima.gov.pt" }],
        mapQuery: "AIMA offices",
        icon: "🛂",
        color: "#2b4c7e"
      },
      {
        title: "VFS Visa Centers",
        description: "Visa applications and biometrics processing.",
        links: [{ label: "VFS Global", url: "https://www.vfsglobal.com" }],
        mapQuery: "VFS Visa Center",
        icon: "✈️",
        color: "#2a6f49"
      },
      {
        title: "Citizenship",
        description: "Nationality applications and citizenship rules.",
        links: [{ label: "Justiça Nationality", url: "https://justica.gov.pt/Servicos/Nacionalidade" }],
        mapQuery: "Conservatória dos Registos Centrais",
        icon: "🌐",
        color: "#8c4a24"
      },
      {
        title: "Border Control",
        description: "Entry rules and airport checks for travel regulations.",
        links: [{ label: "SEF Portal", url: "https://sef.pt" }],
        mapQuery: "Border Control Office",
        icon: "🛂",
        color: "#5c3d78"
      },
      {
        title: "Travel Rules",
        description: "Schengen rules and visa types for travel guidance.",
        links: [{ label: "ePortugal Travel", url: "https://eportugal.gov.pt" }],
        mapQuery: "ePortugal",
        icon: "🗺️",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Legal & Security",
    description: "Official lawyers, bar association, criminal record clearance, courts, and emergency forces.",
    details: "Judicial systems, public safety enforcement, legal representation, and official clearance documentation.",
    items: [
      {
        title: "Bar Association",
        description: "Official lawyers for legal help.",
        links: [{ label: "Ordem dos Advogados", url: "https://www.oa.pt" }],
        mapQuery: "Ordem dos Advogados",
        icon: "⚖️",
        color: "#2b4c7e"
      },
      {
        title: "Lawyers Directory",
        description: "Find verified lawyers and legal professionals.",
        links: [{ label: "Portal dos Advogados", url: "https://portal.oa.pt/advogados" }],
        mapQuery: "Lawyer Office",
        icon: "👨‍⚖️",
        color: "#2a6f49"
      },
      {
        title: "Criminal Record",
        description: "Police clearance certificate used for jobs and residency.",
        links: [{ label: "Registo Criminal", url: "https://justica.gov.pt/Servicos/Registo-Criminal" }],
        mapQuery: "Criminal Record Office",
        icon: "📋",
        color: "#8c4a24"
      },
      {
        title: "Courts",
        description: "Judicial system and court information.",
        links: [{ label: "Tribunais", url: "https://tribunais.org.pt" }],
        mapQuery: "Tribunal Judicial",
        icon: "🏛️",
        color: "#5c3d78"
      },
      {
        title: "Emergency Forces",
        description: "Police, fire, and civil protection emergency contacts.",
        links: [{ label: "Proteção Civil", url: "https://www.prociv.pt" }],
        mapQuery: "Proteção Civil",
        icon: "🚨",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Employment & Jobs",
    description: "National employment centers, private job agencies, international recruitment, and freelancing.",
    details: "Job search platforms, employment placement institutes, and professional career networking tools.",
    items: [
      {
        title: "IEFP",
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
          { label: "Adecco", url: "https://adecco.pt" },
          { label: "Manpower", url: "https://manpower.pt" }
        ],
        mapQuery: "Randstad Office",
        icon: "🏢",
        color: "#2a6f49"
      },
      {
        title: "International Job Agencies",
        description: "Work abroad and EU jobs.",
        links: [{ label: "EURES Portal", url: "https://eures.europa.eu" }],
        mapQuery: "EURES",
        icon: "🇪🇺",
        color: "#8c4a24"
      },
      {
        title: "Sector Job Portals",
        description: "Industry jobs in construction, hospitality, and cleaning.",
        links: [
          { label: "Jobin", url: "https://jobin.pt" },
          { label: "NetEmprego", url: "https://netemprego.pt" }
        ],
        mapQuery: "NetEmprego",
        icon: "🔍",
        color: "#5c3d78"
      },
      {
        title: "Freelancing",
        description: "Self-employment rules and freelancer registration.",
        links: [{ label: "Portal das Finanças", url: "https://portaldasfinancas.gov.pt" }],
        mapQuery: "Serviços de Finanças",
        icon: "💻",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Worker Rights & Training",
    description: "Labor rights, work contracts, minimum wage rules, professional training, and workplace safety.",
    details: "Regulations protecting employees, workplace compliance inspections, and professional courses.",
    items: [
      {
        title: "Labor Rights",
        description: "Worker protection, complaints, and inspections.",
        links: [{ label: "ACT Portal", url: "https://www.act.gov.pt" }],
        mapQuery: "Autoridade para as Condições do Trabalho",
        icon: "🛡️",
        color: "#2b4c7e"
      },
      {
        title: "Work Contracts",
        description: "Contract types and employment rules.",
        links: [{ label: "Governo de Portugal", url: "https://www.portugal.gov.pt" }],
        mapQuery: "Governo de Portugal",
        icon: "📄",
        color: "#2a6f49"
      },
      {
        title: "Minimum Wage",
        description: "Salary rules and wage information.",
        links: [{ label: "Governo de Portugal", url: "https://www.portugal.gov.pt" }],
        mapQuery: "Governo de Portugal",
        icon: "💶",
        color: "#8c4a24"
      },
      {
        title: "Professional Training",
        description: "Courses and certifications for skill development.",
        links: [{ label: "ANET Portal", url: "https://anet.pt" }],
        mapQuery: "Centro de Formação Profissional",
        icon: "📚",
        color: "#5c3d78"
      },
      {
        title: "Workplace Safety",
        description: "Safety inspections and workplace compliance.",
        links: [{ label: "ACT Safety", url: "https://www.act.gov.pt" }],
        mapQuery: "Autoridade para as Condições do Trabalho",
        icon: "⚠️",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Associations",
    description: "Migrant support groups, cultural networks, expat groups, and community solidarity charities.",
    details: "Non-profit community organizations providing social support, neighborhood integration, and cultural resources.",
    items: [
      {
        title: "Migrant Associations",
        description: "Support groups for migrants focused on cultural support.",
        links: [{ label: "ACM Portal", url: "https://www.acm.gov.pt" }],
        mapQuery: "ACM Centro Nacional de Apoio ao Imigrante",
        icon: "🤝",
        color: "#2b4c7e"
      },
      {
        title: "Cultural Associations",
        description: "Community cultural groups for events and integration.",
        links: [{ label: "Cultural Groups", url: "https://www.acm.gov.pt" }],
        mapQuery: "Associação Cultural",
        icon: "🎭",
        color: "#2a6f49"
      },
      {
        title: "Expat Groups",
        description: "Foreign resident communities providing social support.",
        links: [{ label: "Expat Networks", url: "https://www.acm.gov.pt" }],
        mapQuery: "Expat Association",
        icon: "🌍",
        color: "#8c4a24"
      },
      {
        title: "Community Networks",
        description: "Local community help for neighborhood support.",
        links: [{ label: "Community Aid", url: "https://www.acm.gov.pt" }],
        mapQuery: "Centro Comunitário",
        icon: "🏘️",
        color: "#5c3d78"
      },
      {
        title: "Solidarity Associations",
        description: "Charity groups for social help.",
        links: [{ label: "Solidarity Portals", url: "https://www.acm.gov.pt" }],
        mapQuery: "IPSS Instituição Particular de Solidariedade Social",
        icon: "❤️",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Agencies",
    description: "Recruitment companies, temporary work services, business networks, and integration support.",
    details: "Corporate staffing entities, business incubation agencies, and migrant integration offices.",
    items: [
      {
        title: "Recruitment Agencies",
        description: "Job placement companies such as Randstad and Adecco.",
        links: [
          { label: "Randstad", url: "https://randstad.pt" },
          { label: "Adecco", url: "https://adecco.pt" }
        ],
        mapQuery: "Recruitment Agency",
        icon: "👔",
        color: "#2b4c7e"
      },
      {
        title: "Temporary Work Agencies",
        description: "Short-term jobs designed for seasonal work.",
        links: [{ label: "Manpower", url: "https://manpower.pt" }],
        mapQuery: "Temporary Work Agency",
        icon: "⏱️",
        color: "#2a6f49"
      },
      {
        title: "Business Agencies",
        description: "Business support networks for company help.",
        links: [{ label: "IAPMEI", url: "https://www.iapmei.pt" }],
        mapQuery: "IAPMEI",
        icon: "📈",
        color: "#8c4a24"
      },
      {
        title: "Social Support Agencies",
        description: "Government social help and welfare support.",
        links: [{ label: "Segurança Social", url: "https://seg-social.pt" }],
        mapQuery: "Segurança Social",
        icon: "🤲",
        color: "#5c3d78"
      },
      {
        title: "Integration Agencies",
        description: "CLAIM and CNAIM for migrant integration.",
        links: [{ label: "ACM Integration", url: "https://www.acm.gov.pt" }],
        mapQuery: "CNAIM Centro Nacional de Apoio ao Imigrante",
        icon: "🌟",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Finance & Housing",
    description: "Banking institutions, tax authorities, social security pensions, and real estate portals.",
    details: "Financial accounting platforms, tax compliance portals, welfare payments, and property rental directories.",
    items: [
      {
        title: "Banking",
        description: "National banks including CGD and Millennium.",
        links: [{ label: "Caixa Geral de Depósitos", url: "https://www.cgd.pt" }],
        mapQuery: "Banco CGD",
        icon: "🏦",
        color: "#2b4c7e"
      },
      {
        title: "Tax & Customs",
        description: "NIF, VAT, and IRS tax services.",
        links: [{ label: "Portal das Finanças", url: "https://portaldasfinancas.gov.pt" }],
        mapQuery: "Serviços de Finanças",
        icon: "📊",
        color: "#2a6f49"
      },
      {
        title: "Social Security",
        description: "Benefits, pensions, and welfare.",
        links: [{ label: "Segurança Social", url: "https://seg-social.pt" }],
        mapQuery: "Segurança Social",
        icon: "💳",
        color: "#8c4a24"
      },
      {
        title: "Housing Portals",
        description: "Rent and buy homes via examples like Idealista and Imovirtual.",
        links: [{ label: "Idealista Portugal", url: "https://www.idealista.pt" }],
        mapQuery: "Imobiliária",
        icon: "🏠",
        color: "#5c3d78"
      },
      {
        title: "Tenant Rights",
        description: "Rental laws and tenant protection.",
        links: [{ label: "Portal da Habitação", url: "https://www.portugal.gov.pt" }],
        mapQuery: "Portal da Habitação",
        icon: "📝",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Daily Life & Transport",
    description: "Utility providers, postal mail, public transit networks, driving licenses, and vehicle registry.",
    details: "Logistics infrastructure, utility connection services, public transit lines, and driving credentials.",
    items: [
      {
        title: "Utilities",
        description: "Electricity, water, and internet services from examples like EDP and EPAL.",
        links: [{ label: "EDP Comercial", url: "https://www.edp.pt" }],
        mapQuery: "EDP Loja de Atendimento",
        icon: "⚡",
        color: "#2b4c7e"
      },
      {
        title: "Postal Services",
        description: "Mail and parcel delivery.",
        links: [{ label: "CTT Correios", url: "https://ctt.pt" }],
        mapQuery: "Estação CTT Correios",
        icon: "✉️",
        color: "#2a6f49"
      },
      {
        title: "Public Transport",
        description: "Metro, bus, and train services via examples like Metro Lisboa and CP.",
        links: [{ label: "Comboios de Portugal", url: "https://www.cp.pt" }],
        mapQuery: "Estação de Caminhos de Ferro CP",
        icon: "🚆",
        color: "#8c4a24"
      },
      {
        title: "Driving License",
        description: "License exchange and driving rules.",
        links: [{ label: "IMT IP", url: "https://www.imt-ip.pt" }],
        mapQuery: "IMT Balcão de Atendimento",
        icon: "🚗",
        color: "#5c3d78"
      },
      {
        title: "Vehicle Registration",
        description: "Car registration and vehicle documents.",
        links: [{ label: "IMT Vehicles", url: "https://www.imt-ip.pt" }],
        mapQuery: "Conservatória do Registo Automóvel",
        icon: "🚙",
        color: "#1d6363"
      }
    ]
  },
  {
    title: "Health, Education & Social Support",
    description: "Public healthcare hospitals, private clinics, pharmacies, education systems, and food banks.",
    details: "Healthcare clinics, public education directorates, emergency pharmacies, and community charity food distribution.",
    items: [
      {
        title: "Public Healthcare",
        description: "Hospitals, clinics, and medical services.",
        links: [{ label: "SNS Portal", url: "https://sns.gov.pt" }],
        mapQuery: "Centro de Saúde Hospital Público",
        icon: "🏥",
        color: "#2b4c7e"
      },
      {
        title: "Private Clinics",
        description: "Health insurance options via examples like Médis and Multicare.",
        links: [{ label: "Médis Saúde", url: "https://www.medis.pt" }],
        mapQuery: "Clínica Privada Hospital",
        icon: "🩺",
        color: "#2a6f49"
      },
      {
        title: "Pharmacies",
        description: "Medicine and emergency pharmacy locations.",
        links: [{ label: "Farmácias Portuguesas", url: "https://farmaciasportuguesas.pt" }],
        mapQuery: "Farmácia",
        icon: "💊",
        color: "#8c4a24"
      },
      {
        title: "Schools & Universities",
        description: "Education system and school info.",
        links: [{ label: "DGE Portal", url: "https://www.dge.mec.pt" }],
        mapQuery: "Escola Secundária Agrupamento",
        icon: "🎓",
        color: "#5c3d78"
      },
      {
        title: "Food Banks & Charities",
        description: "Food support and social help.",
        links: [{ label: "Banco Alimentar", url: "https://bancoalimentar.pt" }],
        mapQuery: "Banco Alimentar Contra a Fome",
        icon: "🍲",
        color: "#1d6363"
      }
    ]
  }
];

const cardColors = [
  "#2b4c7e", // Deep Blue
  "#2a6f49", // Forest Green
  "#8c4a24", // Warm Rust / Terracotta
  "#5c3d78", // Deep Violet
  "#1d6363", // Deep Teal
  "#8c2447", // Crimson / Berry
  "#4d5d53", // Slate Gray-Green
  "#78532f", // Bronze Brown
  "#3b5998", // Indigo Blue
  "#6b4226"  // Dark Amber
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

          <div className="nav-brand-container" onClick={() => { setSelectedCategory(null); setActiveTab("Home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ cursor: "pointer" }}>
            <div className="nav-logo">
              S
            </div>

            <div className="nav-brand-text">
              <strong>
                SANOLINES
              </strong>
              <span>
                Independent Information & Services Directory
              </span>
            </div>
          </div>

          <div className="nav-links">
            <button
              className={activeTab === "Home" && !selectedCategory ? "active" : ""}
              onClick={() => {
                setSelectedCategory(null);
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
              className={activeTab === "Services" || selectedCategory ? "active" : ""}
              onClick={goToServices}
            >
              Services
            </button>
          </div>

        </div>
      </nav>

      {/* CONDITIONAL VIEW: INDIVIDUAL CATEGORY PAGE OR HOME/DIRECTORY OR EXTRA TABS */}
      {selectedCategory ? (
        /* INDIVIDUAL CATEGORY DETAIL VIEW */
        <main className="main-container" style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            style={{
              background: "none",
              border: "none",
              color: "#2b4c7e",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.95rem",
            }}
          >
            &larr; Back to all service groups
          </button>

          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              borderTop: "6px solid #2b4c7e",
              marginBottom: "40px"
            }}
          >
            <span style={{ background: "#edf2f7", color: "#2b4c7e", padding: "6px 12px", borderRadius: "6px", fontWeight: "600", fontSize: "0.85rem" }}>
              Independent Directory Group
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

          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#222" }}>Included Services</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {selectedCategory.items.map((subItem, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  padding: "24px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                  borderTop: `5px solid ${subItem.color || "#2b4c7e"}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "1.8rem" }}>
                      {subItem.icon || "📌"}
                    </span>
                  </div>

                  <h3 style={{ fontSize: "1.2rem", color: "#1a1a1a", margin: "0 0 8px 0" }}>
                    {subItem.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.5", marginBottom: "15px" }}>
                    {subItem.description}
                  </p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                  {subItem.links.map((lnk, lIdx) => (
                    <a
                      key={lIdx}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#f8fafc",
                        color: "#2b4c7e",
                        border: "1px solid #e2e8f0",
                        textDecoration: "none",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        fontWeight: "600",
                        fontSize: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
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
                        backgroundColor: "#ffffff",
                        color: "#4a5568",
                        border: "1px dashed #cbd5e0",
                        textDecoration: "none",
                        padding: "6px 12px",
                        borderRadius: "6px",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        marginTop: "4px"
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
      ) : activeTab === "About Us" ? (
        <main className="main-container" style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ color: "#1a1a1a", marginBottom: "20px" }}>About Us</h1>
          <p style={{ lineHeight: "1.6", color: "#444", marginBottom: "15px" }}>
            Sanolines Information is an independent online guidance platform and information directory built to help individuals quickly locate official public services, government portals, employment resources, and trusted community agencies.
          </p>
          <p style={{ lineHeight: "1.6", color: "#444" }}>
            Our mission is to streamline access to essential public information by organizing complex administrative directories into clear, accessible categories.
          </p>
        </main>
      ) : activeTab === "Disclaimer" ? (
        <main className="main-container" style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ color: "#1a1a1a", marginBottom: "20px" }}>Disclaimer</h1>
          <p style={{ lineHeight: "1.6", color: "#444", marginBottom: "15px" }}>
            Sanolines Information is an independent information directory and is not affiliated with, endorsed by, or officially connected to any government agency, ministry, or official public institution.
          </p>
          <p style={{ lineHeight: "1.6", color: "#444" }}>
            Users are solely responsible for verifying any information directly with the relevant official authorities before taking action or relying upon it.
          </p>
        </main>
      ) : activeTab === "Privacy Policy" ? (
        <main className="main-container" style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ color: "#1a1a1a", marginBottom: "20px" }}>Privacy Policy</h1>
          <p style={{ lineHeight: "1.6", color: "#444", marginBottom: "15px" }}>
            At Sanolines Information, we respect your privacy. We do not collect or store personal identification information through general browsing of our directory pages.
          </p>
          <p style={{ lineHeight: "1.6", color: "#444" }}>
            External links direct users to independent official websites which maintain their own respective privacy standards and terms.
          </p>
        </main>
      ) : activeTab === "Terms of Use" ? (
        <main className="main-container" style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto" }}>
          <h1 style={{ color: "#1a1a1a", marginBottom: "20px" }}>Terms of Use</h1>
          <p style={{ lineHeight: "1.6", color: "#444", marginBottom: "15px" }}>
            By accessing and using Sanolines Information, you agree to comply with and be bound by these terms. The directory is provided on an "as is" basis without warranties of any kind.
          </p>
          <p style={{ lineHeight: "1.6", color: "#444" }}>
            We reserve the right to update or modify links and contents at any time without prior notice.
          </p>
        </main>
      ) : (
        /* HOMEPAGE DIRECTORY VIEW */
        <>
          {/* HERO */}
          <header className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">
                SERVICES & AGENCIES DIRECTORY
              </span>

              <h1>
                Find official services, government portals, and trusted agencies.
              </h1>

              <p>
                Sanolines Information is an independent information directory and guidance platform that helps you locate official state portals, 
                employment centers, immigration agencies, tax offices, healthcare, 
                housing, and community associations. Users are solely responsible for verifying information directly with the relevant official authority.
              </p>

              <div className="hero-search-bar">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search government, immigration, legal, jobs, housing..."
                  aria-label="Search services"
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
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        border: "none",
                      }}
                    >
                      <div className="continent-top">
                        <h3
                          style={{
                            color: "#ffffff",
                            fontSize: "1.35rem",
                            marginTop: "0",
                            marginBottom: "12px",
                            fontWeight: "700",
                            letterSpacing: "0.5px",
                            textTransform: "uppercase",
                          }}
                        >
                          {category.title}
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
                        {category.description}
                      </p>

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
                            padding: "8px 18px",
                            borderRadius: "6px",
                            fontWeight: "bold",
                            cursor: "pointer",
                            fontSize: "0.85rem",
                            letterSpacing: "0.5px",
                            transition: "background 0.2s",
                          }}
                        >
                          VIEW SERVICES &rarr;
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredCategories.length === 0 && (
                <div className="no-results">
                  No matching category found.
                </div>
              )}
            </section>

          </main>
        </>
      )}

      {/* FOOTER */}
      <footer className="home-footer" style={{ background: "#1a1a1a", color: "#fff", padding: "40px 20px", marginTop: "60px" }}>
        <div className="home-footer-inner" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
          <div>
            <strong>
              SANOLINES INFORMATION
            </strong>
            <p style={{ color: "#aaa", fontSize: "0.9rem", marginTop: "8px", marginBottom: 0 }}>
              Independent information directory and guidance platform for public portals and agencies.
            </p>
          </div>
          
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <button
              onClick={() => { setSelectedCategory(null); setActiveTab("About Us"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: "0.9rem", padding: 0 }}
            >
              About Us
            </button>
            <button
              onClick={() => { setSelectedCategory(null); setActiveTab("Disclaimer"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: "0.9rem", padding: 0 }}
            >
              Disclaimer
            </button>
            <button
              onClick={() => { setSelectedCategory(null); setActiveTab("Privacy Policy"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: "0.9rem", padding: 0 }}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => { setSelectedCategory(null); setActiveTab("Terms of Use"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: "0.9rem", padding: 0 }}
            >
              Terms of Use
            </button>
          </div>
        </div>
      </footer>

    </div>
  );
}

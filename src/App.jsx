import React, { useState } from "react";

const categoriesData = [
  {
    number: "01",
    title: "GOVERNMENT & CITIZEN PORTALS",
    description: "Official administrative assistance, digital citizen services, and public registries.",
    details: "Comprehensive directory of government gateways, public administration portals, and citizen services in Portugal.",
    items: [
      { title: "ePortugal Portal", description: "Central public services portal for citizens and businesses.", links: [{ label: "ePortugal Official", url: "https://eportugal.gov.pt" }], icon: "🏛️" },
      { title: "Portal do Cidadão", description: "Citizen portal for official documents and services.", links: [{ label: "Citizen Portal", url: "https://www.portaldocidadao.gov.pt" }], icon: "🆔" },
      { title: "Autenticação.gov", description: "Digital mobile key and digital identity management.", links: [{ label: "Autenticação", url: "https://autenticacao.gov.pt" }], icon: "🔐" }
    ]
  },
  {
    number: "02",
    title: "IMMIGRATION & LEGAL RESIDENCY",
    description: "Residence permits, visa processes, border control, and nationality applications.",
    details: "State agencies, visa processing centers, and legal immigration gateways.",
    items: [
      { title: "AIMA Portal", description: "Agency for Integration, Migration and Asylum (residency permits).", links: [{ label: "AIMA Official", url: "https://aima.gov.pt" }], icon: "🛂" },
      { title: "VFS Global", description: "Visa application centers and biometrics.", links: [{ label: "VFS Global", url: "https://www.vfsglobal.com" }], icon: "✈️" },
      { title: "Justiça Nationality", description: "Citizenship and nationality application rules.", links: [{ label: "Justiça.gov", url: "https://justica.gov.pt" }], icon: "🌐" }
    ]
  },
  {
    number: "03",
    title: "EMPLOYMENT & PROFESSIONAL TRAINING",
    description: "National employment centers, job boards, labor rights, and career training.",
    details: "Comprehensive directory of employment portals, temporary work agencies, and career support platforms.",
    items: [
      { title: "IEFP Portal", description: "National employment institute for jobs and vocational training.", links: [{ label: "IEFP Official", url: "https://iefp.pt" }], icon: "💼" },
      { title: "NetEmprego", description: "Popular national job board for open positions.", links: [{ label: "NetEmprego", url: "https://netemprego.pt" }], icon: "🔍" },
      { title: "LinkedIn Jobs", description: "Professional network and corporate job listings.", links: [{ label: "LinkedIn", url: "https://linkedin.com" }], icon: "🌐" }
    ]
  },
  {
    number: "04",
    title: "BANKING & FINANCIAL SERVICES",
    description: "National retail banks, central banking regulations, and financial accounts.",
    details: "Financial institutions, tax number (NIF) acquisition guides, and digital banking portals.",
    items: [
      { title: "Caixa Geral de Depósitos (CGD)", description: "State-owned national bank.", links: [{ label: "CGD Official", url: "https://www.cgd.pt" }], icon: "🏦" },
      { title: "Millennium BCP", description: "Major commercial bank in Portugal.", links: [{ label: "Millennium BCP", url: "https://www.millenniumbcp.pt" }], icon: "💳" },
      { title: "Portal das Finanças (NIF)", description: "Tax authority portal for obtaining your NIF tax number.", links: [{ label: "Portal das Finanças", url: "https://portaldasfinancas.gov.pt" }], icon: "📊" }
    ]
  },
  {
    number: "05",
    title: "TAXATION & CUSTOMS AUTHORITIES",
    description: "Tax ID (NIF) setup, annual declarations, VAT, and customs",
    details: "Tax authority services, customs declarations, and fiscal representation portals.",
    items: [
      { title: "Autoridade Tributária e Aduaneira", description: "Official tax and customs authority portal.", links: [{ label: "AT Portal", url: "https://www.portaldasfinancas.gov.pt" }], icon: "📋" },
      { title: "Aduanas e IVA", description: "VAT and international shipping customs information.", links: [{ label: "Customs Guide", url: "https://www.portaldasfinancas.gov.pt" }], icon: "📦" }
    ]
  },
  {
    number: "06",
    title: "PUBLIC HEALTHCARE & SNS",
    description: "National health service, public hospitals, local health centers, and medical guidance.",
    details: "National Health Service (SNS) directories, emergency contacts, and medical centers.",
    items: [
      { title: "SNS 24 (Portal da Saúde)", description: "National Health Service portal and 24/7 medical line.", links: [{ label: "SNS 24 Official", url: "https://sns24.gov.pt" }], icon: "🏥" },
      { title: "Emergency Services (112)", description: "General European emergency number.", links: [{ label: "Emergency", url: "https://www.prociv.pt" }], icon: "🚨" }
    ]
  },
  {
    number: "07",
    title: "EDUCATION & ACADEMIC RECOGNITION",
    description: "Public schools, higher education placement, and diploma",
    details: "University placement directories, degree recognition offices, and school enrollment portals.",
    items: [
      { title: "Direção-Geral da Educação", description: "National education directorate and school guides.", links: [{ label: "DGE Official", url: "https://www.dge.mec.pt" }], icon: "🎓" },
      { title: "DGES Academic Recognition", description: "Foreign degree and diploma recognition platform.", links: [{ label: "DGES Portal", url: "https://www.dges.gov.pt" }], icon: "📜" }
    ]
  },
  {
    number: "08",
    title: "TRANSPORTATION & DRIVING LICENSE",
    description: "Driver's license exchange, vehicle registration, and national transit networks.",
    details: "Mobility authorities, vehicle registration centers, and transit infrastructure portals.",
    items: [
      { title: "IMT Online", description: "Institute for Mobility and Transport (driving licenses & vehicles).", links: [{ label: "IMT Official", url: "https://www.imt-ip.pt" }], icon: "🚗" },
      { title: "Via Verde", description: "Electronic toll payment and highway mobility services.", links: [{ label: "Via Verde", url: "https://www.viaverde.pt" }], icon: "🛣️" }
    ]
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categoriesData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.items.length > 0
  );

  return (
    <div className="app-container">
      <style>{`
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; background-color: #f4f5f7; color: #333; }
        .app-container { min-height: 100vh; display: flex; flex-direction: column; }
        .promo-banner { background-color: #2e7d32; color: #ffffff; text-align: center; padding: 12px; font-size: 14px; font-weight: 500; }
        .promo-banner a { color: #ffeb3b; text-decoration: underline; margin: 0 5px; }
        .app-header { background: #ffffff; padding: 40px 20px; text-align: center; border-bottom: 1px solid #e0e0e0; }
        .app-header h1 { margin: 0 0 5px 0; font-size: 38px; color: #1a1a1a; font-weight: 800; letter-spacing: -0.5px; }
        .app-header p { margin: 0; color: #666; font-size: 16px; }
        .main-content { max-width: 1200px; margin: 0 auto; padding: 40px 20px; width: 100%; box-sizing: border-box; flex: 1; }
        .search-section { margin-bottom: 40px; text-align: center; }
        .search-input { width: 100%; max-width: 600px; padding: 14px 20px; font-size: 16px; border: 1px solid #ccc; border-radius: 8px; outline: none; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
        .search-input:focus { border-color: #5c3d78; box-shadow: 0 0 0 3px rgba(92,61,120,0.1); }
        
        .categories-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; }
        
        .category-card { 
          background: linear-gradient(135deg, #5c3d78 0%, #7d4168 100%); 
          color: #ffffff; 
          padding: 24px; 
          border-radius: 12px; 
          cursor: pointer; 
          transition: transform 0.2s, box-shadow 0.2s; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .category-card:nth-child(even) {
          background: linear-gradient(135deg, #6b334f 0%, #4a2842 100%);
        }
        .category-card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.15); }
        
        .card-number { 
          background: rgba(255, 255, 255, 0.2); 
          padding: 4px 10px; 
          border-radius: 4px; 
          font-size: 12px; 
          font-weight: 700; 
          width: fit-content; 
          margin-bottom: 16px; 
        }
        .category-card h3 { margin: 0 0 12px 0; font-size: 18px; font-weight: 700; line-height: 1.3; letter-spacing: 0.3px; }
        .category-card p { color: #f0f0f0; font-size: 13px; line-height: 1.5; margin-bottom: 24px; flex: 1; }
        
        .learn-more-btn { 
          background: #ffffff; 
          color: #222; 
          border: none; 
          padding: 8px 16px; 
          border-radius: 4px; 
          font-weight: 700; 
          font-size: 12px; 
          cursor: pointer; 
          width: fit-content; 
          text-transform: uppercase;
          transition: background 0.2s;
        }
        .learn-more-btn:hover { background: #f0f0f0; }

        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; padding: 20px; z-index: 1000; }
        .modal-content { background: #ffffff; padding: 30px; border-radius: 12px; max-width: 700px; width: 100%; max-height: 85vh; overflow-y: auto; box-shadow: 0 10px 25px rgba(0,0,0,0.2); color: #333; }
        .modal-content h2 { margin-top: 0; color: #1a1a1a; }
        .modal-details { color: #666; font-size: 15px; margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .resource-list { list-style: none; padding: 0; margin: 0 0 20px 0; }
        .resource-item { padding: 14px 0; border-bottom: 1px solid #f0f0f0; }
        .resource-item strong { font-size: 16px; color: #222; display: block; margin-bottom: 4px; }
        .resource-item p { margin: 0 0 8px 0; color: #555; font-size: 14px; }
        .resource-item a { display: inline-block; font-weight: 600; font-size: 13px; text-decoration: none; color: #5c3d78; }
        .resource-item a:hover { text-decoration: underline; }
        .close-btn { background: #333; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500; }
        .close-btn:hover { background: #555; }

        .app-footer { background: #ffffff; text-align: center; padding: 30px 20px; font-size: 13px; color: #666; border-top: 1px solid #e0e0e0; margin-top: auto; }
        .app-footer p { margin: 6px 0; }
      `}</style>

      {/* Single Uniplaces Promo Banner */}
      <div className="promo-banner">
        Looking for student housing? 
        <a href="https://www.uniplaces.com" target="_blank" rel="noopener noreferrer">
          Click here to visit Uniplaces
        </a> 
        Use promo code <strong>UNIX0YP7M</strong> at checkout to get 10% off the service fee!
      </div>

      {/* Main Header */}
      <header className="app-header">
        <h1>Sanolines</h1>
        <p>Independent Information & Services Directory</p>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search resources, services, or portals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="categories-grid">
          {filteredCategories.map((category, index) => (
            <div 
              key={index} 
              className="category-card"
              onClick={() => setSelectedCategory(category)}
            >
              <div className="card-number">{category.number}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="modal-overlay" onClick={() => setSelectedCategory(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedCategory.title}</h2>
              <p className="modal-details">{selectedCategory.details}</p>
              <ul className="resource-list">
                {selectedCategory.items.map((item, i) => (
                  <li key={i} className="resource-item">
                    <strong>{item.icon} {item.title}</strong>
                    <p>{item.description}</p>
                    {item.links.map((link, lIdx) => (
                      <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label} ↗
                      </a>
                    ))}
                  </li>
                ))}
              </ul>
              <button className="close-btn" onClick={() => setSelectedCategory(null)}>Close</button>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="app-footer">
        <div style={{ maxWidth: "800px", margin: "0 auto 15px auto" }}>
          <h4 style={{ margin: "0 0 5px 0", color: "#333", fontSize: "15px" }}>Sanolines Directory</h4>
          <p style={{ color: "#666", fontSize: "13px", lineHeight: "1.4", margin: "0 0 10px 0" }}>
            Sanolines is your trusted independent portal guiding locals, students, and expats through essential services including government portals, residency, employment, and banking resources.
          </p>
        </div>

        <p>© {new Date().getFullYear()} Sanolines. Independent information directory and guidance platform.</p>
        
        <p style={{ fontSize: "11px", maxWidth: "800px", margin: "8px auto", color: "#776" }}>
          <strong>Disclaimer:</strong> Sanolines is an independent guide and information platform. We are not affiliated with, endorsed by, or connected to any government agency or official state portal.
        </p>

        <div style={{ marginTop: "12px" }}>
          <span style={{ margin: "0 10px", cursor: "pointer", color: "#5c3d78" }}>Privacy Policy</span> | 
          <span style={{ margin: "0 10px", cursor: "pointer", color: "#5c3d78" }}>Terms of Service</span> | 
          <span style={{ margin: "0 10px", cursor: "pointer", color: "#5c3d78" }}>Contact</span>
        </div>
      </footer>
    </div>
  );
}

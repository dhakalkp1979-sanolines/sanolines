import React, { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [activeModalPage, setActiveModalPage] = useState('disclaimer');

  const categories = [
    { title: "Immigration & Residency", desc: "Official portals for visas, residence permits, and residency support.", link: "https://www.aima.gov.pt" },
    { title: "Tax & Public Finance", desc: "Tax submission, declarations, and fiscal management portals.", link: "https://www.portaldasfinancas.gov.pt" },
    { title: "Social Security", desc: "Benefits, contributions, family support, and social security services.", link: "https://www.seg-social.pt" },
    { title: "Employment & Jobs", desc: "Job centers, professional training, and career listings.", link: "https://www.iefp.pt" },
    { title: "Healthcare & Public Health", desc: "Health service portals, scheduling, and digital medical user cards.", link: "https://www.sns.gov.pt" },
    { title: "Housing & Utilities", desc: "Property registration, rental support, and energy resources.", link: "#" },
    { title: "Transportation & Transit", desc: "Public transit networks, driving licenses, and vehicle registration.", link: "#" },
    { title: "Education & Learning", desc: "Public schools, university enrolment, and student resources.", link: "#" },
    { title: "Legal & Justice", desc: "Citizen cards, civil registries, and official legal service portals.", link: "#" },
    { title: "General Public Utilities", desc: "Essential administrative utilities, municipal services, and emergency info.", link: "#" }
  ];

  const filteredCategories = categories.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    cat.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (page) => {
    setActiveModalPage(page);
    setIsDisclaimerOpen(true);
  };

  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f9fafb", color: "#1f2937", margin: 0, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Header */}
      <header style={{ textAlign: "center", padding: "40px 20px 20px" }}>
        <div style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#111827" }}>Sanolines</div>
        <p style={{ color: "#4b5563", fontSize: "1rem", marginTop: "8px" }}>Your clean, independent directory for official public services and information.</p>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, maxWidth: "1200px", margin: "0 auto", padding: "20px", width: "100%", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
          <input 
            type="text" 
            placeholder="Search services, portals, or information..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "100%", maxWidth: "600px", padding: "12px 18px", fontSize: "1rem", border: "1px solid #d1d5db", borderRadius: "8px", outline: "none", background: "#fff" }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
          {filteredCategories.map((cat, index) => (
            <div key={index} style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "8px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 1px 2px rgba(0,0,0,0.03)" }}>
              <h3 style={{ fontSize: "1.1rem", marginTop: 0, marginBottom: "10px", color: "#111827" }}>{cat.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#6b7280", flex: 1, marginBottom: "15px" }}>{cat.desc}</p>
              <a href={cat.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#2563eb", fontWeight: 600, fontSize: "0.9rem" }}>
                Visit Official Portal &rarr;
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "#ffffff", borderTop: "1px solid #e5e7eb", textAlign: "center", padding: "30px 20px", marginTop: "40px" }}>
        <p style={{ fontSize: "0.9rem", color: "#4b5563" }}><strong>Sanolines Information</strong> — Independent directory platform.</p>
        <div style={{ margin: "15px 0", display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
          <button onClick={() => openModal('about')} style={{ background: "none", border: "none", color: "#4b5563", cursor: "pointer", fontSize: "0.9rem" }}>About Us</button>
          <button onClick={() => openModal('disclaimer')} style={{ background: "none", border: "none", color: "#4b5563", cursor: "pointer", fontSize: "0.9rem" }}>Disclaimer</button>
          <button onClick={() => openModal('privacy')} style={{ background: "none", border: "none", color: "#4b5563", cursor: "pointer", fontSize: "0.9rem" }}>Privacy Policy</button>
          <button onClick={() => openModal('terms')} style={{ background: "none", border: "none", color: "#4b5563", cursor: "pointer", fontSize: "0.9rem" }}>Terms of Use</button>
        </div>
        <p style={{ fontSize: "0.85rem", color: "#9ca3af" }}>&copy; {new Date().getFullYear()} Sanolines.com. All rights reserved.</p>
      </footer>

      {/* Modal */}
      {isDisclaimerOpen && (
        <div onClick={() => setIsDisclaimerOpen(false)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000, padding: "20px" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", padding: "30px", borderRadius: "12px", maxWidth: "650px", maxHeight: "80vh", overflowY: "auto", position: "relative", boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}>
            <button onClick={() => setIsDisclaimerOpen(false)} style={{ position: "absolute", top: "15px", right: "20px", background: "none", border: "none", fontSize: "1.8rem", cursor: "pointer", color: "#4b5563" }}>&times;</button>
            
            {activeModalPage === 'disclaimer' && (
              <>
                <h2 style={{ marginTop: 0, color: "#111827" }}>Disclaimer</h2>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}><strong>Sanolines Information</strong> is an independent information directory and guidance platform.</p>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>Sanolines is not a government agency, public authority, ministry, department, immigration authority, legal practice, medical provider, employment agency, financial institution, or other professional service provider and is not officially affiliated with any government or public authority.</p>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>Sanolines provides general information and organizes publicly available resources, official websites, public-service portals, organizations, agencies, and other useful links to help users locate relevant information and services.</p>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>Sanolines does not provide, process, approve, represent, or guarantee any of the services referenced on this website. Users communicate and deal directly with the relevant government authority, organization, company, or service provider.</p>
              </>
            )}

            {activeModalPage === 'privacy' && (
              <>
                <h2 style={{ marginTop: 0, color: "#111827" }}>Privacy Policy</h2>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>At Sanolines.com, we respect your privacy. This site uses standard web traffic analysis tools and third-party advertising partners like Google AdSense to display ads.</p>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>Google AdSense may use cookies to serve ads based on your prior visits to this website or other websites.</p>
              </>
            )}

            {activeModalPage === 'terms' && (
              <>
                <h2 style={{ marginTop: 0, color: "#111827" }}>Terms of Use</h2>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>By accessing and using Sanolines.com, you agree to accept these simple terms of use. The site is provided on an "as-is" basis for informational directory purposes only.</p>
              </>
            )}

            {activeModalPage === 'about' && (
              <>
                <h2 style={{ marginTop: 0, color: "#111827" }}>About Sanolines</h2>
                <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.6 }}>Sanolines.com was created to provide a clean, uncluttered, and easy-to-use information directory for official public portals and resources.</p>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default App;

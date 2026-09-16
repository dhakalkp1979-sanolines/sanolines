import React, { useState } from "react";
import "./App.css";

const categoriesData = [
  {
    id: "jobs",
    title: "Jobs",
    description: "Employment & recruitment resources across national boards and agencies.",
    color: "#2b4c7e",
    items: [
      { title: "IEFP Portal", description: "National employment institute for jobs and vocational training.", links: [{ label: "IEFP Official", url: "https://iefp.pt" }], icon: "💼" },
      { title: "NetEmprego", description: "Popular national job board for open positions.", links: [{ label: "NetEmprego", url: "https://netemprego.pt" }], icon: "🔍" },
      { title: "LinkedIn Jobs", description: "Professional network and corporate job listings.", links: [{ label: "LinkedIn", url: "https://linkedin.com" }], icon: "🌐" }
    ]
  },
  {
    id: "room-rent",
    title: "Room Rent",
    description: "Shared rooms and medium-term rentals for students and expats.",
    color: "#2a6f49",
    items: [
      { title: "Uniplaces Partner", description: "Verified student and expat room rentals with booking integration.", links: [{ label: "Uniplaces", url: "https://www.uniplaces.com" }], icon: "🛏️" },
      { title: "Inlife Housing", description: "Mid-to-long term student housing and rooms.", links: [{ label: "Inlife", url: "https://inlifehousing.com" }], icon: "🏠" },
      { title: "Spotahome", description: "Online verified home and room bookings.", links: [{ label: "Spotahome", url: "https://www.spotahome.com" }], icon: "🔑" }
    ]
  },
  {
    id: "housing",
    title: "Housing",
    description: "Apartments and long-term rentals with your affiliate partner boxes like Uniplaces.",
    color: "#8c4a24",
    items: [
      { title: "Idealista Portugal", description: "Leading property portal for buying and renting homes.", links: [{ label: "Idealista", url: "https://www.idealista.pt" }], icon: "🏠" },
      { title: "Imovirtual", description: "Real estate search engine for apartments and houses.", links: [{ label: "Imovirtual", url: "https://www.imovirtual.com" }], icon: "🏢" },
      { title: "Uniplaces Housing Partner", description: "Integrated apartment leasing solutions.", links: [{ label: "Uniplaces", url: "https://www.uniplaces.com" }], icon: "📦" }
    ]
  },
  {
    id: "immigration",
    title: "Immigration",
    description: "Visas, residency permits, and citizenship pathways.",
    color: "#5c3d78",
    items: [
      { title: "AIMA Portal", description: "Agency for Integration, Migration and Asylum.", links: [{ label: "AIMA Official", url: "https://aima.gov.pt" }], icon: "🛂" },
      { title: "VFS Global", description: "Visa application centers and biometrics submission.", links: [{ label: "VFS Global", url: "https://www.vfsglobal.com" }], icon: "✈️" },
      { title: "Justiça Nationality", description: "Citizenship and nationality application regulations.", links: [{ label: "Justiça.gov", url: "https://justica.gov.pt" }], icon: "🌐" }
    ]
  },
  {
    id: "open-bank-account",
    title: "Open Bank Account",
    description: "Banking institutions and financial setup assistance.",
    color: "#1d6363",
    items: [
      { title: "Caixa Geral de Depósitos", description: "State-owned national bank.", links: [{ label: "CGD Official", url: "https://www.cgd.pt" }], icon: "🏦" },
      { title: "Millennium BCP", description: "Major commercial bank in Portugal.", links: [{ label: "Millennium BCP", url: "https://www.millenniumbcp.pt" }], icon: "💳" },
      { title: "Portal das Finanças (NIF)", description: "Tax authority portal required for opening bank accounts.", links: [{ label: "Finanças", url: "https://portaldasfinancas.gov.pt" }], icon: "📊" }
    ]
  },
  {
    id: "recruitment-agencies",
    title: "Recruitment Agencies",
    description: "Job placement and temporary work staffing companies.",
    color: "#8c2447",
    items: [
      { title: "Randstad Portugal", description: "Global recruitment and temporary staffing agency.", links: [{ label: "Randstad", url: "https://randstad.pt" }], icon: "👔" },
      { title: "Adecco Portugal", description: "Employment placement and human resources services.", links: [{ label: "Adecco", url: "https://adecco.pt" }], icon: "🏢" },
      { title: "ManpowerGroup", description: "Temporary staffing and workforce solutions.", links: [{ label: "Manpower", url: "https://manpower.pt" }], icon: "⏱️" }
    ]
  },
  {
    id: "health-services",
    title: "Health Services",
    description: "Public hospitals, clinics, and emergency care directories.",
    color: "#4d5d53",
    items: [
      { title: "SNS 24 (Portal da Saúde)", description: "National Health Service portal and 24/7 medical line.", links: [{ label: "SNS 24 Official", url: "https://sns24.gov.pt" }], icon: "🏥" },
      { title: "CUF Saúde", description: "Private hospital and clinic network.", links: [{ label: "CUF Hospitais", url: "https://www.cuf.pt" }], icon: "🩺" },
      { title: "Emergency Services (112)", description: "General European emergency number.", links: [{ label: "Proteção Civil", url: "https://www.prociv.pt" }], icon: "🚨" }
    ]
  },
  {
    id: "public-transport",
    title: "Public Transport",
    description: "Trains, metros, and local transit networks across Portugal.",
    color: "#783d5c",
    items: [
      { title: "Comboios de Portugal (CP)", description: "National railway and train network operator.", links: [{ label: "CP Portal", url: "https://www.cp.pt" }], icon: "🚆" },
      { title: "Metropolitano de Lisboa", description: "Subway network for the capital city.", links: [{ label: "Metro Lisboa", url: "https://www.metrolisboa.pt" }], icon: "🚇" },
      { title: "Metro do Porto", description: "Light rail transit system in Porto.", links: [{ label: "Metro Porto", url: "https://www.metrodoporto.pt" }], icon: "🚝" }
    ]
  },
  {
    id: "driving-licence",
    title: "Driving Licence",
    description: "Exchange, applications, and vehicle registry services.",
    color: "#3d5c78",
    items: [
      { title: "IMT Online", description: "Driving license exchanges, renewals, and vehicle registration.", links: [{ label: "IMT Portal", url: "https://www.imt-ip.pt" }], icon: "🚗" },
      { title: "Automóvel Clube de Portugal (ACP)", description: "Motoring association and assistance services.", links: [{ label: "ACP Portal", url: "https://www.acp.pt" }], icon: "🚙" }
    ]
  },
  {
    id: "education-training",
    title: "Education & Training",
    description: "Schools, universities, and professional courses.",
    color: "#78643d",
    items: [
      { title: "Direção-Geral da Educação", description: "National school system and education administration.", links: [{ label: "DGE Portal", url: "https://www.dge.mec.pt" }], icon: "🏫" },
      { title: "DGES Higher Education", description: "University placements and degree recognitions.", links: [{ label: "DGES", url: "https://www.dges.gov.pt" }], icon: "🎓" }
    ]
  },
  {
    id: "pharmacies-daily-life",
    title: "Pharmacies & Daily Life",
    description: "Local pharmacies, utilities, and daily essentials.",
    color: "#3d7852",
    items: [
      { title: "Farmácias Portuguesas", description: "National association of pharmacies and medicine locator.", links: [{ label: "Farmácias Pt", url: "https://farmaciasportuguesas.pt" }], icon: "💊" },
      { title: "CTT Correios", description: "National postal and courier delivery services.", links: [{ label: "CTT Portal", url: "https://www.ctt.pt" }], icon: "✉️" },
      { title: "ANACOM", description: "Utilities and telecommunications regulator.", links: [{ label: "ANACOM", url: "https://www.anacom.pt" }], icon: "📡" }
    ]
  },
  {
    id: "travel-tourism",
    title: "Travel & Tourism",
    description: "Short-term stays, hotels, and Booking.com partner boxes.",
    color: "#78453d",
    items: [
      { title: "Booking.com Partner", description: "Hotels, short-term stays, and travel accommodation deals.", links: [{ label: "Booking.com", url: "https://www.booking.com" }], icon: "🏨" },
      { title: "Turismo de Portugal", description: "Official national tourism board and travel guide.", links: [{ label: "Visit Portugal", url: "https://www.visitportugal.com" }], icon: "✈️" }
    ]
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="sanolines-app">
      {/* Top Navbar Header */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-badge">S</span>
          <div className="brand-text">
            <span className="brand-title">SANOLINES</span>
            <span className="brand-subtitle">INDEPENDENT INFORMATION & SERVICES DIRECTORY</span>
          </div>
        </div>
        <div className="nav-links">
          <button onClick={() => setSelectedCategory(null)} className="nav-btn active">Home</button>
          <a href="#services" className="nav-link-item">Services</a>
        </div>
      </nav>

      {/* Main Container */}
      <main className="main-content">
        {selectedCategory === null ? (
          /* 12 Grid Boxes View */
          <div>
            <div className="categories-grid-12">
              {categoriesData.map((cat) => (
                <div 
                  key={cat.id} 
                  className="dashboard-box" 
                  style={{ backgroundColor: cat.color }}
                >
                  <div className="box-content">
                    <h2>{cat.title}</h2>
                    <p>{cat.description}</p>
                  </div>
                  <button 
                    className="view-services-btn" 
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    VIEW SERVICES &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Detailed View for Selected Category */
          <div>
            {(() => {
              const cat = categoriesData.find(c => c.id === selectedCategory);
              return (
                <div className="detail-view-container">
                  <button className="back-btn" onClick={() => setSelectedCategory(null)}>
                    &larr; Back to All Categories
                  </button>
                  <div className="detail-header" style={{ borderLeftColor: cat.color }}>
                    <h1>{cat.title}</h1>
                    <p>{cat.description}</p>
                  </div>
                  <div className="sub-items-grid">
                    {cat.items.map((item, idx) => (
                      <div key={idx} className="sub-item-box">
                        <div className="sub-item-header">
                          <span className="sub-icon">{item.icon}</span>
                          <h3>{item.title}</h3>
                        </div>
                        <p>{item.description}</p>
                        <div className="sub-item-links">
                          {item.links.map((link, lIdx) => (
                            <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" className="action-link">
                              {link.label} ↗
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sanolines.com — Independent Information & Services Directory.</p>
      </footer>
    </div>
  );
}

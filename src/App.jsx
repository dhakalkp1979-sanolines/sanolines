import React, { useState } from 'react';
import './App.css'; // Or your main CSS file

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [activeModalPage, setActiveModalPage] = useState('disclaimer'); // 'disclaimer', 'privacy', 'terms', 'about'

  // The 10 simple service categories
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
    <div className="sanolines-container">
      {/* Header */}
      <header className="site-header">
        <div className="logo">Sanolines</div>
        <p className="tagline">Your clean, independent directory for official public services and information.</p>
      </header>

      {/* Main Search & Content */}
      <main className="site-main">
        <div className="search-box-wrapper">
          <input 
            type="text" 
            placeholder="Search services, portals, or information..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="categories-grid">
          {filteredCategories.map((cat, index) => (
            <div key={index} className="category-card">
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
              <a href={cat.link} target="_blank" rel="noopener noreferrer" className="external-link-btn">
                Visit Official Portal &rarr;
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-content">
          <p className="footer-brand"><strong>Sanolines Information</strong> — Independent directory platform.</p>
          <div className="footer-links">
            <button onClick={() => openModal('about')} className="footer-btn">About Us</button>
            <button onClick={() => openModal('disclaimer')} className="footer-btn">Disclaimer</button>
            <button onClick={() => openModal('privacy')} className="footer-btn">Privacy Policy</button>
            <button onClick={() => openModal('terms')} className="footer-btn">Terms of Use</button>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Sanolines.com. All rights reserved.</p>
        </div>
      </footer>

      {/* Modal for Disclaimer / Legal Pages */}
      {isDisclaimerOpen && (
        <div className="modal-overlay" onClick={() => setIsDisclaimerOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsDisclaimerOpen(false)}>&times;</button>
            
            {activeModalPage === 'disclaimer' && (
              <>
                <h2>Disclaimer</h2>
                <p><strong>Sanolines Information</strong> is an independent information directory and guidance platform.</p>
                <p>Sanolines is not a government agency, public authority, ministry, department, immigration authority, legal practice, medical provider, employment agency, financial institution, or other professional service provider and is not officially affiliated with any government or public authority.</p>
                <p>Sanolines provides general information and organizes publicly available resources, official websites, public-service portals, organizations, agencies, and other useful links to help users locate relevant information and services.</p>
                <p>Sanolines does not provide, process, approve, represent, or guarantee any of the services referenced on this website. Users communicate and deal directly with the relevant government authority, organization, company, or service provider.</p>
                <p>Information provided by Sanolines is for general informational purposes only. Information, requirements, procedures, fees, deadlines, laws, regulations, contact details, opening hours, websites, and services may change without notice.</p>
                <p>Users are solely responsible for verifying information directly with the relevant official authority or service provider before relying on it or taking any action.</p>
              </>
            )}

            {activeModalPage === 'privacy' && (
              <>
                <h2>Privacy Policy</h2>
                <p>At Sanolines.com, we respect your privacy. This site uses standard web traffic analysis tools and third-party advertising partners like Google AdSense to display ads.</p>
                <p>Google AdSense may use cookies to serve ads based on your prior visits to this website or other websites. You may opt out of personalized advertising by visiting Google's Ads Settings.</p>
                <p>We do not collect or store personal sensitive data through our core directory search tools.</p>
              </>
            )}

            {activeModalPage === 'terms' && (
              <>
                <h2>Terms of Use</h2>
                <p>By accessing and using Sanolines.com, you agree to accept these simple terms of use.</p>
                <p>The site is provided on an "as-is" basis for informational directory purposes only. You agree to use outbound links to official third-party portals at your own discretion and responsibility.</p>
              </>
            )}

            {activeModalPage === 'about' && (
              <>
                <h2>About Sanolines</h2>
                <p>Sanolines.com was created to provide a clean, uncluttered, and easy-to-use information directory.</p>
                <p>We organize official public portals, government links, and helpful resources in one direct place so users can navigate complex systems quickly and effortlessly.</p>
              </>
            )}

          </div>
        </div>
      )}
    </div>
  );
}

export default App;

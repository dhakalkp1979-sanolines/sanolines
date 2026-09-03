import React from "react";

function App() {
  const continents = [
    "Asia",
    "Africa",
    "Europe",
    "North America",
    "South America",
    "Australia & Oceania",
    "Antarctica",
  ];

  const services = [
    "Government & Official Services",
    "Immigration & Visa",
    "Jobs & Employment",
    "Money & Banking",
    "Taxes",
    "Healthcare",
    "Education",
    "Transport & Driving",
    "Emergency Services",
    "Travel",
    "Housing",
    "Useful Contacts",
    "Calculators & Tools",
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <div className="logo-icon">S</div>
          <div>
            <div className="logo-name">SANO LINES</div>
            <div className="logo-tagline">
              Global Information & Services
            </div>
          </div>
        </div>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#continents">Countries</a>
          <a href="#services">Services</a>
          <a href="#tools">Tools</a>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="hero" id="home">
          <h1>Information & Services, Made Simple</h1>

          <p>
            Find useful information, official services and practical tools
            from countries around the world.
          </p>

          <div className="search-box">
            <input
              type="text"
              placeholder="Search countries, services, jobs, visas..."
            />
            <button>Search</button>
          </div>
        </section>

        {/* Continents */}
        <section className="section" id="continents">
          <h2>Explore by Continent</h2>

          <div className="continent-grid">
            {continents.map((continent) => (
              <div className="continent-card" key={continent}>
                <h3>{continent}</h3>
                <p>Explore countries and information</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <h2>Information & Services</h2>

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card" key={service}>
                <h3>{service}</h3>
                <p>Information and useful resources</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <strong>SANO LINES</strong>
        <p>Global Information & Services</p>
        <p>© 2026 Sanolines. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

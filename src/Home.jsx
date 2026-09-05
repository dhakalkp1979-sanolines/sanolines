import React, { useState } from "react";
import "./Home.css";
import countries from "./data/countries";
import CountryPage from "./pages/CountryPage";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const continents = [
    {
      name: "Asia",
      image:
        "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Africa",
      image:
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Europe",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "North America",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "South America",
      image:
        "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Australia & Oceania",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Antarctica",
      image:
        "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const services = [
    {
      name: "Government & Official Services",
      icon: "🏛",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find government departments, public services, documents and official information.",
      details:
        "Access information about government services, identification documents, registrations, public administration and official procedures.",
      topics: [
        {
          title: "Government Portals",
          text: "Find official government websites, online services and public administration portals.",
        },
        {
          title: "Identity & Documents",
          text: "Information about identity cards, passports, registrations and official documents.",
        },
        {
          title: "Civil Registration",
          text: "Find information about births, marriages, certificates and civil records.",
        },
        {
          title: "Public Administration",
          text: "Understand common government procedures, applications and administrative services.",
        },
        {
          title: "Official Forms",
          text: "Locate government forms, applications and documents needed for public services.",
        },
        {
          title: "Government Contacts",
          text: "Find ministries, departments, municipalities and other official authorities.",
        },
      ],
    },

    {
      name: "Immigration & Visa",
      icon: "🛂",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=85",
      description:
        "Understand visas, residence, immigration procedures and travel documentation.",
      details:
        "Find practical information about visas, residence permits, immigration procedures, entry requirements and official immigration resources.",
      topics: [
        {
          title: "Visa Information",
          text: "Explore common visa categories, application requirements and official visa resources.",
        },
        {
          title: "Residence Permits",
          text: "Find information about residence permits, renewals and related procedures.",
        },
        {
          title: "Work Permits",
          text: "Understand work authorization and employment-related immigration requirements.",
        },
        {
          title: "Family Immigration",
          text: "Find information about family reunification and dependent residence procedures.",
        },
        {
          title: "Citizenship",
          text: "Learn about nationality and citizenship procedures through official authorities.",
        },
        {
          title: "Embassies & Consulates",
          text: "Locate embassies and consulates for passports, visas and consular services.",
        },
      ],
    },

    {
      name: "Jobs & Employment",
      icon: "💼",
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
      description:
        "Explore employment information, career resources and workplace services.",
      details:
        "Find job-search resources, employment services, workplace information, CV guidance and useful career tools.",
      topics: [
        {
          title: "Find a Job",
          text: "Explore employment services, job portals and practical job-search resources.",
        },
        {
          title: "CV & Applications",
          text: "Learn how to prepare a professional CV and job application.",
        },
        {
          title: "Employment Contracts",
          text: "Understand common employment contract information and workplace documents.",
        },
        {
          title: "Worker Rights",
          text: "Find information about employment rights, working conditions and protections.",
        },
        {
          title: "Training & Skills",
          text: "Discover vocational training, professional courses and skills development.",
        },
        {
          title: "Employment Services",
          text: "Find public employment offices and organisations supporting job seekers.",
        },
      ],
    },

    {
      name: "Money & Banking",
      icon: "🏦",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Understand banking, payments, accounts, transfers and everyday money matters.",
      details:
        "Find information about bank accounts, payments, international transfers, financial services and everyday money management.",
      topics: [
        {
          title: "Bank Accounts",
          text: "Learn about current accounts, savings accounts and basic banking requirements.",
        },
        {
          title: "Payments",
          text: "Understand cards, transfers, direct debits and everyday payment methods.",
        },
        {
          title: "International Transfers",
          text: "Find practical information about sending and receiving money internationally.",
        },
        {
          title: "Currency",
          text: "Compare currencies and understand exchange rates and conversions.",
        },
        {
          title: "Banking Safety",
          text: "Learn basic ways to protect accounts, cards and online banking.",
        },
        {
          title: "Consumer Protection",
          text: "Find information about financial complaints and consumer rights.",
        },
      ],
    },

    {
      name: "Taxes",
      icon: "📑",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find tax information, documents, deadlines and official tax services.",
      details:
        "Understand basic tax responsibilities, tax documents, filing procedures, deadlines and links to official tax authorities.",
      topics: [
        {
          title: "Tax Registration",
          text: "Understand how people and businesses register for tax purposes.",
        },
        {
          title: "Tax Numbers",
          text: "Find information about tax identification numbers and official records.",
        },
        {
          title: "Tax Returns",
          text: "Learn about tax return procedures, forms and filing requirements.",
        },
        {
          title: "Tax Deadlines",
          text: "Keep track of common filing, payment and reporting deadlines.",
        },
        {
          title: "Income Tax",
          text: "Understand general income-tax concepts and official information sources.",
        },
        {
          title: "Tax Authority",
          text: "Find the official tax authority and its online services.",
        },
      ],
    },

    {
      name: "Healthcare",
      icon: "⚕",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find healthcare systems, services, appointments and health information.",
      details:
        "Explore healthcare services, public health systems, emergency care, appointments and useful health resources.",
      topics: [
        {
          title: "Healthcare System",
          text: "Understand how public and private healthcare services are organised.",
        },
        {
          title: "Doctors & Clinics",
          text: "Find information about primary care, clinics and medical appointments.",
        },
        {
          title: "Hospitals",
          text: "Locate hospitals and understand common hospital services.",
        },
        {
          title: "Emergency Healthcare",
          text: "Find emergency medical services and urgent-care information.",
        },
        {
          title: "Pharmacies",
          text: "Find information about pharmacies, prescriptions and medication services.",
        },
        {
          title: "Health Insurance",
          text: "Understand basic public and private health coverage options.",
        },
      ],
    },

    {
      name: "Education",
      icon: "🎓",
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85",
      description:
        "Explore schools, universities, training, courses and education services.",
      details:
        "Find information about education systems, universities, vocational training, language learning and student services.",
      topics: [
        {
          title: "Schools",
          text: "Find information about primary and secondary education.",
        },
        {
          title: "Universities",
          text: "Explore universities, higher education and application information.",
        },
        {
          title: "Vocational Training",
          text: "Find professional training and practical skills-development opportunities.",
        },
        {
          title: "Language Courses",
          text: "Explore language learning and language-support resources.",
        },
        {
          title: "Student Services",
          text: "Find information about student support, accommodation and useful services.",
        },
        {
          title: "Education Authorities",
          text: "Locate official education ministries and public education services.",
        },
      ],
    },

    {
      name: "Transport & Driving",
      icon: "🚗",
      image:
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find driving licences, public transport, roads and vehicle information.",
      details:
        "Explore driving licence information, public transport, vehicle registration, road rules and transport services.",
      topics: [
        {
          title: "Driving Licence",
          text: "Find information about licences, categories, applications and renewals.",
        },
        {
          title: "Vehicle Registration",
          text: "Learn about vehicle registration, ownership and required documents.",
        },
        {
          title: "Road Rules",
          text: "Understand general road rules, signs and driving requirements.",
        },
        {
          title: "Public Transport",
          text: "Explore buses, trains, metros and other public transport services.",
        },
        {
          title: "Vehicle Insurance",
          text: "Find information about compulsory and optional vehicle insurance.",
        },
        {
          title: "Parking",
          text: "Understand parking rules, permits and local parking services.",
        },
      ],
    },

    {
      name: "Emergency Services",
      icon: "🚨",
      image:
        "https://images.unsplash.com/photo-1584483766114-2cea6c2a8e5d?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find emergency numbers and essential emergency information.",
      details:
        "Find emergency contacts, police, fire, ambulance and other urgent services. Always use the official emergency number for your country.",
      topics: [
        {
          title: "Emergency Numbers",
          text: "Find the official emergency telephone numbers for the selected country.",
        },
        {
          title: "Police",
          text: "Find police emergency and non-emergency contact information.",
        },
        {
          title: "Ambulance",
          text: "Find emergency medical assistance and ambulance services.",
        },
        {
          title: "Fire Service",
          text: "Find fire and rescue emergency services.",
        },
        {
          title: "Disaster Information",
          text: "Find official information during natural disasters and major emergencies.",
        },
        {
          title: "Consular Assistance",
          text: "Find embassy and consular assistance for citizens abroad.",
        },
      ],
    },

    {
      name: "Travel",
      icon: "✈",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=85",
      description:
        "Plan travel with practical information about countries and destinations.",
      details:
        "Explore travel information including entry requirements, transport, destinations, useful contacts and practical travel preparation.",
      topics: [
        {
          title: "Entry Requirements",
          text: "Check official entry, visa and travel-document requirements.",
        },
        {
          title: "Passport Information",
          text: "Find information about passports and travel documents.",
        },
        {
          title: "Air Travel",
          text: "Explore practical airport and air-travel information.",
        },
        {
          title: "Public Transport",
          text: "Find transport options for getting around your destination.",
        },
        {
          title: "Travel Safety",
          text: "Review official travel advice and safety information.",
        },
        {
          title: "Tourism Information",
          text: "Discover destinations, attractions and official tourism resources.",
        },
      ],
    },

    {
      name: "Housing",
      icon: "⌂",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find housing information, renting guidance and accommodation resources.",
      details:
        "Learn about renting, accommodation, housing documents, deposits, utilities and practical housing resources.",
      topics: [
        {
          title: "Renting",
          text: "Understand basic rental processes, documents and common requirements.",
        },
        {
          title: "Rental Contracts",
          text: "Learn about tenancy agreements and important rental documents.",
        },
        {
          title: "Deposits",
          text: "Understand common rental deposit arrangements and protections.",
        },
        {
          title: "Utilities",
          text: "Find information about electricity, water, gas and internet services.",
        },
        {
          title: "Housing Support",
          text: "Explore public housing support and accommodation assistance.",
        },
        {
          title: "Homelessness Support",
          text: "Find official organisations and services supporting people without housing.",
        },
      ],
    },

    {
      name: "Useful Contacts",
      icon: "☎",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
      description:
        "Find important organisations, public offices and useful contacts.",
      details:
        "Find practical contact information for public authorities, services, organisations and other useful resources.",
      topics: [
        {
          title: "Government Offices",
          text: "Find important government departments and public offices.",
        },
        {
          title: "Embassies",
          text: "Find embassies and consulates for international and citizen services.",
        },
        {
          title: "Hospitals",
          text: "Find hospitals and healthcare organisations.",
        },
        {
          title: "Employment Offices",
          text: "Find public employment services and job-support organisations.",
        },
        {
          title: "Transport Authorities",
          text: "Find official transport and driving authorities.",
        },
        {
          title: "Community Services",
          text: "Find useful local organisations and support services.",
        },
      ],
    },

    {
      name: "Calculators & Tools",
      icon: "▦",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      description:
        "Use simple tools for everyday calculations and comparisons.",
      details:
        "Explore practical calculators and tools for salary, percentages, taxes, currency, dates, conversions and other everyday needs.",
      topics: [
        {
          title: "Salary Calculator",
          text: "Calculate and compare salary figures and basic income amounts.",
        },
        {
          title: "Percentage Calculator",
          text: "Calculate percentages, increases, decreases and differences.",
        },
        {
          title: "Currency Converter",
          text: "Convert amounts between different currencies.",
        },
        {
          title: "Date Calculator",
          text: "Calculate dates, days between dates and useful time periods.",
        },
        {
          title: "Unit Converter",
          text: "Convert common measurements such as distance, weight and temperature.",
        },
        {
          title: "Everyday Tools",
          text: "Explore additional practical tools designed for everyday needs.",
        },
      ],
    },
  ];

  const continentCountries = selectedContinent
    ? countries.filter(function (item) {
        return item.continent === selectedContinent;
      })
    : [];

  const filteredCountries = countries.filter(function (item) {
    const text = String(
      item.country + " " + item.continent + " " + item.famousFor
    ).toLowerCase();

    return text.includes(search.toLowerCase());
  });

  function getContinentImage(continent) {
    const found = continents.find(function (item) {
      return item.name === continent;
    });

    return found ? found.image : continents[2].image;
  }

  function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    const result = document.getElementById("search-results");

    if (result) {
      result.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function handleServiceClick(service) {
    const found = services.find(function (item) {
      return item.name === service;
    });

    setSelectedService(found || null);

    setTimeout(function () {
      const section = document.getElementById("service-information");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 50);
  }

  function handleTopicClick(topic) {
    const section = document.getElementById("service-information");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  if (selectedCountry) {
    return (
      <CountryPage
        country={selectedCountry.country}
        continent={selectedCountry.continent}
        famousFor={selectedCountry.famousFor}
        topics={selectedCountry.topics}
      />
    );
  }

  return (
    <div className="app">
      <header className="site-header">
        <div className="header-inner">
          <div className="logo-area">
            <div className="logo-mark">S</div>

            <div>
              <div className="logo-text">SANOLINES</div>
              <div className="logo-tagline">
                GLOBAL INFORMATION & SERVICES
              </div>
            </div>
          </div>

          <nav className="main-nav">
            <a href="#home">Home</a>
            <a href="#continents">Countries</a>
            <a href="#services">Services</a>
            <a href="#tools">Tools</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="section-label">SANOLINES GLOBAL</div>

            <h1>
              Information and services
              <br />
              for the world
            </h1>

            <p>
              Explore countries, government services, immigration,
              employment, healthcare, education, travel and everyday tools.
            </p>

            <form className="hero-search" onSubmit={handleSearch}>
              <input
                type="text"
                value={search}
                onChange={function (e) {
                  setSearch(e.target.value);
                }}
                placeholder="Search a country or service..."
                aria-label="Search a country or service"
              />

              <button type="submit">Search</button>
            </form>
          </div>
        </section>

        <section className="section" id="continents">
          <div className="section-heading">
            <div>
              <div className="section-label">EXPLORE THE WORLD</div>

              <h2>Continents</h2>
            </div>

            <p>
              Choose a continent to explore countries and useful information.
            </p>
          </div>

          <div className="continent-grid">
            {continents.map(function (continent) {
              return (
                <button
                  className="continent-card"
                  key={continent.name}
                  onClick={function () {
                    setSelectedContinent(continent.name);

                    setTimeout(function () {
                      const section =
                        document.getElementById("country-results");

                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }, 50);
                  }}
                  style={{
                    backgroundImage:
                      "url(" + continent.image + ")",
                  }}
                >
                  <span className="continent-card-overlay"></span>

                  <span className="continent-card-content">
                    <strong>{continent.name}</strong>
                    <span>Explore countries →</span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {selectedContinent && (
          <section className="section" id="country-results">
            <div className="section-heading">
              <div>
                <div className="section-label">
                  SELECTED CONTINENT
                </div>

                <h2>{selectedContinent}</h2>
              </div>

              <button
                className="service-back-button"
                onClick={function () {
                  setSelectedContinent(null);
                }}
              >
                Clear selection
              </button>
            </div>

            <div className="country-grid">
              {continentCountries.map(function (item) {
                return (
                  <button
                    className="country-card"
                    key={item.country}
                    onClick={function () {
                      setSelectedCountry(item);
                    }}
                    style={{
                      backgroundImage:
                        "url(" +
                        getContinentImage(item.continent) +
                        ")",
                    }}
                  >
                    <span className="country-card-overlay"></span>

                    <span className="country-card-content">
                      <span className="country-continent">
                        {item.continent}
                      </span>

                      <strong>{item.country}</strong>

                      <span className="country-famous">
                        {item.famousFor}
                      </span>

                      <span className="country-action">
                        Explore country →
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        <section className="section" id="search-results">
          <div className="section-heading">
            <div>
              <div className="section-label">COUNTRIES</div>
              <h2>Explore countries</h2>
            </div>

            <p>
              Search for a country or browse the available information.
            </p>
          </div>

          <div className="country-grid">
            {filteredCountries.slice(0, 12).map(function (item) {
              return (
                <button
                  className="country-card"
                  key={item.country}
                  onClick={function () {
                    setSelectedCountry(item);
                  }}
                  style={{
                    backgroundImage:
                      "url(" +
                      getContinentImage(item.continent) +
                      ")",
                  }}
                >
                  <span className="country-card-overlay"></span>

                  <span className="country-card-content">
                    <span className="country-continent">
                      {item.continent}
                    </span>

                    <strong>{item.country}</strong>

                    <span className="country-famous">
                      {item.famousFor}
                    </span>

                    <span className="country-action">
                      Explore country →
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <div className="section-label">GLOBAL SERVICES</div>

              <h2>Information & Services</h2>
            </div>

            <p>
              Choose a service to explore useful information and resources.
            </p>
          </div>

          <div className="service-grid">
            {services.map(function (service, index) {
              return (
                <button
                  className="service-card"
                  key={service.name}
                  onClick={function () {
                    handleServiceClick(service.name);
                  }}
                  style={{
                    backgroundImage:
                      "url(" + service.image + ")",
                  }}
                >
                  <span className="service-card-overlay"></span>

                  <span className="service-card-content">
                    <span className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="service-icon">
                      {service.icon}
                    </span>

                    <strong>{service.name}</strong>

                    <span className="service-description">
                      {service.description}
                    </span>

                    <span className="service-action">
                      Explore service →
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {selectedService && (
          <section
            className="service-information"
            id="service-information"
          >
            <div className="service-information-inner">
              <div className="service-information-image">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                />
              </div>

              <div className="service-information-copy">
                <div className="section-label">
                  SANOLINES SERVICE
                </div>

                <h2>{selectedService.name}</h2>

                <p className="service-lead">
                  {selectedService.description}
                </p>

                <p>{selectedService.details}</p>

                <div className="service-topic-grid">
                  {selectedService.topics.map(function (topic) {
                    return (
                      <button
                        className="service-topic-card"
                        key={topic.title}
                        onClick={function () {
                          handleTopicClick(topic);
                        }}
                      >
                        <span className="service-topic-icon">
                          +
                        </span>

                        <span>
                          <strong>{topic.title}</strong>

                          <span>{topic.text}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="service-information-list">
                  <div>
                    <strong>Country specific</strong>

                    <span>
                      Select a country above to find information
                      relevant to that location.
                    </span>
                  </div>

                  <div>
                    <strong>Official sources</strong>

                    <span>
                      Sanolines is designed to help you locate
                      the correct official services and resources.
                    </span>
                  </div>
                </div>

                <button
                  className="service-back-button"
                  onClick={function () {
                    setSelectedService(null);

                    setTimeout(function () {
                      const section =
                        document.getElementById("services");

                      if (section) {
                        section.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }, 50);
                  }}
                >
                  ← Back to Services
                </button>
              </div>
            </div>
          </section>
        )}

        <section className="tools-section" id="tools">
          <div className="tools-inner">
            <div>
              <div className="section-label">PRACTICAL TOOLS</div>

              <h2>Calculators & Tools</h2>

              <p>
                Useful everyday calculators and conversion tools
                will be available here.
              </p>
            </div>

            <button
              className="tools-button"
              onClick={function () {
                handleServiceClick("Calculators & Tools");
              }}
            >
              Open Tools →
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <strong>SANOLINES</strong>

            <p>
              Global information and services for everyday life.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#continents">Countries</a>
            <a href="#services">Services</a>
            <a href="#tools">Tools</a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Sanolines. Information platform.
        </div>
      </footer>
    </div>
  );
}

export default Home;

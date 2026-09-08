import React, { useMemo, useState } from "react";
import "./Home.css";
import countries from "./data/countries";
import CountryPage from "./pages/CountryPage";
import { calculatePercentage } from "./data/calculatorsLogic";

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
  "Legal Aid & Free Lawyers",
  "Migrant & Refugee Support",
  "Associations & Community Help",
  "Social Security & Benefits",
  "Family & Children Support",
  "Consumer Protection",
  "Disability & Accessibility Support",
  "Food, Shelter & Basic Assistance",
];

const continents = [
  {
    name: "Asia",
    code: "ASIA",
    image:
      "https://images.unsplash.com/photo-1535139262971-c51845709a48?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Africa",
    code: "AFRICA",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Europe",
    code: "EUROPE",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "North America",
    code: "NORTH AMERICA",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "South America",
    code: "SOUTH AMERICA",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Oceania",
    code: "OCEANIA",
    image:
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Antarctica",
    code: "ANTARCTICA",
    image:
      "https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=85",
  },
];

function getCountryName(item) {
  return item?.country || item?.name || "";
}

function getCountryContinent(item) {
  return item?.continent || item?.region || "";
}

function getCountryDescription(item) {
  return (
    item?.famousFor ||
    item?.description ||
    item?.famous ||
    "Useful information and services for this country."
  );
}

/* =========================================
   COUNTRY FLAG
========================================= */

function getCountryFlag(item) {
  const code = item?.flagCode || item?.code || "";

  if (code) {
    return `https://flagcdn.com/w40/${String(code).toLowerCase()}.png`;
  }

  if (item?.flag && typeof item.flag === "string") {
    return item.flag;
  }

  return "";
}

function getCountryFlagRetina(item) {
  const code = item?.flagCode || item?.code || "";

  if (code) {
    return `https://flagcdn.com/w80/${String(code).toLowerCase()}.png`;
  }

  return "";
}

/* =========================================
   COUNTRY CARD
========================================= */

function CountryCard({ item, index, onClick }) {
  const countryName = getCountryName(item);
  const continentName = getCountryContinent(item);
  const description = getCountryDescription(item);

  const flag = getCountryFlag(item);
  const retinaFlag = getCountryFlagRetina(item);

  return (
    <article
      className="country-card"
      key={`${countryName}-${index}`}
      onClick={() => onClick(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick(item);
        }
      }}
    >
      <div className="country-card-top">
        <div className="country-continent-label">
          {continentName}
        </div>

        {flag && (
          <img
            className="country-flag"
            src={flag}
            srcSet={retinaFlag ? `${retinaFlag} 2x` : ""}
            alt={`${countryName} flag`}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div className="country-card-content">
        <h3>{countryName}</h3>

        <p className="country-card-description">
          {description}
        </p>
      </div>

      <div className="country-card-footer">
        <span>
          Explore {countryName}
        </span>

        <span aria-hidden="true">
          →
        </span>
      </div>
    </article>
  );
}

/* =========================================
   HOME
========================================= */

function Home() {
  const [selectedContinent, setSelectedContinent] = useState("Asia");
  const [searchTerm, setSearchTerm] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  /* =========================================
     DISCLAIMER
  ========================================= */

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  /* =========================================
     PERCENTAGE CALCULATOR
  ========================================= */

  const [percentageAmount, setPercentageAmount] = useState("");
  const [percentageValue, setPercentageValue] = useState("");
  const [percentageResult, setPercentageResult] = useState(null);

  /* =========================================
     SALARY CALCULATOR
  ========================================= */

  const [salaryMonthly, setSalaryMonthly] = useState("");
  const [salaryHours, setSalaryHours] = useState("40");
  const [salaryWeeks, setSalaryWeeks] = useState("52");
  const [salaryResult, setSalaryResult] = useState(null);

  /* =========================================
     CURRENCY CONVERTER
  ========================================= */

  const [currencyAmount, setCurrencyAmount] = useState("");
  const [currencyRate, setCurrencyRate] = useState("");
  const [currencyResult, setCurrencyResult] = useState(null);

  /* =========================================
     AGE CALCULATOR
  ========================================= */

  const [birthDate, setBirthDate] = useState("");
  const [ageResult, setAgeResult] = useState(null);

  /* =========================================
     DATE CALCULATOR
  ========================================= */

  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [dateResult, setDateResult] = useState(null);

  /* =========================================
     UNIT CONVERTER
  ========================================= */

  const [unitValue, setUnitValue] = useState("");
  const [unitType, setUnitType] = useState("km-miles");
  const [unitResult, setUnitResult] = useState(null);

  /* =========================================
     COUNTRY FILTER
  ========================================= */

  const filteredCountries = useMemo(() => {
    const continentCountries = countries.filter((item) => {
      return (
        getCountryContinent(item).toLowerCase() ===
        selectedContinent.toLowerCase()
      );
    });

    if (!countryFilter.trim()) {
      return continentCountries;
    }

    return continentCountries.filter((item) =>
      getCountryName(item)
        .toLowerCase()
        .includes(countryFilter.toLowerCase())
    );
  }, [selectedContinent, countryFilter]);

  /* =========================================
     GLOBAL SEARCH
  ========================================= */

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }

    const term = searchTerm.toLowerCase();

    return countries.filter((item) => {
      const countryName =
        getCountryName(item).toLowerCase();

      const continent =
        getCountryContinent(item).toLowerCase();

      const description =
        getCountryDescription(item).toLowerCase();

      return (
        countryName.includes(term) ||
        continent.includes(term) ||
        description.includes(term)
      );
    });
  }, [searchTerm]);

  /* =========================================
     NAVIGATION
  ========================================= */

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
    setCountryFilter("");

    setTimeout(() => {
      document.getElementById("countries")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 50);
  };

  const handleCountryClick = (country) => {
    setSelectedCountry(country);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleBackHome = () => {
    setSelectedCountry(null);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  const handleNavigation = (section) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleExploreTools = () => {
    handleNavigation("tools");
  };

  const handleOpenDisclaimer = () => {
    setShowDisclaimer(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCloseDisclaimer = () => {
    setShowDisclaimer(false);

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 50);
  };

  /* =========================================
     SERVICE NAVIGATION
  ========================================= */

  const handleServiceClick = () => {
    handleNavigation("countries");
  };

  /* =========================================
     DISCLAIMER PAGE
  ========================================= */

  if (showDisclaimer) {
    return (
      <div className="home-page">

        <header className="site-header">
          <div className="site-header-inner">

            <div className="site-brand">
              Sanolines Global
            </div>

            <nav className="site-navigation">

              <button
                type="button"
                onClick={handleCloseDisclaimer}
              >
                Home
              </button>

            </nav>

          </div>
        </header>

        <main className="disclaimer-page">

          <div className="disclaimer-container">

            <div className="disclaimer-heading">

              <span className="section-label">
                SANOLINES GLOBAL
              </span>

              <h1>
                Disclaimer
              </h1>

              <p className="disclaimer-updated">
                Last Updated: September 2026
              </p>

            </div>

            <div className="disclaimer-content">

              <h2>
                Sanolines Global — Disclaimer
              </h2>

              <p>
                Sanolines Global is an independent information and
                directory website designed to help people find useful
                information about countries, public services,
                organizations, resources, and other practical topics.
              </p>

              <p>
                Sanolines Global is intended to make information easier
                to discover and understand. It may provide general
                information, explanations, directories, links, contact
                details, calculators, guides, and references to official
                or third-party resources.
              </p>

              <p>
                <strong>
                  Sanolines Global is not a government organization,
                  government agency, embassy, consulate, immigration
                  authority, employment agency, bank, insurance company,
                  hospital, healthcare provider, law firm, housing
                  provider, educational institution, emergency service,
                  or other professional or official service provider.
                </strong>
              </p>

              <h2>
                1. Information-Only Purpose
              </h2>

              <p>
                The information provided on Sanolines Global is for
                general informational and educational purposes.
              </p>

              <p>
                Sanolines Global does not provide official services on
                behalf of governments, public authorities, companies,
                organizations, or professional service providers.
              </p>

              <p>
                Where appropriate, Sanolines Global may direct visitors
                to an official government website, public authority,
                organization, company, or other external resource.
                Visitors should use the relevant official organization
                or qualified professional for actual services,
                applications, decisions, advice, or assistance.
              </p>

              <h2>
                2. Government and Official Services
              </h2>

              <p>
                Information about government departments, public
                authorities, official procedures, documents,
                applications, permits, registrations, benefits, taxes,
                and public services is provided only as general
                guidance.
              </p>

              <p>
                Sanolines Global does not represent any government or
                public authority and does not process government
                applications or make government decisions.
              </p>

              <p>
                Government rules, procedures, fees, eligibility
                requirements, deadlines, forms, websites, and contact
                information may change. Visitors should always verify
                important information directly with the relevant
                official government authority before taking action.
              </p>

              <h2>
                3. Immigration and Visa Information
              </h2>

              <p>
                Immigration, visa, residence, citizenship, work-permit,
                travel-document, and related information is provided for
                general informational purposes only.
              </p>

              <p>
                Sanolines Global does not provide immigration
                representation, legal advice, visa processing,
                immigration applications, or guarantees of approval.
              </p>

              <p>
                Immigration rules can vary according to nationality,
                country of residence, visa type, individual
                circumstances, and changes in legislation or government
                policy.
              </p>

              <p>
                Visitors should verify immigration requirements directly
                with the relevant embassy, consulate, immigration
                authority, or official government website. Where
                professional legal assistance is required, visitors
                should consult an appropriately qualified immigration or
                legal professional.
              </p>

              <h2>
                4. Employment and Jobs
              </h2>

              <p>
                Sanolines Global may provide general employment
                information, job-search resources, links, directories,
                career information, or references to employment
                organizations.
              </p>

              <p>
                Sanolines Global is not an employment agency and does not
                guarantee employment, interviews, salaries, working
                conditions, job availability, or recruitment outcomes.
              </p>

              <p>
                Job vacancies, salary information, employer information,
                requirements, and application procedures may change or
                become unavailable.
              </p>

              <p>
                Visitors should independently verify job information
                with the relevant employer, recruitment organization, or
                official employment service before applying or accepting
                employment.
              </p>

              <h2>
                5. Healthcare and Medical Information
              </h2>

              <p>
                Health-related information appearing on Sanolines Global
                is intended only for general informational purposes.
              </p>

              <p>
                Sanolines Global is not a healthcare provider, doctor,
                hospital, clinic, pharmacist, psychologist, or medical
                professional.
              </p>

              <p>
                Information on symptoms, healthcare systems, medical
                services, medicines, hospitals, clinics, or health
                resources should not be treated as medical diagnosis,
                treatment, or professional medical advice.
              </p>

              <p>
                Medical circumstances are individual and may require
                professional assessment.
              </p>

              <p>
                For medical concerns, visitors should contact an
                appropriately qualified healthcare professional or the
                relevant official healthcare service.
              </p>

              <h2>
                6. Legal Information
              </h2>

              <p>
                Any legal information provided by Sanolines Global is
                general information only.
              </p>

              <p>
                Sanolines Global is not a law firm and does not provide
                legal representation or legal advice.
              </p>

              <p>
                Laws and legal procedures can differ between countries,
                regions, and individual circumstances and may change
                over time.
              </p>

              <p>
                Visitors should consult an appropriately qualified legal
                professional or the relevant official authority when
                legal advice is required.
              </p>

              <h2>
                7. Taxes, Banking and Financial Information
              </h2>

              <p>
                Information concerning taxes, banking, financial
                services, benefits, pensions, payments, currencies,
                loans, insurance, or other financial matters is provided
                for general informational purposes.
              </p>

              <p>
                Sanolines Global is not a bank, financial institution,
                tax adviser, accountant, investment adviser, insurance
                provider, or financial professional.
              </p>

              <p>
                Financial rules, tax rates, fees, eligibility
                requirements, exchange rates, and financial products may
                change.
              </p>

              <p>
                Visitors should verify financial information with the
                relevant official authority, bank, financial institution,
                accountant, tax professional, or other appropriately
                qualified professional before making financial
                decisions.
              </p>

              <h2>
                8. Housing and Accommodation
              </h2>

              <p>
                Sanolines Global may provide general housing information,
                directories, links, or information about housing
                resources.
              </p>

              <p>
                Sanolines Global is not a landlord, housing authority,
                real-estate agency, accommodation provider, or housing
                assistance provider.
              </p>

              <p>
                Sanolines Global does not guarantee the availability,
                condition, price, legality, safety, or suitability of
                any accommodation or housing opportunity listed or
                referenced on the website.
              </p>

              <p>
                Visitors should independently verify accommodation
                information and carefully evaluate any landlord,
                property, organization, listing, contract, payment
                request, or agreement before proceeding.
              </p>

              <h2>
                9. Education and Training
              </h2>

              <p>
                Information about schools, universities, courses,
                training programs, scholarships, qualifications, and
                educational resources is provided for general
                information.
              </p>

              <p>
                Sanolines Global is not an educational institution and
                does not guarantee admission, enrollment, course
                availability, accreditation, certification, or
                employment outcomes.
              </p>

              <p>
                Visitors should verify current information directly with
                the relevant educational institution, training provider,
                or official authority.
              </p>

              <h2>
                10. Emergency Information
              </h2>

              <p>
                Sanolines Global may provide general information about
                emergency services and emergency contact resources.
              </p>

              <p>
                Emergency numbers and procedures can differ between
                countries and locations.
              </p>

              <p>
                Sanolines Global does not operate emergency services and
                cannot dispatch police, firefighters, ambulances,
                medical teams, rescue teams, or other emergency
                personnel.
              </p>

              <p>
                In an emergency, visitors should contact the appropriate
                official emergency service directly.
              </p>

              <h2>
                11. Travel Information
              </h2>

              <p>
                Travel-related information may include general
                information about countries, transportation, airports,
                borders, destinations, travel documents, tourism
                resources, and travel services.
              </p>

              <p>
                Travel requirements, border rules, entry requirements,
                transportation schedules, prices, and local conditions
                can change without notice.
              </p>

              <p>
                Visitors should confirm current requirements with
                official government authorities, transport providers,
                airlines, embassies, consulates, or other relevant
                organizations before travelling.
              </p>

              <h2>
                12. Accuracy and Currency of Information
              </h2>

              <p>
                Sanolines Global makes reasonable efforts to provide
                useful and accurate information. However, information
                may become outdated, incomplete, incorrect, unavailable,
                or inaccurate due to changes made by governments,
                organizations, companies, external websites, laws,
                regulations, prices, procedures, or other circumstances.
              </p>

              <p>
                Sanolines Global does not guarantee that all information
                is complete, accurate, current, reliable, suitable, or
                available at all times.
              </p>

              <p>
                Important information should always be verified with the
                original or official source.
              </p>

              <h2>
                13. External Websites and Links
              </h2>

              <p>
                Sanolines Global may provide links to external websites
                belonging to governments, public authorities,
                organizations, companies, charities, educational
                institutions, service providers, or other third parties.
              </p>

              <p>
                External websites are not controlled or operated by
                Sanolines Global.
              </p>

              <p>
                A link to an external website does not necessarily mean
                that Sanolines Global endorses, guarantees, recommends,
                or accepts responsibility for that website,
                organization, service, product, information, or content.
              </p>

              <p>
                Visitors should review the terms, privacy policies,
                disclaimers, and other information provided by external
                websites before using them.
              </p>

              <h2>
                14. Third-Party Information
              </h2>

              <p>
                Some information appearing on Sanolines Global may
                originate from third-party sources.
              </p>

              <p>
                Third-party information may change without notice and
                may contain errors or omissions.
              </p>

              <p>
                Sanolines Global does not guarantee the accuracy,
                quality, reliability, legality, availability, safety, or
                suitability of third-party information or services.
              </p>

              <p>
                Visitors are responsible for independently verifying
                information before relying upon it.
              </p>

              <h2>
                15. No Professional Relationship
              </h2>

              <p>
                Using Sanolines Global does not create a doctor-patient,
                lawyer-client, accountant-client,
                financial-adviser-client,
                immigration-consultant-client,
                employment-agency-client, landlord-tenant, or other
                professional or contractual relationship between the
                visitor and Sanolines Global.
              </p>

              <p>
                Sanolines Global's role is to provide information and
                help visitors locate relevant resources.
              </p>

              <h2>
                16. No Guarantee of Results
              </h2>

              <p>
                Sanolines Global does not guarantee any particular result
                from using information, links, directories, guides,
                calculators, or resources available through the website.
              </p>

              <ul>
                <li>Government application approval</li>
                <li>Visa or immigration approval</li>
                <li>Employment or recruitment</li>
                <li>Housing availability</li>
                <li>Financial approval</li>
                <li>Healthcare outcomes</li>
                <li>Educational admission</li>
                <li>Benefit eligibility</li>
                <li>Legal outcomes</li>
                <li>Travel entry or permission</li>
                <li>Appointment availability</li>
                <li>Service availability</li>
                <li>Prices or fees</li>
                <li>Response times from external organizations</li>
              </ul>

              <p>
                Decisions are made by the relevant government
                authority, organization, company, professional, or
                service provider.
              </p>

              <h2>
                17. Calculators and Tools
              </h2>

              <p>
                Sanolines Global may provide calculators, converters,
                comparison tools, estimates, or other interactive
                features.
              </p>

              <p>
                These tools are provided for general informational
                purposes and may use assumptions, estimates, simplified
                calculations, or publicly available information.
              </p>

              <p>
                Results should not be considered official,
                professional, financial, legal, medical, tax,
                employment, or government determinations.
              </p>

              <p>
                Where an official calculation or decision is required,
                visitors should use the relevant official source or
                consult an appropriately qualified professional.
              </p>

              <h2>
                18. Personal Responsibility
              </h2>

              <p>
                Visitors are responsible for evaluating information
                before relying upon it and for verifying important
                information with the appropriate official or
                professional source.
              </p>

              <p>
                Visitors should not make important legal, medical,
                financial, immigration, employment, housing, travel, or
                other decisions solely on the basis of information
                provided by Sanolines Global.
              </p>

              <h2>
                19. Limitation of Responsibility
              </h2>

              <p>
                To the extent permitted by applicable law, Sanolines
                Global and its owners, operators, contributors, and
                associated parties shall not be responsible for losses,
                damages, costs, claims, or consequences arising from
                reliance upon information provided through the website,
                use of external websites, third-party information,
                unavailable services, inaccurate information, outdated
                information, or decisions made based on website
                content.
              </p>

              <p>
                Nothing in this disclaimer is intended to exclude or
                limit any responsibility that cannot legally be excluded
                or limited under applicable law.
              </p>

              <h2>
                20. Changes to Information
              </h2>

              <p>
                Sanolines Global may update, modify, remove, or add
                information at any time.
              </p>

              <p>
                The website may change its structure, categories, links,
                tools, directories, or content without prior notice.
              </p>

              <p>
                Visitors should check the latest available information
                before relying upon it.
              </p>

              <h2>
                21. Independence
              </h2>

              <p>
                Sanolines Global is an independent information and
                directory platform unless a particular page clearly
                states otherwise.
              </p>

              <p>
                The appearance of an organization, company, government
                authority, website, service, or resource on Sanolines
                Global does not by itself establish an affiliation,
                partnership, endorsement, sponsorship, or official
                relationship.
              </p>

              <h2>
                22. Official Sources
              </h2>

              <p>
                Where Sanolines Global provides links or references to
                official organizations, visitors should use those
                sources for authoritative information, applications,
                decisions, appointments, payments, and services.
              </p>

              <p>
                The official organization responsible for a particular
                service remains the authoritative source for that
                service.
              </p>

              <h2>
                23. Contact and Corrections
              </h2>

              <p>
                If you believe that information on Sanolines Global is
                incorrect, outdated, misleading, or no longer available,
                you may contact Sanolines Global with details of the
                relevant page or information.
              </p>

              <p>
                Sanolines Global may review reported information and make
                corrections or updates where appropriate, but does not
                guarantee that every report will result in a change.
              </p>

              <h2>
                24. Acceptance of This Disclaimer
              </h2>

              <p>
                By using Sanolines Global, visitors acknowledge that the
                website is primarily an information and directory
                resource and that they are responsible for verifying
                important information with the appropriate official
                authority, organization, company, or qualified
                professional.
              </p>

              <p>
                If a visitor does not agree with this disclaimer, they
                should not rely upon Sanolines Global as a substitute for
                official or professional services.
              </p>

              <div className="disclaimer-final-notice">

                <h2>
                  Final Notice
                </h2>

                <p>
                  <strong>
                    Sanolines Global provides information to help people
                    find the right resources. It does not replace
                    government authorities, official organizations,
                    qualified professionals, or the actual service
                    providers responsible for making decisions or
                    delivering services.
                  </strong>
                </p>

                <p>
                  <strong>
                    Always verify important information with the
                    relevant official or professional source before
                    taking action.
                  </strong>
                </p>

              </div>

            </div>

            <button
              type="button"
              className="disclaimer-back-button"
              onClick={handleCloseDisclaimer}
            >
              ← Back to Sanolines Global
            </button>

          </div>

        </main>

      </div>
    );
  }

  /* =========================================
     COUNTRY PAGE
  ========================================= */

  if (selectedCountry) {
    return (
      <CountryPage
        country={getCountryName(selectedCountry)}
        continent={getCountryContinent(selectedCountry)}
        famousFor={getCountryDescription(selectedCountry)}
        topics={services}
        onBack={handleBackHome}
      />
    );
  }

  /* =========================================
     MAIN HOME PAGE
  ========================================= */

  return (
    <div className="home-page">

      {/* HEADER */}

      <header className="site-header">

        <div className="site-header-inner">

          <div className="site-brand">
            Sanolines Global
          </div>

          <nav className="site-navigation">

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Home
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("countries")
              }
            >
              Countries
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("services")
              }
            >
              Services
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("tools")
              }
            >
              Tools
            </button>

          </nav>

        </div>

      </header>

      {/* HERO */}

      <section className="home-hero">

        <div className="home-hero-inner">

          <span className="hero-label">
            SANOLINES GLOBAL
          </span>

          <h1>
            Information and services
            <br />
            for the world
          </h1>

          <p>
            Find useful information about countries,
            government services, immigration, jobs,
            healthcare, education, travel, housing
            and everyday life.
          </p>

          <div className="home-search">

            <input
              type="text"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search for a country or service..."
              aria-label="Search for a country or service"
            />

            {searchTerm && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setSearchTerm("")}
              >
                ×
              </button>
            )}

          </div>

        </div>

      </section>

      {/* SEARCH RESULTS */}

      {searchTerm.trim() && (
        <section className="home-section search-results-section">

          <div className="section-heading">

            <span className="section-label">
              Search
            </span>

            <h2>
              Search Results
            </h2>

          </div>

          {searchResults.length > 0 ? (

            <div className="country-grid">

              {searchResults.map((item, index) => (
                <CountryCard
                  key={`${getCountryName(item)}-${index}`}
                  item={item}
                  index={index}
                  onClick={handleCountryClick}
                />
              ))}

            </div>

          ) : (

            <div className="empty-search">
              No country found for "{searchTerm}".
            </div>

          )}

        </section>
      )}

      {/* CONTINENTS */}

      {!searchTerm.trim() && (
        <section className="home-section continents-section">

          <div className="section-heading">

            <span className="section-label">
              Explore The World
            </span>

            <h2>
              Continents
            </h2>

            <p>
              Explore countries and useful information
              from around the world.
            </p>

          </div>

          <div className="continent-grid">

            {continents.map((continent) => (

              <button
                type="button"
                className={`continent-card ${
                  selectedContinent === continent.name
                    ? "continent-card-active"
                    : ""
                }`}
                key={continent.name}
                onClick={() =>
                  handleContinentSelect(continent.name)
                }
                style={{
                  backgroundImage:
                    `url("${continent.image}")`,
                }}
              >

                <div className="continent-overlay"></div>

                <div className="continent-content">

                  <span className="continent-label">
                    {continent.code}
                  </span>

                  <h3>
                    {continent.name}
                  </h3>

                  <p>
                    Explore countries →
                  </p>

                </div>

              </button>

            ))}

          </div>

        </section>
      )}

      {/* COUNTRIES */}

      {!searchTerm.trim() && (
        <section
          className="home-section selected-continent-section"
          id="countries"
        >

          <div className="country-section-header">

            <div>

              <span className="section-label">
                Countries
              </span>

              <h2 className="country-section-title">
                {selectedContinent}
              </h2>

            </div>

            <div className="country-filter">

              <input
                type="text"
                value={countryFilter}
                onChange={(event) =>
                  setCountryFilter(event.target.value)
                }
                placeholder={`Search ${selectedContinent}...`}
              />

            </div>

          </div>

          {filteredCountries.length > 0 ? (

            <div className="country-grid">

              {filteredCountries.map((item, index) => (

                <CountryCard
                  key={`${getCountryName(item)}-${index}`}
                  item={item}
                  index={index}
                  onClick={handleCountryClick}
                />

              ))}

            </div>

          ) : (

            <div className="empty-search">
              No countries found.
            </div>

          )}

        </section>
      )}

      {/* SERVICES */}

      {!searchTerm.trim() && (
        <section
          className="services-section"
          id="services"
        >

          <div className="services-inner">

            <div className="services-heading">

              <span className="section-label">
                Information & Services
              </span>

              <h2>
                What Can You Find?
              </h2>

              <p>
                Important everyday information organized
                in one simple global platform.
              </p>

            </div>

            <div className="services-grid">

              {services.map((service, index) => (

                <button
                  type="button"
                  className="service-card"
                  key={service}
                  onClick={handleServiceClick}
                >

                  <div className="service-card-content">

                    <div className="service-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3>
                      {service}
                    </h3>

                  </div>

                  <span
                    className="service-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </button>

              ))}

            </div>

          </div>

        </section>
      )}

      {/* TOOLS */}

      {!searchTerm.trim() && (
        <section
          className="home-section tools-section"
          id="tools"
        >

          <div className="tools-hero">

            <div className="tools-hero-content">

              <span className="section-label">
                TOOLS
              </span>

              <h2>
                Simple tools.
                <br />
                Useful every day.
              </h2>

              <p>
                Practical calculators and converters designed
                to make everyday decisions faster and easier.
              </p>

              <button
                type="button"
                className="tools-hero-button"
                onClick={handleExploreTools}
              >
                Explore all tools
                <span>↓</span>
              </button>

            </div>

            <div className="tools-hero-image">

              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1400&q=85"
                alt="Professional financial and everyday planning workspace"
              />

            </div>

          </div>

          <div className="tools-grid">

            {/* TOOL 01 */}

            <div className="tool-card">

              <div className="tool-card-number">
                01
              </div>

              <div className="tool-icon">
                %
              </div>

              <h3>
                Percentage Calculator
              </h3>

              <p>
                Quickly calculate percentages for prices,
                discounts, increases and everyday calculations.
              </p>

              <div className="percentage-calculator">

                <div className="percentage-calculator-header">
                  <span>
                    Calculate percentage
                  </span>
                </div>

                <div className="percentage-calculator-body">

                  <div className="percentage-input-group">

                    <label>
                      Amount
                    </label>

                    <div className="percentage-input-wrapper">

                      <input
                        type="number"
                        value={percentageAmount}
                        onChange={(e) =>
                          setPercentageAmount(e.target.value)
                        }
                        placeholder="1000"
                      />

                    </div>

                  </div>

                  <div className="percentage-input-group">

                    <label>
                      Percentage
                    </label>

                    <div className="percentage-input-wrapper">

                      <input
                        type="number"
                        value={percentageValue}
                        onChange={(e) =>
                          setPercentageValue(e.target.value)
                        }
                        placeholder="20"
                      />

                      <span className="percentage-symbol">
                        %
                      </span>

                    </div>

                  </div>

                  <div className="percentage-actions">

                    <button
                      type="button"
                      className="percentage-calculate-button"
                      onClick={() =>
                        setPercentageResult(
                          calculatePercentage(
                            percentageAmount,
                            percentageValue
                          )
                        )
                      }
                    >
                      Calculate
                    </button>

                    <button
                      type="button"
                      className="percentage-reset-button"
                      onClick={() => {
                        setPercentageAmount("");
                        setPercentageValue("");
                        setPercentageResult(null);
                      }}
                    >
                      Reset
                    </button>

                  </div>

                  {percentageResult !== null && (

                    <div className="percentage-result">

                      <span>
                        Result
                      </span>

                      <strong>
                        {percentageResult.toFixed(2)}
                      </strong>

                    </div>

                  )}

                </div>

              </div>

            </div>

            {/* TOOL 02 */}

            <div className="tool-card">

              <div className="tool-card-number">
                02
              </div>

              <div className="tool-icon">
                €
              </div>

              <h3>
                Salary Calculator
              </h3>

              <p>
                Estimate annual, weekly and hourly income
                from a monthly salary.
              </p>

              <div className="tool-form">

                <label>
                  Monthly salary
                </label>

                <input
                  type="number"
                  value={salaryMonthly}
                  onChange={(e) =>
                    setSalaryMonthly(e.target.value)
                  }
                  placeholder="1500"
                />

                <label>
                  Hours per week
                </label>

                <input
                  type="number"
                  value={salaryHours}
                  onChange={(e) =>
                    setSalaryHours(e.target.value)
                  }
                  placeholder="40"
                />

                <label>
                  Weeks per year
                </label>

                <input
                  type="number"
                  value={salaryWeeks}
                  onChange={(e) =>
                    setSalaryWeeks(e.target.value)
                  }
                  placeholder="52"
                />

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    const monthly =
                      Number(salaryMonthly);

                    const hours =
                      Number(salaryHours);

                    const weeks =
                      Number(salaryWeeks);

                    if (
                      monthly > 0 &&
                      hours > 0 &&
                      weeks > 0
                    ) {

                      const annual =
                        monthly * 12;

                      const weekly =
                        annual / weeks;

                      const hourly =
                        weekly / hours;

                      setSalaryResult({
                        annual,
                        weekly,
                        hourly,
                      });

                    }

                  }}
                >
                  Calculate salary
                </button>

                {salaryResult && (

                  <div className="tool-result-list">

                    <div>
                      <span>
                        Annual
                      </span>

                      <strong>
                        €{salaryResult.annual.toFixed(2)}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Weekly
                      </span>

                      <strong>
                        €{salaryResult.weekly.toFixed(2)}
                      </strong>
                    </div>

                    <div>
                      <span>
                        Hourly
                      </span>

                      <strong>
                        €{salaryResult.hourly.toFixed(2)}
                      </strong>
                    </div>

                  </div>

                )}

              </div>

            </div>

            {/* TOOL 03 */}

            <div className="tool-card">

              <div className="tool-card-number">
                03
              </div>

              <div className="tool-icon">
                ↔
              </div>

              <h3>
                Currency Converter
              </h3>

              <p>
                Convert money using an exchange rate.
                Live rates can be added later.
              </p>

              <div className="tool-form">

                <label>
                  Amount
                </label>

                <input
                  type="number"
                  value={currencyAmount}
                  onChange={(e) =>
                    setCurrencyAmount(e.target.value)
                  }
                  placeholder="100"
                />

                <label>
                  Exchange rate
                </label>

                <input
                  type="number"
                  value={currencyRate}
                  onChange={(e) =>
                    setCurrencyRate(e.target.value)
                  }
                  placeholder="1.08"
                  step="0.0001"
                />

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    const amount =
                      Number(currencyAmount);

                    const rate =
                      Number(currencyRate);

                    if (
                      amount > 0 &&
                      rate > 0
                    ) {

                      setCurrencyResult(
                        amount * rate
                      );

                    }

                  }}
                >
                  Convert
                </button>

                {currencyResult !== null && (

                  <div className="single-tool-result">

                    <span>
                      Converted amount
                    </span>

                    <strong>
                      {currencyResult.toFixed(2)}
                    </strong>

                  </div>

                )}

              </div>

            </div>

            {/* TOOL 04 */}

            <div className="tool-card">

              <div className="tool-card-number">
                04
              </div>

              <div className="tool-icon">
                ◷
              </div>

              <h3>
                Age Calculator
              </h3>

              <p>
                Calculate your exact age from your
                date of birth.
              </p>

              <div className="tool-form">

                <label>
                  Date of birth
                </label>

                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) =>
                    setBirthDate(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    if (!birthDate) return;

                    const birth =
                      new Date(birthDate);

                    const today =
                      new Date();

                    let years =
                      today.getFullYear() -
                      birth.getFullYear();

                    let months =
                      today.getMonth() -
                      birth.getMonth();

                    if (
                      today.getDate() <
                      birth.getDate()
                    ) {
                      months--;
                    }

                    if (months < 0) {
                      years--;
                      months += 12;
                    }

                    setAgeResult({
                      years,
                      months,
                    });

                  }}
                >
                  Calculate age
                </button>

                {ageResult && (

                  <div className="age-result">

                    <strong>
                      {ageResult.years}
                    </strong>

                    <span>
                      years
                    </span>

                    <strong>
                      {ageResult.months}
                    </strong>

                    <span>
                      months
                    </span>

                  </div>

                )}

              </div>

            </div>

            {/* TOOL 05 */}

            <div className="tool-card">

              <div className="tool-card-number">
                05
              </div>

              <div className="tool-icon">
                ▣
              </div>

              <h3>
                Date Calculator
              </h3>

              <p>
                Find the number of days between
                two dates.
              </p>

              <div className="tool-form">

                <label>
                  Start date
                </label>

                <input
                  type="date"
                  value={dateStart}
                  onChange={(e) =>
                    setDateStart(e.target.value)
                  }
                />

                <label>
                  End date
                </label>

                <input
                  type="date"
                  value={dateEnd}
                  onChange={(e) =>
                    setDateEnd(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    if (
                      !dateStart ||
                      !dateEnd
                    ) {
                      return;
                    }

                    const start =
                      new Date(dateStart);

                    const end =
                      new Date(dateEnd);

                    const difference =
                      Math.abs(
                        end.getTime() -
                        start.getTime()
                      );

                    const days =
                      Math.ceil(
                        difference /
                        (1000 * 60 * 60 * 24)
                      );

                    setDateResult(days);

                  }}
                >
                  Calculate days
                </button>

                {dateResult !== null && (

                  <div className="single-tool-result">

                    <span>
                      Difference
                    </span>

                    <strong>
                      {dateResult} days
                    </strong>

                  </div>

                )}

              </div>

            </div>

            {/* TOOL 06 */}

            <div className="tool-card">

              <div className="tool-card-number">
                06
              </div>

              <div className="tool-icon">
                ↗
              </div>

              <h3>
                Unit Converter
              </h3>

              <p>
                Convert distance, weight and
                temperature quickly.
              </p>

              <div className="tool-form">

                <label>
                  Value
                </label>

                <input
                  type="number"
                  value={unitValue}
                  onChange={(e) =>
                    setUnitValue(e.target.value)
                  }
                  placeholder="10"
                />

                <label>
                  Conversion
                </label>

                <select
                  value={unitType}
                  onChange={(e) =>
                    setUnitType(e.target.value)
                  }
                >

                  <option value="km-miles">
                    Kilometres → Miles
                  </option>

                  <option value="miles-km">
                    Miles → Kilometres
                  </option>

                  <option value="kg-pounds">
                    Kilograms → Pounds
                  </option>

                  <option value="pounds-kg">
                    Pounds → Kilograms
                  </option>

                  <option value="celsius-fahrenheit">
                    Celsius → Fahrenheit
                  </option>

                  <option value="fahrenheit-celsius">
                    Fahrenheit → Celsius
                  </option>

                </select>

                <button
                  type="button"
                  className="tool-primary-button"
                  onClick={() => {

                    const value =
                      Number(unitValue);

                    if (
                      Number.isNaN(value)
                    ) {
                      return;
                    }

                    let result = 0;

                    if (
                      unitType === "km-miles"
                    ) {
                      result =
                        value * 0.621371;
                    }

                    if (
                      unitType === "miles-km"
                    ) {
                      result =
                        value * 1.60934;
                    }

                    if (
                      unitType === "kg-pounds"
                    ) {
                      result =
                        value * 2.20462;
                    }

                    if (
                      unitType === "pounds-kg"
                    ) {
                      result =
                        value * 0.453592;
                    }

                    if (
                      unitType ===
                      "celsius-fahrenheit"
                    ) {
                      result =
                        (value * 9) / 5 + 32;
                    }

                    if (
                      unitType ===
                      "fahrenheit-celsius"
                    ) {
                      result =
                        ((value - 32) * 5) / 9;
                    }

                    setUnitResult(result);

                  }}
                >
                  Convert
                </button>

                {unitResult !== null && (

                  <div className="single-tool-result">

                    <span>
                      Result
                    </span>

                    <strong>
                      {unitResult.toFixed(2)}
                    </strong>

                  </div>

                )}

              </div>

            </div>

          </div>

        </section>
      )}

      {/* FOOTER */}

      <footer className="home-footer">

        <div className="home-footer-inner">

          <div>

            <strong>
              Sanolines Global
            </strong>

            <p>
              Global information & services for
              everyday people around the world.
            </p>

          </div>

          <div className="footer-links">

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Home
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("countries")
              }
            >
              Countries
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("services")
              }
            >
              Services
            </button>

            <button
              type="button"
              onClick={() =>
                handleNavigation("tools")
              }
            >
              Tools
            </button>

            <button
              type="button"
              onClick={handleOpenDisclaimer}
            >
              Disclaimer
            </button>

          </div>

        </div>

        <div className="home-footer-bottom">
          © 2026 Sanolines Global. All rights reserved.
        </div>

      </footer>

    </div>
  );
}

export default Home;

import PortugalServices from "./pages/PortugalServices";
import VisaImmigration from "./pages/VisaImmigration";
import Calculators from "./pages/Calculators";
import DirectoryHub from "./pages/DirectoryHub";
import AdditionalServices from "./pages/AdditionalServices";

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#home">Sanolines</a>

          <div>
            <a href="#portugal">Portugal Services</a>
            <a href="#visa">Visa & Immigration</a>
            <a href="#calculators">Calculators</a>
            <a href="#directory">Official Websites</a>
            <a href="#additional">More Information</a>
            <a href="#emergency">Emergency</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home">
          <h1>Sanolines</h1>

          <p>
            Simple information and official links for living, working,
            studying and moving in Portugal.
          </p>

          <h2>What do you need?</h2>

          <div className="service-grid">
            <a href="#portugal" className="service-card">
              <h3>Portugal Services</h3>
              <p>AIMA, NIF, NISS, SNS, IEFP, Social Security and more.</p>
            </a>

            <a href="#visa" className="service-card">
              <h3>Visa & Immigration</h3>
              <p>
                Visa information, documents, appointments and official sources.
              </p>
            </a>

            <a href="#calculators" className="service-card">
              <h3>Calculators</h3>
              <p>
                Salary, VAT, rent, percentage, discount, budget and more.
              </p>
            </a>

            <a href="#directory" className="service-card">
              <h3>Official Websites</h3>
              <p>
                Find the correct Portuguese government website quickly.
              </p>
            </a>

            <a href="#additional" className="service-card">
              <h3>More Information</h3>
              <p>
                Healthcare, education, housing, work, family and transport.
              </p>
            </a>
          </div>
        </section>

        <section id="how-it-works">
          <h2>How Sanolines Works</h2>

          <p>
            Sanolines helps you find information and the correct official
            destination. We do not replace government services.
          </p>

          <div className="service-grid">
            <article className="service-card">
              <h3>1. Find</h3>
              <p>Search for the service or information you need.</p>
            </article>

            <article className="service-card">
              <h3>2. Understand</h3>
              <p>
                Read simple information about documents, fees, appointments
                and procedures.
              </p>
            </article>

            <article className="service-card">
              <h3>3. Go Official</h3>
              <p>
                Use the official government, embassy or authorised website
                to complete your application.
              </p>
            </article>
          </div>
        </section>

        <section id="popular">
          <h2>Popular Services</h2>

          <div className="service-grid">
            <a href="#portugal" className="service-card">
              <h3>AIMA / Residence Permit</h3>
              <p>Residence and immigration information.</p>
            </a>

            <a href="#portugal" className="service-card">
              <h3>NIF</h3>
              <p>Tax identification information.</p>
            </a>

            <a href="#portugal" className="service-card">
              <h3>NISS</h3>
              <p>Social Security identification information.</p>
            </a>

            <a href="#portugal" className="service-card">
              <h3>SNS</h3>
              <p>National Health Service information.</p>
            </a>

            <a href="#portugal" className="service-card">
              <h3>IEFP / Jobs</h3>
              <p>Employment and training information.</p>
            </a>

            <a href="#visa" className="service-card">
              <h3>Visa</h3>
              <p>Portugal visa and immigration information.</p>
            </a>
          </div>
        </section>

        <section id="before-apply">
          <h2>Before You Apply</h2>

          <p>Check these points before starting an application.</p>

          <div className="service-grid">
            <article className="service-card">
              <h3>Check Documents</h3>
              <p>
                Make sure you have the documents required for your specific
                service.
              </p>
            </article>

            <article className="service-card">
              <h3>Check Fees</h3>
              <p>
                Fees can change. Always confirm the current fee on the official
                website.
              </p>
            </article>

            <article className="service-card">
              <h3>Check Appointment</h3>
              <p>
                Some services require an appointment before you can apply.
              </p>
            </article>

            <article className="service-card">
              <h3>Use Official Websites</h3>
              <p>
                Use the official government or authorised application website
                whenever possible.
              </p>
            </article>

            <article className="service-card">
              <h3>Check Your Location</h3>
              <p>
                Some applications must be made through a specific office,
                embassy, consulate or service centre.
              </p>
            </article>

            <article className="service-card">
              <h3>Check Latest Information</h3>
              <p>
                Requirements and procedures can change, so verify the
                information before submitting an application.
              </p>
            </article>
          </div>
        </section>

        <PortugalServices />

        <VisaImmigration />

        <Calculators />

        <DirectoryHub />

        <AdditionalServices />

        <section id="emergency">
          <h2>Emergency Contacts in Portugal</h2>

          <p>
            Important emergency numbers and official resources.
          </p>

          <div className="service-grid">
            <article className="service-card">
              <h3>112 — Emergency</h3>

              <p>
                European emergency number for police, ambulance and fire
                services.
              </p>

              <a
                href="https://www2.gov.pt/en/servicos/ligar-para-o-numero-de-emergencia-112"
                target="_blank"
                rel="noopener noreferrer"
              >
                Official Information →
              </a>
            </article>

            <article className="service-card">
              <h3>Health</h3>

              <p>
                For health-related services and information, use the Portuguese
                National Health Service.
              </p>

              <a
                href="https://www.sns.gov.pt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SNS Official Website →
              </a>
            </article>

            <article className="service-card">
              <h3>Government Services</h3>

              <p>
                Find Portuguese public services and official government
                information.
              </p>

              <a
                href="https://eportugal.gov.pt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ePortugal →
              </a>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <h3>Sanolines</h3>

        <p>
          Information made simple. Sanolines helps people find and understand
          useful information and reach the correct official sources.
        </p>

        <h4>Disclaimer</h4>

        <p>
          Sanolines is an independent information website. It is not a
          government website, law firm, immigration adviser, medical service,
          tax adviser, employment agency or financial adviser.
        </p>

        <p>
          The information provided is for general information and guidance
          only. Government rules, requirements, fees, procedures, appointments
          and website information can change. We cannot guarantee that
          information is complete, current or applicable to every person's
          situation.
        </p>

        <p>
          Always check the latest information with the relevant official
          government department, embassy, consulate, authorised service
          provider or qualified professional before taking action or
          submitting an application.
        </p>

        <p>
          Sanolines does not submit applications, provide legal representation,
          provide medical advice, guarantee employment or guarantee the
          approval of any application or service.
        </p>

        <p>
          External websites linked from Sanolines are operated by third
          parties. Sanolines does not control those websites and is not
          responsible for their content, availability, decisions, services,
          fees or policies.
        </p>

        <p>
          <strong>
            Sanolines — Information made simple. Always verify with the
            official source.
          </strong>
        </p>

        <p>© 2026 Sanolines</p>
      </footer>
    </>
  );
}

export default App;

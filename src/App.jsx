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
        </section>

        <PortugalServices />

        <VisaImmigration />

        <Calculators />

        <DirectoryHub />

        <AdditionalServices />
      </main>

      <footer>
        <h3>Sanolines</h3>

        <p>
          Information made simple. Always check the official government
          website for the latest requirements, fees and procedures.
        </p>

        <p>
          Sanolines is an information website and is not a government
          service.
        </p>

        <p>© 2026 Sanolines</p>
      </footer>
    </>
  );
}

export default App;

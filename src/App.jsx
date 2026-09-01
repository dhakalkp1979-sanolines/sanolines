import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PortugalServices from "./pages/PortugalServices";
import VisaImmigration from "./pages/VisaImmigration";
import Calculators from "./pages/Calculators";
import DirectoryHub from "./pages/DirectoryHub";

function App() {
  return (
    <div>
      <Navbar />

      <main>
        <section id="home">
          <div>
            <h1>Sanolines</h1>
            <p>
              Simple information, official links and useful tools for people
              living in or coming to Portugal.
            </p>
          </div>
        </section>

        <PortugalServices />

        <VisaImmigration />

        <Calculators />

        <DirectoryHub />
      </main>

      <Footer />
    </div>
  );
}

export default App;

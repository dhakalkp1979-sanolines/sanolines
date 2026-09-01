import PortugalServices from "./pages/PortugalServices"; 
import { useState } from "react";
import PortugalServices from "./pages/PortugalServices"; 
function App() { 
function App() {
  const [search, setSearch] = useState("");

  const searchSite = (e) => {
    e.preventDefault();

    const query = search.trim().toLowerCase();

    if (!query) return;

    const sections = [
      "portugal",
      "visa",
      "calculators",
      "directory",
      "additional"
    ];

    const matchingSection = sections.find((section) => {
      const element = document.getElementById(section);

      return element?.innerText.toLowerCase().includes(query);
    });

    if (matchingSection) {
      document
        .getElementById(matchingSection)
        .scrollIntoView({ behavior: "smooth" });
    }
  };
  import { useState } from "react";
import PortugalServices from "./pages/PortugalServices";
import VisaImmigration from "./pages/VisaImmigration";
import Calculators from "./pages/Calculators";
import DirectoryHub from "./pages/DirectoryHub";
import AdditionalServices from "./pages/AdditionalServices";

function App() {
  const [search, setSearch] = useState("");

  const searchSite = (e) => {
    e.preventDefault();

    const query = search.trim().toLowerCase();

    if (!query) return;

    const sections = [
      "portugal",
      "visa",
      "calculators",
      "directory",
      "additional"
    ];

    const matchingSection = sections.find((section) => {
      const element = document.getElementById(section);

      return element?.innerText.toLowerCase().includes(query);
    });

    if (matchingSection) {
      document
        .getElementById(matchingSection)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  return (


    <h2>What do you need?</h2>
    <form onSubmit={searchSite}>
  <input
    type="text"
    placeholder="Search Sanolines..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      width: "100%",
      maxWidth: "600px",
      padding: "14px",
      border: "1px solid #ccc",
      borderRadius: "6px",
      fontSize: "16px",
      margin: "25px auto"
    }}
  />

  <button
    type="submit"
    style={{
      padding: "12px 24px",
      border: "none",
      borderRadius: "6px",
      background: "#075985",
      color: "white",
      cursor: "pointer"
    }}
  >
    Search
  </button>
</form>

```jsx
import React, { useState } from "react";
import "./Home.css";

export default function Home({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (tab) => {
    setMobileMenuOpen(false);
    onNavigate(tab);
  };

  return (
    <div className="sanolines-portal-page">

      {/* TOP STATE-HEADER BAR */}

      <div className="portal-top-bar">
        <div className="top-bar-container">

          <span className="portal-official-tag">
            <span className="flag-dot"></span>
            República Portuguesa • Official Information Directory
          </span>

          <div className="top-bar-links">

            <button
              type="button"
              onClick={() => handleNavClick("Portugal")}
            >
              PT
            </button>

            <span>|</span>

            <button
              type="button"
              onClick={() => handleNavClick("Portugal")}
            >
              EN
            </button>

            <span>|</span>

            <button
              type="button"
              onClick={() => handleNavClick("Services")}
            >
              Support Center
            </button>

          </div>
        </div>
      </div>


      {/* MAIN NAVIGATION HEADER */}

      <nav className="sanolines-main-nav">

        <div className="nav-container">

          <div
            className="brand-box"
            onClick={() => handleNavClick("Home")}
          >

            <div className="brand-logo-symbol">
              S
            </div>

            <div className="brand-text">

              <span className="brand-title">
                SANOLINES
              </span>

              <span className="brand-subtitle">
                Information & Services Portal
              </span>

            </div>

          </div>


          <div
            className={`nav-links-group ${
              mobileMenuOpen ? "open" : ""
            }`}
          >

            <button
              type="button"
              className="active"
              onClick={() => handleNavClick("Home")}
            >
              Início / Home
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("Portugal")}
            >
              Viver / Living
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("Portugal")}
            >
              Trabalhar / Work
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("Services")}
            >
              Serviços
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("Tools")}
            >
              Ferramentas
            </button>

          </div>


          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </nav>


      {/* SYSTEM NOTICE BANNER */}

      <div className="system-notice-banner">

        <div className="notice-container">

          <span className="notice-badge">
            AVISO / NOTICE
          </span>

          <p>
            Portal atualizado para diretrizes de 2026.
            Aceda a portais oficiais de AIMA, NIF,
            e Segurança Social sem intermediários.
          </p>

          <button
            type="button"
            onClick={() => handleNavClick("Portugal")}
          >
            Consultar Diretrizes &rarr;
          </button>

        </div>
      </div>


      {/* HERO / SEARCH SECTION */}

      <header className="portal-hero">

        <div className="hero-content">

          <h1>
            Serviços e Informações Oficiais em Portugal
          </h1>

          <p>
            Portal de orientação estruturada para
            autorizações de residência, habitação,
            saúde pública, registo fiscal e apoio jurídico.
          </p>

          <div className="portal-search-box">

            <input
              type="text"
              placeholder="Pesquisar por NIF, AIMA, Vistos, Residência..."
              aria-label="Pesquisar serviços"
            />

            <button
              type="button"
              onClick={() => handleNavClick("Portugal")}
            >
              Pesquisar Portal
            </button>

          </div>

        </div>
      </header>


      {/* DIRECTORY GRID */}

      <main className="portal-main-container">

        <div className="section-header-row">

          <h2>
            Áreas de Atuação & Serviços Essenciais
          </h2>

          <p>
            Selecione um setor para consultar os
            procedimentos verificados.
          </p>

        </div>


        <div className="portal-cards-grid">

          {/* CARD 1 */}

          <div
            className="portal-card"
            onClick={() => handleNavClick("Portugal")}
          >

            <div className="card-top-icon">
              🏛️
            </div>

            <h3>
              Viver & Regularização
            </h3>

            <p>
              Orientações oficiais sobre prazos,
              títulos de residência, reagrupamento
              familiar e procedimentos administrativos.
            </p>

            <span className="card-action">
              Aceder ao Guia &rarr;
            </span>

          </div>


          {/* CARD 2 */}

          <div
            className="portal-card"
            onClick={() => handleNavClick("Services")}
          >

            <div className="card-top-icon">
              💼
            </div>

            <h3>
              Trabalhar & Empreender
            </h3>

            <p>
              Registo na Segurança Social, obtenção
              de NISS, abertura de atividade e
              contratos de trabalho em Portugal.
            </p>

            <span className="card-action">
              Consultar Emprego &rarr;
            </span>

          </div>


          {/* CARD 3 */}

          <div
            className="portal-card"
            onClick={() => handleNavClick("Tools")}
          >

            <div className="card-top-icon">
              🎓
            </div>

            <h3>
              Estudar & Qualificação
            </h3>

            <p>
              Acesso ao ensino superior, equivalências
              de diplomas, planos de aprendizagem da
              língua portuguesa e centros de formação.
            </p>

            <span className="card-action">
              Ver Requisitos &rarr;
            </span>

          </div>


          {/* CARD 4 */}

          <div
            className="portal-card"
            onClick={() => handleNavClick("Portugal")}
          >

            <div className="card-top-icon">
              ⚖️
            </div>

            <h3>
              Apoio Jurídico & Direitos
            </h3>

            <p>
              Redes de suporte legal gratuito,
              associações de defesa dos imigrantes
              e verificação de direitos cívicos.
            </p>

            <span className="card-action">
              Contactos Úteis &rarr;
            </span>

          </div>

        </div>


        {/* FEATURED LISBON / PORTUGAL BANNER */}

        <section
          className="featured-banner-section"
          onClick={() => handleNavClick("Portugal")}
        >

          <div className="banner-image-side">

            <img
              src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=1000&q=80"
              alt="Lisbon Architecture"
            />

          </div>


          <div className="banner-text-side">

            <span className="badge-mini">
              DESTAQUE NACIONAL
            </span>

            <h3>
              Portal Especializado Lisboa & Portugal
            </h3>

            <p>
              Planeia a sua integração sem erros.
              Mapas detalhados de balcões físicos,
              portais de renovação online e links
              diretos para serviços governamentais
              atualizados.
            </p>

            <button
              type="button"
              className="banner-btn"
              onClick={(event) => {
                event.stopPropagation();
                handleNavClick("Portugal");
              }}
            >
              Aceder ao Hub de Portugal &rarr;
            </button>

          </div>

        </section>

      </main>


      {/* OFFICIAL CORPORATE FOOTER */}

      <footer className="portal-footer">

        <div className="footer-container">

          <div className="footer-col">

            <h4>
              SANOLINES PORTUGAL
            </h4>

            <p>
              Diretório independente de informação
              pública e suporte institucional para
              cidadãos nacionais e estrangeiros.
            </p>

          </div>


          <div className="footer-col">

            <h4>
              Links Rápidos
            </h4>

            <button
              type="button"
              onClick={() => handleNavClick("Home")}
            >
              Início
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("Portugal")}
            >
              Portugal Hub
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("Services")}
            >
              Serviços
            </button>

            <button
              type="button"
              onClick={() => handleNavClick("Tools")}
            >
              Ferramentas
            </button>

          </div>


          <div className="footer-col">

            <h4>
              Transparência
            </h4>

            <p>
              Informação verificada em conformidade
              com as normas legais vigentes em
              território nacional.
            </p>

          </div>

        </div>


        <div className="footer-bottom-bar">

          <p>
            &copy; 2026 Sanolines Global.
            Todos os direitos reservados.
          </p>

        </div>

      </footer>

    </div>
  );
}
```

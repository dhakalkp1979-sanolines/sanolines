* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f7f9fc;
  color: #172033;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Header */

.header {
  height: 76px;
  padding: 0 6%;
  background: white;
  border-bottom: 1px solid #e5e9f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 44px;
  height: 44px;
  border: 3px solid #123b63;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #123b63;
  font-size: 24px;
  font-weight: 800;
}

.logo-name {
  color: #172033;
  font-size: 21px;
  font-weight: 800;
  letter-spacing: 1px;
}

.logo-tagline {
  color: #687386;
  font-size: 11px;
  margin-top: 2px;
}

.navigation {
  display: flex;
  gap: 30px;
}

.navigation a {
  color: #354052;
  font-size: 15px;
  font-weight: 600;
}

.navigation a:hover {
  color: #123b63;
}

/* Hero */

.hero {
  text-align: center;
  padding: 90px 20px 80px;
  background: white;
}

.hero h1 {
  max-width: 800px;
  margin: 0 auto 18px;
  font-size: 46px;
  line-height: 1.15;
  color: #142b45;
}

.hero p {
  max-width: 680px;
  margin: 0 auto 35px;
  color: #687386;
  font-size: 18px;
  line-height: 1.6;
}

.search-box {
  max-width: 720px;
  margin: auto;
  display: flex;
  background: white;
  border: 1px solid #d9dfe8;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(20, 43, 69, 0.08);
}

.search-box input {
  flex: 1;
  border: 0;
  outline: none;
  padding: 17px 20px;
  font-size: 15px;
}

.search-box button {
  border: 0;
  padding: 0 28px;
  background: #123b63;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}

/* Sections */

.section {
  max-width: 1200px;
  margin: auto;
  padding: 70px 25px;
}

.section h2 {
  text-align: center;
  margin: 0 0 35px;
  color: #142b45;
  font-size: 30px;
}

/* Continents */

.continent-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.continent-card {
  background: white;
  padding: 25px;
  border: 1px solid #e1e6ed;
  border-radius: 10px;
  min-height: 130px;
  transition: 0.2s;
}

.continent-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(20, 43, 69, 0.08);
}

.continent-card h3 {
  margin: 0 0 10px;
  color: #123b63;
}

.continent-card p {
  margin: 0;
  color: #707b8c;
  font-size: 14px;
}

/* Services */

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.service-card {
  background: white;
  padding: 25px;
  border: 1px solid #e1e6ed;
  border-radius: 10px;
}

.service-card h3 {
  margin: 0 0 10px;
  color: #24364d;
  font-size: 17px;
}

.service-card p {
  margin: 0;
  color: #707b8c;
  font-size: 14px;
}

/* Footer */

.footer {
  text-align: center;
  padding: 45px 20px;
  background: #142b45;
  color: white;
}

.footer p {
  margin: 8px 0;
  color: #c8d1dc;
  font-size: 14px;
}

/* Mobile */

@media (max-width: 800px) {
  .header {
    height: auto;
    padding: 18px 5%;
    flex-direction: column;
    gap: 18px;
  }

  .navigation {
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    padding: 60px 20px;
  }

  .hero h1 {
    font-size: 34px;
  }

  .continent-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .service-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 500px) {
  .continent-grid {
    grid-template-columns: 1fr;
  }

  .search-box {
    flex-direction: column;
  }

  .search-box button {
    padding: 15px;
  }
}

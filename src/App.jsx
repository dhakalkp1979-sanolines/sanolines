{/* HERO */}

<header className="hero-section">

  <div className="hero-content">

    <span className="hero-badge">
      INFORMATION & SERVICES DIRECTORY
    </span>

    <h1>
      Find useful information, trusted resources
      and official services.
    </h1>

    <p>
      Sanolines helps people find government information,
      employment resources, immigration guidance,
      healthcare, legal support, housing, education
      and other useful services.
    </p>

    <div className="hero-search-bar">

      <input
        type="text"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search services, immigration, jobs, healthcare..."
      />

      <button onClick={goToServices}>
        Search
      </button>

    </div>

  </div>

</header>

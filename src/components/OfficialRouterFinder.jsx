const officialLinks = [
  {
    name: "AIMA",
    description: "Residence permits and immigration services",
    url: "https://aima.gov.pt/"
  },
  {
    name: "NIF / Finanças",
    description: "Tax number and Portuguese tax services",
    url: "https://www.portaldasfinancas.gov.pt/"
  },
  {
    name: "NISS / Social Security",
    description: "Social Security number and services",
    url: "https://www.seg-social.pt/"
  },
  {
    name: "SNS",
    description: "Portuguese National Health Service",
    url: "https://www.sns.gov.pt/"
  },
  {
    name: "IMT",
    description: "Driving licences and transport services",
    url: "https://www.imt-ip.pt/"
  },
  {
    name: "IEFP",
    description: "Jobs, employment and training",
    url: "https://www.iefp.pt/"
  },
  {
    name: "VFS Global",
    description: "Visa application services",
    url: "https://www.vfsglobal.com/"
  },
  {
    name: "ePortugal",
    description: "Portuguese government services",
    url: "https://eportugal.gov.pt/"
  }
];

function OfficialRouterFinder() {
  return (
    <section id="directory">
      <h2>Find Official Website</h2>

      <p>
        Choose the service you need and go directly to the relevant
        official website.
      </p>

      <div>
        {officialLinks.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Official Website →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfficialRouterFinder;

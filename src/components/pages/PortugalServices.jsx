const services = [
  {
    title: "Residence Permit / AIMA",
    description:
      "Information about residence permits, immigration procedures and AIMA services.",
    link: "https://aima.gov.pt/"
  },
  {
    title: "NIF",
    description:
      "Information about the Portuguese Tax Identification Number and tax services.",
    link: "https://www.portaldasfinancas.gov.pt/"
  },
  {
    title: "NISS",
    description:
      "Information about the Portuguese Social Security Identification Number.",
    link: "https://www.seg-social.pt/"
  },
  {
    title: "SNS",
    description:
      "Information about Portugal's National Health Service and healthcare services.",
    link: "https://www.sns.gov.pt/"
  },
  {
    title: "Driving Licence",
    description:
      "Information about Portuguese driving licences and transport services.",
    link: "https://www.imt-ip.pt/"
  },
  {
    title: "IEFP / Jobs",
    description:
      "Information about employment, job searching, training and IEFP services.",
    link: "https://www.iefp.pt/"
  },
  {
    title: "Social Security",
    description:
      "Information about Social Security services, benefits and procedures.",
    link: "https://www.seg-social.pt/"
  },
  {
    title: "Bank Account",
    description:
      "General information about opening and managing a bank account in Portugal.",
    link: "https://eportugal.gov.pt/"
  },
  {
    title: "Renting a Room",
    description:
      "General information about renting accommodation in Portugal.",
    link: "https://eportugal.gov.pt/"
  },
  {
    title: "Tax / Finanças",
    description:
      "Information about Portuguese taxes and Finanças services.",
    link: "https://www.portaldasfinancas.gov.pt/"
  },
  {
    title: "Family Reunification",
    description:
      "Information about family reunification and immigration procedures.",
    link: "https://aima.gov.pt/"
  },
  {
    title: "Citizenship / Nationality",
    description:
      "Information about Portuguese nationality and citizenship procedures.",
    link: "https://justica.gov.pt/"
  },
  {
    title: "Birth Registration",
    description:
      "Information about birth registration and civil registration services.",
    link: "https://justica.gov.pt/"
  },
  {
    title: "Marriage Registration",
    description:
      "Information about marriage registration and civil registry services.",
    link: "https://justica.gov.pt/"
  },
  {
    title: "Change of Address",
    description:
      "Information about changing your address with Portuguese public services.",
    link: "https://eportugal.gov.pt/"
  },
  {
    title: "Digital Mobile Key",
    description:
      "Information about Chave Móvel Digital and digital public services.",
    link: "https://www.autenticacao.gov.pt/"
  }
];

function PortugalServices() {
  return (
    <section id="portugal">
      <h2>Portugal Services</h2>

      <p>
        Simple information about important services in Portugal.
        Use the official website for the latest requirements and procedures.
      </p>

      <div>
        {services.map((service) => (
          <article key={service.title}>
            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Website →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PortugalServices;

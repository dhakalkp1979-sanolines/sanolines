const visaTopics = [
  {
    title: "Portugal Visa",
    description:
      "General information about visas for people who want to travel to or move to Portugal.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Tourist Visa",
    description:
      "Information about short-stay travel to Portugal and Schengen visa requirements.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Student Visa",
    description:
      "Information for students planning to study in Portugal.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Work Visa",
    description:
      "Information for people who want to work in Portugal.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Job-Seeker Visa",
    description:
      "Information about the Portuguese visa for people seeking employment.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Family Reunification",
    description:
      "General information about joining eligible family members in Portugal.",
    link: "https://aima.gov.pt/"
  },
  {
    title: "Residence Visa",
    description:
      "Information about residence visas and moving to Portugal.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Schengen Visa",
    description:
      "General information about short-stay Schengen travel requirements.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Required Documents",
    description:
      "Check the official requirements for the specific visa category and applicant.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Visa Fees",
    description:
      "Visa fees can vary by visa type and applicant. Always check the official source.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Visa Appointment",
    description:
      "Information about where and how to arrange a visa application appointment.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "VFS Global",
    description:
      "VFS Global provides visa application services for participating countries and locations.",
    link: "https://www.vfsglobal.com/"
  },
  {
    title: "Embassy Information",
    description:
      "Find the relevant Portuguese embassy or consulate for your application.",
    link: "https://portaldascomunidades.mne.gov.pt/"
  },
  {
    title: "Application Tracking",
    description:
      "Check the official method available for tracking your visa application.",
    link: "https://vistos.mne.gov.pt/"
  },
  {
    title: "Visa Refusal / Appeal",
    description:
      "General information about what to do if a visa application is refused.",
    link: "https://vistos.mne.gov.pt/"
  }
];

function VisaImmigration() {
  return (
    <section id="visa">
      <h2>Visa & Immigration</h2>

      <p>
        Simple information about Portugal visas and immigration.
        Requirements, fees and procedures can change, so always check
        the official source before applying.
      </p>

      <div>
        {visaTopics.map((topic) => (
          <article key={topic.title}>
            <h3>{topic.title}</h3>

            <p>{topic.description}</p>

            <a
              href={topic.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Official Information →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default VisaImmigration;

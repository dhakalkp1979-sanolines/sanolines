/* =========================================
   SANOLINES GLOBAL — COUNTRIES
   Countries are added progressively.
========================================= */

const topics = [
  "Government & Official Services",
  "Immigration & Visa",
  "Jobs & Employment",
  "Money & Banking",
  "Taxes",
  "Healthcare",
  "Education",
  "Transport & Driving",
  "Emergency Services",
  "Travel",
  "Housing",
  "Useful Contacts",
  "Legal Aid & Free Lawyers",
  "Migrant & Refugee Support",
  "Associations & Community Help",
  "Social Security & Benefits",
  "Family & Children Support",
  "Consumer Protection",
  "Disability & Accessibility Support",
  "Food, Shelter & Basic Assistance",
];

/* =========================================
   COUNTRIES
   Add countries here as they are completed.
========================================= */

const countries = [
  {
    continent: "Europe",
    country: "Portugal",
    famousFor:
      "Lisbon, Porto, Atlantic beaches, historic towns and Portuguese culture",
    topics,
  },
];

/* =========================================
   FLAG CODES
========================================= */

const countryFlagCodes = {
  Portugal: "pt",
};

/* =========================================
   ADD FLAGS AUTOMATICALLY
========================================= */

const countriesWithFlags = countries.map((item) => {
  const flagCode = countryFlagCodes[item.country] || "";

  return {
    ...item,
    flagCode,
    flag: flagCode
      ? `https://flagcdn.io/4x3/${flagCode}.svg`
      : "",
  };
});

export default countriesWithFlags;

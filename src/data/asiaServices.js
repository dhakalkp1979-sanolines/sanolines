// src/data/asiaServices.js

/*
  SANOLINES GLOBAL
  ASIA SERVICES

  48 Asian countries
  Government & Official Services = official government portal

  Sanolines is an information directory.
  Sanolines does not provide government, legal,
  immigration, medical, financial or other services.
*/

const categories = [
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

const makeLink = (name, url, official = true) => ({
  name,
  url,
  official,
});

const governmentLinks = {
  Afghanistan: {
    name: "Afghanistan Government",
    url: "https://www.gov.af/",
  },

  Armenia: {
    name: "Government of Armenia",
    url: "https://www.gov.am/en/",
  },

  Azerbaijan: {
    name: "Government of Azerbaijan",
    url: "https://www.gov.az/en",
  },

  Bahrain: {
    name: "Bahrain Government",
    url: "https://www.bahrain.bh/",
  },

  Bangladesh: {
    name: "Bangladesh National Portal",
    url: "https://bangladesh.gov.bd/",
  },

  Bhutan: {
    name: "Government of Bhutan",
    url: "https://www.gov.bt/",
  },

  Brunei: {
    name: "Government of Brunei Darussalam",
    url: "https://www.gov.bn/",
  },

  Cambodia: {
    name: "Royal Government of Cambodia",
    url: "https://www.gov.kh/",
  },

  China: {
    name: "Chinese Government",
    url: "https://www.gov.cn/",
  },

  Cyprus: {
    name: "Government of Cyprus",
    url: "https://www.gov.cy/en/",
  },

  Georgia: {
    name: "Government of Georgia",
    url: "https://www.gov.ge/",
  },

  India: {
    name: "National Portal of India",
    url: "https://www.india.gov.in/",
  },

  Indonesia: {
    name: "Government of Indonesia",
    url: "https://www.indonesia.go.id/",
  },

  Iran: {
    name: "Government of Iran",
    url: "https://www.irangov.ir/",
  },

  Iraq: {
    name: "Government of Iraq",
    url: "https://www.cabinet.iq/",
  },

  Israel: {
    name: "Government of Israel",
    url: "https://www.gov.il/",
  },

  Japan: {
    name: "Government of Japan",
    url: "https://www.japan.go.jp/",
  },

  Jordan: {
    name: "Government of Jordan",
    url: "https://portal.jordan.gov.jo/",
  },

  Kazakhstan: {
    name: "Government of Kazakhstan",
    url: "https://www.gov.kz/",
  },

  Kuwait: {
    name: "Government of Kuwait",
    url: "https://www.e.gov.kw/",
  },

  Kyrgyzstan: {
    name: "Government of Kyrgyz Republic",
    url: "https://www.gov.kg/",
  },

  Laos: {
    name: "Government of Lao PDR",
    url: "https://www.gov.la/",
  },

  Lebanon: {
    name: "Government of Lebanon",
    url: "https://www.gov.lb/",
  },

  Malaysia: {
    name: "Government of Malaysia",
    url: "https://www.malaysia.gov.my/en",
  },

  Maldives: {
    name: "Government of Maldives",
    url: "https://www.gov.mv/",
  },

  Mongolia: {
    name: "Government of Mongolia",
    url: "https://www.gov.mn/",
  },

  Myanmar: {
    name: "Government of Myanmar",
    url: "https://www.myanmar.gov.mm/",
  },

  Nepal: {
    name: "Government of Nepal",
    url: "https://www.nepal.gov.np/",
  },

  "North Korea": {
    name: "DPR Korea Government Information",
    url: "https://www.korea-dpr.com/",
  },

  Oman: {
    name: "Government of Oman",
    url: "https://www.oman.om/",
  },

  Pakistan: {
    name: "Government of Pakistan",
    url: "https://www.pakistan.gov.pk/",
  },

  Palestine: {
    name: "State of Palestine Government",
    url: "https://www.palestine.ps/",
  },

  Philippines: {
    name: "Government of the Philippines",
    url: "https://www.gov.ph/",
  },

  Qatar: {
    name: "Government of Qatar",
    url: "https://www.gov.qa/",
  },

  "Saudi Arabia": {
    name: "Government of Saudi Arabia",
    url: "https://www.my.gov.sa/",
  },

  Singapore: {
    name: "Singapore Government",
    url: "https://www.gov.sg/",
  },

  "South Korea": {
    name: "Government of South Korea",
    url: "https://www.korea.net/",
  },

  "Sri Lanka": {
    name: "Government of Sri Lanka",
    url: "https://www.gov.lk/",
  },

  Syria: {
    name: "Government of Syria",
    url: "https://www.egov.sy/",
  },

  Tajikistan: {
    name: "Government of Tajikistan",
    url: "https://www.gov.tj/",
  },

  Thailand: {
    name: "Government of Thailand",
    url: "https://www.thaigov.go.th/",
  },

  "Timor-Leste": {
    name: "Government of Timor-Leste",
    url: "https://timor-leste.gov.tl/",
  },

  "Türkiye": {
    name: "Government of Türkiye",
    url: "https://www.turkiye.gov.tr/",
  },

  Turkmenistan: {
    name: "Government of Turkmenistan",
    url: "https://turkmenistan.gov.tm/",
  },

  "United Arab Emirates": {
    name: "UAE Government",
    url: "https://u.ae/",
  },

  Uzbekistan: {
    name: "Government of Uzbekistan",
    url: "https://gov.uz/",
  },

  Vietnam: {
    name: "Government of Vietnam",
    url: "https://chinhphu.vn/",
  },

  Yemen: {
    name: "Government of Yemen",
    url: "https://yemen.gov.ye/",
  },
};


/*
  Create all 20 service categories for each country.

  For now, the official government portal is the
  trusted starting point for every category.

  We can later replace individual categories with
  dedicated official agencies:
  - Immigration
  - Tax
  - Healthcare
  - Jobs
  - Education
  - Housing
  - etc.
*/

const makeCountry = (country) => {
  const government = governmentLinks[country];

  const services = {};

  categories.forEach((category) => {
    services[category] = {
      description:
        `${category} information and useful official resources for ${country}. ` +
        `Sanolines is an information directory and does not provide these services.`,

      links: [
        makeLink(
          government.name,
          government.url,
          true
        ),
      ],
    };
  });

  /*
    Calculators & Tools
  */

  services["Calculators & Tools"] = {
    description:
      `Useful Sanolines calculators and information tools for ${country}.`,

    links: [
      {
        name: "Sanolines Calculators & Tools",
        url: "./#tools",
        official: false,
      },
    ],
  };

  return services;
};


/*
  48 ASIAN COUNTRIES
*/

const countryNames = [
  "Afghanistan",
  "Armenia",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Bhutan",
  "Brunei",
  "Cambodia",
  "China",
  "Cyprus",
  "Georgia",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Israel",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Lebanon",
  "Malaysia",
  "Maldives",
  "Mongolia",
  "Myanmar",
  "Nepal",
  "North Korea",
  "Oman",
  "Pakistan",
  "Palestine",
  "Philippines",
  "Qatar",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Sri Lanka",
  "Syria",
  "Tajikistan",
  "Thailand",
  "Timor-Leste",
  "Türkiye",
  "Turkmenistan",
  "United Arab Emirates",
  "Uzbekistan",
  "Vietnam",
  "Yemen",
];


/*
  Build the final Asia services object
*/

const asiaServices = {};

countryNames.forEach((country) => {
  asiaServices[country] = makeCountry(country);
});


export default asiaServices;

// src/data/asiaServices.js

/*
=========================================================
SANOLINES GLOBAL
ASIA SERVICES DATABASE

48 Asian countries
20 information/service areas per country

Sanolines is an information platform.
It does NOT provide government, legal, medical,
immigration, financial, employment or other services.

Official organisations operate their own services.
Visitors should always verify current information
with the relevant organisation.
=========================================================
*/

const serviceCategories = [
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

/*
=========================================================
SERVICE DESCRIPTIONS
=========================================================
*/

const descriptions = {
  "Government & Official Services":
    "Find information about government departments, public administration and official services.",

  "Immigration & Visa":
    "Find information about visas, residence, immigration procedures and citizenship.",

  "Jobs & Employment":
    "Find information about employment services, job searching, contracts, worker rights and employment support.",

  "Money & Banking":
    "Find information about banking, payments, accounts and financial services.",

  Taxes:
    "Find information about tax authorities, taxpayer services, registration and tax procedures.",

  Healthcare:
    "Find information about public healthcare, health services, hospitals and healthcare support.",

  Education:
    "Find information about schools, universities, vocational training and education services.",

  "Transport & Driving":
    "Find information about driving licences, vehicle services, public transport and road rules.",

  "Emergency Services":
    "Find emergency numbers and information about police, fire, ambulance and urgent assistance.",

  Travel:
    "Find useful travel information, official travel requirements, transport hubs and travel services.",

  Housing:
    "Find information about renting, housing services, tenant support, social housing and accommodation assistance.",

  "Useful Contacts":
    "Find useful government departments, public organisations, helplines and important contacts.",

  "Legal Aid & Free Lawyers":
    "Find information about legal aid, access to justice and organisations that may provide free or low-cost legal assistance.",

  "Migrant & Refugee Support":
    "Find organisations and support resources that may assist migrants, refugees and newcomers.",

  "Associations & Community Help":
    "Find community associations, charities and local organisations that may provide practical support.",

  "Social Security & Benefits":
    "Find information about social security, pensions, unemployment support and public benefits.",

  "Family & Children Support":
    "Find information about family services, childcare, children's services and family support organisations.",

  "Consumer Protection":
    "Find information about consumer rights, complaints, refunds and consumer protection organisations.",

  "Disability & Accessibility Support":
    "Find information about disability services, accessibility, benefits and support organisations.",

  "Food, Shelter & Basic Assistance":
    "Find information about food assistance, shelters, emergency accommodation and essential support organisations.",
};

/*
=========================================================
OFFICIAL COUNTRY PORTALS
=========================================================
*/

const countrySources = {
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
    name: "Bahrain National Government Services Portal",
    url: "https://services.bahrain.bh/wps/portal/en",
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
    name: "Kuwait Government Online",
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
    name: "State of Palestine",
    url: "https://www.palestine.ps/",
  },

  Philippines: {
    name: "Official Gazette of the Philippines",
    url: "https://www.officialgazette.gov.ph/",
  },

  Qatar: {
    name: "Qatar Government",
    url: "https://www.gov.qa/",
  },

  "Saudi Arabia": {
    name: "Saudi Government Services",
    url: "https://www.my.gov.sa/",
  },

  Singapore: {
    name: "Singapore Government",
    url: "https://www.gov.sg/",
  },

  "South Korea": {
    name: "Korea.net Government Information",
    url: "https://www.korea.net/",
  },

  "Sri Lanka": {
    name: "Government of Sri Lanka",
    url: "https://www.gov.lk/",
  },

  Syria: {
    name: "Syrian e-Government",
    url: "https://www.egov.sy/",
  },

  Tajikistan: {
    name: "Government of Tajikistan",
    url: "https://www.gov.tj/",
  },

  Thailand: {
    name: "Royal Thai Government",
    url: "https://www.thaigov.go.th/",
  },

  "Timor-Leste": {
    name: "Government of Timor-Leste",
    url: "https://timor-leste.gov.tl/",
  },

  "Türkiye": {
    name: "Türkiye e-Government Gateway",
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
=========================================================
COUNTRIES
=========================================================
*/

const asiaCountries = [
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
=========================================================
SPECIAL SERVICE LINKS
=========================================================

These are official specialist resources where we have
a known dedicated official authority.

All other categories safely point visitors to the
country's official government/service portal rather
than inventing a URL.
*/

const specialistLinks = {
  Bahrain: {
    "Money & Banking": {
      name: "Central Bank of Bahrain",
      url: "https://www.cbb.gov.bh/",
    },

    Healthcare: {
      name: "Bahrain Ministry of Health",
      url: "https://www.moh.gov.bh/",
    },

    "Social Security & Benefits": {
      name: "Social Insurance Organization Bahrain",
      url: "https://www.sio.gov.bh/",
    },

    "Consumer Protection": {
      name: "Bahrain Ministry of Industry and Commerce",
      url: "https://www.moic.gov.bh/",
    },

    "Legal Aid & Free Lawyers": {
      name: "Bahrain Ministry of Justice, Islamic Affairs and Waqf",
      url: "https://www.moj.gov.bh/",
    },

    "Emergency Services": {
      name: "Bahrain Ministry of Interior",
      url: "https://www.interior.gov.bh/",
    },
  },

  Armenia: {
    "Immigration & Visa": {
      name: "Armenia Migration and Citizenship Service",
      url: "https://migration.mia.gov.am/",
    },

    "Government & Official Services": {
      name: "Armenian Government e-Government Portal",
      url: "https://www.e-gov.am/",
    },
  },

  India: {
    "Government & Official Services": {
      name: "National Portal of India",
      url: "https://www.india.gov.in/",
    },

    "Immigration & Visa": {
      name: "Government of India Visa Services",
      url: "https://indianvisaonline.gov.in/",
    },

    "Jobs & Employment": {
      name: "National Career Service",
      url: "https://www.ncs.gov.in/",
    },
  },

  Singapore: {
    "Government & Official Services": {
      name: "Singapore Government",
      url: "https://www.gov.sg/",
    },

    "Jobs & Employment": {
      name: "MyCareersFuture Singapore",
      url: "https://www.mycareersfuture.gov.sg/",
    },
  },

  "United Arab Emirates": {
    "Government & Official Services": {
      name: "UAE Government",
      url: "https://u.ae/",
    },
  },

  "Saudi Arabia": {
    "Government & Official Services": {
      name: "Saudi National Government Services",
      url: "https://www.my.gov.sa/",
    },
  },

  "South Korea": {
    "Government & Official Services": {
      name: "Korean Government",
      url: "https://www.korea.net/",
    },
  },

  "Türkiye": {
    "Government & Official Services": {
      name: "Türkiye e-Government Gateway",
      url: "https://www.turkiye.gov.tr/",
    },
  },

  Malaysia: {
    "Government & Official Services": {
      name: "Malaysia Government Portal",
      url: "https://www.malaysia.gov.my/en",
    },
  },
};

/*
=========================================================
BUILD ONE COUNTRY
=========================================================
*/

function buildCountryServices(country) {
  const countrySource = countrySources[country];

  const result = {};

  serviceCategories.forEach((category) => {
    const specialist =
      specialistLinks[country]?.[category];

    const source = specialist || countrySource;

    result[category] = {
      description:
        `${descriptions[category]} in ${country}. ` +
        `Sanolines provides information only and does not provide this service directly.`,

      links: [
        {
          name: source.name,
          url: source.url,
          official: true,
        },
      ],
    };
  });

  return result;
}

/*
=========================================================
CREATE ALL 48 COUNTRIES
=========================================================
*/

const asiaServices = {};

asiaCountries.forEach((country) => {
  asiaServices[country] =
    buildCountryServices(country);
});

/*
=========================================================
EXPORT
=========================================================
*/

export default asiaServices;

// src/data/asiaServices.js

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

const categoryInformation = {
  "Government & Official Services":
    "Find official government departments, public administration services, forms, applications and information for residents and visitors.",

  "Immigration & Visa":
    "Find information about visas, residence permits, immigration procedures, passports, citizenship and entry requirements.",

  "Jobs & Employment":
    "Find job-search services, employment offices, career guidance, government job vacancies, worker information and employment support.",

  "Money & Banking":
    "Find information about banks, financial services, payments, accounts, banking regulations and official financial authorities.",

  Taxes:
    "Find tax authority information, taxpayer services, registration, tax filing, payments and official tax guidance.",

  Healthcare:
    "Find public healthcare information, hospitals, clinics, health authorities, medical services and healthcare guidance.",

  Education:
    "Find information about schools, universities, vocational education, training, scholarships and education authorities.",

  "Transport & Driving":
    "Find information about driving licences, vehicle registration, road rules, public transport and transport authorities.",

  "Emergency Services":
    "Find emergency telephone numbers and official information for police, ambulance, fire and other urgent services.",

  Travel:
    "Find official travel information, entry requirements, airports, tourism authorities, transport information and travel guidance.",

  Housing:
    "Find information about renting, housing authorities, tenant information, social housing and accommodation support.",

  "Useful Contacts":
    "Find important government departments, public organisations, helplines and useful official contacts.",

  "Legal Aid & Free Lawyers":
    "Find information about legal aid, access to justice, legal assistance organisations and official legal resources.",

  "Migrant & Refugee Support":
    "Find information and organisations that may assist migrants, refugees, newcomers and people adapting to life in the country.",

  "Associations & Community Help":
    "Find community organisations, associations, charities and local groups that may provide information or practical support.",

  "Social Security & Benefits":
    "Find information about pensions, unemployment support, social insurance, family benefits and other public assistance.",

  "Family & Children Support":
    "Find information about family services, childcare, children's services, parental support and family-related public services.",

  "Consumer Protection":
    "Find information about consumer rights, complaints, refunds, unfair business practices and consumer protection authorities.",

  "Disability & Accessibility Support":
    "Find information about disability services, accessibility, disability benefits, employment support and organisations for people with disabilities.",

  "Food, Shelter & Basic Assistance":
    "Find information about food assistance, shelters, emergency accommodation, charities and essential community support.",
};

// ----------------------------------------------------
// 48 ASIAN COUNTRIES
// ----------------------------------------------------

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

// ----------------------------------------------------
// OFFICIAL GOVERNMENT / NATIONAL PORTALS
// ----------------------------------------------------

const countrySources = {
  Afghanistan: {
    name: "Government of Afghanistan",
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
    name: "Bahrain Government Services Portal",
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
    name: "Jordan Government Services",
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
    name: "Malaysia Government",
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
    name: "Korea Government Information",
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

// ----------------------------------------------------
// COUNTRY + SERVICE SPECIFIC SOURCES
// ----------------------------------------------------

const specialistLinks = {
  India: {
    "Government & Official Services": {
      name: "National Portal of India",
      url: "https://www.india.gov.in/",
    },

    "Immigration & Visa": {
      name: "India Visa Services",
      url: "https://indianvisaonline.gov.in/",
    },

    "Jobs & Employment": {
      name: "National Career Service",
      url: "https://www.ncs.gov.in/",
    },

    "Money & Banking": {
      name: "Reserve Bank of India",
      url: "https://www.rbi.org.in/",
    },

    Taxes: {
      name: "Income Tax Department",
      url: "https://www.incometax.gov.in/",
    },

    Healthcare: {
      name: "Ministry of Health and Family Welfare",
      url: "https://mohfw.gov.in/",
    },

    Education: {
      name: "Ministry of Education",
      url: "https://www.education.gov.in/",
    },

    "Transport & Driving": {
      name: "Parivahan Sewa",
      url: "https://parivahan.gov.in/",
    },

    "Emergency Services": {
      name: "Emergency Response Support System",
      url: "https://112.gov.in/",
    },

    Travel: {
      name: "Ministry of Tourism",
      url: "https://tourism.gov.in/",
    },

    Housing: {
      name: "Ministry of Housing and Urban Affairs",
      url: "https://mohua.gov.in/",
    },

    "Useful Contacts": {
      name: "National Portal of India",
      url: "https://www.india.gov.in/",
    },

    "Legal Aid & Free Lawyers": {
      name: "National Legal Services Authority",
      url: "https://nalsa.gov.in/",
    },

    "Migrant & Refugee Support": {
      name: "UNHCR India",
      url: "https://www.unhcr.org/in/",
    },

    "Social Security & Benefits": {
      name: "Ministry of Labour & Employment",
      url: "https://labour.gov.in/",
    },

    "Family & Children Support": {
      name: "Ministry of Women and Child Development",
      url: "https://wcd.gov.in/",
    },

    "Consumer Protection": {
      name: "National Consumer Helpline",
      url: "https://consumerhelpline.gov.in/",
    },

    "Disability & Accessibility Support": {
      name: "Department of Empowerment of Persons with Disabilities",
      url: "https://depwd.gov.in/",
    },

    "Food, Shelter & Basic Assistance": {
      name: "Department of Food and Public Distribution",
      url: "https://dfpd.gov.in/",
    },
  },

  Bahrain: {
    "Government & Official Services": {
      name: "Bahrain Government Services Portal",
      url: "https://services.bahrain.bh/wps/portal/en",
    },

    "Money & Banking": {
      name: "Central Bank of Bahrain",
      url: "https://www.cbb.gov.bh/",
    },

    Healthcare: {
      name: "Bahrain Ministry of Health",
      url: "https://www.moh.gov.bh/",
    },

    "Social Security & Benefits": {
      name: "Social Insurance Organization",
      url: "https://www.sio.gov.bh/",
    },

    "Emergency Services": {
      name: "Bahrain Ministry of Interior",
      url: "https://www.interior.gov.bh/",
    },

    "Legal Aid & Free Lawyers": {
      name: "Bahrain Ministry of Justice",
      url: "https://www.moj.gov.bh/",
    },
  },

  Armenia: {
    "Government & Official Services": {
      name: "Armenia e-Government",
      url: "https://www.e-gov.am/",
    },

    "Immigration & Visa": {
      name: "Migration and Citizenship Service",
      url: "https://migration.mia.gov.am/en",
    },

    "Social Security & Benefits": {
      name: "Ministry of Labour and Social Affairs",
      url: "https://www.mlsa.am/",
    },
  },

  Singapore: {
    "Government & Official Services": {
      name: "Singapore Government",
      url: "https://www.gov.sg/",
    },

    "Jobs & Employment": {
      name: "MyCareersFuture",
      url: "https://www.mycareersfuture.gov.sg/",
    },

    Healthcare: {
      name: "Ministry of Health Singapore",
      url: "https://www.moh.gov.sg/",
    },
  },

  Malaysia: {
    "Government & Official Services": {
      name: "Malaysia Government Portal",
      url: "https://www.malaysia.gov.my/en",
    },

    "Immigration & Visa": {
      name: "Malaysia Immigration Department",
      url: "https://www.imi.gov.my/",
    },

    "Jobs & Employment": {
      name: "MYFutureJobs",
      url: "https://www.myfuturejobs.gov.my/",
    },
  },

  "United Arab Emirates": {
    "Government & Official Services": {
      name: "UAE Government",
      url: "https://u.ae/",
    },

    "Immigration & Visa": {
      name: "UAE Government Immigration Information",
      url: "https://u.ae/en/information-and-services/visa-and-emirates-id",
    },
  },

  "Saudi Arabia": {
    "Government & Official Services": {
      name: "Saudi National Government Services",
      url: "https://www.my.gov.sa/",
    },

    "Immigration & Visa": {
      name: "Saudi Government Visa Information",
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

  Brunei: {
    "Government & Official Services": {
      name: "Government of Brunei",
      url: "https://www.gov.bn/",
    },

    "Immigration & Visa": {
      name: "Brunei Immigration Department",
      url: "https://www.immigration.gov.bn/",
    },

    Healthcare: {
      name: "Brunei Ministry of Health",
      url: "https://moh.gov.bn/",
    },
  },
};

// ----------------------------------------------------
// BUILD ALL 48 × 20 SERVICES
// ----------------------------------------------------

function buildCountryServices(country) {
  const countrySource = countrySources[country];

  const result = {};

  serviceCategories.forEach((category) => {
    const specialist =
      specialistLinks[country]?.[category];

    const source =
      specialist || countrySource;

    result[category] = {
      title: category,

      description:
        `${categoryInformation[category]} ` +
        `This section provides information and links for ${country}.`,

      information: [
        `Information about ${category.toLowerCase()} in ${country}.`,
        "Use the official or trusted source below for current requirements, applications and contact information.",
        "Requirements, fees, opening times and procedures may change, so always confirm information with the original organisation.",
      ],

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

// ----------------------------------------------------
// FINAL DATABASE
// ----------------------------------------------------

const asiaServices = {};

asiaCountries.forEach((country) => {
  asiaServices[country] =
    buildCountryServices(country);
});

export default asiaServices;

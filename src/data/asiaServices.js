// src/data/asiaServices.js

// ============================================================
// SANOLINES GLOBAL — ASIA SERVICES DATABASE
// 48 COUNTRIES × 20 CATEGORIES = 960 SERVICES
// ============================================================

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

// ============================================================
// CATEGORY INFORMATION
// ============================================================

const categoryInformation = {
  "Government & Official Services":
    "Find official government departments, public administration services, forms, applications and public information.",

  "Immigration & Visa":
    "Find information about visas, residence permits, immigration procedures, passports, citizenship and entry requirements.",

  "Jobs & Employment":
    "Find job-search services, employment offices, government job vacancies, career guidance, labour information and worker support.",

  "Money & Banking":
    "Find information about banks, financial services, payments, accounts, banking regulations and official financial authorities.",

  Taxes:
    "Find tax authority information, taxpayer registration, tax filing, payments and official tax guidance.",

  Healthcare:
    "Find public healthcare information, hospitals, clinics, health authorities, medical services and health guidance.",

  Education:
    "Find information about schools, universities, vocational education, training, scholarships and education authorities.",

  "Transport & Driving":
    "Find information about driving licences, vehicle registration, road rules, public transport and transport authorities.",

  "Emergency Services":
    "Find official emergency information for police, ambulance, fire and other urgent services.",

  Travel:
    "Find official travel information, tourism authorities, airports, entry requirements and travel guidance.",

  Housing:
    "Find information about renting, housing authorities, tenant information, social housing and accommodation support.",

  "Useful Contacts":
    "Find important government departments, public organisations, helplines and useful official contacts.",

  "Legal Aid & Free Lawyers":
    "Find information about legal aid, access to justice, legal assistance organisations and official legal resources.",

  "Migrant & Refugee Support":
    "Find information and organisations that may assist migrants, refugees, newcomers and displaced people.",

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

// ============================================================
// 48 ASIAN COUNTRIES
// ============================================================

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

// ============================================================
// GENERAL OFFICIAL GOVERNMENT SOURCES
// ============================================================

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

// ============================================================
// SPECIALIST OFFICIAL SOURCES
// ============================================================

const specialistLinks = {
  China: {
    "Immigration & Visa": {
      name: "National Immigration Administration of China",
      url: "https://en.nia.gov.cn/",
    },

    "Jobs & Employment": {
      name: "Ministry of Human Resources and Social Security",
      url: "https://www.mohrss.gov.cn/",
    },

    "Money & Banking": {
      name: "People's Bank of China",
      url: "https://www.pbc.gov.cn/",
    },

    Taxes: {
      name: "State Taxation Administration of China",
      url: "https://www.chinatax.gov.cn/",
    },

    Healthcare: {
      name: "National Health Commission of China",
      url: "https://en.nhc.gov.cn/",
    },

    Education: {
      name: "Ministry of Education of China",
      url: "https://en.moe.gov.cn/",
    },

    "Transport & Driving": {
      name: "Ministry of Transport of China",
      url: "https://www.mot.gov.cn/",
    },

    Housing: {
      name: "Ministry of Housing and Urban-Rural Development",
      url: "https://www.mohurd.gov.cn/",
    },

    "Legal Aid & Free Lawyers": {
      name: "Ministry of Justice of China",
      url: "https://www.moj.gov.cn/",
    },

    "Social Security & Benefits": {
      name: "Ministry of Human Resources and Social Security",
      url: "https://www.mohrss.gov.cn/",
    },

    "Consumer Protection": {
      name: "State Administration for Market Regulation",
      url: "https://www.samr.gov.cn/",
    },

    "Disability & Accessibility Support": {
      name: "China Disabled Persons' Federation",
      url: "https://www.cdpf.org.cn/",
    },

    "Food, Shelter & Basic Assistance": {
      name: "Ministry of Civil Affairs of China",
      url: "https://www.mca.gov.cn/",
    },
  },

  India: {
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

    "Legal Aid & Free Lawyers": {
      name: "National Legal Services Authority",
      url: "https://nalsa.gov.in/",
    },

    "Social Security & Benefits": {
      name: "Ministry of Labour and Employment",
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

  Singapore: {
    "Immigration & Visa": {
      name: "Immigration and Checkpoints Authority",
      url: "https://www.ica.gov.sg/",
    },

    "Jobs & Employment": {
      name: "MyCareersFuture",
      url: "https://www.mycareersfuture.gov.sg/",
    },

    "Money & Banking": {
      name: "Monetary Authority of Singapore",
      url: "https://www.mas.gov.sg/",
    },

    Taxes: {
      name: "Inland Revenue Authority of Singapore",
      url: "https://www.iras.gov.sg/",
    },

    Healthcare: {
      name: "Ministry of Health Singapore",
      url: "https://www.moh.gov.sg/",
    },

    Education: {
      name: "Ministry of Education Singapore",
      url: "https://www.moe.gov.sg/",
    },

    "Transport & Driving": {
      name: "Land Transport Authority",
      url: "https://www.lta.gov.sg/",
    },

    Travel: {
      name: "Singapore Tourism Board",
      url: "https://www.stb.gov.sg/",
    },

    Housing: {
      name: "Housing & Development Board",
      url: "https://www.hdb.gov.sg/",
    },

    "Social Security & Benefits": {
      name: "Central Provident Fund",
      url: "https://www.cpf.gov.sg/",
    },

    "Consumer Protection": {
      name: "Consumers Association of Singapore",
      url: "https://www.case.org.sg/",
    },
  },

  Malaysia: {
    "Immigration & Visa": {
      name: "Malaysia Immigration Department",
      url: "https://www.imi.gov.my/",
    },

    "Jobs & Employment": {
      name: "MYFutureJobs",
      url: "https://www.myfuturejobs.gov.my/",
    },

    "Money & Banking": {
      name: "Bank Negara Malaysia",
      url: "https://www.bnm.gov.my/",
    },

    Taxes: {
      name: "Inland Revenue Board of Malaysia",
      url: "https://www.hasil.gov.my/",
    },

    Healthcare: {
      name: "Ministry of Health Malaysia",
      url: "https://www.moh.gov.my/",
    },

    Education: {
      name: "Ministry of Education Malaysia",
      url: "https://www.moe.gov.my/",
    },

    "Transport & Driving": {
      name: "Road Transport Department Malaysia",
      url: "https://www.jpj.gov.my/",
    },

    Travel: {
      name: "Tourism Malaysia",
      url: "https://www.malaysia.travel/",
    },

    "Social Security & Benefits": {
      name: "Social Security Organisation",
      url: "https://www.perkeso.gov.my/",
    },

    "Consumer Protection": {
      name: "Ministry of Domestic Trade and Cost of Living",
      url: "https://www.kpdn.gov.my/",
    },
  },

  Brunei: {
    "Immigration & Visa": {
      name: "Brunei Immigration Department",
      url: "https://www.immigration.gov.bn/",
    },

    "Jobs & Employment": {
      name: "Brunei Department of Labour",
      url: "https://www.labour.gov.bn/",
    },

    "Money & Banking": {
      name: "Brunei Darussalam Central Bank",
      url: "https://www.bdcb.gov.bn/",
    },

    Healthcare: {
      name: "Brunei Ministry of Health",
      url: "https://moh.gov.bn/",
    },

    Education: {
      name: "Brunei Ministry of Education",
      url: "https://www.moe.gov.bn/",
    },

    "Social Security & Benefits": {
      name: "Employees Trust Fund",
      url: "https://www.tap.com.bn/",
    },
  },

  Bahrain: {
    "Immigration & Visa": {
      name: "Bahrain Nationality, Passports and Residence Affairs",
      url: "https://www.npra.gov.bh/",
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

    "Legal Aid & Free Lawyers": {
      name: "Bahrain Ministry of Justice",
      url: "https://www.moj.gov.bh/",
    },
  },

  Armenia: {
    "Immigration & Visa": {
      name: "Migration and Citizenship Service",
      url: "https://migration.mia.gov.am/en",
    },

    "Social Security & Benefits": {
      name: "Ministry of Labour and Social Affairs",
      url: "https://www.mlsa.am/",
    },
  },

  "United Arab Emirates": {
    "Immigration & Visa": {
      name: "UAE Government Visa and Emirates ID",
      url: "https://u.ae/en/information-and-services/visa-and-emirates-id",
    },

    "Jobs & Employment": {
      name: "Ministry of Human Resources and Emiratisation",
      url: "https://www.mohre.gov.ae/",
    },

    Healthcare: {
      name: "Ministry of Health and Prevention",
      url: "https://www.mohap.gov.ae/",
    },
  },

  "Saudi Arabia": {
    "Jobs & Employment": {
      name: "Ministry of Human Resources and Social Development",
      url: "https://www.hrsd.gov.sa/",
    },

    "Social Security & Benefits": {
      name: "Ministry of Human Resources and Social Development",
      url: "https://www.hrsd.gov.sa/",
    },
  },

  "South Korea": {
    "Immigration & Visa": {
      name: "Korea Immigration Service",
      url: "https://www.immigration.go.kr/",
    },

    "Jobs & Employment": {
      name: "Korea Employment Service",
      url: "https://www.work24.go.kr/",
    },

    "Money & Banking": {
      name: "Bank of Korea",
      url: "https://www.bok.or.kr/",
    },

    Healthcare: {
      name: "Ministry of Health and Welfare",
      url: "https://www.mohw.go.kr/",
    },

    Education: {
      name: "Ministry of Education",
      url: "https://english.moe.go.kr/",
    },
  },

  "Türkiye": {
    "Immigration & Visa": {
      name: "Presidency of Migration Management",
      url: "https://en.goc.gov.tr/",
    },

    "Jobs & Employment": {
      name: "Turkish Employment Agency",
      url: "https://www.iskur.gov.tr/",
    },

    "Money & Banking": {
      name: "Central Bank of the Republic of Türkiye",
      url: "https://www.tcmb.gov.tr/",
    },

    Healthcare: {
      name: "Ministry of Health Türkiye",
      url: "https://www.saglik.gov.tr/",
    },
  },
};

// ============================================================
// COUNTRY-SPECIFIC NOTES
// ============================================================

const countryNotes = {
  China:
    "Some official services may require Chinese-language pages or local government procedures.",

  India:
    "Many services are handled nationally and at state or union-territory level. Check the relevant local authority when required.",

  Singapore:
    "Many public services are provided digitally through central government agencies.",

  Malaysia:
    "Some services are handled federally while others are handled by state authorities.",

  Bahrain:
    "Many public services are available through the Bahrain Government Services Portal.",

  "United Arab Emirates":
    "Some services are federal while others are handled by individual emirates.",

  "Saudi Arabia":
    "Many government services are available online and some require local digital identity or registration.",

  "South Korea":
    "Some services and applications may require Korean-language access or Korean identification.",

  "Türkiye":
    "Many public services are available through the Türkiye e-Government Gateway.",
};

// ============================================================
// BUILD ONE SERVICE
// ============================================================

function buildService(country, category) {
  const countrySource = countrySources[country];

  const specialist = specialistLinks[country]?.[category];

  const source = specialist || countrySource;

  const sourceType = specialist
    ? "Country-specific official source"
    : "Government / general official source";

  const countryNote =
    countryNotes[country] ||
    `Check the official ${country} government source for current requirements, procedures, fees and contact information.`;

  const mapQuery = encodeURIComponent(
    `${source.name}, ${country}`
  );

  const mapUrl =
    `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

  return {
    title: category,

    country: country,

    category: category,

    description:
      `${categoryInformation[category]} ` +
      `Sanolines provides information and directs visitors to the relevant official source for ${country}.`,

    information: [
      categoryInformation[category],
      `This section provides useful information about ${category.toLowerCase()} in ${country}.`,
      countryNote,
      "Requirements, fees, opening times and procedures may change. Always confirm current information with the original organisation.",
    ],

    usefulInformation: countryNote,

    authority: source.name,

    sourceType: sourceType,

    officialWebsite: source.url,

    websiteButton: {
      label: "Visit Official Website",
      url: source.url,
    },

    mapButton: {
      label: "View on Map",
      url: mapUrl,
    },

    links: [
      {
        name: source.name,
        url: source.url,
        official: true,
        sourceType: sourceType,
      },
    ],
  };
}

// ============================================================
// BUILD ALL COUNTRIES AND SERVICES
// ============================================================

const asiaServices = {};

asiaCountries.forEach((country) => {
  asiaServices[country] = {};

  serviceCategories.forEach((category) => {
    asiaServices[country][category] =
      buildService(country, category);
  });
});

// ============================================================
// VALIDATION
// ============================================================

const totalCountries = Object.keys(asiaServices).length;

const totalCategories = serviceCategories.length;

const totalServices =
  totalCountries * totalCategories;

console.log(
  `Sanolines Asia database: ${totalCountries} countries × ${totalCategories} categories = ${totalServices} services`
);

// ============================================================
// EXPORTS
// ============================================================

export default asiaServices;

export {
  asiaServices,
  serviceCategories,
  asiaCountries,
  categoryInformation,
  countrySources,
  specialistLinks,
};

export const serviceData = asiaServices;

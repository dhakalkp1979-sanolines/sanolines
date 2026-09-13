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
// BUILD ONE SERVICE
// ============================================================

/*
  SANOLINES SERVICE BUILDER

  Each country keeps the same 20 service categories,
  but the service information is generated from:

  1. Country-specific specialist source, when available
  2. Country government source, when a specialist source is not available
  3. Country-specific notes
  4. Service-specific information
  5. Country + service map location

  The structure is designed so detailed information can be
  added country-by-country without changing ServicePage.jsx.
*/

// ============================================================
// SERVICE-SPECIFIC INFORMATION
// ============================================================

const serviceInformation = {
  "Government & Official Services": {
    purpose:
      "Government departments, public administration, official forms, applications and public information.",

    access:
      "Use the official government portal or the responsible government department for applications, forms and public services.",

    check:
      "Check the official authority for current procedures, required documents, fees, eligibility and service locations.",
  },

  "Immigration & Visa": {
    purpose:
      "Visa applications, residence permits, immigration procedures, citizenship, passports and entry requirements.",

    access:
      "Use the country's official immigration authority, embassy, consulate or government immigration portal.",

    check:
      "Visa categories, application procedures, fees and document requirements depend on nationality and immigration status.",
  },

  "Jobs & Employment": {
    purpose:
      "Employment services, job vacancies, labour information, employment offices and worker support.",

    access:
      "Use the official employment authority, public employment service or government-supported job portal.",

    check:
      "Work permits, employment rights, registration requirements and job-search procedures may differ by country and status.",
  },

  "Money & Banking": {
    purpose:
      "Banking, financial services, payments, accounts, financial regulation and official financial information.",

    access:
      "Use the country's central bank, financial regulator or licensed financial institution for current information.",

    check:
      "Banking requirements, identification rules, fees and financial regulations vary by country.",
  },

  Taxes: {
    purpose:
      "Tax registration, tax filing, payments, taxpayer information and official tax guidance.",

    access:
      "Use the official national tax authority or government tax portal.",

    check:
      "Tax rules, deadlines, rates, registration requirements and filing procedures can change.",
  },

  Healthcare: {
    purpose:
      "Public healthcare, hospitals, clinics, health authorities, medical services and health information.",

    access:
      "Use the national health authority, public hospital system or official health service information.",

    check:
      "Healthcare eligibility, fees, insurance requirements, appointments and emergency procedures vary by country.",
  },

  Education: {
    purpose:
      "Schools, universities, vocational education, training, scholarships and education authorities.",

    access:
      "Use the official education ministry, education authority, university or recognised education institution.",

    check:
      "Admission requirements, tuition fees, scholarships and recognition rules vary by institution and country.",
  },

  "Transport & Driving": {
    purpose:
      "Driving licences, vehicle registration, road rules, public transport and transport authorities.",

    access:
      "Use the official transport authority, driving-licence authority or government transport portal.",

    check:
      "Licence requirements, vehicle rules, fees and procedures differ between countries.",
  },

  "Emergency Services": {
    purpose:
      "Police, ambulance, fire and other urgent emergency services.",

    access:
      "Use the official emergency telephone numbers and emergency service organisations for the country.",

    check:
      "Emergency numbers differ by country. Confirm the correct number from an official source before travelling.",
  },

  Travel: {
    purpose:
      "Tourism information, airports, entry requirements, travel guidance and official travel resources.",

    access:
      "Use the country's official tourism authority, government travel information and airport authorities.",

    check:
      "Entry requirements, visa rules, travel restrictions and local requirements can change.",
  },

  Housing: {
    purpose:
      "Renting, housing authorities, social housing, tenant information and accommodation support.",

    access:
      "Use the relevant housing authority, local government or recognised housing support organisation.",

    check:
      "Rental rules, tenant rights, deposits, registration and social-housing eligibility depend on the country and location.",
  },

  "Useful Contacts": {
    purpose:
      "Important government departments, public organisations, helplines and useful official contacts.",

    access:
      "Use the official government directory or responsible public organisation for current contact information.",

    check:
      "Telephone numbers, addresses, opening hours and responsible departments should be confirmed before contacting an organisation.",
  },

  "Legal Aid & Free Lawyers": {
    purpose:
      "Legal aid, access to justice, legal assistance and official legal resources.",

    access:
      "Use the country's official legal-aid authority, court system or recognised legal assistance organisation.",

    check:
      "Eligibility for free or subsidised legal assistance depends on the country's rules and the applicant's circumstances.",
  },

  "Migrant & Refugee Support": {
    purpose:
      "Support and information for migrants, refugees, asylum seekers, newcomers and displaced people.",

    access:
      "Use official migration authorities, recognised international organisations and established local support organisations.",

    check:
      "Immigration and protection procedures vary significantly by country and individual status.",
  },

  "Associations & Community Help": {
    purpose:
      "Community organisations, associations, charities and local groups that may provide information or practical assistance.",

    access:
      "Look for recognised community organisations, charities, associations and local support groups.",

    check:
      "Services vary by organisation and location. Confirm eligibility, availability and contact details directly.",
  },

  "Social Security & Benefits": {
    purpose:
      "Pensions, unemployment support, social insurance, family benefits and other public assistance.",

    access:
      "Use the country's official social-security authority or relevant government benefits service.",

    check:
      "Eligibility, contributions, benefit amounts and application procedures depend on national rules and personal circumstances.",
  },

  "Family & Children Support": {
    purpose:
      "Family services, childcare, children's services, parental support and family-related public services.",

    access:
      "Use the relevant government family, children, social-services or education authority.",

    check:
      "Eligibility and available support vary according to family circumstances, age, residence and local rules.",
  },

  "Consumer Protection": {
    purpose:
      "Consumer rights, complaints, refunds, unfair business practices and consumer protection.",

    access:
      "Use the official consumer protection authority or recognised consumer assistance service.",

    check:
      "Complaint procedures, refund rights and consumer protections depend on national law and the type of purchase.",
  },

  "Disability & Accessibility Support": {
    purpose:
      "Disability services, accessibility, disability benefits, employment support and disability organisations.",

    access:
      "Use the country's responsible disability, social-security, health or employment authority.",

    check:
      "Disability assessment, benefits, accessibility rights and support services vary by country.",
  },

  "Food, Shelter & Basic Assistance": {
    purpose:
      "Food assistance, emergency accommodation, shelters, charities and essential community support.",

    access:
      "Use local government social services, recognised charities, shelters and community organisations.",

    check:
      "Availability and eligibility vary by location, organisation and individual circumstances.",
  },
};

// ============================================================
// COUNTRY-SPECIFIC SERVICE NOTES
// ============================================================

/*
  These notes are intentionally separate from the main service
  builder.

  This means we can add detailed information for a country
  without changing the rest of the database.

  Example:

  countryServiceNotes.Nepal.Healthcare

  countryServiceNotes.India.Taxes

  countryServiceNotes.Japan.Immigration
*/

const countryServiceNotes = {
  Nepal: {
    "Government & Official Services":
      "Nepal's official government portal provides access to national government information and links to public services and government institutions.",

    "Immigration & Visa":
      "For immigration and visa matters, visitors should use Nepal's official immigration authority and the relevant embassy or consular information for their nationality.",

    "Jobs & Employment":
      "Employment information in Nepal may involve government labour authorities, public employment services and labour-related offices.",

    "Money & Banking":
      "Banking and monetary information should be checked with Nepal Rastra Bank and licensed financial institutions.",

    Taxes:
      "Tax registration, filing and tax-related procedures should be confirmed with Nepal's official tax authority.",

    Healthcare:
      "Healthcare information in Nepal may include government hospitals, health centres, specialist facilities and other recognised healthcare providers.",

    Education:
      "Education information should be checked with the relevant Nepalese education authorities, universities, schools and recognised training institutions.",

    "Transport & Driving":
      "Driving licences, vehicle registration and road-related services should be confirmed with Nepal's responsible transport authorities.",

    "Emergency Services":
      "For emergencies in Nepal, visitors should use the current emergency numbers published by official authorities.",

    Travel:
      "Travel information should be checked with Nepal's official tourism and government authorities, especially for entry and travel requirements.",

    Housing:
      "Housing and rental matters may involve local authorities, landlords, housing organisations and relevant public services.",

    "Useful Contacts":
      "Use Nepal's official government portal to identify the appropriate department or public organisation for a particular service.",

    "Legal Aid & Free Lawyers":
      "Legal assistance should be sought through recognised legal-aid organisations, courts and official justice-related services.",

    "Migrant & Refugee Support":
      "Migrants, refugees and other displaced people should use recognised government, humanitarian and support organisations.",

    "Associations & Community Help":
      "Community support may be available through recognised associations, charities, community organisations and local groups.",

    "Social Security & Benefits":
      "Social protection, pensions and public assistance should be checked with the relevant Nepalese government authority.",

    "Family & Children Support":
      "Family and child-related services may involve government social services, education authorities and recognised child-support organisations.",

    "Consumer Protection":
      "Consumer complaints and consumer-rights matters should be directed to the responsible Nepalese authority or recognised consumer organisation.",

    "Disability & Accessibility Support":
      "Disability-related benefits, accessibility and support should be checked with the responsible Nepalese social and government authorities.",

    "Food, Shelter & Basic Assistance":
      "People requiring basic assistance should check local government social services and recognised humanitarian or community organisations.",
  },
};

// ============================================================
// GET COUNTRY-SPECIFIC INFORMATION
// ============================================================

function getCountryServiceNote(country, category) {
  return (
    countryServiceNotes[country]?.[category] ||
    `For ${category.toLowerCase()} in ${country}, use the official authority listed below and confirm the current procedures, eligibility, documents, fees and contact information directly with that organisation.`
  );
}

// ============================================================
// BUILD MAP URL
// ============================================================

function buildMapUrl(sourceName, country) {
  const mapQuery = encodeURIComponent(
    `${sourceName}, ${country}`
  );

  return `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;
}

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

  const categoryInfo =
    serviceInformation[category] || {
      purpose:
        `${category} information and services for ${country}.`,

      access:
        `Use the responsible official authority in ${country}.`,

      check:
        "Always confirm current requirements directly with the original organisation.",
    };

  const countrySpecificInformation =
    getCountryServiceNote(country, category);

  const mapUrl = buildMapUrl(source.name, country);

  return {
    title: category,

    country: country,

    category: category,

    /*
      Main description shown by ServicePage.jsx
    */
    description:
      countrySpecificInformation,

    /*
      Four information points.
      ServicePage.jsx can display these as a list.
    */
    information: [
      countrySpecificInformation,

      categoryInfo.purpose,

      categoryInfo.access,

      categoryInfo.check,
    ],

    /*
      Main useful-information field.
    */
    usefulInformation:
      countrySpecificInformation,

    /*
      Official organisation responsible for this service.
    */
    authority: source.name,

    sourceType: sourceType,

    /*
      Official website.
    */
    officialWebsite: source.url,

    /*
      Website button.
    */
    websiteButton: {
      label: "Visit Official Website",
      url: source.url,
    },

    /*
      Map button is generated specifically from:
      ORGANISATION + COUNTRY
    */
    mapButton: {
      label: "View on Map",
      url: mapUrl,
    },

    /*
      Source information.
    */
    links: [
      {
        name: source.name,
        url: source.url,
        official: true,
        sourceType: sourceType,
      },
    ],

    /*
      Extra structured information for future ServicePage
      improvements.
    */
    serviceDetails: {
      purpose: categoryInfo.purpose,

      access: categoryInfo.access,

      importantNote: categoryInfo.check,

      countrySpecific: countrySpecificInformation,
    },

    /*
      Sanolines disclaimer.
    */
    sanolinesNotice:
      "Sanolines is an information-sharing directory. Sanolines does not directly provide government, legal, medical, immigration, employment, housing or other listed services. Visitors should contact the relevant organisation directly using the official information provided.",
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
// DATABASE VALIDATION
// ============================================================

const totalCountries =
  Object.keys(asiaServices).length;

const totalCategories =
  serviceCategories.length;

const totalServices =
  totalCountries * totalCategories;

// Count services that contain website information
const servicesWithWebsite = Object.values(
  asiaServices
).reduce((countryTotal, countryServices) => {
  return (
    countryTotal +
    Object.values(countryServices).filter(
      (service) =>
        service.officialWebsite &&
        service.officialWebsite.trim() !== ""
    ).length
  );
}, 0);

// Count services that contain map information
const servicesWithMap = Object.values(
  asiaServices
).reduce((countryTotal, countryServices) => {
  return (
    countryTotal +
    Object.values(countryServices).filter(
      (service) =>
        service.mapButton &&
        service.mapButton.url
    ).length
  );
}, 0);

console.log(
  `Sanolines Asia database: ${totalCountries} countries × ${totalCategories} categories = ${totalServices} services`
);

console.log(
  `Services with official website: ${servicesWithWebsite}/${totalServices}`
);

console.log(
  `Services with map: ${servicesWithMap}/${totalServices}`
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
  serviceInformation,
  countryServiceNotes,
};

export const serviceData = asiaServices;

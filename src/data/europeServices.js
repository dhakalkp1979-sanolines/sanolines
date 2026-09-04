const createCountry = ({
  government,
  immigration,
  jobs,
  banking,
  taxes,
  healthcare,
  education,
  transport,
  emergency,
  travel,
  housing,
  contacts,
}) => ({
  "Government & Official Services": {
    description: government.description,
    links: [
      {
        name: government.name,
        url: government.url,
        official: true,
      },
    ],
  },

  "Immigration & Visa": {
    description: immigration.description,
    links: [
      {
        name: immigration.name,
        url: immigration.url,
        official: true,
      },
    ],
  },

  "Jobs & Employment": {
    description: jobs.description,
    links: [
      {
        name: jobs.name,
        url: jobs.url,
        official: true,
      },
    ],
  },

  "Money & Banking": {
    description: banking.description,
    links: [
      {
        name: banking.name,
        url: banking.url,
        official: true,
      },
    ],
  },

  Taxes: {
    description: taxes.description,
    links: [
      {
        name: taxes.name,
        url: taxes.url,
        official: true,
      },
    ],
  },

  Healthcare: {
    description: healthcare.description,
    links: [
      {
        name: healthcare.name,
        url: healthcare.url,
        official: true,
      },
    ],
  },

  Education: {
    description: education.description,
    links: [
      {
        name: education.name,
        url: education.url,
        official: true,
      },
    ],
  },

  "Transport & Driving": {
    description: transport.description,
    links: [
      {
        name: transport.name,
        url: transport.url,
        official: true,
      },
    ],
  },

  "Emergency Services": {
    description: emergency.description,
    links: [
      {
        name: emergency.name,
        url: emergency.url,
        official: true,
      },
    ],
  },

  Travel: {
    description: travel.description,
    links: [
      {
        name: travel.name,
        url: travel.url,
        official: true,
      },
    ],
  },

  Housing: {
    description: housing.description,
    links: [
      {
        name: housing.name,
        url: housing.url,
        official: true,
      },
    ],
  },

  "Useful Contacts": {
    description: contacts.description,
    links: [
      {
        name: contacts.name,
        url: contacts.url,
        official: true,
      },
    ],
  },

  "Calculators & Tools": {
    description:
      "Useful Sanolines calculators and tools for everyday information.",
    links: [
      {
        name: "Sanolines Calculators",
        url: "./",
        official: false,
      },
    ],
  },
});

const countryServices = {
  Portugal: createCountry({
    government: {
      name: "Portugal Government",
      url: "https://www.gov.pt/",
      description: "Find Portuguese public services and official government procedures.",
    },
    immigration: {
      name: "AIMA",
      url: "https://aima.gov.pt/",
      description: "Find official information about immigration and residence in Portugal.",
    },
    jobs: {
      name: "IEFP",
      url: "https://www.iefp.pt/",
      description: "Find jobs, employment services and training in Portugal.",
    },
    banking: {
      name: "Banco de Portugal",
      url: "https://www.bportugal.pt/",
      description: "Find official banking and financial information in Portugal.",
    },
    taxes: {
      name: "Portal das Finanças",
      url: "https://www.portaldasfinancas.gov.pt/",
      description: "Find Portuguese tax information and services.",
    },
    healthcare: {
      name: "SNS",
      url: "https://www.sns.gov.pt/",
      description: "Find Portuguese public healthcare information and services.",
    },
    education: {
      name: "DGES",
      url: "https://www.dges.gov.pt/",
      description: "Find official Portuguese education and higher education information.",
    },
    transport: {
      name: "IMT",
      url: "https://www.imt-ip.pt/",
      description: "Find Portuguese driving and transport information.",
    },
    emergency: {
      name: "112 — Emergency Number",
      url: "https://www.gov.pt/servicos/ligar-para-o-numero-de-emergencia-em-portugal",
      description: "Important emergency information for Portugal.",
    },
    travel: {
      name: "Visit Portugal",
      url: "https://www.visitportugal.com/",
      description: "Official tourism information for Portugal.",
    },
    housing: {
      name: "Portal da Habitação",
      url: "https://www.portaldahabitacao.pt/",
      description: "Find Portuguese housing information and resources.",
    },
    contacts: {
      name: "Portugal Government",
      url: "https://www.gov.pt/",
      description: "Find official Portuguese public-service contacts.",
    },
  }),

  Spain: createCountry({
    government: {
      name: "Administración del Estado",
      url: "https://administracion.gob.es/",
      description: "Find Spanish public services and official government procedures.",
    },
    immigration: {
      name: "Ministry of Inclusion",
      url: "https://www.inclusion.gob.es/",
      description: "Find Spanish immigration and residence information.",
    },
    jobs: {
      name: "SEPE",
      url: "https://www.sepe.es/",
      description: "Find jobs and employment services in Spain.",
    },
    banking: {
      name: "Banco de España",
      url: "https://www.bde.es/",
      description: "Find official banking information in Spain.",
    },
    taxes: {
      name: "Agencia Tributaria",
      url: "https://sede.agenciatributaria.gob.es/",
      description: "Find Spanish tax information and services.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://www.sanidad.gob.es/",
      description: "Find Spanish healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.educacionfpydeportes.gob.es/",
      description: "Find Spanish education information.",
    },
    transport: {
      name: "DGT",
      url: "https://www.dgt.es/",
      description: "Find Spanish driving and road transport information.",
    },
    emergency: {
      name: "112 — Emergency Number",
      url: "https://administracion.gob.es/pag_Home/en/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/asistencia-sanitaria/numeros-urgencia",
      description: "Important emergency information for Spain.",
    },
    travel: {
      name: "Spain Travel",
      url: "https://www.spain.info/",
      description: "Official tourism information for Spain.",
    },
    housing: {
      name: "Ministry of Housing",
      url: "https://www.mivau.gob.es/",
      description: "Find Spanish housing information.",
    },
    contacts: {
      name: "Spanish Government",
      url: "https://administracion.gob.es/",
      description: "Find official Spanish government contacts.",
    },
  }),

  France: createCountry({
    government: {
      name: "Service-Public.fr",
      url: "https://www.service-public.fr/",
      description: "Find French public services and administrative information.",
    },
    immigration: {
      name: "France-Visas",
      url: "https://www.france-visas.gouv.fr/",
      description: "Find official French visa and immigration information.",
    },
    jobs: {
      name: "France Travail",
      url: "https://www.francetravail.fr/",
      description: "Find jobs and employment services in France.",
    },
    banking: {
      name: "Banque de France",
      url: "https://www.banque-france.fr/",
      description: "Find official French banking information.",
    },
    taxes: {
      name: "Impots.gouv.fr",
      url: "https://www.impots.gouv.fr/",
      description: "Find French tax information and services.",
    },
    healthcare: {
      name: "Assurance Maladie",
      url: "https://www.ameli.fr/",
      description: "Find French health insurance and healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.education.gouv.fr/",
      description: "Find official French education information.",
    },
    transport: {
      name: "Service-Public Driving",
      url: "https://www.service-public.fr/particuliers/vosdroits/N530",
      description: "Find French driving and transport information.",
    },
    emergency: {
      name: "Emergency Numbers",
      url: "https://www.service-public.fr/particuliers/vosdroits/F33954",
      description: "Important emergency information for France.",
    },
    travel: {
      name: "France Tourism",
      url: "https://www.france.fr/",
      description: "Official tourism information for France.",
    },
    housing: {
      name: "Service-Public Housing",
      url: "https://www.service-public.fr/particuliers/vosdroits/N19808",
      description: "Find French housing information.",
    },
    contacts: {
      name: "France Services",
      url: "https://www.france-services.gouv.fr/",
      description: "Find French public-service assistance.",
    },
  }),

  Germany: createCountry({
    government: {
      name: "Federal Government",
      url: "https://www.bundesregierung.de/",
      description: "Find German public services and government information.",
    },
    immigration: {
      name: "Make it in Germany",
      url: "https://www.make-it-in-germany.com/",
      description: "Find German visa, immigration and residence information.",
    },
    jobs: {
      name: "Federal Employment Agency",
      url: "https://www.arbeitsagentur.de/",
      description: "Find jobs and employment services in Germany.",
    },
    banking: {
      name: "Deutsche Bundesbank",
      url: "https://www.bundesbank.de/",
      description: "Find official German banking information.",
    },
    taxes: {
      name: "ELSTER",
      url: "https://www.elster.de/",
      description: "Find German tax services.",
    },
    healthcare: {
      name: "Federal Ministry of Health",
      url: "https://www.bundesgesundheitsministerium.de/",
      description: "Find German healthcare information.",
    },
    education: {
      name: "Federal Ministry of Education",
      url: "https://www.bmbf.de/",
      description: "Find German education information.",
    },
    transport: {
      name: "Federal Transport Ministry",
      url: "https://bmdv.bund.de/",
      description: "Find German transport information.",
    },
    emergency: {
      name: "112 — Emergency Number",
      url: "https://www.bundesregierung.de/",
      description: "Important emergency information for Germany.",
    },
    travel: {
      name: "Germany Travel",
      url: "https://www.germany.travel/",
      description: "Official tourism information for Germany.",
    },
    housing: {
      name: "Federal Housing Ministry",
      url: "https://www.bmwsb.bund.de/",
      description: "Find German housing information.",
    },
    contacts: {
      name: "Federal Portal",
      url: "https://verwaltung.bund.de/",
      description: "Find German public-service contacts.",
    },
  }),

  Greece: createCountry({
    government: {
      name: "Greek Government",
      url: "https://www.gov.gr/",
      description: "Find Greek public services and government information.",
    },
    immigration: {
      name: "Ministry of Migration and Asylum",
      url: "https://migration.gov.gr/",
      description: "Find Greek immigration and residence information.",
    },
    jobs: {
      name: "DYPA",
      url: "https://www.dypa.gov.gr/",
      description: "Find jobs and employment services in Greece.",
    },
    banking: {
      name: "Bank of Greece",
      url: "https://www.bankofgreece.gr/",
      description: "Find official banking information in Greece.",
    },
    taxes: {
      name: "AADE",
      url: "https://www.aade.gr/",
      description: "Find Greek tax information and services.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://www.moh.gov.gr/",
      description: "Find Greek healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.minedu.gov.gr/",
      description: "Find Greek education information.",
    },
    transport: {
      name: "Ministry of Infrastructure and Transport",
      url: "https://www.yme.gr/",
      description: "Find Greek transport information.",
    },
    emergency: {
      name: "112 — Emergency Number",
      url: "https://civilprotection.gov.gr/",
      description: "Important emergency information for Greece.",
    },
    travel: {
      name: "Visit Greece",
      url: "https://visitgreece.gr/",
      description: "Official tourism information for Greece.",
    },
    housing: {
      name: "Greek Government",
      url: "https://www.gov.gr/",
      description: "Find Greek housing and public-service information.",
    },
    contacts: {
      name: "Greek Government",
      url: "https://www.gov.gr/",
      description: "Find official Greek public-service contacts.",
    },
  }),

  Italy: createCountry({
    government: {
      name: "Italian Government",
      url: "https://www.gov.it/",
      description: "Find Italian public services and government information.",
    },
    immigration: {
      name: "Ministry of Interior",
      url: "https://www.interno.gov.it/",
      description: "Find Italian immigration and residence information.",
    },
    jobs: {
      name: "Ministry of Labour",
      url: "https://www.lavoro.gov.it/",
      description: "Find jobs and employment information in Italy.",
    },
    banking: {
      name: "Banca d'Italia",
      url: "https://www.bancaditalia.it/",
      description: "Find official banking information in Italy.",
    },
    taxes: {
      name: "Agenzia delle Entrate",
      url: "https://www.agenziaentrate.gov.it/",
      description: "Find Italian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://www.salute.gov.it/",
      description: "Find Italian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.mim.gov.it/",
      description: "Find Italian education information.",
    },
    transport: {
      name: "Ministry of Infrastructure and Transport",
      url: "https://www.mit.gov.it/",
      description: "Find Italian transport information.",
    },
    emergency: {
      name: "112 — Emergency Number",
      url: "https://www.gov.it/",
      description: "Important emergency information for Italy.",
    },
    travel: {
      name: "Italia.it",
      url: "https://www.italia.it/",
      description: "Official tourism information for Italy.",
    },
    housing: {
      name: "Italian Government",
      url: "https://www.gov.it/",
      description: "Find Italian housing information.",
    },
    contacts: {
      name: "Italian Government",
      url: "https://www.gov.it/",
      description: "Find official Italian contacts.",
    },
  }),

  Ireland: createCountry({
    government: {
      name: "Citizens Information",
      url: "https://www.citizensinformation.ie/",
      description: "Find Irish public services and government information.",
    },
    immigration: {
      name: "Immigration Service Delivery",
      url: "https://www.irishimmigration.ie/",
      description: "Find Irish immigration and residence information.",
    },
    jobs: {
      name: "Intreo",
      url: "https://www.gov.ie/en/service/5c7e3-intreo/",
      description: "Find employment services in Ireland.",
    },
    banking: {
      name: "Central Bank of Ireland",
      url: "https://www.centralbank.ie/",
      description: "Find official Irish banking information.",
    },
    taxes: {
      name: "Revenue",
      url: "https://www.revenue.ie/",
      description: "Find Irish tax information.",
    },
    healthcare: {
      name: "HSE",
      url: "https://www2.hse.ie/",
      description: "Find Irish healthcare information.",
    },
    education: {
      name: "Department of Education",
      url: "https://www.gov.ie/en/organisation/department-of-education/",
      description: "Find Irish education information.",
    },
    transport: {
      name: "Road Safety Authority",
      url: "https://www.rsa.ie/",
      description: "Find Irish driving and road safety information.",
    },
    emergency: {
      name: "112 / 999 Emergency",
      url: "https://www.gov.ie/",
      description: "Important emergency information for Ireland.",
    },
    travel: {
      name: "Discover Ireland",
      url: "https://www.discoverireland.ie/",
      description: "Official tourism information for Ireland.",
    },
    housing: {
      name: "Housing for All",
      url: "https://www.gov.ie/en/campaigns/9a7f7-housing-for-all/",
      description: "Find Irish housing information.",
    },
    contacts: {
      name: "Citizens Information",
      url: "https://www.citizensinformation.ie/",
      description: "Find Irish public-service contacts.",
    },
  }),

  Netherlands: createCountry({
    government: {
      name: "Government.nl",
      url: "https://www.government.nl/",
      description: "Find Dutch public services and government information.",
    },
    immigration: {
      name: "IND",
      url: "https://ind.nl/",
      description: "Find Dutch immigration and residence information.",
    },
    jobs: {
      name: "UWV",
      url: "https://www.uwv.nl/",
      description: "Find jobs and employment services in the Netherlands.",
    },
    banking: {
      name: "De Nederlandsche Bank",
      url: "https://www.dnb.nl/",
      description: "Find official Dutch banking information.",
    },
    taxes: {
      name: "Tax Administration",
      url: "https://www.belastingdienst.nl/",
      description: "Find Dutch tax information.",
    },
    healthcare: {
      name: "Government Health",
      url: "https://www.government.nl/topics/health",
      description: "Find Dutch healthcare information.",
    },
    education: {
      name: "Government Education",
      url: "https://www.government.nl/topics/education",
      description: "Find Dutch education information.",
    },
    transport: {
      name: "RDW",
      url: "https://www.rdw.nl/",
      description: "Find Dutch vehicle and driving information.",
    },
    emergency: {
      name: "112 — Emergency Number",
      url: "https://www.government.nl/topics/emergency-services",
      description: "Important emergency information for the Netherlands.",
    },
    travel: {
      name: "Netherlands Board of Tourism",
      url: "https://www.holland.com/",
      description: "Tourism information for the Netherlands.",
    },
    housing: {
      name: "Government Housing",
      url: "https://www.government.nl/topics/housing",
      description: "Find Dutch housing information.",
    },
    contacts: {
      name: "Government.nl",
      url: "https://www.government.nl/",
      description: "Find official Dutch contacts.",
    },
  }),

  Belgium: createCountry({
    government: {
      name: "Belgium.be",
      url: "https://www.belgium.be/",
      description: "Find Belgian public services and government information.",
    },
    immigration: {
      name: "Immigration Office",
      url: "https://dofi.ibz.be/",
      description: "Find Belgian immigration information.",
    },
    jobs: {
      name: "Belgian Employment Services",
      url: "https://www.belgium.be/en/work",
      description: "Find employment information in Belgium.",
    },
    banking: {
      name: "National Bank of Belgium",
      url: "https://www.nbb.be/",
      description: "Find official Belgian banking information.",
    },
    taxes: {
      name: "FPS Finance",
      url: "https://finance.belgium.be/",
      description: "Find Belgian tax information.",
    },
    healthcare: {
      name: "Health Belgium",
      url: "https://www.health.belgium.be/",
      description: "Find Belgian healthcare information.",
    },
    education: {
      name: "Belgium.be Education",
      url: "https://www.belgium.be/en/education",
      description: "Find Belgian education information.",
    },
    transport: {
      name: "Mobility Belgium",
      url: "https://mobilit.belgium.be/",
      description: "Find Belgian transport information.",
    },
    emergency: {
      name: "112 Belgium",
      url: "https://www.health.belgium.be/en/health/taking-care-yourself/emergency-services",
      description: "Important emergency information for Belgium.",
    },
    travel: {
      name: "Visit Belgium",
      url: "https://www.visitbelgium.com/",
      description: "Tourism information for Belgium.",
    },
    housing: {
      name: "Belgium.be Housing",
      url: "https://www.belgium.be/en/housing",
      description: "Find Belgian housing information.",
    },
    contacts: {
      name: "Belgium.be",
      url: "https://www.belgium.be/",
      description: "Find official Belgian contacts.",
    },
  }),

  Austria: createCountry({
    government: {
      name: "oesterreich.gv.at",
      url: "https://www.oesterreich.gv.at/",
      description: "Find Austrian public services and government information.",
    },
    immigration: {
      name: "Migration.gv.at",
      url: "https://www.migration.gv.at/",
      description: "Find Austrian immigration information.",
    },
    jobs: {
      name: "AMS Austria",
      url: "https://www.ams.at/",
      description: "Find jobs and employment services in Austria.",
    },
    banking: {
      name: "Oesterreichische Nationalbank",
      url: "https://www.oenb.at/",
      description: "Find Austrian banking information.",
    },
    taxes: {
      name: "FinanzOnline",
      url: "https://finanzonline.bmf.gv.at/",
      description: "Find Austrian tax services.",
    },
    healthcare: {
      name: "Health Ministry Austria",
      url: "https://www.sozialministerium.at/",
      description: "Find Austrian healthcare information.",
    },
    education: {
      name: "Education Ministry Austria",
      url: "https://www.bmbwf.gv.at/",
      description: "Find Austrian education information.",
    },
    transport: {
      name: "Austria Transport",
      url: "https://www.bmk.gv.at/",
      description: "Find Austrian transport information.",
    },
    emergency: {
      name: "112 — Emergency Number",
      url: "https://www.oesterreich.gv.at/",
      description: "Important emergency information for Austria.",
    },
    travel: {
      name: "Austria.info",
      url: "https://www.austria.info/",
      description: "Official tourism information for Austria.",
    },
    housing: {
      name: "oesterreich.gv.at Housing",
      url: "https://www.oesterreich.gv.at/",
      description: "Find Austrian housing information.",
    },
    contacts: {
      name: "oesterreich.gv.at",
      url: "https://www.oesterreich.gv.at/",
      description: "Find official Austrian contacts.",
    },
  }),

  Denmark: createCountry({
    government: {
      name: "Life in Denmark",
      url: "https://lifeindenmark.borger.dk/",
      description: "Find Danish public services and government information.",
    },
    immigration: {
      name: "New to Denmark",
      url: "https://www.nyidanmark.dk/",
      description: "Find Danish immigration information.",
    },
    jobs: {
      name: "Workindenmark",
      url: "https://www.workindenmark.dk/",
      description: "Find jobs and employment services in Denmark.",
    },
    banking: {
      name: "Danmarks Nationalbank",
      url: "https://www.nationalbanken.dk/",
      description: "Find Danish banking information.",
    },
    taxes: {
      name: "Skat",
      url: "https://skat.dk/",
      description: "Find Danish tax information.",
    },
    healthcare: {
      name: "Danish Health Authority",
      url: "https://www.sst.dk/",
      description: "Find Danish healthcare information.",
    },
    education: {
      name: "Education Denmark",
      url: "https://www.uvm.dk/",
      description: "Find Danish education information.",
    },
    transport: {
      name: "Danish Road Directorate",
      url: "https://www.vejdirektoratet.dk/",
      description: "Find Danish road and transport information.",
    },
    emergency: {
      name: "112 Denmark",
      url: "https://lifeindenmark.borger.dk/",
      description: "Important emergency information for Denmark.",
    },
    travel: {
      name: "Visit Denmark",
      url: "https://www.visitdenmark.com/",
      description: "Official tourism information for Denmark.",
    },
    housing: {
      name: "Life in Denmark Housing",
      url: "https://lifeindenmark.borger.dk/",
      description: "Find Danish housing information.",
    },
    contacts: {
      name: "Life in Denmark",
      url: "https://lifeindenmark.borger.dk/",
      description: "Find official Danish contacts.",
    },
  }),

  Sweden: createCountry({
    government: {
      name: "Sweden.se",
      url: "https://sweden.se/",
      description: "Find Swedish public information and government resources.",
    },
    immigration: {
      name: "Swedish Migration Agency",
      url: "https://www.migrationsverket.se/",
      description: "Find Swedish immigration and residence information.",
    },
    jobs: {
      name: "Arbetsförmedlingen",
      url: "https://arbetsformedlingen.se/",
      description: "Find jobs and employment services in Sweden.",
    },
    banking: {
      name: "Sveriges Riksbank",
      url: "https://www.riksbank.se/",
      description: "Find Swedish banking information.",
    },
    taxes: {
      name: "Swedish Tax Agency",
      url: "https://www.skatteverket.se/",
      description: "Find Swedish tax information.",
    },
    healthcare: {
      name: "1177 Healthcare",
      url: "https://www.1177.se/",
      description: "Find Swedish healthcare information.",
    },
    education: {
      name: "Swedish Education Agency",
      url: "https://www.skolverket.se/",
      description: "Find Swedish education information.",
    },
    transport: {
      name: "Transportstyrelsen",
      url: "https://www.transportstyrelsen.se/",
      description: "Find Swedish driving and transport information.",
    },
    emergency: {
      name: "112 Sweden",
      url: "https://www.sosalarm.se/",
      description: "Important emergency information for Sweden.",
    },
    travel: {
      name: "Visit Sweden",
      url: "https://visitsweden.com/",
      description: "Official tourism information for Sweden.",
    },
    housing: {
      name: "Swedish Government",
      url: "https://www.government.se/",
      description: "Find Swedish housing information.",
    },
    contacts: {
      name: "Swedish Government",
      url: "https://www.government.se/",
      description: "Find official Swedish contacts.",
    },
  }),

  Finland: createCountry({
    government: {
      name: "Suomi.fi",
      url: "https://www.suomi.fi/",
      description: "Find Finnish public services and government information.",
    },
    immigration: {
      name: "Finnish Immigration Service",
      url: "https://migri.fi/",
      description: "Find Finnish immigration and residence information.",
    },
    jobs: {
      name: "Job Market Finland",
      url: "https://www.jobmarketfinland.fi/",
      description: "Find jobs and employment services in Finland.",
    },
    banking: {
      name: "Bank of Finland",
      url: "https://www.suomenpankki.fi/",
      description: "Find Finnish banking information.",
    },
    taxes: {
      name: "Finnish Tax Administration",
      url: "https://www.vero.fi/",
      description: "Find Finnish tax information.",
    },
    healthcare: {
      name: "Finnish Institute for Health",
      url: "https://thl.fi/",
      description: "Find Finnish healthcare information.",
    },
    education: {
      name: "Finnish National Agency for Education",
      url: "https://www.oph.fi/",
      description: "Find Finnish education information.",
    },
    transport: {
      name: "Traficom",
      url: "https://www.traficom.fi/",
      description: "Find Finnish transport and driving information.",
    },
    emergency: {
      name: "112 Finland",
      url: "https://112.fi/",
      description: "Important emergency information for Finland.",
    },
    travel: {
      name: "Visit Finland",
      url: "https://www.visitfinland.com/",
      description: "Official tourism information for Finland.",
    },
    housing: {
      name: "Suomi.fi Housing",
      url: "https://www.suomi.fi/",
      description: "Find Finnish housing information.",
    },
    contacts: {
      name: "Suomi.fi",
      url: "https://www.suomi.fi/",
      description: "Find official Finnish contacts.",
    },
  }),

  Norway: createCountry({
    government: {
      name: "Norway.no",
      url: "https://www.norway.no/",
      description: "Find Norwegian public services and government information.",
    },
    immigration: {
      name: "UDI",
      url: "https://www.udi.no/",
      description: "Find Norwegian immigration information.",
    },
    jobs: {
      name: "NAV",
      url: "https://www.nav.no/",
      description: "Find jobs and employment services in Norway.",
    },
    banking: {
      name: "Norges Bank",
      url: "https://www.norges-bank.no/",
      description: "Find Norwegian banking information.",
    },
    taxes: {
      name: "Norwegian Tax Administration",
      url: "https://www.skatteetaten.no/",
      description: "Find Norwegian tax information.",
    },
    healthcare: {
      name: "Helsenorge",
      url: "https://www.helsenorge.no/",
      description: "Find Norwegian healthcare information.",
    },
    education: {
      name: "Norwegian Directorate for Education",
      url: "https://www.udir.no/",
      description: "Find Norwegian education information.",
    },
    transport: {
      name: "Norwegian Public Roads Administration",
      url: "https://www.vegvesen.no/",
      description: "Find Norwegian driving and transport information.",
    },
    emergency: {
      name: "Emergency Services Norway",
      url: "https://www.regjeringen.no/",
      description: "Important emergency information for Norway.",
    },
    travel: {
      name: "Visit Norway",
      url: "https://www.visitnorway.com/",
      description: "Official tourism information for Norway.",
    },
    housing: {
      name: "Norwegian Housing Bank",
      url: "https://www.husbanken.no/",
      description: "Find Norwegian housing information.",
    },
    contacts: {
      name: "Norway.no",
      url: "https://www.norway.no/",
      description: "Find official Norwegian contacts.",
    },
  }),

  Iceland: createCountry({
    government: {
      name: "Iceland Government",
      url: "https://www.government.is/",
      description: "Find Icelandic public services and government information.",
    },
    immigration: {
      name: "Directorate of Immigration",
      url: "https://island.is/en/o/directorate-of-immigration",
      description: "Find Icelandic immigration information.",
    },
    jobs: {
      name: "Directorate of Labour",
      url: "https://island.is/en/o/directorate-of-labour",
      description: "Find jobs and employment services in Iceland.",
    },
    banking: {
      name: "Central Bank of Iceland",
      url: "https://www.sedlabanki.is/",
      description: "Find Icelandic banking information.",
    },
    taxes: {
      name: "Directorate of Internal Revenue",
      url: "https://www.skatturinn.is/",
      description: "Find Icelandic tax information.",
    },
    healthcare: {
      name: "Directorate of Health",
      url: "https://island.is/en/o/directorate-of-health",
      description: "Find Icelandic healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.government.is/ministries/ministry-of-education-and-children/",
      description: "Find Icelandic education information.",
    },
    transport: {
      name: "Icelandic Transport Authority",
      url: "https://www.samgongustofa.is/",
      description: "Find Icelandic transport information.",
    },
    emergency: {
      name: "112 Iceland",
      url: "https://www.112.is/",
      description: "Important emergency information for Iceland.",
    },
    travel: {
      name: "Visit Iceland",
      url: "https://www.visiticeland.com/",
      description: "Official tourism information for Iceland.",
    },
    housing: {
      name: "Housing and Construction Authority",
      url: "https://www.hms.is/",
      description: "Find Icelandic housing information.",
    },
    contacts: {
      name: "Island.is",
      url: "https://island.is/",
      description: "Find official Icelandic contacts.",
    },
  }),

  Switzerland: createCountry({
    government: {
      name: "Swiss Government",
      url: "https://www.ch.ch/",
      description: "Find Swiss public services and government information.",
    },
    immigration: {
      name: "State Secretariat for Migration",
      url: "https://www.sem.admin.ch/",
      description: "Find Swiss immigration information.",
    },
    jobs: {
      name: "Job Room",
      url: "https://www.job-room.ch/",
      description: "Find jobs and employment services in Switzerland.",
    },
    banking: {
      name: "Swiss National Bank",
      url: "https://www.snb.ch/",
      description: "Find Swiss banking information.",
    },
    taxes: {
      name: "Swiss Tax Conference",
      url: "https://www.estv.admin.ch/",
      description: "Find Swiss tax information.",
    },
    healthcare: {
      name: "Federal Office of Public Health",
      url: "https://www.bag.admin.ch/",
      description: "Find Swiss healthcare information.",
    },
    education: {
      name: "State Secretariat for Education",
      url: "https://www.sbfi.admin.ch/",
      description: "Find Swiss education information.",
    },
    transport: {
      name: "Federal Roads Office",
      url: "https://www.astra.admin.ch/",
      description: "Find Swiss transport information.",
    },
    emergency: {
      name: "Swiss Emergency Services",
      url: "https://www.ch.ch/en/emergencies/",
      description: "Important emergency information for Switzerland.",
    },
    travel: {
      name: "MySwitzerland",
      url: "https://www.myswitzerland.com/",
      description: "Official tourism information for Switzerland.",
    },
    housing: {
      name: "Swiss Government",
      url: "https://www.ch.ch/",
      description: "Find Swiss housing information.",
    },
    contacts: {
      name: "Swiss Government",
      url: "https://www.ch.ch/",
      description: "Find official Swiss contacts.",
    },
  }),

  Poland: createCountry({
    government: {
      name: "Gov.pl",
      url: "https://www.gov.pl/",
      description: "Find Polish public services and government information.",
    },
    immigration: {
      name: "Office for Foreigners",
      url: "https://www.gov.pl/web/udsc-en",
      description: "Find Polish immigration information.",
    },
    jobs: {
      name: "Public Employment Services",
      url: "https://psz.praca.gov.pl/",
      description: "Find jobs and employment services in Poland.",
    },
    banking: {
      name: "National Bank of Poland",
      url: "https://nbp.pl/",
      description: "Find Polish banking information.",
    },
    taxes: {
      name: " podatki.gov.pl",
      url: "https://www.podatki.gov.pl/",
      description: "Find Polish tax information.",
    },
    healthcare: {
      name: "NFZ",
      url: "https://www.nfz.gov.pl/",
      description: "Find Polish healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.gov.pl/web/education",
      description: "Find Polish education information.",
    },
    transport: {
      name: "Motor Transport Department",
      url: "https://www.gov.pl/",
      description: "Find Polish transport information.",
    },
    emergency: {
      name: "112 Poland",
      url: "https://www.gov.pl/",
      description: "Important emergency information for Poland.",
    },
    travel: {
      name: "Poland Travel",
      url: "https://www.poland.travel/",
      description: "Official tourism information for Poland.",
    },
    housing: {
      name: "Gov.pl Housing",
      url: "https://www.gov.pl/",
      description: "Find Polish housing information.",
    },
    contacts: {
      name: "Gov.pl",
      url: "https://www.gov.pl/",
      description: "Find official Polish contacts.",
    },
  }),

  Czechia: createCountry({
    government: {
      name: "Government of Czech Republic",
      url: "https://www.gov.cz/",
      description: "Find Czech public services and government information.",
    },
    immigration: {
      name: "Ministry of Interior",
      url: "https://mv.gov.cz/",
      description: "Find Czech immigration information.",
    },
    jobs: {
      name: "Labour Office",
      url: "https://www.uradprace.cz/",
      description: "Find jobs and employment services in Czechia.",
    },
    banking: {
      name: "Czech National Bank",
      url: "https://www.cnb.cz/",
      description: "Find Czech banking information.",
    },
    taxes: {
      name: "Financial Administration",
      url: "https://www.financnisprava.cz/",
      description: "Find Czech tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://mzd.gov.cz/",
      description: "Find Czech healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://msmt.gov.cz/",
      description: "Find Czech education information.",
    },
    transport: {
      name: "Transport Ministry",
      url: "https://md.gov.cz/",
      description: "Find Czech transport information.",
    },
    emergency: {
      name: "112 Czechia",
      url: "https://www.gov.cz/",
      description: "Important emergency information for Czechia.",
    },
    travel: {
      name: "Visit Czechia",
      url: "https://www.visitczechia.com/",
      description: "Official tourism information for Czechia.",
    },
    housing: {
      name: "Government of Czech Republic",
      url: "https://www.gov.cz/",
      description: "Find Czech housing information.",
    },
    contacts: {
      name: "Gov.cz",
      url: "https://www.gov.cz/",
      description: "Find official Czech contacts.",
    },
  }),

  Hungary: createCountry({
    government: {
      name: "Hungarian Government",
      url: "https://kormany.hu/",
      description: "Find Hungarian public services and government information.",
    },
    immigration: {
      name: "National Directorate-General for Aliens Policing",
      url: "https://oif.gov.hu/",
      description: "Find Hungarian immigration information.",
    },
    jobs: {
      name: "National Employment Service",
      url: "https://nfsz.munka.hu/",
      description: "Find jobs and employment services in Hungary.",
    },
    banking: {
      name: "Magyar Nemzeti Bank",
      url: "https://www.mnb.hu/",
      description: "Find Hungarian banking information.",
    },
    taxes: {
      name: "NAV",
      url: "https://nav.gov.hu/",
      description: "Find Hungarian tax information.",
    },
    healthcare: {
      name: "National Health Insurance Fund",
      url: "https://www.neak.gov.hu/",
      description: "Find Hungarian healthcare information.",
    },
    education: {
      name: "Hungarian Education",
      url: "https://www.oktatas.hu/",
      description: "Find Hungarian education information.",
    },
    transport: {
      name: "Hungarian Transport",
      url: "https://kormany.hu/",
      description: "Find Hungarian transport information.",
    },
    emergency: {
      name: "112 Hungary",
      url: "https://www.police.hu/",
      description: "Important emergency information for Hungary.",
    },
    travel: {
      name: "Visit Hungary",
      url: "https://visithungary.com/",
      description: "Official tourism information for Hungary.",
    },
    housing: {
      name: "Hungarian Government",
      url: "https://kormany.hu/",
      description: "Find Hungarian housing information.",
    },
    contacts: {
      name: "Hungarian Government",
      url: "https://kormany.hu/",
      description: "Find official Hungarian contacts.",
    },
  }),

  Romania: createCountry({
    government: {
      name: "Romanian Government",
      url: "https://www.gov.ro/",
      description: "Find Romanian public services and government information.",
    },
    immigration: {
      name: "General Inspectorate for Immigration",
      url: "https://igi.mai.gov.ro/",
      description: "Find Romanian immigration information.",
    },
    jobs: {
      name: "ANOFM",
      url: "https://www.anofm.ro/",
      description: "Find jobs and employment services in Romania.",
    },
    banking: {
      name: "National Bank of Romania",
      url: "https://www.bnr.ro/",
      description: "Find Romanian banking information.",
    },
    taxes: {
      name: "ANAF",
      url: "https://www.anaf.ro/",
      description: "Find Romanian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://www.ms.ro/",
      description: "Find Romanian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.edu.ro/",
      description: "Find Romanian education information.",
    },
    transport: {
      name: "Romanian Road Authority",
      url: "https://www.arr.ro/",
      description: "Find Romanian transport information.",
    },
    emergency: {
      name: "112 Romania",
      url: "https://www.112.ro/",
      description: "Important emergency information for Romania.",
    },
    travel: {
      name: "Romania Travel",
      url: "https://romania.travel/",
      description: "Tourism information for Romania.",
    },
    housing: {
      name: "Romanian Government",
      url: "https://www.gov.ro/",
      description: "Find Romanian housing information.",
    },
    contacts: {
      name: "Romanian Government",
      url: "https://www.gov.ro/",
      description: "Find official Romanian contacts.",
    },
  }),

  Bulgaria: createCountry({
    government: {
      name: "Bulgarian Government",
      url: "https://www.gov.bg/",
      description: "Find Bulgarian public services and government information.",
    },
    immigration: {
      name: "Migration Directorate",
      url: "https://www.mvr.bg/",
      description: "Find Bulgarian immigration information.",
    },
    jobs: {
      name: "Employment Agency",
      url: "https://www.az.government.bg/",
      description: "Find jobs and employment services in Bulgaria.",
    },
    banking: {
      name: "Bulgarian National Bank",
      url: "https://www.bnb.bg/",
      description: "Find Bulgarian banking information.",
    },
    taxes: {
      name: "National Revenue Agency",
      url: "https://nra.bg/",
      description: "Find Bulgarian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://www.mh.government.bg/",
      description: "Find Bulgarian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.mon.bg/",
      description: "Find Bulgarian education information.",
    },
    transport: {
      name: "Road Transport Administration",
      url: "https://rta.government.bg/",
      description: "Find Bulgarian transport information.",
    },
    emergency: {
      name: "112 Bulgaria",
      url: "https://www.mvr.bg/",
      description: "Important emergency information for Bulgaria.",
    },
    travel: {
      name: "Bulgaria Travel",
      url: "https://bulgariatravel.org/",
      description: "Tourism information for Bulgaria.",
    },
    housing: {
      name: "Bulgarian Government",
      url: "https://www.gov.bg/",
      description: "Find Bulgarian housing information.",
    },
    contacts: {
      name: "Bulgarian Government",
      url: "https://www.gov.bg/",
      description: "Find official Bulgarian contacts.",
    },
  }),

  Croatia: createCountry({
    government: {
      name: "Government of Croatia",
      url: "https://gov.hr/",
      description: "Find Croatian public services and government information.",
    },
    immigration: {
      name: "Ministry of Interior",
      url: "https://mup.gov.hr/",
      description: "Find Croatian immigration information.",
    },
    jobs: {
      name: "Croatian Employment Service",
      url: "https://www.hzz.hr/",
      description: "Find jobs and employment services in Croatia.",
    },
    banking: {
      name: "Croatian National Bank",
      url: "https://www.hnb.hr/",
      description: "Find Croatian banking information.",
    },
    taxes: {
      name: "Tax Administration",
      url: "https://www.porezna-uprava.hr/",
      description: "Find Croatian tax information.",
    },
    healthcare: {
      name: "Croatian Health Insurance Fund",
      url: "https://hzzo.hr/",
      description: "Find Croatian healthcare information.",
    },
    education: {
      name: "Ministry of Science and Education",
      url: "https://mzom.gov.hr/",
      description: "Find Croatian education information.",
    },
    transport: {
      name: "Ministry of Transport",
      url: "https://mmpi.gov.hr/",
      description: "Find Croatian transport information.",
    },
    emergency: {
      name: "112 Croatia",
      url: "https://civilna-zastita.gov.hr/",
      description: "Important emergency information for Croatia.",
    },
    travel: {
      name: "Croatia.hr",
      url: "https://croatia.hr/",
      description: "Official tourism information for Croatia.",
    },
    housing: {
      name: "Croatian Government",
      url: "https://gov.hr/",
      description: "Find Croatian housing information.",
    },
    contacts: {
      name: "Government of Croatia",
      url: "https://gov.hr/",
      description: "Find official Croatian contacts.",
    },
  }),

  Slovenia: createCountry({
    government: {
      name: "GOV.SI",
      url: "https://www.gov.si/",
      description: "Find Slovenian public services and government information.",
    },
    immigration: {
      name: "Ministry of Interior",
      url: "https://www.gov.si/en/state-authorities/ministries/ministry-of-the-interior/",
      description: "Find Slovenian immigration information.",
    },
    jobs: {
      name: "Employment Service of Slovenia",
      url: "https://www.ess.gov.si/",
      description: "Find jobs and employment services in Slovenia.",
    },
    banking: {
      name: "Bank of Slovenia",
      url: "https://www.bsi.si/",
      description: "Find Slovenian banking information.",
    },
    taxes: {
      name: "Financial Administration",
      url: "https://www.fu.gov.si/",
      description: "Find Slovenian tax information.",
    },
    healthcare: {
      name: "Health Insurance Institute",
      url: "https://www.zzzs.si/",
      description: "Find Slovenian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.gov.si/en/state-authorities/ministries/ministry-of-education/",
      description: "Find Slovenian education information.",
    },
    transport: {
      name: "Slovenian Infrastructure",
      url: "https://www.gov.si/en/state-authorities/ministries/ministry-of-infrastructure/",
      description: "Find Slovenian transport information.",
    },
    emergency: {
      name: "112 Slovenia",
      url: "https://www.gov.si/",
      description: "Important emergency information for Slovenia.",
    },
    travel: {
      name: "I Feel Slovenia",
      url: "https://www.slovenia.info/",
      description: "Official tourism information for Slovenia.",
    },
    housing: {
      name: "GOV.SI Housing",
      url: "https://www.gov.si/",
      description: "Find Slovenian housing information.",
    },
    contacts: {
      name: "GOV.SI",
      url: "https://www.gov.si/",
      description: "Find official Slovenian contacts.",
    },
  }),

  Slovakia: createCountry({
    government: {
      name: "Slovakia Government",
      url: "https://www.slovensko.sk/",
      description: "Find Slovak public services and government information.",
    },
    immigration: {
      name: "Ministry of Interior",
      url: "https://www.minv.sk/",
      description: "Find Slovak immigration information.",
    },
    jobs: {
      name: "Central Office of Labour",
      url: "https://www.upsvr.gov.sk/",
      description: "Find jobs and employment services in Slovakia.",
    },
    banking: {
      name: "National Bank of Slovakia",
      url: "https://nbs.sk/",
      description: "Find Slovak banking information.",
    },
    taxes: {
      name: "Financial Administration",
      url: "https://www.financnasprava.sk/",
      description: "Find Slovak tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://health.gov.sk/",
      description: "Find Slovak healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.minedu.sk/",
      description: "Find Slovak education information.",
    },
    transport: {
      name: "Ministry of Transport",
      url: "https://www.mindop.sk/",
      description: "Find Slovak transport information.",
    },
    emergency: {
      name: "112 Slovakia",
      url: "https://www.minv.sk/",
      description: "Important emergency information for Slovakia.",
    },
    travel: {
      name: "Slovakia Travel",
      url: "https://slovakia.travel/",
      description: "Official tourism information for Slovakia.",
    },
    housing: {
      name: "Slovakia Government",
      url: "https://www.slovensko.sk/",
      description: "Find Slovak housing information.",
    },
    contacts: {
      name: "Slovensko.sk",
      url: "https://www.slovensko.sk/",
      description: "Find official Slovak contacts.",
    },
  }),

  Estonia: createCountry({
    government: {
      name: "e-Estonia / Eesti.ee",
      url: "https://www.eesti.ee/",
      description: "Find Estonian public services and government information.",
    },
    immigration: {
      name: "Police and Border Guard Board",
      url: "https://www.politsei.ee/",
      description: "Find Estonian immigration information.",
    },
    jobs: {
      name: "Estonian Unemployment Insurance Fund",
      url: "https://www.tootukassa.ee/",
      description: "Find jobs and employment services in Estonia.",
    },
    banking: {
      name: "Eesti Pank",
      url: "https://www.eestipank.ee/",
      description: "Find Estonian banking information.",
    },
    taxes: {
      name: "Tax and Customs Board",
      url: "https://www.emta.ee/",
      description: "Find Estonian tax information.",
    },
    healthcare: {
      name: "Health Board",
      url: "https://www.terviseamet.ee/",
      description: "Find Estonian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.hm.ee/",
      description: "Find Estonian education information.",
    },
    transport: {
      name: "Transport Administration",
      url: "https://www.transpordiamet.ee/",
      description: "Find Estonian transport information.",
    },
    emergency: {
      name: "112 Estonia",
      url: "https://www.112.ee/",
      description: "Important emergency information for Estonia.",
    },
    travel: {
      name: "Visit Estonia",
      url: "https://visitestonia.com/",
      description: "Official tourism information for Estonia.",
    },
    housing: {
      name: "Eesti.ee",
      url: "https://www.eesti.ee/",
      description: "Find Estonian housing information.",
    },
    contacts: {
      name: "Eesti.ee",
      url: "https://www.eesti.ee/",
      description: "Find official Estonian contacts.",
    },
  }),

  Latvia: createCountry({
    government: {
      name: "Latvija.lv",
      url: "https://latvija.gov.lv/",
      description: "Find Latvian public services and government information.",
    },
    immigration: {
      name: "Office of Citizenship and Migration Affairs",
      url: "https://www.pmlp.gov.lv/",
      description: "Find Latvian immigration information.",
    },
    jobs: {
      name: "State Employment Agency",
      url: "https://www.nva.gov.lv/",
      description: "Find jobs and employment services in Latvia.",
    },
    banking: {
      name: "Bank of Latvia",
      url: "https://www.bank.lv/",
      description: "Find Latvian banking information.",
    },
    taxes: {
      name: "State Revenue Service",
      url: "https://www.vid.gov.lv/",
      description: "Find Latvian tax information.",
    },
    healthcare: {
      name: "National Health Service",
      url: "https://www.vmnvd.gov.lv/",
      description: "Find Latvian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.izm.gov.lv/",
      description: "Find Latvian education information.",
    },
    transport: {
      name: "Road Transport Administration",
      url: "https://www.csdd.lv/",
      description: "Find Latvian transport information.",
    },
    emergency: {
      name: "112 Latvia",
      url: "https://www.vugd.gov.lv/",
      description: "Important emergency information for Latvia.",
    },
    travel: {
      name: "Latvia Travel",
      url: "https://www.latvia.travel/",
      description: "Official tourism information for Latvia.",
    },
    housing: {
      name: "Latvija.lv",
      url: "https://latvija.gov.lv/",
      description: "Find Latvian housing information.",
    },
    contacts: {
      name: "Latvija.lv",
      url: "https://latvija.gov.lv/",
      description: "Find official Latvian contacts.",
    },
  }),

  Lithuania: createCountry({
    government: {
      name: "Lithuania Government",
      url: "https://lrv.lt/",
      description: "Find Lithuanian public services and government information.",
    },
    immigration: {
      name: "Migration Department",
      url: "https://migracija.lrv.lt/",
      description: "Find Lithuanian immigration information.",
    },
    jobs: {
      name: "Employment Service",
      url: "https://uzt.lt/",
      description: "Find jobs and employment services in Lithuania.",
    },
    banking: {
      name: "Bank of Lithuania",
      url: "https://www.lb.lt/",
      description: "Find Lithuanian banking information.",
    },
    taxes: {
      name: "State Tax Inspectorate",
      url: "https://www.vmi.lt/",
      description: "Find Lithuanian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://sam.lrv.lt/",
      description: "Find Lithuanian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://smsm.lrv.lt/",
      description: "Find Lithuanian education information.",
    },
    transport: {
      name: "Regitra",
      url: "https://www.regitra.lt/",
      description: "Find Lithuanian driving information.",
    },
    emergency: {
      name: "112 Lithuania",
      url: "https://112.lt/",
      description: "Important emergency information for Lithuania.",
    },
    travel: {
      name: "Lithuania Travel",
      url: "https://lithuania.travel/",
      description: "Official tourism information for Lithuania.",
    },
    housing: {
      name: "Lithuania Government",
      url: "https://lrv.lt/",
      description: "Find Lithuanian housing information.",
    },
    contacts: {
      name: "Lithuania Government",
      url: "https://lrv.lt/",
      description: "Find official Lithuanian contacts.",
    },
  }),

  Luxembourg: createCountry({
    government: {
      name: "Guichet.lu",
      url: "https://guichet.public.lu/",
      description: "Find Luxembourg public services and government information.",
    },
    immigration: {
      name: "Immigration Luxembourg",
      url: "https://guichet.public.lu/en/citoyens/immigration.html",
      description: "Find Luxembourg immigration information.",
    },
    jobs: {
      name: "ADEM",
      url: "https://adem.public.lu/",
      description: "Find jobs and employment services in Luxembourg.",
    },
    banking: {
      name: "CSSF",
      url: "https://www.cssf.lu/",
      description: "Find official Luxembourg financial information.",
    },
    taxes: {
      name: "Tax Administration",
      url: "https://impotsdirects.public.lu/",
      description: "Find Luxembourg tax information.",
    },
    healthcare: {
      name: "Health Directorate",
      url: "https://sante.public.lu/",
      description: "Find Luxembourg healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://men.public.lu/",
      description: "Find Luxembourg education information.",
    },
    transport: {
      name: "SNCA",
      url: "https://snca.public.lu/",
      description: "Find Luxembourg driving information.",
    },
    emergency: {
      name: "112 Luxembourg",
      url: "https://112.public.lu/",
      description: "Important emergency information for Luxembourg.",
    },
    travel: {
      name: "Visit Luxembourg",
      url: "https://www.visitluxembourg.com/",
      description: "Official tourism information for Luxembourg.",
    },
    housing: {
      name: "Housing Observatory",
      url: "https://logement.public.lu/",
      description: "Find Luxembourg housing information.",
    },
    contacts: {
      name: "Guichet.lu",
      url: "https://guichet.public.lu/",
      description: "Find official Luxembourg contacts.",
    },
  }),

  Malta: createCountry({
    government: {
      name: "Servizz.gov.mt",
      url: "https://www.servizz.gov.mt/",
      description: "Find Maltese public services and government information.",
    },
    immigration: {
      name: "Identità Malta",
      url: "https://identita.gov.mt/",
      description: "Find Maltese immigration and residence information.",
    },
    jobs: {
      name: "Jobsplus",
      url: "https://jobsplus.gov.mt/",
      description: "Find jobs and employment services in Malta.",
    },
    banking: {
      name: "Central Bank of Malta",
      url: "https://www.centralbankmalta.org/",
      description: "Find Maltese banking information.",
    },
    taxes: {
      name: "Commissioner for Revenue",
      url: "https://cfr.gov.mt/",
      description: "Find Maltese tax information.",
    },
    healthcare: {
      name: "Ministry for Health",
      url: "https://health.gov.mt/",
      description: "Find Maltese healthcare information.",
    },
    education: {
      name: "Ministry for Education",
      url: "https://education.gov.mt/",
      description: "Find Maltese education information.",
    },
    transport: {
      name: "Transport Malta",
      url: "https://www.transport.gov.mt/",
      description: "Find Maltese transport and driving information.",
    },
    emergency: {
      name: "112 Malta",
      url: "https://www.gov.mt/",
      description: "Important emergency information for Malta.",
    },
    travel: {
      name: "Visit Malta",
      url: "https://www.visitmalta.com/",
      description: "Official tourism information for Malta.",
    },
    housing: {
      name: "Housing Authority Malta",
      url: "https://housingauthority.gov.mt/",
      description: "Find Maltese housing information.",
    },
    contacts: {
      name: "Servizz.gov.mt",
      url: "https://www.servizz.gov.mt/",
      description: "Find official Maltese contacts.",
    },
  }),

  Albania: createCountry({
    government: {
      name: "Albanian Government",
      url: "https://www.kryeministria.al/",
      description: "Find Albanian public services and government information.",
    },
    immigration: {
      name: "Albanian Ministry of Interior",
      url: "https://mb.gov.al/",
      description: "Find Albanian immigration information.",
    },
    jobs: {
      name: "National Employment Service",
      url: "https://www.puna.gov.al/",
      description: "Find jobs and employment services in Albania.",
    },
    banking: {
      name: "Bank of Albania",
      url: "https://www.bankofalbania.org/",
      description: "Find Albanian banking information.",
    },
    taxes: {
      name: "General Directorate of Taxes",
      url: "https://www.tatime.gov.al/",
      description: "Find Albanian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://shendetesia.gov.al/",
      description: "Find Albanian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://arsimi.gov.al/",
      description: "Find Albanian education information.",
    },
    transport: {
      name: "Albanian Transport Authority",
      url: "https://www.dpshtrr.al/",
      description: "Find Albanian driving and transport information.",
    },
    emergency: {
      name: "112 Albania",
      url: "https://www.asp.gov.al/",
      description: "Important emergency information for Albania.",
    },
    travel: {
      name: "Albania Tourism",
      url: "https://albania.al/",
      description: "Tourism information for Albania.",
    },
    housing: {
      name: "Albanian Government",
      url: "https://www.kryeministria.al/",
      description: "Find Albanian housing information.",
    },
    contacts: {
      name: "Albanian Government",
      url: "https://www.kryeministria.al/",
      description: "Find official Albanian contacts.",
    },
  }),

  Andorra: createCountry({
    government: {
      name: "Government of Andorra",
      url: "https://www.govern.ad/",
      description: "Find Andorran public services and government information.",
    },
    immigration: {
      name: "Immigration Andorra",
      url: "https://www.govern.ad/",
      description: "Find Andorran immigration information.",
    },
    jobs: {
      name: "Government Employment Services",
      url: "https://www.govern.ad/",
      description: "Find employment information in Andorra.",
    },
    banking: {
      name: "Andorra Financial Authority",
      url: "https://www.afa.ad/",
      description: "Find official financial information in Andorra.",
    },
    taxes: {
      name: "Andorra Taxes",
      url: "https://www.e-tramits.ad/",
      description: "Find Andorran tax information.",
    },
    healthcare: {
      name: "CASS",
      url: "https://www.cass.ad/",
      description: "Find Andorran healthcare information.",
    },
    education: {
      name: "Andorra Education",
      url: "https://www.govern.ad/",
      description: "Find education information in Andorra.",
    },
    transport: {
      name: "Andorra Government Transport",
      url: "https://www.govern.ad/",
      description: "Find Andorran transport information.",
    },
    emergency: {
      name: "112 Andorra",
      url: "https://www.govern.ad/",
      description: "Important emergency information for Andorra.",
    },
    travel: {
      name: "Visit Andorra",
      url: "https://visitandorra.com/",
      description: "Official tourism information for Andorra.",
    },
    housing: {
      name: "Government of Andorra",
      url: "https://www.govern.ad/",
      description: "Find Andorran housing information.",
    },
    contacts: {
      name: "Government of Andorra",
      url: "https://www.govern.ad/",
      description: "Find official Andorran contacts.",
    },
  }),

  BosniaAndHerzegovina: createCountry({
    government: {
      name: "Council of Ministers",
      url: "https://www.vijeceministara.gov.ba/",
      description: "Find official government information for Bosnia and Herzegovina.",
    },
    immigration: {
      name: "Service for Foreigners' Affairs",
      url: "https://sps.gov.ba/",
      description: "Find immigration and residence information.",
    },
    jobs: {
      name: "Employment Agency",
      url: "https://arz.gov.ba/",
      description: "Find employment information in Bosnia and Herzegovina.",
    },
    banking: {
      name: "Central Bank",
      url: "https://www.cbbh.ba/",
      description: "Find banking information.",
    },
    taxes: {
      name: "Indirect Taxation Authority",
      url: "https://www.uino.gov.ba/",
      description: "Find tax information.",
    },
    healthcare: {
      name: "Ministry of Civil Affairs",
      url: "https://www.mcp.gov.ba/",
      description: "Find healthcare information.",
    },
    education: {
      name: "Ministry of Civil Affairs",
      url: "https://www.mcp.gov.ba/",
      description: "Find education information.",
    },
    transport: {
      name: "Ministry of Communications and Transport",
      url: "https://www.mkt.gov.ba/",
      description: "Find transport information.",
    },
    emergency: {
      name: "112 Emergency",
      url: "https://www.mup.vladars.rs/",
      description: "Important emergency information.",
    },
    travel: {
      name: "Visit Bosnia and Herzegovina",
      url: "https://www.bhtourism.ba/",
      description: "Tourism information.",
    },
    housing: {
      name: "Government of Bosnia and Herzegovina",
      url: "https://www.vijeceministara.gov.ba/",
      description: "Find housing information.",
    },
    contacts: {
      name: "Council of Ministers",
      url: "https://www.vijeceministara.gov.ba/",
      description: "Find official contacts.",
    },
  }),

  Belarus: createCountry({
    government: {
      name: "Government of Belarus",
      url: "https://www.government.by/",
      description: "Find Belarusian government information.",
    },
    immigration: {
      name: "Ministry of Internal Affairs",
      url: "https://mvd.gov.by/",
      description: "Find Belarusian immigration information.",
    },
    jobs: {
      name: "Employment Service",
      url: "https://gsz.gov.by/",
      description: "Find employment information in Belarus.",
    },
    banking: {
      name: "National Bank of Belarus",
      url: "https://www.nbrb.by/",
      description: "Find Belarusian banking information.",
    },
    taxes: {
      name: "Ministry of Taxes",
      url: "https://nalog.gov.by/",
      description: "Find Belarusian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://minzdrav.gov.by/",
      description: "Find Belarusian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://edu.gov.by/",
      description: "Find Belarusian education information.",
    },
    transport: {
      name: "Transport Ministry",
      url: "https://www.mintrans.gov.by/",
      description: "Find Belarusian transport information.",
    },
    emergency: {
      name: "Emergency Services",
      url: "https://mchs.gov.by/",
      description: "Important emergency information.",
    },
    travel: {
      name: "Belarus Tourism",
      url: "https://www.belarus.by/",
      description: "Tourism information for Belarus.",
    },
    housing: {
      name: "Government of Belarus",
      url: "https://www.government.by/",
      description: "Find housing information.",
    },
    contacts: {
      name: "Government of Belarus",
      url: "https://www.government.by/",
      description: "Find official contacts.",
    },
  }),

  Moldova: createCountry({
    government: {
      name: "Government of Moldova",
      url: "https://www.gov.md/",
      description: "Find Moldovan public services and government information.",
    },
    immigration: {
      name: "General Inspectorate for Migration",
      url: "https://igm.gov.md/",
      description: "Find Moldovan immigration information.",
    },
    jobs: {
      name: "National Employment Agency",
      url: "https://www.anofm.md/",
      description: "Find jobs and employment services in Moldova.",
    },
    banking: {
      name: "National Bank of Moldova",
      url: "https://www.bnm.md/",
      description: "Find Moldovan banking information.",
    },
    taxes: {
      name: "State Tax Service",
      url: "https://sfs.md/",
      description: "Find Moldovan tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://ms.gov.md/",
      description: "Find Moldovan healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://mec.gov.md/",
      description: "Find Moldovan education information.",
    },
    transport: {
      name: "Public Services Agency",
      url: "https://www.asp.gov.md/",
      description: "Find Moldovan driving and transport information.",
    },
    emergency: {
      name: "112 Moldova",
      url: "https://112.md/",
      description: "Important emergency information for Moldova.",
    },
    travel: {
      name: "Moldova Travel",
      url: "https://moldova.travel/",
      description: "Tourism information for Moldova.",
    },
    housing: {
      name: "Government of Moldova",
      url: "https://www.gov.md/",
      description: "Find Moldovan housing information.",
    },
    contacts: {
      name: "Government of Moldova",
      url: "https://www.gov.md/",
      description: "Find official Moldovan contacts.",
    },
  }),

  Montenegro: createCountry({
    government: {
      name: "Government of Montenegro",
      url: "https://www.gov.me/",
      description: "Find Montenegrin public services and government information.",
    },
    immigration: {
      name: "Ministry of Interior",
      url: "https://www.gov.me/mup",
      description: "Find Montenegrin immigration information.",
    },
    jobs: {
      name: "Employment Agency",
      url: "https://www.zzzcg.me/",
      description: "Find jobs and employment services in Montenegro.",
    },
    banking: {
      name: "Central Bank of Montenegro",
      url: "https://www.cbcg.me/",
      description: "Find Montenegrin banking information.",
    },
    taxes: {
      name: "Tax Administration",
      url: "https://www.gov.me/poreskauprava",
      description: "Find Montenegrin tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://www.gov.me/mzd",
      description: "Find Montenegrin healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://www.gov.me/mpni",
      description: "Find Montenegrin education information.",
    },
    transport: {
      name: "Ministry of Transport",
      url: "https://www.gov.me/",
      description: "Find Montenegrin transport information.",
    },
    emergency: {
      name: "112 Montenegro",
      url: "https://www.gov.me/",
      description: "Important emergency information for Montenegro.",
    },
    travel: {
      name: "Montenegro Travel",
      url: "https://www.montenegro.travel/",
      description: "Official tourism information for Montenegro.",
    },
    housing: {
      name: "Government of Montenegro",
      url: "https://www.gov.me/",
      description: "Find Montenegrin housing information.",
    },
    contacts: {
      name: "Government of Montenegro",
      url: "https://www.gov.me/",
      description: "Find official Montenegrin contacts.",
    },
  }),

  Serbia: createCountry({
    government: {
      name: "Government of Serbia",
      url: "https://www.srbija.gov.rs/",
      description: "Find Serbian public services and government information.",
    },
    immigration: {
      name: "Ministry of Interior",
      url: "https://mup.gov.rs/",
      description: "Find Serbian immigration information.",
    },
    jobs: {
      name: "National Employment Service",
      url: "https://www.nsz.gov.rs/",
      description: "Find jobs and employment services in Serbia.",
    },
    banking: {
      name: "National Bank of Serbia",
      url: "https://www.nbs.rs/",
      description: "Find Serbian banking information.",
    },
    taxes: {
      name: "Tax Administration",
      url: "https://www.purs.gov.rs/",
      description: "Find Serbian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://www.zdravlje.gov.rs/",
      description: "Find Serbian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://prosveta.gov.rs/",
      description: "Find Serbian education information.",
    },
    transport: {
      name: "Road Traffic Safety Agency",
      url: "https://www.abs.gov.rs/",
      description: "Find Serbian driving and transport information.",
    },
    emergency: {
      name: "112 Serbia",
      url: "https://www.srbija.gov.rs/",
      description: "Important emergency information for Serbia.",
    },
    travel: {
      name: "Serbia Travel",
      url: "https://www.serbia.travel/",
      description: "Official tourism information for Serbia.",
    },
    housing: {
      name: "Government of Serbia",
      url: "https://www.srbija.gov.rs/",
      description: "Find Serbian housing information.",
    },
    contacts: {
      name: "Government of Serbia",
      url: "https://www.srbija.gov.rs/",
      description: "Find official Serbian contacts.",
    },
  }),

  NorthMacedonia: createCountry({
    government: {
      name: "Government of North Macedonia",
      url: "https://vlada.mk/",
      description: "Find North Macedonian public services and government information.",
    },
    immigration: {
      name: "Ministry of Interior",
      url: "https://mvr.gov.mk/",
      description: "Find North Macedonian immigration information.",
    },
    jobs: {
      name: "Employment Agency",
      url: "https://av.gov.mk/",
      description: "Find jobs and employment services in North Macedonia.",
    },
    banking: {
      name: "National Bank",
      url: "https://www.nbrm.mk/",
      description: "Find North Macedonian banking information.",
    },
    taxes: {
      name: "Public Revenue Office",
      url: "https://www.ujp.gov.mk/",
      description: "Find North Macedonian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://zdravstvo.gov.mk/",
      description: "Find North Macedonian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://mon.gov.mk/",
      description: "Find North Macedonian education information.",
    },
    transport: {
      name: "Ministry of Transport",
      url: "https://mtc.gov.mk/",
      description: "Find North Macedonian transport information.",
    },
    emergency: {
      name: "112 North Macedonia",
      url: "https://mvr.gov.mk/",
      description: "Important emergency information.",
    },
    travel: {
      name: "North Macedonia Tourism",
      url: "https://northmacedonia-timeless.com/",
      description: "Tourism information for North Macedonia.",
    },
    housing: {
      name: "Government of North Macedonia",
      url: "https://vlada.mk/",
      description: "Find housing information.",
    },
    contacts: {
      name: "Government of North Macedonia",
      url: "https://vlada.mk/",
      description: "Find official contacts.",
    },
  }),

  Ukraine: createCountry({
    government: {
      name: "Government of Ukraine",
      url: "https://www.kmu.gov.ua/",
      description: "Find Ukrainian public services and government information.",
    },
    immigration: {
      name: "State Migration Service",
      url: "https://dmsu.gov.ua/",
      description: "Find Ukrainian immigration information.",
    },
    jobs: {
      name: "State Employment Service",
      url: "https://www.dcz.gov.ua/",
      description: "Find jobs and employment services in Ukraine.",
    },
    banking: {
      name: "National Bank of Ukraine",
      url: "https://bank.gov.ua/",
      description: "Find Ukrainian banking information.",
    },
    taxes: {
      name: "State Tax Service",
      url: "https://tax.gov.ua/",
      description: "Find Ukrainian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://moz.gov.ua/",
      description: "Find Ukrainian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://mon.gov.ua/",
      description: "Find Ukrainian education information.",
    },
    transport: {
      name: "Ministry for Communities and Territories",
      url: "https://mtu.gov.ua/",
      description: "Find Ukrainian transport information.",
    },
    emergency: {
      name: "State Emergency Service",
      url: "https://dsns.gov.ua/",
      description: "Important emergency information for Ukraine.",
    },
    travel: {
      name: "Ukraine Travel",
      url: "https://ukraine.ua/",
      description: "Tourism and travel information for Ukraine.",
    },
    housing: {
      name: "Government of Ukraine",
      url: "https://www.kmu.gov.ua/",
      description: "Find Ukrainian housing information.",
    },
    contacts: {
      name: "Government of Ukraine",
      url: "https://www.kmu.gov.ua/",
      description: "Find official Ukrainian contacts.",
    },
  }),

  Russia: createCountry({
    government: {
      name: "Government of Russia",
      url: "http://government.ru/",
      description: "Find Russian government information and public services.",
    },
    immigration: {
      name: "Ministry of Internal Affairs",
      url: "https://мвд.рф/",
      description: "Find Russian immigration information.",
    },
    jobs: {
      name: "Employment Services",
      url: "https://trudvsem.ru/",
      description: "Find jobs and employment services in Russia.",
    },
    banking: {
      name: "Bank of Russia",
      url: "https://www.cbr.ru/",
      description: "Find Russian banking information.",
    },
    taxes: {
      name: "Federal Tax Service",
      url: "https://www.nalog.gov.ru/",
      description: "Find Russian tax information.",
    },
    healthcare: {
      name: "Ministry of Health",
      url: "https://minzdrav.gov.ru/",
      description: "Find Russian healthcare information.",
    },
    education: {
      name: "Ministry of Education",
      url: "https://edu.gov.ru/",
      description: "Find Russian education information.",
    },
    transport: {
      name: "Transport Ministry",
      url: "https://mintrans.gov.ru/",
      description: "Find Russian transport information.",
    },
    emergency: {
      name: "Emergency Ministry",
      url: "https://mchs.gov.ru/",
      description: "Important emergency information for Russia.",
    },
    travel: {
      name: "Russia Travel",
      url: "https://russiatourism.ru/",
      description: "Tourism information for Russia.",
    },
    housing: {
      name: "Government of Russia",
      url: "http://government.ru/",
      description: "Find Russian housing information.",
    },
    contacts: {
      name: "Government of Russia",
      url: "http://government.ru/",
      description: "Find official Russian contacts.",
    },
  }),

  UnitedKingdom: createCountry({
    government: {
      name: "GOV.UK",
      url: "https://www.gov.uk/",
      description: "Find UK public services and government information.",
    },
    immigration: {
      name: "UK Visas and Immigration",
      url: "https://www.gov.uk/browse/visas-immigration",
      description: "Find UK visa and immigration information.",
    },
    jobs: {
      name: "Find a Job",
      url: "https://findajob.dwp.gov.uk/",
      description: "Find jobs and employment services in the United Kingdom.",
    },
    banking: {
      name: "Bank of England",
      url: "https://www.bankofengland.co.uk/",
      description: "Find official UK banking information.",
    },
    taxes: {
      name: "HM Revenue & Customs",
      url: "https://www.gov.uk/government/organisations/hm-revenue-customs",
      description: "Find UK tax information.",
    },
    healthcare: {
      name: "NHS",
      url: "https://www.nhs.uk/",
      description: "Find UK healthcare information.",
    },
    education: {
      name: "Department for Education",
      url: "https://www.gov.uk/government/organisations/department-for-education",
      description: "Find UK education information.",
    },
    transport: {
      name: "DVLA",
      url: "https://www.gov.uk/government/organisations/driver-and-vehicle-licensing-agency",
      description: "Find UK driving and vehicle information.",
    },
    emergency: {
      name: "999 / 112 Emergency",
      url: "https://www.gov.uk/guidance/999-and-112-the-uks-national-emergency-numbers",
      description: "Important emergency information for the United Kingdom.",
    },
    travel: {
      name: "VisitBritain",
      url: "https://www.visitbritain.com/",
      description: "Official tourism information for the United Kingdom.",
    },
    housing: {
      name: "GOV.UK Housing",
      url: "https://www.gov.uk/browse/housing-local-services",
      description: "Find UK housing information.",
    },
    contacts: {
      name: "GOV.UK",
      url: "https://www.gov.uk/",
      description: "Find official UK contacts.",
    },
  }),

  Liechtenstein: createCountry({
    government: {
      name: "Government of Liechtenstein",
      url: "https://www.regierung.li/",
      description: "Find Liechtenstein public services and government information.",
    },
    immigration: {
      name: "Migration and Passport Office",
      url: "https://www.llv.li/",
      description: "Find Liechtenstein immigration information.",
    },
    jobs: {
      name: "Employment Service",
      url: "https://www.ams.li/",
      description: "Find jobs and employment services in Liechtenstein.",
    },
    banking: {
      name: "Financial Market Authority",
      url: "https://www.fma-li.li/",
      description: "Find official financial information.",
    },
    taxes: {
      name: "Tax Administration",
      url: "https://www.llv.li/",
      description: "Find Liechtenstein tax information.",
    },
    healthcare: {
      name: "Government of Liechtenstein",
      url: "https://www.llv.li/",
      description: "Find healthcare information.",
    },
    education: {
      name: "Education Office",
      url: "https://www.llv.li/",
      description: "Find education information.",
    },
    transport: {
      name: "Road Traffic Office",
      url: "https://www.llv.li/",
      description: "Find transport and driving information.",
    },
    emergency: {
      name: "112 Emergency",
      url: "https://www.llv.li/",
      description: "Important emergency information.",
    },
    travel: {
      name: "Liechtenstein Tourism",
      url: "https://en.tourismus.li/",
      description: "Official tourism information.",
    },
    housing: {
      name: "Government of Liechtenstein",
      url: "https://www.regierung.li/",
      description: "Find housing information.",
    },
    contacts: {
      name: "Government of Liechtenstein",
      url: "https://www.regierung.li/",
      description: "Find official contacts.",
    },
  }),

  Monaco: createCountry({
    government: {
      name: "Government of Monaco",
      url: "https://en.gouv.mc/",
      description: "Find Monaco public services and government information.",
    },
    immigration: {
      name: "Monaco Residence",
      url: "https://en.gouv.mc/Policy-Practice/Residence-in-Monaco",
      description: "Find Monaco residence and immigration information.",
    },
    jobs: {
      name: "Employment Service",
      url: "https://monservicepublic.gouv.mc/",
      description: "Find employment information in Monaco.",
    },
    banking: {
      name: "AMAF",
      url: "https://www.amaf.mc/",
      description: "Find official financial information.",
    },
    taxes: {
      name: "Monaco Tax Services",
      url: "https://monservicepublic.gouv.mc/",
      description: "Find Monaco tax information.",
    },
    healthcare: {
      name: "Department of Health",
      url: "https://en.gouv.mc/",
      description: "Find Monaco healthcare information.",
    },
    education: {
      name: "Education Department",
      url: "https://en.gouv.mc/",
      description: "Find Monaco education information.",
    },
    transport: {
      name: "Monaco Transport",
      url: "https://monservicepublic.gouv.mc/",
      description: "Find Monaco transport information.",
    },
    emergency: {
      name: "112 Monaco",
      url: "https://en.gouv.mc/",
      description: "Important emergency information.",
    },
    travel: {
      name: "Visit Monaco",
      url: "https://www.visitmonaco.com/",
      description: "Official tourism information for Monaco.",
    },
    housing: {
      name: "Monaco Housing",
      url: "https://monservicepublic.gouv.mc/",
      description: "Find Monaco housing information.",
    },
    contacts: {
      name: "Government of Monaco",
      url: "https://en.gouv.mc/",
      description: "Find official Monaco contacts.",
    },
  }),

  SanMarino: createCountry({
    government: {
      name: "Government of San Marino",
      url: "https://www.gov.sm/",
      description: "Find San Marino public services and government information.",
    },
    immigration: {
      name: "San Marino Government",
      url: "https://www.gov.sm/",
      description: "Find San Marino immigration information.",
    },
    jobs: {
      name: "Employment Office",
      url: "https://www.gov.sm/",
      description: "Find employment information in San Marino.",
    },
    banking: {
      name: "Central Bank of San Marino",
      url: "https://www.bcsm.sm/",
      description: "Find San Marino banking information.",
    },
    taxes: {
      name: "San Marino Tax Office",
      url: "https://www.gov.sm/",
      description: "Find San Marino tax information.",
    },
    healthcare: {
      name: "Social Security Institute",
      url: "https://www.iss.sm/",
      description: "Find San Marino healthcare information.",
    },
    education: {
      name: "Education Services",
      url: "https://www.gov.sm/",
      description: "Find San Marino education information.",
    },
    transport: {
      name: "San Marino Government",
      url: "https://www.gov.sm/",
      description: "Find San Marino transport information.",
    },
    emergency: {
      name: "112 San Marino",
      url: "https://www.gov.sm/",
      description: "Important emergency information.",
    },
    travel: {
      name: "Visit San Marino",
      url: "https://www.visitsanmarino.com/",
      description: "Official tourism information for San Marino.",
    },
    housing: {
      name: "Government of San Marino",
      url: "https://www.gov.sm/",
      description: "Find housing information.",
    },
    contacts: {
      name: "Government of San Marino",
      url: "https://www.gov.sm/",
      description: "Find official contacts.",
    },
  }),

  VaticanCity: createCountry({
    government: {
      name: "Vatican City State",
      url: "https://www.vaticanstate.va/",
      description: "Find official information about Vatican City State.",
    },
    immigration: {
      name: "Vatican City State",
      url: "https://www.vaticanstate.va/",
      description: "Find official Vatican information concerning access and residence.",
    },
    jobs: {
      name: "Vatican City State",
      url: "https://www.vaticanstate.va/",
      description: "Find employment-related information for Vatican City.",
    },
    banking: {
      name: "IOR — Institute for the Works of Religion",
      url: "https://www.ior.va/",
      description: "Find official Vatican financial information.",
    },
    taxes: {
      name: "Vatican City State",
      url: "https://www.vaticanstate.va/",
      description: "Find official financial information.",
    },
    healthcare: {
      name: "Vatican City Health Services",
      url: "https://www.vaticanstate.va/",
      description: "Find official health information.",
    },
    education: {
      name: "Vatican Education",
      url: "https://www.vatican.va/",
      description: "Find Vatican education information.",
    },
    transport: {
      name: "Vatican City State",
      url: "https://www.vaticanstate.va/",
      description: "Find official transport information.",
    },
    emergency: {
      name: "Vatican City Emergency",
      url: "https://www.vaticanstate.va/",
      description: "Important emergency information.",
    },
    travel: {
      name: "Vatican Museums",
      url: "https://www.museivaticani.va/",
      description: "Official visitor information for Vatican City.",
    },
    housing: {
      name: "Vatican City State",
      url: "https://www.vaticanstate.va/",
      description: "Find official information.",
    },
    contacts: {
      name: "Vatican City State",
      url: "https://www.vaticanstate.va/",
      description: "Find official Vatican contacts.",
    },
  }),
};

export default countryServices;

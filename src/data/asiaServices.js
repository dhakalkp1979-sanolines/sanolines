// ============================================================
// SANOLINES GLOBAL — PORTUGAL SERVICE DATA
// ============================================================
// Portugal information directory
// 20 service categories
//
// Sanolines provides information and links to official/trusted
// sources. Sanolines does not provide these services directly.
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

const serviceData = {
  Portugal: {
    // ========================================================
    // 01 — GOVERNMENT
    // ========================================================

    government: {
      description:
        "Find Portuguese government services, public administration information, documents, applications and online public services through official government portals.",

      information: [
        "gov.pt is the main public information portal for many government services in Portugal.",
        "Many services can be completed online, while others require an appointment or in-person visit.",
        "Public services include identification documents, civil registration, tax services, social security, employment, transport and other areas.",
        "Check the official source for current requirements, fees, documents and appointment procedures.",
      ],

      links: [
        {
          name: "gov.pt — Public Services",
          description:
            "Central Portuguese government portal for public services and official information.",
          url: "https://www.gov.pt/",
          official: true,
        },
        {
          name: "gov.pt — Online Public Services",
          description:
            "Online government services for citizens, businesses and other users.",
          url: "https://www.gov.pt/servicos",
          official: true,
        },
      ],
    },

    // ========================================================
    // 02 — IMMIGRATION
    // ========================================================

    immigration: {
      description:
        "Find official information about immigration, residence permits, migration procedures, asylum, family reunification and nationality-related information in Portugal.",

      information: [
        "AIMA is the Portuguese public authority responsible for migration, asylum and integration matters.",
        "Residence permit procedures and requirements depend on the person's situation and legal basis.",
        "Foreign citizens should check AIMA for current procedures, appointments, documents and digital services.",
        "Important immigration information can change, so always check the latest AIMA guidance before applying.",
      ],

      links: [
        {
          name: "AIMA — Agency for Integration, Migration and Asylum",
          description:
            "Official Portuguese authority for migration, asylum, documentation and integration.",
          url: "https://aima.gov.pt/",
          official: true,
        },
        {
          name: "gov.pt — Foreign Citizens",
          description:
            "Government information and services for foreigners living in Portugal.",
          url: "https://www.gov.pt/servicos",
          official: true,
        },
      ],
    },

    // ========================================================
    // 03 — JOBS
    // ========================================================

    jobs: {
      description:
        "Find employment services, job opportunities, training, internships, employment support and worker information in Portugal.",

      information: [
        "IEFP is the main Portuguese public employment and vocational training service.",
        "Jobseekers can use IEFP services for employment registration, job search and professional training.",
        "IEFP also provides information about training programmes, internships and employment measures.",
        "Private recruitment agencies and job websites may also be useful, but users should check employers and recruitment conditions carefully.",
      ],

      links: [
        {
          name: "IEFP — Employment and Vocational Training",
          description:
            "Official Portuguese employment service with job, training and employment-support information.",
          url: "https://www.iefp.pt/",
          official: true,
        },
        {
          name: "IEFP Online",
          description:
            "Online IEFP services for employment and training.",
          url: "https://iefponline.iefp.pt/",
          official: true,
        },
        {
          name: "gov.pt — IEFP Services",
          description:
            "Government information about employment registration, job search and IEFP services.",
          url: "https://www.gov.pt/guias/atendimento-no-instituto-do-emprego-e-formacao-profissional-iefp",
          official: true,
        },
      ],
    },

    // ========================================================
    // 04 — BANKING
    // ========================================================

    banking: {
      description:
        "Find information about banking, payment accounts, loans, consumer credit, financial institutions and banking customer rights in Portugal.",

      information: [
        "Banco de Portugal supervises and provides information about the Portuguese banking system.",
        "The Bank Customer Website provides information about banking products, fees, credit and payment services.",
        "Users can check information about authorised financial institutions before using financial services.",
        "Always compare fees, conditions and contractual information before opening an account or taking credit.",
      ],

      links: [
        {
          name: "Banco de Portugal",
          description:
            "Official central bank and banking supervisory authority of Portugal.",
          url: "https://www.bportugal.pt/",
          official: true,
        },
        {
          name: "Portal do Cliente Bancário",
          description:
            "Banco de Portugal information portal for banking customers and financial products.",
          url: "https://clientebancario.bportugal.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 05 — TAXES
    // ========================================================

    taxes: {
      description:
        "Find Portuguese tax information, NIF services, IRS, VAT, tax registration, declarations and taxpayer resources.",

      information: [
        "Autoridade Tributária e Aduaneira (AT) is the Portuguese tax and customs authority.",
        "The Portal das Finanças provides online tax services for individuals, businesses and other users.",
        "The NIF is the Portuguese Tax Identification Number used for many financial and administrative procedures.",
        "Tax obligations and deadlines depend on the person's circumstances, so check the official tax authority for current information.",
      ],

      links: [
        {
          name: "Portal das Finanças",
          description:
            "Official Portuguese tax portal for tax services, declarations and taxpayer information.",
          url: "https://www.portaldasfinancas.gov.pt/",
          official: true,
        },
        {
          name: "gov.pt — Tax Services",
          description:
            "Government information about Portuguese tax services and procedures.",
          url: "https://www.gov.pt/servicos",
          official: true,
        },
      ],
    },

    // ========================================================
    // 06 — HEALTHCARE
    // ========================================================

    healthcare: {
      description:
        "Find Portugal's public healthcare system, health information, health centres, hospitals and official healthcare resources.",

      information: [
        "The Serviço Nacional de Saúde (SNS) is Portugal's public health service.",
        "SNS information includes healthcare services, health centres, hospitals and health-related guidance.",
        "SNS 24 provides health information, triage and guidance through its official channels.",
        "For emergencies, use the appropriate emergency service rather than waiting for routine healthcare support.",
      ],

      links: [
        {
          name: "SNS — Serviço Nacional de Saúde",
          description:
            "Official Portuguese National Health Service.",
          url: "https://www.sns.gov.pt/",
          official: true,
        },
        {
          name: "SNS 24",
          description:
            "Official health information, triage and healthcare guidance service.",
          url: "https://www.sns24.gov.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 07 — EDUCATION
    // ========================================================

    education: {
      description:
        "Find information about schools, higher education, professional training, education authorities and study opportunities in Portugal.",

      information: [
        "Portugal has public and private education institutions covering basic education, secondary education and higher education.",
        "DGES provides official information about Portuguese higher education and access to higher education.",
        "IEFP provides vocational education and professional training opportunities.",
        "Admission requirements and application procedures vary by institution and programme.",
      ],

      links: [
        {
          name: "DGES — Higher Education",
          description:
            "Official Portuguese authority for higher education information and services.",
          url: "https://www.dges.gov.pt/",
          official: true,
        },
        {
          name: "gov.pt — Education Services",
          description:
            "Portuguese government information about education and related services.",
          url: "https://www.gov.pt/servicos",
          official: true,
        },
        {
          name: "IEFP — Professional Training",
          description:
            "Official employment and vocational training service.",
          url: "https://www.iefp.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 08 — TRANSPORT
    // ========================================================

    transport: {
      description:
        "Find information about driving licences, foreign licences, vehicle registration, inspections, transport regulations and mobility in Portugal.",

      information: [
        "IMT is the Portuguese public authority responsible for many areas of transport and mobility.",
        "IMT provides information about driving licences, vehicles, road transport and transport operators.",
        "Foreign driving licences may have specific exchange or recognition rules.",
        "Always check IMT for current licence, vehicle and registration requirements.",
      ],

      links: [
        {
          name: "IMT — Instituto da Mobilidade e dos Transportes",
          description:
            "Official Portuguese authority for mobility, transport, vehicles and driving licences.",
          url: "https://www.imt-ip.pt/",
          official: true,
        },
        {
          name: "IMT Online",
          description:
            "Online transport and driving-related services.",
          url: "https://www.imt-ip.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 09 — EMERGENCY
    // ========================================================

    emergency: {
      description:
        "Find emergency numbers and official emergency information for medical, police, fire and other urgent situations in Portugal.",

      information: [
        "112 is the European emergency number and is available free of charge in Portugal.",
        "For medical emergencies, 112 connects callers to the emergency system.",
        "SNS 24 provides health advice and triage for non-emergency situations.",
        "Do not use routine service channels when immediate emergency assistance is required.",
      ],

      links: [
        {
          name: "gov.pt — Emergency Contacts",
          description:
            "Official list of emergency numbers and useful emergency contacts in Portugal.",
          url: "https://www.gov.pt/guias/contactos-de-emergencia-em-portugal",
          official: true,
        },
        {
          name: "INEM — National Institute of Medical Emergency",
          description:
            "Portuguese public organisation coordinating the integrated medical emergency system.",
          url: "https://www.inem.pt/",
          official: true,
        },
        {
          name: "ANEPC — National Emergency and Civil Protection Authority",
          description:
            "Official Portuguese civil protection authority.",
          url: "https://prociv.gov.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 10 — TRAVEL
    // ========================================================

    travel: {
      description:
        "Find official tourism information, travel guidance, Portuguese destinations and information for visitors to Portugal.",

      information: [
        "Turismo de Portugal is the national tourism authority.",
        "Official tourism information can help visitors find destinations, attractions, tourism services and travel information.",
        "Entry and immigration requirements are separate from tourism information and should be checked with the relevant official authority.",
        "Travel requirements can change, so verify important information before travelling.",
      ],

      links: [
        {
          name: "Visit Portugal",
          description:
            "Official tourism information about Portugal and Portuguese destinations.",
          url: "https://www.visitportugal.com/",
          official: true,
        },
        {
          name: "Turismo de Portugal",
          description:
            "National tourism authority of Portugal.",
          url: "https://www.turismodeportugal.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 11 — HOUSING
    // ========================================================

    housing: {
      description:
        "Find official housing information, public housing programmes, rental support and housing resources in Portugal.",

      information: [
        "IHRU is the public institute responsible for implementing and monitoring national housing policy.",
        "Housing programmes and support measures may have specific eligibility conditions.",
        "Rental and housing rights can involve both national and local authorities.",
        "Always check current programme rules and application procedures before applying.",
      ],

      links: [
        {
          name: "IHRU — Institute for Housing and Urban Rehabilitation",
          description:
            "Official Portuguese public institute for housing policy and housing programmes.",
          url: "https://www.ihru.pt/",
          official: true,
        },
        {
          name: "Portal da Habitação",
          description:
            "Official housing information and public housing resources.",
          url: "https://www.portaldahabitacao.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 12 — CONTACTS
    // ========================================================

    contacts: {
      description:
        "Find important Portuguese government contact numbers, public-service contacts and useful helplines.",

      information: [
        "gov.pt provides an official directory of useful public-service telephone lines.",
        "Different services have different opening hours and contact channels.",
        "Check the responsible organisation's website before travelling to an office.",
        "For emergencies, use the appropriate emergency number.",
      ],

      links: [
        {
          name: "gov.pt — Useful Contacts",
          description:
            "Official Portuguese government directory of useful public-service telephone lines.",
          url: "https://www.gov.pt/linhas-uteis",
          official: true,
        },
        {
          name: "gov.pt — Public Services",
          description:
            "Central source for Portuguese government services and organisations.",
          url: "https://www.gov.pt/servicos",
          official: true,
        },
      ],
    },

    // ========================================================
    // 13 — LEGAL AID
    // ========================================================

    legal: {
      description:
        "Find official information about legal aid, legal protection and access to publicly supported legal assistance in Portugal.",

      information: [
        "Portugal provides a legal protection system for people who meet the applicable conditions.",
        "Legal aid may include exemption from court fees and costs and, depending on the case, appointment and payment of a lawyer or other legal professional.",
        "Applications for legal protection can be made through Segurança Social Direta or through Social Security services.",
        "Eligibility depends on legal and financial conditions, so check the official rules before applying.",
      ],

      links: [
        {
          name: "Justiça.gov.pt — Legal Protection",
          description:
            "Official information about legal protection and legal aid in Portugal.",
          url: "https://justica.gov.pt/Servicos/Protecao-juridica",
          official: true,
        },
        {
          name: "Justiça.gov.pt",
          description:
            "Official Portuguese Justice Portal and justice services.",
          url: "https://justica.gov.pt/",
          official: true,
        },
        {
          name: "Segurança Social Direta",
          description:
            "Online Social Security services, including relevant legal-protection procedures.",
          url: "https://www.seg-social.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 14 — MIGRANT SUPPORT
    // ========================================================

    migrant: {
      description:
        "Find official and recognised support for migrants, refugees and newcomers in Portugal, including integration, documentation, employment and social support.",

      information: [
        "AIMA provides official migration and integration information.",
        "CLAIM centres provide local information and support for migrants in areas such as documentation, housing, work, health, education and social security.",
        "The Portuguese Council for Refugees (CPR) provides support for asylum seekers and refugees.",
        "Availability and location of support services can change, so check current information before visiting.",
      ],

      links: [
        {
          name: "AIMA",
          description:
            "Official Portuguese authority for migration, asylum and integration.",
          url: "https://aima.gov.pt/",
          official: true,
        },
        {
          name: "gov.pt — CLAIM",
          description:
            "Government information about Local Centres for Migrant Integration Support.",
          url: "https://www.gov.pt/servicos/centros-locais-de-apoio-a-integracao-de-migrantes-claim-",
          official: true,
        },
        {
          name: "CPR — Portuguese Council for Refugees",
          description:
            "Recognised organisation supporting asylum seekers and refugees in Portugal.",
          url: "https://cpr.pt/",
          official: false,
        },
      ],
    },

    // ========================================================
    // 15 — COMMUNITY
    // ========================================================

    community: {
      description:
        "Find community organisations, associations, charities and local networks that may provide social, cultural and integration support in Portugal.",

      information: [
        "Portugal has many local associations, charities and community organisations.",
        "CLAIM centres can help migrants identify local support and community resources.",
        "Municipalities and local organisations may provide additional community programmes.",
        "Services and eligibility vary between organisations, so contact the organisation directly for current information.",
      ],

      links: [
        {
          name: "gov.pt — CLAIM",
          description:
            "Local migrant integration centres providing information and support.",
          url: "https://www.gov.pt/servicos/centros-locais-de-apoio-a-integracao-de-migrantes-claim-",
          official: true,
        },
        {
          name: "CPR — Portuguese Council for Refugees",
          description:
            "Recognised organisation providing social, legal and integration support.",
          url: "https://cpr.pt/",
          official: false,
        },
        {
          name: "gov.pt",
          description:
            "Central government portal for finding public services and organisations.",
          url: "https://www.gov.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 16 — SOCIAL SECURITY
    // ========================================================

    socialSecurity: {
      description:
        "Find Portuguese Social Security information about benefits, pensions, unemployment, sickness, family support and other social protection.",

      information: [
        "Instituto da Segurança Social administers Portugal's social protection system.",
        "Segurança Social Direta provides online services, declarations, applications and benefit information.",
        "Social Security supports areas including unemployment, sickness, pensions, family benefits, disability and social assistance.",
        "Eligibility depends on the specific benefit and the applicant's circumstances.",
      ],

      links: [
        {
          name: "Segurança Social",
          description:
            "Official Portuguese Social Security information and services.",
          url: "https://www.seg-social.pt/",
          official: true,
        },
        {
          name: "Segurança Social Direta",
          description:
            "Online portal for Social Security services and applications.",
          url: "https://www.seg-social.pt/ptss/pssd/home",
          official: true,
        },
        {
          name: "Social Benefits Simulator",
          description:
            "Official Social Security tool for checking possible social benefits.",
          url: "https://www.seg-social.pt/ptss/pssd/menu/simuladores/simuladores-prestacoes-sociais",
          official: true,
        },
      ],
    },

    // ========================================================
    // 17 — FAMILY
    // ========================================================

    family: {
      description:
        "Find official information about family benefits, children, parental support, childcare and protection of children and families in Portugal.",

      information: [
        "Segurança Social provides information about family and child-related benefits.",
        "Family support can include benefits connected with children, pregnancy, parental responsibilities and other family situations.",
        "Child protection services and commissions operate within Portugal's child-protection system.",
        "Eligibility and application requirements depend on the specific support programme.",
      ],

      links: [
        {
          name: "Segurança Social — Family",
          description:
            "Official information about family, children and related Social Security benefits.",
          url: "https://www.seg-social.pt/ptss/pssd/menu/familia",
          official: true,
        },
        {
          name: "gov.pt",
          description:
            "Portuguese government portal for family and child-related public services.",
          url: "https://www.gov.pt/servicos",
          official: true,
        },
        {
          name: "CNPDPCJ",
          description:
            "National Commission for the Promotion of the Rights and Protection of Children and Young People.",
          url: "https://www.cnpdpcj.gov.pt/",
          official: true,
        },
      ],
    },

    // ========================================================
    // 18 — CONSUMER
    // ========================================================

    consumer: {
      description:
        "Find consumer rights information, complaint channels, consumer protection authorities and guidance for consumers in Portugal.",

      information: [
        "The Direção-Geral do Consumidor is the Portuguese public authority responsible for promoting consumer rights and protection.",
        "Consumers can use official complaint and information channels when dealing with consumer issues.",
        "Keep contracts, invoices, receipts, communications and other evidence when making a complaint.",
        "For regulated sectors, the appropriate sector regulator may also be relevant.",
      ],

      links: [
        {
          name: "Direção-Geral do Consumidor",
          description:
            "Official Portuguese consumer protection authority.",
          url: "https://www.consumidor.gov.pt/",
          official: true,
        },
        {
          name: "gov.pt — Consumer Protection",
          description:
            "Government information and public services related to consumer protection.",
          url: "https://www.gov.pt/servicos",
          official: true,
        },
      ],
    },

    // ========================================================
    // 19 — DISABILITY
    // ========================================================

    disability: {
      description:
        "Find official disability, accessibility, inclusion and social-support information in Portugal.",

      information: [
        "The Instituto Nacional para a Reabilitação (INR) is the national public body dedicated to disability and rehabilitation policy.",
        "Social Security provides information about disability-related benefits and social protection.",
        "Accessibility rights and support can involve national and local public services.",
        "Eligibility for benefits depends on the applicable legal and medical or functional assessment requirements.",
      ],

      links: [
        {
          name: "INR — Instituto Nacional para a Reabilitação",
          description:
            "Official Portuguese public institute for disability and rehabilitation policy.",
          url: "https://www.inr.pt/",
          official: true,
        },
        {
          name: "Segurança Social — Disability Support",
          description:
            "Official Social Security information about disability and incapacity benefits.",
          url: "https://www.seg-social.pt/",
          official: true,
        },
        {
          name: "gov.pt",
          description:
            "Portuguese government portal for disability-related public services.",
          url: "https://www.gov.pt/servicos",
          official: true,
        },
      ],
    },

    // ========================================================
    // 20 — BASIC ASSISTANCE
    // ========================================================

    basicNeeds: {
      description:
        "Find recognised organisations and public resources that may help with food, emergency accommodation, social assistance and other basic needs in Portugal.",

      information: [
        "Social Security and local social services can provide information about social assistance and support programmes.",
        "Municipalities and local social-service organisations may provide or coordinate emergency support.",
        "Food banks and charitable organisations may provide food assistance through local networks.",
        "Availability, eligibility and waiting times vary, so contact the organisation directly before travelling.",
      ],

      links: [
        {
          name: "Segurança Social",
          description:
            "Official Portuguese social protection and social assistance information.",
          url: "https://www.seg-social.pt/",
          official: true,
        },
        {
          name: "Banco Alimentar Contra a Fome",
          description:
            "Portuguese food-bank network supporting people and families through partner organisations.",
          url: "https://www.bancoalimentar.pt/",
          official: false,
        },
        {
          name: "Santa Casa da Misericórdia de Lisboa",
          description:
            "Major social-support organisation providing a range of social services in Lisbon.",
          url: "https://scml.pt/",
          official: false,
        },
        {
          name: "gov.pt — Useful Contacts",
          description:
            "Government directory of useful public-service contacts.",
          url: "https://www.gov.pt/linhas-uteis",
          official: true,
        },
      ],
    },
  },
};

export default serviceData;

export {
  serviceData,
  serviceCategories,
};

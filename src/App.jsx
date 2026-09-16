import React, { useState } from "react";
import "./App.css";

const categoriesData = [
  {
    id: "jobs",
    title: "JOBS",
    description:
      "Employment & recruitment resources across national boards and agencies.",
    color: "#2b4c7e",
    items: [
      {
        title: "IEFP Portal",
        description:
          "National employment institute for jobs and vocational training.",
        links: [{ label: "IEFP Official", url: "https://iefp.pt" }],
        icon: "💼",
      },
      {
        title: "NetEmprego",
        description: "Popular national job board for open positions.",
        links: [{ label: "NetEmprego", url: "https://netemprego.pt" }],
        icon: "🔍",
      },
      {
        title: "LinkedIn Jobs",
        description: "Professional network and corporate job listings.",
        links: [{ label: "LinkedIn", url: "https://linkedin.com" }],
        icon: "🌐",
      },
      {
        title: "EURES European Job Mobility",
        description: "EU portal for cross-border job seekers.",
        links: [{ label: "EURES", url: "https://eures.europa.eu" }],
        icon: "🇪🇺",
      },
      {
        title: "Sapo Emprego",
        description: "Major Portuguese classifieds job portal.",
        links: [{ label: "Sapo Emprego", url: "https://emprego.sapo.pt" }],
        icon: "📑",
      },
      {
        title: "Glassdoor Portugal",
        description: "Company reviews, salaries, and open job listings.",
        links: [{ label: "Glassdoor", url: "https://www.glassdoor.pt" }],
        icon: "⭐",
      },
      {
        title: "Indeed Portugal",
        description:
          "Search millions of jobs from the web and company sites.",
        links: [{ label: "Indeed", url: "https://www.indeed.pt" }],
        icon: "📋",
      },
      {
        title: "Turismo de Portugal Jobs",
        description:
          "Hospitality and tourism industry specific career boards.",
        links: [
          {
            label: "Touring Jobs",
            url: "https://www.turismodeportugal.pt",
          },
        ],
        icon: "🏨",
      },
      {
        title: "IT Jobs Portugal",
        description:
          "Dedicated portal for tech and software engineering roles.",
        links: [{ label: "IT Jobs", url: "https://www.itjobs.pt" }],
        icon: "💻",
      },
      {
        title: "Bolsa de Emprego Público (BEP)",
        description:
          "Official public administration employment platform.",
        links: [{ label: "BEP Portal", url: "https://www.bep.gov.pt" }],
        icon: "🏛️",
      },
      {
        title: "Empregos Coimbra",
        description:
          "Regional employment board for central region.",
        links: [{ label: "Coimbra Jobs", url: "https://www.iefp.pt" }],
        icon: "📍",
      },
      {
        title: "Startup Portugal",
        description:
          "Startup ecosystem job boards and innovation careers.",
        links: [
          {
            label: "Startup Pt",
            url: "https://www.startupportugal.com",
          },
        ],
        icon: "🚀",
      },
      {
        title: "Expresso Emprego",
        description:
          "Top national newspaper career marketplace.",
        links: [
          {
            label: "Expresso",
            url: "https://emprego.expresso.pt",
          },
        ],
        icon: "📰",
      },
      {
        title: "Remote.co / WeWorkRemotely",
        description:
          "Top resources for remote work opportunities worldwide.",
        links: [
          {
            label: "Remote Jobs",
            url: "https://weworkremotely.com",
          },
        ],
        icon: "🏡",
      },
      {
        title: "Freelancermap",
        description:
          "IT and engineering project contracts for independent contractors.",
        links: [
          {
            label: "Freelancermap",
            url: "https://www.freelancermap.pt",
          },
        ],
        icon: "✍️",
      },
      {
        title: "Jooble Portugal",
        description:
          "Aggregator job search engine combining multiple postings.",
        links: [{ label: "Jooble", url: "https://jooble.org" }],
        icon: "🔍",
      },
      {
        title: "Monster Portugal",
        description:
          "Global recruitment portal and resume database.",
        links: [{ label: "Monster", url: "https://www.monster.pt" }],
        icon: "🌐",
      },
      {
        title: "Carga de Trabalhos",
        description:
          "Creative, marketing, and design job openings.",
        links: [
          {
            label: "Carga",
            url: "https://www.cargadetrabalhos.net",
          },
        ],
        icon: "🎨",
      },
    ],
  },

  {
    id: "room-rent",
    title: "ROOM RENT",
    description:
      "Shared rooms and medium-term rentals for students and expats.",
    color: "#2a6f49",
    items: [
      {
        title: "Uniplaces",
        description:
          "Student and expat accommodation platform for rooms and rentals.",
        links: [
          {
            label: "Uniplaces",
            url: "https://www.uniplaces.com",
          },
        ],
        icon: "🛏️",
      },
      {
        title: "Inlife Housing",
        description:
          "Mid-to-long term student housing and rooms.",
        links: [
          {
            label: "Inlife",
            url: "https://inlifehousing.com",
          },
        ],
        icon: "🏠",
      },
      {
        title: "Spotahome",
        description:
          "Online verified home and room bookings.",
        links: [
          {
            label: "Spotahome",
            url: "https://www.spotahome.com",
          },
        ],
        icon: "🔑",
      },
      {
        title: "Erasmusu Rooms",
        description:
          "Student accommodation network for exchange participants.",
        links: [
          {
            label: "Erasmusu",
            url: "https://erasmusu.com",
          },
        ],
        icon: "🎓",
      },
      {
        title: "Roomlala",
        description:
          "Peer-to-peer room rentals and homestay accommodations.",
        links: [
          {
            label: "Roomlala",
            url: "https://www.roomlala.com",
          },
        ],
        icon: "🤝",
      },
      {
        title: "Nestpick",
        description:
          "Aggregator for furnished apartments and mid-term rooms.",
        links: [
          {
            label: "Nestpick",
            url: "https://www.nestpick.com",
          },
        ],
        icon: "📊",
      },
      {
        title: "Olx Quartos Para Arrendar",
        description:
          "Classified ads platform featuring shared room postings.",
        links: [
          {
            label: "OLX Quartos",
            url: "https://www.olx.pt",
          },
        ],
        icon: "📱",
      },
      {
        title: "CustoJusto Quartos",
        description:
          "Local classifieds listings for room rentals.",
        links: [
          {
            label: "CustoJusto",
            url: "https://www.custojusto.pt",
          },
        ],
        icon: "🔍",
      },
      {
        title: "Facebook Housing Groups",
        description:
          "Expats and students flatshare communities in Lisbon & Porto.",
        links: [
          {
            label: "FB Groups",
            url: "https://facebook.com",
          },
        ],
        icon: "👥",
      },
      {
        title: "HousingAnywhere",
        description:
          "Mid-term rental housing platform for international students.",
        links: [
          {
            label: "HousingAnywhere",
            url: "https://housinganywhere.com",
          },
        ],
        icon: "🌍",
      },
      {
        title: "Coliving.com",
        description:
          "Community-driven shared living spaces and digital nomad rooms.",
        links: [
          {
            label: "Coliving",
            url: "https://coliving.com",
          },
        ],
        icon: "💡",
      },
      {
        title: "Studentville Accommodations",
        description:
          "Directory of student residences across Portugal.",
        links: [
          {
            label: "Studentville",
            url: "https://www.studentville.it",
          },
        ],
        icon: "🏫",
      },
      {
        title: "AmberStudent",
        description:
          "Student housing booking platform near major universities.",
        links: [
          {
            label: "AmberStudent",
            url: "https://amberstudent.com",
          },
        ],
        icon: "🎒",
      },
      {
        title: "Roomster",
        description:
          "Global roommate finder and shared space platform.",
        links: [
          {
            label: "Roomster",
            url: "https://www.roomster.com",
          },
        ],
        icon: "👥",
      },
      {
        title: "Lisbon Rooms Direct",
        description:
          "Boutique mid-term independent room providers.",
        links: [
          {
            label: "Lisbon Rooms",
            url: "https://www.uniplaces.com",
          },
        ],
        icon: "🏡",
      },
      {
        title: "Porto Student Living",
        description:
          "Northern university housing network resources.",
        links: [
          {
            label: "Porto Living",
            url: "https://inlifehousing.com",
          },
        ],
        icon: "🎓",
      },
    ],
  },

  {
    id: "housing",
    title: "HOUSING",
    description:
      "Apartments and long-term rentals with housing resources.",
    color: "#8c4a24",
    items: [
      {
        title: "Idealista Portugal",
        description:
          "Leading property portal for buying and renting homes.",
        links: [
          {
            label: "Idealista",
            url: "https://www.idealista.pt",
          },
        ],
        icon: "🏠",
      },
      {
        title: "Imovirtual",
        description:
          "Real estate search engine for apartments and houses.",
        links: [
          {
            label: "Imovirtual",
            url: "https://www.imovirtual.com",
          },
        ],
        icon: "🏢",
      },
      {
        title: "Uniplaces Housing",
        description:
          "Housing platform for furnished accommodation and rentals.",
        links: [
          {
            label: "Uniplaces",
            url: "https://www.uniplaces.com",
          },
        ],
        icon: "📦",
      },
      {
        title: "Portal da Habitação",
        description:
          "Official government housing information and programs.",
        links: [
          {
            label: "Portal da Habitação",
            url: "https://www.portaldahabitacao.pt",
          },
        ],
        icon: "📄",
      },
      {
        title: "Casa Sapo",
        description:
          "Historic property portal for real estate in Portugal.",
        links: [
          {
            label: "Casa Sapo",
            url: "https://casa.sapo.pt",
          },
        ],
        icon: "🔑",
      },
      {
        title: "Remax Portugal",
        description:
          "Global real estate agency network with local listings.",
        links: [
          {
            label: "Remax",
            url: "https://www.remax.pt",
          },
        ],
        icon: "🏡",
      },
      {
        title: "Century 21 Portugal",
        description:
          "Property agency network for long-term apartment leases.",
        links: [
          {
            label: "Century 21",
            url: "https://www.century21.pt",
          },
        ],
        icon: "🏢",
      },
      {
        title: "Supercasa",
        description:
          "Real estate platform for houses, apartments, and land.",
        links: [
          {
            label: "Supercasa",
            url: "https://supercasa.pt",
          },
        ],
        icon: "🏘️",
      },
      {
        title: "BPI Expresso Imobiliário",
        description:
          "Real estate news and property listings.",
        links: [
          {
            label: "BPI Expresso",
            url: "https://imobiliario.expresso.pt",
          },
        ],
        icon: "📊",
      },
      {
        title: "ERA Portugal",
        description:
          "Real estate agency network offering rental properties.",
        links: [
          {
            label: "ERA",
            url: "https://www.era.pt",
          },
        ],
        icon: "🚪",
      },
      {
        title: "Zome Real Estate",
        description:
          "Modern Portuguese real estate agency and portals.",
        links: [
          {
            label: "Zome",
            url: "https://www.zome.pt",
          },
        ],
        icon: "🌟",
      },
      {
        title: "Habita",
        description:
          "Property agency specializing in rental contracts.",
        links: [
          {
            label: "Habita",
            url: "https://www.habita.pt",
          },
        ],
        icon: "📑",
      },
      {
        title: "Spotahome Long Term",
        description:
          "Verified long-term apartment bookings online.",
        links: [
          {
            label: "Spotahome",
            url: "https://www.spotahome.com",
          },
        ],
        icon: "🛋️",
      },
      {
        title: "QuintoAndar",
        description:
          "Digital rental experience platform.",
        links: [
          {
            label: "QuintoAndar",
            url: "https://www.quintoandar.com",
          },
        ],
        icon: "📱",
      },
      {
        title: "Airbnb Monthly Stays",
        description:
          "Mid-to-long term monthly furnished apartment rentals.",
        links: [
          {
            label: "Airbnb Monthly",
            url: "https://www.airbnb.com",
          },
        ],
        icon: "🧳",
      },
      {
        title: "Imogroup",
        description:
          "Real estate brokers association listings.",
        links: [
          {
            label: "Imogroup",
            url: "https://www.imogroup.pt",
          },
        ],
        icon: "📋",
      },
    ],
  },

  {
    id: "immigration",
    title: "IMMIGRATION",
    description:
      "Visas, residency permits, and citizenship pathways.",
    color: "#5c3d78",
    items: [
      {
        title: "AIMA Portal",
        description:
          "Agency for Integration, Migration and Asylum.",
        links: [
          {
            label: "AIMA Official",
            url: "https://aima.gov.pt",
          },
        ],
        icon: "🛂",
      },
      {
        title: "VFS Global",
        description:
          "Visa application centers and biometrics submission.",
        links: [
          {
            label: "VFS Global",
            url: "https://www.vfsglobal.com",
          },
        ],
        icon: "✈️",
      },
      {
        title: "Justiça Nationality",
        description:
          "Citizenship and nationality application regulations.",
        links: [
          {
            label: "Justiça.gov",
            url: "https://justica.gov.pt",
          },
        ],
        icon: "🌐",
      },
      {
        title: "ePortugal Portal",
        description:
          "Central public services directory for official guides.",
        links: [
          {
            label: "ePortugal",
            url: "https://eportugal.gov.pt",
          },
        ],
        icon: "🏛️",
      },
      {
        title: "Consulado Virtual",
        description:
          "Portuguese consular services for citizens abroad.",
        links: [
          {
            label: "Consulado Virtual",
            url: "https://www.portaldiplomatico.mne.gov.pt",
          },
        ],
        icon: "🌍",
      },
      {
        title: "SEF Archive & Transition",
        description:
          "Historical immigration information and transition to AIMA.",
        links: [
          {
            label: "AIMA Portal",
            url: "https://aima.gov.pt",
          },
        ],
        icon: "📂",
      },
      {
        title: "High Commission for Migration (ACM)",
        description:
          "Integration support centers and migrant assistance.",
        links: [
          {
            label: "ACM",
            url: "https://www.acm.gov.pt",
          },
        ],
        icon: "🤝",
      },
      {
        title: "CNAIM Support Centers",
        description:
          "National immigrant support hub locations.",
        links: [
          {
            label: "CNAIM",
            url: "https://www.acm.gov.pt",
          },
        ],
        icon: "🌟",
      },
      {
        title: "Portal das Comunidades",
        description:
          "Information network for Portuguese communities abroad.",
        links: [
          {
            label: "Comunidades",
            url: "https://www.portaldascomunidades.mne.gov.pt",
          },
        ],
        icon: "📖",
      },
      {
        title: "DGAJ Criminal Record",
        description:
          "Online requests for criminal record certificates.",
        links: [
          {
            label: "Registo Criminal",
            url: "https://registocriminal.justica.gov.pt",
          },
        ],
        icon: "🔒",
      },
      {
        title: "Golden Visa Portugal Official",
        description:
          "Investor residency program guidelines and requirements.",
        links: [
          {
            label: "AIMA Golden",
            url: "https://aima.gov.pt",
          },
        ],
        icon: "⭐",
      },
      {
        title: "D8 Digital Nomad Visa",
        description:
          "Remote worker residency permit information.",
        links: [
          {
            label: "Digital Nomad",
            url: "https://vistos.mne.gov.pt",
          },
        ],
        icon: "💻",
      },
      {
        title: "D7 Passive Income Visa",
        description:
          "Retiree and passive income visa information.",
        links: [
          {
            label: "D7 Visa",
            url: "https://vistos.mne.gov.pt",
          },
        ],
        icon: "📄",
      },
      {
        title: "Study Visa Portal",
        description:
          "Higher education and student entry permit information.",
        links: [
          {
            label: "Study Vistos",
            url: "https://vistos.mne.gov.pt",
          },
        ],
        icon: "🎓",
      },
      {
        title: "Family Reunification Rules",
        description:
          "AIMA guidelines for family reunification.",
        links: [
          {
            label: "Family Rules",
            url: "https://aima.gov.pt",
          },
        ],
        icon: "👨‍👩‍👧‍👦",
      },
    ],
  },

  {
    id: "open-bank-account",
    title: "OPEN BANK ACCOUNT",
    description:
      "Banking institutions and financial setup assistance.",
    color: "#1d6363",
    items: [
      {
        title: "Caixa Geral de Depósitos",
        description: "State-owned national bank.",
        links: [
          {
            label: "CGD Official",
            url: "https://www.cgd.pt",
          },
        ],
        icon: "🏦",
      },
      {
        title: "Millennium BCP",
        description: "Major commercial bank in Portugal.",
        links: [
          {
            label: "Millennium BCP",
            url: "https://www.millenniumbcp.pt",
          },
        ],
        icon: "💳",
      },
      {
        title: "Portal das Finanças (NIF)",
        description:
          "Tax authority portal containing NIF information.",
        links: [
          {
            label: "Finanças",
            url: "https://portaldasfinancas.gov.pt",
          },
        ],
        icon: "📊",
      },
      {
        title: "Banco de Portugal",
        description:
          "Central bank regulatory information and consumer rights.",
        links: [
          {
            label: "Banco de Portugal",
            url: "https://www.bportugal.pt",
          },
        ],
        icon: "🏛️",
      },
      {
        title: "Novo Banco",
        description:
          "Commercial banking services and account openings.",
        links: [
          {
            label: "Novo Banco",
            url: "https://www.novobanco.pt",
          },
        ],
        icon: "💰",
      },
      {
        title: "Banco Santander Totta",
        description:
          "Multinational bank branch network across Portugal.",
        links: [
          {
            label: "Santander",
            url: "https://www.santander.pt",
          },
        ],
        icon: "🏧",
      },
      {
        title: "BPI Bank",
        description:
          "Caixabank group retail and corporate banking.",
        links: [
          {
            label: "Banco BPI",
            url: "https://www.bpi.pt",
          },
        ],
        icon: "💳",
      },
      {
        title: "ActivoBank",
        description:
          "Digital banking subsidiary of Millennium BCP.",
        links: [
          {
            label: "ActivoBank",
            url: "https://www.activobank.pt",
          },
        ],
        icon: "📱",
      },
      {
        title: "Bankinter Portugal",
        description:
          "Retail and investment banking services.",
        links: [
          {
            label: "Bankinter",
            url: "https://www.bankinter.pt",
          },
        ],
        icon: "🌐",
      },
      {
        title: "Montepio Geral",
        description:
          "Mutual savings bank and credit cooperative.",
        links: [
          {
            label: "Montepio",
            url: "https://www.montepio.pt",
          },
        ],
        icon: "🤝",
      },
      {
        title: "Revolut Portugal",
        description:
          "Digital mobile banking alternative accounts.",
        links: [
          {
            label: "Revolut",
            url: "https://www.revolut.com",
          },
        ],
        icon: "📲",
      },
      {
        title: "N26 Bank",
        description:
          "European mobile bank account setup.",
        links: [
          {
            label: "N26",
            url: "https://n26.com",
          },
        ],
        icon: "💳",
      },
      {
        title: "Wise Multi-Currency Account",
        description:
          "International transfers and digital debit cards.",
        links: [
          {
            label: "Wise",
            url: "https://wise.com",
          },
        ],
        icon: "💱",
      },
      {
        title: "CGD Conta Mais Ordenado",
        description:
          "Salary account packages and banking services.",
        links: [
          {
            label: "CGD Salary",
            url: "https://www.cgd.pt",
          },
        ],
        icon: "💼",
      },
      {
        title: "Tax Representative Services",
        description:
          "Information about fiscal representation requirements.",
        links: [
          {
            label: "Finanças NIF",
            url: "https://portaldasfinancas.gov.pt",
          },
        ],
        icon: "📝",
      },
    ],
  },

  {
    id: "recruitment-agencies",
    title: "RECRUITMENT AGENCIES",
    description:
      "Job placement and temporary work staffing companies.",
    color: "#8c2447",
    items: [
      {
        title: "Randstad Portugal",
        description:
          "Global recruitment and temporary staffing agency.",
        links: [
          {
            label: "Randstad",
            url: "https://randstad.pt",
          },
        ],
        icon: "👔",
      },
      {
        title: "Adecco Portugal",
        description:
          "Employment placement and human resources services.",
        links: [
          {
            label: "Adecco",
            url: "https://adecco.pt",
          },
        ],
        icon: "🏢",
      },
      {
        title: "ManpowerGroup",
        description:
          "Temporary staffing and workforce solutions.",
        links: [
          {
            label: "Manpower",
            url: "https://manpower.pt",
          },
        ],
        icon: "⏱️",
      },
      {
        title: "Hays Portugal",
        description:
          "Specialized recruitment for professional roles.",
        links: [
          {
            label: "Hays",
            url: "https://www.hays.pt",
          },
        ],
        icon: "📈",
      },
      {
        title: "Michael Page Portugal",
        description:
          "Professional recruitment and executive search firm.",
        links: [
          {
            label: "Michael Page",
            url: "https://www.michaelpage.pt",
          },
        ],
        icon: "🎯",
      },
      {
        title: "Page Personnel",
        description:
          "Clerical, technical, and junior professional staffing.",
        links: [
          {
            label: "Page Personnel",
            url: "https://www.pagepersonnel.pt",
          },
        ],
        icon: "👥",
      },
      {
        title: "Kelly Services",
        description:
          "Global staffing agency and workforce solutions.",
        links: [
          {
            label: "Kelly Services",
            url: "https://www.kellyservices.pt",
          },
        ],
        icon: "📋",
      },
      {
        title: "Talenter",
        description:
          "Portuguese human resources and outsourcing agency.",
        links: [
          {
            label: "Talenter",
            url: "https://www.talenter.com",
          },
        ],
        icon: "🌟",
      },
      {
        title: "Spring Professional",
        description:
          "Consultancy and middle management recruitment.",
        links: [
          {
            label: "Spring",
            url: "https://www.springprofessional.pt",
          },
        ],
        icon: "💼",
      },
      {
        title: "Elevus",
        description:
          "Human resources consultancy and headhunting agency.",
        links: [
          {
            label: "Elevus",
            url: "https://www.elevus.pt",
          },
        ],
        icon: "🔍",
      },
      {
        title: "Quaternaire Portugal",
        description:
          "Employment training and HR development.",
        links: [
          {
            label: "Quaternaire",
            url: "https://www.quaternaire.pt",
          },
        ],
        icon: "📚",
      },
      {
        title: "Timing Human Resources",
        description:
          "Temporary work and human capital management.",
        links: [
          {
            label: "Timing HR",
            url: "https://www.timing.pt",
          },
        ],
        icon: "⏱️",
      },
      {
        title: "Worken",
        description:
          "Recruitment and workforce outsourcing services.",
        links: [
          {
            label: "Worken",
            url: "https://www.worken.pt",
          },
        ],
        icon: "🏢",
      },
      {
        title: "Multipessoal",
        description:
          "Staffing solutions, outsourcing, and payroll management.",
        links: [
          {
            label: "Multipessoal",
            url: "https://www.multipessoal.pt",
          },
        ],
        icon: "📊",
      },
      {
        title: "Securitas Direct Jobs",
        description:
          "Direct corporate security and field sales recruiting.",
        links: [
          {
            label: "Securitas",
            url: "https://www.securitasdirect.pt",
          },
        ],
        icon: "🛡️",
      },
    ],
  },

  {
    id: "health-services",
    title: "HEALTH SERVICES",
    description:
      "Public hospitals, clinics, and emergency care directories.",
    color: "#4d5d53",
    items: [
      {
        title: "SNS 24 (Portal da Saúde)",
        description:
          "National Health Service portal and 24/7 medical line.",
        links: [
          {
            label: "SNS 24 Official",
            url: "https://sns24.gov.pt",
          },
        ],
        icon: "🏥",
      },
      {
        title: "CUF Saúde",
        description:
          "Private hospital and clinic network.",
        links: [
          {
            label: "CUF Hospitais",
            url: "https://www.cuf.pt",
          },
        ],
        icon: "🩺",
      },
      {
        title: "Emergency Services (112)",
        description:
          "General European emergency number.",
        links: [
          {
            label: "Proteção Civil",
            url: "https://www.prociv.pt",
          },
        ],
        icon: "🚨",
      },
      {
        title: "Luz Saúde",
        description:
          "Private hospital group with medical facilities.",
        links: [
          {
            label: "Hospital da Luz",
            url: "https://www.hospitaldaluz.pt",
          },
        ],
        icon: "🏨",
      },
      {
        title: "Lusíadas Saúde",
        description:
          "Private healthcare network and specialized clinics.",
        links: [
          {
            label: "Lusíadas",
            url: "https://www.lusiadas.pt",
          },
        ],
        icon: "💉",
      },
      {
        title: "Cruz Vermelha Portuguesa",
        description:
          "Red Cross medical assistance and humanitarian aid.",
        links: [
          {
            label: "Cruz Vermelha",
            url: "https://www.cruzvermelha.pt",
          },
        ],
        icon: "➕",
      },
      {
        title: "INEM",
        description:
          "National institute of medical emergency dispatch.",
        links: [
          {
            label: "INEM Portal",
            url: "https://www.inem.pt",
          },
        ],
        icon: "🚑",
      },
      {
        title: "Saúde 24 App",
        description:
          "Digital health application and medical guidance.",
        links: [
          {
            label: "SNS App",
            url: "https://sns24.gov.pt",
          },
        ],
        icon: "📱",
      },
      {
        title: "Centro de Saúde Locator",
        description:
          "Find your local public health clinic.",
        links: [
          {
            label: "Portal SNS",
            url: "https://www.sns.gov.pt",
          },
        ],
        icon: "🏥",
      },
      {
        title: "Order of Physicians",
        description:
          "Directory and professional information for doctors.",
        links: [
          {
            label: "Ordem Médicos",
            url: "https://ordemdosmedicos.pt",
          },
        ],
        icon: "👨‍⚕️",
      },
      {
        title: "European Health Insurance Card",
        description:
          "EU healthcare coverage information for temporary visitors.",
        links: [
          {
            label: "Segurança Social",
            url: "https://seg-social.pt",
          },
        ],
        icon: "🇪🇺",
      },
      {
        title: "Private Health Insurance",
        description:
          "Information about private health insurance providers.",
        links: [
          {
            label: "Médis",
            url: "https://www.medis.pt",
          },
        ],
        icon: "🛡️",
      },
      {
        title: "Mental Health Support",
        description:
          "Psychological help and mental health resources.",
        links: [
          {
            label: "SNS Mental Health",
            url: "https://sns24.gov.pt",
          },
        ],
        icon: "🧠",
      },
      {
        title: "Veterinary Emergency Clinics",
        description:
          "Pet emergency hospitals and urgent veterinary services.",
        links: [
          {
            label: "Veterinary Order",
            url: "https://www.omv.pt",
          },
        ],
        icon: "🐾",
      },
      {
        title: "Blood Donation Centers",
        description:
          "National blood and transplantation institute.",
        links: [
          {
            label: "IPST",
            url: "https://www.ipst.pt",
          },
        ],
        icon: "🩸",
      },
    ],
  },

  {
    id: "public-transport",
    title: "PUBLIC TRANSPORT",
    description:
      "Trains, metros, and local transit networks across Portugal.",
    color: "#783d5c",
    items: [
      {
        title: "Comboios de Portugal (CP)",
        description:
          "National railway and train network operator.",
        links: [
          {
            label: "CP Portal",
            url: "https://www.cp.pt",
          },
        ],
        icon: "🚆",
      },
      {
        title: "Metropolitano de Lisboa",
        description:
          "Subway network for the capital city.",
        links: [
          {
            label: "Metro Lisboa",
            url: "https://www.metrolisboa.pt",
          },
        ],
        icon: "🚇",
      },
      {
        title: "Metro do Porto",
        description:
          "Light rail transit system in Porto.",
        links: [
          {
            label: "Metro Porto",
            url: "https://www.metrodoporto.pt",
          },
        ],
        icon: "🚝",
      },
      {
        title: "Carris Lisboa",
        description:
          "Bus and tram network serving Lisbon municipality.",
        links: [
          {
            label: "Carris",
            url: "https://www.carris.pt",
          },
        ],
        icon: "🚌",
      },
      {
        title: "STCP Porto",
        description:
          "Public bus transport system operating in greater Porto.",
        links: [
          {
            label: "STCP",
            url: "https://www.stcp.pt",
          },
        ],
        icon: "🚍",
      },
      {
        title: "Transtejo Soflusa",
        description:
          "River ferry connections across the Tagus River.",
        links: [
          {
            label: "Transtejo",
            url: "https://www.transtejo.pt",
          },
        ],
        icon: "⛴️",
      },
      {
        title: "Fertagus",
        description:
          "Commuter train service connecting Lisbon and Setúbal.",
        links: [
          {
            label: "Fertagus",
            url: "https://www.fertagus.pt",
          },
        ],
        icon: "🚆",
      },
      {
        title: "Rede Expressos",
        description:
          "National long-distance express coach network.",
        links: [
          {
            label: "Rede Expressos",
            url: "https://www.rede-expressos.pt",
          },
        ],
        icon: "🚍",
      },
      {
        title: "FlixBus Portugal",
        description:
          "Long-distance intercity bus travel routes.",
        links: [
          {
            label: "FlixBus",
            url: "https://www.flixbus.pt",
          },
        ],
        icon: "🟢",
      },
      {
        title: "Transportes de Coimbra",
        description:
          "Municipal bus service in Coimbra.",
        links: [
          {
            label: "TUC",
            url: "https://www.smtuc.pt",
          },
        ],
        icon: "🚌",
      },
      {
        title: "Navegante Pass",
        description:
          "Integrated public transit pass for the Lisbon region.",
        links: [
          {
            label: "Navegante",
            url: "https://www.navegante.pt",
          },
        ],
        icon: "💳",
      },
      {
        title: "Andante Card Porto",
        description:
          "Multimodal ticketing system for northern transit networks.",
        links: [
          {
            label: "Andante",
            url: "https://www.linhandante.com",
          },
        ],
        icon: "🎫",
      },
      {
        title: "Airport Metro Connections",
        description:
          "Public transport information for Lisbon Airport.",
        links: [
          {
            label: "Lisbon Airport",
            url: "https://www.aeroportolisboa.pt",
          },
        ],
        icon: "✈️",
      },
      {
        title: "CP Alfa Pendular",
        description:
          "Fast rail service connecting major Portuguese cities.",
        links: [
          {
            label: "Alfa Pendular",
            url: "https://www.cp.pt",
          },
        ],
        icon: "🚄",
      },
      {
        title: "Rome2rio Portugal",
        description:
          "Multi-modal journey planner for routes across the country.",
        links: [
          {
            label: "Rome2rio",
            url: "https://www.rome2rio.com",
          },
        ],
        icon: "🗺️",
      },
    ],
  },

  {
    id: "driving-licence",
    title: "DRIVING LICENCE",
    description:
      "Exchange, applications, and vehicle registry services.",
    color: "#3d5c78",
    items: [
      {
        title: "IMT Online",
        description:
          "Driving license exchanges, renewals, and vehicle registration.",
        links: [
          {
            label: "IMT Portal",
            url: "https://www.imt-ip.pt",
          },
        ],
        icon: "🚗",
      },
      {
        title: "Automóvel Clube de Portugal (ACP)",
        description:
          "Motoring association and assistance services.",
        links: [
          {
            label: "ACP Portal",
            url: "https://www.acp.pt",
          },
        ],
        icon: "🚙",
      },
      {
        title: "Atestado Médico C.N.H.",
        description:
          "Medical certificate information for license renewals.",
        links: [
          {
            label: "SNS Portal",
            url: "https://sns24.gov.pt",
          },
        ],
        icon: "📋",
      },
      {
        title: "Citizen Shop (Loja do Cidadão)",
        description:
          "In-person desks for public document services.",
        links: [
          {
            label: "ePortugal",
            url: "https://eportugal.gov.pt",
          },
        ],
        icon: "🏢",
      },
      {
        title: "Escola de Condução Directory",
        description:
          "Accredited driving schools network in Portugal.",
        links: [
          {
            label: "IMT Escolas",
            url: "https://www.imt-ip.pt",
          },
        ],
        icon: "🏫",
      },
      {
        title: "Tolls & Via Verde",
        description:
          "Electronic highway toll payment services.",
        links: [
          {
            label: "Via Verde",
            url: "https://www.viaverde.pt",
          },
        ],
        icon: "🛣️",
      },
      {
        title: "Portuguese License Exchange Guidelines",
        description:
          "Foreign driving license conversion information.",
        links: [
          {
            label: "IMT Exchange",
            url: "https://www.imt-ip.pt",
          },
        ],
        icon: "🔄",
      },
      {
        title: "Vehicle Registration Document (DUA)",
        description:
          "Vehicle ownership and registration services.",
        links: [
          {
            label: "Automóvel Online",
            url: "https://www.automovelonline.mj.pt",
          },
        ],
        icon: "📄",
      },
      {
        title: "Periodic Technical Inspection (IPO)",
        description:
          "Mandatory vehicle inspection information.",
        links: [
          {
            label: "IMT IPO",
            url: "https://www.imt-ip.pt",
          },
        ],
        icon: "🔧",
      },
      {
        title: "Motor Insurance Compulsory Guide",
        description:
          "Information about compulsory vehicle insurance.",
        links: [
          {
            label: "ASF Insurance",
            url: "https://www.asf.com.pt",
          },
        ],
        icon: "🛡️",
      },
      {
        title: "ANSR Road Safety Authority",
        description:
          "National road safety information and regulations.",
        links: [
          {
            label: "ANSR",
            url: "https://www.ansr.pt",
          },
        ],
        icon: "⚠️",
      },
      {
        title: "Brisa Concessionária",
        description:
          "Highway operations and motorway information.",
        links: [
          {
            label: "Brisa",
            url: "https://www.brisa.pt",
          },
        ],
        icon: "🚗",
      },
      {
        title: "Electric Vehicle Charging Stations",
        description:
          "Mobi.E public charging network locator.",
        links: [
          {
            label: "Mobi.E",
            url: "https://www.mobie.pt",
          },
        ],
        icon: "⚡",
      },
      {
        title: "Car Rental Portals",
        description:
          "Short-term car rental options for travelers.",
        links: [
          {
            label: "Rentalcars",
            url: "https://www.rentalcars.com",
          },
        ],
        icon: "🔑",
      },
      {
        title: "Carsharing Platforms",
        description:
          "Flexible urban car sharing services.",
        links: [
          {
            label: "Getaround",
            url: "https://www.getaround.com",
          },
        ],
        icon: "🚙",
      },
    ],
  },

  {
    id: "education-training",
    title: "EDUCATION & TRAINING",
    description:
      "Schools, universities, and professional courses.",
    color: "#78643d",
    items: [
      {
        title: "Direção-Geral da Educação",
        description:
          "National school system and education administration.",
        links: [
          {
            label: "DGE Portal",
            url: "https://www.dge.mec.pt",
          },
        ],
        icon: "🏫",
      },
      {
        title: "DGES Higher Education",
        description:
          "University placements and degree recognitions.",
        links: [
          {
            label: "DGES",
            url: "https://www.dges.gov.pt",
          },
        ],
        icon: "🎓",
      },
      {
        title: "Universidade de Lisboa",
        description:
          "Public university in the capital city.",
        links: [
          {
            label: "ULisboa",
            url: "https://www.ulisboa.pt",
          },
        ],
        icon: "🏛️",
      },
      {
        title: "Universidade do Porto",
        description:
          "Higher education institution in Porto.",
        links: [
          {
            label: "U.Porto",
            url: "https://www.up.pt",
          },
        ],
        icon: "📘",
      },
      {
        title: "Universidade de Coimbra",
        description:
          "Historic Portuguese university.",
        links: [
          {
            label: "UC Official",
            url: "https://www.uc.pt",
          },
        ],
        icon: "📜",
      },
      {
        title: "Instituto Politécnico de Lisboa",
        description:
          "Polytechnic institute offering practical degrees.",
        links: [
          {
            label: "IPL",
            url: "https://www.ipl.pt",
          },
        ],
        icon: "📐",
      },
      {
        title: "IEFP Professional Training Courses",
        description:
          "Vocational training programs and certifications.",
        links: [
          {
            label: "IEFP Training",
            url: "https://iefp.pt",
          },
        ],
        icon: "🛠️",
      },
      {
        title: "Nova School of Business and Economics",
        description:
          "Business school offering higher and executive education.",
        links: [
          {
            label: "Nova SBE",
            url: "https://www.novasbe.pt",
          },
        ],
        icon: "📊",
      },
      {
        title: "ISCTE University Institute of Lisbon",
        description:
          "University focusing on social sciences, business and technology.",
        links: [
          {
            label: "ISCTE",
            url: "https://www.iscte-iul.pt",
          },
        ],
        icon: "🔬",
      },
      {
        title: "Erasmus+ Portugal Agency",
        description:
          "European mobility program information.",
        links: [
          {
            label: "Erasmus+ Pt",
            url: "https://www.erasmusmais.pt",
          },
        ],
        icon: "🇪🇺",
      },
      {
        title: "Escola Superior de Hotelaria e Turismo",
        description:
          "Hospitality and tourism specialized education.",
        links: [
          {
            label: "ESHTE",
            url: "https://www.eshte.pt",
          },
        ],
        icon: "🏨",
      },
      {
        title: "Porto Business School",
        description:
          "Executive education and MBA programs.",
        links: [
          {
            label: "PBS",
            url: "https://www.pbs.up.pt",
          },
        ],
        icon: "💼",
      },
      {
        title: "Coursera & Udemy",
        description:
          "Online learning platforms for professional skills.",
        links: [
          {
            label: "Coursera",
            url: "https://www.coursera.org",
          },
        ],
        icon: "💻",
      },
      {
        title: "Instituto Camões Portuguese Courses",
        description:
          "Portuguese language learning resources.",
        links: [
          {
            label: "Instituto Camões",
            url: "https://www.instituto-camoes.pt",
          },
        ],
        icon: "🗣️",
      },
      {
        title: "School Enrollment Portal",
        description:
          "Online registration system for public school students.",
        links: [
          {
            label: "Portal das Matrículas",
            url: "https://portalmatriculas.dgeec.mec.pt",
          },
        ],
        icon: "📝",
      },
    ],
  },

  {
    id: "pharmacies-daily-life",
    title: "PHARMACIES & DAILY LIFE",
    description:
      "Local pharmacies, utilities, and daily essentials.",
    color: "#3d7852",
    items: [
      {
        title: "Farmácias Portuguesas",
        description:
          "National pharmacy association and medicine locator.",
        links: [
          {
            label: "Farmácias Pt",
            url: "https://farmaciasportuguesas.pt",
          },
        ],
        icon: "💊",
      },
      {
        title: "CTT Correios",
        description:
          "National postal and courier delivery services.",
        links: [
          {
            label: "CTT Portal",
            url: "https://www.ctt.pt",
          },
        ],
        icon: "✉️",
      },
      {
        title: "ANACOM",
        description:
          "Telecommunications and communications regulator.",
        links: [
          {
            label: "ANACOM",
            url: "https://www.anacom.pt",
          },
        ],
        icon: "📡",
      },
      {
        title: "EDP",
        description:
          "Electricity and energy services.",
        links: [
          {
            label: "EDP",
            url: "https://www.edp.pt",
          },
        ],
        icon: "⚡",
      },
      {
        title: "Galp Energia",
        description:
          "Energy, gas, electricity, and fuel services.",
        links: [
          {
            label: "Galp",
            url: "https://www.galp.com",
          },
        ],
        icon: "🔥",
      },
    ],
  },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeInfo, setActiveInfo] = useState(null);

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    setSearchQuery("");
    setActiveInfo(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
    setSearchQuery("");
    setActiveInfo(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInfoClick = (page) => {
    setActiveInfo(page);
    setSelectedCategory(null);
    setSearchQuery("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentCategoryData = categoriesData.find(
    (category) => category.id === selectedCategory
  );

  const filteredItems = currentCategoryData
    ? currentCategoryData.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="sanolines-app">

      {/* Navigation Header */}
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 30px",
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        {/* Logo / Brand */}
        <div
          className="nav-brand"
          onClick={handleBackToHome}
          role="button"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              handleBackToHome();
            }
          }}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            className="nav-logo-box"
            style={{
              background: "#2b4c7e",
              color: "#fff",
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              borderRadius: "4px",
            }}
          >
            S
          </div>

          <div
            className="nav-title-group"
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              className="brand-name"
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "#111",
              }}
            >
              SANOLINES
            </span>

            <span
              className="brand-subtitle"
              style={{
                fontSize: "10px",
                color: "#666",
              }}
            >
              INDEPENDENT INFORMATION & SERVICES DIRECTORY
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <button
            type="button"
            className="nav-link-btn"
            onClick={handleBackToHome}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",
              color: "#333",
              padding: "5px 10px",
            }}
          >
            Home
          </button>

          <button
            type="button"
            className="nav-link-btn"
            onClick={handleBackToHome}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "500",
              color: "#333",
              padding: "5px 10px",
            }}
          >
            Services
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">

        {/* Information Pages */}
        {activeInfo ? (
          <div
            style={{
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <button
              type="button"
              className="back-btn"
              onClick={handleBackToHome}
              style={{
                marginBottom: "20px",
              }}
            >
              &larr; Back to Home
            </button>

            <div
              className="detail-header"
              style={{
                padding: "30px",
              }}
            >
              {activeInfo === "privacy" && (
                <>
                  <h2>Privacy Policy</h2>

                  <p>
                    Sanolines is an independent information and services
                    directory. We provide links to external websites so
                    visitors can find relevant public, commercial, and
                    community resources.
                  </p>

                  <p>
                    Sanolines does not require visitors to provide personal
                    information simply to browse the public directory.
                  </p>

                  <p>
                    Sanolines may use standard website technologies such as
                    cookies, analytics, or similar tools to understand
                    website usage and improve the service. Where applicable,
                    information is handled according to the relevant
                    provider's policies.
                  </p>

                  <p>
                    External websites linked from Sanolines may have their
                    own privacy policies, cookies, analytics systems, and
                    data-collection practices. Visitors should review the
                    privacy policies of those websites before providing
                    personal information.
                  </p>

                  <p>
                    Sanolines does not control the privacy practices of
                    external websites and is not responsible for their
                    policies or practices.
                  </p>

                  <button
                    type="button"
                    onClick={handleBackToHome}
                    style={{
                      marginTop: "15px",
                      background: "#2b4c7e",
                      color: "#fff",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Close
                  </button>
                </>
              )}

              {activeInfo === "terms" && (
                <>
                  <h2>Terms & Conditions</h2>

                  <p>
                    Sanolines is an independent information and services
                    directory. The website provides general information and
                    links to external websites.
                  </p>

                  <p>
                    Sanolines does not provide, sell, operate, or guarantee
                    the services listed on the website unless explicitly
                    stated otherwise.
                  </p>

                  <p>
                    External websites, organisations, prices, availability,
                    requirements, application procedures, and services are
                    controlled by their respective providers.
                  </p>

                  <p>
                    Visitors should verify important information directly
                    with the relevant organisation or official website before
                    making decisions or submitting applications.
                  </p>

                  <p>
                    Sanolines is not an official government institution,
                    authority, agency, bank, hospital, employer, property
                    provider, immigration authority, or other service
                    provider.
                  </p>

                  <button
                    type="button"
                    onClick={handleBackToHome}
                    style={{
                      marginTop: "15px",
                      background: "#2b4c7e",
                      color: "#fff",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Close
                  </button>
                </>
              )}

              {activeInfo === "disclaimer" && (
                <>
                  <h2>Disclaimer</h2>

                  <p>
                    Sanolines is an independent information and services
                    directory. The website is designed to help visitors
                    find useful public, commercial, and community resources.
                  </p>

                  <p>
                    Sanolines does not provide the services listed on this
                    website and does not represent the organisations,
                    companies, agencies, or other providers linked from the
                    directory.
                  </p>

                  <p>
                    The appearance of an organisation, company, platform, or
                    website in the Sanolines directory does not mean that
                    Sanolines endorses, sponsors, represents, or is formally
                    affiliated with that organisation unless this is clearly
                    stated.
                  </p>

                  <p>
                    External providers are responsible for their own
                    services, prices, availability, eligibility requirements,
                    application procedures, policies, and information.
                    These details may change without notice.
                  </p>

                  <p>
                    Visitors should verify important information directly
                    with the relevant provider or official source before
                    making decisions, submitting applications, paying money,
                    or relying on information.
                  </p>

                  <p>
                    Information on Sanolines is provided for general
                    informational purposes only. It should not be considered
                    legal, financial, medical, immigration, employment,
                    housing, or other professional advice.
                  </p>

                  <button
                    type="button"
                    onClick={handleBackToHome}
                    style={{
                      marginTop: "15px",
                      background: "#2b4c7e",
                      color: "#fff",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Close
                  </button>
                </>
              )}

              {activeInfo === "about" && (
                <>
                  <h2>About Sanolines</h2>

                  <p>
                    Sanolines is an independent information and services
                    directory created to make useful resources easier to
                    find.
                  </p>

                  <p>
                    The website brings together public, commercial, and
                    community resources and connects visitors directly to
                    relevant external websites.
                  </p>

                  <p>
                    Sanolines does not provide the services listed on the
                    website. Instead, it helps visitors locate the relevant
                    organisation or provider.
                  </p>

                  <p>
                    The directory covers areas such as employment, housing,
                    immigration, banking, health services, transport,
                    education, recruitment, and everyday resources.
                  </p>

                  <p>
                    Information and external links may change over time.
                    Visitors should always confirm current requirements,
                    prices, availability, and procedures with the relevant
                    provider.
                  </p>

                  <button
                    type="button"
                    onClick={handleBackToHome}
                    style={{
                      marginTop: "15px",
                      background: "#2b4c7e",
                      color: "#fff",
                      border: "none",
                      padding: "10px 18px",
                      borderRadius: "5px",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        ) : !selectedCategory ? (

          /* Home Page */
          <div className="categories-grid">
            {categoriesData.map((category) => (
              <div
                key={category.id}
                className="category-card"
                style={{
                  backgroundColor: category.color,
                  cursor: "pointer",
                }}
                onClick={() => handleCategoryClick(category.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    handleCategoryClick(category.id);
                  }
                }}
              >
                <div className="card-content-inner">
                  <h2>{category.title}</h2>

                  <p>{category.description}</p>
                </div>

                <div className="card-action">
                  <span className="view-services-btn">
                    VIEW SERVICES &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>

        ) : (

          /* Category Detail Page */
          <div className="category-detail-view">

            <button
              type="button"
              className="back-btn"
              onClick={handleBackToHome}
            >
              &larr; Back to all categories
            </button>

            <div className="detail-header">

              <h2>{currentCategoryData.title}</h2>

              <p>{currentCategoryData.description}</p>

              <div className="search-box">
                <input
                  type="text"
                  placeholder={`Search in ${currentCategoryData.title}...`}
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  aria-label={`Search in ${currentCategoryData.title}`}
                />
              </div>

            </div>

            <div className="items-grid">

              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div
                    key={`${item.title}-${index}`}
                    className="resource-item-card"
                  >
                    <div className="item-icon">
                      {item.icon}
                    </div>

                    <div className="item-info">

                      <h3>{item.title}</h3>

                      <p>{item.description}</p>

                      <div className="item-links">

                        {item.links.map((link, linkIndex) => (
                          <a
                            key={`${link.label}-${linkIndex}`}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link-btn"
                          >
                            {link.label} &nearr;
                          </a>
                        ))}

                      </div>

                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">
                  No resources found matching your search.
                </p>
              )}

            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer
        className="app-footer"
        style={{
          background: "#f8f9fa",
          padding: "35px 20px",
          borderTop: "1px solid #e5e7eb",
          color: "#555",
          fontSize: "13px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >

          {/* Footer Main Area */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >

            {/* Footer Information */}
            <div
              style={{
                flex: "1 1 600px",
                minWidth: "280px",
              }}
            >
              <p
                style={{
                  marginBottom: "18px",
                  color: "#555",
                }}
              >
                <strong>Sanolines</strong> is an independent information and
                services directory. We help visitors find useful public,
                commercial, and community resources and connect directly to
                relevant external websites.
              </p>

              <p
                style={{
                  marginBottom: "20px",
                  color: "#666",
                }}
              >
                <strong>Disclaimer:</strong> Sanolines does not provide the
                services listed on this website and is not an official
                government institution or authority. External websites,
                organisations, prices, availability, requirements, and
                services are managed by their respective providers.
              </p>

              {/* Footer Links */}
              <div
                style={{
                  margin: "20px 0",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "25px",
                  flexWrap: "wrap",
                  fontWeight: "600",
                }}
              >

                <button
                  type="button"
                  onClick={() => handleInfoClick("privacy")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: "#2b4c7e",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Privacy Policy
                </button>

                <button
                  type="button"
                  onClick={() => handleInfoClick("terms")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: "#2b4c7e",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Terms & Conditions
                </button>

                <button
                  type="button"
                  onClick={() => handleInfoClick("disclaimer")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: "#2b4c7e",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  Disclaimer
                </button>

                <button
                  type="button"
                  onClick={() => handleInfoClick("about")}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    color: "#2b4c7e",
                    fontWeight: "600",
                    fontSize: "13px",
                  }}
                >
                  About
                </button>

              </div>
            </div>

            {/* Sanolines Footer Brand - Right Side */}
            <div
              style={{
                flex: "0 0 190px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "110px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "10px",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    background: "#2b4c7e",
                    color: "#fff",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    borderRadius: "4px",
                  }}
                >
                  S
                </div>

                <strong
                  style={{
                    color: "#222",
                    fontSize: "15px",
                    letterSpacing: "0.5px",
                  }}
                >
                  SANOLINES
                </strong>
              </div>

              <p
                style={{
                  fontSize: "11px",
                  color: "#777",
                  marginTop: "10px",
                  marginBottom: 0,
                  textAlign: "right",
                  width: "100%",
                }}
              >
                Independent information
                <br />
                & services directory
              </p>
            </div>

          </div>

          {/* Copyright */}
          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              marginTop: "25px",
              paddingTop: "15px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                color: "#888",
                margin: 0,
              }}
            >
              &copy; {new Date().getFullYear()} Sanolines. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}

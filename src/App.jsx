import React, { useState } from "react";
import "./App.css";

const categoriesData = [
  {
    id: "jobs",
    title: "JOBS",
    description: "Employment & recruitment resources across national boards and agencies.",
    color: "#2b4c7e",
    items: [
      { title: "IEFP Portal", description: "National employment institute for jobs and vocational training.", links: [{ label: "IEFP Official", url: "https://iefp.pt" }], icon: "💼" },
      { title: "NetEmprego", description: "Popular national job board for open positions.", links: [{ label: "NetEmprego", url: "https://netemprego.pt" }], icon: "🔍" },
      { title: "LinkedIn Jobs", description: "Professional network and corporate job listings.", links: [{ label: "LinkedIn", url: "https://linkedin.com" }], icon: "🌐" },
      { title: "EURES European Job Mobility", description: "EU portal for cross-border job seekers.", links: [{ label: "EURES", url: "https://eures.europa.eu" }], icon: "🇪🇺" },
      { title: "Sapo Emprego", description: "Major Portuguese classifieds job portal.", links: [{ label: "Sapo Emprego", url: "https://emprego.sapo.pt" }], icon: "📑" },
      { title: "Glassdoor Portugal", description: "Company reviews, salaries, and open job listings.", links: [{ label: "Glassdoor", url: "https://www.glassdoor.pt" }], icon: "⭐" },
      { title: "Indeed Portugal", description: "Search millions of jobs from the web and company sites.", links: [{ label: "Indeed", url: "https://www.indeed.pt" }], icon: "📋" },
      { title: "Turismo de Portugal Jobs", description: "Hospitality and tourism industry specific career boards.", links: [{ label: "Touring Jobs", url: "https://www.turismodeportugal.pt" }], icon: "🏨" },
      { title: "IT Jobs Portugal", description: "Dedicated portal for tech and software engineering roles.", links: [{ label: "IT Jobs", url: "https://www.itjobs.pt" }], icon: "💻" },
      { title: "Bolsa de Emprego Público (BEP)", description: "Official public administration employment platform.", links: [{ label: "BEP Portal", url: "https://www.bep.gov.pt" }], icon: "🏛️" },
      { title: "Empregos Coimbra", description: "Regional employment board for central region.", links: [{ label: "Coimbra Jobs", url: "https://www.iefp.pt" }], icon: "📍" },
      { title: "Startup Portugal", description: "Startup ecosystem job boards and innovation careers.", links: [{ label: "Startup Pt", url: "https://www.startupportugal.com" }], icon: "🚀" },
      { title: "Expresso Emprego", description: "Top national newspaper career marketplace.", links: [{ label: "Expresso", url: "https://emprego.expresso.pt" }], icon: "📰" },
      { title: "Remote.co / WeWorkRemotely", description: "Top resources for remote work opportunities worldwide.", links: [{ label: "Remote Jobs", url: "https://weworkremotely.com" }], icon: "🏡" },
      { title: "Freelancermap", description: "IT and engineering project contracts for independent contractors.", links: [{ label: "Freelancermap", url: "https://www.freelancermap.pt" }], icon: "✍️" },
      { title: "Jooble Portugal", description: "Aggregator job search engine combining multiple postings.", links: [{ label: "Jooble", url: "https://jooble.org" }], icon: "🔍" },
      { title: "Monster Portugal", description: "Global recruitment portal and resume database.", links: [{ label: "Monster", url: "https://www.monster.pt" }], icon: "🌐" },
      { title: "Carga de Trabalhos", description: "Creative, marketing, and design job openings.", links: [{ label: "Carga", url: "https://www.cargadetrabalhos.net" }], icon: "🎨" }
    ]
  },
  {
    id: "room-rent",
    title: "ROOM RENT",
    description: "Shared rooms and medium-term rentals for students and expats.",
    color: "#2a6f49",
    items: [
      { title: "Uniplaces Partner", description: "Verified student and expat room rentals with booking integration.", links: [{ label: "Uniplaces", url: "https://www.uniplaces.com" }], icon: "🛏️" },
      { title: "Inlife Housing", description: "Mid-to-long term student housing and rooms.", links: [{ label: "Inlife", url: "https://inlifehousing.com" }], icon: "🏠" },
      { title: "Spotahome", description: "Online verified home and room bookings.", links: [{ label: "Spotahome", url: "https://www.spotahome.com" }], icon: "🔑" },
      { title: "Erasmusu Rooms", description: "Student accommodation network for exchange participants.", links: [{ label: "Erasmusu", url: "https://erasmusu.com" }], icon: "🎓" },
      { title: "Roomlala", description: "Peer-to-peer room rentals and homestay accommodations.", links: [{ label: "Roomlala", url: "https://www.roomlala.com" }], icon: "🤝" },
      { title: "Uniplaces Promo Integration", description: "Use promo code UNIX0YP7M for 10% off service fees.", links: [{ label: "Redeem Uniplaces", url: "https://www.uniplaces.com" }], icon: "🏷️" },
      { title: "Nestpick", description: "Aggregator for furnished apartments and mid-term rooms.", links: [{ label: "Nestpick", url: "https://www.nestpick.com" }], icon: "📊" },
      { title: "Olx Quartos Para Arrendar", description: "Classified ads platform featuring shared room postings.", links: [{ label: "OLX Quartos", url: "https://www.olx.pt" }], icon: "📱" },
      { title: "CustoJusto Quartos", description: "Local classifieds listings for room rentals.", links: [{ label: "CustoJusto", url: "https://www.custojusto.pt" }], icon: "🔍" },
      { title: "Facebook Housing Groups", description: "Expats and students flatshare communities in Lisbon & Porto.", links: [{ label: "FB Groups", url: "https://facebook.com" }], icon: "👥" },
      { title: "HousingAnywhere", description: "Mid-term rental housing platform for international students.", links: [{ label: "HousingAnywhere", url: "https://housinganywhere.com" }], icon: "🌍" },
      { title: "Coliving.com", description: "Community-driven shared living spaces and digital nomad rooms.", links: [{ label: "Coliving", url: "https://coliving.com" }], icon: "💡" },
      { title: "Studentville Accommodations", description: "Directory of student residences across Portugal.", links: [{ label: "Studentville", url: "https://www.studentville.it" }], icon: "🏫" },
      { title: "AmberStudent", description: "Student housing booking platform near major universities.", links: [{ label: "AmberStudent", url: "https://amberstudent.com" }], icon: "🎒" },
      { title: "Roomster", description: "Global roommate finder and shared space platform.", links: [{ label: "Roomster", url: "https://www.roomster.com" }], icon: "👥" },
      { title: "Lisbon Rooms Direct", description: "Boutique mid-term independent room providers.", links: [{ label: "Lisbon Rooms", url: "https://www.uniplaces.com" }], icon: "🏡" },
      { title: "Porto Student Living", description: "Northern university housing network resources.", links: [{ label: "Porto Living", url: "https://inlifehousing.com" }], icon: "🎓" }
    ]
  },
  {
    id: "housing",
    title: "HOUSING",
    description: "Apartments and long-term rentals with affiliate partner boxes like Uniplaces.",
    color: "#8c4a24",
    items: [
      { title: "Idealista Portugal", description: "Leading property portal for buying and renting homes.", links: [{ label: "Idealista", url: "https://www.idealista.pt" }], icon: "🏠" },
      { title: "Imovirtual", description: "Real estate search engine for apartments and houses.", links: [{ label: "Imovirtual", url: "https://www.imovirtual.com" }], icon: "🏢" },
      { title: "Uniplaces Housing Partner", description: "Integrated apartment leasing solutions.", links: [{ label: "Uniplaces", url: "https://www.uniplaces.com" }], icon: "📦" },
      { title: "Portal da Habitação", description: "Official government housing portal and lease registration.", links: [{ label: "Portal da Habitação", url: "https://www.portugal.gov.pt" }], icon: "📄" },
      { title: "Casa Sapo", description: "Historic property portal for real estate in Portugal.", links: [{ label: "Casa Sapo", url: "https://casa.sapo.pt" }], icon: "🔑" },
      { title: "Remax Portugal", description: "Global real estate agency network with local listings.", links: [{ label: "Remax", url: "https://www.remax.pt" }], icon: "🏡" },
      { title: "Century 21 Portugal", description: "Property agency network for long-term apartment leases.", links: [{ label: "Century 21", url: "https://www.century21.pt" }], icon: "🏢" },
      { title: "Supercasa", description: "Real estate platform for houses, apartments, and land.", links: [{ label: "Supercasa", url: "https://supercasa.pt" }], icon: "🏘️" },
      { title: "Bpiexpresso Imobiliário", description: "Real estate news and market property listings.", links: [{ label: "Bpiexpresso", url: "https://Imobiliario.expresso.pt" }], icon: "📊" },
      { title: "ERA Portugal", description: "Real estate agency network offering rental properties.", links: [{ label: "ERA", url: "https://www.era.pt" }], icon: "🚪" },
      { title: "Zome Real Estate", description: "Modern Portuguese real estate agency and portals.", links: [{ label: "Zome", url: "https://www.zome.pt" }], icon: "🌟" },
      { title: "Habita", description: "Property agency specializing in rental contracts.", links: [{ label: "Habita", url: "https://www.habita.pt" }], icon: "📑" },
      { title: "Spotahome Long Term", description: "Verified long term apartment bookings online.", links: [{ label: "Spotahome", url: "https://www.spotahome.com" }], icon: "🛋️" },
      { title: "QuintoAndar Pt Partner", description: "Digital rental experience platform.", links: [{ label: "QuintoAndar", url: "https://www.quintoandar.com" }], icon: "📱" },
      { title: "Airbnb Monthly Stays", description: "Mid-to-long term monthly furnished apartment rentals.", links: [{ label: "Airbnb Monthly", url: "https://www.airbnb.com" }], icon: "🧳" },
      { title: "Imogroup", description: "Real estate brokers association listings.", links: [{ label: "Imogroup", url: "https://www.imogroup.pt" }], icon: "📋" }
    ]
  },
  {
    id: "immigration",
    title: "IMMIGRATION",
    description: "Visas, residency permits, and citizenship pathways.",
    color: "#5c3d78",
    items: [
      { title: "AIMA Portal", description: "Agency for Integration, Migration and Asylum.", links: [{ label: "AIMA Official", url: "https://aima.gov.pt" }], icon: "🛂" },
      { title: "VFS Global", description: "Visa application centers and biometrics submission.", links: [{ label: "VFS Global", url: "https://www.vfsglobal.com" }], icon: "✈️" },
      { title: "Justiça Nationality", description: "Citizenship and nationality application regulations.", links: [{ label: "Justiça.gov", url: "https://justica.gov.pt" }], icon: "🌐" },
      { title: "ePortugal Portal", description: "Central public services directory for official guides.", links: [{ label: "ePortugal", url: "https://eportugal.gov.pt" }], icon: "🏛️" },
      { title: "Consulado Virtual", description: "Portuguese consular services for citizens abroad.", links: [{ label: "Consulado Virtual", url: "https://www.portaldiplomatico.mne.gov.pt" }], icon: "🌍" },
      { title: "SEF Archive & Transition", description: "Historical immigration data and transition directives to AIMA.", links: [{ label: "AIMA Portal", url: "https://aima.gov.pt" }], icon: "📂" },
      { title: "High Commission for Migration (ACM)", description: "Integration support centers and migrant assistance.", links: [{ label: "ACM", url: "https://www.acm.gov.pt" }], icon: "🤝" },
      { title: "CNAIM Support Centers", description: "National immigrant support hub locations.", links: [{ label: "CNAIM", url: "https://www.acm.gov.pt" }], icon: "🌟" },
      { title: "Portal das Comunidades", description: "Information network for Portuguese communities abroad.", links: [{ label: "Comunidades", url: "https://www.portaldascomunidades.mne.gov.pt" }], icon: "📖" },
      { title: "DGAJ Criminal Record", description: "Online requests for criminal record certificates.", links: [{ label: "Registo Criminal", url: "https://registocriminal.justica.gov.pt" }], icon: "🔒" },
      { title: "Golden Visa Portugal Official", description: "Investor residency program guidelines and requirements.", links: [{ label: "AIMA Golden", url: "https://aima.gov.pt" }], icon: "⭐" },
      { title: "D8 Digital Nomad Visa", description: "Remote worker residency permit applications.", links: [{ label: "Digital Nomad", url: "https://vistos.mne.gov.pt" }], icon: "💻" },
      { title: "D7 Passive Income Visa", description: "Retiree and passive income visa application portal.", links: [{ label: "D7 Visa", url: "https://vistos.mne.gov.pt" }], icon: "📄" },
      { title: "Study Visa Portal", description: "Higher education and student entry permits.", links: [{ label: "Study Vistos", url: "https://vistos.mne.gov.pt" }], icon: "🎓" },
      { title: "Family Reunification Rules", description: "AIMA guidelines for bringing family members.", links: [{ label: "Family Rules", url: "https://aima.gov.pt" }], icon: "👨‍👩‍👧‍👦" }
    ]
  },
  {
    id: "open-bank-account",
    title: "OPEN BANK ACCOUNT",
    description: "Banking institutions and financial setup assistance.",
    color: "#1d6363",
    items: [
      { title: "Caixa Geral de Depósitos", description: "State-owned national bank.", links: [{ label: "CGD Official", url: "https://www.cgd.pt" }], icon: "🏦" },
      { title: "Millennium BCP", description: "Major commercial bank in Portugal.", links: [{ label: "Millennium BCP", url: "https://www.millenniumbcp.pt" }], icon: "💳" },
      { title: "Portal das Finanças (NIF)", description: "Tax authority portal required for opening bank accounts.", links: [{ label: "Finanças", url: "https://portaldasfinancas.gov.pt" }], icon: "📊" },
      { title: "Banco de Portugal", description: "Central bank regulatory information and consumer rights.", links: [{ label: "Banco de Portugal", url: "https://www.bportugal.pt" }], icon: "🏛️" },
      { title: "Novo Banco", description: "Commercial banking services and account openings.", links: [{ label: "Novo Banco", url: "https://www.novobanco.pt" }], icon: "💰" },
      { title: "Banco Santander Totta", description: "Multinational bank branch network across Portugal.", links: [{ label: "Santander", url: "https://www.santander.pt" }], icon: "🏧" },
      { title: "BPI Bank", description: "Caixabank group retail and corporate banking.", links: [{ label: "Banco BPI", url: "https://www.bpi.pt" }], icon: "💳" },
      { title: "ActivoBank", description: "Zero-fee digital banking subsidiary of Millennium BCP.", links: [{ label: "ActivoBank", url: "https://www.activobank.pt" }], icon: "📱" },
      { title: "Bankinter Portugal", description: "Retail and investment banking services.", links: [{ label: "Bankinter", url: "https://www.bankinter.pt" }], icon: "🌐" },
      { title: "Montepio Geral", description: "Mutual savings bank and credit cooperative.", links: [{ label: "Montepio", url: "https://www.montepio.pt" }], icon: "🤝" },
      { title: "Revolut Portugal", description: "Digital mobile banking alternative accounts.", links: [{ label: "Revolut", url: "https://www.revolut.com" }], icon: "📲" },
      { title: "N26 Bank", description: "European mobile bank account setup.", links: [{ label: "N26", url: "https://n26.com" }], icon: "💳" },
      { title: "Wise Multi-Currency Account", description: "International transfers and digital debit cards.", links: [{ label: "Wise", url: "https://wise.com" }], icon: "💱" },
      { title: "CGD Conta Mais Ordenado", description: "Salary account packages and perks.", links: [{ label: "CGD Salary", url: "https://www.cgd.pt" }], icon: "💼" },
      { title: "Tax Representative Services", description: "Mandatory fiscal representation for non-EU bank setups.", links: [{ label: "Finanças NIF", url: "https://portaldasfinancas.gov.pt" }], icon: "📝" }
    ]
  },
  {
    id: "recruitment-agencies",
    title: "RECRUITMENT AGENCIES",
    description: "Job placement and temporary work staffing companies.",
    color: "#8c2447",
    items: [
      { title: "Randstad Portugal", description: "Global recruitment and temporary staffing agency.", links: [{ label: "Randstad", url: "https://randstad.pt" }], icon: "👔" },
      { title: "Adecco Portugal", description: "Employment placement and human resources services.", links: [{ label: "Adecco", url: "https://adecco.pt" }], icon: "🏢" },
      { title: "ManpowerGroup", description: "Temporary staffing and workforce solutions.", links: [{ label: "Manpower", url: "https://manpower.pt" }], icon: "⏱️" },
      { title: "Hays Portugal", description: "Specialized recruitment for expert and professional roles.", links: [{ label: "Hays", url: "https://www.hays.pt" }], icon: "📈" },
      { title: "Michael Page Portugal", description: "Professional recruitment and executive search firm.", links: [{ label: "Michael Page", url: "https://www.michaelpage.pt" }], icon: "🎯" },
      { title: "Page Personnel", description: "Clerical, technical, and junior professional staffing.", links: [{ label: "Page Personnel", url: "https://www.pagepersonnel.pt" }], icon: "👥" },
      { title: "Kelly Services", description: "Global staffing agency and workforce solutions.", links: [{ label: "Kelly Services", url: "https://www.kellyservices.pt" }], icon: "📋" },
      { title: "Talenter", description: "Portuguese human resources and outsourcing agency.", links: [{ label: "Talenter", url: "https://www.talenter.com" }], icon: "🌟" },
      { title: "Spring Professional", description: "Consultancy and middle management recruitment.", links: [{ label: "Spring", url: "https://www.springprofessional.pt" }], icon: "💼" },
      { title: "Elevus", description: "Human resources consultancy and headhunting agency.", links: [{ label: "Elevus", url: "https://www.elevus.pt" }], icon: "🔍" },
      { title: "Quaternaire Portugal", description: "Employment training and HR development.", links: [{ label: "Quaternaire", url: "https://www.quaternaire.pt" }], icon: "📚" },
      { title: "Timing Human Resources", description: "Temporary work and human capital management.", links: [{ label: "Timing HR", url: "https://www.timing.pt" }], icon: "⏱️" },
      { title: "Worken", description: "Recruitment and workforce outsourcing partner.", links: [{ label: "Worken", url: "https://www.worken.pt" }], icon: "🏢" },
      { title: "Multipessoal", description: "Staffing solutions, outsourcing, and payroll management.", links: [{ label: "Multipessoal", url: "https://www.multipessoal.pt" }], icon: "📊" },
      { title: "Securitas Direct Jobs", description: "Direct corporate security and field sales recruiting.", links: [{ label: "Securitas", url: "https://www.securitasdirect.pt" }], icon: "🛡️" }
    ]
  },
  {
    id: "health-services",
    title: "HEALTH SERVICES",
    description: "Public hospitals, clinics, and emergency care directories.",
    color: "#4d5d53",
    items: [
      { title: "SNS 24 (Portal da Saúde)", description: "National Health Service portal and 24/7 medical line.", links: [{ label: "SNS 24 Official", url: "https://sns24.gov.pt" }], icon: "🏥" },
      { title: "CUF Saúde", description: "Private hospital and clinic network.", links: [{ label: "CUF Hospitais", url: "https://www.cuf.pt" }], icon: "🩺" },
      { title: "Emergency Services (112)", description: "General European emergency number.", links: [{ label: "Proteção Civil", url: "https://www.prociv.pt" }], icon: "🚨" },
      { title: "Luz Saúde", description: "Private hospital group with modern medical facilities.", links: [{ label: "Hospital da Luz", url: "https://www.hospitaldaluz.pt" }], icon: "🏨" },
      { title: "Lusíadas Saúde", description: "Private healthcare network and specialized clinics.", links: [{ label: "Lusíadas", url: "https://www.lusiadas.pt" }], icon: "💉" },
      { title: "Cruz Vermelha Portuguesa", description: "Red Cross medical assistance and humanitarian aid.", links: [{ label: "Cruz Vermelha", url: "https://www.cruzvermelha.pt" }], icon: "➕" },
      { title: "INEM (Emergency Medical)", description: "National institute of medical emergency dispatch.", links: [{ label: "INEM Portal", url: "https://www.inem.pt" }], icon: "🚑" },
      { title: "Saúde 24 App", description: "Digital mobile application for medical triage and appointments.", links: [{ label: "SNS App", url: "https://sns24.gov.pt" }], icon: "📱" },
      { title: "Centro de Saúde Locator", description: "Find your local public health clinic (Centro de Saúde).", links: [{ label: "Portal SNS", url: "https://www.sns.gov.pt" }], icon: "🏥" },
      { title: "Order of Physicians (Ordem dos Médicos)", description: "Directory of certified doctors and specialists.", links: [{ label: "Ordem Médicos", url: "https://ordemdosmedicos.pt" }], icon: "👨‍⚕️" },
      { title: "European Health Insurance Card (EHIC)", description: "EU healthcare coverage for temporary visitors.", links: [{ label: "Segurança Social", url: "https://seg-social.pt" }], icon: "🇪🇺" },
      { title: "Private Health Insurance Plans", description: "Overview of providers like Médis, Multicare, and Allianz.", links: [{ label: "Médis", url: "https://www.medis.pt" }], icon: "🛡️" },
      { title: "Mental Health Support Lines", description: "Psychological help lines and counseling resources.", links: [{ label: "SNS Mental", url: "https://sns24.gov.pt" }], icon: "🧠" },
      { title: "Veterinary Emergency Clinics", description: "Pet care emergency hospitals and urgent vet centers.", links: [{ label: "Vet Care", url: "https://www.ordemdosmedicosveterinarios.pt" }], icon: "🐾" },
      { title: "Blood Donation Centers", description: "IPST national blood and transplantation institute.", links: [{ label: "IPST", url: "https://www.ipst.pt" }], icon: "🩸" }
    ]
  },
  {
    id: "public-transport",
    title: "PUBLIC TRANSPORT",
    description: "Trains, metros, and local transit networks across Portugal.",
    color: "#783d5c",
    items: [
      { title: "Comboios de Portugal (CP)", description: "National railway and train network operator.", links: [{ label: "CP Portal", url: "https://www.cp.pt" }], icon: "🚆" },
      { title: "Metropolitano de Lisboa", description: "Subway network for the capital city.", links: [{ label: "Metro Lisboa", url: "https://www.metrolisboa.pt" }], icon: "🚇" },
      { title: "Metro do Porto", description: "Light rail transit system in Porto.", links: [{ label: "Metro Porto", url: "https://www.metrodoporto.pt" }], icon: "🚝" },
      { title: "Carris Lisboa", description: "Bus and tram network serving Lisbon municipality.", links: [{ label: "Carris", url: "https://www.carris.pt" }], icon: "🚌" },
      { title: "STCP Porto", description: "Public bus transport system operating in greater Porto.", links: [{ label: "STCP", url: "https://www.stcp.pt" }], icon: "🚍" },
      { title: "Transtejo Soflusa", description: "River ferry boat connections across the Tagus River in Lisbon.", links: [{ label: "Transtejo", url: "https://www.transtejo.pt" }], icon: "⛴️" },
      { title: "Fertagus", description: "Commuter train service connecting Lisbon to Setúbal via the bridge.", links: [{ label: "Fertagus", url: "https://www.fertagus.pt" }], icon: "🚆" },
      { title: "Rede Expressos", description: "National long-distance express coach bus network.", links: [{ label: "Rede Expressos", url: "https://www.rede-expressos.pt" }], icon: "🚍" },
      { title: "FlixBus Portugal", description: "Affordable long-distance intercity bus travel routes.", links: [{ label: "FlixBus", url: "https://www.flixbus.pt" }], icon: "🟢" },
      { title: "Transportes de Coimbra", description: "Municipal bus service in Coimbra.", links: [{ label: "Tuc", url: "https://www.smtuc.pt" }], icon: "🚌" },
      { title: "Navegante Pass Card", description: "Monthly integrated public transit pass for the Lisbon region.", links: [{ label: "Navegante", url: "https://www.navegante.pt" }], icon: "💳" },
      { title: "Andante Card Porto", description: "Multimodal ticketing system for northern transit networks.", links: [{ label: "Andante", url: "https://www.linhandante.com" }], icon: "🎫" },
      { title: "Airport Metro Connections", description: "Direct subway links from Lisbon and Porto international airports.", links: [{ label: "Airport Transit", url: "https://www.aeroportolisboa.pt" }], icon: "✈️" },
      { title: "CP Alfa Pendular", description: "High-speed rail connecting Braga, Porto, Coimbra, and Lisbon.", links: [{ label: "Alfa Pendular", url: "https://www.cp.pt" }], icon: "🚄" },
      { title: "Rome2rio Portugal", description: "Multi-modal journey planner for routes across the country.", links: [{ label: "Rome2rio", url: "https://www.rome2rio.com" }], icon: "🗺️" }
    ]
  },
  {
    id: "driving-licence",
    title: "DRIVING LICENCE",
    description: "Exchange, applications, and vehicle registry services.",
    color: "#3d5c78",
    items: [
      { title: "IMT Online", description: "Driving license exchanges, renewals, and vehicle registration.", links: [{ label: "IMT Portal", url: "https://www.imt-ip.pt" }], icon: "🚗" },
      { title: "Automóvel Clube de Portugal (ACP)", description: "Motoring association and assistance services.", links: [{ label: "ACP Portal", url: "https://www.acp.pt" }], icon: "🚙" },
      { title: "Atestado Médico C.N.H.", description: "Medical certificate forms required for license renewals.", links: [{ label: "SNS Portal", url: "https://sns24.gov.pt" }], icon: "📋" },
      { title: "Citizen Shop (Loja do Cidadão)", description: "In-person desks for document validation and driving licenses.", links: [{ label: "ePortugal", url: "https://eportugal.gov.pt" }], icon: "🏢" },
      { title: "Escola de Condução Directory", description: "Accredited driving schools network in Portugal.", links: [{ label: "IMT Escolas", url: "https://www.imt-ip.pt" }], icon: "🏫" },
      { title: "Tolls & Via Verde", description: "Electronic highway toll payment transponders and accounts.", links: [{ label: "Via Verde", url: "https://www.viaverde.pt" }], icon: "🛣️" },
      { title: "Portuguese License Exchange Guidelines", description: "Foreign driver license conversion rules for EU and non-EU citizens.", links: [{ label: "IMT Exchange", url: "https://www.imt-ip.pt" }], icon: "🔄" },
      { title: "Vehicle Registration Document (DUA)", description: "Automobile ownership logbook registration services.", links: [{ label: "Automóvel Online", url: "https://www.automovelonline.mj.pt" }], icon: "📄" },
      { title: "Periodic Technical Inspection (IPO)", description: "Mandatory car inspection center locations and schedules.", links: [{ label: "IMT IPO", url: "https://www.imt-ip.pt" }], icon: "🔧" },
      { title: "Motor Insurance Compulsory Guide", description: "Minimum liability insurance requirements for vehicles.", links: [{ label: "ASF Insurance", url: "https://www.asf.com.pt" }], icon: "🛡️" },
      { title: "ANSR Road Safety Authority", description: "National road safety, speed camera data, and fine regulations.", links: [{ label: "ANSR", url: "https://www.ansr.pt" }], icon: "⚠️" },
      { title: "Brisa Concessionária", description: "Highway operations and motorway status updates.", links: [{ label: "Brisa", url: "https://www.brisa.pt" }], icon: "🚗" },
      { title: "Electric Vehicle Charging Stations", description: "Mobi.e public network locator for EV charging.", links: [{ label: "Mobi.e", url: "https://www.mobie.pt" }], icon: "⚡" },
      { title: "Car Rental Portals", description: "Short-term car rental options for travelers.", links: [{ label: "Rentalcars", url: "https://www.rentalcars.com" }], icon: "🔑" },
      { title: "Carsharing Platforms", description: "Flexible urban car sharing services in major cities.", links: [{ label: "Drive Now", url: "https://www.getaround.com" }], icon: "🚙" }
    ]
  },
  {
    id: "education-training",
    title: "EDUCATION & TRAINING",
    description: "Schools, universities, and professional courses.",
    color: "#78643d",
    items: [
      { title: "Direção-Geral da Educação", description: "National school system and education administration.", links: [{ label: "DGE Portal", url: "https://www.dge.mec.pt" }], icon: "🏫" },
      { title: "DGES Higher Education", description: "University placements and degree recognitions.", links: [{ label: "DGES", url: "https://www.dges.gov.pt" }], icon: "🎓" },
      { title: "Universidade de Lisboa", description: "Leading public university in the capital city.", links: [{ label: "ULisboa", url: "https://www.ulisboa.pt" }], icon: "🏛️" },
      { title: "Universidade do Porto", description: "Renowned northern higher education institution.", links: [{ label: "U.Porto", url: "https://www.up.pt" }], icon: "📘" },
      { title: "Universidade de Coimbra", description: "Historic World Heritage university campus.", links: [{ label: "UC Official", url: "https://www.uc.pt" }], icon: "📜" },
      { title: "Instituto Politécnico de Lisboa", description: "Polytechnic institute offering practical undergraduate degrees.", links: [{ label: "IPL", url: "https://www.ipl.pt" }], icon: "📐" },
      { title: "IEFP Professional Training Courses", description: "State-funded vocational training programs and certifications.", links: [{ label: "IEFP Training", url: "https://iefp.pt" }], icon: "🛠️" },
      { title: "Nova School of Business and Economics", description: "Top-tier European business school.", links: [{ label: "Nova SBE", url: "https://www.novasbe.pt" }], icon: "📊" },
      { title: "ISCTE University Institute of Lisbon", description: "Specialized public university focusing on social sciences and tech.", links: [{ label: "ISCTE", url: "https://www.iscte-iul.pt" }], icon: "🔬" },
      { title: "Erasmus+ Portugal Agency", description: "European mobility program coordination for students.", links: [{ label: "Erasmus+ Pt", url: "https://www.erasmusmais.pt" }], icon: "🇪🇺" },
      { title: "Escola Superior de Hotelaria e Turismo", description: "Hospitality and tourism specialized higher education.", links: [{ label: "ESHTE", url: "https://www.eshte.pt" }], icon: "🏨" },
      { title: "Porto Business School", description: "Executive education and MBA programs in Porto.", links: [{ label: "PBS", url: "https://www.pbs.up.pt" }], icon: "💼" },
      { title: "Coursera & Udemy Partners", description: "Online remote learning platforms for professional skills.", links: [{ label: "Coursera", url: "https://www.coursera.org" }], icon: "💻" },
      { title: "Camoens Institute Portuguese Courses", description: "Official accredited Portuguese language courses for foreigners.", links: [{ label: "Instituto Camões", url: "https://www.instituto-camoes.pt" }], icon: "🗣️" },
      { title: "School Enrollment Portal (Matrículas)", description: "Online registration system for public school students.", links: [{ label: "Portal das Matrículas", url: "https://portalmatriculas.dgeec.mec.pt" }], icon: "📝" }
    ]
  },
  {
    id: "pharmacies-daily-life",
    title: "PHARMACIES & DAILY LIFE",
    description: "Local pharmacies, utilities, and daily essentials.",
    color: "#3d7852",
    items: [
      { title: "Farmácias Portuguesas", description: "National association of pharmacies and medicine locator.", links: [{ label: "Farmácias Pt", url: "https://farmaciasportuguesas.pt" }], icon: "💊" },
      { title: "CTT Correios", description: "National postal and courier delivery services.", links: [{ label: "CTT Portal", url: "https://www.ctt.pt" }], icon: "✉️" },
      { title: "ANACOM", description: "Utilities and telecommunications regulator.", links: [{ label: "ANACOM", url: "https://www.anacom.pt" }], icon: "📡" },
      { title: "EDP Distribuição", description: "Electricity power provider and grid distributor.", links: [{ label: "EDP", url: "https://www.edp.pt" }], icon: "⚡" },
      { title: "Galp Energia", description: "Gas, electricity, and fuel provider services.", links: [{ label: "Galp", url: "https://www.galp.com" }], icon: "🔥" }
    ]
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
  };

  const handleBackToHome = () => {
    setSelectedCategory(null);
  };

  const currentCategoryData = categoriesData.find(c => c.id === selectedCategory);

  const filteredItems = currentCategoryData 
    ? currentCategoryData.items.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="sanolines-app">
      
      {/* Top Single Line Promo Banner */}
      <div className="promo-banner">
        Looking for student housing?&nbsp;
        <a href="https://www.uniplaces.com" target="_blank" rel="noopener noreferrer">
          Click here to visit Uniplaces
        </a>
        &nbsp;. Use promo code <strong>UNIX0YP7M</strong> at checkout to get 10% off the service fee!
      </div>

      {/* Navigation Header */}
      <nav className="navbar">
        <div className="nav-brand" onClick={handleBackToHome} style={{ cursor: 'pointer' }}>
          <div className="nav-logo-box">S</div>
          <div className="nav-title-group">
            <span className="brand-name">SANOLINES</span>
            <span className="brand-subtitle">INDEPENDENT INFORMATION & SERVICES DIRECTORY</span>
          </div>
        </div>
        <div className="nav-links">
          <button onClick={handleBackToHome} className="nav-link-btn active">Home</button>
          <span className="nav-link-text" onClick={handleBackToHome} style={{ cursor: 'pointer' }}>Services</span>
        </div>
      </nav>

      <main className="main-content">
        {!selectedCategory ? (
          <div className="categories-grid">
            {categoriesData.map((cat) => (
              <div 
                key={cat.id} 
                className="category-card" 
                style={{ backgroundColor: cat.color }}
                onClick={() => handleCategoryClick(cat.id)}
              >
                <div className="card-content-inner">
                  <h2>{cat.title}</h2>
                  <p>{cat.description}</p>
                </div>
                <div className="card-action">
                  <span className="view-services-btn">VIEW SERVICES &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="category-detail-view">
            <button className="back-btn" onClick={handleBackToHome}>
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="items-grid">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div key={index} className="resource-item-card">
                    <div className="item-icon">{item.icon}</div>
                    <div className="item-info">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="item-links">
                        {item.links.map((lnk, lIdx) => (
                          <a 
                            key={lIdx} 
                            href={lnk.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="external-link-btn"
                          >
                            {lnk.label} &nearr;
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">No resources found matching your search.</p>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Disclaimer Section */}
      <div className="disclaimer-section" style={{ textAlign: "center", padding: "20px", fontSize: "12px", color: "#666", background: "#fff", borderTop: "1px solid #e5e7eb", marginTop: "40px" }}>
        <p><strong>SANOLINES</strong> is an independent information and services directory. We are not affiliated with any government agency or official institution. Links provided are for general resource guidance purposes only.</p>
      </div>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} Sanolines Portugal. All rights reserved.</p>
      </footer>
    </div>
  );
}

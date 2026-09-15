import React, { useState } from "react";
import "./App.css";

const categoriesData = [
  {
    title: "Jobs",
    description: "National employment centers, private job agencies, international recruitment, and freelancing.",
    details: "Comprehensive directory of employment portals, temporary work agencies, and career support platforms across Portugal.",
    items: [
      { title: "IEFP Portal", description: "National employment institute for jobs and vocational training.", links: [{ label: "IEFP Official", url: "https://iefp.pt" }], mapQuery: "Centro de Emprego IEFP", icon: "💼", color: "#2b4c7e" },
      { title: "Randstad Portugal", description: "Global recruitment and temporary staffing agency.", links: [{ label: "Randstad", url: "https://randstad.pt" }], mapQuery: "Randstad Office", icon: "🏢", color: "#2b4c7e" },
      { title: "Adecco Portugal", description: "Employment placement and human resources services.", links: [{ label: "Adecco", url: "https://adecco.pt" }], mapQuery: "Adecco Office", icon: "🏢", color: "#2b4c7e" },
      { title: "ManpowerGroup", description: "Temporary staffing and workforce solutions.", links: [{ label: "Manpower", url: "https://manpower.pt" }], mapQuery: "Manpower", icon: "🏢", color: "#2b4c7e" },
      { title: "Hays Portugal", description: "Expert recruitment and executive search firm.", links: [{ label: "Hays", url: "https://hays.pt" }], mapQuery: "Hays", icon: "👔", color: "#2b4c7e" },
      { title: "Michael Page", description: "Professional recruitment and specialized staffing.", links: [{ label: "Michael Page", url: "https://michaelpage.pt" }], mapQuery: "Michael Page", icon: "👔", color: "#2b4c7e" },
      { title: "NetEmprego", description: "Popular national job board for open positions.", links: [{ label: "NetEmprego", url: "https://netemprego.pt" }], mapQuery: "NetEmprego", icon: "🔍", color: "#2b4c7e" },
      { title: "Sapo Emprego", description: "Major employment listings portal in Portugal.", links: [{ label: "Sapo Emprego", url: "https://emprego.sapo.pt" }], mapQuery: "Sapo Emprego", icon: "🔍", color: "#2b4c7e" },
      { title: "It Jobs", description: "Specialized technology and IT job board.", links: [{ label: "IT Jobs", url: "https://itjobs.pt" }], mapQuery: "IT Jobs", icon: "💻", color: "#2b4c7e" },
      { title: "EURES European Job Mobility", description: "EU portal for job seekers across member states.", links: [{ label: "EURES", url: "https://eures.europa.eu" }], mapQuery: "EURES", icon: "🇪🇺", color: "#2b4c7e" },
      { title: "Turijobs", description: "Hospitality, tourism, and restaurant sector employment.", links: [{ label: "Turijobs", url: "https://turijobs.pt" }], mapQuery: "Turijobs", icon: "🏨", color: "#2b4c7e" },
      { title: "Empregos Coimbra / Regional", description: "Regional job listings board.", links: [{ label: "Empregos Online", url: "https://empregos.online.pt" }], mapQuery: "Emprego", icon: "🗺️", color: "#2b4c7e" },
      { title: "Bolsa de Emprego Público", description: "Public administration and government job openings.", links: [{ label: "BEP Portal", url: "https://bep.gov.pt" }], mapQuery: "BEP Emprego Público", icon: "🏛️", color: "#2b4c7e" },
      { title: "Glassdoor Portugal", description: "Company reviews, salaries, and open listings.", links: [{ label: "Glassdoor", url: "https://glassdoor.pt" }], mapQuery: "Glassdoor", icon: "⭐", color: "#2b4c7e" },
      { title: "LinkedIn Jobs", description: "Professional network and corporate job listings.", links: [{ label: "LinkedIn", url: "https://linkedin.com" }], mapQuery: "LinkedIn", icon: "🌐", color: "#2b4c7e" },
      { title: "Indeed Portugal", description: "Aggregated job search engine.", links: [{ label: "Indeed", url: "https://pt.indeed.com" }], mapQuery: "Indeed", icon: "🔎", color: "#2b4c7e" },
      { title: "Brave Generation", description: "Tech recruitment platform.", links: [{ label: "BraveGen", url: "https://bravegeneration.com" }], mapQuery: "Tech", icon: "🚀", color: "#2b4c7e" },
      { title: "Startuplisboa", description: "Startup incubation and career opportunities.", links: [{ label: "Startup Lisboa", url: "https://startuplisboa.com" }], mapQuery: "Startup Lisboa", icon: "💡", color: "#2b4c7e" },
      { title: "Freelance Portugal", description: "Self-employment tax rules via Finanças.", links: [{ label: "Portal das Finanças", url: "https://portaldasfinancas.gov.pt" }], mapQuery: "Finanças", icon: "📝", color: "#2b4c7e" },
      { title: "Keep Working Portugal", description: "Expat employment guides.", links: [{ label: "Keep Working", url: "https://eportugal.gov.pt" }], mapQuery: "ePortugal", icon: "📖", color: "#2b4c7e" }
    ]
  },
  {
    title: "Room Rent",
    description: "Shared rooms, medium-term rentals, and verified student or expat accommodations.",
    details: "Curated directory of platforms offering shared apartments, mid-term leasing, and student housing.",
    items: [
      { title: "Uniplaces Partner", description: "Verified student and expat room rentals with booking integration.", links: [{ label: "Uniplaces", url: "https://www.uniplaces.com" }], mapQuery: "Uniplaces", icon: "🛏️", color: "#2a6f49" },
      { title: "Inlife Housing", description: "Mid-to-long term student housing and rooms.", links: [{ label: "Inlife", url: "https://inlifehousing.com" }], mapQuery: "Inlife Housing", icon: "🏠", color: "#2a6f49" },
      { title: "Spotahome", description: "Online verified home and room bookings.", links: [{ label: "Spotahome", url: "https://www.spotahome.com" }], mapQuery: "Spotahome", icon: "🔑", color: "#2a6f49" },
      { title: "Erasmusu", description: "Student rooms and housing networks.", links: [{ label: "Erasmusu", url: "https://erasmusu.com" }], mapQuery: "Erasmusu", icon: "🎓", color: "#2a6f49" },
      { title: "Roomlala", description: "Peer-to-peer room rentals.", links: [{ label: "Roomlala", url: "https://roomlala.com" }], mapQuery: "Roomlala", icon: "🛋️", color: "#2a6f49" },
      { title: "Nestpick", description: "Aggregator for furnished apartments and rooms.", links: [{ label: "Nestpick", url: "https://nestpick.com" }], mapQuery: "Nestpick", icon: "📦", color: "#2a6f49" },
      { title: "Olx Quartos", description: "Classifieds for room rentals across cities.", links: [{ label: "OLX Quartos", url: "https://www.olx.pt/imoveis/quartos" }], mapQuery: "OLX", icon: "📰", color: "#2a6f49" },
      { title: "CustoJusto Quartos", description: "Local classifieds platform for rooms.", links: [{ label: "CustoJusto", url: "https://www.custojusto.pt" }], mapQuery: "CustoJusto", icon: "📋", color: "#2a6f49" },
      { title: "Facebook Marketplace", description: "Direct peer-to-peer room leasing groups.", links: [{ label: "FB Marketplace", url: "https://facebook.com/marketplace" }], mapQuery: "Facebook", icon: "👥", color: "#2a6f49" },
      { title: "Bquarto", description: "Dedicated room rental listings.", links: [{ label: "Bquarto", url: "https://www.bquarto.pt" }], mapQuery: "Bquarto", icon: "🚪", color: "#2a6f49" },
      { title: "Uniplaces Lisbon", description: "Capital city targeted student rooms.", links: [{ label: "Lisbon Stays", url: "https://www.uniplaces.com/accommodation/lisbon" }], mapQuery: "Lisbon", icon: "📍", color: "#2a6f49" },
      { title: "Uniplaces Porto", description: "Northern hub student accommodations.", links: [{ label: "Porto Stays", url: "https://www.uniplaces.com/accommodation/porto" }], mapQuery: "Porto", icon: "📍", color: "#2a6f49" },
      { title: "Studentville", description: "Student accommodation guides.", links: [{ label: "Studentville", url: "https://studentville.pt" }], mapQuery: "Student housing", icon: "🏫", color: "#2a6f49" },
      { title: "Coliving Portals", description: "Shared collaborative living spaces.", links: [{ label: "Coliving Hub", url: "https://coliving.com" }], mapQuery: "Coliving", icon: "🌐", color: "#2a6f49" },
      { title: "Habita Platform", description: "Regional real estate and room rentals.", links: [{ label: "Habita", url: "https://habita.pt" }], mapQuery: "Habita", icon: "🏡", color: "#2a6f49" },
      { title: "Uniplaces Coimbra", description: "University city room options.", links: [{ label: "Coimbra Stays", url: "https://www.uniplaces.com/accommodation/coimbra" }], mapQuery: "Coimbra", icon: "📚", color: "#2a6f49" },
      { title: "Expat Housing Groups", description: "Community-driven room finders.", links: [{ label: "Expat Housing", url: "https://facebook.com" }], mapQuery: "Expat", icon: "🌍", color: "#2a6f49" },
      { title: "Temporary Stay Portals", description: "Short-to-medium transition rooms.", links: [{ label: "Temp Stays", url: "https://booking.com" }], mapQuery: "Hotel", icon: "🏨", color: "#2a6f49" },
      { title: "Rental Contract Legal Info", description: "Tenant rights overview.", links: [{ label: "Portal da Habitação", url: "https://www.portugal.gov.pt" }], mapQuery: "Habitação", icon: "⚖️", color: "#2a6f49" },
      { title: "Local Municipality Housing", description: "Social and municipal rental support.", links: [{ label: "Portal Autárquico", url: "https://www.portalautarquico.dgal.gov.pt" }], mapQuery: "Câmara Municipal", icon: "🏛️", color: "#2a6f49" }
    ]
  },
  {
    title: "Housing",
    description: "Apartments for rent, real estate portals, and long-term lease guides.",
    details: "Major property portals and legal directories for long-term apartment leasing.",
    items: [
      { title: "Idealista Portugal", description: "Leading property portal for buying and renting homes.", links: [{ label: "Idealista", url: "https://www.idealista.pt" }], mapQuery: "Idealista", icon: "🏠", color: "#8c4a24" },
      { title: "Imovirtual", description: "Real estate search engine for apartments and houses.", links: [{ label: "Imovirtual", url: "https://www.imovirtual.com" }], mapQuery: "Imovirtual", icon: "🏢", color: "#8c4a24" },
      { title: "Casa Sapo", description: "Long-standing property search directory.", links: [{ label: "Casa Sapo", url: "https://casa.sapo.pt" }], mapQuery: "Casa Sapo", icon: "🏡", color: "#8c4a24" },
      { title: "Supercasa", description: "Real estate platform with regional listings.", links: [{ label: "Supercasa", url: "https://supercasa.pt" }], mapQuery: "Supercasa", icon: "🏗️", color: "#8c4a24" },
      { title: "OLX Imóveis", description: "Classifieds for apartments and houses.", links: [{ label: "OLX Imóveis", url: "https://www.olx.pt/imoveis" }], mapQuery: "OLX Imoveis", icon: "📰", color: "#8c4a24" },
      { title: "CustoJusto Imóveis", description: "Property listings classifieds.", links: [{ label: "CustoJusto", url: "https://www.custojusto.pt/portugal/imoveis" }], mapQuery: "CustoJusto", icon: "📋", color: "#8c4a24" },
      { title: "Remax Portugal", description: "Global real estate agency network.", links: [{ label: "Remax", url: "https://remax.pt" }], mapQuery: "Remax", icon: "🚩", color: "#8c4a24" },
      { title: "Century 21 Portugal", description: "Property brokerage services.", links: [{ label: "Century 21", url: "https://century21.pt" }], mapQuery: "Century 21", icon: "🏢", color: "#8c4a24" },
      { title: "Era Portugal", description: "Real estate agency network.", links: [{ label: "Era", url: "https://era.pt" }], mapQuery: "Era Imobiliária", icon: "🔑", color: "#8c4a24" },
      { title: "Engel & Völkers", description: "Premium and luxury real estate.", links: [{ label: "Engel & Völkers", url: "https://engelvoelkers.com" }], mapQuery: "Engel Volkers", icon: "🌟", color: "#8c4a24" },
      { title: "Keller Williams Portugal", description: "Real estate agents and leasing.", links: [{ label: "KW Portugal", url: "https://kwportugal.pt" }], mapQuery: "Keller Williams", icon: "🏡", color: "#8c4a24" },
      { title: "Portal da Habitação", description: "Official government housing portal and lease registration.", links: [{ label: "Portal da Habitação", url: "https://www.portugal.gov.pt" }], mapQuery: "Habitação", icon: "🏛️", color: "#8c4a24" },
      { title: "Bolsa de Arrendamento", description: "Lease support and rental programs.", links: [{ label: "Arrendamento Acessível", url: "https://portaldohabitacao.pt" }], mapQuery: "Arrendamento", icon: "📄", color: "#8c4a24" },
      { title: "Imovirtual Rent", description: "Direct apartment rentals filter.", links: [{ label: "Imovirtual Arrendar", url: "https://www.imovirtual.com/arrendar" }], mapQuery: "Imovirtual", icon: "🔍", color: "#8c4a24" },
      { title: "Idealista Rent", description: "Apartment rental sector listings.", links: [{ label: "Idealista Aluguer", url: "https://www.idealista.pt/arrendar-casas" }], mapQuery: "Idealista", icon: "🔍", color: "#8c4a24" },
      { title: "Habita Imobiliária", description: "Property buying and leasing.", links: [{ label: "Habita", url: "https://habita.pt" }], mapQuery: "Habita", icon: "🏠", color: "#8c4a24" },
      { title: "Espaços e Casas", description: "Real estate portal.", links: [{ label: "Espaços", url: "https://espacosecasas.com" }], mapQuery: "Imobiliária", icon: "🏢", color: "#8c4a24" },
      { title: "Tenant Rights Guide", description: "Official consumer protection rules for rentals.", links: [{ label: "DECO Proteste", url: "https://deco.pt" }], mapQuery: "DECO", icon: "⚖️", color: "#8c4a24" },
      { title: "Municipal Housing Funds", description: "Local city council housing support.", links: [{ label: "Portal Autárquico", url: "https://www.portalautarquico.dgal.gov.pt" }], mapQuery: "Câmara Municipal", icon: "🏙️", color: "#8c4a24" },
      { title: "Real Estate Tax Registry", description: "Property tax verification via Finanças.", links: [{ label: "Portal das Finanças", url: "https://portaldasfinancas.gov.pt" }], mapQuery: "Finanças", icon: "📊", color: "#8c4a24" }
    ]
  },
  {
    title: "Immigration",
    description: "Residency permits, visa applications, citizenship rules, border control, and travel guidance.",
    details: "State agencies, visa processing centers, and legal immigration gateways.",
    items: [
      { title: "AIMA Portal", description: "Agency for Integration, Migration and Asylum (residency permits).", links: [{ label: "AIMA Official", url: "https://aima.gov.pt" }], mapQuery: "AIMA", icon: "🛂", color: "#5c3d78" },
      { title: "VFS Global", description: "Visa application centers and biometrics.", links: [{ label: "VFS Global", url: "https://www.vfsglobal.com" }], mapQuery: "VFS Global", icon: "✈️", color: "#5c3d78" },
      { title: "ePortugal Immigration", description: "Public administration guidance for foreigners.", links: [{ label: "ePortugal Foreigners", url: "https://eportugal.gov.pt" }], mapQuery: "ePortugal", icon: "🏛️", color: "#5c3d78" },
      { title: "Justiça Nationality", description: "Citizenship and nationality application rules.", links: [{ label: "Justiça.gov", url: "https://justica.gov.pt" }], mapQuery: "Conservatória", icon: "🌐", color: "#5c3d78" },
      { title: "Consulate Portal", description: "Portuguese consular network abroad.", links: [{ label: "Portal das Comunidades", url: "https://www.portalcomunidades.mne.gov.pt" }], mapQuery: "Consulado", icon: "🌍", color: "#5c3d78" },
      { title: "Ministério dos Negócios Estrangeiros", description: "Ministry of Foreign Affairs visa rules.", links: [{ label: "MNE Portal", url: "https://portal.mne.gov.pt" }], mapQuery: "MNE", icon: "📜", color: "#5c3d78" },
      { title: "ACM Migrant Support", description: "High Commission for Migration support centers.", links: [{ label: "ACM Portal", url: "https://www.acm.gov.pt" }], mapQuery: "ACM", icon: "🤝", color: "#5c3d78" },
      { title: "CNAIM Support Centers", description: "National centers supporting immigrant integration.", links: [{ label: "CNAIM", url: "https://www.acm.gov.pt" }], mapQuery: "CNAIM", icon: "🌟", color: "#5c3d78" },
      { title: "CLAIM Local Centers", description: "Local support offices for migrant integration.", links: [{ label: "CLAIM Network", url: "https://www.acm.gov.pt" }], mapQuery: "CLAIM", icon: "📍", color: "#5c3d78" },
      { title: "SEF Archives / PSP Border Control", description: "Border control and police administrative transition info.", links: [{ label: "PSP Portal", url: "https://www.psp.pt" }], mapQuery: "PSP", icon: "👮", color: "#5c3d78" },
      { title: "Schengen Visa Rules", description: "EU border and short-stay regulations.", links: [{ label: "European Commission", url: "https://home-affairs.ec.europa.eu" }], mapQuery: "EU", icon: "🗺️", color: "#5c3d78" },
      { title: "Immigration Legal Help", description: "Ordem dos Advogados legal aid directories.", links: [{ label: "Ordem dos Advogados", url: "https://www.oa.pt" }], mapQuery: "Ordem dos Advogados", icon: "⚖️", color: "#5c3d78" },
      { title: "Dona Maria / Legalization Help", description: "NGO immigration support groups.", links: [{ label: "Solidariedade", url: "https://www.acm.gov.pt" }], mapQuery: "Solidariedade Social", icon: "❤️", color: "#5c3d78" },
      { title: "Visas Online Booking", description: "Scheduling appointments for residency.", links: [{ label: "AIMA Scheduling", url: "https://aima.gov.pt" }], mapQuery: "AIMA", icon: "📅", color: "#5c3d78" },
      { title: "Digital Nomad Visas", description: "Special residency rules for remote workers.", links: [{ label: "ePortugal Nomad", url: "https://eportugal.gov.pt" }], mapQuery: "ePortugal", icon: "💻", color: "#5c3d78" },
      { title: "Study Visas", description: "Student residency documentation guides.", links: [{ label: "Study in Portugal", url: "https://www.studyportugal.pt" }], mapQuery: "University", icon: "🎓", color: "#5c3d78" },
      { title: "Family Reunification", description: "Legal procedures for bringing family members.", links: [{ label: "AIMA Family", url: "https://aima.gov.pt" }], mapQuery: "AIMA", icon: "👨‍👩‍👦", color: "#5c3d78" },
      { title: "Document Translation & Apostille", description: "Notary and legalization of foreign documents.", links: [{ label: "IRN Notary", url: "https://www.irn.mj.pt" }], mapQuery: "Conservatória do Registo Civil", icon: "📝", color: "#5c3d78" },
      { title: "Embassy Directory", description: "Foreign embassies located in Portugal.", links: [{ label: "Diplomatic Portal", url: "https://portal.mne.gov.pt" }], mapQuery: "Embaixada", icon: "🏛️", color: "#5c3d78" },
      { title: "Expat Integration Guides", description: "Official handbooks for new arrivals.", links: [{ label: "ACM Guide", url: "https://www.acm.gov.pt" }], mapQuery: "ACM", icon: "📖", color: "#5c3d78" }
    ]
  },
  {
    title: "Open Bank Account",
    description: "Traditional banks, digital expat-friendly accounts, and required documentation.",
    details: "Financial institutions, tax number (NIF) acquisition guides, and digital banking portals.",
    items: [
      { title: "Caixa Geral de Depósitos (CGD)", description: "State-owned national bank.", links: [{ label: "CGD Official", url: "https://www.cgd.pt" }], mapQuery: "Banco CGD", icon: "🏦", color: "#1d6363" },
      { title: "Millennium BCP", description: "Major commercial bank in Portugal.", links: [{ label: "Millennium BCP", url: "https://www.millenniumbcp.pt" }], mapQuery: "Millennium BCP", icon: "💳", color: "#1d6363" },
      { title: "Novo Banco", description: "Retail and corporate banking services.", links: [{ label: "Novo Banco", url: "https://www.novobanco.pt" }], mapQuery: "Novo Banco", icon: "🏦", color: "#1d6363" },
      { title: "Banco Santander Totta", description: "Subsidiary of Santander group.", links: [{ label: "Santander", url: "https://www.santander.pt" }], mapQuery: "Banco Santander", icon: "💳", color: "#1d6363" },
      { title: "BPI (Banco Português de Investimento)", description: "Retail banking and investment services.", links: [{ label: "Banco BPI", url: "https://www.bpi.pt" }], mapQuery: "Banco BPI", icon: "🏦", color: "#1d6363" },
      { title: "Abanca Portugal", description: "Commercial banking for residents and non-residents.", links: [{ label: "Abanca", url: "https://www.abanca.pt" }], mapQuery: "Abanca", icon: "💳", color: "#1d6363" },
      { title: "Bankinter Portugal", description: "Personal and business banking solutions.", links: [{ label: "Bankinter", url: "https://www.bankinter.pt" }], mapQuery: "Bankinter", icon: "🏦", color: "#1d6363" },
      { title: "Montepio Geral", description: "Mutual savings bank association.", links: [{ label: "Montepio", url: "https://www.montepio.pt" }], mapQuery: "Banco Montepio", icon: "💰", color: "#1d6363" },
      { title: "Moey! (Digital Banking)", description: "Mobile-first digital banking by Crédito Agrícola.", links: [{ label: "Moey", url: "https://www.moey.pt" }], mapQuery: "Moey", icon: "📱", color: "#1d6363" },
      { title: "Revolut (Expat Favorite)", description: "Digital multi-currency account and card provider.", links: [{ label: "Revolut", url: "https://www.revolut.com" }], mapQuery: "Revolut", icon: "🌐", color: "#1d6363" },
      { title: "N26 Bank", description: "European mobile banking app.", links: [{ label: "N26", url: "https://n26.com" }], mapQuery: "N26", icon: "📱", color: "#1d6363" },
      { title: "Wise (TransferWise)", description: "International money transfers and borderless accounts.", links: [{ label: "Wise", url: "https://wise.com" }], mapQuery: "Wise", icon: "💸", color: "#1d6363" },
      { title: "Portal das Finanças (NIF)", description: "Tax authority portal for obtaining your NIF tax number.", links: [{ label: "Portal das Finanças", url: "https://portaldasfinancas.gov.pt" }], mapQuery: "Serviços de Finanças", icon: "📊", color: "#1d6363" },
      { title: "Banco de Portugal", description: "Central bank regulatory information and consumer rights.", links: [{ label: "Banco de Portugal", url: "https://www.bportugal.pt" }], mapQuery: "Banco de Portugal", icon: "🏛️", color: "#1d6363" },
      { title: "CTT Post Office Banking", description: "Bank accounts and financial services via local CTT branches.", links: [{ label: "CTT Serviços", url: "https://www.ctt.pt" }], mapQuery: "Estação CTT Correios", icon: "✉️", color: "#1d6363" },
      { title: "Crédito Agrícola", description: "Cooperative banking network across rural and urban centers.", links: [{ label: "Crédito Agrícola", url: "https://www.creditoagricola.pt" }], mapQuery: "Crédito Agrícola", icon: "🌾", color: "#1d6363" },
      { title: "EuroBic", description: "Commercial banking institution.", links: [{ label: "EuroBic", url: "https://www.eurobic.pt" }], mapQuery: "EuroBic", icon: "🏦", color: "#1d6363" },
      { title: "ActivoBank", description: "Digital banking subsidiary of Millennium BCP.", links: [{ label: "ActivoBank", url: "https://www.ativobank.pt" }], mapQuery: "ActivoBank", icon: "💻", color: "#1d6363" },
      { title: "Tax Representative Services", description: "Non-resident tax representative office guidelines.", links: [{ label: "Ordem dos Contabilistas", url: "https://www.occ.pt" }], mapQuery: "Contabilista Certificado", icon: "📑", color: "#1d6363" },
      { title: "Client Ombudsman (ClientBank)", description: "Financial dispute resolution and account help.", links: [{ label: "Cliente Bancário", url: "https://www.clientebancario.bportugal.pt" }], mapQuery: "Banco de Portugal", icon: "🛡️", color: "#1d6363" }
    ]
  },
  {
    title: "Recruitment Agencies",
    description: "Temporary work services, business networks, and career placement agencies.",
    details: "Corporate staffing entities, executive headhunters, and employment placement offices.",
    items: [
      { title: "Randstad Portugal Agency", description: "Temporary staffing and recruitment leader.", links: [{ label: "Randstad", url: "https://randstad.pt" }], mapQuery: "Randstad Office", icon: "👔", color: "#8c2447" },
      { title: "Adecco Staffing Agency", description: "HR solutions and permanent placement.", links: [{ label: "Adecco", url: "https://adecco.pt" }], mapQuery: "Adecco", icon: "👔", color: "#8c2447" },
      { title: "ManpowerGroup Agency", description: "Flexible workforce and temp recruitment.", links: [{ label: "Manpower", url: "https://manpower.pt" }], mapQuery: "Manpower", icon: "⏱️", color: "#8c2447" },
      { title: "Hays Specialist Recruitment", description: "Professional recruitment for qualified roles.", links: [{ label: "Hays", url: "https://hays.pt" }], mapQuery: "Hays", icon: "👔", color: "#8c2447" },
      { title: "Michael Page Executive", description: "Management and specialist recruitment.", links: [{ label: "Michael Page", url: "https://michaelpage.pt" }], mapQuery: "Michael Page", icon: "👔", color: "#8c2447" },
      { title: "Page Personnel", description: "Clerical and technical recruitment agency.", links: [{ label: "Page Personnel", url: "https://pagepersonnel.pt" }], mapQuery: "Page Personnel", icon: "🏢", color: "#8c2447" },
      { title: "Kelly Services", description: "Global staffing and outsourcing agency.", links: [{ label: "Kelly Services", url: "https://www.kellyservices.pt" }], mapQuery: "Kelly Services", icon: "🏢", color: "#8c2447" },
      { title: "Synergie Portugal", description: "Human resources and temporary employment.", links: [{ label: "Synergie", url: "https://synergie.pt" }], mapQuery: "Synergie", icon: "👥", color: "#8c2447" },
      { title: "Talenter Agency", description: "Multisector staffing and human resources.", links: [{ label: "Talenter", url: "https://talenter.com" }], mapQuery: "Talenter", icon: "🌟", color: "#8c2447" },
      { title: "Timing Human Resources", description: "Temporary work and recruitment services.", links: [{ label: "Timing", url: "https://timing.pt" }], mapQuery: "Timing", icon: "⏳", color: "#8c2447" },
      { title: "Multitempo", description: "Staffing solutions and career placement.", links: [{ label: "Multitempo", url: "https://multitempo.pt" }], mapQuery: "Multitempo", icon: "🏢", color: "#8c2447" },
      { title: "Elevus", description: "Recruitment, selection, and HR consulting.", links: [{ label: "Elevus", url: "https://elevus.pt" }], mapQuery: "Elevus", icon: "📈", color: "#8c2447" },
      { title: "Quorum Talent", description: "Executive search and specialized staffing.", links: [{ label: "Quorum", url: "https://quorumtalent.com" }], mapQuery: "Quorum", icon: "🎯", color: "#8c2447" },
      { title: "IAPMEI Business Support", description: "State agency for competitiveness and innovation.", links: [{ label: "IAPMEI", url: "https://www.iapmei.pt" }], mapQuery: "IAPMEI", icon: "🏛️", color: "#8c2447" },
      { title: "Segurança Social Support", description: "Welfare and social contribution registry for workers.", links: [{ label: "Segurança Social", url: "https://seg-social.pt" }], mapQuery: "Segurança Social", icon: "💳", color: "#8c2447" },
      { title: "ACT Labour Inspection", description: "Authority for working conditions and contractor regulation.", links: [{ label: "ACT Portal", url: "https://www.act.gov.pt" }], mapQuery: "ACT", icon: "🛡️", color: "#8c2447" },
      { title: "Start-up Agencies", description: "Incubation and career matchmaking hubs.", links: [{ label: "Startup Portugal", url: "https://startupportunugal.com" }], mapQuery: "Startup Portugal", icon: "🚀", color: "#8c2447" },
      { title: "Adecco Outsourcing", description: "Specialized corporate outsourcing services.", links: [{ label: "Adecco Outsourcing", url: "https://adecco.pt" }], mapQuery: "Adecco", icon: "📦", color: "#8c2447" },
      { title: "Randstad Inhouse Services", description: "On-site workforce management solutions.", links: [{ label: "Randstad Inhouse", url: "https://randstad.pt" }], mapQuery: "Randstad", icon: "🏭", color: "#8c2447" },
      { title: "EURES Network Support", description: "International mobility agency advisors.", links: [{ label: "EURES Portugal", url: "https://eures.europa.eu" }], mapQuery: "EURES", icon: "🇪🇺", color: "#8c2447" }
    ]
  },
  {
    title: "Health Services",
    description: "Public healthcare hospitals, private clinics, pharmacies, and emergency numbers.",
    details: "National Health Service (SNS) directories, private medical networks, emergency contacts, and pharmacies.",
    items: [
      { title: "SNS 24 (Portal da Saúde)", description: "National Health Service portal and 24/7 medical line.", links: [{ label: "SNS 24 Official", url: "https://sns24.gov.pt" }], mapQuery: "Centro de Saúde Hospital Público", icon: "🏥", color: "#4d5d53" },
      { title: "Hospital de Santa Maria", description: "Major public hospital in Lisbon.", links: [{ label: "CHLN Santa Maria", url: "https://www.chln.min-saude.pt" }], mapQuery: "Hospital de Santa Maria", icon: "🏨", color: "#4d5d53" },
      { title: "Hospital de São João", description: "Major public teaching hospital in Porto.", links: [{ label: "HSJ Porto", url: "https://www.saojoao.min-saude.pt" }], mapQuery: "Hospital de Sao Joao", icon: "🏨", color: "#4d5d53" },
      { title: "CUF Saúde", description: "Private hospital and clinic network.", links: [{ label: "CUF Hospitais", url: "https://www.cuf.pt" }], mapQuery: "Hospital CUF", icon: "🩺", color: "#4d5d53" },
      { title: "Lusiadas Saúde", description: "Private hospital groups across Portugal.", links: [{ label: "Lusiadas", url: "https://www.lusiadas.pt" }], mapQuery: "Hospital Lusiadas", icon: "🩺", color: "#4d5d53" },
      { title: "Hospital da Luz", description: "Private medical centers and emergency units.", links: [{ label: "Hospital da Luz", url: "https://www.hospitaldaluz.pt" }], mapQuery: "Hospital da Luz", icon: "🩺", color: "#4d5d53" },
      { title: "Médis Health Insurance", description: "Private health insurance plans.", links: [{ label: "Médis", url: "https://www.medis.pt" }], mapQuery: "Médis", icon: "🛡️", color: "#4d5d53" },
      { title: "Multicare Insurance", description: "Fidelidade health insurance network.", links: [{ label: "Multicare", url: "https://www.multicare.pt" }], mapQuery: "Multicare", icon: "🛡️", color: "#4d5d53" },
      { title: "Farmácias Portuguesas", description: "National association of pharmacies and medicine locator.", links: [{ label: "Farmácias Pt", url: "https://farmaciasportuguesas.pt" }], mapQuery: "Farmácia", icon: "💊", color: "#4d5d53" },
      { title: "ANF (Associação Nacional de Farmácias)", description: "Pharmacy sector representation.", links: [{ label: "ANF Portal", url: "https://www.anf.pt" }], mapQuery: "ANF", icon: "💊", color: "#4d5d53" },
      { title: "Emergency Services (112)", description: "General European emergency number (police, fire, medical).", links: [{ label: "ANEPC Emergency", url: "https://www.prociv.pt" }], mapQuery: "Proteção Civil", icon: "🚨", color: "#4d5d53" },
      { title: "Red Cross Portugal", description: "Humanitarian medical aid and social support.", links: [{ label: "Cruz Vermelha", url: "https://www.cruzvermelha.pt" }], mapQuery: "Cruz Vermelha", icon: "➕", color: "#4d5d53" },
      { title: "Inem (Instituto Nacional de Emergência Médica)", description: "National medical emergency institute.", links: [{ label: "INEM", url: "https://www.inem.pt" }], mapQuery: "INEM", icon: "🚑", color: "#4d5d53" },
      { title: "Ordem dos Médicos", description: "Medical association and doctor directories.", links: [{ label: "Ordem dos Médicos", url: "https://ordemdosmedicos.pt" }], mapQuery: "Ordem dos Médicos", icon: "👨‍⚕️", color: "#4d5d53" },
      { title: "Ordem dos Enfermeiros", description: "Nursing association in Portugal.", links: [{ label: "Ordem dos Enfermeiros", url: "https://ordemenfermeiros.pt" }], mapQuery: "Ordem dos Enfermeiros", icon: "👩‍⚕️", color: "#4d5d53" },
      { title: "Centro de Saúde Locator", description: "Find your local public health clinic unit (USF).", links: [{ label: "SNS Health Units", url: "https://www.sns.gov.pt" }], mapQuery: "Centro de Saúde", icon: "📍", color: "#4d5d53" },
      { title: "Associação Portuguesa de Apoio à Vítima", description: "Victim support and psychological help.", links: [{ label: "APAV", url: "https://apav.pt" }], mapQuery: "APAV", icon: "🤝", color: "#4d5d53" },
      { title: "Mental Health Directorate", description: "National mental health care programs.", links: [{ label: "SNS Mental Health", url: "https://www.sns.gov.pt" }], mapQuery: "Saúde Mental", icon: "🧠", color: "#4d5d53" },
      { title: "Private Clinic Lisbon", description: "Specialized clinics directory in Lisbon.", links: [{ label: "Lisbon Health", url: "https://www.cuf.pt" }], mapQuery: "Clínica Lisboa", icon: "🏙️", color: "#4d5d53" },
      { title: "Private Clinic Porto", description: "Specialized clinics directory in Porto.", links: [{ label: "Porto Health", url: "https://www.lusiadas.pt" }], mapQuery: "Clínica Porto", icon: "🏙️", color: "#4d5d53" }
    ]
  },
  {
    title: "Public Transport",
    description: "Trains, metros, buses, and local transport network cards.",
    details: "National railway operators, metropolitan subway lines, bus networks, and ticketing portals.",
    items: [
      { title: "CP (Comboios de Portugal)", description: "National railway company for regional and long-distance trains.", links: [{ label: "CP Official", url: "https://www.cp.pt" }], mapQuery: "Estação de Caminhos de Ferro CP", icon: "🚆", color: "#78532f" },
      { title: "Metropolitano de Lisboa", description: "Lisbon underground subway network.", links: [{ label: "Metro Lisboa", url: "https://www.metrolisboa.pt" }], mapQuery: "Estação de Metro Lisboa", icon: "🚇", color: "#78532f" },
      { title: "Metro do Porto", description: "Porto light rail and metro transit system.", links: [{ label: "Metro do Porto", url: "https://www.metrodoporto.pt" }], mapQuery: "Estação de Metro do Porto", icon: "🚇", color: "#78532f" },
      { title: "Carris Lisbon", description: "Bus and tram public transit operator in Lisbon.", links: [{ label: "Carris", url: "https://www.carris.pt" }], mapQuery: "Carris", icon: "🚌", color: "#78532f" },
      { title: "STCP Porto", description: "Public transport bus service in Porto.", links: [{ label: "STCP", url: "https://www.stcp.pt" }], mapQuery: "STCP", icon: "🚌", color: "#78532f" },
      { title: "Fertagus", description: "Commuter train service crossing the Tagus river bridge.", links: [{ label: "Fertagus", url: "https://www.fertagus.pt" }], mapQuery: "Fertagus", icon: "🚆", color: "#78532f" },
      { title: "Transtejo Soflusa", description: "River ferry connections across the Tagus in Lisbon.", links: [{ label: "Transtejo", url: "https://www.transtejo.pt" }], mapQuery: "Terminal Fluvial", icon: "⛴️", color: "#78532f" },
      { title: "FlixBus Portugal", description: "Long-distance budget coach travel across cities.", links: [{ label: "FlixBus", url: "https://www.flixbus.pt" }], mapQuery: "Flixbus", icon: "🚍", color: "#78532f" },
      { title: "Rede Expressos", description: "National express bus network connecting Portugal.", links: [{ label: "Rede Expressos", url: "https://www.rede-expressos.pt" }], mapQuery: "Rede Expressos", icon: "🚌", color: "#78532f" },
      { title: "Transportes de Coimbra", description: "Municipal bus service in Coimbra.", links: [{ label: "Tuc", url: "https://www.smtuc.pt" }], mapQuery: "SMTUC Coimbra", icon: "🚎", color: "#78532f" },
      { title: "Metro Ligeiro do Mondego", description: "Regional transit system in central Portugal.", links: [{ label: "MLM Portal", url: "https://www.infraestruturasdeportugal.pt" }], mapQuery: "Transportes", icon: "🚝", color: "#78532f" },
      { title: "Navegante Card (Lisbon Pass)", description: "Monthly public transit pass for Lisbon metropolitan area.", links: [{ label: "Navegante", url: "https://navegante.pt" }], mapQuery: "Bilheteira Metro", icon: "🎫", color: "#78532f" },
      { title: "Andante Card (Porto Pass)", description: "Multimodal ticketing system for Porto transit.", links: [{ label: "Andante", url: "https://www.linhandante.com" }], mapQuery: "Loja Andante", icon: "🎫", color: "#78532f" },
      { title: "Infraestruturas de Portugal", description: "National road and rail infrastructure management.", links: [{ label: "Infraestruturas", url: "https://www.infraestruturasdeportugal.pt" }], mapQuery: "Infraestruturas de Portugal", icon: "🛣️", color: "#78532f" },
      { title: "Aeroporto de Lisboa", description: "Lisbon Humberto Delgado international airport transit info.", links: [{ label: "ANA Aeroportos", url: "https://www.aeroportolisboa.pt" }], mapQuery: "Aeroporto de Lisboa", icon: "✈️", color: "#78532f" },
      { title: "Aeroporto do Porto", description: "Francisco Sá Carneiro airport transport services.", links: [{ label: "ANA Porto", url: "https://www.aeroportoporto.pt" }], mapQuery: "Aeroporto do Porto", icon: "✈️", color: "#78532f" },
      { title: "TAP Air Portugal", description: "National flag carrier airline.", links: [{ label: "TAP Portugal", url: "https://www.flytap.com" }], mapQuery: "TAP Air Portugal", icon: "🛩️", color: "#78532f" },
      { title: "CP Train Schedules", description: "Online timetables for national rail travel.", links: [{ label: "CP Horários", url: "https://www.cp.pt/passageiros/pt/consultar-horarios" }], mapQuery: "Estação CP", icon: "🕒", color: "#78532f" },
      { title: "Carris Metropolitana", description: "Integrated bus network for outer Lisbon districts.", links: [{ label: "Carris Metropolitana", url: "https://www.carrismetropolitana.pt" }], mapQuery: "Carris Metropolitana", icon: "🚏", color: "#78532f" },
      { title: "Mobility & Transport Authority", description: "AMT national transport regulatory body.", links: [{ label: "AMT Regulator", url: "https://www.amt-autoridade.pt" }], mapQuery: "AMT", icon: "🛡️", color: "#78532f" }
    ]
  },
  {
    title: "Driving Licence",
    description: "Licence exchange rules, applications, driving schools, and vehicle registry.",
    details: "IMT driving credentials, license conversion rules, vehicle registration offices, and driving schools.",
    items: [
      { title: "IMT (Instituto da Mobilidade e dos Transportes)", description: "National transport authority for driving licenses.", links: [{ label: "IMT IP Official", url: "https://www.imt-ip.pt" }], mapQuery: "IMT Balcão de Atendimento", icon: "🚗", color: "#3b5998" },
      { title: "Conservatória do Registo Automóvel", description: "Vehicle registration and car ownership transfer office.", links: [{ label: "IRN Automóvel", url: "https://www.irn.mj.pt" }], mapQuery: "Conservatória do Registo Automóvel", icon: "🚙", color: "#3b5998" },
      { title: "ACP (Automóvel Clube de Portugal)", description: "Automobile club providing roadside assistance and license help.", links: [{ label: "ACP Portal", url: "https://www.acp.pt" }], mapQuery: "ACP Automóvel Clube", icon: "🛠️", color: "#3b598" },
      { title: "Escola de Condução (Driving Schools)", description: "Find accredited driving schools for lessons and exams.", links: [{ label: "ANR Driving Schools", url: "https://www.anr.pt" }], mapQuery: "Escola de Condução", icon: "🏁", color: "#3b5998" },
      { title: "Via Verde", description: "Electronic toll payment and highway tag service.", links: [{ label: "Via Verde", url: "https://www.viaverde.pt" }], mapQuery: "Via Verde", icon: "🛣️", color: "#3b5998" },
      { title: "Brisa Concessões Rodoviárias", description: "Highway operator and motorway maintenance.", links: [{ label: "Brisa", url: "https://www.brisa.pt" }], mapQuery: "Brisa", icon: "🛤️", color: "#3b5998" },
      { title: "CTT Licenciamento", description: "Driver license renewal services via post offices.", links: [{ label: "CTT Serviços", url: "https://www.ctt.pt" }], mapQuery: "Estação CTT Correios", icon: "✉️", color: "#3b5998" },
      { title: "Atestado Médico (Medical Exam)", description: "Mandatory medical certificate forms for license renewals.", links: [{ label: "SNS Portal", url: "https://sns.gov.pt" }], mapQuery: "Centro de Saúde", icon: "📋", color: "#3b5998" },
      { title: "Guia de Condução", description: "Temporary driving paper while waiting for plastic card.", links: [{ label: "IMT Online", url: "https://www.imt-ip.pt" }], mapQuery: "IMT", icon: "📄", color: "#3b5998" },
      { title: "License Exchange (Carta de Condução Estrangeira)", description: "Rules for converting foreign driver licenses in Portugal.", links: [{ label: "IMT Troca de Carta", url: "https://www.imt-ip.pt" }], mapQuery: "IMT", icon: "🔄", color: "#3b5998" },
      { title: "Periodic Technical Inspection (IPO)", description: "Mandatory car inspection center directory (Centros Inspeção).", links: [{ label: "ANCIPT", url: "https://www.ancipt.pt" }], mapQuery: "Centro de Inspeção Técnica IPO", icon: "🔧", color: "#3b5998" },
      { title: "ANSR (Autoridade Nacional de Segurança Rodoviária)", description: "National road safety authority and fine payments.", links: [{ label: "ANSR Portal", url: "https://www.ansr.pt" }], mapQuery: "ANSR", icon: "🛡️", color: "#3b5998" },
      { title: "Car Insurance (Seguro Automóvel)", description: "Mandatory vehicle insurance comparison rules.", links: [{ label: "ASF Seguros", url: "https://www.asf.com.pt" }], mapQuery: "Seguradora", icon: "🛡️", color: "#3b5998" },
      { title: "Impostos Sobre Veículos (IUC)", description: "Car circulation tax payment via Portal das Finanças.", links: [{ label: "Portal das Finanças", url: "https://portaldasfinancas.gov.pt" }], mapQuery: "Finanças", icon: "💶", color: "#3b5998" },
      { title: "Importing a Car into Portugal", description: "Customs and registration guidelines for foreign vehicles.", links: [{ label: "Portal das Finanças Alfândega", url: "https://www.portaldasfinancas.gov.pt" }], mapQuery: "Alfândega", icon: "📦", color: "#3b5998" },
      { title: "Driving Theory Test (Exame de Código)", description: "Study resources and official test guidelines.", links: [{ label: "IMT Exames", url: "https://www.imt-ip.pt" }], mapQuery: "IMT", icon: "💻", color: "#3b5998" },
      { title: "International Driving Permit (IDI)", description: "Application for international driving permits abroad.", links: [{ label: "ACP IDI", url: "https://www.acp.pt" }], mapQuery: "ACP", icon: "🌍", color: "#3b5998" },
      { title: "Electric Vehicle Charging (MOBIE)", description: "Public EV charging network operator directory.", links: [{ label: "Mobi.E", url: "https://www.mobie.pt" }], mapQuery: "Mobi.E Eletroposto", icon: "⚡", color: "#3b5998" },
      { title: "Car Rental Directory", description: "Major car rental agencies for temporary travel.", links: [{ label: "Europcar / Hertz", url: "https://www.europcar.pt" }], mapQuery: "Car Rental", icon: "🔑", color: "#3b5998" },
      { title: "Traffic Fine Appeals", description: "Legal process for contesting driving infractions.", links: [{ label: "ANSR Contraordenações", url: "https://www.ansr.pt" }], mapQuery: "ANSR", icon: "⚖️", color: "#3b5998" }
    ]
  },
  {
    title: "Education & Training",
    description: "Public schools, universities, language courses, and professional training centers.",
    details: "Public education directorates, higher education enrollment portals, and language academies.",
    items: [
      { title: "DGE (Direção-Geral da Educação)", description: "National directorate for school education curriculum.", links: [{ label: "DGE Official", url: "https://www.dge.mec.pt" }], mapQuery: "Escola Secundária Agrupamento", icon: "🎓", color: "#6b4226" },
      { title: "DGES (Ensino Superior)", description: "Directorate-general for higher education and university access.", links: [{ label: "DGES Portal", url: "https://www.dges.gov.pt" }], mapQuery: "Universidade", icon: "🏛️", color: "#6b4226" },
      { title: "Universidade de Lisboa", description: "Largest public university in Lisbon.", links: [{ label: "ULisboa", url: "https://www.ulisboa.pt" }], mapQuery: "Universidade de Lisboa", icon: "🎓", color: "#6b4226" },
      { title: "Universidade do Porto", description: "Renowned public university in northern Portugal.", links: [{ label: "U.Porto", url: "https://sigarra.up.pt/up" }], mapQuery: "Universidade do Porto", icon: "🎓", color: "#6b4226" },
      { title: "Universidade de Coimbra", description: "Historic university and research center.", links: [{ label: "UC Portal", url: "https://www.uc.pt" }], mapQuery: "Universidade de Coimbra", icon: "📜", color: "#6b4226" },
      { title: "Instituto Politécnico de Lisboa", description: "Polytechnic institute for applied sciences.", links: [{ label: "IPL Portal", url: "https://www.ipl.pt" }], mapQuery: "Instituto Politécnico de Lisboa", icon: "🔬", color: "#6b4226" },
      { title: "IEFP Professional Training", description: "Vocational courses and adult skills retraining.", links: [{ label: "IEFP Formação", url: "https://www.iefp.pt" }], mapQuery: "Centro de Formação Profissional", icon: "🛠️", color: "#6b4226" },
      { title: "Camões IP (Portuguese Language)", description: "Public institute for promoting Portuguese language and culture.", links: [{ label: "Camões IP", url: "https://www.instituto-camoes.pt" }], mapQuery: "Camões IP", icon: "🗣️", color: "#6b4226" },
      { title: "Alliance Française Lisbonne", description: "Language training and cultural center.", links: [{ label: "Alliance Francaise", url: "https://www.alliancefrancaise.pt" }], mapQuery: "Alliance Française", icon: "📖", color: "#6b4226" },
      { title: "British Council Portugal", description: "English language courses and international exams.", links: [{ label: "British Council", url: "https://www.britishcouncil.pt" }], mapQuery: "British Council", icon: "🇬🇧", color: "#6b4226" },
      { title: "Escola de Línguas (Language Schools)", description: "Local certified language academies directory.", links: [{ label: "Language Schools", url: "https://eportugal.gov.pt" }], mapQuery: "Escola de Línguas", icon: "💬", color: "#6b4226" },
      { title: "School Placement (Matrículas)", description: "Online portal for student enrollment in public schools.", links: [{ label: "Portal das Matrículas", url: "https://portalmatriculas.edu.gov.pt" }], mapQuery: "Escola Básica", icon: "📝", color: "#6b4226" },
      { title: "Ação Social Escolar (SAS)", description: "Student welfare, meal subsidies, and book grants.", links: [{ label: "DGEBS", url: "https://www.dge.mec.pt" }], mapQuery: "Escola", icon: "🍲", color: "#6b4226" },
      { title: "Erasmus+ Portugal", description: "European student exchange and education mobility program.", links: [{ label: "Erasmus Mais", url: "https://www.erasmusmais.pt" }], mapQuery: "Erasmus", icon: "🇪🇺", color: "#6b4226" },
      { title: "Fundação para a Ciência e a Tecnologia", description: "National research funding agency.", links: [{ label: "FCT Portal", url: "https://www.fct.pt" }], mapQuery: "FCT", icon: "🔬", color: "#6b4226" },
      { title: "Biblioteca Nacional de Portugal", description: "National library for research and academic study.", links: [{ label: "BNP Portal", url: "https://www.bnportugal.gov.pt" }], mapQuery: "Biblioteca Nacional", icon: "📚", color: "#6b4226" },
      { title: "Universidade Nova de Lisboa", description: "Modern research university.", links: [{ label: "NOVA", url: "https://www.unl.pt" }], mapQuery: "Universidade Nova", icon: "🏛️", color: "#6b4226" },
      { title: "ISCTE - Instituto Universitário de Lisboa", description: "University institute specializing in business and social sciences.", links: [{ label: "ISCTE", url: "https://www.iscte-iul.pt" }], mapQuery: "ISCTE", icon: "📊", color: "#6b4226" },
      { title: "Universidade Católica Portuguesa", description: "Private Catholic university network.", links: [{ label: "UCP", url: "https://www.ucp.pt" }], mapQuery: "Universidade Católica", icon: "✝️", color: "#6b4226" },
      { title: "Cursos de Formação Inicial", description: "Youth and adult professional certification portals.", links: [{ label: "Catalogo Nacional Qualificações", url: "https://www.catalogo.anqep.gov.pt" }], mapQuery: "Formação", icon: "📋", color: "#6b4226" }
    ]
  },
  {
    title: "Pharmacies & Daily Life",
    description: "Local pharmacies, utility providers, postal mail, and daily essentials.",
    details: "Utility connection portals, postal tracking services, emergency pharmacies, and consumer services.",
    items: [
      { title: "EDP Comercial (Electricity & Gas)", description: "Main energy utility provider in Portugal.", links: [{ label: "EDP Official", url: "https://www.edp.pt" }], mapQuery: "EDP Loja de Atendimento", icon: "⚡", color: "#2b4c7e" },
      { title: "Galp Energia", description: "Energy, gas, and fuel provider.", links: [{ label: "Galp", url: "https://galp.com" }], mapQuery: "Galp", icon: "🔥", color: "#2b4c7e" },
      { title: "Endesa Portugal", description: "Electricity and gas supplier.", links: [{ label: "Endesa", url: "https://www.endesa.pt" }], mapQuery: "Endesa", icon: "💡", color: "#2b4c7e" },
      { title: "MEO (Telecom & Internet)", description: "Major telecommunications and fiber internet provider.", links: [{ label: "MEO", url: "https://www.meo.pt" }], mapQuery: "Loja MEO", icon: "📡", color: "#2b4c7e" },
      { title: "NOS Comunicações", description: "Television, internet, and mobile network operator.", links: [{ label: "NOS", url: "https://www.nos.pt" }], mapQuery: "Loja NOS", icon: "📺", color: "#2b4c7e" },
      { title: "Vodafone Portugal", description: "Mobile and fiber broadband services.", links: [{ label: "Vodafone", url: "https://www.vodafone.pt" }], mapQuery: "Loja Vodafone", icon: "📱", color: "#2b4c7e" },
      { title: "CTT Correios de Portugal", description: "National postal mail, parcel delivery, and banking services.", links: [{ label: "CTT Portal", url: "https://www.ctt.pt" }], mapQuery: "Estação CTT Correios", icon: "✉️", color: "#2b4c7e" },
      { title: "EPAL (Water Supply Lisbon)", description: "Water utility and sanitation management in Lisbon.", links: [{ label: "EPAL", url: "https://www.epal.pt" }], mapQuery: "EPAL", icon: "💧", color: "#2b4c7e" },
      { title: "Águas do Porto", description: "Municipal water supply in Porto.", links: [{ label: "Águas do Porto", url: "https://www.aguasdoporto.pt" }], mapQuery: "Águas do Porto", icon: "🚰", color: "#2b4c7e" },
      { title: "Farmácias de Serviço (On-Duty Pharmacies)", description: "Emergency 24-hour pharmacy locator.", links: [{ label: "Farmácias Pt", url: "https://farmaciasportuguesas.pt" }], mapQuery: "Farmácia de Serviço", icon: "💊", color: "#2b4c7e" },
      { title: "Supermercados Continente", description: "Leading national grocery supermarket chain.", links: [{ label: "Continente", url: "https://www.continente.pt" }], mapQuery: "Continente Supermercado", icon: "🛒", color: "#2b4c7e" },
      { title: "Pingo Doce", description: "Popular supermarket and grocery chain.", links: [{ label: "Pingo Doce", url: "https://www.pingodoce.pt" }], mapQuery: "Pingo Doce", icon: "🛍️", color: "#2b4c7e" },
      { title: "Auchan Portugal", description: "Hypermarkets and daily goods stores.", links: [{ label: "Auchan", url: "https://www.auchan.pt" }], mapQuery: "Auchan", icon: "🏪", color: "#2b4c7e" },
      { title: "Ligo / Lidl Portugal", description: "Discount grocery retail chain.", links: [{ label: "Lidl", url: "https://www.lidl.pt" }], mapQuery: "Lidl", icon: "🏬", color: "#2b4c7e" },
      { title: "Mercadona Portugal", description: "Supermarket chain across central and northern regions.", links: [{ label: "Mercadona", url: "https://www.mercadona.pt" }], mapQuery: "Mercadona", icon: "🛒", color: "#2b4c7e" },
      { title: "ASAE (Economic Food Safety)", description: "Regulatory authority for food safety and economic inspection.", links: [{ label: "ASAE Portal", url: "https://www.asae.gov.pt" }], mapQuery: "ASAE", icon: "🛡️", color: "#2b4c7e" },
      { title: "Livro de Reclamações Eletrónico", description: "Official consumer complaints portal for all businesses.", links: [{ label: "Livro de Reclamações", url: "https://www.livroreclamacoes.pt" }], mapQuery: "Reclamações", icon: "📖", color: "#2b4c7e" },
      { title: "DECO Proteste", description: "Consumer protection association and product testing.", links: [{ label: "DECO", url: "https://www.deco.pt" }], mapQuery: "DECO", icon: "⚖️", color: "#2b4c7e" },
      { title: "Reciclagem / Valorsul", description: "Waste management and recycling guidelines.", links: [{ label: "PontVerde", url: "https://www.pontoverde.pt" }], mapQuery: "Reciclagem", icon: "♻️", color: "#2b4c7e" },
      { title: "Serviço de Limpeza Urbana", description: "Municipal waste collection and street cleaning info.", links: [{ label: "Portal Autárquico", url: "https://www.portalautarquico.dgal.gov.pt" }], mapQuery: "Câmara Municipal", icon: "🧹", color: "#2b4c7e" }
    ]
  },
  {
    title: "Travel & Tourism",
    description: "Hotels, short-term stays, travel guides, and partner booking platforms.",
    details: "Travel reservation platforms, regional tourism boards, hotel booking partners, and excursion directories.",
    items: [
      { title: "Booking.com Partner", description: "Hotels, apartments, and short-stay accommodation bookings.", links: [{ label: "Booking.com", url: "https://www.booking.com" }], mapQuery: "Hotel", icon: "✈️", color: "#2a6f49" },
      { title: "Turismo de Portugal", description: "Official national tourism authority and destination guides.", links: [{ label: "Visit Portugal", url: "https://www.visitportugal.com" }], mapQuery: "Turismo de Portugal", icon: "🏖️", color: "#2a6f49" },
      { title: "Airbnb Portugal", description: "Short-term holiday rentals and unique spaces.", links: [{ label: "Airbnb", url: "https://www.airbnb.pt" }], mapQuery: "Airbnb", icon: "🏡", color: "#2a6f49" },
      { title: "Expedia Travel", description: "Flights, hotels, and vacation package reservations.", links: [{ label: "Expedia", url: "https://www.expedia.com" }], mapQuery: "Expedia", icon: "🌍", color: "#2a6f49" },
      { title: "TripAdvisor Portugal", description: "Reviews, attractions, restaurant ratings, and booking options.", links: [{ label: "TripAdvisor", url: "https://www.tripadvisor.pt" }], mapQuery: "TripAdvisor", icon: "⭐", color: "#2a6f49" },
      { title: "Hostelworld", description: "Backpacker hostels and budget travel stays.", links: [{ label: "Hostelworld", url: "https://www.hostelworld.com" }], mapQuery: "Hostel", icon: "🛏️", color: "#2a6f49" },
      { title: "GetYourGuide", description: "Tours, excursions, and tourist activities.", links: [{ label: "GetYourGuide", url: "https://www.getyourguide.com" }], mapQuery: "GetYourGuide", icon: "🎯", color: "#2a6f49" },
      { title: "Viator Tours", description: "Sightseeing tours and travel experiences.", links: [{ label: "Viator", url: "https://www.viator.com" }], mapQuery: "Viator", icon: "🗺️", color: "#2a6f49" },
      { title: "Parques de Sintra", description: "Official ticket portal for Sintra monuments and parks.", links: [{ label: "Parques de Sintra", url: "https://www.parquesdesintra.pt" }], mapQuery: "Parques de Sintra", icon: "🏰", color: "#2a6f49" },
      { title: "Porto e Norte de Portugal", description: "Regional tourism board for the north.", links: [{ label: "Porto & Norte", url: "https://www.portoenorte.pt" }], mapQuery: "Turismo do Porto", icon: "🍷", color: "#2a6f49" },
      { title: "Turismo de Lisboa", description: "Visitor bureau and city card portal for Lisbon.", links: [{ label: "Visit Lisbon", url: "https://www.visitlisboa.com" }], mapQuery: "Turismo de Lisboa", icon: "🌆", color: "#2a6f49" },
      { title: "Região de Turismo do Algarve", description: "Algarve regional tourism portal.", links: [{ label: "Visitar Algarve", url: "https://www.visitalgarve.pt" }], mapQuery: "Turismo do Algarve", icon: "🌊", color: "#2a6f49" },
      { title: "Madeira Promotion Bureau", description: "Travel information for Madeira island.", links: [{ label: "Visit Madeira", url: "https://www.visitmadeira.com" }], mapQuery: "Madeira Tourism", icon: "🌺", color: "#2a6f49" },
      { title: "Visit Azores", description: "Official tourism portal for the Azores archipelago.", links: [{ label: "Visit Azores", url: "https://www.visitazores.com" }], mapQuery: "Azores Tourism", icon: "🌋", color: "#2a6f49" },
      { title: "Pousadas de Portugal", description: "Historic heritage hotels and luxury pousadas.", links: [{ label: "Pousadas", url: "https://www.pousadas.pt" }], mapQuery: "Pousada", icon: "🏰", color: "#2a6f49" },
      { title: "Hotels.com", description: "Hotel booking rewards platform.", links: [{ label: "Hotels.com", url: "https://www.hotels.com" }], mapQuery: "Hotel", icon: "🏨", color: "#2a6f49" },
      { title: "Agoda Stays", description: "Accommodation booking platform worldwide.", links: [{ label: "Agoda", url: "https://www.agoda.com" }], mapQuery: "Agoda", icon: "🧳", color: "#2a6f49" },
      { title: "Rentalcars.com", description: "Car rental comparison for travelers.", links: [{ label: "Rentalcars", url: "https://www.rentalcars.com" }], mapQuery: "Car Rental", icon: "🚗", color: "#2a6f49" },
      { title: "Rome2rio", description: "Multi-modal travel planning and route directions.", links: [{ label: "Rome2rio", url: "https://www.rome2rio.com" }], mapQuery: "Transport", icon: "🚆", color: "#2a6f49" },
      { title: "European Travel Commission", description: "EU travel guidance and safety advisories.", links: [{ label: "EU Travel", url: "https://europa.eu/european-union/topics/travel_en" }], mapQuery: "EU", icon: "🇪🇺", color: "#2a6f49" }
    ]
  }
];

const cardColors = [
  "#2b4c7e", "#2a6f49", "#8c4a24", "#5c3d78", 
  "#1d6363", "#8c2447", "#4d5d53", "#78532f", 
  "#3b5998", "#6b4226", "#2b4c7e", "#2a6f49"
];

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredCategories = categoriesData.filter((cat) =>
    cat.title.toLowerCase().includes(search.toLowerCase()) ||
    cat.description.toLowerCase().includes(search.toLowerCase()) ||
    cat.items.some(item => item.title.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
  );

  const goToServices = () => {
    setSelectedCategory(null);
    document.getElementById("global-services")?.scrollIntoView({ behavior: "smooth" });
    setActiveTab("Services");
  };

  return (
    <div className="home-page">
      {/* NAVIGATION */}
      <nav className="site-nav">
        <div className="nav-inner">
          <div className="nav-brand-container" onClick={() => { setSelectedCategory(null); setActiveTab("Home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} style={{ cursor: "pointer" }}>
            <div className="nav-logo">S</div>
            <div className="nav-brand-text">
              <strong>SANOLINES</strong>
              <span>Independent Information & Services Directory</span>
            </div>
          </div>

          <div className="nav-links">
            <button
              className={activeTab === "Home" && !selectedCategory ? "active" : ""}
              onClick={() => {
                setSelectedCategory(null);
                setActiveTab("Home");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Home
            </button>
            <button
              className={activeTab === "Services" || selectedCategory ? "active" : ""}
              onClick={goToServices}
            >
              Services
            </button>
          </div>
        </div>
      </nav>

      {/* CONDITIONAL VIEW */}
      {selectedCategory ? (
        <main className="main-container" style={{ padding: "40px 20px", maxWidth: "1000px", margin: "0 auto" }}>
          <button
            type="button"
            onClick={() => setSelectedCategory(null)}
            style={{
              background: "none", border: "none", color: "#2b4c7e", fontWeight: "600",
              cursor: "pointer", marginBottom: "20px", display: "flex", alignItems: "center", gap: "6px", fontSize: "0.95rem"
            }}
          >
            &larr; Back to all service groups
          </button>

          <div style={{ backgroundColor: "#ffffff", borderRadius: "16px", padding: "40px", boxShadow: "0 6px 20px rgba(0,0,0,0.08)", borderTop: "6px solid #2b4c7e", marginBottom: "40px" }}>
            <span style={{ background: "#edf2f7", color: "#2b4c7e", padding: "6px 12px", borderRadius: "6px", fontWeight: "600", fontSize: "0.85rem" }}>
              Independent Directory Topic
            </span>
            <h1 style={{ fontSize: "2.2rem", color: "#1a1a1a", marginTop: "15px", marginBottom: "15px" }}>
              {selectedCategory.title}
            </h1>
            <p style={{ fontSize: "1.1rem", color: "#555", lineHeight: "1.6", marginBottom: "20px" }}>
              {selectedCategory.description}
            </p>
            <p style={{ fontSize: "0.95rem", color: "#666", lineHeight: "1.6", background: "#f8fafc", padding: "15px", borderRadius: "8px" }}>
              {selectedCategory.details}
            </p>
          </div>

          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#222" }}>Included Resources & Links (20+ Verified Portals)</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {selectedCategory.items.map((subItem, sIdx) => (
              <div 
                key={sIdx}
                style={{
                  backgroundColor: "#ffffff", borderRadius: "12px", padding: "24px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0",
                  borderTop: `5px solid ${subItem.color || "#2b4c7e"}`, display: "flex", flexDirection: "column", justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <span style={{ fontSize: "1.8rem" }}>{subItem.icon || "📌"}</span>
                  </div>
                  <h3 style={{ fontSize: "1.2rem", color: "#1a1a1a", margin: "0 0 8px 0" }}>{subItem.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.5", marginBottom: "15px" }}>{subItem.description}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                  {subItem.links.map((lnk, lIdx) => (
                    <a
                      key={lIdx}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#f8fafc", color: "#2b4c7e", border: "1px solid #e2e8f0",
                        textDecoration: "none", padding: "8px 12px", borderRadius: "6px", fontWeight: "600",
                        fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "space-between"
                      }}
                    >
                      <span>🌐 {lnk.label}</span>
                      <span style={{ fontSize: "0.8rem", color: "#8c4a24" }}>&rarr;</span>
                    </a>
                  ))}

                  {subItem.mapQuery && (
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(subItem.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: "#ffffff", color: "#4a5568", border: "1px dashed #cbd5e0",
                        textDecoration: "none", padding: "6px 12px", borderRadius: "6px", fontWeight: "500",
                        fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "4px"
                      }}
                    >
                      📍 Find on Maps
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "#fff", border: "1px solid #eaeaea", padding: "20px", borderRadius: "10px", marginTop: "40px" }}>
            <h4 style={{ margin: "0 0 8px 0", color: "#333" }}>Important Notice</h4>
            <p style={{ margin: 0, fontSize: "0.9rem", color: "#666", lineHeight: "1.5" }}>
              Sanolines Information is an independent information directory and guidance platform. Users are solely responsible for verifying information directly with the relevant official authority before relying on it or taking any action.
            </p>
          </div>
        </main>
      ) : (
        <>
          {/* HERO */}
          <header className="hero-section">
            <div className="hero-content">
              <span className="hero-badge">SERVICES & SEARCH DIRECTORY</span>
              <h1>Find official services, room rentals, bank setup, and essential resources.</h1>
              <p>
                Sanolines Information is an independent information directory and guidance platform that helps you locate official state portals, 
                jobs, housing rentals, open bank accounts, and daily life essentials. Users are solely responsible for verifying information directly with the relevant official authority.
              </p>

              <div className="hero-search-bar">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search jobs, room rent, housing, bank account, transport..."
                  aria-label="Search services"
                />
                <button type="button" onClick={goToServices}>Search</button>
              </div>
            </div>
          </header>

          {/* MAIN 12-BOX GRID */}
          <main className="main-container">
            <section id="global-services" className="services-directory">
              <div className="continents-grid">
                {filteredCategories.map((category, index) => {
                  const bgColour = cardColors[index % cardColors.length];
                  return (
                    <div
                      className="continent-card"
                      key={category.title}
                      style={{
                        backgroundColor: bgColour,
                        color: "#ffffff",
                        borderRadius: "12px",
                        padding: "24px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
                      }}
                    >
                      <div>
                        <h2 style={{ fontSize: "1.3rem", fontWeight: "800", marginBottom: "12px", letterSpacing: "0.5px" }}>
                          {category.title}
                        </h2>
                        <p style={{ fontSize: "0.9rem", lineHeight: "1.5", opacity: "0.95", marginBottom: "20px" }}>
                          {category.description}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#1a1a1a",
                          border: "none",
                          padding: "10px 16px",
                          borderRadius: "6px",
                          fontWeight: "700",
                          fontSize: "0.8rem",
                          cursor: "pointer",
                          width: "max-content",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                        }}
                      >
                        VIEW SERVICES &rarr;
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

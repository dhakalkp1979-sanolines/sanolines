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
      { title: "Associação Portuguesa de Apoio à Vítima", description: "Victim support and psychological help.", links: [{ label: "APAV", url: "https://apav.pt" }], mapQuery: "APAV", icon: "🤝", color: "#4d5d53" }
    ]
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categoriesData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => 
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.items.length > 0
  );

  return (
    <div className="app-container">
      {/* Green Uniplaces Promo Banner */}
      <div style={{ backgroundColor: "#2e7d32", color: "#ffffff", textAlign: "center", padding: "10px", fontFamily: "sans-serif", fontSize: "14px" }}>
        Looking for student housing? 
        <a href="https://www.uniplaces.com" target="_blank" rel="noopener noreferrer" style={{ color: "#ffeb3b", textDecoration: "underline", marginLeft: "5px", marginRight: "5px" }}>
          Click here to visit Uniplaces
        </a>. 
        Use promo code <strong>UNIX0YP7M</strong> at checkout to get 10% off the service fee!
      </div>

      {/* Main Header / Navigation */}
      <header className="app-header">
        <h1>Sanolines</h1>
        <p>Independent Information & Services Directory</p>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search resources, services, or portals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="categories-grid">
          {filteredCategories.map((category, index) => (
            <div 
              key={index} 
              className="category-card"
              onClick={() => setSelectedCategory(category)}
            >
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <div className="modal-overlay" onClick={() => setSelectedCategory(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>{selectedCategory.title}</h2>
              <p className="modal-details">{selectedCategory.details}</p>
              <ul className="resource-list">
                {selectedCategory.items.map((item, i) => (
                  <li key={i} className="resource-item">
                    <strong>{item.icon} {item.title}</strong>
                    <p>{item.description}</p>
                    {item.links.map((link, lIdx) => (
                      <a key={lIdx} href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: item.color }}>
                        {link.label} ↗
                      </a>
                    ))}
                  </li>
                ))}
              </ul>
              <button className="close-btn" onClick={() => setSelectedCategory(null)}>Close</button>
            </div>
          </div>
        )}
      </main>

      {/* Footer with Disclaimers and Privacy Information */}
      <footer className="app-footer" style={{ textAlign: "center", padding: "20px", fontSize: "13px", color: "#666", borderTop: "1px solid #eee", marginTop: "40px" }}>
        <p>© {new Date().getFullYear()} Sanolines. Independent information directory and guidance platform.</p>
        <p style={{ fontSize: "11px", maxWidth: "800px", margin: "10px auto" }}>
          <strong>Disclaimer:</strong> Sanolines is an independent guide and information platform. We are not affiliated with, endorsed by, or connected to any government agency or official state portal.
        </p>
        <div style={{ marginTop: "10px" }}>
          <span style={{ margin: "0 10px", cursor: "pointer" }}>Privacy Policy</span> | 
          <span style={{ margin: "0 10px", cursor: "pointer" }}>Terms of Service</span> | 
          <span style={{ margin: "0 10px", cursor: "pointer" }}>Contact</span>
        </div>
      </footer>
    </div>
  );
}

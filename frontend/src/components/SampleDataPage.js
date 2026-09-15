import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, CalendarDays, ChevronDown, FileText, Landmark, MapPin, Phone, ShieldCheck } from "lucide-react";
import { translateData, useLanguage } from "../i18n";
import AccessibilityMenu from "./AccessibilityMenu";

const detailPages = {
  "/panchayat-overview": { title: "Panchayat Overview", description: "Administrative snapshot of the panchayats managed through this portal.", columns: ["Panchayat", "Residents", "Tax Collected"], rows: [["Shivaji Nagar", "120", "₹4,50,000"], ["Nehru Nagar", "95", "₹3,20,000"], ["MG Road", "150", "₹5,80,000"]] },
  "/health-stats": { title: "Health & Vaccination Stats", description: "Current health service coverage reported by local offices.", columns: ["Panchayat", "Vaccination Rate", "Health Checkups"], rows: [["Shivaji Nagar", "92%", "80"], ["Nehru Nagar", "88%", "65"], ["MG Road", "95%", "120"]] },
  "/development-indicators": { title: "Development Indicators", description: "Progress updates for public development works.", columns: ["Project", "Panchayat", "Progress"], rows: [["Road development", "Shivaji Nagar", "75%"], ["Water supply", "Nehru Nagar", "60%"], ["School renovation", "MG Road", "90%"]] },
  "/funding-received": { title: "Funding Received", description: "Public funding received for village development purposes.", columns: ["Village", "Purpose", "Amount"], rows: [["Shivaji Nagar", "Road Development", "₹5,00,000"], ["Nehru Nagar", "Water Supply", "₹3,00,000"], ["MG Road", "School Renovation", "₹2,00,000"]] },
};

const schemes = [
  { name: "Pradhan Mantri Awas Yojana - Gramin", ministry: "Rural Development", detail: "Housing assistance for eligible rural households without a pucca home.", status: "Applications open" },
  { name: "Ayushman Bharat - PM-JAY", ministry: "Health and Family Welfare", detail: "Cashless health cover for eligible families at empanelled hospitals.", status: "Eligibility verification" },
  { name: "Pradhan Mantri Ujjwala Yojana", ministry: "Petroleum and Natural Gas", detail: "Clean cooking fuel connection support for eligible households.", status: "Applications open" },
  { name: "Swachh Bharat Mission - Gramin", ministry: "Jal Shakti", detail: "Support for sanitation facilities and village cleanliness activities.", status: "Contact Panchayat office" },
];

const news = [
  { date: "15 Sep 2026", tag: "Gram Sabha", title: "Gram Sabha meeting scheduled for September", detail: "Residents are invited to review the agenda and share local priorities at the next open meeting." },
  { date: "08 Sep 2026", tag: "Public works", title: "Water supply maintenance notice", detail: "Scheduled maintenance may affect supply in Nirgudi on 10 September between 10:00 AM and 2:00 PM." },
  { date: "01 Sep 2026", tag: "Health", title: "Community health and vaccination camp", detail: "A health camp will be held at the Gram Panchayat office. Bring your government identity document and health records." },
];

const faqs = [
  ["How can I pay my property tax?", "Sign in to the resident portal, open Tax Dues, select the pending property and choose Pay Now. Keep the receipt number for your records."],
  ["How do I apply for a government scheme?", "Check the scheme details and eligibility requirements, then visit the Gram Panchayat office with the listed documents. The office will record and verify your application."],
  ["Where can I get a property certificate?", "Sign in to view available property documents. For a new or corrected certificate, contact the records desk at the Gram Panchayat office."],
  ["How can I attend a Gram Sabha meeting?", "Gram Sabha meetings are open to eligible village residents. Check the News page for the date, agenda and venue, then attend with a valid identity document."],
  ["How do I report a local issue?", "Visit the Gram Panchayat office or use the contact details below. Include the location, issue description and any supporting photographs or documents."],
];

function PortalHeader({ active, navigate }) {
  const links = [["/home", "Home"], ["/schemes", "Schemes"], ["/news", "News"], ["/faq", "FAQ"], ["/about", "About"]];
  return <><div className="info-gov-strip"><span>Government of Maharashtra</span><span><ShieldCheck size={14} /> Digital local government information service</span></div><header className="info-header"><div className="info-container info-nav-wrap"><button className="info-brand" onClick={() => navigate("/home")} aria-label="Go to Tech Panchayat home"><img src="/techpanchayatlogo.png" alt="Tech Panchayat logo" /><span><strong>Tech Panchayat</strong><small>Nirgudi Gram Panchayat</small></span></button><nav className="info-nav" aria-label="Information pages">{links.map(([path, label]) => <button key={path} className={active === path ? "active" : ""} onClick={() => navigate(path)}>{label}</button>)}<AccessibilityMenu /><button className="info-login" onClick={() => navigate("/login")}>Citizen login <ArrowRight size={15} /></button></nav></div></header></>;
}

function InfoPage({ title, eyebrow, intro, children, active, navigate }) {
  return <main className="info-site"><PortalHeader active={active} navigate={navigate} /><section className="info-page-hero"><div className="info-container"><p className="info-eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div></section><div className="info-container info-content">{children}</div><footer className="info-footer"><div className="info-container"><strong>Tech Panchayat</strong><span>Official information portal for Nirgudi Gram Panchayat, Haveli, Pune</span></div></footer></main>;
}

function HomePage({ navigate }) {
  const actions = [[Landmark, "Panchayat services", "Access records, notices, welfare services and local administration.", "/schemes"], [FileText, "Public records", "Read official updates about development works, funding and meetings.", "/news"], [CalendarDays, "Gram Sabha", "Stay informed about meeting dates, agendas and village decisions.", "/news"]];
  return <InfoPage active="/home" navigate={navigate} eyebrow="Citizen information portal" title="Your village information, in one trusted place." intro="Find government schemes, public notices, local services and Gram Panchayat information for Nirgudi, Haveli, Pune."><section className="info-welcome"><div><p className="info-eyebrow">Welcome to Nirgudi</p><h2>Services that are clear, local and easy to access.</h2><p>Tech Panchayat helps residents understand available benefits, follow public work and participate in local decisions. Information on this portal is organized for quick access and supported by the Gram Panchayat office.</p></div><div className="info-contact-box"><MapPin size={20} /><strong>Gram Panchayat Office</strong><span>Nirgudi, Taluka Haveli, District Pune</span><button onClick={() => navigate("/about")}>Office information <ArrowRight size={15} /></button></div></section><section><div className="info-section-heading"><p className="info-eyebrow">Quick access</p><h2>What are you looking for?</h2></div><div className="info-action-grid">{actions.map(([Icon, title, text, path]) => <button className="info-action-card" key={title} onClick={() => navigate(path)}><Icon size={25} /><strong>{title}</strong><span>{text}</span><ArrowRight size={17} /></button>)}</div></section><section className="info-notice"><div><p className="info-eyebrow">Important notice</p><h2>Gram Sabha meeting scheduled for September</h2><p>Residents can review village priorities and raise matters during the next open meeting.</p></div><button onClick={() => navigate("/news")}>Read latest updates <ArrowRight size={16} /></button></section></InfoPage>;
}

function SchemesPage({ navigate }) {
  return <InfoPage active="/schemes" navigate={navigate} eyebrow="Government benefits" title="Schemes and support for rural households" intro="Understand the purpose of major government schemes and where to begin your application. Eligibility is verified by the responsible department."><div className="info-callout"><ShieldCheck size={21} /><span>Keep your identity, address, bank and income documents ready. The Gram Panchayat office can guide you on the documents required for your application.</span></div><div className="info-card-grid">{schemes.map((scheme) => <article className="info-scheme-card" key={scheme.name}><span className="info-status">{scheme.status}</span><h2>{scheme.name}</h2><small>{scheme.ministry}</small><p>{scheme.detail}</p><button onClick={() => navigate("/login")}>Check resident services <ArrowRight size={15} /></button></article>)}</div></InfoPage>;
}

function NewsPage({ navigate }) {
  return <InfoPage active="/news" navigate={navigate} eyebrow="Official updates" title="News, notices and village meetings" intro="Follow announcements from Nirgudi Gram Panchayat, including public works, health camps and Gram Sabha meetings."><div className="info-news-list">{news.map((item) => <article className="info-news-card" key={item.title}><div className="info-news-date"><CalendarDays size={18} /><span>{item.date}</span></div><div><span className="info-status">{item.tag}</span><h2>{item.title}</h2><p>{item.detail}</p></div></article>)}</div><div className="info-contact-strip"><Phone size={20} /><span>For urgent local notices, contact the Gram Panchayat office during working hours.</span><strong>Office help desk: 020 0000 0000</strong></div></InfoPage>;
}

function FaqPage({ navigate }) {
  const [open, setOpen] = useState(0);
  return <InfoPage active="/faq" navigate={navigate} eyebrow="Help centre" title="Frequently asked questions" intro="Simple answers to common questions about local records, payments, schemes and Gram Sabha participation."><div className="info-faq-list">{faqs.map(([question, answer], index) => <div className={`info-faq ${open === index ? "open" : ""}`} key={question}><button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index}><span>{question}</span><ChevronDown size={18} /></button>{open === index && <p>{answer}</p>}</div>)}</div><div className="info-help"><h2>Still need help?</h2><p>Visit the Gram Panchayat office with your application or record reference. Staff can help you find the right service and next step.</p><button onClick={() => navigate("/about")}>View office details <ArrowRight size={15} /></button></div></InfoPage>;
}

function AboutPage({ navigate }) {
  return <InfoPage active="/about" navigate={navigate} eyebrow="About the portal" title="A digital connection to local government" intro="Tech Panchayat brings essential Gram Panchayat information together so residents can find services, follow decisions and participate with confidence."><section className="info-about-grid"><div><h2>Built around everyday citizen needs</h2><p>The portal provides a single public window for scheme information, village notices, development updates and frequently requested office guidance.</p><p>It supports transparent local administration while keeping the Gram Panchayat office at the centre of verification, approvals and resident assistance.</p></div><div className="info-facts"><div><MapPin size={19} /><span><b>Location</b>Nirgudi, Haveli, Pune</span></div><div><Landmark size={19} /><span><b>Service level</b>Gram Panchayat</span></div><div><ShieldCheck size={19} /><span><b>Portal purpose</b>Public information and citizen access</span></div></div></section><section className="info-office"><div><p className="info-eyebrow">Visit or contact us</p><h2>Gram Panchayat Office</h2><p>Nirgudi, Taluka Haveli, District Pune, Maharashtra</p></div><div><p><strong>Office hours</strong><br />Monday to Friday, 10:00 AM - 5:30 PM</p><p><strong>Help desk</strong><br />020 0000 0000 · panchayat@techpanchayat.gov.in</p></div></section></InfoPage>;
}

export default function SampleDataPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();
  if (pathname === "/home") return <HomePage navigate={navigate} />;
  if (pathname === "/scheme" || pathname === "/schemes") return <SchemesPage navigate={navigate} />;
  if (pathname === "/news") return <NewsPage navigate={navigate} />;
  if (pathname === "/faq") return <FaqPage navigate={navigate} />;
  if (pathname === "/about") return <AboutPage navigate={navigate} />;
  const page = detailPages[pathname] || detailPages["/panchayat-overview"];
  return <main className="gov-dashboard"><div className="gov-content"><button className="gov-action" onClick={() => navigate(-1)}>Back</button><section className="gov-panel info-detail-panel"><p className="gov-eyebrow">Administrator report</p><h1>{page.title}</h1><p>{page.description}</p><div className="gov-table-wrap"><table className="gov-table"><thead><tr>{page.columns.map((column) => <th key={column}>{column}</th>)}</tr></thead><tbody>{page.rows.map((row) => <tr key={row.join("-")}>{row.map((value, index) => <td key={`${value}-${index}`}>{translateData(value, language)}</td>)}</tr>)}</tbody></table></div></section></div></main>;
}

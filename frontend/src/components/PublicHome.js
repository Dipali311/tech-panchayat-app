import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  ChevronRight,
  FileText,
  Landmark,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";
import "./publicHome.css";
import AccessibilityMenu from "./AccessibilityMenu";

const services = [
  { icon: Landmark, label: "Panchayat profile", text: "Know your local body, office details and village services.", path: "/about" },
  { icon: FileText, label: "Public records", text: "Find notices, schemes and development updates in one place.", path: "/news" },
  { icon: CalendarDays, label: "Gram Sabha", text: "See meeting schedules, agendas and village decisions.", path: "/news" },
  { icon: MapPin, label: "Village location", text: "View Nirgudi office information and contact details.", path: "/about" },
];

const stats = [
  ["01", "Digital panchayat", "One trusted window for local information"],
  ["24/7", "Citizen access", "Services and updates whenever you need them"],
  ["100%", "Transparent updates", "Clear records for a more accountable village"],
];

export default function PublicHome() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="public-site">
      <div className="gov-strip">
        <div className="site-container gov-strip-inner">
          <span>Government of Maharashtra</span>
          <span className="gov-strip-right"><ShieldCheck size={14} /> Digital public service portal</span>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container nav-wrap">
          <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Tech Panchayat home">
            <img src="/techpanchayatlogo.png" alt="Tech Panchayat logo" />
            <span><strong>Tech Panchayat</strong><small>Digital village services</small></span>
          </button>
          <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? "main-nav open" : "main-nav"}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About us</a>
            <a href="#updates" onClick={() => setMenuOpen(false)}>Updates</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <AccessibilityMenu />
            <button className="nav-login" onClick={() => navigate("/login")}><Users size={16} /> Sign in</button>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-overlay" />
          <div className="site-container hero-content">
            <div className="hero-copy">
              <p className="section-kicker light">Nirgudi Gram Panchayat <span /></p>
              <h1>Stronger villages begin with <em>open information.</em></h1>
              <p className="hero-description">A simple digital gateway for residents, administrators and Gram Panchayat teams to find services, records and local updates.</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => navigate("/login")}>Access your panchayat <ArrowRight size={18} /></button>
                <a className="text-button" href="#services">Explore services <ChevronRight size={17} /></a>
              </div>
            </div>
            <div className="hero-notice">
              <div className="notice-icon"><Bell size={19} /></div>
              <div><span>Latest notice</span><strong>Gram Sabha meeting schedule</strong><small>View the latest village announcements and dates.</small></div>
              <ChevronRight size={19} />
            </div>
          </div>
        </section>

        <section className="quick-links" id="services">
          <div className="site-container">
            <div className="section-heading split-heading">
              <div><p className="section-kicker">Citizen services</p><h2>Everything local, <span>in one place.</span></h2></div>
              <p>Useful information for everyday village life, organized so it is easy to find and easy to trust.</p>
            </div>
            <div className="service-grid">
              {services.map(({ icon: Icon, label, text, path }) => (
                <button className="service-card" key={label} onClick={() => navigate(path)}>
                  <span className="service-icon"><Icon size={23} /></span>
                  <span className="service-label">{label}</span>
                  <span className="service-text">{text}</span>
                  <span className="card-arrow"><ArrowRight size={17} /></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="service-finder" aria-labelledby="service-finder-title">
          <div className="site-container">
            <div className="finder-heading">
              <div><p className="section-kicker">Start here</p><h2 id="service-finder-title">How can we help?</h2></div>
              <p>Choose a service directly. Public information is available without signing in.</p>
            </div>
            <div className="finder-actions">
              <button onClick={() => navigate("/schemes")}><strong>Find a government scheme</strong><span>Explore eligibility and application guidance <ArrowRight size={16} /></span></button>
              <button onClick={() => navigate("/news")}><strong>Read latest notices</strong><span>Meetings, health camps and public works <ArrowRight size={16} /></span></button>
              <button onClick={() => navigate("/faq")}><strong>Get help with a service</strong><span>Answers to common resident questions <ArrowRight size={16} /></span></button>
              <button onClick={() => navigate("/login")}><strong>Open citizen account</strong><span>View your private records and payments <ArrowRight size={16} /></span></button>
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="site-container stats-grid">
            {stats.map(([number, label, text]) => <div className="stat" key={label}><strong>{number}</strong><div><b>{label}</b><span>{text}</span></div></div>)}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="site-container about-grid">
            <div className="about-image"><img src="/grampanchayatbg.jpg" alt="Village community and Gram Panchayat building" /><span><MapPin size={17} /> Nirgudi, Haveli, Pune</span></div>
            <div className="about-copy"><p className="section-kicker">About Tech Panchayat</p><h2>A clearer connection between the village and its people.</h2><p>Tech Panchayat brings key Gram Panchayat information into a single, accessible space. Residents can follow local work, find public notices and understand the services available to them.</p><p>Built for practical use, it supports transparent administration and stronger participation in village decisions.</p><button className="outline-button" onClick={() => navigate("/about")}>Read about the initiative <ArrowRight size={17} /></button></div>
          </div>
        </section>

        <section className="updates-section" id="updates">
          <div className="site-container">
            <div className="section-heading split-heading"><div><p className="section-kicker">Stay informed</p><h2>Village updates that <span>matter.</span></h2></div><button className="quiet-button" onClick={() => navigate("/news")}>View all updates <ArrowRight size={17} /></button></div>
            <div className="updates-grid"><article><div className="update-date">15 <small>JUL<br />2026</small></div><div><span className="update-tag">Gram Sabha</span><h3>Upcoming Gram Sabha meeting schedule released</h3><p>Find the next meeting date, agenda and participation details.</p></div></article><article><div className="update-date">08 <small>JUL<br />2026</small></div><div><span className="update-tag">Development</span><h3>Village development works and funding progress</h3><p>Follow public works and the progress of local projects.</p></div></article></div>
          </div>
        </section>

        <section className="access-section" id="contact"><div className="site-container access-inner"><div><p className="section-kicker light">Your panchayat, within reach</p><h2>Ready to see what is happening in your village?</h2></div><button className="light-button" onClick={() => navigate("/login")}>Sign in to continue <ArrowRight size={18} /></button></div></section>
      </main>

      <footer className="site-footer"><div className="site-container footer-inner"><div className="footer-brand"><img src="/techpanchayatlogo.png" alt="Tech Panchayat logo" /><div><strong>Tech Panchayat</strong><span>Digital village services for Nirgudi</span></div></div><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#updates">Updates</a><button onClick={() => navigate("/login")}><Search size={15} /> Portal login</button></div><p>© 2026 Tech Panchayat · A citizen-first Gram Panchayat portal</p></div></footer>
    </div>
  );
}

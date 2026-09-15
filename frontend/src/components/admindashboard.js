import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n";
import VillageLocation from "./VillageLocation";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Dummy Data
  const panchayats = [
    { name: "Shivaji Nagar", residents: 120, taxCollected: 450000, schemesDistributed: 85 },
    { name: "Nehru Nagar", residents: 95, taxCollected: 320000, schemesDistributed: 60 },
    { name: "MG Road", residents: 150, taxCollected: 580000, schemesDistributed: 120 },
  ];

  const healthStats = [
    { panchayat: "Shivaji Nagar", vaccinationRate: "92%", healthCheckups: 80 },
    { panchayat: "Nehru Nagar", vaccinationRate: "88%", healthCheckups: 65 },
    { panchayat: "MG Road", vaccinationRate: "95%", healthCheckups: 120 },
  ];

  const fundingReceived = [
    { village: "Shivaji Nagar", purpose: "Road Development", amount: 500000 },
    { village: "Nehru Nagar", purpose: "Water Supply", amount: 300000 },
    { village: "MG Road", purpose: "School Renovation", amount: 200000 },
  ];

  // Cards data
  const cards = [
    { title: t.panchayatOverview, color: "bg-blue-500", redirect: "/panchayat-overview", icon: "👥" },
    { title: t.healthStats, color: "bg-green-500", redirect: "/health-stats", icon: "💉" },
    { title: t.development, color: "bg-yellow-500", redirect: "/development-indicators", icon: "🏗️" },
    { title: t.fundingReceived, color: "bg-teal-500", redirect: "/funding-received", icon: "💰" },
  ];

  return (
    <div className="gov-dashboard admin-dashboard">
      {/* Header */}
      <header className="gov-header">
        <div className="gov-header-main">
          <div className="gov-brand">
            <img src="/techpanchayatlogo.png" alt="Tech Panchayat logo" />
            <div>
              <p className="gov-brand-title">Digital local government services</p>
              <p className="gov-brand-name">Tech Panchayat</p>
            </div>
            {/* Navigation Links */}
            <nav className="gov-nav">
              <button onClick={() => navigate("/home")}>{t.home}</button>
              <button onClick={() => navigate("/scheme")}>{t.schemes}</button>
              <button onClick={() => navigate("/news")}>{t.news}</button>
              <button onClick={() => navigate("/faq")}>{t.faq}</button>
              <button onClick={() => navigate("/about")}>{t.about}</button>
            </nav>
          </div>
          <button
            onClick={() => navigate("/")}
            className="gov-action"
          >
            {t.logout}
          </button>
        </div>
        {/* Welcome Message */}
        <div className="gov-band">
          <div className="gov-band-inner">
            <p className="gov-eyebrow">Administrator workspace</p>
            <h1>{t.adminWelcome}</h1>
            <p>Monitor services, village development and public funding in one place.</p>
          </div>
        </div>
      </header>

      {/* Dashboard Section */}
      <main className="gov-content">

        {/* Dashboard Cards */}
        <div className="gov-menu-grid">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="gov-menu-card"
              onClick={() => navigate(card.redirect)}
            >
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p>{t.clickView}</p>
            </div>
          ))}
        </div>

        {/* Quick Stats Boxes */}
        <div className="gov-stats">
          {/* Total Residents */}
          <div className="gov-stat">
            <h3 className="text-lg font-semibold mb-2">{t.totalResidents}</h3>
            <p className="text-3xl font-bold text-blue-600">{panchayats.reduce((a, b) => a + b.residents, 0)}</p>
          </div>
          {/* Total Tax Collected */}
          <div className="gov-stat">
            <h3 className="text-lg font-semibold mb-2">{t.totalTax}</h3>
            <p className="text-3xl font-bold text-green-600">₹{panchayats.reduce((a, b) => a + b.taxCollected, 0)}</p>
          </div>
          {/* Total Health Checkups */}
          <div className="gov-stat">
            <h3 className="text-lg font-semibold mb-2">{t.checkups}</h3>
            <p className="text-3xl font-bold text-red-600">{healthStats.reduce((a, b) => a + b.healthCheckups, 0)}</p>
          </div>
          {/* Total Funding Received */}
          <div className="gov-stat">
            <h3 className="text-lg font-semibold mb-2">{t.fundingReceived}</h3>
            <p className="text-3xl font-bold text-teal-600">
              ₹{fundingReceived.reduce((a, b) => a + b.amount, 0)}
            </p>
          </div>
        </div>

        {/* Funding Received Table */}
        <div className="gov-panel">
          <h2>{t.perVillage}</h2>
          <div className="gov-table-wrap">
          <table className="gov-table">
            <thead>
              <tr>
                <th>{t.village}</th>
                <th>{t.purpose}</th>
                <th>{t.amount} (₹)</th>
              </tr>
            </thead>
            <tbody>
              {fundingReceived.map((fund, idx) => (
                <tr key={idx}>
                  <td>{fund.village}</td>
                  <td>{fund.purpose}</td>
                  <td>{fund.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>

        <div className="mt-8">
          <VillageLocation />
        </div>

      </main>
    </div>
  );
}

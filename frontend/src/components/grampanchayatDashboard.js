import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VillageLocation from "./VillageLocation";

export default function GrampanchayatDashboard() {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
  const navigate = useNavigate();

  // Translations
  const translations = {
    en: {
      manage: "Click to manage",
      title: "Grampanchayat - Nirgudi, Taluka Haveli, Pune",
      dashboard: "Dashboard - Records (Tax, Family, Health, Welfare, Animal)",
      addUpdate: "Add/Update Records",
      tax: "Tax Collection",
      welfare: "Welfare Schemes",
      notices: "Notices & Alerts",
      receipts: "Upload/Download Receipts",
      funding: "Funding Received",
      logout: "Logout",
      home: "Home",
      scheme: "Scheme",
      news: "News",
      faq: "FAQ",
      about: "About",
    },
    mr: {
      manage: "व्यवस्थापित करण्यासाठी क्लिक करा",
      title: "ग्रामपंचायत - निमगुडी, तालुका हवेली, पुणे",
      dashboard: "डॅशबोर्ड (सर्व नोंदी)",
      addUpdate: "नोंदी जोडा/अद्यतनित करा",
      tax: "कर संकलन",
      welfare: "कल्याण योजना",
      notices: "सूचना व इशारे",
      receipts: "पावत्या अपलोड/डाउनलोड",
      funding: "अनुदान प्राप्ती",
      logout: "बाहेर पडा",
      home: "मुख्यपृष्ठ",
      scheme: "योजना",
      news: "बातम्या",
      faq: "सामान्य प्रश्न",
      about: "आमच्याबद्दल",
    },
    hi: {
      manage: "प्रबंधित करने के लिए क्लिक करें",
      title: "ग्रामपंचायत - निमगुडी, तहसील हवेली, पुणे",
      dashboard: "डैशबोर्ड (सभी रिकॉर्ड)",
      addUpdate: "रिकॉर्ड जोड़ें/अपडेट करें",
      tax: "कर संग्रह",
      welfare: "कल्याण योजनाएं",
      notices: "सूचनाएं और अलर्ट",
      receipts: "रसीदें अपलोड/डाउनलोड",
      funding: "अनुदान प्राप्ति",
      logout: "लॉगआउट",
      home: "मुख्य पृष्ठ",
      scheme: "योजना",
      news: "समाचार",
      faq: "सामान्य प्रश्न",
      about: "हमारे बारे में",
    },
  };

  const t = translations[language];

  // Minimalistic pastel colors
  const boxes = [
    { title: t.dashboard, color: "bg-blue-100", redirect: "/gp-dashboard" },
    { title: t.addUpdate, color: "bg-green-100", redirect: "/gp-add-update" },
    { title: t.tax, color: "bg-yellow-100", redirect: "/gp-tax" },
    { title: t.welfare, color: "bg-purple-100", redirect: "/gp-welfare" },
    { title: t.notices, color: "bg-red-100", redirect: "/gp-notices" },
    { title: t.receipts, color: "bg-indigo-100", redirect: "/gp-receipts" },
    { title: t.funding, color: "bg-pink-100", redirect: "/gp-funding" }, // new box
  ];

  return (
    <div className="gov-dashboard gp-dashboard">

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="gov-header">
          <div className="gov-header-main">
            <div className="gov-brand">
              <img
                src="/techpanchayatlogo.png"
                alt="Tech Panchayat logo"
              />
              <div>
                <p className="gov-brand-title">Gram panchayat administration</p>
                <p className="gov-brand-name">Tech Panchayat</p>
              </div>
              {/* Navigation Links */}
              <nav className="gov-nav">
                <button onClick={() => navigate("/home")}>{t.home}</button>
                <button onClick={() => navigate("/scheme")}>{t.scheme}</button>
                <button onClick={() => navigate("/news")}>{t.news}</button>
                <button onClick={() => navigate("/faq")}>{t.faq}</button>
                <button onClick={() => navigate("/about")}>{t.about}</button>
              </nav>
            </div>

            {/* Language Switcher + Logout */}
            <div className="gov-nav">
              <select
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                  localStorage.setItem("language", e.target.value);
                }}
                className="gov-action"
              >
                <option value="en">English</option>
                <option value="mr">मराठी</option>
                <option value="hi">हिंदी</option>
              </select>

              <button
                onClick={() => navigate("/")}
                className="gov-action"
              >
                {t.logout}
              </button>
            </div>
          </div>

          {/* Grampanchayat Name */}
          <div className="gov-band">
            <div className="gov-band-inner">
              <p className="gov-eyebrow">Local government office</p>
              <h1>{t.title}</h1>
              <p>Transparent records and citizen services for every household.</p>
            </div>
          </div>
        </header>

        {/* Dashboard Boxes */}
        <div className="gov-content">
          <p className="gov-eyebrow">Service directory</p>
          <h2 className="gov-section-title">{t.dashboard}</h2>
          <div className="gov-menu-grid">
          {boxes.map((box, idx) => (
            <div
              key={idx}
              className="gov-menu-card"
              onClick={() => navigate(box.redirect)}
            >
              <h2>{box.title}</h2>
              <p>{t.manage}</p>
            </div>
          ))}
        </div>

        <div className="gov-panel">
          <VillageLocation />
        </div>
      </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { translateData } from "../i18n";
import VillageLocation from "./VillageLocation";
import PaymentScanner from "./PaymentScanner";

export default function ResidentDashboard() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
  const [scannerTax, setScannerTax] = useState(null);
  const translate = (value) => translateData(value, language);

    const getInitials = (name) => name.split(" ").map((part) => part[0]).join("").slice(0, 2);

  // Translation
  const translations = {
    en: {
      home: "Home", schemes: "Schemes", news: "News", faq: "FAQ", about: "About",
      welcome: "Welcome, Ravi Kumar 🏠",
      name: "Name", phone: "Phone", email: "Email", village: "Village", taluka: "Taluka", city: "City",
      propertyId: "Property ID", address: "Address", type: "Type", farmArea: "Farm Area",
      relation: "Relation", age: "Age", date: "Date", details: "Details", amount: "Amount (₹)", status: "Status", action: "Action",
      animal: "Animal", vaccination: "Vaccination", purpose: "Purpose", paid: "Paid",
      profile: "Profile Info",
      propertyRecords: "Property Records",
      familyMembers: "Family Members",
      healthRecords: "Health Records",
      taxDues: "Tax Dues",
      schemeEligibility: "Scheme Eligibility",
      payNow: "Pay Now",
      notices: "Notices & Reminders",
      downloads: "Receipts & Documents Download",
      animalData: "Animal Vaccination Records",
      fundingReceived: "Funding Received",
      logout: "Logout",
    },
    mr: {
      home: "मुख्यपृष्ठ", schemes: "योजना", news: "बातम्या", faq: "सामान्य प्रश्न", about: "आमच्याबद्दल",
      welcome: "स्वागत आहे, रहिवासी 🏠",
      name: "नाव", phone: "फोन", email: "ईमेल", village: "गाव", taluka: "तालुका", city: "शहर",
      propertyId: "मालमत्ता क्रमांक", address: "पत्ता", type: "प्रकार", farmArea: "शेती क्षेत्र",
      relation: "नाते", age: "वय", date: "दिनांक", details: "तपशील", amount: "रक्कम (₹)", status: "स्थिती", action: "कृती",
      animal: "प्राणी", vaccination: "लसीकरण", purpose: "उद्देश", paid: "भरले",
      profile: "प्रोफाइल माहिती",
      propertyRecords: "मालमत्ता नोंदी",
      familyMembers: "कुटुंब सदस्य",
      healthRecords: "आरोग्य नोंदी",
      taxDues: "कर देय",
      schemeEligibility: "योजना पात्रता",
      payNow: "पैसे भरा (Razorpay)",
      notices: "सूचना व स्मरणपत्रे",
      downloads: "पावत्या व दस्तऐवज",
      animalData: "प्राणी लसीकरण नोंदी",
      fundingReceived: "मालकाला निधी प्राप्त झाला",
      logout: "बाहेर पडा",
    },
    hi: {
      home: "होम", schemes: "योजनाएं", news: "समाचार", faq: "सामान्य प्रश्न", about: "हमारे बारे में",
      welcome: "स्वागत है, निवासी 🏠",
      name: "नाम", phone: "फोन", email: "ईमेल", village: "गांव", taluka: "तालुका", city: "शहर",
      propertyId: "संपत्ति आईडी", address: "पता", type: "प्रकार", farmArea: "खेत का क्षेत्र",
      relation: "रिश्ता", age: "उम्र", date: "दिनांक", details: "विवरण", amount: "राशि (₹)", status: "स्थिति", action: "कार्य",
      animal: "पशु", vaccination: "टीकाकरण", purpose: "उद्देश्य", paid: "भुगतान किया",
      profile: "प्रोफ़ाइल जानकारी",
      propertyRecords: "संपत्ति रिकॉर्ड",
      familyMembers: "परिवार सदस्य",
      healthRecords: "स्वास्थ्य रिकॉर्ड",
      taxDues: "कर बकाया",
      schemeEligibility: "योजना पात्रता",
      payNow: "भुगतान करें (Razorpay)",
      notices: "सूचनाएं व रिमाइंडर",
      downloads: "रसीदें व दस्तावेज़",
      animalData: "पशु टीकाकरण रिकॉर्ड",
      fundingReceived: "प्राप्त धनराशि",
      logout: "लॉग आउट",
    },
  };

  const t = translations[language];

  // Dummy Resident Data
  const profile = {
    name: "Ravi Kumar",
    phone: "+91-9876543210",
    email: "ravi.kumar@example.com",
    village: "Nirgudi",
    taluka: "Haveli",
    city: "Pune",
  };

  const propertyRecords = [
    { propertyId: "P101", address: "123 MG Road, Pune", type: "House", farmArea: "2 acres" },
    { propertyId: "P102", address: "45 Nehru Nagar, Pune", type: "Shop", farmArea: "—" },
  ];

  const familyMembers = [
    { name: "Ravi Kumar", relation: "Self", age: 35 },
    { name: "Sita Kumar", relation: "Wife", age: 32 },
    { name: "Ananya Kumar", relation: "Daughter", age: 8 },
  ];

  const healthRecords = [
    { date: "2025-09-01", type: "Vaccination", details: "Covid Booster" },
    { date: "2025-08-15", type: "Health Checkup", details: "BP & Sugar" },
  ];

  const taxDues = [
    { propertyId: "P101", taxType: "House Tax", amount: 12000, status: "Pending" },
    { propertyId: "P102", taxType: "Water Tax", amount: 5000, status: "Pending" },
  ];

  const schemesEligible = [
    { scheme: "Pradhan Mantri Awas Yojana", status: "Eligible" },
    { scheme: "Ayushman Bharat Health Scheme", status: "Eligible" },
    { scheme: "Swachh Bharat Mission Subsidy", status: "Not Eligible" },
  ];

  const notices = [
    "Reminder: Tax due for Property P101 by 10th Oct",
    "Health camp scheduled in Nirgudi on 15th Oct",
    "WhatsApp alert: Animal vaccination camp next week",
  ];

  const documents = [
    { name: "Tax Receipt P102", file: "/receipts/taxP102.pdf" },
    { name: "Property Ownership Certificate", file: "/docs/property.pdf" },
  ];

  const animalVaccinations = [
    { animal: "Cow", vaccination: "Done (Jan 2025)" },
    { animal: "Goat", vaccination: "Pending" },
  ];

  const fundingReceived = [
    { village: "Nirgudi", purpose: "Water Supply", amount: 500000, date: "2025-06-10" },
    { village: "Nirgudi", purpose: "Road Development", amount: 1200000, date: "2025-07-05" },
    { village: "Nirgudi", purpose: "School Renovation", amount: 300000, date: "2025-08-12" },
  ];

  return (
    <div className="gov-dashboard resident-dashboard">

      <div className="relative z-10">
        {/* Header */}
        <header className="gov-header">
          <div className="gov-header-main">
          <div className="gov-brand">
            <img src="/techpanchayatlogo.png" alt="Tech Panchayat logo" />
            <div>
              <p className="gov-brand-title">Citizen services portal</p>
              <p className="gov-brand-name">Tech Panchayat</p>
            </div>
            <nav className="gov-nav">
              <button onClick={() => navigate("/")}>{t.home}</button>
              <button onClick={() => navigate("/schemes")}>{t.schemes}</button>
              <button onClick={() => navigate("/news")}>{t.news}</button>
              <button onClick={() => navigate("/faq")}>{t.faq}</button>
              <button onClick={() => navigate("/about")}>{t.about}</button>
            </nav>
          </div>

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
        </header>

        {/* Welcome */}
        <div className="gov-band">
          <div className="gov-band-inner">
            <p className="gov-eyebrow">Resident account</p>
            <h1>{t.welcome}</h1>
            <p>View your household records, payments, benefits and local notices.</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-green-300 bg-green-50">
          <div className="resident-profile-heading">
            <div className="resident-avatar resident-avatar-primary" role="img" aria-label={`Profile photo of ${profile.name}`}>{getInitials(profile.name)}</div>
            <div><h2 className="text-xl font-semibold mb-1">{t.profile}</h2><p className="resident-profile-name">{profile.name}</p><span className="resident-profile-caption">Verified resident profile</span></div>
          </div>
          <div className="resident-profile-details"><p><strong>{t.phone}:</strong> {profile.phone}</p><p><strong>{t.email}:</strong> {profile.email}</p><p><strong>{t.village}:</strong> {profile.village}</p><p><strong>{t.taluka}:</strong> {profile.taluka}</p><p><strong>{t.city}:</strong> {profile.city}</p></div>
        </div>

        {/* Property Records */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-blue-300 bg-blue-50">
          <h2 className="text-xl font-semibold mb-2">{t.propertyRecords}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-2">{t.propertyId}</th><th className="border p-2">{t.address}</th><th className="border p-2">{t.type}</th><th className="border p-2">{t.farmArea}</th>
              </tr>
            </thead>
            <tbody>
              {propertyRecords.map((prop) => (
                <tr key={prop.propertyId} className="hover:bg-blue-50">
                  <td className="border p-2">{prop.propertyId}</td>
                  <td className="border p-2">{prop.address}</td>
                  <td className="border p-2">{translate(prop.type)}</td>
                  <td className="border p-2">{prop.farmArea}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Family Members */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-pink-300 bg-pink-50">
          <h2 className="text-xl font-semibold mb-2">{t.familyMembers}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-pink-100">
                <th className="border p-2">{t.name}</th><th className="border p-2">{t.relation}</th><th className="border p-2">{t.age}</th>
              </tr>
            </thead>
            <tbody>
              {familyMembers.map((member, index) => (
                <tr key={index} className="hover:bg-pink-50">
                  <td className="border p-2"><div className="family-member-cell"><span className={`resident-avatar resident-avatar-${index + 1}`} role="img" aria-label={`Profile photo of ${member.name}`}>{getInitials(member.name)}</span><span>{member.name}</span></div></td>
                  <td className="border p-2">{translate(member.relation)}</td>
                  <td className="border p-2">{member.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Health Records */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-red-300 bg-red-50">
          <h2 className="text-xl font-semibold mb-2">{t.healthRecords}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-red-100">
                <th className="border p-2">{t.date}</th><th className="border p-2">{t.type}</th><th className="border p-2">{t.details}</th>
              </tr>
            </thead>
            <tbody>
              {healthRecords.map((record, index) => (
                <tr key={index} className="hover:bg-red-50">
                  <td className="border p-2">{record.date}</td>
                  <td className="border p-2">{translate(record.type)}</td>
                  <td className="border p-2">{translate(record.details)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tax Dues */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-yellow-300 bg-yellow-50">
          <h2 className="text-xl font-semibold mb-2">{t.taxDues}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-yellow-100">
                <th className="border p-2">{t.propertyId}</th><th className="border p-2">{t.type}</th><th className="border p-2">{t.amount}</th><th className="border p-2">{t.status}</th><th className="border p-2">{t.action}</th>
              </tr>
            </thead>
            <tbody>
              {taxDues.map((tax, index) => (
                <tr key={index} className="hover:bg-yellow-50">
                  <td className="border p-2">{tax.propertyId}</td>
                  <td className="border p-2">{tax.taxType || "House Tax"}</td>
                  <td className="border p-2">{tax.amount}</td>
                  <td className="border p-2">{translate(tax.status)}</td>
                  <td className="border p-2">
                    {tax.status === "Pending" ? (
                      <button onClick={() => setScannerTax({ taxName: tax.taxType || "House Tax", taxId: tax.propertyId, amount: tax.amount })} className="bg-blue-900 text-white px-2 py-1 rounded hover:bg-blue-800">{t.payNow} · Scan QR</button>
                    ) : (
                      translate("Paid")
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scheme Eligibility */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-purple-300 bg-purple-50">
          <h2 className="text-xl font-semibold mb-2">{t.schemeEligibility}</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            {schemesEligible.map((scheme, index) => (
              <li key={index}>
                {translateData(scheme.scheme, language)} - <strong>{translate(scheme.status)}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* Notices & Reminders */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-teal-300 bg-teal-50">
          <h2 className="text-xl font-semibold mb-2">{t.notices}</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            {notices.map((note, index) => (
              <li key={index}>{translate(note)}</li>
            ))}
          </ul>
        </div>

        {/* Downloads */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-indigo-300 bg-indigo-50">
          <h2 className="text-xl font-semibold mb-2">{t.downloads}</h2>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            {documents.map((doc, index) => (
              <li key={index}>
                <a
                  href={doc.file}
                  className="text-blue-700 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Animal Vaccination Data */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-orange-300 bg-orange-50">
          <h2 className="text-xl font-semibold mb-2">{t.animalData}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-orange-100">
                <th className="border p-2">{t.animal}</th><th className="border p-2">{t.vaccination}</th>
              </tr>
            </thead>
            <tbody>
              {animalVaccinations.map((animal, index) => (
                <tr key={index} className="hover:bg-orange-50">
                  <td className="border p-2">{translate(animal.animal)}</td>
                  <td className="border p-2">{translate(animal.vaccination)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Funding Received */}
        <div className="mb-6 p-4 shadow-md rounded-lg border-l-4 border-teal-500 bg-teal-50">
          <h2 className="text-xl font-semibold mb-2">{t.fundingReceived}</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-teal-100">
                <th className="border p-2">{t.village}</th><th className="border p-2">{t.purpose}</th><th className="border p-2">{t.amount}</th><th className="border p-2">{t.date}</th>
              </tr>
            </thead>
            <tbody>
              {fundingReceived.map((fund, index) => (
                <tr key={index} className="hover:bg-teal-50">
                  <td className="border p-2">{fund.village}</td>
                  <td className="border p-2">{translate(fund.purpose)}</td>
                  <td className="border p-2">{fund.amount}</td>
                  <td className="border p-2">{fund.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-6">
          <VillageLocation />
        </div>

        {scannerTax && <PaymentScanner {...scannerTax} onClose={() => setScannerTax(null)} />}

      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { translateData, useLanguage } from "../i18n";

export default function GpNotices() {
  const { t, language } = useLanguage();
  const notices = [
    { id: 1, date: "01-09-2025", message: "Gram Sabha Meeting at 10 AM" },
    { id: 2, date: "10-09-2025", message: "Water Supply Maintenance Notice" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t.notices}</h1>
      <ul className="list-disc pl-6">
        {notices.map((n) => (
          <li key={n.id} className="mb-2">
            <strong>{n.date}:</strong> {translateData(n.message, language)}
          </li>
        ))}
      </ul>

      <Link to="/grampanchayat-dashboard">
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
          ⬅ {t.back}
        </button>
      </Link>
    </div>
  );
}

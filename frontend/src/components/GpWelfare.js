import React from "react";
import { Link } from "react-router-dom";
import { translateData, useLanguage } from "../i18n";

export default function GpWelfare() {
  const { t, language } = useLanguage();
  const schemes = [
    { id: 1, name: "PM Awas Yojana", beneficiary: "Ramesh Patil", status: "Approved" },
    { id: 2, name: "Ujjwala Yojana", beneficiary: "Sita Deshmukh", status: "Pending" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t.welfare}</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-purple-200">
            <th className="border px-4 py-2">{t.scheme}</th>
            <th className="border px-4 py-2">{t.beneficiary}</th>
            <th className="border px-4 py-2">{t.status}</th>
          </tr>
        </thead>
        <tbody>
          {schemes.map((s) => (
            <tr key={s.id} className="text-center">
              <td className="border px-4 py-2">{translateData(s.name, language)}</td>
              <td className="border px-4 py-2">{s.beneficiary}</td>
              <td className="border px-4 py-2">{translateData(s.status, language)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/grampanchayat-dashboard">
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
          ⬅ {t.back}
        </button>
      </Link>
    </div>
  );
}

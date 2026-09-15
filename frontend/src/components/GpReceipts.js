import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function GpReceipts() {
  const { t } = useLanguage();
  const receipts = [
    { id: 1, name: "Ramesh Patil", file: "receipt1.pdf" },
    { id: 2, name: "Sita Deshmukh", file: "receipt2.pdf" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t.receipts}</h1>
      <ul className="list-disc pl-6">
        {receipts.map((r) => (
          <li key={r.id}>
            {r.name} - <a href={`/${r.file}`} className="text-blue-600 underline">{t.download}</a>
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

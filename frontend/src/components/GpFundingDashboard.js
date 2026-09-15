import React from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function GpFundingDashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  // Dummy data
  const fundingData = [
    { village: "Nirgudi", allocated: 500000, received: 300000, pending: 200000, date: "2025-09-25" },
    { village: "Wagholi", allocated: 400000, received: 400000, pending: 0, date: "2025-09-24" },
    { village: "Manjari", allocated: 350000, received: 200000, pending: 150000, date: "2025-09-23" },
    { village: "Kesnand", allocated: 450000, received: 450000, pending: 0, date: "2025-09-22" },
  ];

  // Calculate totals
  const totalAllocated = fundingData.reduce((sum, item) => sum + item.allocated, 0);
  const totalReceived = fundingData.reduce((sum, item) => sum + item.received, 0);
  const totalPending = fundingData.reduce((sum, item) => sum + item.pending, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">{t.funding}</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-blue-200">
          <tr>
            <th className="border px-4 py-2">{t.village}</th>
            <th className="border px-4 py-2">{t.allocated} (₹)</th>
            <th className="border px-4 py-2">{t.received} (₹)</th>
            <th className="border px-4 py-2">{t.pending} (₹)</th>
            <th className="border px-4 py-2">{t.date}</th>
          </tr>
        </thead>
        <tbody>
          {fundingData.map((item, idx) => (
            <tr key={idx} className="text-center hover:bg-blue-50 transition">
              <td className="border px-4 py-2">{item.village}</td>
              <td className="border px-4 py-2">{item.allocated.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.received.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.pending.toLocaleString()}</td>
              <td className="border px-4 py-2">{item.date}</td>
            </tr>
          ))}

          {/* Totals */}
          <tr className="bg-gray-200 font-bold text-center">
            <td className="border px-4 py-2">{t.totalCollection}</td>
            <td className="border px-4 py-2">{totalAllocated.toLocaleString()}</td>
            <td className="border px-4 py-2">{totalReceived.toLocaleString()}</td>
            <td className="border px-4 py-2">{totalPending.toLocaleString()}</td>
            <td className="border px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <button
        onClick={() => navigate("/grampanchayat-dashboard")}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        ⬅ {t.back}
      </button>
    </div>
  );
}

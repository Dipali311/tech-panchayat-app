import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { translateData, useLanguage } from "../i18n";

// Dummy data
const records = [
  {
    houseId: "H101",
    ownerName: "Rajesh Sharma",
    sections: {
      tax: [
        { puName: "Property Tax", taxId: "PT001", taxType: "Yearly", amount: 1200, status: "Paid" },
        { puName: "Water Tax", taxId: "WT002", taxType: "Monthly", amount: 200, status: "Pending" },
      ],
    },
  },
  {
    houseId: "H102",
    ownerName: "Anita Verma",
    sections: {
      tax: [
        { puName: "Sewage Tax", taxId: "ST003", taxType: "Monthly", amount: 500, status: "Paid" },
      ],
    },
  },
];

export default function GPRecordsDashboard() {
  const { t, language } = useLanguage();
  const panchayatInfo = {
    name: "Gram Panchayat - Nirgudi",
    taluka: "Haveli",
    district: "Pune",
  };

  const generateReceipt = (record, item) => {
    const doc = new jsPDF();

    // Logo
    const img = "/techpanchayatlogo.png"; // public folder
    doc.addImage(img, "PNG", 14, 10, 25, 25);

    // Header
    doc.setFontSize(16);
    doc.text(panchayatInfo.name, 45, 18);
    doc.setFontSize(12);
    doc.text(`Taluka: ${panchayatInfo.taluka}`, 45, 26);
    doc.text(`District: ${panchayatInfo.district}`, 45, 34);
    doc.setFontSize(14);
    doc.text("Tax Receipt", 14, 50);

    // Table
    autoTable(doc, {
      startY: 55,
      head: [["House ID", "Owner Name", "Tax Name", "Tax ID", "Tax Type", "Amount (₹)", "Status"]],
      body: [
        [
          record.houseId,
          record.ownerName,
          item.puName,
          item.taxId,
          item.taxType,
          item.amount,
          item.status,
        ],
      ],
      headStyles: { fillColor: [41, 128, 185], textColor: 255 },
      bodyStyles: { textColor: 0 },
      columnStyles: {
        6: { textColor: item.status === "Paid" ? [0, 150, 0] : [200, 0, 0] },
      },
      theme: "grid",
    });

    // Footer
    const finalY = doc.lastAutoTable.finalY || 70;
    doc.text("This is a system-generated receipt.", 14, finalY + 10);
    doc.text(panchayatInfo.name, 14, finalY + 16);

    return doc;
  };

  const downloadReceipt = (record, item) => {
    const doc = generateReceipt(record, item);
    doc.save(`${record.houseId}_${item.taxId}_Receipt.pdf`);
  };

  const viewReceipt = (record, item) => {
    const doc = generateReceipt(record, item);
    window.open(doc.output("bloburl"), "_blank");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">{t.records}</h1>

      {records.map((record, idx) => (
        <div key={idx} className="bg-white shadow-md rounded-lg p-4 mb-6">
          <p className="font-semibold text-gray-700">{t.houseId}: {record.houseId}</p>
          <p className="font-semibold text-gray-700">{t.owner}: {record.ownerName}</p>

          {record.sections.tax.map((item, i) => (
            <div key={i} className="bg-blue-50 p-4 rounded-lg border mt-4">
              <p className="font-semibold text-blue-700">{translateData(item.puName, language)}</p>
              <p className="text-sm">{t.taxId}: {item.taxId}</p>
              <p className="text-sm">{t.type}: {item.taxType}</p>
              <p className="text-sm">{t.amount}: ₹{item.amount}</p>
              <p className={`text-sm font-semibold ${item.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                {t.status}: {translateData(item.status, language)}
              </p>

              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => viewReceipt(record, item)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                >
                  {t.view}
                </button>
                <button
                  onClick={() => downloadReceipt(record, item)}
                  className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {t.downloadReceipt}
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

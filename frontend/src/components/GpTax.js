import React from "react";
import { FiDownload } from "react-icons/fi";
import { translateData, useLanguage } from "../i18n";
import PaymentScanner from "./PaymentScanner";

// Dummy data for today
const taxes = [
  { id: 1, resident: "Ramesh Patil", propertyId: "P101", taxId: "T001", taxType: "House Tax", amount: 1200, status: "Paid", receipt: "#" },
  { id: 2, resident: "Ramesh Patil", propertyId: "P101", taxId: "T002", taxType: "Water Tax", amount: 800, status: "Pending", receipt: "#" },
  { id: 3, resident: "Sita Deshmukh", propertyId: "P102", taxId: "T003", taxType: "House Tax", amount: 500, status: "Paid", receipt: "#" },
  { id: 4, resident: "Sita Deshmukh", propertyId: "P102", taxId: "T004", taxType: "Water Tax", amount: 700, status: "Pending", receipt: "#" },
];

export default function TaxDashboard() {
  const { t: labels, language } = useLanguage();
  const [scannerTax, setScannerTax] = React.useState(null);
  // Overall summary
  const totalCollection = taxes.reduce((sum, t) => sum + t.amount, 0);
  const totalPaid = taxes.filter((t) => t.status === "Paid").reduce((sum, t) => sum + t.amount, 0);
  const totalPending = taxes.filter((t) => t.status === "Pending").reduce((sum, t) => sum + t.amount, 0);

  // Group by resident
  const residentMap = {};
  taxes.forEach((t) => {
    if (!residentMap[t.resident]) residentMap[t.resident] = [];
    residentMap[t.resident].push(t);
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">{labels.tax}</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <p className="text-gray-200 font-semibold">{labels.totalCollection}</p>
          <p className="text-2xl font-bold mt-2">₹{totalCollection}</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <p className="text-gray-200 font-semibold">{labels.totalPaid}</p>
          <p className="text-2xl font-bold mt-2">₹{totalPaid}</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <p className="text-gray-200 font-semibold">{labels.totalPending}</p>
          <p className="text-2xl font-bold mt-2">₹{totalPending}</p>
        </div>
      </div>

      {/* Resident-wise Records */}
      <div className="grid gap-6">
        {Object.keys(residentMap).map((resident, idx) => {
          const residentTaxes = residentMap[resident];
          const paidAmount = residentTaxes.filter((t) => t.status === "Paid").reduce((sum, t) => sum + t.amount, 0);
          const pendingAmount = residentTaxes.filter((t) => t.status === "Pending").reduce((sum, t) => sum + t.amount, 0);

          return (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
              <h2 className="text-xl font-semibold text-gray-700 mb-2">{resident}</h2>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">{labels.totalPaid}:</span> ₹{paidAmount} | <span className="font-semibold">{labels.totalPending}:</span> ₹{pendingAmount}
              </p>

              <div className="grid gap-4">
                {residentTaxes.map((t) => (
                  <div key={t.id} className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
                    <div className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto">
                      <p className="font-semibold text-gray-700"><span className="font-normal text-gray-500">{labels.propertyId}:</span> {t.propertyId}</p>
                      <p className="font-semibold text-gray-700"><span className="font-normal text-gray-500">{labels.taxId}:</span> {t.taxId}</p>
                      <p className="font-semibold text-gray-700"><span className="font-normal text-gray-500">{labels.type}:</span> {t.taxType}</p>
                      <p className="font-semibold text-gray-700"><span className="font-normal text-gray-500">{labels.amount}:</span> ₹{t.amount}</p>
                      <p className={`font-semibold ${t.status === "Paid" ? "text-green-600" : "text-red-600"}`}>
                        <span className="font-normal text-gray-500">{labels.status}:</span> {translateData(t.status, language)}
                      </p>
                    </div>

                    <div className="mt-3 md:mt-0 flex flex-wrap gap-2 justify-end">
                      {t.status === "Pending" && <button onClick={() => setScannerTax({ taxName: t.taxType, taxId: t.taxId, amount: t.amount })} className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition">Scan QR to pay</button>}
                      <a href={t.receipt} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"><FiDownload className="mr-2" /> {labels.downloadReceipt}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {scannerTax && <PaymentScanner {...scannerTax} onClose={() => setScannerTax(null)} />}
    </div>
  );
}

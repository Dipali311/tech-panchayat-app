import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import PublicHome from "./components/PublicHome";
import AdminDashboard from "./components/admindashboard";
import GrampanchayatDashboard from "./components/grampanchayatDashboard";
import ResidentDashboard from "./components/residentDashboard";

// Grampanchayat inner pages
import GpRecords from "./components/GpRecords";
import GpAddUpdate from "./components/GpAddUpdate";
import GpTax from "./components/GpTax";
import GpWelfare from "./components/GpWelfare";
import GpNotices from "./components/GpNotices";
import GpReceipts from "./components/GpReceipts";
import GpFundingDashboard from "./components/GpFundingDashboard"; // <-- new dashboard
import SampleDataPage from "./components/SampleDataPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/resident-dashboard" element={<ResidentDashboard />} />
        <Route path="/grampanchayat-dashboard" element={<GrampanchayatDashboard />} />

        {/* Grampanchayat inner pages */}
        <Route path="/gp-dashboard" element={<GpRecords />} />
        <Route path="/gp-add-update" element={<GpAddUpdate />} />
        <Route path="/gp-tax" element={<GpTax />} />
        <Route path="/gp-welfare" element={<GpWelfare />} />
        <Route path="/gp-notices" element={<GpNotices />} />
        <Route path="/gp-receipts" element={<GpReceipts />} />
        <Route path="/gp-funding" element={<GpFundingDashboard />} /> {/* <-- new route */}

        {/* Shared navigation and admin detail pages use example data for now. */}
        <Route path="/home" element={<SampleDataPage />} />
        <Route path="/scheme" element={<SampleDataPage />} />
        <Route path="/schemes" element={<SampleDataPage />} />
        <Route path="/news" element={<SampleDataPage />} />
        <Route path="/faq" element={<SampleDataPage />} />
        <Route path="/about" element={<SampleDataPage />} />
        <Route path="/panchayat-overview" element={<SampleDataPage />} />
        <Route path="/health-stats" element={<SampleDataPage />} />
        <Route path="/development-indicators" element={<SampleDataPage />} />
        <Route path="/funding-received" element={<SampleDataPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";

export default function GpAddUpdate() {
  const [form, setForm] = useState({ name: "", family: "", tax: "" });
  const { t } = useLanguage();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{t.addUpdate}</h1>
      <form className="space-y-4">
        <input
          name="name"
          placeholder={t.name}
          value={form.name}
          onChange={handleChange}
          className="border px-4 py-2 w-full"
        />
        <input
          name="family"
          placeholder={t.family}
          value={form.family}
          onChange={handleChange}
          className="border px-4 py-2 w-full"
        />
        <input
          name="tax"
          placeholder={t.taxStatus}
          value={form.tax}
          onChange={handleChange}
          className="border px-4 py-2 w-full"
        />
        <button type="button" className="px-4 py-2 bg-green-600 text-white rounded">
          {t.save}
        </button>
      </form>

      <Link to="/grampanchayat-dashboard">
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded">
          ⬅ {t.back}
        </button>
      </Link>
    </div>
  );
}

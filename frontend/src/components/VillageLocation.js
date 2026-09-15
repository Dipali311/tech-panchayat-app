import React from "react";
import { MapPin, ExternalLink } from "lucide-react";

const villageLocation = {
  name: "Nirgudi Village",
  address: "Nirgudi, Taluka Haveli, Pune, Maharashtra",
  query: "Nirgudi, Haveli, Pune, Maharashtra",
};

export default function VillageLocation() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(villageLocation.query)}`;
  const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(villageLocation.query)}&output=embed`;

  return (
    <section className="overflow-hidden rounded-xl bg-white shadow-lg">
      <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="rounded-full bg-red-100 p-3 text-red-600" aria-hidden="true">
            <MapPin size={26} strokeWidth={2.5} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">Village location</p>
            <h2 className="mt-1 text-2xl font-bold text-gray-900">{villageLocation.name}</h2>
            <p className="mt-1 text-gray-600">{villageLocation.address}</p>
          </div>
        </div>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-2 bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
        >
          <ExternalLink size={17} aria-hidden="true" />
          Open in Google Maps
        </a>
      </div>
      <iframe
        title={`Map showing ${villageLocation.name}`}
        src={embedUrl}
        className="h-80 w-full border-0 sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

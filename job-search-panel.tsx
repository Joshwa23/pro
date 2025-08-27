'use client';

import { useState } from "react";

export default function JobSearchPanel() {
  const [salary, setSalary] = useState(100);
  return (
    <section className="rounded-2xl bg-white shadow-soft p-5">
      <div className="grid gap-3 md:grid-cols-[1fr_220px_140px_auto]">
        <input
          placeholder="Search by Job title, Role"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          placeholder="Preferred location"
          className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
          <option>All</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
        <button className="btn btn-primary rounded-xl">Search</button>
      </div>
      <div className="mt-5">
        <input
          type="range"
          min={0}
          max={250}
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full"
        />
        <div className="mt-2 text-sm text-gray-600">$0k - ${salary}k</div>
      </div>
    </section>
  );
}

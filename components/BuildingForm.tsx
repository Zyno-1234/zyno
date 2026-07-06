"use client";

import { useState } from "react";

export default function BuildingForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  async function saveBuilding(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/buildings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        address,
      }),
    });

    if (res.ok) {
      alert("Building Added Successfully");
      setName("");
      setAddress("");
    } else {
      alert("Error saving building");
    }
  }

  return (
    <form
      onSubmit={saveBuilding}
      className="bg-white p-6 rounded-xl shadow space-y-4 max-w-xl"
    >
      <input
        className="border p-3 rounded w-full"
        placeholder="Building Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        className="border p-3 rounded w-full"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <button
        className="bg-blue-600 text-white px-5 py-3 rounded"
      >
        Save Building
      </button>
    </form>
  );
}
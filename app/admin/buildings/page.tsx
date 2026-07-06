"use client";

import { useEffect, useState } from "react";

type Building = {
  id: number;
  name: string;
  code: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  managerName?: string;
  managerPhone?: string;
};

export default function BuildingsPage() {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    code: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    managerName: "",
    managerPhone: "",
  });

  async function loadBuildings() {
    const res = await fetch("/api/buildings");
    const data = await res.json();
    setBuildings(data);
  }

  useEffect(() => {
    loadBuildings();
  }, []);

  function updateField(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function saveBuilding() {
    if (!form.name || !form.code) {
      alert("Building Name and Code are required.");
      return;
    }

    setLoading(true);

    const url =
      editingId === null
        ? "/api/buildings"
        : `/api/buildings/${editingId}`;

    const method =
      editingId === null
        ? "POST"
        : "PUT";

    const res = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      alert("Unable to save building.");
      setLoading(false);
      return;
    }

    resetForm();

    await loadBuildings();

    setLoading(false);
  }

  function editBuilding(building: Building) {
    setEditingId(building.id);

    setForm({
      name: building.name,
      code: building.code,
      address: building.address,
      city: building.city,
      state: building.state,
      pincode: building.pincode,
      managerName: building.managerName || "",
      managerPhone: building.managerPhone || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function resetForm() {
    setEditingId(null);

    setForm({
      name: "",
      code: "",
      address: "",
      city: "",
      state: "",
      pincode: "",
      managerName: "",
      managerPhone: "",
    });
  }

  async function deleteBuilding(id: number) {
    if (!confirm("Delete this building?")) return;

    const res = await fetch(`/api/buildings/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Delete failed.");
      return;
    }

    loadBuildings();
  }

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Building Master
        </h1>

        <p className="text-gray-500">
          Manage all ZYNO PG locations.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow p-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Building Name"
            className="border rounded-lg p-3"
            value={form.name}
            onChange={updateField}
          />

          <input
            name="code"
            placeholder="Building Code (PORUR)"
            className="border rounded-lg p-3"
            value={form.code}
            onChange={updateField}
          />

          <input
            name="address"
            placeholder="Address"
            className="border rounded-lg p-3"
            value={form.address}
            onChange={updateField}
          />

          <input
            name="city"
            placeholder="City"
            className="border rounded-lg p-3"
            value={form.city}
            onChange={updateField}
          />

          <input
            name="state"
            placeholder="State"
            className="border rounded-lg p-3"
            value={form.state}
            onChange={updateField}
          />

          <input
            name="pincode"
            placeholder="Pincode"
            className="border rounded-lg p-3"
            value={form.pincode}
            onChange={updateField}
          />

          <input
            name="managerName"
            placeholder="Manager Name"
            className="border rounded-lg p-3"
            value={form.managerName}
            onChange={updateField}
          />

          <input
            name="managerPhone"
            placeholder="Manager Mobile"
            className="border rounded-lg p-3"
            value={form.managerPhone}
            onChange={updateField}
          />

        </div>

<div className="mt-6 flex gap-3">

  <button
    onClick={saveBuilding}
    disabled={loading}
    className="bg-blue-600 text-white px-6 py-3 rounded-lg"
  >
    {loading
      ? "Saving..."
      : editingId === null
      ? "Save Building"
      : "Update Building"}
  </button>

  {editingId !== null && (

    <button
      onClick={resetForm}
      className="bg-gray-500 text-white px-6 py-3 rounded-lg"
    >
      Cancel
    </button>

  )}

</div>

      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">Code</th>
              <th className="p-4 text-left">Building</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">Manager</th>
              <th className="p-4 text-center">Action</th>
            </tr>

          </thead>

          <tbody>

            {buildings.map((b) => (

              <tr
                key={b.id}
                className="border-t"
              >

                <td className="p-4 font-semibold">
                  {b.code}
                </td>

                <td className="p-4">
                  <div className="font-medium">
                    {b.name}
                  </div>

                  <div className="text-sm text-gray-500">
                    {b.address}
                  </div>
                </td>

                <td className="p-4">
                  {b.city}
                </td>

                <td className="p-4">
                  {b.managerName || "-"}
                </td>

                <td className="p-4">

  <div className="flex justify-center gap-2">

    <button
      onClick={() => editBuilding(b)}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      Edit
    </button>

    <button
      onClick={() => deleteBuilding(b.id)}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      Delete
    </button>

  </div>

</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
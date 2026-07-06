"use client";

import Link from "next/link";

const menus = [
  { name: "Dashboard", href: "/admin" },
  { name: "Buildings", href: "/admin/buildings" },
  { name: "Rooms", href: "/admin/rooms" },
  { name: "Beds", href: "/admin/beds" },
  { name: "Tenants", href: "/admin/tenants" },
  { name: "Payments", href: "/admin/payments" },
  { name: "Reports", href: "/admin/reports" },
  { name: "Settings", href: "/admin/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-8">
        ZYNO PG ERP
      </h2>

      <nav className="space-y-2">
        {menus.map((menu) => (
          <Link
            key={menu.href}
            href={menu.href}
            className="block rounded-lg px-4 py-3 hover:bg-slate-700 transition"
          >
            {menu.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
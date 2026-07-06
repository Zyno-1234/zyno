"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const menu = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Rooms", href: "#rooms" },
  { name: "Gallery", href: "#gallery" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-700">
          ZYNO PG
        </h1>

        <nav className="hidden md:flex gap-8">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-blue-600 font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-6 py-4 border-b"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
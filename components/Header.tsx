export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div>
          <h1 className="text-3xl font-bold text-blue-700">
            ZYNO PG
          </h1>
          <p className="text-xs text-gray-500">
            Premium PG in Chennai
          </p>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">

          <a href="#" className="hover:text-blue-600">
            Home
          </a>

          <a href="#rooms" className="hover:text-blue-600">
            Rooms
          </a>

          <a href="#gallery" className="hover:text-blue-600">
            Gallery
          </a>

          <a href="#pricing" className="hover:text-blue-600">
            Pricing
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>

        </nav>

        {/* CTA */}

        <button
          className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white hover:bg-blue-700 transition"
        >
          Book Now
        </button>

      </div>
    </header>
  );
}
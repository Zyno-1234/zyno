export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-500 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
            ⭐ Premium PG Accommodation in Chennai
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to
            <br />
            <span className="text-yellow-300">
              ZYNO PG
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-100 leading-8">
            Comfortable, Secure and Affordable PG Accommodation
            for Students and Working Professionals.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#rooms"
              className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300"
            >
              View Rooms
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black"
            >
              Book Now
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h2 className="text-4xl font-bold">200+</h2>
              <p className="text-gray-200">
                Happy Tenants
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">24x7</h2>
              <p className="text-gray-200">
                Security
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold">100%</h2>
              <p className="text-gray-200">
                Power Backup
              </p>
            </div>

          </div>

        </div>

        <div className="flex justify-center">
          <img
            src="/images/hero.png"
            alt="ZYNO PG"
            className="rounded-3xl shadow-2xl max-h-[650px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
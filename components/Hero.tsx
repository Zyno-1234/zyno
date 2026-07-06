export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Premium PG for
            <br />
            Working Professionals
          </h1>

          <p className="mt-8 text-xl text-blue-100">
            Safe, Affordable & Fully Furnished
            accommodation near
            DLF IT Park, Porur and Kannivakkam.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">

            <button
              className="rounded-lg bg-white px-8 py-4 font-bold text-blue-700"
            >
              Book Your Room
            </button>

            <button
              className="rounded-lg border border-white px-8 py-4"
            >
              WhatsApp Us
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
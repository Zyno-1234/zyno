export default function Map() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Find ZYNO PG
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Premium PG Accommodation Near DLF IT Park, Porur, Chennai
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=ZYNO+PG+Porur+Chennai&output=embed"
            
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
}
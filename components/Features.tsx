export default function Features() {
  const features = [
    "Fully Furnished Rooms",
    "Air Conditioned",
    "High Speed Wi-Fi",
    "Power Backup",
    "RO Drinking Water",
    "Housekeeping",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose ZYNO PG?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-blue-50 rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg">{feature}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose ZYNO PG?
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Premium PG accommodation designed for students and working
            professionals with comfort, safety and convenience.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🛏️</div>
            <h3 className="text-xl font-bold">Premium Rooms</h3>
            <p className="mt-3 text-gray-600">
              Fully furnished single, double and triple sharing rooms.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">📶</div>
            <h3 className="text-xl font-bold">High Speed Wi-Fi</h3>
            <p className="mt-3 text-gray-600">
              Unlimited internet access for work and study.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold">24×7 Security</h3>
            <p className="mt-3 text-gray-600">
              CCTV surveillance and secure access for peace of mind.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-5xl mb-4">🧹</div>
            <h3 className="text-xl font-bold">Daily Housekeeping</h3>
            <p className="mt-3 text-gray-600">
              Clean rooms and common areas maintained every day.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
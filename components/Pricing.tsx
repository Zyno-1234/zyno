export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-20 bg-blue-50"
    >
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold">
              Single Sharing
            </h3>

            <p className="text-4xl mt-6 font-bold text-blue-600">
              ₹14,999
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-4 border-blue-600">

            <h3 className="text-2xl font-bold">
              Double Sharing
            </h3>

            <p className="text-4xl mt-6 font-bold text-blue-600">
              ₹9,499
            </p>

            <p className="mt-3 text-green-600 font-semibold">
              Most Popular
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <h3 className="text-2xl font-bold">
              Triple Sharing
            </h3>

            <p className="text-4xl mt-6 font-bold text-blue-600">
              ₹7,999
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
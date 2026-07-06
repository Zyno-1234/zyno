import Image from "next/image";

export default function Rooms() {
  return (
    <section id="rooms" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Rooms
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/images/room-premium.png"
              alt="Premium Room"
              width={700}
              height={450}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Premium Room
              </h3>

              <p className="mt-3 text-gray-600">
                Spacious room with AC, wardrobe,
                comfortable mattress, study table,
                WiFi and housekeeping.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/images/room-deluxe.png"
              alt="Deluxe Room"
              width={700}
              height={450}
              className="w-full h-72 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">
                Deluxe Room
              </h3>

              <p className="mt-3 text-gray-600">
                Modern interiors with attached
                bathroom, WiFi, power backup and
                premium facilities.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
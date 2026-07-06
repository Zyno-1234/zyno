export default function Rooms() {
  const rooms = [
    {
      title: "Single Sharing",
      price: "₹12,999",
      image: "/images/room1.jpg",
    },
    {
      title: "Double Sharing",
      price: "₹9,499",
      image: "/images/room2.png",
    },
    {
      title: "Triple Sharing",
      price: "₹7,499",
      image: "/images/room3.png",
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Our Room Options
          </h2>

          <p className="text-gray-600 mt-4">
            Comfortable rooms for every budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {rooms.map((room) => (
            <div
              key={room.title}
              className="rounded-3xl overflow-hidden shadow-xl bg-white"
            >
              <img
                src={room.image}
                alt={room.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {room.title}
                </h3>

                <p className="text-blue-700 text-3xl font-bold mt-3">
                  {room.price}
                </p>

                <ul className="mt-5 space-y-2 text-gray-600">
                  <li>✔ Attached Bathroom</li>
                  <li>✔ Wi-Fi</li>
                  <li>✔ Cot & Mattress</li>
                  <li>✔ Cupboard</li>
                  <li>✔ Housekeeping</li>
                </ul>

                <a
                  href="#contact"
                  className="mt-6 block text-center bg-blue-700 text-white py-3 rounded-xl hover:bg-blue-800"
                >
                  Book Now
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
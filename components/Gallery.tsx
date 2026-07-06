import Image from "next/image";

export default function Gallery() {

  const images = [
    "pantry.png",
    "bathroom.png",
    "staircase.png",
    "terrace.png",
  ];

  return (
    <section id="gallery" className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {images.map((img) => (

            <Image
              key={img}
              src={`/images/${img}`}
              alt={img}
              width={500}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-64"
            />

          ))}

        </div>

      </div>

    </section>
  );
}
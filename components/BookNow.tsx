"use client";

import config from "@/app/config";

export default function BookNow() {

const message = encodeURIComponent(config.bookingMessage);

const url = `https://wa.me/${config.whatsapp}?text=${message}`;

return (

<a

href={url}

target="_blank"

className="fixed bottom-24 right-6 bg-blue-600 text-white px-6 py-4 rounded-full shadow-xl hover:scale-105 transition"

>

Book Now

</a>

);

}
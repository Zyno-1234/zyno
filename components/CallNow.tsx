"use client";

import config from "@/app/config";

export default function CallNow(){

return(

<a

href={`tel:${config.phone}`}

className="fixed bottom-44 right-6 bg-red-600 text-white px-6 py-4 rounded-full shadow-xl"

>

Call Now

</a>

)

}
import React, { useState } from "react";

import webImg from "../assets/services/web.png";
import mobileImg from "../assets/services/mobile.png";
import aiImg from "../assets/services/AI.png";
import cloudImg from "../assets/services/cloud.png";
import computerImg from "../assets/services/computer.png";
import iotImg from "../assets/services/iot.png";


const services = [

{
name:"Web development",
image:webImg,
title:"Web apps that hold up when the traffic arrives",
desc:"Most agency-built web apps work fine on the demo and fall over in month four. We build for the load you are heading toward, not the one you have today.",
points:[
"Full source in your repository",
"Staging and production environments",
"Automated deploys and rollback",
"Performance budget, measured not assumed"
],
tags:[
"React",
"Next.js",
"Laravel",
"WordPress",
"TypeScript"
]
},


{
name:"Mobile apps",
image:mobileImg,
title:"Mobile apps built for real users",
desc:"Fast and reliable mobile experiences designed for scale.",
points:[
"Native performance",
"Smooth user experience",
"App store ready",
"Continuous improvements"
],
tags:[
"React Native",
"Flutter",
"Swift"
]
},


{
name:"AI and automation",
image:aiImg,
title:"AI systems that automate your workflow",
desc:"Smart automation solutions powered by modern AI.",
points:[
"AI integrations",
"Custom workflows",
"Data processing",
"Smart decisions"
],
tags:[
"AI",
"Python",
"OpenAI"
]
},


{
name:"Cloud and backend",
image:cloudImg,
title:"Backend infrastructure that scales",
desc:"Secure cloud systems designed for growing products.",
points:[
"Cloud architecture",
"API development",
"Database design",
"Security"
],
tags:[
"AWS",
"Node.js",
"MongoDB"
]
},


{
name:"Computer vision",
image:computerImg,
title:"Vision systems that understand the world",
desc:"Computer vision solutions for modern products.",
points:[
"Image processing",
"Object detection",
"AI models",
"Automation"
],
tags:[
"Python",
"OpenCV"
]
},


{
name:"Embedded and IoT",
image:iotImg,
title:"Connected products built for reality",
desc:"Hardware and software working together.",
points:[
"Firmware development",
"Device connectivity",
"Testing",
"Production support"
],
tags:[
"C++",
"IoT",
"Embedded"
]
}

];



export default function ServiceSection(){


const [active,setActive] = useState(0);

const item = services[active];



return (

<section className="
max-w-300
mx-auto
px-5
py-16
">


{/* TOP BUTTONS */}

<div className="
flex
flex-wrap
justify-center
gap-3
mb-14
">


{
services.map((service,index)=>(


<button

key={index}

onClick={()=>setActive(index)}

className={`
px-5
py-2
rounded-full
text-sm
transition

${
active === index
?
"bg-[#3159DB] text-white"
:
"border border-gray-200 text-gray-700 bg-white"
}

`}

>

{service.name}

</button>


))
}


</div>





{/* MAIN SECTION */}

<div className="
grid
md:grid-cols-2
gap-16
items-center
">





{/* IMAGE SIDE */}

<div className="
text-center
">


<img

src={item.image}

alt={item.name}

className="
w-[320px]
h-80
mx-auto
object-contain
"

/>



<h2 className="
mt-8
text-[32px]
font-bold
text-[#080B2C]
">

{item.name}

</h2>



<p className="
mt-4
text-gray-600
text-sm
leading-6
">

{item.desc}

</p>



</div>








{/* CONTENT SIDE */}


<div>


<h1 className="
text-[42px]
leading-[1.1]
font-bold
text-[#080B2C]
">

{item.title}

</h1>



<p className="
mt-6
text-gray-600
leading-7
">

{item.desc}

</p>






<div className="
grid
grid-cols-2
gap-y-6
mt-8
">


{
item.points.map((point,index)=>(


<div

key={index}

className="
flex
items-center
gap-3
text-gray-700
text-sm
"

>


<span className="
w-5
h-5
rounded-full
bg-[#3159DB]
text-white
flex
items-center
justify-center
text-xs
">

✓

</span>


{point}


</div>


))
}


</div>








<div className="
flex
flex-wrap
gap-3
mt-8
">


{
item.tags.map((tag,index)=>(


<span

key={index}

className="
px-5
py-2
rounded-full
bg-gray-100
text-sm
text-gray-700
"

>

{tag}

</span>


))
}


</div>







<button

className="
mt-8
bg-[#3159DB]
text-white
px-8
py-3
rounded-full
"

>

Full {item.name} Page →

</button>



</div>




</div>



</section>

)


}
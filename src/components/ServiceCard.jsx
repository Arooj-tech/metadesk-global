import React, { useState } from "react";

import webImg from "../assets/services/web.png.png";
import mobileImg from "../assets/services/mobile.png.png";
import aiImg from "../assets/services/aipng.png";
import cloudImg from "../assets/services/cloud.png.png";
import visionImg from "../assets/services/vision.png.png";
import iotImg from "../assets/services/iot.png.png";


const data = {

"Web development":{
image:webImg,
title:"Web apps that hold up when the traffic arrives",
description:
"Most agency-built web apps work fine on the demo and fall over in month four. We build for the load you are heading toward, not the one you have today.",

features:[
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


"Mobile apps":{
image:mobileImg,
title:"Mobile apps built for real users",

description:
"Fast and reliable mobile applications designed for growth and performance.",

features:[
"Native performance",
"App store deployment",
"Secure backend",
"Analytics integration"
],

tags:[
"React Native",
"Flutter",
"iOS",
"Android"
]

},



"AI and automation":{
image:aiImg,

title:"AI systems that automate your workflow",

description:
"Smart AI solutions that reduce manual work and improve efficiency.",

features:[
"Custom AI models",
"Automation workflows",
"API integration",
"Data processing"
],

tags:[
"Python",
"OpenAI",
"Automation"
]

},



"Cloud and backend":{
image:cloudImg,

title:"Cloud systems that scale with your product",

description:
"Reliable backend infrastructure designed for modern applications.",

features:[
"Cloud deployment",
"Database architecture",
"Security",
"Monitoring"
],

tags:[
"AWS",
"Node.js",
"MongoDB"
]

},



"Computer vision":{
image:visionImg,

title:"Computer vision for real world problems",

description:
"AI powered vision systems that understand images and video.",

features:[
"Object detection",
"Image processing",
"Real time analysis",
"AI models"
],

tags:[
"Python",
"OpenCV",
"AI"
]

},



"Embedded and IoT":{
image:iotImg,

title:"Embedded systems connected to the world",

description:
"Hardware and software working together for connected products.",

features:[
"Firmware development",
"Device connectivity",
"Hardware integration",
"Testing"
],

tags:[
"C++",
"IoT",
"Embedded"
]

}

};



export default function ServiceCard(){

const [active,setActive] = useState("Web development");

const service = data[active];


return (

<section className="max-w-300 mx-auto py-20 px-5">


{/* TOP BUTTONS */}

<div className="flex flex-wrap gap-3 mb-12">

{
Object.keys(data).map((item)=>(

<button

key={item}

onClick={()=>setActive(item)}

className={`
px-5 py-2
rounded-full
text-[12px]
border
transition

${
active===item

?

"bg-[#355EEB] text-white border-[#355EEB]"

:

"bg-white text-black border-gray-200"

}

`}

>

{item}

</button>


))

}

</div>




<div className="grid md:grid-cols-2 gap-12 items-center">



{/* LEFT IMAGE CARD */}


<div

className="
bg-white
rounded-[18px]
shadow-[0_8px_30px_rgba(0,0,0,0.08)]
p-8
text-center
"

>


<img

src={service.image}

alt={active}

className="
w-full
h-62.5
object-contain
"

/>



<h3

className="
text-[18px]
font-bold
mt-5
text-[#080B2C]
"

>

{active}

</h3>


<p

className="
text-[12px]
leading-4.5
text-gray-600
mt-3
"

>

Web apps, client portals and platforms built for your business.

</p>


</div>




{/* RIGHT SIDE */}


<div>


<h2

className="
text-[42px]
leading-11
tracking-[-1px]
font-bold
text-[#080B2C]
"

>

{service.title}

</h2>



<p

className="
text-[14px]
leading-5.5
text-gray-600
mt-5
"

>

{service.description}

</p>




<div

className="
grid grid-cols-2
gap-y-5
mt-8
"

>


{
service.features.map((item)=>(


<div

key={item}

className="
flex gap-2
text-[13px]
text-gray-700
"

>

<span className="text-blue-600">
●
</span>

{item}


</div>


))

}


</div>




<div className="flex flex-wrap gap-2 mt-8">


{
service.tags.map(tag=>(


<span

key={tag}

className="
bg-gray-100
px-4
py-2
rounded-full
text-[11px]
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
bg-[#355EEB]
text-white
px-6
py-3
rounded-full
text-[12px]
"

>

Full {active} Page →

</button>



</div>


</div>


</section>


)

}
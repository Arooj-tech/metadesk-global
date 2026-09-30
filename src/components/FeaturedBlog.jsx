import React from "react";
import { useNavigate } from "react-router-dom";
import blogHero from "../assets/blog/bloghero.png";


export default function BlogHero(){

const navigate = useNavigate();


return (

<section className="
w-full
px-6
py-20
">

<div
className="
max-w-300
mx-auto
relative
overflow-hidden
rounded-[18px]
min-h-105
bg-black
"
>


{/* Background Image */}

<img
src={blogHero}
alt="blog"
className="
absolute
inset-0
w-full
h-full
object-cover
"
/>


{/* Dark Overlay */}

<div
className="
absolute
inset-0
bg-linear-to-r
from-black
via-black/80
to-transparent
"
/>



{/* Content */}

<div
className="
relative
z-10
max-w-130
px-8
py-10
text-white
"
>


{/* Tag */}

<span
className="
inline-block
border
border-white/30
rounded-full
px-5
py-2
text-[12px]
mb-6
"
>
Insights
</span>



<h1
className="
text-[42px]
leading-[1.05]
font-bold
tracking-[-1.5px]
"
>

IoT Connectivity Architecture:
<br/>

Choosing the right network for
<br/>

connected products

</h1>



<p
className="
mt-5
text-[14px]
leading-5
text-gray-300
max-w-105
"
>

The right network is rarely the newest one.
How to choose between BLE, Wi-Fi, LoRa, NB-IoT and cellular
by working backwards from power, range, cost and where the
device actually has to live.

</p>



<div
className="
mt-5
text-[14px]
text-gray-300
"
>

1 Sep 2026&nbsp; · &nbsp;11 min&nbsp; · &nbsp;read

</div>




<button

onClick={()=>navigate("/blog/iot-connectivity")}

className="
mt-6
bg-[#355EEB]
hover:bg-blue-700
transition
px-6
py-3
rounded-full
text-[12px]
font-medium
flex
items-center
gap-2
"

>

Read the article

<span>
→
</span>

</button>



</div>


</div>

</section>


)

}
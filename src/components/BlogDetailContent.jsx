// src/components/BlogDetailContent.jsx

import React, { useState, useEffect } from "react";


export default function BlogDetailContent() {


const [activeSection,setActiveSection] = useState("device");



useEffect(()=>{


const sections = document.querySelectorAll(
"#device, #cost, #power"
);


const observer = new IntersectionObserver(

(entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

setActiveSection(entry.target.id);

}

});

},

{
threshold:0.4
}

);



sections.forEach(section=>{
observer.observe(section);
});


return()=>{

sections.forEach(section=>{
observer.unobserve(section);
});

};


},[]);





const menuClass=(id)=>`

block
pl-4
mb-5
text-[13px]
leading-5
transition

${
activeSection===id

?

"text-blue-600 border-l-2 border-blue-600 -ml-[2px] font-semibold"

:

"text-gray-600"

}

`;



return(


<section
className="
max-w-273
mx-auto
flex
gap-15
py-20
"
>



{/* LEFT MENU */}

<aside
className="
w-45
shrink-0
"
>


<p
className="
text-[10px]
tracking-widest
font-bold
text-gray-400
mb-5
"
>
ON THIS PAGE
</p>



<div
className="
border-l
border-gray-200
"
>


<a
href="#device"
className={menuClass("device")}
>
Start with where the device lives
</a>



<a
href="#cost"
className={menuClass("cost")}
>
What each option actually costs you
</a>



<a
href="#power"
className={menuClass("power")}
>
Working the power budget backwards
</a>



<a
href="#mistakes"
className={menuClass("mistakes")}
>
Three mistakes we see repeatedly
</a>



<a
href="#lands"
className={menuClass("lands")}
>
Where this usually lands
</a>


</div>


</aside>






{/* CONTENT */}


<article
className="
max-w-180
flex-1
"
>




<p
className="
text-[16px]
leading-6
text-[#27334A]
mb-10
"
>

Most connectivity decisions get made in the first week of a project,
by whoever is most familiar with one radio, and then everything
downstream inherits that choice for the life of the product.
It is one of the few early decisions that is genuinely expensive
to reverse, because it touches the enclosure, the power budget,
the certification path and the cost of every unit you will ever ship.

</p>



<p
className="
text-[16px]
text-gray-700
mb-12
"
>
This is how we make that call, and the order we make it in.
</p>





{/* DEVICE SECTION */}

<section id="device">


<h2
className="
text-[34px]
leading-10
font-bold
tracking-[-1px]
text-[#08122E]
mb-5
"
>
Start with where the device lives
</h2>



<p
className="
text-[15px]
leading-6
text-gray-600
mb-6
"
>

Before comparing any radios, answer four questions.
Every one of them eliminates options, and together they usually
leave you with two candidates rather than six.

</p>




<ul
className="
space-y-3
text-[15px]
leading-6
text-gray-700
mb-8
"
>


<li>
<b className="text-[#08122E]">
Where is it?
</b>
{" "}
Indoors near existing infrastructure, or in a field with nothing nearby?
</li>


<li>
<b className="text-[#08122E]">
How is it powered?
</b>
{" "}
Mains, rechargeable, or a coin cell nobody will ever replace?
</li>


<li>
<b className="text-[#08122E]">
How much data, how often?
</b>
{" "}
A few bytes a day, or a continuous stream?
</li>


<li>
<b className="text-[#08122E]">
Who owns the infrastructure?
</b>
{" "}
Your customer's Wi-Fi, your own gateways, or a carrier's network?
</li>


</ul>



<p
className="
text-[15px]
leading-6
text-gray-600
mb-8
"
>

That last one catches people out. Designing around a customer's Wi-Fi
means designing around their IT department, their captive portal,
and a password that changes without warning.

</p>




<div
className="
bg-[#EAF2FF]
rounded-xl
px-6
py-5
text-[15px]
leading-6
text-gray-700
mb-12
"
>

<b className="text-blue-600">
A useful test.
</b>

{" "}
If the answer to "how is it powered" is a primary cell with no recharge path,
you have already eliminated Wi-Fi and most cellular options.

</div>



</section>









{/* COST SECTION */}


<section id="cost">


<h2
className="
text-[34px]
leading-10
font-bold
text-[#08122E]
mb-5
"
>
What each option actually costs you
</h2>



<p
className="
text-[15px]
leading-6
text-gray-600
mb-8
"
>
The specifications are easy to find. What matters is the tradeoff each one
forces on the rest of the product.
</p>



<table
className="
w-full
text-left
text-[14px]
"
>


<thead>

<tr className="border-b">

<th className="py-3">OPTION</th>
<th>RANGE</th>
<th>POWER</th>
<th>THE CATCH</th>

</tr>

</thead>




<tbody>


{
[
["BLE","10–100 m","very low","Needs a gateway or phone in range."],
["Wi-Fi","30–100 m","high","Someone else's network, password."],
["LoRaWAN","2–15 km","very low","Tiny payloads and strict duty cycles."],
["NB-IoT","carrier","low","Coverage varies by country."],
["Cellular","carrier","high","Monthly cost forever."]
]
.map((row,index)=>(


<tr
key={index}
className="border-b"
>

{
row.map((item,i)=>(

<td
key={i}
className="py-4 text-gray-700"
>
{item}
</td>

))
}


</tr>


))

}


</tbody>


</table>



<div
className="
border-l-4
border-blue-600
pl-5
my-8
text-[18px]
leading-7
font-bold
text-[#08122E]
"
>

The recurring cost of a cellular SIM across ten thousand units over five
years will dwarf whatever you saved on the radio module.

</div>



</section>









{/* POWER SECTION */}


<section id="power">


<h2
className="
text-[34px]
leading-10
font-bold
text-[#08122E]
mb-5
"
>

Working the power budget backwards

</h2>



<p
className="
text-[15px]
leading-6
text-gray-600
"
>

Once the shortlist is down to two, the power budget usually decides it.
Start from the battery and work backwards rather than forwards from the
feature list.

</p>



</section>




</article>



</section>


)

}
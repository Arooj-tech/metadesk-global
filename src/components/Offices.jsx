import React, { useState } from "react";


const offices = [
  {
    city: "Ajax, Ontario",
    sub: "Canada - Eastern Time",
    desc: (
      <>
        Contracts, client communication and delivery management.
        <br />
        Overlapping hours with clients from Toronto to San Francisco.
      </>
    )
  },
  {
    city: "Lahore, Pakistan",
    sub: "Pakistan Standard Time",
    desc: (
      <>
        The engineering team, the bench and the hardware.
        Work continues on your programme while North America sleeps.
      </>
    )
  }
];


export default function Offices(){


const [active,setActive] = useState(0);


return (

<section className="w-full bg-white py-20">


<div
className="
max-w-300
mx-auto
px-14.75
"
>


{/* Heading */}

<div className="max-w-130">


<div
className="
inline-flex
border
border-gray-200
rounded-full
px-5
py-1
text-[10px]
font-semibold
text-[#11152F]
mb-5
"
>
How we are set up
</div>



<h2
className="
text-[#080B2C]
font-bold
text-[32px]
leading-[1.1]
tracking-[-1px]
"
>
Two offices, and we would
<br/>
rather you heard it from us.
</h2>



<p
className="
mt-4
text-[12px]
leading-4
text-[#555]
"
>
Client-facing work runs from <b>Ajax, Ontario</b> on North American hours.
<br/>
The engineering team is in <b>Lahore, Pakistan</b>. We state that plainly
because you would find out anyway, and because it is a structural advantage
rather than something to bury on a contact page.
</p>


</div>




{/* Cards */}

<div
className="
grid
md:grid-cols-2
gap-5
mt-11.25
"
>


{
offices.map((office,index)=>(


<div
key={index}

onMouseEnter={()=>setActive(index)}

className={`
rounded-[14px]
p-5
min-h-18.75
cursor-pointer
transition-all
duration-300

${
active===index
?
"bg-[#355EEB] text-white"
:
"bg-white text-[#11152F] shadow-sm"
}

`}

>


<h3
className="
text-[14px]
font-semibold
"
>
{office.city}
</h3>



<p
className={`
text-[10px]
mt-1
font-normal

${
active===index
?
"text-white"
:
"text-gray-500"
}

`}
>
{office.sub}
</p>




<p
className={`
text-[10px]
leading-3.5
mt-2
font-normal

${
active===index
?
"text-white"
:
"text-gray-600"
}

`}
>
{office.desc}
</p>



</div>


))
}


</div>


</div>


</section>

)

}
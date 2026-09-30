import React, { useState } from "react";


export default function BlogCategories(){

const [active,setActive] = useState("Latest");


const categories = [
"Latest",
"AI",
"Web",
"Mobile",
"AI & automation",
"Embedded & IoT"
];


return (

<section className="
w-full
py-0
">

<div className="
max-w-273
mx-auto
px-5
flex
items-center
justify-between
border
border-gray-200
rounded-sm
h-11.5
">


{/* Title */}

<h3 className="
text-[14px]
font-bold
text-[#080B2C]
">
{active === "Latest" ? "Latest" : active}
</h3>



{/* Buttons */}

<div className="
flex
items-center
gap-2
overflow-x-auto
">

{
categories.map((item)=>(

<button

key={item}

onClick={()=>setActive(item)}

className={`
    font-bold
h-7.5
px-5
rounded-full
text-[11px]
border
transition-all
whitespace-nowrap

${
active===item

?

"bg-[#355EEB] text-white border-[#355EEB]"

:

"bg-white text-black border-gray-200 hover:bg-gray-100"

}

`}

>

{item}

</button>


))

}


</div>



</div>


</section>

)

}
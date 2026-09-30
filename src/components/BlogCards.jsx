import React from "react";

import blog1 from "../assets/blog/blog 1.png";


const blogs = [
{
image: blog1,
category:"Embedded & IoT",
date:"01_26",
title:"AIoT Intelligence Levels: From IoT Monitoring to Autonomous Systems",
desc:"More data does not mean more value. Six levels from passive monitoring through to adaptive control, and where most products actually stop."
},

{
image: blog1,
category:"Embedded & IoT",
date:"01_26",
title:"AIoT Intelligence Levels: From IoT Monitoring to Autonomous Systems",
desc:"More data does not mean more value. Six levels from passive monitoring through to adaptive control, and where most products actually stop."
}

];



export default function BlogCards(){

return(

<section className="
w-full
py-12
">


<div className="
max-w-265
mx-auto
px-5
grid
md:grid-cols-2
gap-15
">


{
blogs.map((blog,index)=>(

<article
  key={index}
  className="
    group
    cursor-pointer
    w-full
  "
>

{/* Image */}
<div
  className="
    w-full
    h-65
    rounded-2xl
    overflow-hidden
  "
>
  <img
    src={blog.image}
    alt="blog"
    className="
      w-full
      h-full
      object-cover
      rounded-2xl
      transition
      duration-300
      group-hover:scale-105
    "
  />
</div>

{/* Meta */}

<div className="
flex
justify-between
mt-3
text-[11px]
text-gray-600
">

<span>
{blog.category}
</span>


<span>
{blog.date}
</span>

</div>



{/* Title */}

<h2
className="
mt-3
text-[18px]
leading-[1.1]
font-bold
tracking-[-0.3px]
text-[#080B2C]
"
>

{blog.title}

</h2>



{/* Description */}

<p
className="
mt-3
text-[12px]
leading-5
text-gray-600
max-w-105
"
>

{blog.desc}

</p>


</article>


))

}


</div>


</section>

)

}
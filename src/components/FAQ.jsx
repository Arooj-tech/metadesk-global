import React, { useState } from "react";

const faqData = [
  {
    id: "01",
    question: "Working software every week",
    answer: ""
  },
  {
    id: "02",
    question: "Your repository from the first commit",
    answer:
      "Code lands in your repo, infrastructure runs in your cloud account, and the deployment pipeline is documented. You are never in a position where moving the work in-house means starting over."
  },
  {
    id: "03",
    question: "Measured, not estimated",
    answer: ""
  },
  {
    id: "04",
    question: "Say no early",
    answer: ""
  },
  {
    id: "05",
    question: "Engineers talk to clients",
    answer: ""
  }
];


export default function FAQ() {

const [active,setActive]=useState(1);


return (

<section
className="
w-full
bg-white
py-25
"
>

<div
className="
max-w-270.75
mx-auto
grid
md:grid-cols-2
gap-15
px-6
"
>


{/* LEFT */}

<div>


<div
className="
inline-flex
px-4
py-1
rounded-full
border
border-gray-200
text-[10px]
text-[#11152F]
mb-6
"
>
How we work
</div>



<h2
className="
text-[#080B2C]
font-bold
text-[42px]
leading-[1.05]
tracking-[-1.5px]
"
>

Five things we hold
<br/>
to, including when it
<br/>
costs us the job.

</h2>


</div>




{/* RIGHT */}

<div
className="
flex
flex-col
gap-3
"
>


{
faqData.map((item,index)=>(


<div
key={item.id}
className="
rounded-[14px]
overflow-hidden
bg-[#F3F6FC]
"
>


<button

onClick={()=>setActive(
active===index ? null:index
)}

className="
w-full
flex
items-center
justify-between
px-5
py-5
"
>


<div
className="
flex
items-center
gap-7
"
>


<span
className="
text-[#3563FF]
text-[11px]
font-medium
"
>
{item.id}
</span>



<span
className="
text-[14px]
font-medium
text-[#11152F]
"
>
{item.question}
</span>


</div>



<span
className="
w-5
h-5
rounded-full
bg-black
text-white
flex
items-center
justify-center
text-[12px]
"
>

{
active===index
?
"−"
:
"+"
}

</span>



</button>




{
active===index && item.answer &&

<div
className="
bg-[#F3F6FC]
px-13.75
pb-6
text-[12px]
leading-5
text-gray-600
"
>

{item.answer}

</div>

}



</div>


))

}



</div>


</div>


</section>

)

}
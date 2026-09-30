import React from "react";

function ContactCards(){

return(

<section
className="
max-w-299.5
mx-auto
px-5
py-8
"
>


<div
className="
grid
md:grid-cols-2
gap-4
"
>


{/* Inquiry Card */}

<div
className="
bg-[#F5F5F5]
rounded-[18px]
px-8
py-6
relative
"
>


<div
className="
flex
justify-between
items-center
"
>

<div
className="
flex
items-center
gap-2
"
>

<span
className="
w-0.5
h-4
bg-[#3558D4]
"
>
</span>


<p
className="
text-[11px]
font-medium
text-[#080B2C]
"
>
Inquiries
</p>


</div>


<div
className="
w-5
h-5
rounded-full
bg-black
text-white
flex
items-center
justify-center
text-[10px]
"
>
✉
</div>


</div>





<h3
className="
mt-5
text-[16px]
font-semibold
text-[#080B2C]
"
>
contact@metadeskglobal.com
</h3>




<p
className="
mt-2
text-[11px]
text-gray-500
"
>
Tell us what you're building. We'll respond with a clear next step.
</p>



</div>






{/* Support Card */}


<div
className="
bg-[#F5F5F5]
rounded-[18px]
px-8
py-6
relative
"
>



<div
className="
flex
justify-between
items-center
"
>


<div
className="
flex
items-center
gap-2
"
>


<span
className="
w-0.5
h-4
bg-[#3558D4]
"
>
</span>


<p
className="
text-[11px]
font-medium
text-[#080B2C]
"
>
For Support
</p>


</div>




<div
className="
w-5
h-5
rounded-full
bg-black
text-white
flex
items-center
justify-center
text-[10px]
"
>
☎
</div>



</div>





<h3
className="
mt-5
text-[16px]
font-semibold
text-[#080B2C]
"
>
support@metadeskglobal.com
</h3>




<p
className="
mt-2
text-[11px]
text-gray-500
"
>
Need help with an active project? Send the details and we'll get you unstuck.
</p>



</div>



</div>


</section>


)

}


export default ContactCards;
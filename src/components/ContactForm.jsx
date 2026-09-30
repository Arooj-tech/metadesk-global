import React, { useState } from "react";

import mapImg from "../assets/map.png";

import img1 from "../assets/testimonials/image 1.png";
import img2 from "../assets/testimonials/image 2.png";
import img3 from "../assets/testimonials/image 3.png";


function ContactForm() {


const [formData, setFormData] = useState({
  name:"",
  email:"",
  company:"",
  phone:"",
  message:""
});



const handleChange = (e)=>{

setFormData({
 ...formData,
 [e.target.name]: e.target.value
});

};



const handleSubmit = (e)=>{

e.preventDefault();


const oldContacts =
JSON.parse(localStorage.getItem("contacts")) || [];


oldContacts.push({
 ...formData,
 createdAt:new Date().toLocaleString()
});


localStorage.setItem(
"contacts",
JSON.stringify(oldContacts)
);



alert("Enquiry submitted successfully!");


setFormData({
name:"",
email:"",
company:"",
phone:"",
message:""
});


};





return (

<section
className="
max-w-272.75
mx-auto
px-5
py-16
"
>


<div
className="
grid
md:grid-cols-2
gap-12
items-center
"
>



{/* LEFT SIDE */}


<div>


<img

src={mapImg}

alt="map"

className="
w-full
h-62.5
rounded-[18px]
object-cover
"

/>



<p

className="
text-[12px]
text-[#555]
mt-4
"

>
Our location and feel free to contact us
</p>



<div
className="
flex
items-center
gap-3
mt-3
"
>



<div className="flex">


<img

src={img1}

className="
w-8
h-8
rounded-full
border-2
border-white
object-cover
"

/>


<img

src={img2}

className="
w-8
h-8
rounded-full
border-2
border-white
object-cover
-ml-3
"

/>


<img

src={img3}

className="
w-8
h-8
rounded-full
border-2
border-white
object-cover
-ml-3
"

/>


</div>




<div>

<p
className="
text-[12px]
font-semibold
"
>
Excellent 4.8 out of 5
</p>


<p
className="
text-[10px]
text-gray-500
"
>
Trusted 100+ businesses
</p>


</div>


</div>


</div>








{/* RIGHT FORM */}



<div

className="
bg-[#F2F2F2]
rounded-[18px]
p-5
"

>



<h2

className="
text-[18px]
font-semibold
text-[#080B2C]
mb-5
"

>

Request a free consultation now!

</h2>





<form

onSubmit={handleSubmit}

className="
space-y-3
"

>



<div
className="
grid
grid-cols-2
gap-3
"
>



<div>

<label
className="
text-[10px]
block
mb-1
"
>
Your Name
</label>


<input

required

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your Name"

className="
w-full
h-9
rounded-md
px-3
text-[11px]
outline-none
bg-white
placeholder-gray-400
"

/>


</div>





<div>


<label
className="
text-[10px]
block
mb-1
"
>
Work Email
</label>


<input

required

type="email"

name="email"

value={formData.email}

onChange={handleChange}

placeholder="example@gmail.com"

className="
w-full
h-9
rounded-md
px-3
text-[11px]
outline-none
bg-white
placeholder-gray-400
"

/>


</div>


</div>






<label
className="
text-[10px]
block
"
>
Your Company
</label>


<input

name="company"

value={formData.company}

onChange={handleChange}

placeholder="Your company name"

className="
w-full
h-9
rounded-md
px-3
text-[11px]
outline-none
bg-white
placeholder-gray-400
"

/>






<label
className="
text-[10px]
block
"
>
Phone number
</label>


<input

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="+1 952 12321421"

className="
w-full
h-9
rounded-md
px-3
text-[11px]
outline-none
bg-white
placeholder-gray-400
"

/>







<label
className="
text-[10px]
block
"
>
Message
</label>



<textarea

name="message"

value={formData.message}

onChange={handleChange}

placeholder="Write your message"

className="
w-full
h-30
rounded-md
px-3
py-3
text-[11px]
outline-none
resize-none
bg-white
placeholder-gray-400
"

/>






<button

type="submit"

className="
w-full
h-10
rounded-full
bg-[#3558D4]
text-white
text-[11px]
font-medium
hover:opacity-90
"

>

Send enquiry →

</button>




</form>



</div>




</div>


</section>


);

}


export default ContactForm;
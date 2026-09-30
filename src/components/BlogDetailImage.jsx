import React from "react";
import blogHero from "../assets/blog/blogHero.png";


export default function BlogDetailImage(){

return(

<section
className="
w-full
max-w-273
h-102.5
mx-auto
overflow-hidden
rounded-2xl
"
>

<img
src={blogHero}
alt="IoT Connectivity Architecture"
className="
w-full
h-full
object-cover
"
/>

</section>

)

}
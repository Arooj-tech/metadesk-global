import BlogDetailHero from "../components/BlogDetailHero";
import BlogDetailImage from "../components/BlogDetailImage";
import BlogDetailContent from "../components/BlogDetailContent";
import keepReading from "../assets/blog/keep-reading.png";
import AboutFooter from "../components/AboutFooter";


export default function BlogDetail(){

return(
<>
   <BlogDetailHero />

   <BlogDetailImage />
  <BlogDetailContent />

  {/* Keep Reading Section */}
  <section className="
    max-w-273
    mx-auto
    mt-20
    px-5
  ">

  


    <img
      src={keepReading}
      alt="Keep reading"
      className="
        w-full
        rounded-2xl
        object-cover
      "
    />
    
  </section>
  <AboutFooter/>
</>
)

}
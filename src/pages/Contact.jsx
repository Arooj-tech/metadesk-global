import React from "react";
import ContactForm from "../components/ContactForm";
import ContactCards from "../components/ContactCards";
import AboutFooter from "../components/AboutFooter";

function Contact() {
  return (
    <div className="bg-white min-h-screen">

      {/* Heading */}
      <section className="flex flex-col items-center justify-center pt-20 pb-16">

        <span className="
          border 
          border-gray-200 
          rounded-full 
          px-5 
          py-2 
          text-[12px]
          text-[#080B2C]
        ">
          Case Studies
        </span>


        <h1
          className="
          mt-4
          text-[#080B2C]
          text-[48px]
          font-bold
          tracking-[-1.5px]
          "
        >
          Reach out to us.
        </h1>

      </section>


      {/* Contact Form */}
      <ContactForm />
{/* contactform */}
<ContactCards />
{/* AboutFooter */}
<AboutFooter/>
    </div>
  );
}

export default Contact;
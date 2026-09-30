import React from "react";
import serviceHero from "../assets/services/serviceHero.png";
import ServiceSection from "../components/ServiceSection.";
import ProcessSection from "../components/ProcessSection";
import FAQs from "../components/FAQs";
import CTABanner from "../components/CTABanner";
import AboutFooter from "../components/AboutFooter";

function Services() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center pt-20 pb-15">

        <span className="border border-gray-200 rounded-full px-5 py-2 text-[12px] font-medium text-[#11152F]">
          Our Services
        </span>

        <h1 className="mt-6 text-[#080B2C] font-bold text-[64px] leading-[0.95] tracking-[-2px] max-w-175">
          From the browser
          <br />
          all the way down
          <br />
          to the board.
        </h1>

        <div className="flex items-center gap-5 mt-8">

          <button
            onClick={() => window.location.href="/contact"}
            className="bg-[#5278FF] text-white px-6 py-3 rounded-md text-[14px] font-medium hover:opacity-90"
          >
            Start a project
          </button>

<button
  onClick={() => (window.location.href = "/case-study")}
  className="text-black text-[14px] font-medium cursor-pointer"
>
  See our work →
</button>

        </div>

      </section>


 {/* Hero Image Section */}
  <section className="
    max-w-300.5
    mx-auto
    mt-10
    px-5
  ">

    <img
      src={serviceHero}
      alt="Our mission"
      className="
        w-full
        h-99.75
        object-cover
        rounded-2xl
      "
    />
    </section>
    < ServiceSection/>
    <ProcessSection/>
    <FAQs/>
    <CTABanner/>
    <AboutFooter/>
    </div>
  );
}

export default Services;
import React from "react";
import FAQ from "../components/FAQ";
import TrackRecord from "../components/TrackRecord";
import Offices from "../components/Offices";
import CTABanner from "../components/CTABanner";
import AboutFooter from "../components/AboutFooter";
function About() {
  return (
    <div className="bg-white min-h-screen">


      {/* About Hero Section */}

      <section
        className="
        flex
        flex-col
        items-center
        text-center
        pt-20
        pb-5
        px-5
        "
      >


        {/* Small Tag */}

        <span
          className="
          border
          border-gray-200
          rounded-full
          px-5
          py-1.5
          text-[11px]
          font-medium
          text-[#080B2C]
          "
        >
          About MetaDesk Global
        </span>



        {/* Heading */}

        <h1
          className="
          mt-6
          max-w-162.5
          text-[#080B2C]
          font-bold
          text-[54px]
          leading-[1.05]
          tracking-[-2px]
          "
        >
          One team, from the
          <br />
          browser down to the
          <br />
          board.
        </h1>



        {/* Description */}

        <p
          className="
          mt-6
          max-w-130
          text-gray-600
          text-[13px]
          leading-4.5
          "
        >
          We build web platforms, mobile apps and AI systems, and write the
          firmware they talk to. Our clients are product teams and founders in
          Canada, the United States and Australia, and most of them arrive
          after a build has stalled or another vendor has run out of range.
        </p>


      </section>
{/* Why we exist section */}

<section
className="
max-w-300
mx-auto
mt-20
bg-[#f5f5f5]
px-14.75
py-20
grid
md:grid-cols-2
gap-15
"
>


{/* Left Side */}

<div>

<p
className="
text-[11px]
text-[#080B2C]
mb-5
flex
items-center
gap-2
"
>

<span className="w-0.5 h-3 bg-[#355EEB]"></span>

Why we exist

</p>



<h2
className="
text-[#080B2C]
font-bold
text-[42px]
leading-[1.1]
tracking-[-1.5px]
max-w-107.5
"
>

Software projects die at the
<br/>
boundaries.

</h2>


</div>





{/* Right Side */}

<div
className="
text-[#444]
text-[14px]
leading-[1.35]
max-w-107.5
"
>


<p>
A design studio hands off to a frontend shop.
The frontend shop waits on a backend contractor.
The backend contractor has never seen the app.
Every boundary costs a week, and when something
breaks across two of them, both sides are certain it
is the other's problem.
</p>



<p className="mt-6">

The same thing happens one level down, and worse.
Most agencies compete on web, mobile and AI, and
most of them stop at the API. The moment a product
needs to talk to a device, read a sensor, or run a
model without a round trip, the work moves
somewhere their team cannot follow.

</p>



<p className="mt-6">

We built MetaDesk Global to remove both gaps.
One team across the interface, the API, the model
and the firmware, so there is one number to call and
nobody to point at.

</p>


</div>


</section>

{/* faqs */}

<FAQ />
{/* track recorder */}

<TrackRecord />
{/* offices */}

<Offices/>
<CTABanner/>

<AboutFooter/>
    </div>
  );
}

export default About;
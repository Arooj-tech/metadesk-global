import React from "react";
import stackImage from "../assets/services/stack.png";

const AboutStack = () => {
  return (
    <section className="bg-white pt-8 pb-16">

      <div className="
        max-w-7xl 
        mx-auto 
        px-8 
        grid 
        md:grid-cols-2 
        gap-12 
        items-center
      ">

        {/* Left Image */}
        <div className="flex h-full">
          <img
            src={stackImage}
            alt="Stack"
            className="
              w-full
              min-h-125
              object-cover
              rounded-[40px]
            "
          />
        </div>


        {/* Right Content */}
        <div className="flex flex-col justify-center">

          <span className="
            border 
            border-gray-300 
            px-5 
            py-2 
            rounded-full 
            text-sm 
            w-fit
          ">
            Brief about us
          </span>


          <h2 className="
            mt-6
            text-5xl
            font-bold
            leading-tight
            max-w-xl
          ">
            We go further down the
            stack than most agencies
            can.
          </h2>


          <p className="
            mt-6
            text-gray-600
            text-lg
            leading-relaxed
          ">
            Web, mobile, and AI is where every agency competes.
            It is also where most of them stop. The moment your
            product needs to talk to a device, read a sensor, or
            run a model without a round trip to the cloud, the
            work moves somewhere their team cannot follow.
          </p>


          <p className="
            mt-5
            text-gray-600
            text-lg
            leading-relaxed
          ">
            MetaDesk Global runs one team across the whole range.
            The interface, the API, the model, and the firmware
            underneath. Fewer handoffs, fewer gaps between vendors,
            and one contract for all of it.
          </p>


          <button className="
            mt-8
            bg-blue-600
            hover:bg-blue-700
            transition
            text-white
            px-8
            py-3
            rounded-full
            w-fit
          ">
            Learn More →
          </button>


        </div>

      </div>

    </section>
  );
};

export default AboutStack;
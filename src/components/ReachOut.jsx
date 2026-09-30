import React from "react";

function ReachOut() {
  return (

    <section
      className="
      w-full
      flex
      justify-center
      "
    >

      <div
        className="
        w-125
        flex
        flex-col
        items-center
        gap-2
        "
      >


        {/* Small Label */}

        <span
          className="
          border
          border-gray-200
          rounded-full
          px-4
          py-1
          text-[10px]
          font-medium
          text-[#080B2C]
          "
        >
          Case Studies
        </span>




        {/* Heading */}

        <h2
          className="
          text-[#080B2C]
          text-[32px]
          leading-9.5
          tracking-[-1px]
          font-bold
          text-center
          "
        >
          Reach out to us.
        </h2>


      </div>


    </section>

  );
}


export default ReachOut;
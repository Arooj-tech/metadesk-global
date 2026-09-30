

import React from "react";

export default function BlogHero() {
  return (
    <section
      className="
      w-full
      max-w-300
      h-41.75
      mx-auto
      flex
      flex-col
      items-center
      justify-center
      gap-2
      "
    >

      {/* Small Tag */}
      <div
        className="
        border
        border-gray-200
        rounded-full
        px-4.5
        py-0.75
        text-[10px]
        leading-none
        text-[#080B2C]
        "
      >
        Insights
      </div>


      {/* Heading */}
      <h1
        className="
        text-[#080B2C]
        text-[42px]
        leading-none
        font-bold
        tracking-[-1.5px]
        text-center
        max-w-130
        "
      >
        Notes from people who
        <br />
        ship this stuff.
      </h1>


    </section>
  );
}
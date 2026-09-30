import React from "react";

export default function BlogDetailHero() {
  return (
    <section
      className="
      w-full
      max-w-273
      h-89
      mx-auto
      flex
      flex-col
      justify-center
      gap-10.5
      pb-25
      "
    >

      {/* Tag */}
      <div
        className="
        w-fit
        border
        border-gray-200
        rounded-full
        px-11.25
        py-1
        text-[10px]
        text-[#080B2C]
        leading-none
        "
      >
        Insights
      </div>


      {/* Heading */}
      <div>

        <h1
          className="
          text-[#080B2C]
          text-[48px]
          leading-none
          tracking-[-1.5px]
          font-bold
          max-w-175
          "
        >
          IoT Connectivity Architecture:
          <br />
          Choosing the Right Network for
          <br />
          Connected Products
        </h1>


        <p
          className="
          mt-6.25
          text-[13px]
          leading-4.5
          text-gray-600
          max-w-150
          "
        >
          The right network is rarely the newest one. How to choose between
          BLE, Wi-Fi, LoRa, NB-IoT and cellular by working backwards from
          power, range, cost and where the device actually has to live.
        </p>

      </div>


    </section>
  );
}
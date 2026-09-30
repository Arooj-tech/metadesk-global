// src/components/CTABanner.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import ctaBg from "../assets/blog/cta-banner.png";


export default function CTABanner() {

  const navigate = useNavigate();

  return (
    <section className="
      w-full
      max-w-270.75
      h-105
      mx-auto
      rounded-4xl
      overflow-hidden
      relative
      bg-cover
      bg-center
      mt-20
    "
    style={{
      backgroundImage:`url(${ctaBg})`
    }}
    >

      {/* Content */}
      <div className="
        relative
        z-10
        h-full
        flex
        flex-col
        justify-center
        px-15
        max-w-130
      ">

        <h2 className="
          text-white
          text-[48px]
          leading-none
          font-bold
          tracking-[-1.5px]
        ">
          Stuck Between
          <br/>
          Prototype and
          <br/>
          Production?
        </h2>


        <p className="
          text-white/80
          text-[14px]
          leading-5
          mt-5
          max-w-90
        ">
          Send us what you have. We’ll audit the hardware and
          firmware and tell you honestly what’s salvageable,
          what needs rewriting, and what it costs.
        </p>


        <button
          onClick={() => navigate("/contact")}
          className="
            mt-6
            bg-black
            text-white
            w-36.25
            h-10.5
            rounded-full
            text-[13px]
            font-medium
            flex
            items-center
            justify-center
            gap-2
            hover:scale-105
            transition
          "
        >
          Start a project
          <span>→</span>
        </button>


      </div>


    </section>
  )
}
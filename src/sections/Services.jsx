import React from "react";

import servicesImage from "../assets/services/Frame 20.png";

import web from "../assets/services/web.png.png";
import mobile from "../assets/services/mobile.png.png";
import ai from "../assets/services/ai.png.png";
import cloud from "../assets/services/cloud.png.png";
import vision from "../assets/services/vision.png.png";
import iot from "../assets/services/iot.png.png";

const Services = () => {
  const cards = [web, mobile, ai, cloud, vision, iot];

  return (
<section className="bg-white pt-4 pb-20">
          <div className="max-w-300 mx-auto px-6">
        {/* Section Heading */}
<div className="text-center mb-14">
              <div className="inline-block border border-gray-200 rounded-full px-5 py-2 text-sm text-gray-600 mb-6">
            Our Services
          </div>

          <h2 className="text-[48px] leading-[1.05] font-bold tracking-tight text-black max-w-175 mx-auto">
            From the browser all
            <br />
            the way down to the
            <br />
            board.
          </h2>

        </div>

        <div className="grid grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
            >
              <img
                src={card}
                alt="service"
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
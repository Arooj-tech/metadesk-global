import React from "react";
import ctaBanner from "../assets/CTA Banner.png";

const CTA = () => {
  return (
    <section className="bg-white py-13">

      <div className="max-w-7xl mx-auto px-8">

        <div
          className="
          rounded-[28px]
          overflow-hidden
          w-full
          "
        >

          <img
            src={ctaBanner}
            alt="CTA Banner"
            className="
            w-full
            block
            "
          />

        </div>

      </div>

    </section>
  );
};

export default CTA;
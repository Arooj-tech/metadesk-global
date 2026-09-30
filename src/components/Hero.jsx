import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate("/contact");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
      relative
      overflow-hidden
      h-130
      bg-linear-to-br
      from-[#0636C9]
      via-[#0757FF]
      to-[#3B8CFF]
      "
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        -right-37.5
        -top-25
        w-175
        h-150
        bg-white/10
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        max-w-300
        mx-auto
        px-8
        pt-16
        relative
        z-10
        "
      >
        {/* Content */}
        <div className="max-w-140">
          <h1
            className="
            text-white
            font-bold
            text-[64px]
            leading-[0.92]
            tracking-[-3px]
            "
          >
            We build the
            <br />

            software
            <br />

            behind your
            <br />

            product.
          </h1>

          <p
            className="
            text-white
            text-[18px]
            leading-[1.4]
            mt-7
            max-w-130
            "
          >
            Web, mobile, AI and embedded. Most agencies stop at the API.
            We keep going until it runs on the device.
          </p>

          <div
            className="
            flex
            gap-4
            mt-8
            "
          >
            {/* START PROJECT BUTTON */}
            <button
              onClick={handleStartProject}
              className="
              bg-white
              text-black
              px-6
              py-3
              rounded-lg
              text-sm
              font-medium
              hover:scale-105
              transition
              cursor-pointer
              "
            >
              Start a project
            </button>

            <button
              className="
              border
              border-white
              text-white
              px-6
              py-3
              rounded-lg
              text-sm
              hover:bg-white
              hover:text-black
              transition
              cursor-pointer
              "
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
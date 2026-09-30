import React from "react";
import { useNavigate } from "react-router-dom";

import trackerImage from "../assets/casestudy/2.png";

export default function TrackerCaseStudy() {
  const navigate = useNavigate();

  // BLOG DETAIL PAGE OPEN
  const handleViewDetails = () => {
    navigate("/blog-detail");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white px-4 py-10 md:px-6">
      <div
        className="
          mx-auto
          w-full
          max-w-[1092px]
          min-h-[552px]
          rounded-[32px]
          bg-[#F5F5F5]
          p-[30px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-[34px]
            md:grid-cols-[440px_1fr]
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <div className="w-full min-w-0">
            {/* IMAGE */}
            <div
              className="
                h-[378px]
                w-full
                overflow-hidden
                rounded-[24px]
              "
            >
              <img
                src={trackerImage}
                alt="Industrial asset tracker case study"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* TITLE */}
            <h2
              className="
                mt-[18px]
                max-w-[410px]
                text-[22px]
                font-semibold
                leading-[1.2]
                tracking-[-0.4px]
                text-[#080B2C]
              "
            >
              11 µA sleep current, 6.7 months on one coin cell
            </h2>

            {/* CLIENT */}
            <p
              className="
                mt-[10px]
                text-[12px]
                leading-[18px]
                text-[#4E5360]
              "
            >
              Client:{" "}
              <span className="text-[#080B2C]">
                Industrial asset tracking, North America
              </span>
            </p>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="w-full min-w-0 md:pt-[2px]">
            {/* HEADING */}
            <h3
              className="
                max-w-[500px]
                text-[24px]
                font-medium
                leading-[1.35]
                tracking-[-0.5px]
                text-[#080B2C]
                md:text-[27px]
              "
            >
              A tracker that had to sit in a warehouse for years with no
              recharge and no technician.
            </h3>

            {/* ================= STATS ================= */}
            <div className="mt-[34px] w-full max-w-[500px]">
              {/* ROW 1 */}
              <div
                className="
                  flex
                  min-h-[52px]
                  items-center
                  gap-[10px]
                  border-t
                  border-[#DADADA]
                "
              >
                <span
                  className="
                    flex
                    h-[16px]
                    w-[16px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#20C878]
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  ✓
                </span>

                <p className="text-[13px] text-[#555B61]">
                  11 µA measured sleep current
                </p>
              </div>

              {/* ROW 2 */}
              <div
                className="
                  flex
                  min-h-[52px]
                  items-center
                  gap-[10px]
                  border-t
                  border-[#DADADA]
                "
              >
                <span
                  className="
                    flex
                    h-[16px]
                    w-[16px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#20C878]
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  ✓
                </span>

                <p className="text-[13px] text-[#555B61]">
                  6.7 months projected runtime on a CR2032
                </p>
              </div>

              {/* ROW 3 */}
              <div
                className="
                  flex
                  min-h-[52px]
                  items-center
                  gap-[10px]
                  border-y
                  border-[#DADADA]
                "
              >
                <span
                  className="
                    flex
                    h-[16px]
                    w-[16px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#20C878]
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  ✓
                </span>

                <p className="text-[13px] text-[#555B61]">
                  Companion app ships with the firmware
                </p>
              </div>
            </div>

            {/* ================= BUTTON ================= */}
            <button
              type="button"
              onClick={handleViewDetails}
              className="
                mt-[27px]
                inline-flex
                h-[44px]
                cursor-pointer
                items-center
                justify-center
                gap-[10px]
                rounded-full
                bg-[#3159DB]
                px-[22px]
                text-[12px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#2449C8]
                active:scale-[0.97]
              "
            >
              Read the case study

              <span className="text-[15px] leading-none">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
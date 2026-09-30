import React from "react";
import { useNavigate } from "react-router-dom";

import classroomImg from "../assets/casestudy/3.png";

export default function ClassroomCaseStudy() {
  const navigate = useNavigate();

  // ============================
  // GO TO BLOG DETAIL
  // ============================
  const handleCaseStudy = () => {
    navigate("/blog-detail");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        w-full
        bg-white
        px-4
        pb-[60px]
        md:px-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1092px]
          min-h-[552px]

          bg-[#F5F5F5]
          rounded-[32px]

          p-[30px]

          grid
          grid-cols-1
          md:grid-cols-[440px_1fr]

          gap-[34px]

          overflow-hidden
        "
      >
        {/* ================= LEFT ================= */}

        <div className="w-full min-w-0">
          {/* IMAGE */}

          <div
            className="
              w-full
              h-[378px]
              rounded-[24px]
              overflow-hidden
            "
          >
            <img
              src={classroomImg}
              alt="Classroom communication system"
              className="
                block
                w-full
                h-full
                object-cover
              "
            />
          </div>

          {/* TITLE */}

          <h3
            className="
              mt-[18px]

              text-[22px]
              leading-[1.2]
              font-semibold

              tracking-[-0.4px]
              text-[#080B18]

              max-w-[420px]
            "
          >
            11 µA sleep current, 6.7 months on one coin cell
          </h3>

          {/* CLIENT */}

          <p
            className="
              mt-[10px]
              text-[12px]
              leading-[18px]
              text-[#252525]
            "
          >
            Client: Industrial asset tracking, North America
          </p>
        </div>

        {/* ================= RIGHT ================= */}

        <div
          className="
            w-full
            min-w-0
            md:pt-[3px]
          "
        >
          {/* HEADING */}

          <h2
            className="
              text-[#080B18]

              text-[25px]
              md:text-[27px]

              leading-[1.35]
              font-medium
              tracking-[-0.4px]

              max-w-[500px]
            "
          >
            A tracker that had to sit in a warehouse for years with no recharge
            and no technician.
          </h2>

          {/* ================= DETAILS ================= */}

          <div
            className="
              mt-[34px]
              w-full
              max-w-[500px]
            "
          >
            {/* ITEM 1 */}

            <div
              className="
                flex
                items-center
                gap-[10px]

                min-h-[52px]

                border-t
                border-[#DADADA]
              "
            >
              <span
                className="
                  w-[16px]
                  h-[16px]

                  shrink-0

                  rounded-full
                  bg-[#20C878]

                  flex
                  items-center
                  justify-center

                  text-white
                  text-[9px]
                  font-bold
                "
              >
                ✓
              </span>

              <span className="text-[13px] text-[#555B61]">
                11 µA measured sleep current
              </span>
            </div>

            {/* ITEM 2 */}

            <div
              className="
                flex
                items-center
                gap-[10px]

                min-h-[52px]

                border-t
                border-[#DADADA]
              "
            >
              <span
                className="
                  w-[16px]
                  h-[16px]

                  shrink-0

                  rounded-full
                  bg-[#20C878]

                  flex
                  items-center
                  justify-center

                  text-white
                  text-[9px]
                  font-bold
                "
              >
                ✓
              </span>

              <span className="text-[13px] text-[#555B61]">
                6.7 months projected runtime on a CR2032
              </span>
            </div>

            {/* ITEM 3 */}

            <div
              className="
                flex
                items-center
                gap-[10px]

                min-h-[52px]

                border-y
                border-[#DADADA]
              "
            >
              <span
                className="
                  w-[16px]
                  h-[16px]

                  shrink-0

                  rounded-full
                  bg-[#20C878]

                  flex
                  items-center
                  justify-center

                  text-white
                  text-[9px]
                  font-bold
                "
              >
                ✓
              </span>

              <span className="text-[13px] text-[#555B61]">
                Companion app ships with the firmware
              </span>
            </div>
          </div>

          {/* ================= BUTTON ================= */}

          <button
            type="button"
            onClick={handleCaseStudy}
            className="
              mt-[27px]

              inline-flex
              items-center
              justify-center
              gap-[10px]

              bg-[#3159DB]
              hover:bg-[#2548C4]

              text-white
              text-[12px]
              font-medium

              px-[22px]
              h-[44px]

              rounded-full
              cursor-pointer

              transition-all
              duration-200

              active:scale-[0.97]
            "
          >
            Read the case study

            <span className="text-[15px] leading-none">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
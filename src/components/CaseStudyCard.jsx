import React from "react";
import { useNavigate } from "react-router-dom";

import caseImage from "../assets/casestudy/1.png";

export default function CaseStudyCard() {
  const navigate = useNavigate();

  // Read Case Study → Blog Detail Page
  const handleReadCaseStudy = () => {
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
          max-w-273
          min-h-138
          rounded-4xl
          bg-[#F5F5F5]
          p-7.5
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:grid-cols-[440px_1fr]
            md:gap-8.5
          "
        >
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Image */}
            <div
              className="
                w-full
                h-95
                overflow-hidden
                rounded-[26px]
              "
            >
              <img
                src={caseImage}
                alt="AI customer service case study"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Title */}
            <h2
              className="
                mt-5
                max-w-102.5
                text-[22px]
                font-semibold
                leading-tight
                tracking-[-0.5px]
                text-[#080B2C]
              "
            >
              An AI agent that answers customers
              <br className="hidden md:block" />
              before a human sees the message
            </h2>

            {/* Client */}
            <p
              className="
                mt-3
                text-[12px]
                leading-5
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
          <div className="md:pt-1">
            {/* Heading */}
            <h3
              className="
                max-w-107.5
                text-[24px]
                font-medium
                leading-[1.3]
                tracking-[-0.5px]
                text-[#080B2C]
              "
            >
              Enquiries arrived faster than a two-
              <br className="hidden md:block" />
              person team could answer them, and
              <br className="hidden md:block" />
              most were
            </h3>

            {/* ================= STATS ================= */}
            <div className="mt-8 max-w-120">
              {/* Row 1 */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-t
                  border-[#DEDEDE]
                  py-4
                "
              >
                <span
                  className="
                    flex
                    h-4
                    w-4
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#18C878]
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  ✓
                </span>

                <p className="text-[12px] text-[#5B606B]">
                  of enquiries resolved with no human handoff
                </p>
              </div>

              {/* Row 2 */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-t
                  border-[#DEDEDE]
                  py-4
                "
              >
                <span
                  className="
                    flex
                    h-4
                    w-4
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#18C878]
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  ✓
                </span>

                <p className="text-[12px] text-[#5B606B]">
                  00 sec average first response, down from hours
                </p>
              </div>

              {/* Row 3 */}
              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-y
                  border-[#DEDEDE]
                  py-4
                "
              >
                <span
                  className="
                    flex
                    h-4
                    w-4
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#18C878]
                    text-[9px]
                    font-bold
                    text-white
                  "
                >
                  ✓
                </span>

                <p className="text-[12px] text-[#5B606B]">
                  Escalates to a human on anything it should not answer alone
                </p>
              </div>
            </div>

            {/* ================= BUTTON ================= */}
            <button
              type="button"
              onClick={handleReadCaseStudy}
              className="
                mt-7
                flex
                cursor-pointer
                items-center
                gap-3
                rounded-full
                bg-[#3159DB]
                px-6
                py-3
                text-[12px]
                font-medium
                text-white
                transition
                duration-300
                hover:bg-[#2449C8]
                active:scale-[0.98]
              "
            >
              Read the case study

              <span className="text-[15px]">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
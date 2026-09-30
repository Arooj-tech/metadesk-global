import React, { useState } from "react";

const categories = [
  "All",
  "Web",
  "Mobile",
  "AI & automation",
  "Cloud & backend",
  "Computer vision",
  "Embedded & IoT",
];

export default function CaseStudyHero() {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="
          w-full
          max-w-300
          mx-auto
          px-8
          md:px-14.75
          pb-25
        "
      >
        {/* ================= TOP CONTENT ================= */}

        <div
          className="
            flex
            flex-col
            items-center
            text-center
            gap-4.5
          "
        >
          {/* CASE STUDIES PILL */}

          <div
            className="
              min-w-41.25
              h-7
              px-5

              flex
              items-center
              justify-center

              border
              border-[#E2E5EA]
              rounded-full

              text-[10px]
              font-medium
              text-[#080B2C]
            "
          >
            Case Studies
          </div>

          {/* HEADING */}

          <h1
            className="
              max-w-155

              text-[36px]
              md:text-[48px]

              leading-[0.98]
              tracking-[-2px]

              font-bold
              text-[#080B2C]
            "
          >
            What we shipped, and
            <br />
            <span className="text-[#080B2C]">
              what it had to do.
            </span>
          </h1>

          {/* ================= FILTER BUTTONS ================= */}

          <div
            className="
              w-full
              mt-6.5

              flex
              items-center
              justify-center

              gap-3.5

              overflow-x-auto

              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              scrollbar-none
            "
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    shrink-0

                    h-10.5
                    px-7.5

                    flex
                    items-center
                    justify-center

                    rounded-full

                    text-[11px]
                    font-medium

                    transition-all
                    duration-200

                    ${
                      isActive
                        ? "bg-[#3159DB] text-white border border-[#3159DB]"
                        : "bg-white text-[#080B2C] border border-[#E1E4E9] hover:border-[#3159DB]"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
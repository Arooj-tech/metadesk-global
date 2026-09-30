import React, { useState } from "react";

const steps = [
  {
    number: "/ 01",
    title: "Tell us what it has to do",
    desc: "Who uses it, what it replaces, and the deadline or budget it has to fit. A rough brief is enough.",
  },
  {
    number: "/ 02",
    title: "We build in the open",
    desc: "Weekly demos on a live staging URL. Code in your repo from day one, so you see progress rather than take our word for it.",
  },
  {
    number: "/ 03",
    title: "You get it live",
    desc: "Deployed, monitored and documented, with the deployment handed over so your team can ship without us.",
  },
];

export default function ProcessSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full bg-[#f5f5f5]">
      {/* MAIN CONTAINER */}
      <div
        className="
          w-full
          max-w-300.5
          mx-auto
          px-14.75
          pt-20
          pb-20
        "
      >
        {/* ================= HEADING ================= */}

        <div>
          <p
            className="
              flex
              items-center
              gap-2
              text-[12px]
              font-medium
              text-[#080B2C]
            "
          >
            <span
              className="
                block
                w-0.5
                h-3
                bg-[#3159DB]
              "
            />

            How we work
          </p>

          <h2
            className="
              mt-5.5
              text-[42px]
              leading-[1.05]
              tracking-[-1.5px]
              font-bold
              text-[#080B2C]
            "
          >
            How a web development
            <br />
            project runs.
          </h2>

          <p
            className="
              mt-4.5
              text-[13px]
              leading-5
              text-[#5E6470]
            "
          >
            From a rough brief to something live you can click through.
          </p>
        </div>

        {/* ================= CARDS AREA ================= */}

        <div
          className="
            relative
            w-full
            h-120
            mt-11.25
          "
        >
          {steps.map((step, index) => {
            const isActive = active === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActive(index)}
                className={`
                  absolute
                  text-left

                  w-65
                  h-46.25

                  rounded-[20px]
                  p-6.5

                  flex
                  flex-col

                  cursor-pointer

                  transition-all
                  duration-300
                  ease-out

                  ${
                    isActive
                      ? "bg-[#3159DB] text-white"
                      : "bg-white text-[#080B2C]"
                  }

                  ${
                    index === 0
                      ? "left-0 top-5"
                      : index === 1
                      ? "left-1/2 -translate-x-1/2 top-28.75"
                      : "right-0 top-52.5"
                  }
                `}
              >
                {/* NUMBER */}

                <span
                  className={`
                    text-[10px]
                    leading-none
                    font-medium

                    ${
                      isActive
                        ? "text-white/80"
                        : "text-[#606775]"
                    }
                  `}
                >
                  {step.number}
                </span>

                {/* TEXT BOTTOM */}

                <div className="mt-auto">
                  <h3
                    className="
                      text-[15px]
                      leading-4.5
                      font-semibold
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`
                      mt-2

                      text-[10px]
                      leading-3.5
                      font-normal

                      ${
                        isActive
                          ? "text-white/70"
                          : "text-[#646A75]"
                      }
                    `}
                  >
                    {step.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
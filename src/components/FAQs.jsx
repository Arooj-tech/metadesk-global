import React, { useState } from "react";

const faqData = [
  {
    question: "Who owns the code?",
    answer:
      "You do. Once the project is complete, the source code and project files are handed over to you.",
  },
  {
    question: "Do you work fixed price or hourly?",
    answer:
      "Milestone-based against agreed deliverables. Scoping is a fixed fee and produces a written plan you own whether or not you continue with us. We do not quote a fixed price on work nobody has defined yet, because that price is always wrong for one of us.",
  },
  {
    question: "Can you take over a project that has stalled?",
    answer:
      "Yes. We can review the existing codebase, identify what is blocking progress, and create a practical plan to get the project moving again.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We can stay involved for monitoring, maintenance, improvements and future releases, or hand everything over to your internal team.",
  },
  {
    question: "How quickly can you start?",
    answer:
      "It depends on the scope and current schedule. Once the requirements are clear, we can confirm a realistic start date and delivery plan.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white">
      <div
        className="
          w-full
          max-w-300
          mx-auto
          px-14.75
          py-25

          flex
          flex-col
          md:flex-row
          gap-8
          md:gap-17.5
        "
      >
        {/* ================= LEFT SIDE ================= */}

        <div
          className="
            w-full
            md:w-[43%]
            md:pt-0.5
          "
        >
          {/* FAQ PILL */}

          <span
            className="
              inline-flex
              items-center
              justify-center

              min-w-16
              h-6.25

              px-4

              border
              border-[#E4E4E4]
              rounded-full

              text-[10px]
              font-medium
              text-[#080B2C]
            "
          >
            FAQ's
          </span>

          {/* HEADING */}

          <h2
            className="
              mt-5.5

              max-w-82.5

              text-[42px]
              leading-[1.03]
              tracking-[-1.5px]
              font-medium
              text-[#080B2C]
            "
          >
            The questions we
            <br />
            get before every
            <br />
            project
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-4.5

              max-w-87.5

              text-[13px]
              leading-4.5
              text-[#6A6A6A]
            "
          >
            The things customers ask us most. If yours isn't here, call the
            shop — we're reachable any day of the week.
          </p>
        </div>

        {/* ================= RIGHT ACCORDION ================= */}

        <div
          className="
            w-full
            md:w-[57%]

            flex
            flex-col
            gap-3
          "
        >
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  w-full
                  bg-[#F3F3F3]
                  rounded-[18px]
                  overflow-hidden

                  transition-all
                  duration-300
                "
              >
                {/* QUESTION */}

                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    min-h-17

                    px-6

                    flex
                    items-center
                    justify-between
                    gap-5

                    text-left
                    cursor-pointer
                  "
                >
                  <span
                    className="
                      text-[13px]
                      leading-4.5
                      font-medium
                      text-[#080B2C]
                    "
                  >
                    {faq.question}
                  </span>

                  {/* PLUS / MINUS */}

                  <span
                    className="
                      shrink-0

                      w-5
                      h-5

                      rounded-full
                      bg-black
                      text-white

                      flex
                      items-center
                      justify-center

                      text-[14px]
                      leading-none
                      font-medium
                    "
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* ANSWER */}

                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out

                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        px-6
                        pr-16.25
                        pb-6

                        max-w-140

                        text-[12px]
                        leading-4.25
                        text-[#555B65]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import React, { useState } from "react";

const steps = [
  {
    number: "01",
    title: <>Tell us what you<br />are building</>,
    text: "Who uses it, what it has to do, and the deadline or budget it has to fit. A rough brief is enough to start the conversation.",
  },
  {
    number: "02",
    title: <>We scope it<br />properly</>,
    text: "Architecture, a milestone plan and a written estimate. If the timeline or budget does not work, you hear that now rather than three months in.",
  },
  {
    number: "03",
    title: <>We build in the<br />open</>,
    text: "Weekly demos on a live environment you can click through. Code lands in your repository from day one, so you can see progress rather than take our word for it.",
  },
  {
    number: "04",
    title: <>We keep it<br />running</>,
    text: "Deployment, monitoring, fixes and new features. Most clients stay on a monthly retainer, month to month, with no lock-in.",
  },
  {
    number: "05",
    title: "We test everything",
    text: "Every release goes through structured testing so the product stays stable, fast and ready for real users.",
  },
  {
    number: "06",
    title: "We launch with confidence",
    text: "We handle deployment and production setup so your product can move from development to real-world use smoothly.",
  },
  {
    number: "07",
    title: "We measure and improve",
    text: "After launch, we monitor performance, learn from real usage and continuously improve the product.",
  },
  {
    number: "08",
    title: "We scale with you",
    text: "As your users and requirements grow, the architecture and infrastructure evolve with your business.",
  },
];


const HowItWorks = () => {

  const [page, setPage] = useState(0);
  const [activeCard, setActiveCard] = useState(2);

  // arrow active state
  const [activeArrow, setActiveArrow] = useState(null);


  const cardsPerPage = 4;
  const totalPages = Math.ceil(steps.length / cardsPerPage);


  const visibleCards = steps.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );


  const nextCards = () => {
    setPage((prev) => (prev + 1) % totalPages);
    setActiveCard(null);
    setActiveArrow("next");
  };


  const previousCards = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
    setActiveCard(null);
    setActiveArrow("prev");
  };


  return (

    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-8">


        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-start">


          {/* LEFT SIDE */}

          <div className="pt-2">

            <span className="
              inline-flex
              border
              border-gray-200
              rounded-full
              px-6
              py-2
              text-sm
            ">
              How it works
            </span>


            <h2 className="
              mt-7
              text-5xl
              font-bold
              leading-[1.05]
              max-w-140
            ">
              From the first call to
              <br />
              software in production.
            </h2>


            <p className="
              mt-7
              text-gray-600
              text-lg
              leading-relaxed
              max-w-130
            ">
              Four stages. You see working software at the end of every one,
              not a status report.
            </p>


          </div>



          {/* CARDS */}

          <div className="grid sm:grid-cols-2 gap-4">


            {visibleCards.map((step,index)=>{

              const realIndex = page * cardsPerPage + index;

              const isActive = activeCard === realIndex;


              return (

                <div
                  key={realIndex}
                  onMouseEnter={()=>setActiveCard(realIndex)}

                  className={`
                    min-h-70
                    rounded-[28px]
                    p-7
                    flex
                    flex-col
                    justify-between
                    cursor-pointer
                    transition-all
                    duration-300

                    ${
                      isActive
                      ?
                      "bg-blue-600 text-white -translate-y-1 shadow-xl"
                      :
                      "bg-[#F3F3F3] text-black hover:-translate-y-1 hover:shadow-lg"
                    }

                  `}
                >


                  <span className={`
                    text-sm
                    ${
                      isActive
                      ?
                      "text-blue-100"
                      :
                      "text-gray-500"
                    }
                  `}>
                    / {step.number}
                  </span>



                  <div>

                    <h3 className="
                      text-xl
                      font-semibold
                      leading-tight
                      max-w-55
                    ">
                      {step.title}
                    </h3>



                    <p className={`
                      mt-4
                      text-sm
                      leading-relaxed

                      ${
                        isActive
                        ?
                        "text-blue-50"
                        :
                        "text-gray-600"
                      }

                    `}>
                      {step.text}
                    </p>


                  </div>


                </div>

              );

            })}


          </div>


        </div>




        {/* BOTTOM */}

        <div className="
          flex
          items-center
          justify-between
          mt-16
        ">


          {/* LEFT LABEL */}

          <span className="
            inline-flex
            border
            border-gray-200
            rounded-full
            px-7
            py-2
            text-sm
            text-gray-800
          ">
            Real projects
          </span>



          {/* ARROWS */}

          <div className="flex gap-3">


            <button
              onClick={previousCards}

              className={`
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                text-3xl
                text-white
                transition-all
                duration-300

                ${
                  activeArrow === "prev"
                  ?
                  "bg-blue-600"
                  :
                  "bg-black"
                }

              `}
            >
              ‹
            </button>



            <button
              onClick={nextCards}

              className={`
                w-12
                h-12
                rounded-full
                flex
                items-center
                justify-center
                text-3xl
                text-white
                transition-all
                duration-300

                ${
                  activeArrow === "next"
                  ?
                  "bg-blue-600"
                  :
                  "bg-black"
                }

              `}
            >
              ›
            </button>


          </div>


        </div>



      </div>


    </section>

  );
};


export default HowItWorks;
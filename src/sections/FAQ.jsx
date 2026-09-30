import React, { useState } from "react";

const faqData = [
  {
    question: "What industries does MetaDesk Global serve?",
    answer:
      "We work with businesses across multiple industries including technology, healthcare, real estate, e-commerce, and professional services.",
  },
  {
    question: "How do you ensure the quality of your virtual staff?",
    answer:
      "We follow a rigorous hiring process, including skills assessments, background checks, and training. Each team member is monitored for performance and continuously trained to maintain service excellence.",
  },
  {
    question: "Is there a minimum contract period required?",
    answer:
      "No. We offer flexible engagement models based on your business needs with options that fit different project requirements.",
  },
  {
    question: "How is communication managed with remote staff?",
    answer:
      "We use modern communication tools and regular reporting systems to keep projects transparent and ensure smooth collaboration.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Simply contact our team, discuss your requirements, and we will guide you through the next steps to start your project.",
  },
];


const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(1);


  return (
    <section className="bg-white py-20">

      <div className="max-w-7xl mx-auto px-8">


        <div className="
          grid 
          lg:grid-cols-2 
          gap-20
          items-start
        ">


          {/* LEFT SIDE */}

          <div>


            <span
              className="
              inline-flex
              border
              border-gray-200
              rounded-full
              px-5
              py-2
              text-xs
              text-gray-700
              "
            >
              FAQs
            </span>


            <h2
              className="
              mt-6
              text-5xl
              font-bold
              leading-[1.05]
              text-black
              "
            >
              Read Most
              <br/>
              Frequent Questions
            </h2>


            <p
              className="
              mt-5
              text-gray-600
              text-sm
              max-w-sm
              leading-relaxed
              "
            >
              The things customers ask us most. If yours isn't here,
              call the shop — we're reachable any day of the week.
            </p>


          </div>



          {/* RIGHT ACCORDION */}


          <div className="space-y-3">


            {faqData.map((item,index)=>(


              <div
                key={index}
                className="
                rounded-xl
                overflow-hidden
                bg-[#F4F4F4]
                "
              >


                <button

                  onClick={()=> 
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }

                  className="
                  w-full
                  flex
                  justify-between
                  items-center
                  px-6
                  py-5
                  text-left
                  "
                >


                  <span
                    className="
                    text-sm
                    font-semibold
                    text-black
                    "
                  >
                    {item.question}
                  </span>


                  <span
                    className="
                    w-5
                    h-5
                    rounded-full
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xs
                    "
                  >
                    {
                      openIndex === index
                      ? "−"
                      : "+"
                    }
                  </span>


                </button>



                {
                  openIndex === index && (

                    <div
                      className="
                      px-6
                      pb-5
                      text-sm
                      text-gray-600
                      leading-relaxed
                      "
                    >
                      {item.answer}
                    </div>

                  )
                }



              </div>


            ))}


          </div>



        </div>


      </div>


    </section>
  );
};


export default FAQ;
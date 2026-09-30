import React from "react";
import projectImage from "../assets/services/project.png";


const Projects = () => {

  return (

    <section className="bg-white pt-0 pb-12">

<div className="max-w-7xl mx-auto px-8 -mt-10">

      

        {/* HEADING */}

        <h2 className="
          mt-4
          text-5xl
          font-bold
          leading-tight
          max-w-xl
        ">
          What we shipped,
          <br />
          and what it changed
        </h2>





        {/* PROJECT CARD */}


        <div className="
          mt-6
          bg-[#F3F3F3]
          rounded-[35px]
          p-7
          grid
          lg:grid-cols-2
          gap-8
          items-start
        ">



          {/* IMAGE SIDE */}

          <div>


            <img
              src={projectImage}
              alt="Project"
              className="
                w-full
                h-81.25
                object-cover
                rounded-[28px]
              "
            />



            <h3 className="
              mt-5
              text-2xl
              font-semibold
              leading-tight
            ">
              An AI agent that answers customers
              <br />
              before a human sees the message
            </h3>



            <p className="
              mt-3
              text-gray-500
              text-sm
            ">
              Client:
              <span className="text-black">
                sector, region
              </span>
            </p>


          </div>







          {/* RIGHT CONTENT */}


          <div className="pt-1">


            <h3 className="
              text-3xl
              font-semibold
              leading-tight
              max-w-xl
            ">
              Enquiries arrived faster than a two-
              <br />
              person team could answer them, and
              <br />
              most were the same six questions.
            </h3>





            {/* POINTS */}

            <div className="mt-7">


              {[
                "00% of enquiries resolved with no human handoff",
                "00 sec average first response, down from hours",
                "Runs on WhatsApp, where the customers already were"
              ].map((item,index)=>(


                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-3
                    py-4
                    border-b
                    border-gray-200
                    text-gray-600
                  "
                >


                  <span className="
                    w-4
                    h-4
                    rounded-full
                    bg-green-500
                    flex
                    items-center
                    justify-center
                    text-white
                    text-[10px]
                    shrink-0
                  ">
                    ✓
                  </span>



                  <p>
                    {item}
                  </p>


                </div>


              ))}


            </div>






            {/* BUTTON */}


            <button className="
              mt-7
              bg-blue-600
              text-white
              px-7
              py-3
              rounded-full
              hover:bg-blue-700
              transition
            ">
              Read the case study →
            </button>




          </div>



        </div>



      </div>



    </section>

  );

};


export default Projects;
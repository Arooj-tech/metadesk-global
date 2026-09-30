import React from "react";

const stats = [
  {
    number: "6+",
    text: "Years in embedded",
  },
  {
    number: "100+",
    text: "Projects delivered",
  },
  {
    number: "30+",
    text: "Engineers on staff",
  },
  {
    number: "3",
    text: "Countries served",
  },
];


export default function TrackRecord() {

  return (

    <section
      className="
      w-full
      bg-white
      py-20
      "
    >


      <div
        className="
        max-w-300
        mx-auto
        bg-[#F2F2F2]
        px-14.75
        py-20
        "
      >


        {/* Heading Area */}

        <div
          className="
          max-w-90
          "
        >


          <div
            className="
            inline-flex
            border
            border-gray-300
            rounded-full
            px-5
            py-1
            text-[10px]
            font-medium
            text-[#11152F]
            mb-5
            "
          >

            Track record

          </div>



          <h2
            className="
            text-[#080B2C]
            font-bold
            text-[32px]
            leading-[1.1]
            tracking-[-1px]
            "
          >

            Where we are today

          </h2>



          <p
            className="
            mt-4
            text-[12px]
            leading-3.75
            font-normal
            text-[#11152F]
            "
          >

            Replace every highlighted figure with you can defend in a sales call,
            or delete the row. A number you cannot back up is worse than no number.

          </p>


        </div>





        {/* Stats Cards */}

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-3
          mt-10
          "
        >


          {
            stats.map((item,index)=>(

              <div
                key={index}
                className="
                bg-white
                rounded-[14px]
                px-5
                py-5
                h-21.25
                flex
                flex-col
                justify-center
                "
              >


                <h3
                  className="
                  text-[#11152F]
                  text-[14px]
                  font-semibold
                  "
                >

                  {item.number}

                </h3>



                <p
                  className="
                  text-gray-500
                  text-[10px]
                  font-normal
                  mt-1
                  "
                >

                  {item.text}

                </p>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );
}
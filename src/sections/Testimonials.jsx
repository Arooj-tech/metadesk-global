import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    name: "Alex Rivera",
    username: "@alexrivera",
    image: "/src/assets/testimonials/image%201.png",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    name: "Casey Jordan",
    username: "@caseyj",
    image: "/src/assets/testimonials/image%202.png",
  },
  {
    text: "Adopting this platform for our team has streamlined project management and improved communication across the board.",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
    image: "/src/assets/testimonials/image%203.png",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    name: "Josh Smith",
    username: "@jsmith",
    image: "/src/assets/testimonials/image%204.png",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    name: "Taylor Kim",
    username: "@taylorkimm",
    image: "/src/assets/testimonials/image%205.png",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    name: "Sam Dawson",
    username: "@dawsontechtips",
    image: "/src/assets/testimonials/image%206.png",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    name: "Morgan Lee",
    username: "@morganleewhiz",
    image: "/src/assets/testimonials/image%207.png",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    name: "Riley Smith",
    username: "@rileysmith1",
    image: "/src/assets/testimonials/image%208.png",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    name: "Casey Harper",
    username: "@casey09",
    image: "/src/assets/testimonials/image%209.png",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white pt-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* LABEL */}
        <div className="flex justify-center">
          <span className="inline-flex border border-gray-200 rounded-full px-5 py-1.5 text-xs text-gray-700">
            Testimonials
          </span>
        </div>

        {/* HEADING */}
        <h2 className="mt-5 text-center text-5xl font-bold tracking-tight text-[#07122F]">
          What our users say
        </h2>

        {/* CARDS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                rounded-[20px]
                border border-gray-100
                p-6
                min-h-44
                flex flex-col
                justify-between
                bg-white
                shadow-[0_5px_18px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              {/* TESTIMONIAL */}
              <p className="text-sm leading-relaxed text-gray-700">
                {item.text}
              </p>

              {/* USER */}
              <div className="flex items-center gap-3 mt-5">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-10
                    h-10
                    rounded-full
                    object-cover
                    shrink-0
                  "
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                <div>
                  <h4 className="text-sm font-semibold text-black">
                    {item.name}
                  </h4>

                  <p className="text-xs text-gray-500">
                    {item.username}
                  </p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
import React from "react";

const Announcement = () => {
  return (
    <div
      className="
      w-full
      h-8
      bg-[#0057FF]
      flex
      items-center
      justify-center
      text-white
      "
    >
      <p className="text-[11px] font-medium tracking-[0.1px] flex items-center gap-3">
        <span className="text-white opacity-70">
          Taking on two new hardware programmes this quarter.
        </span>

        <span className="text-white font-normal">
          Book a discovery call →
        </span>
      </p>
    </div>
  );
};

export default Announcement;
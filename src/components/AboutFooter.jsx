import React from "react";
import { Link } from "react-router-dom";

export default function AboutFooter() {
  return (
    <footer className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1083px]
          px-4
          pt-[80px]
          pb-[80px]
          md:px-0
        "
      >
        {/* =========================================
            TOP FOOTER
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            gap-[45px]
            md:grid-cols-[2.15fr_0.65fr_0.65fr]
            md:gap-[55px]
          "
        >
          {/* LEFT - BRAND */}
          <div className="max-w-[355px]">
            {/* LOGO */}
            <Link to="/" className="inline-flex items-center gap-[8px]">
              {/* Replace this with your actual logo image if available */}
              <div
                className="
                  grid
                  h-[44px]
                  w-[44px]
                  place-items-center
                  rounded-[8px]
                  bg-[#087CFF]
                  text-[18px]
                  font-bold
                  text-white
                "
              >
                M
              </div>

              <div className="leading-none">
                <p
                  className="
                    text-[17px]
                    font-bold
                    tracking-[3px]
                    text-[#080B2C]
                  "
                >
                  METADESK
                </p>

                <p
                  className="
                    mt-[5px]
                    text-[10px]
                    font-medium
                    tracking-[5px]
                    text-[#1680F5]
                  "
                >
                  GLOBAL
                </p>
              </div>
            </Link>

            {/* DESCRIPTION */}
            <p
              className="
                mt-[18px]
                max-w-[340px]
                text-[13px]
                font-normal
                leading-[1.25]
                text-[#5E626A]
              "
            >
              Embedded product engineering. Hardware,
              <br className="hidden md:block" />
              firmware, connectivity, device cloud and
              <br className="hidden md:block" />
              companion apps for connected products, from
              <br className="hidden md:block" />
              prototype through volume production.
            </p>

            {/* EMAIL BUTTON */}
            <a
              href="mailto:contact@metadeskglobal.com"
              className="
                mt-[18px]
                inline-flex
                h-[43px]
                items-center
                justify-center
                gap-[9px]
                rounded-full
                bg-[#3159DB]
                px-[20px]
                text-[11px]
                font-medium
                text-white
                transition
                duration-300
                hover:bg-[#2449C8]
              "
            >
              <span className="text-[13px]">✉</span>
              contact@metadeskglobal.com
            </a>
          </div>

          {/* WHAT WE DO */}
          <div>
            <h3
              className="
                mb-[15px]
                text-[13px]
                font-semibold
                text-[#080B2C]
              "
            >
              What we do
            </h3>

            <div
              className="
                flex
                flex-col
                gap-[11px]
                text-[12px]
                leading-[1.25]
                text-[#666A72]
              "
            >
              <Link className="transition hover:text-[#3159DB]" to="/services">
                Hardware
              </Link>

              <Link className="transition hover:text-[#3159DB]" to="/services">
                Firmware
              </Link>

              <Link className="transition hover:text-[#3159DB]" to="/services">
                Connectivity
              </Link>

              <Link className="transition hover:text-[#3159DB]" to="/services">
                Device cloud
              </Link>

              <Link className="transition hover:text-[#3159DB]" to="/services">
                Apps and
                <br />
                dashboards
              </Link>

              <Link className="transition hover:text-[#3159DB]" to="/services">
                Edge AI and vision
              </Link>
            </div>
          </div>

          {/* EXPLORE + COMPANY */}
          <div className="grid grid-cols-2 gap-[55px]">
            {/* EXPLORE */}
            <div>
              <h3
                className="
                  mb-[15px]
                  text-[13px]
                  font-semibold
                  text-[#080B2C]
                "
              >
                Explore
              </h3>

              <div
                className="
                  flex
                  flex-col
                  gap-[11px]
                  whitespace-nowrap
                  text-[12px]
                  leading-[1.25]
                  text-[#666A72]
                "
              >
                <Link className="hover:text-[#3159DB]" to="/">
                  Home
                </Link>

                <Link className="hover:text-[#3159DB]" to="/case-study">
                  Case studies
                </Link>

                <Link className="hover:text-[#3159DB]" to="/blog">
                  Insights
                </Link>

                <Link className="hover:text-[#3159DB]" to="/about">
                  Testimonials
                </Link>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3
                className="
                  mb-[15px]
                  text-[13px]
                  font-semibold
                  text-[#080B2C]
                "
              >
                Company
              </h3>

              <div
                className="
                  flex
                  flex-col
                  gap-[11px]
                  whitespace-nowrap
                  text-[12px]
                  leading-[1.25]
                  text-[#666A72]
                "
              >
                <Link className="hover:text-[#3159DB]" to="/about">
                  About us
                </Link>

                <Link className="hover:text-[#3159DB]" to="/about">
                  Process
                </Link>

                <Link className="hover:text-[#3159DB]" to="/careers">
                  Careers
                </Link>

                <Link className="hover:text-[#3159DB]" to="/contact">
                  Contact
                </Link>

                <Link className="hover:text-[#3159DB]" to="/contact">
                  Start a project
                </Link>

                <Link className="hover:text-[#3159DB]" to="/privacy-policy">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            BLUE INFORMATION BLOCK
        ========================================= */}
        <div
          className="
            mt-[64px]
            grid
            grid-cols-1
            gap-[35px]
            rounded-[32px]
            bg-[#3159DB]
            px-[30px]
            py-[38px]
            text-white
            sm:grid-cols-2
            lg:grid-cols-4
            lg:gap-[55px]
          "
        >
          {/* INDUSTRIES */}
          <div>
            <h4 className="mb-[18px] text-[12px] font-medium text-white/60">
              Industries
            </h4>

            <div className="flex flex-col gap-[11px] text-[12px]">
              <Link to="/services" className="hover:text-white/70">
                Medical devices
              </Link>

              <Link to="/services" className="hover:text-white/70">
                Industrial
              </Link>

              <Link to="/services" className="hover:text-white/70">
                Consumer products
              </Link>

              <Link to="/services" className="hover:text-white/70">
                Agritech
              </Link>
            </div>
          </div>

          {/* FIND US */}
          <div>
            <h4 className="mb-[18px] text-[12px] font-medium text-white/60">
              Find us
            </h4>

            <div className="flex flex-col gap-[11px] text-[12px] leading-[1.4]">
              <p>
                Ajax, Ontario
                <br />
                Canada
              </p>

              <p>Lahore, Pakistan</p>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70"
              >
                Get directions
              </a>
            </div>
          </div>

          {/* HOURS */}
          <div>
            <h4 className="mb-[18px] text-[12px] font-medium text-white/60">
              Hours
            </h4>

            <div className="flex flex-col gap-[11px] text-[12px] leading-[1.4]">
              <p>Monday to Friday</p>

              <p>08:00 to 20:00 ET</p>

              <p>NDA returned same day</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="mb-[18px] text-[12px] font-medium text-white/60">
              Contact
            </h4>

            <div className="flex flex-col gap-[11px] text-[12px]">
              {/* CLICKABLE EMAIL */}
              <a
                href="mailto:contact@metadeskglobal.com"
                className="transition hover:text-white/70"
              >
                contact@metadeskglobal.com
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70"
              >
                GitHub
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/70"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM COPYRIGHT
        ========================================= */}
        <div
          className="
            mt-[27px]
            flex
            flex-col
            gap-[10px]
            text-[11px]
            text-[#74777E]
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© 2020–2026 MetaDesk Global. All rights reserved.</p>

          <p>Ajax, Ontario · Serving Canada, the US and Australia</p>
        </div>
      </div>
    </footer>
  );
}
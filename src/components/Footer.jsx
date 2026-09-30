import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1083px]
          px-[18px]
          py-[55px]
        "
      >
        <div
          className="
            grid
            grid-cols-1
            gap-[40px]
            md:grid-cols-[2.2fr_0.65fr_0.65fr_0.7fr]
            md:gap-[55px]
          "
        >
          {/* ================= BRAND ================= */}
          <div className="max-w-[340px]">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="MetaDesk Global"
                className="
                  block
                  w-[105px]
                  h-auto
                  object-contain
                "
              />
            </Link>

            <p
              className="
                mt-[14px]
                max-w-[325px]
                text-[11px]
                font-normal
                leading-[1.25]
                text-[#666666]
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

            {/* CLICKABLE EMAIL */}
            <a
              href="mailto:contact@metadeskglobal.com"
              className="
                mt-[15px]
                inline-flex
                h-[34px]
                items-center
                justify-center
                gap-[7px]
                rounded-full
                bg-[#3159DB]
                px-[16px]
                text-[9px]
                font-medium
                text-white
                transition-colors
                duration-200
                hover:bg-[#2449C8]
              "
            >
              <span className="text-[10px]">✉</span>
              contact@metadeskglobal.com
            </a>
          </div>

          {/* ================= WHAT WE DO ================= */}
          <div>
            <h3
              className="
                mb-[14px]
                text-[12px]
                font-semibold
                leading-none
                text-[#080B18]
              "
            >
              What we do
            </h3>

            <div
              className="
                flex
                flex-col
                gap-[11px]
                text-[11px]
                font-normal
                leading-[1.15]
                text-[#666666]
              "
            >
              <Link to="/services" className="hover:text-[#3159DB]">
                Hardware
              </Link>

              <Link to="/services" className="hover:text-[#3159DB]">
                Firmware
              </Link>

              <Link to="/services" className="hover:text-[#3159DB]">
                Connectivity
              </Link>

              <Link to="/services" className="hover:text-[#3159DB]">
                Device cloud
              </Link>

              <Link to="/services" className="hover:text-[#3159DB]">
                Apps and
                <br />
                dashboards
              </Link>

              <Link to="/services" className="hover:text-[#3159DB]">
                Edge AI and vision
              </Link>
            </div>
          </div>

          {/* ================= EXPLORE ================= */}
          <div>
            <h3
              className="
                mb-[14px]
                text-[12px]
                font-semibold
                leading-none
                text-[#080B18]
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
                text-[11px]
                font-normal
                leading-[1.15]
                text-[#666666]
              "
            >
              <Link to="/" className="hover:text-[#3159DB]">
                Home
              </Link>

              <Link to="/case-study" className="hover:text-[#3159DB]">
                Case studies
              </Link>

              <Link to="/blog" className="hover:text-[#3159DB]">
                Insights
              </Link>

              <Link to="/about" className="hover:text-[#3159DB]">
                Testimonials
              </Link>
            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div>
            <h3
              className="
                mb-[14px]
                text-[12px]
                font-semibold
                leading-none
                text-[#080B18]
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
                text-[11px]
                font-normal
                leading-[1.15]
                text-[#666666]
              "
            >
              <Link to="/about" className="hover:text-[#3159DB]">
                About us
              </Link>

              <Link to="/about" className="hover:text-[#3159DB]">
                Process
              </Link>

              <Link to="/careers" className="hover:text-[#3159DB]">
                Careers
              </Link>

              <Link to="/contact" className="hover:text-[#3159DB]">
                Contact
              </Link>

              <Link to="/contact" className="hover:text-[#3159DB]">
                Start a project
              </Link>

              <Link to="/privacy-policy" className="hover:text-[#3159DB]">
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
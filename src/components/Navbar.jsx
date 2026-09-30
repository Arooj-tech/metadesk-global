import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";   // apne logo ka exact path check kar lena

const Navbar = () => {

  return (
    <nav className="w-full bg-white h-22.5 flex items-center">
      
      <div className="max-w-300 mx-auto w-full flex items-center justify-between px-8">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Metadesk Global"
            className="w-30 h-auto object-contain"
          />
        </div>


        {/* Menu */}
        <div className="flex items-center gap-8.75">

          <NavLink
            to="/services"
            className={({isActive}) =>
              isActive
              ? "text-black font-bold text-[14px]"
              : "text-[#555] text-[14px]"
            }
          >
            Services
          </NavLink>


          <NavLink
            to="/about"
            className={({isActive}) =>
              isActive
              ? "text-black font-bold text-[14px]"
              : "text-[#555] text-[14px]"
            }
          >
            About
          </NavLink>


          <NavLink
            to="/case-study"
            className={({isActive}) =>
              isActive
              ? "text-black font-bold text-[14px]"
              : "text-[#555] text-[14px]"
            }
          >
            Case study
          </NavLink>


          <NavLink
            to="/contact"
            className={({isActive}) =>
              isActive
              ? "text-black font-bold text-[14px]"
              : "text-[#555] text-[14px]"
            }
          >
            Contact Us
          </NavLink>
           <NavLink
            to="/blog"
            className={({isActive}) =>
              isActive
              ? "text-black font-bold text-[14px]"
              : "text-[#555] text-[14px]"
            }
          >
            Blog
          </NavLink>


          <button
            className="
            bg-black 
            text-white 
            px-5.5
            py-3
            rounded-[10px]
            text-[14px]
            font-semibold
            "
          >
            Request a quote
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
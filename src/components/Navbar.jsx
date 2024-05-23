import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/monnayLogo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { FaRegClock } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  const activeStyleMobile = ({ isActive }) => {
    return {
      color: isActive ? "#057d99" : "black",
    };
  };
  return (
    <div className="w-full flex flex-col z-10 fixed">
      <div className="w-full bg-[#057D99] flex justify-between items-center mx-auto px-4">
        <div></div>
        <div className="flex p-2 text-white">
          <div className="flex items-center mx-4">
            <div className="mx-2">
              <ImLocation2 />
            </div>
            <div className="flex flex-col">
              <p className="font-primaryBold text-xs">Vanha Talvitie 11C,</p>
              <p className="font-primaryRegular text-xs">
                HELSINKI 00580 Finland
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="mx-2">
              <FaRegClock />
            </div>
            <div className="flex flex-col">
              <p className="font-primaryBold text-xs">Mon - Fri:</p>
              <p className="font-primaryRegular text-xs">8:00AM - 6:00PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between md:justify-around items-center h-20 mx-auto px-4 text-black bg-white">
        <div className="w-[148px] h-[38px]">
          <img src={Logo} alt="guide me" />
        </div>
        <nav className="text-[#057d99] font-primaryRegular hidden md:flex">
          <NavLink
            to="/"
            className="p-4 uppercase hover:font-primaryBold"
            style={activeStyle}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="p-4 uppercase hover:font-primaryBold"
            style={activeStyle}
          >
            About us
          </NavLink>
          <NavLink
            to="/investmentPlans"
            className="p-4 uppercase hover:font-primaryBold"
            style={activeStyle}
          >
            investments
          </NavLink>
          <NavLink
            to="/faq"
            className="p-4 uppercase hover:font-primaryBold"
            style={activeStyle}
          >
            faq
          </NavLink>
          <NavLink
            to="/courses"
            className="p-4 uppercase hover:font-primaryBold"
            style={activeStyle}
          >
            courses
          </NavLink>
          <NavLink
            to="/contact-us"
            className="p-4 uppercase hover:font-primaryBold"
            style={activeStyle}
          >
            contact
          </NavLink>
        </nav>
        {/* Mobile hamburger */}
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-[120px] w-[414px] h-[621px] ease-in-out duration-500 bg-white z-20"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex flex-col p-4">
            <NavLink
              to="/"
              className="p-4 uppercase font-primarySemibold"
              style={activeStyleMobile}
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="p-4 uppercase font-primarySemibold"
              style={activeStyleMobile}
            >
              About us
            </NavLink>
            <NavLink
              to="/investmentPlans"
              className="p-4 uppercase font-primarySemibold"
              style={activeStyleMobile}
            >
              investments
            </NavLink>
            <NavLink
              to="/faq"
              className="p-4 uppercase font-primarySemibold"
              style={activeStyleMobile}
            >
              faq
            </NavLink>
            <NavLink
              to="/courses"
              className="p-4 uppercase font-primarySemibold"
              style={activeStyleMobile}
            >
              courses
            </NavLink>
            <NavLink
              to="/contact-us"
              className="p-4 uppercase font-primarySemibold"
              style={activeStyleMobile}
            >
              contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

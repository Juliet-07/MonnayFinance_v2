import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/monnayLogo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
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
    <div className="w-full flex justify-between md:justify-around items-center h-20 mx-auto px-4 text-black fixed z-10 bg-white">
      <div className="w-[148px] h-[38px]">
        <img src={Logo} alt="guide me" />
      </div>
      <nav className="text-[#057d99] hidden md:flex">
        <NavLink
          to="/"
          className="w-20 p-4 uppercase hover:font-bold"
          style={activeStyle}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          className="w-26 p-4 uppercase hover:font-bold"
          style={activeStyle}
        >
          About us
        </NavLink>
        <NavLink
          to="/investmentPlans"
          className="w-[141px] p-4 uppercase hover:font-bold"
          style={activeStyle}
        >
          investments
        </NavLink>
        <NavLink
          to="/faq"
          className="w-[65px] p-4 uppercase hover:font-bold"
          style={activeStyle}
        >
          faq
        </NavLink>
        <NavLink
          to="/courses"
          className="w-22 p-4 uppercase hover:font-bold"
          style={activeStyle}
        >
          courses
        </NavLink>
        <NavLink
          to="/contact-us"
          className="w-20 p-4 uppercase hover:font-bold"
          style={activeStyle}
        >
          contact
        </NavLink>
        <NavLink
          to="/signup"
          className="w-[129px] h-[50px] bg-[#057D99]
uppercase text-white text-center p-3.5 ml-10 mr-4 border rounded-[5px]"
        >
          register
        </NavLink>
        <NavLink
          to="/signin"
          className="w-[129px] h-[50px]
uppercase text-[#057D99] text-center p-3.5 border rounded-[5px] border-[#057D99]"
        >
          log in
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
            ? "fixed left-0 top-20 w-[414px] h-[621px] ease-in-out duration-500 bg-white z-10"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex flex-col p-4">
          <NavLink
            to="/"
            className="w-20 p-4 uppercase font-semibold"
            style={activeStyleMobile}
          >
            Home
          </NavLink>
          <NavLink
            to="/aboutus"
            className="w-26 p-4 uppercase font-semibold"
            style={activeStyleMobile}
          >
            About us
          </NavLink>
          <NavLink
            to="/investmentPlans"
            className="w-[141px] p-4 uppercase font-semibold"
            style={activeStyleMobile}
          >
            investments
          </NavLink>
          <NavLink
            to="/faq"
            className="w-[65px] p-4 uppercase font-semibold"
            style={activeStyleMobile}
          >
            faq
          </NavLink>
          <NavLink
            to="/courses"
            className="w-22 p-4 uppercase font-semibold"
            style={activeStyleMobile}
          >
            courses
          </NavLink>
          <NavLink
            to="/contact-us"
            className="w-20 p-4 uppercase font-semibold"
            style={activeStyleMobile}
          >
            contact
          </NavLink>
        </div>
        <div className="w-[352px] h-[60px] p-4 m-6 bg-[#057d99] text-center text-white font-bold text-sm rounded-md uppercase">
          {" "}
          <NavLink to="/signup">Register</NavLink>
        </div>
        <div className="w-[352px] h-[60px] p-4 m-6 border border-[#057d99] text-center text-[#057d99] font-bold text-sm uppercase">
          {" "}
          <NavLink to="/signin">Log in</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

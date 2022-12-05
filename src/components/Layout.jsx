import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHomeAlt, BiBarChartSquare } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import Logo from "../assets/monnayLogo.png";
import Footer from "./FooterDashboard";
// import Header from "./Header";

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", path: "/dashboard" },
    {
      title: "Investments ",
      icon: <BiBarChartSquare />,
      path: "/investments",
    },
    {
      title: "Transaction History",
      icon: <AiOutlineClockCircle />,
      path: "/history",
    },
    {
      title: "Referrals",
      icon: <IoIosPeople />,
      path: "/referral",
    },
    {
      title: "Settings",
      path: "/settings",
      icon: <FiSettings />,
      spacing: true,
    },
    {
      title: "Logout",
      path: "/",
      icon: <MdOutlineLogout />,
    },
  ];
  const activeStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      backgroundColor: isActive ? "#057D99" : "balck",
    };
  };
  const SidebarLinks = ({ menu }) => {
    return (
      <NavLink to={menu.path} style={activeStyle}>
        <li
          className={`w-[250px] h-[50px] text-black flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#057D99] hover:text-white hover:font-semibold rounded-md mt-2 ${
            menu.spacing ? "mt-32" : "mt-2"
          }`}
        >
          <span className="text-2xl block float-left">
            {menu.icon ? menu.icon : <BiHomeAlt />}
          </span>
          <span
            className={`text-base flex-1 font-medium duration-200 ${
              !open && "hidden"
            }`}
          >
            {menu.title}
          </span>
        </li>
      </NavLink>
    );
  };
  return (
    <>
      <div className="px-10 py-6 flex items-center justify-between w-full h-20 ">
        <div className="flex items-center">
          <GiHamburgerMenu
            className={`text-2xl md:text-3xl text-black cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="w-[95px] md:w-[148px] h-[24px] md:h-[38px] ml-[230px] md:ml-4">
            <img
              src={Logo}
              alt="PremiumIcon"
              // className={` duration-500 ${!open && "hidden"}`}
            />
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <div className="w-[148px] h-[38px] ml-4">
            <p>checking if something else can be here</p>
          </div>
          <div className="w-[148px] h-[38px] ml-4">
            <p>checking if something else can be here</p>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full h-full">
        <div
          className={`hidden bg-white h-screen p-5 pt-8 ${
            open ? "w-72" : "w-24"
          } duration-300 relative`}
        >
          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <SidebarLinks
                key={index}
                menu={menu}
                className={`${index === 0 && "bg-red-400"}`}
              />
            ))}
          </ul>
        </div>
        <div className="flex-1">
          {/* <Header text="Dashboard" /> */}
          <main className="w-full h-full p-5 bg-[#E5E5E5]">{children}</main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;

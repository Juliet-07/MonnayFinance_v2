import React from "react";
import { NavLink } from "react-router-dom";
import Jumbo from "../assets/monnayJumbo.png";

const Jumbotron = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <img src={Jumbo} alt="Jumbotron" className="w-full h-full object-cover" />
      <div className="absolute w-full h-full top-0 left-0 bg-[#0A4F60]/70" />
      <div className="absolute w-full h-full top-10 flex flex-col items-center justify-center text-white">
        <div className="w-[350px] md:w-[650px] h-[78px] md:h-[172px] font-primaryBold text-3xl md:text-7xl text-center">
          Dedicated to your financial growth
        </div>
        <div className="w-[326px] md:w-[410px] h-[60px] md:h-[46px] text-sm md:text-base text-center font-primaryRegular py-4">
          We create equal opportunities for all our investors to thrive in the
          crypto and forex markets.
        </div>
        <NavLink to="/signup">
          <div className="w-[245px] md:w-[149px] h-[60px] md:h-[50px] uppercase border border-white rounded-[5px] text-center flex items-center justify-center mt-10 font-primaryRegular">
            get started
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Jumbotron;

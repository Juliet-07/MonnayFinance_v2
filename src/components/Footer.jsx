import React from "react";
import Logo from "../assets/monnayFooter.png";

const Footer = () => {
  return (
    <div className="w-full h-[429px] flex flex-col items-center justify-center">
      <div className="w-full h-[347px] bg-[#0A4F60] flex flex-col md:flex-row items-center justify-center md:justify-around">
        <div className="flex-col">
          <div className="w-[150px] md:w-[215px] h-[35px] md:h-[55px] my-2">
            <img src={Logo} alt="Monnnayfinance" />
          </div>
          <div className="hidden md:block text-base text-white font-semibold w-[311px]">
            {" "}
            Investment opportunities in multiple markets, one account{" "}
          </div>
        </div>
        <div className="flex-col text-white font-semibold text-base">
          <div className="text-2xl font-bold my-2">Quick links</div>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="flex-col text-white font-semibold">
          <div className="w-[96px] h-[33px] font-bold text-2xl">Address</div>
          <div className="h-[110px]">
            <p>Vanha Talvitie 11 C,</p>
            <p>HELSINKI 00580 Finland</p>
            <br />
            <p>Email:</p>
            <p>contact@monnay.finance</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[82px] bg-[#0A4F60] md:bg-[#057d99] flex items-center justify-center uppercase text-white text-sm text-center">
        copyright monnayfinace {new Date().getFullYear()} - terms and conditons
        privacy policy
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Logo from "../assets/monnayFooter.png";
import Support from "../assets/support.png";
import Safe from "../assets/safe.png";

const Footer = () => {
  return (
    <>
      <div className="hidden w-full h-[429px] md:flex flex-col items-center justify-center mt-10">
        <div className="w-full h-[347px] bg-[#0A4F60] flex flex-col md:flex-row items-center justify-center md:justify-around">
          <div className="flex-col">
            <div className="w-[150px] md:w-[215px] h-[35px] md:h-[55px] my-2">
              <img src={Logo} alt="Monnnayfinance" />
            </div>
            <div className="hidden md:block text-base text-white font-primarySemibold w-[311px]">
              {" "}
              Investment opportunities in multiple markets, one account{" "}
            </div>
          </div>
          <div className="flex flex-col items-center text-white font-primarySemibold">
            <div className="text-2xl font-primaryBold my-2">Quick links</div>
            <ul className="list-disc">
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="flex-col text-white font-primarySemibold">
            <div className="w-[96px] h-[33px] font-primaryBold text-2xl">
              Address
            </div>
            <div className="h-[110px]">
              <p>Vanha Talvitie 11 C,</p>
              <p>HELSINKI 00580 Finland</p>
              <br />
              <p>Email:</p>
              <p>contact@monnay.finance</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[82px] bg-[#0A4F60] md:bg-[#057d99] flex items-center justify-center uppercase text-white text-sm text-center font-primaryRegular">
          copyright monnayfinace {new Date().getFullYear()} - terms and
          conditons privacy policy
        </div>
      </div>
      {/* MOBILE FOOTER */}
      <div className="md:hidden w-full text-white flex flex-col bg-[#0A4F60] mt-[100px]">
        <div className="p-10 grid gap-6">
          <div className="flex items-center font-primaryRegular">
            <div>
              <img src={Support} className="mx-4" />
            </div>
            <div>
              <b>Support</b> team across the country
            </div>
          </div>
          <div className="flex items-center font-primaryRegular">
            <div>
              <img src={Safe} className="mx-4" />
            </div>
            <div>
              <b>Safe & Secure</b> online payment
            </div>
          </div>
        </div>
        <hr />
        <div className="p-10 grid gap-10">
          <div className="flex items-center gap-10">
            <div className="grid font-primaryRegular">
              <p className="font-primaryBold uppercase my-4">who we are</p>
              <p>About</p>
              <p>Team</p>
              <p>Work With Us</p>
            </div>
            <div className="grid font-primaryRegular">
              <p className="font-primaryBold uppercase my-4">support</p>
              <p>Terms & Privacy Policy</p>
              <p>Support Policy</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="font-primaryRegular">
            <p className="font-primaryBold uppercase my-4">Monnay finance</p>
            <p>Features</p>
            <p>Payments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

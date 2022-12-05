import React from "react";

const Footer = () => {
  return (
    <div className="h-[54px] md:h-20 flex items-center justify-center bg-[#057D99] font-normal text-sm text-white text-center uppercase">
      copyright monnayfinance {new Date().getFullYear()} - terms & conditions
      privacy policy
    </div>
  );
};

export default Footer;

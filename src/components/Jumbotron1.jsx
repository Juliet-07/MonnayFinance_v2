import React from "react";
import Jumbo from "../assets/monnayJumbo.png";

const Jumbotron1 = ({ title, text }) => {
  return (
    <div className="w-full h-[250px] md:h-[270px] relative">
      <img src={Jumbo} alt="Jumbotron" className="w-full h-full object-cover" />
      <div className="absolute w-full h-full top-0 left-0 bg-[#0A4F60]/70" />
      <div className="absolute w-full h-full top-10 flex flex-col items-center justify-center text-white">
        <div className="w-full h-full flex items-center justify-center text-center font-primaryBold text-4xl mt-8">
          {title}
        </div>
        {/* <div className=" text-center font-normal text-base">{text}</div> */}
      </div>
    </div>
  );
};

export default Jumbotron1;

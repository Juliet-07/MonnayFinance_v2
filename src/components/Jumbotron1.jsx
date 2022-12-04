import React from "react";
import Jumbo from "../assets/monnayJumbo.png";

const Jumbotron1 = ({ title }) => {
  return (
    <div className="w-full h-[218px] md:h-[251px] relative">
      <img src={Jumbo} alt="Jumbotron" className="w-full h-full object-cover" />
      <div className="absolute w-full h-full top-0 left-0 bg-[#0A4F60]/70" />
      <div className="absolute w-full h-full top-6 flex flex-col items-center justify-center text-white">
        <div className="w-full h-full flex items-center justify-center text-center font-bold text-4xl mt-8">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Jumbotron1;

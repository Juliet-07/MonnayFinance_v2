import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron1 from "../components/Jumbotron1";
import Free from "../assets/free.png";
import Fundamental from "../assets/fundamental.png";
import Stock from "../assets/stock.png";
import Expert from "../assets/expert.png";
import { RiStarSFill } from "react-icons/ri";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <>
      <Navbar />
      <Jumbotron1 title="Our Courses" />
      <div className="flex items-center justify-center m-4">
        <div className="grid grid-cols md:grid-cols-4 gap-4">
          <div className="w-[270px] h-[448px] border border-[#057d99] rounded-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[250px] h-[250px] m-2">
                <img src={Free} className="w-[305.86px] h-[282px]" alt="pdf" />
              </div>
              <div className="w-[250px] h-[38px] m-2 uppercase font-semibold text-sm">
                beginners guide to forex trading. (E-book)
              </div>
              <div className="w-[240px] flex items-center justify-between m-2">
                <div className="flex-col">
                  <p className="uppercase text-[#FC5F00] font-medium text-sm">
                    free
                  </p>
                  <p className="text-sm text-[#a9a9a9]">
                    <del>$800</del>
                  </p>
                </div>
                <div className="flex text-xs text-[#f1bc19]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
              <div className="w-[248px] h-[50px] rounded-md m-2 bg-[#057d99] text-white flex items-center justify-center p-2 uppercase">
                download
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[448px] border border-[#057d99] rounded-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[250px] h-[250px] m-2">
                <img src={Fundamental} className="w-[305.86px] h-[282px]" alt="pdf"/>
              </div>
              <div className="w-[250px] h-[38px] m-2 uppercase font-semibold text-sm">
                technical and fundamental analysis. (E-book)
              </div>
              <div className="w-[240px] flex items-center justify-between m-2">
                <div className="flex-col">
                  <p className="uppercase text-[#FC5F00] font-medium text-sm">
                    $1,999
                  </p>
                  <p className="text-sm text-[#a9a9a9]">
                    <del>$3,999</del>
                  </p>
                </div>
                <div className="flex text-xs text-[#f1bc19]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
              <div className="w-[248px] h-[50px] rounded-md m-2 bg-[#057d99] text-white flex items-center justify-center p-2 uppercase">
                buy now
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[448px] border border-[#057d99] rounded-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[250px] h-[250px] m-2">
                <img src={Stock} className="w-[305.86px] h-[282px]" alt="pdf" />
              </div>
              <div className="w-[250px] h-[38px] m-2 uppercase font-semibold text-sm">
                introduction to stocks, bonds $ commodities. (E-book)
              </div>
              <div className="w-[240px] flex items-center justify-between m-2">
                <div className="flex-col">
                  <p className="uppercase text-[#FC5F00] font-medium text-sm">
                    $4,999
                  </p>
                  <p className="text-sm text-[#a9a9a9]">
                    <del>$6,999</del>
                  </p>
                </div>
                <div className="flex text-xs text-[#f1bc19]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
              <div className="w-[248px] h-[50px] rounded-md m-2 bg-[#057d99] text-white flex items-center justify-center p-2 uppercase">
                buy now
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[448px] border border-[#057d99] rounded-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[250px] h-[250px] m-2">
                <img src={Expert} className="w-[305.86px] h-[282px]" alt="pdf" />
              </div>
              <div className="w-[250px] h-[38px] m-2 uppercase font-semibold text-sm">
                developing an expert trading strategy. (E-book)
              </div>
              <div className="w-[240px] flex items-center justify-between m-2">
                <div className="flex-col">
                  <p className="uppercase text-[#FC5F00] font-medium text-sm">
                    $7,999
                  </p>
                  <p className="text-sm text-[#a9a9a9]">
                    <del>$9,999</del>
                  </p>
                </div>
                <div className="flex text-xs text-[#f1bc19]">
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
              </div>
              <div className="w-[248px] h-[50px] rounded-md m-2 bg-[#057d99] text-white flex items-center justify-center p-2 uppercase">
                buy now
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;

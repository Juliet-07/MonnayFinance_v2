import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron1 from "../components/Jumbotron1";
import Footer from "../components/Footer";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const InvestmentPlans = () => {
  return (
    <>
      <Navbar />
      <Jumbotron1 title="Our Investment Plans" />
      <div className="w-full h-full my-10">
        <div
          className="flex flex-col md:flex-row items-center justify-center 
        my-10 md:my-20"
        >
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-white flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-[#057d99]">Basic</h2>
            <h4 className="font-bold text-2xl">2% ROI Daily</h4>
            <div className="w-[312px] border border-[#057d99]"></div>
            <div className="w-[294px] h-[312px] m-4 text-lg">
              <ul className="flex flex-col items-center justify-center">
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Profit withdrawal:{" "}
                  <span className="font-bold">Active daily</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Capital withdrawal: <span className="font-bold">After</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Minimun investment: <span className="font-bold">$100</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Maximum investment: <span className="font-bold">$4,999</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Daily profit range:{" "}
                  <span className="font-bold">$2 - $99.98</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Referral bonus: <span className="font-bold">5% 3% 1%</span>
                </li>
              </ul>
            </div>
            <div className="w-[277px] h-[50px] bg-[#057d99] border rounded-[5px] text-white text-center text-sm p-4 mt-12 uppercase hover:font-bold hover:bg-[#0A4F60]">
              select plan
            </div>
          </div>
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-[#057D99] flex flex-col items-center justify-center text-white mx-[60px] my-[42px] md:my-0">
            <h2 className="text-5xl font-bold">Standard</h2>
            <h4 className="font-bold text-2xl">3.5% ROI Daily</h4>
            <div className="w-[312px] border border-[#ffffff]"></div>
            <div className="w-[294px] h-[312px] m-4 text-lg">
              <ul className="flex flex-col items-center justify-center">
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Profit withdrawal:{" "}
                  <span className="font-bold">Active daily</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Capital withdrawal: <span className="font-bold">After</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Minimun investment: <span className="font-bold">$5,000</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Maximum investment: <span className="font-bold">$14,999</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Daily profit range:{" "}
                  <span className="font-bold">$175 - $524.96</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Referral bonus: <span className="font-bold">5% 3% 1%</span>
                </li>
              </ul>
            </div>
            <div className="w-[277px] h-[50px] bg-white border rounded-[5px] text-[#057D99] text-center text-sm p-4 mt-12 uppercase hover:font-bold">
              select plan
            </div>
          </div>
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-white flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-[#057d99]">Platinum</h2>
            <h4 className="font-bold text-2xl">5% ROI Daily for 3 days</h4>
            <div className="w-[312px] border border-[#057d99]"></div>
            <div className="w-[294px] h-[312px] m-4 text-lg">
              <ul className="flex flex-col items-center justify-center">
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Profit withdrawal:{" "}
                  <span className="font-bold">Active daily</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Capital withdrawal: <span className="font-bold">After</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Minimun investment: <span className="font-bold">$15,000</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Maximum investment:{" "}
                  <span className="font-bold">Unlimited</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Daily profit range: <span className="font-bold">$525</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Referral bonus: <span className="font-bold">5% 3% 1%</span>
                </li>
              </ul>
            </div>
            <div className="w-[277px] h-[50px] bg-[#057d99] border rounded-[5px] text-white text-center text-sm p-4 mt-12 uppercase hover:font-bold hover:bg-[#0A4F60]">
              select plan
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvestmentPlans;

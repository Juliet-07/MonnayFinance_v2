import React from "react";
import { Link } from "react-router-dom";
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
        <div className="font-primaryBold text-3xl md:text-5xl flex items-center justify-center">
          Our
          <font color="#057d99" className="mx-2">
            Investment Plans
          </font>
        </div>
        <div
          className="flex flex-col md:flex-row items-center justify-center 
        my-10"
        >
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-white flex flex-col items-center justify-center">
            <h2 className="text-5xl font-primaryBold text-[#057d99]">Basic</h2>
            <h4 className="font-primaryBold text-2xl">2% ROI Daily</h4>
            <div className="w-[312px] border border-[#057d99]"></div>
            {/* LIST */}
            <div className="w-[350px] h-[400px] m-4 p-4 text-lg">
              <ul className="flex flex-col">
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Profit withdrawal:{" "}
                    <span className="font-bold">Active daily</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Capital withdrawal:{" "}
                    <span className="font-primaryBold">After</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Minimum investment:{" "}
                    <span className="font-primaryBold">$100</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Maximum investment:{" "}
                    <span className="font-primaryBold">$4,999</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Daily profit range:{" "}
                    <span className="font-primaryBold">$2 - $99.98</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Referral bonus:{" "}
                    <span className="font-primaryBold">5% 3% 1%</span>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/signin">
              <div className="w-[320px] h-[50px] bg-[#057d99] border rounded-[5px] text-white text-center text-sm p-4 uppercase hover:font-bold hover:bg-[#0A4F60] font-primaryRegular">
                select plan
              </div>
            </Link>
          </div>
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-[#057D99] flex flex-col items-center justify-center text-white mx-[60px] my-[42px] md:my-0">
            <h2 className="text-5xl font-primaryBold">Standard</h2>
            <h4 className="font-primaryBold text-2xl">3.5% ROI Daily</h4>
            <div className="w-[312px] border border-[#ffffff]"></div>
            <div className="w-[350px] h-[350px] m-4 p-4 text-lg">
              <ul className="flex flex-col">
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline size={30} className="mr-2" />
                  <div className="font-primaryRegular">
                    Profit withdrawal:{" "}
                    <span className="font-primaryBold">Active daily</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline size={30} className="mr-2" />
                  <div className="font-primaryRegular">
                    Capital withdrawal:{" "}
                    <span className="font-primaryBold">After</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline size={30} className="mr-2" />
                  <div className="font-primaryRegular">
                    Minimun investment:{" "}
                    <span className="font-primaryBold">$5,000</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline size={30} className="mr-2" />
                  <div className="font-primaryRegular">
                    Maximum investment:{" "}
                    <span className="font-primaryBold">$14,999</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline size={30} className="mr-2" />
                  <div className="font-primaryRegular">
                    Daily profit range:{" "}
                    <span className="font-primaryBold">$175 - $524.96</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline size={30} className="mr-2" />
                  <div className="font-primaryRegular">
                    Referral bonus:{" "}
                    <span className="font-primaryBold">5% 3% 1%</span>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/signin">
              <div className="w-[320px] h-[50px] bg-white border rounded-[5px] text-[#057D99] text-center text-sm p-4 mt-12 uppercase hover:font-bold font-primaryRegular">
                select plan
              </div>
            </Link>
          </div>
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-white flex flex-col items-center justify-center">
            <h2 className="text-5xl font-primaryBold text-[#057d99]">
              Platinum
            </h2>
            <h4 className="font-primaryBold text-2xl">
              5% ROI Daily for 3 days
            </h4>
            <div className="w-[312px] border border-[#057d99]"></div>
            <div className="w-[350px] h-[350px] m-4 p-4 text-lg">
              <ul className="flex flex-col">
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Profit withdrawal:{" "}
                    <span className="font-primaryBold">Active daily</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Capital withdrawal:{" "}
                    <span className="font-primaryBold">After</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Minimun investment:{" "}
                    <span className="font-primaryBold">$15,000</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Maximum investment:{" "}
                    <span className="font-primaryBold">Unlimited</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Daily profit range:{" "}
                    <span className="font-primaryBold">$525</span>
                  </div>
                </li>
                <li className="flex items-center my-4">
                  <IoMdCheckmarkCircleOutline
                    size={30}
                    color="#057d99"
                    className="mr-2"
                  />
                  <div className="font-primaryRegular">
                    Referral bonus:{" "}
                    <span className="font-primaryBold">5% 3% 1%</span>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/signin">
              <div className="w-[320px] h-[50px] bg-[#057d99] border rounded-[5px] text-white text-center text-sm p-4 mt-12 uppercase hover:font-bold hover:bg-[#0A4F60] font-primaryRegular">
                select plan
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvestmentPlans;

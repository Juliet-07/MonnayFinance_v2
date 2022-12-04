import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Phone from "../assets/monnayHome.jpg";
import { TbHeartHandshake } from "react-icons/tb";
import { BiBarChartSquare } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Strategy from "../assets/monnayStrategy.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-[382px] md:w-full h-full mx-4 md:mx-0 my-6">
        <div className="w-[382px] md:w-[658px] h-[255px] md:h-[439px]">
          <img
            src={Phone}
            alt="Crypto Phone"
            className=" border rounded-[12px] md:ml-4"
          />
        </div>

        <div className="flex flex-col md:mx-6">
          <div className="w-[324px] md:w-[557px] mb-2 md:h-[114px] font-bold text-3xl md:text-5xl">
            You have the <font color="#057D99">best hands</font> handling your
            funds.
          </div>
          <div className="w-[340px] md:w-[598px] md:h-[207px] text-sm md:text-base font-semibold md:mx-2 md:my-4 py-4">
            We are dedicated in the cryptocurrency industry, with outstanding
            technology of bitcoin trading and bitcoin mining. Since we came into
            existence, our role is to offer each person the chance to attend the
            bitcoin related business and earn profit easily with our powerful
            investment sytem.
          </div>
        </div>
      </div>
      {/* Trust */}
      <div className="flex flex-col items-center justify-center w-full h-[976px] md:h-[840px] bg-[#f6fdff] my-10">
        <div className="w-[238px] md:w-[570px] md:h-[57px] font-bold text-3xl md:text-5xl text-center">
          Why should you <font color="#057D99">trust us</font>?
        </div>
        <div className="hidden md:block w-[515px] h-[46px] text-center font-semibold text-base">
          We see it as our responsibility to invest for everyone's tomorrow.
          That means doing the right thing for our clients and for others too.
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between my-10">
          <div className="w-[366px] md:w-[496px] h-[366px] md:h-[496px] border border-[#057D99] rounded-[12px] flex flex-col pl-10 md:pl-20">
            <div className="w-[91px] md:w-[123px] h-[91px] md:h-[123px] bg-[#057D99] border rounded-full text-center md:text-6xl text-white font-semibold flex items-center justify-center relative top-10">
              <TbHeartHandshake size={40} />
            </div>
            <div className="relative top-14 md:top-24 w-[208px] md:w-[282px] h-[17px] md:h-[23px] font-bold text-2xl md:text-3xl uppercase text-[#057D99]">
              collaboration
            </div>
            <div className="w-[265px] md:w-[360px] font-semibold text-base relative top-20 md:top-32">
              It's through responsible entrepreneurship that we achieve the best
              results for our clients. Our people are trusted to pursue value.
              They know when to change course to preserve it too.
            </div>
          </div>
          <div className="w-[366px] md:w-[496px] h-[366px] md:h-[496px] border border-[#057D99] rounded-[12px] flex flex-col pl-10 md:pl-20 my-6 md:mx-6">
            <div className="w-[91px] md:w-[123px] h-[91px] md:h-[123px] bg-[#057D99] border rounded-full text-center md:text-6xl text-white font-semibold flex items-center justify-center relative top-10">
              <BiBarChartSquare size={40} />
            </div>
            <div className="relative top-14 md:top-24 w-[208px] md:w-[282px] h-[17px] md:h-[23px] font-bold text-2xl md:text-3xl uppercase text-[#057D99]">
              responsibility
            </div>
            <div className="w-[265px] md:w-[360px] font-semibold text-base relative top-20 md:top-32">
              Responsibility demands courage. We are not afraid to ask difficult
              questions or make changes that need to be made. We stand up for
              what's right, accepting that this can be challenging sometimes.
            </div>
          </div>
        </div>
      </div>
      {/* Trust */}
      {/* Strategy */}
      <div className="w-full flex flex-col-reverse md:flex-row bg-red-700">
        <div className="flex flex-col bg-[#0a4f60] items-center justify-center">
          <div className="w-[190px] md:w-[290px] h-[39px] md:h-[57px] font-bold text-3xl md:text-5xl text-white relative top-2 md:top-0 left-[-75px]">
            Our Strategy
          </div>
          <div className="text-white text-sm md:text-base font-semibold w-[334px] md:w-[608px] h-[361px] md:h-[299px] md:px-20 relative top-2 md:top-0">
            Our commitment to be a leader in responsible business (RB) stems
            from our purpose in society. It is core to our business. Thinking,
            acting and investing responsibly not only shapes what we do but how
            we do it. We will actively manage your portfolio to ensure it
            remains appropriate for the ever-changing conditions in the global
            economy and financial markets. We will also be responsible for
            making any adjustments if your personal situation or objectives
            change.
            <br />
            <br /> A diversified investment strategy (sometimes called a
            “balanced portfolio” or “multi-asset portfolio”) that combines
            different assets can be one of the best ways to preserve and enhance
            wealth over the long term. This approach can provide exposure to a
            wide set of investment opportunities and reduce losses when market
            conditions are challenging.
          </div>
        </div>
        <div className="w-full">
          <img src={Strategy} alt="Strategy Session" />
        </div>
      </div>
      {/* Strategy */}
      {/* Investment Plans */}
      <div className="w-full h-full my-10">
        <div className="font-bold text-3xl md:text-5xl flex items-center justify-center">
          Our <font color="#057d99">Investment Plans</font>
          {/* Our <font color="#057d99">Investment Plans</font> */}
        </div>
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
      {/* Investment Plans */}
      {/* Investors */}
      <div className="w-full h-[521px] md:h-[478px] flex flex-col items-center justify-center my-10">
        <div className="flex items-center">
          <div className="w-[70px] md:w-[231px] h-0 border border-[#057d99]"></div>
          <div className="w-[290px] md:w-[714px] h-[76px] md:h-[57px] font-bold text-3xl md:text-5xl md:ml-8 text-center">
            What our <font color="#057d99">investors</font> have to say.
          </div>
          <div className="w-[70px] md:w-[231px] h-0 border border-[#057d99]"></div>
        </div>
        <div className="flex flex-col md:flex-row">

        </div>
      </div>
      {/* Investors */}
      {/* Subscribe */}
      <div className="w-full h-[392px] md:h-[375px] bg-[#f6fdff] flex flex-col items-center justify-center">
        <div className="w-[238px] md:w-[646px] h-[76px] md:h-[57px] font-bold text-3xl md:text-5xl text-center">
          Subscribe to our <font color="#057d99">Newsletter</font>
        </div>
        <div className="w-[268px] md:w-[515px] h-[32px] md:h-[23px] text-sm md:text-base text-center">
          Stay up-to-date with our latest trends. Enter your e-mail to
          subscribe.
        </div>
        <div className="flex flex-col md:flex-row md:w-[670px] h-20 md:h-[60px] md:border md:border-[#057d99] rounded-[5px] my-10">
          <input
            placeholder="E-mail"
            className="w-[382px] md:w-[518px] h-[56px] p-2"
          />
          <button className="w-[382px] md:w-[152px] h-[56px] bg-[#057d99] border rounded-[5px] text-white uppercase text-base mt-10 md:mt-0">
            subscribe
          </button>
        </div>
      </div>
      {/* Subscribe */}
      <Footer />
    </>
  );
};

export default LandingPage;

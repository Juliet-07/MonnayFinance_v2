import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Phone from "../assets/monnayHome.jpg";
import { TbHeartHandshake } from "react-icons/tb";
import { BiBarChartSquare } from "react-icons/bi";
import Strategy from "../assets/monnayStrategy.png";

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
          <div className="w-[340px] md:w-[598px] mb-2 md:h-[207px] text-sm md:text-base font-semibold">
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
      <div className="w-full flex flex-col-reverse md:flex-row">
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
        <div>
          <img src={Strategy} alt="Strategy Session" />
        </div>
      </div>
      {/* Strategy */}
      {/* Investment Plans */}
      {/* Investment Plans */}
    </>
  );
};

export default LandingPage;

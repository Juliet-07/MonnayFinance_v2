import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Phone from "../assets/monnayHome.jpg";
import { TbHeartHandshake } from "react-icons/tb";
import { BiBarChartSquare } from "react-icons/bi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import Strategy from "../assets/monnayStrategy.png";
import Footer from "../components/Footer";

const LandingPage = () => {
  const plans = [
    {
      title: "Basic",
      subTitle: "2% ROI Daily",
      list: [
        {
          id: 1,
          text: "Profit withdrawal: Active daily",
        },
        {
          id: 2,
          text: "Capital withdrawal: $100",
        },
        {
          id: 3,
          text: "Minimum investment: $100",
        },
        {
          id: 4,
          text: "Maximum investment: $4,999",
        },
        {
          id: 5,
          text: "Daily profit range: $2 - $99.98",
        },
        {
          id: 6,
          text: "Referral bonus: 5% 3% 1%",
        },
      ],
    },
    {
      title: "Standard",
      subTitle: "",
      list: [
        {
          id: 1,
          text: "Profit withdrawal: Active daily",
        },
        {
          id: 2,
          text: "Capital withdrawal: $100",
        },
        {
          id: 3,
          text: "Minimum investment: $100",
        },
        {
          id: 4,
          text: "Maximum investment: $4,999",
        },
        {
          id: 5,
          text: "Daily profit range: $2 - $99.98",
        },
        {
          id: 6,
          text: "Referral bonus: 5% 3% 1%",
        },
      ],
    },
    {
      title: "Platinum",
      subTitle: "",
      list: [
        {
          id: 1,
          text: "Profit withdrawal: Active daily",
        },
        {
          id: 2,
          text: "Capital withdrawal: $100",
        },
        {
          id: 3,
          text: "Minimum investment: $100",
        },
        {
          id: 4,
          text: "Maximum investment: $4,999",
        },
        {
          id: 5,
          text: "Daily profit range: $2 - $99.98",
        },
        {
          id: 6,
          text: "Referral bonus: 5% 3% 1%",
        },
      ],
    },
  ];
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

        <div className="flex flex-col md:ml-10">
          <div className="font-primaryBold text-3xl md:text-5xl leading-10">
            You have the <font color="#057D99">best hands</font> <br />
            handling your funds.
          </div>
          <div className="w-[340px] md:w-[598px] md:h-[207px] text-sm md:text-base font-primarySemibold md:mx-2 md:my-4 py-4">
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
        <div className="font-primaryBold text-3xl md:text-5xl text-center my-4">
          Why should you <font color="#057D99">trust us</font>?
        </div>
        <div className="hidden md:block w-[515px] h-[46px] text-center font-primarySemibold text-base">
          We see it as our responsibility to invest for everyone's tomorrow.
          That means doing the right thing for our clients and for others too.
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between my-10">
          <div className="w-[366px] md:w-[496px] h-[366px] md:h-[496px] border border-[#057D99] rounded-[12px] flex flex-col pl-10 md:pl-20">
            <div className="w-[91px] md:w-[123px] h-[91px] md:h-[123px] bg-[#057D99] border rounded-full text-center md:text-6xl text-white font-semibold flex items-center justify-center relative top-10">
              <TbHeartHandshake size={40} />
            </div>
            <div className="relative top-14 md:top-24 w-[208px] md:w-[282px] h-[17px] md:h-[23px] font-primaryBold text-2xl md:text-3xl uppercase text-[#057D99]">
              collaboration
            </div>
            <div className="w-[265px] md:w-[360px] font-primarySemibold text-base relative top-20 md:top-32">
              It's through responsible entrepreneurship that we achieve the best
              results for our clients. Our people are trusted to pursue value.
              They know when to change course to preserve it too.
            </div>
          </div>
          <div className="w-[366px] md:w-[496px] h-[366px] md:h-[496px] border border-[#057D99] rounded-[12px] flex flex-col pl-10 md:pl-20 my-6 md:mx-6">
            <div className="w-[91px] md:w-[123px] h-[91px] md:h-[123px] bg-[#057D99] border rounded-full text-center md:text-6xl text-white font-semibold flex items-center justify-center relative top-10">
              <BiBarChartSquare size={40} />
            </div>
            <div className="relative top-14 md:top-24 w-[208px] md:w-[282px] h-[17px] md:h-[23px] font-primaryBold text-2xl md:text-3xl uppercase text-[#057D99]">
              responsibility
            </div>
            <div className="w-[265px] md:w-[360px] font-primarySemibold text-base relative top-20 md:top-32">
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
        <div className="md:w-[50%] flex flex-col bg-[#0a4f60] items-center justify-center">
          <div className="font-primaryBold text-3xl md:text-5xl text-white relative top-2 md:top-0 left-[-75px] py-4">
            Our Strategy
          </div>
          <div className="text-white text-sm font-primarySemibold w-[334px] md:w-[608px] md:px-10 leading-10 pb-4">
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
        <div className="md:w-[50%]">
          <img src={Strategy} className="w-full" alt="Strategy Session" />
        </div>
      </div>
      {/* Strategy */}
      {/* Investment Plans */}
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
      {/* Investment Plans */}
      {/* Investors */}
      <div className="w-full h-[521px] md:h-[478px] flex flex-col items-center justify-center my-10">
        <div className="flex items-center">
          <div className="w-[70px] md:w-[231px] h-0 border border-[#057d99]"></div>
          <div className="w-[300px] md:w-[800px] h-[76px] md:h-[57px] font-primaryBold text-3xl md:text-5xl md:ml-8 text-center">
            What our <font color="#057d99">investors</font> have to say.
          </div>
          <div className="w-[70px] md:w-[231px] h-0 border border-[#057d99]"></div>
        </div>
        <div className="flex flex-col md:flex-row mt-14">
          <div className="w-[325px] md:w-[590px] h-[177px] md:h-[292px] rounded-md md:rounded-lg bg-white shadow-xl mb-10 md:mr-10 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#057D99] text-left text-2xl md:text-6xl relative -left-[110px] md:-left-[170px]">
                <RiDoubleQuotesL />
              </div>
              <div className="w-[200px] md:w-[298px] h-[54px] md:h-[110px] font-primarySemibold text-[8px] leading-[13.35px] md:text-base text-black">
                A broad range of excellent investment opportunities and high
                quality events. The team at Monnay Finance are highly
                professional and they’ve helped build my portfolio.
              </div>
              <div className="font-primaryBold text-xs md:text-xl text-right mt-2 md:mt-[29px] relative left-12">
                Tony Angelo
              </div>
            </div>
          </div>
          <div className="w-[325px] md:w-[590px] h-[177px] md:h-[292px] rounded-md md:rounded-lg bg-white shadow-xl flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#057D99] text-left text-2xl md:text-6xl relative -left-[110px] md:-left-[170px]">
                <RiDoubleQuotesL />
              </div>
              <div className="w-[200px] md:w-[298px] h-[54px] md:h-[110px] font-primarySemibold text-[8px] leading-[13.35px] md:text-base text-black">
                A broad range of excellent investment opportunities and high
                quality events. The team at Monnay Finance are highly
                professional and they’ve helped build my portfolio.
              </div>
              <div className="font-primaryBold text-xs md:text-xl text-right mt-2 md:mt-[29px] relative left-12">
                Tony Angelo
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Investors */}
      {/* Subscribe */}
      <div className="w-full h-[392px] md:h-[375px] bg-[#f6fdff] flex flex-col items-center justify-center">
        <div className="font-primaryBold text-3xl md:text-5xl text-center">
          Subscribe to our <font color="#057d99">Newsletter</font>
        </div>
        <div className="text-sm md:text-base text-center font-primaryRegular py-4">
          Stay up-to-date with our latest trends. Enter your e-mail to
          subscribe.
        </div>
        <div className="flex flex-col md:flex-row md:w-[670px] h-20 md:h-[60px] md:border md:border-[#057d99] rounded-[5px] my-10">
          <input
            placeholder="E-mail"
            className="w-[382px] md:w-[518px] h-[56px] p-2"
          />
          <button className="w-[382px] md:w-[152px] h-[56px] bg-[#057d99] border rounded-[5px] text-white uppercase text-base mt-10 md:mt-0 p-4 md:p-0">
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

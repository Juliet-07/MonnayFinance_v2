import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron1 from "../components/Jumbotron1";
import Footer from "../components/Footer";
import CEO from "../assets/ceo.jpeg";

const About = () => {
  return (
    <>
      <Navbar />
      <Jumbotron1 title="About us" />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="flex-row ">
          <div className="grid md:grid-cols-3 gap-10 mt-0 md:mt-20">
            <div className="w-[377px] h-[278px] md:h-[336px] rounded-lg shadow-xl bg-[#ffffff]">
              <div className="flex flex-col mt-6 md:mt-10">
                <div className="w-[194px] h-[57px] text-[#057d99] font-bold text-3xl mt-10 ml-8">
                  Who are we?
                </div>
                <div className="w-[312px] border border-[#057d99] ml-8"></div>
                <div className="w-[281px] h-[104px] font-semibold text-base mt-5 ml-8">
                  We are an investment company, offering and trading
                  crypto-based assets and other financial instruments for
                  investors.
                </div>
              </div>
            </div>
            <div className="w-[377px] h-[278px] md:h-[336px] rounded-lg shadow-xl bg-[#ffffff]">
              <div className="flex flex-col mt-6 md:mt-10">
                <div className="w-[240px] h-[57px] text-[#057d99] font-bold text-3xl mt-10 ml-8">
                  Who do we do?
                </div>
                <div className="w-[312px] border border-[#057d99] ml-8"></div>
                <div className="w-[281px] h-[104px] font-semibold text-base mt-5 ml-8">
                  We allocate investor's funds to financial instruments in
                  trading and manage these trades to bring profits for
                  investors.
                </div>
              </div>
            </div>
            <div className="w-[377px] h-[902px] rounded-lg shadow-xl bg-[#ffffff]">
              <div className="flex flex-col mt-6 md:mt-10">
                <div className="w-[208px] h-[57px] text-[#057d99] text-center font-bold text-3xl mt-10 ml-8">
                  Meet our CEO
                </div>
                <div className="w-[312px] border border-[#057d99] ml-8"></div>
                <div className="flex items-center justify-center m-4">
                  <img src={CEO} alt="ceo" className="w-24 h-24 rounded-full" />
                </div>
                <div className="w-[311px] h-[442px] font-semibold text-base ml-8">
                  Pritchard Potts currently sits on the Board of Monnay Finance
                  Limited as Managing Director/Chief Executive Officer. He holds
                  an MBA, with distinction, from The Kellogg School of
                  Management, and a Masters of Engineering Management from The
                  McCormick School of Engineering and Applied Science, at
                  Northwestern University in the USA. He also holds a Bachelor
                  of Commerce (Hons) with a major in Accounting and Finance,
                  from the University of Auckland.
                  <br />
                  <br /> Pritchard has over 20 years’ experience in the Crypto
                  and Investment Industry and has received several awards of
                  excellence from diverse Companies and brokers.
                </div>
                <div className="w-[311px] h-[50px] border border-[#057d99] p-3 text-center text-sm font-normal text-[#057d99] rounded-md ml-8">
                  <a
                    href="https://app.companiesoffice.govt.nz/co/8372576"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Company Certificates
                  </a>
                </div>
                <div className="w-[311px] h-[50px] border border-[#057d99] p-3 text-center text-sm font-normal text-[#057d99] rounded-md mt-4 ml-8">
                  View CEO Awards
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[377px] md:w-[796px] h-[768px] md:h-[482px] relative md:right-[200px] md:bottom-[480px] m-4 md:m-0 rounded-lg shadow-xl bg-[#ffffff]">
          <div className="flex flex-col mt-6 md:mt-10">
            <div className="w-[194px] h-[57px] text-[#057d99] font-bold text-3xl mt-10 ml-8">
              Our Strategy
            </div>
            <div className="w-[312px] md:w-[678px] border border-[#057d99] ml-8"></div>
            <div className="w-[312px] md:w-[678px] h-[576px] md:h-[276px] font-semibold text-base mt-5 ml-8">
              Our commitment to be a leader in responsible business (RB) stems
              from our purpose in society. It is core to our business. Thinking,
              acting and investing responsibly not only shapes what we do but
              how we do it. We will actively manage your portfolio to ensure it
              remains appropriate for the ever-changing conditions in the global
              economy and financial markets. We will also be responsible for
              making any adjustments if your personal situation or objectives
              change.
              <br />
              <br />A diversified investment strategy (sometimes called a
              “balanced portfolio” or “multi-asset portfolio”) that combines
              different assets can be one of the best ways to preserve and
              enhance wealth over the long term. This approach can provide
              exposure to a wide set of investment opportunities and reduce
              losses when market conditions are challenging.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[521px] md:h-[478px] flex flex-col items-center justify-center my-10 bg-[#f6fdff]">
        <div className="flex items-center">
          <div className="w-[70px] md:w-[231px] h-0 border border-[#057d99]"></div>
          <div className="w-[290px] md:w-[714px] h-[76px] md:h-[57px] font-bold text-3xl md:text-5xl md:ml-8 text-center">
            What our <font color="#057d99">investors</font> have to say.
          </div>
          <div className="w-[70px] md:w-[231px] h-0 border border-[#057d99]"></div>
        </div>
        <div className="flex flex-col md:flex-row"></div>
      </div>
      <Footer />
    </>
  );
};

export default About;

import React from "react";
import Footer from "../components/Footer";
import Jumbotron1 from "../components/Jumbotron1";
import Navbar from "../components/Navbar";

const FAQ = () => {
  return (
    <>
      <Navbar />
      <Jumbotron1 title="Frequently Asked Questions" />
      <div className="flex items-center justify-center">
        <div className="grid grid-col md:grid-cols-2 gap-5 mt-0 md:mt-10">
          <div className="flex flex-col w-[395px] md:w-[500px] h-[253px] md:h-[215px] rounded-xl bg-[#ffffff] shadow-xl">
            <div className="h-[61px] bg-[#057d99] rounded-t-md p-4 font-bold text-white text-lg">
              What is Monnay finance?
            </div>
            <div className="w-[343px] md:w-[428px] h-[130px] md:h-[104px] font-semibold text-base my-4 mx-10">
              Our company provides a full investment service focused on the
              bitcoin and cryptocurrency market. We are among the best platforms
              to invest and grow your bitcoin and other cryptocurrency
            </div>
          </div>
          <div className="flex flex-col w-[395px] md:w-[500px] h-[253px] md:h-[215px] rounded-xl bg-[#ffffff] shadow-xl">
            <div className="h-[61px] bg-[#057d99] rounded-t-md p-4 font-bold text-white text-lg">
              How do I create an account?
            </div>
            <div className="w-[343px] md:w-[428px] h-[104px] md:h-[78px] font-semibold text-base my-4 mx-10">
              Registration process is very easy and will take a few moments to
              complete. Simply click the REGISTER button and fill in all the
              required fields. That’s all.
            </div>
          </div>
          <div className="w-[395px] md:w-[500px] h-[384px] md:h-[342px] rounded-xl bg-[#ffffff] shadow-xl">
            <div className="h-[57px] bg-[#057d99] rounded-t-md p-4 font-bold text-white text-lg">
              How do I make a deposit?
            </div>
            <div className="w-[343px] md:w-[428px] h-[260px] md:h-[234px] font-semibold text-base my-4 mx-10">
              To deposit funds in your trading account is quick and simple For
              your convenience you may choose one of the several available
              deposit methods. To make a successful deposit, please follow the
              steps below;
              <br />
              <br />
              <ul className="list-disc">
                <li>Login to your account</li>
                <li>Click on the DEPOSITS button in the DASHBOARD section</li>
                <li>
                  {" "}
                  Choose the deposit option and follow the steps to complete
                  your transaction.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[395px] md:w-[500px] h-[255px] md:h-[194px]rounded-xl bg-[#ffffff] shadow-xl">
            <div className="h-[61px] bg-[#057d99] rounded-t-md p-4 font-bold text-white text-lg">
              How do I make a withdrawal?
            </div>
            <div className="w-[343px] md:w-[428px] h-[104px] md:h-[78px] font-semibold text-base my-6 mx-10">
              To make a withdrawal request click the WITHDRAW button at the top
              center of your Spectraxfinance.com account dashboard and input the
              required details to withdraw.
            </div>
          </div>
          <div className="flex flex-col w-[395px] md:w-[500px] h-[133px] md:h-[128px] rounded-xl bg-[#ffffff] shadow-xl">
            <div className="h-20 md:h-[72px] bg-[#057d99] rounded-t-md p-4 font-bold text-white text-lg">
              What minimum amount can I withdraw from my account balance?
            </div>
            <div className="w-[343px] md:w-[428px] h-[130px] md:h-[104px] font-semibold text-base my-4 mx-10">
              $15
            </div>
          </div>
          <div className="flex flex-col w-[395px] md:w-[500px] h-[169px] md:h-[162px] rounded-xl bg-[#ffffff] shadow-xl relative md:bottom-36">
            <div className="h-20 md:h-[72px] bg-[#057d99] rounded-t-md p-4 font-bold text-white text-lg">
              How long does it take to process my withdrawal?
            </div>
            <div className="w-[343px] md:w-[428px] h-[52px] font-semibold text-base my-4 mx-10">
              Once we receive your withdrawal request we process immediately and
              send to your wallet.
            </div>
          </div>
          <div></div>
          <div className="flex flex-col w-[395px] md:w-[500px] h-[166px] md:h-[162px] rounded-xl bg-[#ffffff] shadow-xl relative md:bottom-36 mb-4 md:mb-0">
            <div className="h-[61px] bg-[#057d99] rounded-t-md p-4 font-bold text-white text-lg">
              Is the company legally registered?
            </div>
            <div className="w-[343px] md:w-[428px] h-[78px] md:h-[52px] font-semibold text-base my-4 mx-10">
              Yes, Monnay Finance is fully registered. You can click{" "}
              <font color="057d99">
                {" "}
                <a
                  href="https://app.companiesoffice.govt.nz/co/8372576"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  here{" "}
                </a>
              </font>{" "}
              to view the registration certificate.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;

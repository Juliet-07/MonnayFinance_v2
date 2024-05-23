import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron1 from "../components/Jumbotron1";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Jumbotron1
        title="Contact Us"
        text="We would love to hear from you. Kindly fill the form below and we'll get back to you within 24hrs"
      />
      <div className="flex items-center justify-center m-4">
        <div className="flex flex-col items-center justify-center w-[500px] h-[612px] shadow-xl rounded-xl m-4 p-4">
          <div className="text-3xl font-primaryBold text-center relative -left-12">
            Contact Form
          </div>
          <div className="w-[400px] h-[450px] flex flex-col items-center justify-center">
            <form>
              <div className="mx-4 mb-4">
                <div>
                  <label className="mb-2 text-sm font-primaryRegular text-[#2d3748]">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                    required
                    // name="username"
                    // value={username}
                    // onChange={handleChange}
                  />
                </div>
              </div>
              <div className="m-4">
                <label className="mb-2 text-sm font-primaryRegular text-[#2d3748]">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                  required
                  // name="password"
                  // value={password}
                  // onChange={handleChange}
                />
              </div>
              <div className="m-4">
                <label className="mb-2 text-sm font-primaryRegular text-[#2d3748]">
                  Message
                </label>
                <textarea
                  className="form-control w-full px-3 py-1.5 text-sm font-primaryRegular text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0"
                  rows="3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-center p-3 text-white text-sm font-primarySemibold bg-[#057D99] w-full h-[48px] border rounded-[5px]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
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

export default Contact;

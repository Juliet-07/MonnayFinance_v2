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
  const courses = [
    {
      bookImage: (
        <img src={Free} className="w-[305.86px] h-[282px]" alt="pdf" />
      ),
      bookTitle: "beginners guide to forex trading. (E-book)",
      price: "free",
      deletedPrice: "$800",
      buttonText: "download",
    },
    {
      bookImage: (
        <img src={Fundamental} className="w-[305.86px] h-[282px]" alt="pdf" />
      ),
      bookTitle: "technical and fundamental analysis. (E-book)",
      price: "$1,999",
      deletedPrice: "$3,999",
      buttonText: "buy now",
    },
    {
      bookImage: (
        <img src={Stock} className="w-[305.86px] h-[282px]" alt="pdf" />
      ),
      bookTitle: "introduction to stocks, bonds & commodities. (E-bok)",
      price: "$4,999",
      deletedPrice: "$6,999",
      buttonText: "buy now",
    },
    {
      bookImage: (
        <img src={Expert} className="w-[305.86px] h-[282px]" alt="pdf" />
      ),
      bookTitle: "developing an expert trading strategy. (E-book)",
      price: "$7,999",
      deletedPrice: "$9,999",
      buttonText: "buy now",
    },
  ];
  return (
    <>
      <Navbar />
      <Jumbotron1 title="Our Courses" />
      <div className="flex items-center justify-center m-10">
        <div className="grid grid-cols md:grid-cols-4 gap-4">
          {courses.map((course) => (
            <div className="w-[270px] h-[448px] border border-[#057d99] rounded-xl">
              <div className="flex flex-col items-center justify-center">
                <div className="w-[250px] h-[250px] m-2">
                  {course.bookImage}
                </div>
                <div className="w-[250px] h-[38px] m-2 uppercase font-primarySemibold text-sm">
                  {course.bookTitle}
                </div>
                <div className="w-[240px] flex items-center justify-between m-2">
                  <div className="flex-col">
                    <p className="uppercase text-[#FC5F00] font-primaryMedium text-sm">
                      {course.price}
                    </p>
                    <p className="text-sm text-[#a9a9a9] font-primaryRegular">
                      <del>{course.deletedPrice}</del>
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
                <div className="w-[248px] h-[50px] rounded-md m-2 bg-[#057d99] text-white flex items-center justify-center p-2 uppercase font-primaryRegular">
                  {course.buttonText}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;

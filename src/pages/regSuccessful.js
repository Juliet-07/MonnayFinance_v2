import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../assets/icon.png";
import { TiTick } from "react-icons/ti";

const RegistrationSuccessful = () => {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[400px] md:w-[500px] h-[570px] flex flex-col items-center justify-center shadow-xl border rounded-[10px]">
          <div>
            <img src={Icon} alt="icon" className="w-10 h-10" />
          </div>
          <div className="w-[156px] h-[156px] flex items-center justify-center m-4 rounded-full border-[#04C150] border-[8px]">
            <TiTick className="text-6xl text-[#04C150]" />
          </div>
          <div className="w-[312px] h-[39px] font-bold text-3xl mx-4">
            Registration Successful
          </div>
          <div className="w-[357px] h-[66px] font-semibold text-base mt-4 text-center">
            Welcome! Your account has been created successfully. Click on the
            log in button to access your account.
          </div>
          <NavLink to="/signin">
            <div className="w-[358px] h-[48px] bg-[#057D99] mt-8 text-center pt-3 text-white">
              Log in
            </div>
          </NavLink>

          <div className="mt-4">
            Go back{" "}
            <font color="#057D99">
              <NavLink to="/">HOME</NavLink>
            </font>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistrationSuccessful;

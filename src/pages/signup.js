import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Icon from "../assets/icon.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const BASE_URI = "https://monnayfinance.online/api";

const Signup = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const initialValues = {
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [details, setDetails] = useState(initialValues);
  const { fullname, username, email, password, confirmPassword } = details;
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handleToggle = () => {
    setSeePassword(!seePassword);
  };
  const confirmToggle = () => {
    setSeeConfirmPassword(!seeConfirmPassword);
  };
  const signup = () => {
    if (password === confirmPassword) {
      try {
        fetch(BASE_URI + "/auth/register", {
          method: "POST",
          body: JSON.stringify({
            fullname: details.fullname,
            username: details.username,
            email: details.email,
            password: details.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response, "what is here");
            alert(response.message);
            navigate("/regsuccessful");
          });
      } catch (err) {
        console.log(err.message);
      }
    }
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[400px] md:w-[500px] flex items-center justify-center bg-white shadow-xl border rounded-[10px] mt-10 mb-8">
          <div className="w-[358px] m-4">
            <div className="flex flex-col items-center justify-center">
              <img src={Icon} alt="icon" className="w-10 h-10" />
              <div className="w-[205px] h-[39px] font-bold text-2xl my-2 text-center">
                Create account
              </div>
            </div>
            <form onSubmit={handleSubmit(signup)}>
              <div className="m-4">
                <div>
                  <label className="mb-2 text-sm font-normal text-[#2d3748]">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                    required
                    name="fullname"
                    value={fullname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="m-4">
                <div>
                  <label className="mb-2 text-sm font-normal text-[#2d3748]">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                    required
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="m-4">
                <div>
                  <label className="mb-2 text-sm font-normal text-[#2d3748]">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                    required
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="m-4 relative">
                <div>
                  <label className="mb-2 text-sm font-normal text-[#2d3748]">
                    Password
                  </label>
                  <input
                    type={seePassword === false ? "password" : "text"}
                    className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                    required
                    name="password"
                    value={password}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-2xl absolute top-[36px] right-5">
                  {seePassword === false ? (
                    <AiFillEye onClick={handleToggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={handleToggle} />
                  )}
                </div>
              </div>
              <div className="m-4 relative">
                <div>
                  <label className="mb-2 text-sm font-normal text-[#2d3748]">
                    Confirm Password
                  </label>
                  <input
                    type={seeConfirmPassword === false ? "password" : "text"}
                    className="w-full h-[48px] border border-[#d1d1d1] rounded-[5px] p-2"
                    required
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-2xl absolute top-[36px] right-5">
                  {seeConfirmPassword === false ? (
                    <AiFillEye onClick={confirmToggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={confirmToggle} />
                  )}
                </div>
              </div>
              <div className="flex items-center m-4">
                <input
                  //   id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#057D99] bg-gray-100 rounded border-gray-300 focus:ring-[#057D99]"
                />
                <label
                  //   for="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember Me
                </label>
              </div>
              <div class="flex items-center m-4">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-[#057D99] bg-gray-100 rounded border-gray-300 focus:ring-[#057D99]"
                />
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree to all{" "}
                  <NavLink to="/aboutus" className="text-[#057D99]">
                    Terms <font color="black">and</font> Privacy Policy
                  </NavLink>
                </label>
              </div>
              <button
                type="submit"
                className="m-2 md:m-4 text-center p-3 text-white text-sm font-bold bg-[#057D99] w-full h-[48px] border rounded-[5px]"
              >
                Create account
              </button>
            </form>
            <div className="text-center text-sm font-normal">
              Already have an account?{" "}
              <NavLink to="/signin">
                <font color="#057D99">Log in</font>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

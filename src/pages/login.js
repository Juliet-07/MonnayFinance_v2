import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Icon from "../assets/icon.png";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const BASE_URI = "https://monnayfinance.online/api";

const Login = () => {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const initialValues = {
    username: "",
    password: "",
  };
  const [details, setDetails] = useState(initialValues);
  const { username, password } = details;
  const [seePassword, setSeePassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };
  const handleToggle = () => {
    setSeePassword(!seePassword);
  };
  const login = () => {
    try {
      fetch(BASE_URI + "/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: details.username,
          password: details.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((user) => {
          console.log(user, "checking user");
          let userDetail = JSON.stringify(user.data);
          localStorage.setItem("Juliet", userDetail);
          alert(user.message);
          navigate("/dashboard");
        });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[400px] md:w-[500px] flex items-center justify-center bg-white shadow-xl border rounded-[10px]">
          <div className="w-[358px] m-4">
            <div className="flex flex-col items-center justify-center">
              <img src={Icon} alt="icon" className="w-10 h-10" />
              <div className="w-[205px] h-[39px] font-bold text-2xl my-2 text-center">
                Log in
              </div>
            </div>
            <form onSubmit={handleSubmit(login)}>
              <div className="m-4">
                <div>
                  <label className="mb-2 text-sm font-normal text-[#2d3748]">
                    Username
                  </label>
                  <input
                    type="text"
                    className="w-full h-[60px] border border-[#d1d1d1] rounded-[5px] p-2"
                    required
                    name="username"
                    value={username}
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
                    className="w-full h-[60px] border border-[#d1d1d1] rounded-[5px] p-2"
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
              <div className="my-4 flex items-center justify-between">
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
                <div className="text-[#057D99]">Forgot Password</div>
              </div>
              <button
                type="submit"
                className="m-2 md:m-4 text-center p-3 text-white text-sm font-bold bg-[#057D99] w-full h-[60px] border rounded-[5px]"
              >
                Log in
              </button>
            </form>
            <div className="text-center text-sm font-normal">
              Don't have an account?{" "}
              <NavLink to="/signup">
                <font color="#057D99">Register</font>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

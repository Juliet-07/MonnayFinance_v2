import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { AiOutlineDollar } from "react-icons/ai";
import Coin from "../assets/monnayCoin.png";
import { BsLink45Deg } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import Chart from "../components/Chart";
import { Translator } from "../components/Translator";
import Chat from "../components/Chatbot";

const Dashboard = () => {
  const [user, setUser] = useState("");
  const [details, setDetails] = useState([]);
  const formatDate = (value) => {
    return moment(value).format("HH:MM A DD, MM, YYYY");
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Juliet"));
    if (user !== null || user !== undefined) {
      setUser(user);
    }
    fetch(`https://monnayfinance.online/api/user/profile/${user.id}`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
        console.log("returns", data);
      });
  }, []);
  const { data = [] } = details;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white w-[353px] lg:w-[1000px] 2xl:w-[1330px] h-[113px] md:h-[95px] flex flex-col md:flex-row items-center justify-between my-10 rounded-xl">
        <div className="font-bold p-2 text-2xl text-[#057D99]">
          Welcome {user.username}
        </div>
        <div className="p-2 text-base">
          <span className="mr-2 text-[#057D99]">Last access:</span>
          {formatDate(user.lastlogin)}
        </div>
      </div>
      <div className="bg-white w-[353px] lg:w-[1000px] 2xl:w-[1330px] h-[165px] flex flex-col md:flex-row items-center justify-between mb-10 rounded-xl border-b-8 border-b-[#057D99]">
        <img
          src={Coin}
          alt="Coin"
          className="w-[450px] 2xl:w-[580px] h-[165px] rounded-xl"
        />
        <div className="flex-col w-[124px] h-[52px]">
          <p className="font-semibold text-sm">Available balance</p>
          <p className="font-bold text-2xl text-[#057D99]">
            $ {data.walletBalance}
          </p>
        </div>
        <div className="flex">
          <Link to="/withdraw">
            <div className="w-[154px] h-[50px] bg-[#057D99] mr-4 rounded-lg p-3 text-center font-normal text-white text-sm uppercase">
              Withdraw
            </div>
          </Link>
          <Link to="/deposit">
            <div className="w-[154px] h-[50px] bg-white mr-8 rounded-lg p-3 text-center font-normal text-[#057D99] text-sm uppercase border border-[#057D99]">
              Deposit
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full grid grid-cols md:grid-cols-4 gap-10">
        <div className="w-[240px] h-[176px] rounded-xl bg-white flex items-center justify-center p-4 border-b-8 border-b-[#057D99]">
          <div className="mr-2 text-5xl text-[#057D99]">
            <AiOutlineDollar />
          </div>
          <div className="flex-col">
            <p className="font-semibold text-sm">Active Investment</p>
            <p className="font-bold text-2xl text-[#057D99]">
              $ {data.activeInvestment}
            </p>
          </div>
        </div>
        <div className="w-[240px] h-[176px] rounded-xl bg-white flex items-center justify-center p-4 border-b-8 border-b-[#FC5F00]">
          <div className="mr-2 text-5xl text-[#FC5F00]">
            <AiOutlineDollar />
          </div>
          <div className="flex-col">
            <p className="font-semibold text-sm">Total Withdrawn</p>
            <p className="font-bold text-2xl text-[#FC5F00]">
              $ {data.totalEarning}
            </p>
          </div>
        </div>
        <div className="w-[240px] h-[176px] rounded-xl bg-white flex items-center justify-center p-4 border-b-8 border-b-[#F1BC19]">
          <div className="mr-2 text-5xl text-[#F1BC19]">
            <AiOutlineDollar />
          </div>
          <div className="flex-col">
            <p className="font-semibold text-sm">Pending Withdrawal</p>
            <p className="font-bold text-2xl text-[#F1BC19]">
              $ {data.pendingWithdrawal}
            </p>
          </div>
        </div>
        <div className="w-[240px] h-[176px] rounded-xl bg-white flex items-center justify-center p-4 border-b-8 border-b-[#04C150]">
          <div className="mr-2 text-5xl text-[#04C150]">
            <AiOutlineDollar />
          </div>
          <div className="flex-col">
            <p className="font-semibold text-sm">Total Earing</p>
            <p className="font-bold text-2xl text-[#04C150]">
              $ {data.totalEarning}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-10">
        <div className="flex-col w-[414px] md:w-[574px] h-[190px] rounded-xl border-b-8 border-b-[#057D99] bg-white py-10 px-6">
          <p className="font-semibold text-[#057D99] text-2xl uppercase">
            refer and earn
          </p>
          <p className="font-semibold text-base text-[#636363]">
            Use the link below to invite your friends
          </p>
          <div className="w-[386px] md:w-[525px] h-10 border  border-[#636363] my-4 px-4 flex items-center justify-between text-sm text-[#636363]">
            <div className="flex items-center">
              <span className="mr-2">
                <BsLink45Deg />
              </span>
              {data.referralLink}
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <FiCopy />
              </span>
              copy
            </div>
          </div>
        </div>
        <Translator />
        {/* <Chart /> */}
        {/* <Chat /> */}
      </div>
    </div>
  );
};

export default Dashboard;

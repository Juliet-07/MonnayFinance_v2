import React, { useState, useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import moment from "moment";
import { Link } from "react-router-dom";

const Investments = () => {
  const [user, setUser] = useState("");
  const [investment, setInvestment] = useState([]);
  const formatDate = (value) => {
    return moment(value).format("HH:MM A DD, MM, YYYY");
  };
  useEffect(() => {
    const fetchInvestmentData = async () => {
      const user = JSON.parse(localStorage.getItem("Juliet"));
      if (user !== null || user !== undefined) {
        setUser(user);
      }
      try {
        await fetch(
          `https://monnayfinance.online/api/investments/${user.id}/active`,
          {
            headers: {
              Authorization:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
              "Content-type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            const response = [...[], ...data?.data];
            console.log({ response });

            setInvestment(response);
            console.log({ investment });
          });
      } catch (err) {
        setInvestment([]);
        console.log(err);
      }
    };
    fetchInvestmentData();
  }, []);
  return (
    <div>
      <div className="w-full max-w-[1330px] h-[64px] rounded-[10px] bg-[#057d99] mb-10 mt-10 p-4 text-white text-2xl font-bold text-center">
        Investment Plans
      </div>
      <div className="w-full h-full my-10">
        <div
          className="flex flex-col md:flex-row items-center justify-center 
        my-10 md:my-20"
        >
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-white flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-[#057d99]">Basic</h2>
            <h4 className="font-bold text-2xl">2% ROI Daily</h4>
            <div className="w-[312px] border border-[#057d99]"></div>
            <div className="w-[294px] h-[312px] m-4 text-lg">
              <ul className="flex flex-col items-center justify-center">
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Profit withdrawal:{" "}
                  <span className="font-bold">Active daily</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Capital withdrawal: <span className="font-bold">After</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Minimun investment: <span className="font-bold">$100</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Maximum investment: <span className="font-bold">$4,999</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Daily profit range:{" "}
                  <span className="font-bold">$2 - $99.98</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Referral bonus: <span className="font-bold">5% 3% 1%</span>
                </li>
              </ul>
            </div>
            <Link to="/invest">
              <div className="w-[277px] h-[50px] bg-[#057d99] border rounded-[5px] text-white text-center text-sm p-4 mt-12 uppercase hover:font-bold hover:bg-[#0A4F60]">
                invest
              </div>
            </Link>
          </div>
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-[#057D99] flex flex-col items-center justify-center text-white mx-[60px] my-[42px] md:my-0">
            <h2 className="text-5xl font-bold">Standard</h2>
            <h4 className="font-bold text-2xl">3.5% ROI Daily</h4>
            <div className="w-[312px] border border-[#ffffff]"></div>
            <div className="w-[294px] h-[312px] m-4 text-lg">
              <ul className="flex flex-col items-center justify-center">
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Profit withdrawal:{" "}
                  <span className="font-bold">Active daily</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Capital withdrawal: <span className="font-bold">After</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Minimun investment: <span className="font-bold">$5,000</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Maximum investment: <span className="font-bold">$14,999</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Daily profit range:{" "}
                  <span className="font-bold">$175 - $524.96</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} />
                  </span>
                  Referral bonus: <span className="font-bold">5% 3% 1%</span>
                </li>
              </ul>
            </div>
            <Link to="/invest">
              <div className="w-[277px] h-[50px] bg-white border rounded-[5px] text-[#057D99] text-center text-sm p-4 mt-12 uppercase hover:font-bold">
                invest
              </div>
            </Link>
          </div>
          <div className="w-[377px] h-[629px] border rounded-[10px] bg-white flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-[#057d99]">Platinum</h2>
            <h4 className="font-bold text-2xl">5% ROI Daily for 3 days</h4>
            <div className="w-[312px] border border-[#057d99]"></div>
            <div className="w-[294px] h-[312px] m-4 text-lg">
              <ul className="flex flex-col items-center justify-center">
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Profit withdrawal:{" "}
                  <span className="font-bold">Active daily</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Capital withdrawal: <span className="font-bold">After</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Minimun investment: <span className="font-bold">$15,000</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Maximum investment:{" "}
                  <span className="font-bold">Unlimited</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Daily profit range: <span className="font-bold">$525</span>
                </li>
                <li className="flex my-4">
                  <span className="mr-2">
                    <IoMdCheckmarkCircleOutline size={30} color="#057d99" />
                  </span>
                  Referral bonus: <span className="font-bold">5% 3% 1%</span>
                </li>
              </ul>
            </div>
            <Link to="/invest">
              <div className="w-[277px] h-[50px] bg-[#057d99] border rounded-[5px] text-white text-center text-sm p-4 mt-12 uppercase hover:font-bold hover:bg-[#0A4F60]">
                invest
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1330px] h-[64px] rounded-[10px] bg-[#057d99] mb-10 mt-10 p-4 text-white text-2xl font-bold">
        Active Investment
      </div>
      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 relative left-[-20px]">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xl text-bold  bg-white">
              <tr>
                <th className="p-2 whitespace-nowrap text-left">Plan</th>
                <th className="p-2 whitespace-nowrap text-left">Amount</th>
                <th className="p-2 whitespace-nowrap text-left">Duration</th>
                <th className="p-2 whitespace-nowrap text-left">Est. Return</th>
                <th className="p-2 whitespace-nowrap text-left">Start Date</th>
                <th className="p-2 whitespace-nowrap text-left">End Date</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {investment.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 whitespace-nowrap">
                    {item?.investmentPlan}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    ${item?.investmentAmount}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {item?.investmentDays} day
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    ${item?.estimatedReturn}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {formatDate(item?.startDate)}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {formatDate(item?.endDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full max-w-[1330px] h-[64px] rounded-[10px] bg-[#057d99] mb-10 mt-10 p-4 text-white text-2xl font-bold">
        Recent Investment
      </div>
      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200 relative left-[-20px]">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xl text-bold bg-white">
              <tr>
                <th className="p-2 whitespace-nowrap text-left">Plan</th>
                <th className="p-2 whitespace-nowrap text-left">Amount</th>
                <th className="p-2 whitespace-nowrap text-left">End Date</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {investment.map((item, index) => (
                <tr key={index}>
                  <td className="p-2 whitespace-nowrap">
                    {item?.investmentPlan}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    ${item?.investmentAmount}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {formatDate(item?.endDate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Investments;

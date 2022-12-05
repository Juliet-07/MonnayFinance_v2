import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white w-[353px] md:w-[1150px] h-[113px] md:h-[95px] flex flex-col md:flex-row items-center justify-between my-10 rounded-xl">
        <div className="font-bold p-2 text-2xl text-[#057D99]">
          Welcome juliet
        </div>
        <div className="p-2 text-base">
          <span className="mr-2 text-[#057D99]">Last access:</span>time of day
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

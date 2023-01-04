import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCamera } from "react-icons/ai";

const invest_uri = "https://monnayfinance.online/api/investment/";

const Invest = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState("");
  const [details, setDetails] = useState([]);
  const initialValues = {
    plan: ["basic", "standard", "platinum"],
    amount: "",
  };
  const [invest, setInvest] = useState(initialValues);
  const { plan, amount } = invest;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvest({ ...invest, [name]: value });
  };
  const Invest = () => {
    try {
      fetch(invest_uri, {
        method: "POST",
        body: JSON.stringify({
          plan: invest.plan,
          amount: invest.amount,
        }),
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
          "Content-type": "application/json;charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (err) {
      console.log(err);
    }
    alert("Amount in balance is insufficient");
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
    <div className="flex items-center justify-center my-10">
      <div className="w-[500px] h-[612px] bg-white rounded-xl">
        <div className="flex flex-col items-center justify-center my-10 mx-4">
          <h1 className="font-bold text-2xl">Invest</h1>
          <p className="text-center px-10">
            Kindly select the plan you wish to invest in and enter the amount to
            invest.
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(Invest)}
            className="flex flex-col items-center justify-center rounded px-10"
          >
            <div className="w-[358px] my-6 flex flex-col items-center">
              <div className="w-full mb-2">
                <label className="text-black text-sm mb-2" htmlFor="grid-state">
                  Plan:
                </label>
                <div>
                  <select
                    name="wallet"
                    className="w-full h-[60px] border border-[#057d99] bg-[#f6fdff] rounded-lg"
                    id="grid-state"
                    onChange={handleChange}
                  >
                    <option value="basic">Basic</option>
                    <option value="standard">Standard</option>
                    <option value="platinum">Platinum</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-[358px] mb-4">
              <div className="flex justify-between mb-2">
                <label className="text-black text-sm" htmlFor="amount">
                  Amount
                </label>
                <label className=" text-gray-500 text-sm" htmlFor="amount">
                  Available Balance: ${data.walletBalance}
                </label>
              </div>
              <input
                className="border border-[#d1d1d1] w-full h-[67px] rounded-lg"
                id="amount"
                name="amount"
                type="number"
                placeholder="$100 - $4,999"
                value={amount}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="w-[350px] h-[48px] text-white font-bold text-sm text-center rounded-lg bg-[#057d99] mt-10"
            >
              Invest
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Invest;

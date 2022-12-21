import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineCamera } from "react-icons/ai";

const withdraw_uri = "https://monnayfinance.online/api/Withdraw";

const Withdraw = () => {
  const initialValues = {
    amount: "",
    wallet: ["btc", "doge", "eth", "usdt"],
    comment: "",
    address: "",
  };
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user, setUser] = useState("");
  const [details, setDetails] = useState([]);
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
  const [withdraw, setWithdraw] = useState(initialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setWithdraw({ ...withdraw, [name]: value });
  };
  const { amount, wallet, comment, address } = withdraw;
  const withdrawal = () => {
    try {
      if (
        fetch(withdraw_uri, {
          method: "POST",
          body: JSON.stringify({
            amount: withdraw.amount,
            wallet: withdraw.wallet,
            hash: withdraw.hash,
          }),
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTgsInByaXZpbGVnZSI6InVzZXIiLCJ0b2tlbiI6Ijg5NGUzNDQzYjYzYzkyOTMiLCJpYXQiOjE2NTkwMDcxMjl9.oYKsguhTfAdWOZlURIJ3VIXZT0bX6UGNDpVrlKkhXEc",
            "Content-type": "application/json;charset=UTF-8",
          },
        })
          .then((res) => res.json())
          .then((json) => console.log(json))
      )
        alert("Amount in balace is insufficient");
      // router.push("/WithdrawConfirm");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[500px] h-[757px] bg-white rounded-xl">
        <div className="flex flex-col items-center justify-center my-10 mx-4">
          <h1 className="font-bold text-2xl ">Withdraw</h1>
          <p>Choose the account to make your withdrawal.</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(Withdraw)}
            className="flex flex-col items-center justify-center rounded px-10"
          >
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
                value={amount}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-[358px] my-6 flex flex-col items-center">
              <div className="w-full flex items-center mb-2">
                <label className="text-black text-sm mr-2" htmlFor="grid-state">
                  Wallet address:
                </label>
                <div>
                  <select
                    name="wallet"
                    className="block w-[95px] h-10 border border-[#057d99] bg-[#f6fdff] rounded-lg"
                    id="grid-state"
                    onChange={handleChange}
                  >
                    <option value="btc">Btc</option>
                    <option value="doge">Doge</option>
                    <option value="eth">Eth</option>
                    <option value="usdt">Usdt</option>
                  </select>
                </div>
              </div>
              <input
                name="address"
                className="border border-[#d1d1d1] w-full h-[67px] rounded-lg"
                type="text"
                value={address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-[358px] mb-4">
              <label className="text-black text-sm mr-2" htmlFor="comment">
                Wallet address:
              </label>
              <textarea
                className="border border-[#d1d1d1] w-full h-[134px] rounded-lg"
                id="comment"
                name="comment"
                type="number"
                value={comment}
                rows={7}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-[350px] h-[50px] text-white font-bold text-sm text-center rounded-lg bg-[#057d99] mt-10"
            >
              Withdraw
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;

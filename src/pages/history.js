import React, { useState, useEffect } from "react";
import moment from "moment";

const History = () => {
  const [user, setUser] = useState("");
  const [transactions, setTransactions] = useState([]);
  const formatDate = (value) => {
    return moment(value).format("HH:MM A DD, MM, YYYY");
  };
  const getType = (type) => {
    let typeClass;
    switch (type) {
      case "deposit":
        typeClass = "capitalize text-[#057d99]";
        break;

      case "withdrawal":
        typeClass = "capitalize text-[#fc5f00]";
        break;

      // default: //pending
      //   typeClass = "text-warning";
      //   break;
    }
    return typeClass;
  };
  const getStatus = (status) => {
    let statusClass;
    switch (status) {
      case "approved":
        statusClass = "capitalize text-[#04c150]";
        break;

      case "failed":
        statusClass = "capitalize text-danger";
        break;

      default: //pending
        statusClass = "capitalize text-warning";
        break;
    }
    return statusClass;
  };
  useEffect(() => {
    const fetchTransactionData = async () => {
      const user = JSON.parse(localStorage.getItem("Juliet"));
      if (user !== null || user !== undefined) {
        setUser(user);
      }
      try {
        await fetch(
          `https://monnayfinance.online/api/transactions/${user.id}`,
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

            setTransactions(response);
            console.log({ transactions });
          });
      } catch (err) {
        setTransactions([]);
        console.log(err);
      }
    };
    fetchTransactionData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-[1330px] h-[64px] rounded-[10px] bg-[#057d99] mb-10 mt-10 p-4 text-white text-2xl font-bold">
          Transaction History
        </div>
        <div className="w-full max-w-[1330px] bg-white shadow-lg rounded-[10px] relative p-2">
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead className="text-xl text-bold">
                <tr>
                  <th className="p-2 whitespace-nowrap text-left">
                    Transaction Type
                  </th>
                  <th className=" p-2 whitespace-nowrap ">Amount</th>
                  <th className=" p-2 whitespace-nowrap">Date</th>
                  <th className=" p-2 whitespace-nowrap">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {transactions.length > 0 &&
                  transactions.map((item, index) => (
                    <tr key={index}>
                      <td className={getType(item?.type)}>{item?.type}</td>
                      <td className="p-2 whitespace-nowrap">${item?.amount}</td>
                      <td className="p-2 whitespace-nowrap">
                        {formatDate(item?.date)}
                      </td>
                      <td className={getStatus(item?.transactionStatus)}>
                        {item?.transactionStatus}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default History;

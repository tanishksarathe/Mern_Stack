import React, { useState } from "react";
import CountryData from "../assets/CountryData.json";
import toast from "react-hot-toast";
import axios from "axios";

const Currency = () => {
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  const [fromAmt, setFromAmt] = useState();
  const [toAmt, setToAmt] = useState();

  // console.log(CountryData);

  const convert = async () => {
    if (!from || !to || !fromAmt) {
      toast.error("Some fields are vacant");
    }

    try {
      const res = await axios.get(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from
          .split(" ")[0]
          .toLowerCase()}.json`
      );

      console.log(res.data);

      setToAmt(
        fromAmt *
          res.data[from.split(" ")[0].toLowerCase()][
            to.split(" ")[0].toLowerCase()
          ]
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const swap = async() => {
    
    let temp = from;
    setFrom(to);
    setTo(temp);

  };

  return (
    <div className="bg-amber-50 h-screen w-screen p-10">
      <div className="w-6xl grid grid-cols-2 bg-white rounded mx-auto shadow border p-3">
        <div className="flex flex-col">
          <div className="flex gap-5">
            {from && (
              <img
                src={`https://flagsapi.com/${from.split(" ")[1]}/flat/64.png`}
                alt="flags"
              />
            )}
            <select
              name="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="border px-5 py-3 w-1/2 rounded-2xl overflow-hidden"
            >
              <option value="">Select Country</option>
              {CountryData.map((country, index) => (
                <option
                  value={country.currency_code + " " + country.country_code}
                  key={index}
                >
                  {country.country_name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-5 justify-center items-center mt-5">
            <label htmlFor="fromAmt">Amount</label>
            <input
              type="text"
              name="fromAmt"
              value={fromAmt}
              onChange={(e) => setFromAmt(e.target.value)}
              className="border rounded-2xl p-2"
              placeholder="Enter the amount to convert"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-5">
            {to && (
              <img
                src={`https://flagsapi.com/${to.split(" ")[1]}/flat/64.png`}
                alt="flags"
              />
            )}
            <select
              name="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="border px-5 py-3 w-1/2 rounded-2xl overflow-hidden"
            >
              <option value="">Select Country</option>
              {CountryData.map((country, index) => (
                <option
                  value={country.currency_code + " " + country.country_code}
                  key={index}
                >
                  {country.country_name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-5 justify-center items-center mt-5">
            <label htmlFor="toAmt">Amount</label>
            <input
              type="text"
              name="toAmt"
              defaultValue={toAmt}
              className="border rounded-2xl p-2"
              placeholder="Required Answer"
            />
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <button
            className="border p-3 shadow rounded-2xl bg-blue-600 font-bold text-white"
            onClick={convert}
          >
            Convert
          </button>
          <button
            className="border p-3 shadow rounded-2xl bg-blue-600 font-bold text-white"
            onClick={swap}
          >
            Swap Currency
          </button>
        </div>
      </div>
    </div>
  );
};

export default Currency;

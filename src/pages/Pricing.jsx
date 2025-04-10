import React, { useState } from "react";
import CheckBoxSVG from "../components/checkBoxSVG";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState("annually");

  return (
    <>
      <Header />
      <div>
        <div className="w-full flex justify-center items-center bg-gray-100 flex-col">
          <div className="border border-black p-2 mt-12">
            <small className="text-black mb-0">OUR PLANS</small>
          </div>
          <div className="mt-3">
            <p className="text-2xl text-black font-bold mb-0">
              Plans for Your Need
            </p>
          </div>
          <div>
            <small className="text-black font-medium">
              Select from best plan, ensuring a perfect match!
            </small>
          </div>
          <div className="relative flex border border-black rounded-full items-center justify-center my-4">
            <div
              className={`absolute w-1/2 h-full rounded-full transition-all duration-300 ${
                selectedOption === "monthly"
                  ? "left-0 bg-black"
                  : "left-1/2 bg-black"
              }`}
            ></div>
            <input
              type="radio"
              className="sr-only"
              name="options"
              id="option1"
              checked={selectedOption === "monthly"}
              onChange={() => setSelectedOption("monthly")}
            />
            <label
              className={`${
                selectedOption === "monthly" ? "text-white" : "text-black"
              } px-4 py-2 cursor-pointer z-10`}
              htmlFor="option1"
            >
              Monthly
            </label>
            <input
              type="radio"
              className="sr-only"
              name="options"
              id="option2"
              checked={selectedOption === "annually"}
              onChange={() => setSelectedOption("annually")}
            />
            <label
              className={`${
                selectedOption === "annually" ? "text-white" : "text-black"
              } px-4 py-2 cursor-pointer z-10`}
              htmlFor="option2"
            >
              Annually
            </label>
          </div>

          {/* MONTHLY PRICING */}
          {selectedOption === "monthly" && (
            <div className="text-black mt-12 flex flex-row w-full justify-around mb-8 flex-wrap gap-6 px-4">
              <div className="Basic flex flex-col p-6 border rounded-xl bg-white w-full max-w-sm">
                <div className="text-left">
                  <h3 className="text-xl font-semibold">Basic</h3>
                  <p className="mt-7">Best for beginners!</p>
                </div>
                <div className="flex flex-row mt-7 items-center">
                  <h1 className="text-3xl font-bold mr-2">$17</h1>
                  <small>/ per month</small>
                </div>
                <div className="my-15 text-center">
                  <Link
                    to="/signup"
                    className="inline-block bg-white border border-black text-black rounded-xl font-semibold py-2 w-full text-center hover:bg-black hover:text-white transition-colors duration-200 active:bg-black active:text-white"
                  >
                    Signup Now
                  </Link>
                </div>
                <div className="features text-left">
                  <p className="font-semibold mb-2">Features</p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Intraday momentum analysis
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Sectoral flows and sentiment insights (S&P,
                    NASDAQ, DOW).
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Momentum spike setup in 15 minutes.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> High volume stocks updated every 15 minutes.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Perfect for beginners and casual traders.
                  </p>
                </div>
              </div>

              <div className="Pro flex flex-col p-6 rounded-xl bg-black text-white relative w-full max-w-sm">
                <div className="absolute top-0 right-0 px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-bl-md">
                  Recommended
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">Pro</h3>
                  <p className="mt-7">Best for Advanced Traders!</p>
                </div>
                <div className="flex flex-row mt-7 items-center">
                  <h1 className="text-3xl font-bold mr-2">$35</h1>
                  <small>/ per month</small>
                </div>
                <div className="my-15 text-center">
                  <Link
                    to="/signup"
                    className="inline-block bg-white border border-white text-black rounded-xl font-semibold py-2 w-full text-center hover:bg-black hover:text-white transition-colors duration-200 active:bg-black active:text-white"
                  >
                    Signup Now
                  </Link>
                </div>
                <div className="features text-left">
                  <p className="font-semibold mb-4">
                    Features (Includes Basic Features) +
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Real-time updates
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Advanced options and futures analytics.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Sentiment dashboards and PCR insights.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Exclusive newsletters with curated tips.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Ideal for active traders looking for an
                    edge.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Momentum spike setup in 5-15 minutes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ANNUALLY PRICING */}
          {selectedOption === "annually" && (
            <div className="mt-12 flex flex-row w-full justify-around mb-8 flex-wrap gap-6 px-4">
              <div className="Basic text-black flex flex-col p-6 border rounded-xl bg-white w-full max-w-sm">
                <div className="text-left">
                  <h3 className="text-xl font-semibold">Basic</h3>
                  <p className="font-semibold my-4">Paid $144 Annually</p>
                  <p>Best for beginners!</p>
                </div>
                <div className="flex flex-row mt-6 items-center">
                  <h1 className="text-3xl font-bold mr-2">$12</h1>
                  <small>/ per month</small>
                </div>
                <div className="my-15 text-center">
                  <Link
                    to="/signup"
                    className="inline-block bg-white border border-black text-black rounded-xl font-semibold py-2 w-full text-center hover:bg-black hover:text-white transition-colors duration-200 active:bg-black active:text-white"
                  >
                    Signup Now
                  </Link>
                </div>
                <div className="features text-left">
                  <p className="font-semibold mb-4">Features</p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Intraday momentum analysis
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Sectoral flows and sentiment insights (S&P,
                    NASDAQ, DOW).
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Momentum spike setup in 15 minutes.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> High volume stocks updated every 15 minutes.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Perfect for beginners and casual traders.
                  </p>
                </div>
              </div>

              <div className="Pro flex flex-col p-6 rounded-xl bg-black text-white relative w-full max-w-sm">
                <div className="absolute top-0 right-0 px-2 py-1 bg-yellow-400 text-black text-xs font-bold rounded-bl-md">
                  Recommended
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold">Pro</h3>
                  <p className="font-semibold my-4">Paid $276 Annually</p>
                  <p>Best for Advanced Traders!</p>
                </div>
                <div className="flex flex-row mt-6 items-center">
                  <h1 className="text-3xl font-bold mr-2">$23</h1>
                  <small>/ per month</small>
                </div>
                <div className="my-15 text-center">
                  <Link
                    to="/signup"
                    className="inline-block bg-white border border-white text-black rounded-xl font-semibold py-2 w-full text-center hover:bg-black hover:text-white transition-colors duration-200 active:bg-black active:text-white"
                  >
                    Signup Now
                  </Link>
                </div>
                <div className="features mt-6 text-left">
                  <p className="font-semibold mb-4">
                    Features (Includes Basic Features) +
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Real-time updates
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Advanced options and futures analytics.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Sentiment dashboards and PCR insights.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Exclusive newsletters with curated tips.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Ideal for active traders looking for an
                    edge.
                  </p>
                  <p className="flex items-center text-sm mb-4">
                    <CheckBoxSVG /> Momentum spike setup in 5–15 minutes.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

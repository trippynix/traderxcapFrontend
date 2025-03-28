import React, { useState } from "react";
import { Checkmark } from "react-checkmark";
import "../styles/Pricing.css";
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
        <div className="Pricing container-fluid d-flex justify-content-center align-items-center bg-light flex-column">
          <div className="border border-dark border-1 p-2 mt-5">
            <small className="mb-0">OUR PLANS</small>
          </div>
          <div className="mt-3">
            <p className="heading fw-bolder mb-0">Plans for Your Need</p>
          </div>
          <div>
            <small className="fw-medium">
              Select from best plan, ensuring a perfect match!
            </small>
          </div>
          <div className="toggle-container">
            <div
              className={`slider ${
                selectedOption === "monthly" ? "left" : "right"
              }`}
            ></div>
            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option1"
              autoComplete="off"
              checked={selectedOption === "monthly"}
              onChange={() => setSelectedOption("monthly")}
            />
            <label className="btn-label" htmlFor="option1">
              Monthly
            </label>

            <input
              type="radio"
              className="btn-check"
              name="options"
              id="option2"
              autoComplete="off"
              checked={selectedOption === "annually"}
              onChange={() => setSelectedOption("annually")}
            />
            <label className="btn-label" htmlFor="option2">
              Annually
            </label>
          </div>

          {/* // MONTHLY PRICING ---------------------------- */}
          {selectedOption === "monthly" && (
            <div className="mt-5 d-flex flex-row w-100 justify-content-around mb-4">
              <div className="Basic d-flex flex-col card rounded-3">
                <div className="text-align-left">
                  <h3>Basic</h3>
                  <p className="underType mt-3">Best for beginners!</p>
                </div>
                <div className="d-flex flex-row mt-5 align-items-center">
                  <h1 className="me-3">$17</h1>
                  <small> / per month</small>
                </div>
                <div className="mt-4">
                  <div className="d-grid gap-2 col-12 mx-auto">
                    <Link
                      to={"/signup"}
                      type="submit"
                      className="btn btn-secondary d-flex align-items-center justify-content-center text-dark bg-light border border-dark signUpNow"
                    >
                      Signup Now
                    </Link>
                  </div>
                </div>
                <div className="features mt-5 text-align-left">
                  <p className="fw-semibold mb-2">Features</p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Intraday momentum analysis
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Sectoral flows and sentiment insights (S&P,
                    NASDAQ, DOW).
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Momentum spike setup in 15 minutes.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> High volume stocks updated every 15 minutes.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Perfect for beginners and casual traders.
                  </p>
                </div>
              </div>
              <div className="Pro d-flex flex-col card rounded-3 bg-black text-white position-relative">
                <div className="recommended-box position-absolute">
                  Recommended
                </div>
                <div className="text-align-left">
                  <h3>Pro</h3>
                  <p className="underType mt-3">Best for Advanced Traders!</p>
                </div>
                <div className="d-flex flex-row mt-5 align-items-center">
                  <h1 className="me-3">$35</h1>
                  <small> / per month</small>
                </div>
                <div className="mt-4">
                  <div className="d-grid gap-2 col-12 mx-auto">
                    <Link
                      to={"/signup"}
                      type="submit"
                      className="btn btn-secondary d-flex align-items-center justify-content-center text-dark bg-light border border-light signUpNow"
                    >
                      Signup Now
                    </Link>
                  </div>
                </div>
                <div className="features mt-5 text-align-left">
                  <p className="fw-semibold mb-2">
                    Features (Includes Basic Features) +
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Real-time updates
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Advanced options and futures analytics.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Sentiment dashboards and PCR insights.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Exclusive newsletters with curated tips.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Ideal for active traders looking for an
                    edge.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Momentum spike setup in 5–15 minutes.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* // ANNUALLY PRICING ----------------------- */}
          {selectedOption === "annually" && (
            <div className="mt-5 d-flex flex-row w-100 justify-content-around mb-4">
              <div className="Basic d-flex flex-col card rounded-3">
                <div className="text-align-left">
                  <h3>Basic</h3>
                  <p className="underType fw-semibold">Paid $144 Annually</p>
                  <p className="underType" style={{ marginTop: "-15px" }}>
                    Best for beginners!
                  </p>
                </div>
                <div className="d-flex flex-row mt-5 align-items-center">
                  <h1 className="me-3">$12</h1>
                  <small> / per month</small>
                </div>
                <div className="mt-4">
                  <div className="d-grid gap-2 col-12 mx-auto">
                    <Link
                      to={"/signup"}
                      type="submit"
                      className="btn btn-secondary d-flex align-items-center justify-content-center text-dark bg-light border border-dark signUpNow"
                    >
                      Signup Now
                    </Link>
                  </div>
                </div>
                <div className="features mt-5 text-align-left">
                  <p className="fw-semibold mb-2">Features</p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Intraday momentum analysis
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Sectoral flows and sentiment insights (S&P,
                    NASDAQ, DOW).
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Momentum spike setup in 15 minutes.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> High volume stocks updated every 15 minutes.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Perfect for beginners and casual traders.
                  </p>
                </div>
              </div>

              <div className="Pro d-flex flex-col card rounded-3 bg-black text-white position-relative">
                <div className="recommended-box position-absolute">
                  Recommended
                </div>
                <div className="text-align-left">
                  <h3>Pro</h3>
                  <p className="underType fw-semibold">Paid $276 Annually</p>
                  <p className="underType" style={{ marginTop: "-15px" }}>
                    Best for Advanced Traders!
                  </p>
                </div>
                <div className="d-flex flex-row mt-5 align-items-center">
                  <h1 className="me-3">$23</h1>
                  <small> / per month</small>
                </div>
                <div className="mt-4">
                  <div className="d-grid gap-2 col-12 mx-auto">
                    <Link
                      to={"/signup"}
                      type="submit"
                      className="btn btn-secondary d-flex align-items-center justify-content-center text-dark bg-light border border-light signUpNow"
                    >
                      Signup Now
                    </Link>
                  </div>
                </div>
                <div className="features mt-5 text-align-left">
                  <p className="fw-semibold mb-2">
                    Features (Includes Basic Features) +
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Real-time updates
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Advanced options and futures analytics.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Sentiment dashboards and PCR insights.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Exclusive newsletters with curated tips.
                  </p>
                  <p className="d-flex flex-row align-items-center">
                    <CheckBoxSVG /> Ideal for active traders looking for an
                    edge.
                  </p>
                  <p className="d-flex flex-row align-items-center">
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

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import bullish from "../assets/images/dashboard/black/bullish.svg";
import dataReport from "../assets/images/dashboard/black/data-report.svg";
import assetManagement from "../assets/images/dashboard/black/asset-management.svg";
import financialProfit from "../assets/images/dashboard/black/financial-profit.svg";
import marketReasearch from "../assets/images/dashboard/black/market-research.svg";
import profitGrowth from "../assets/images/dashboard/black/profit-growth.svg";
import sample from "../assets/images/featuresSS/sample.png";
import "../styles/Features.css";
import greenTick from "../assets/images/featuresSS/greenTick.svg";

export default function Features() {
  return (
    <>
      <Header />
      <div>
        <div className="bg-black text-white d-flex justify-content-center flex-column align-items-center pb-5">
          <p className="my-3">Features</p>
          <div className="d-flex flex-row">
            <p style={{ color: "#8677ff" }}>Powerful Features &nbsp;</p>
            <p>That Propel Your &nbsp;</p>
            <p style={{ color: "#8677ff" }}>Trading Forward</p>
          </div>
          <p className="mt-1" style={{ fontSize: "13px" }}>
            Explore an extensive range of tools tailored for day and swing
            traders, combining data, insights, and simplicity to supercharge
            your trading strategies.
          </p>
          <Link
            to={"/pricing"}
            className="getStartedHome rounded-0 text-black btn btn-light d-flex align-items-center mt-2"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right ms-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        </div>
        {/* LINE */}
        <div className="d-flex justify-content-center my-5 d-flex flex-column align-items-center">
          <h4>How Our Platform Helps Traders Succeed</h4>
          <div className="d-flex flex-row justify-content-between my-5">
            <div
              className="card border border-dark mx-3"
              style={{ width: "35%" }}
            >
              <img src={bullish} style={{ height: "70px" }} />
              <p className="fw-medium mt-3" style={{ fontSize: "14px" }}>
                Save Time with Streamlined Analysis.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Eliminate hours spent researching by accessing
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                and sentiment insights all in one place.
              </p>
            </div>
            <div
              className="card border border-dark mx-3"
              style={{ width: "35%" }}
            >
              <img src={dataReport} style={{ height: "70px" }} />
              <p className="fw-medium mt-3" style={{ fontSize: "14px" }}>
                Make Smarter Trading Decisions.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Leverage advanced analytics, such as
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Put-Call Ratios.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                (PCR) and futures data, to gain a deeper understanding of market
                trends.
              </p>
            </div>
            <div
              className="card border border-dark mx-3"
              style={{ width: "35%" }}
            >
              <img src={assetManagement} style={{ height: "70px" }} />
              <p className="fw-medium mt-3" style={{ fontSize: "14px" }}>
                Stay Ahead of the Market.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Real-time updates.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Sectoral heatmaps and drill-down views.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Lets you quickly spot market trends and capitalize on them.
              </p>
            </div>
          </div>
          {/* LINE */}
          <div className="d-flex flex-row justify-content-between my-3">
            <div
              className="card border border-dark mx-3 justify-items-center"
              style={{ width: "35%" }}
            >
              <img src={profitGrowth} style={{ height: "70px" }} />
              <p className="fw-medium mt-3" style={{ fontSize: "14px" }}>
                Powerful Tools at an Affordable Price.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Choose from flexible plans designed to fit your trading needs
                and budget.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                We offer solutions for beginners and professionals alike.
              </p>
            </div>
            <div
              className="card border border-dark mx-3 justify-items-center"
              style={{ width: "35%" }}
            >
              <img src={marketReasearch} style={{ height: "70px" }} />
              <p className="fw-medium mt-3" style={{ fontSize: "14px" }}>
                Sentiment and MoneyFlow Dashboards.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Money Flow Index (MFI) insights for detecting buying or selling
                pressure.
              </p>
            </div>
            <div
              className="card border border-dark mx-3 justify-items-center"
              style={{ width: "35%" }}
            >
              <img src={financialProfit} style={{ height: "70px" }} />
              <p className="fw-medium mt-3" style={{ fontSize: "14px" }}>
                Advanced Options and Futures Analytics.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Real-time options chain data with volatility insights.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                Know exactly where the big players are building positions.
              </p>
              <p className="fw-medium" style={{ fontSize: "14px" }}>
                PCR (Put-Call Ratio) calculators
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex justify-content-center align-items-center">
            <img src={sample} style={{ height: "40vh" }} />
          </div>
          <div className="w-25 my-0 d-flex justify-content-center align-items-center flex-column">
            <p style={{ fontSize: "23px" }}>
              Intraday Momentum{" "}
              <span style={{ color: "#8677ff" }}>Analysis</span>
            </p>

            <p style={{ fontSize: "12px" }}>
              Spot high-performing stocks in real time with our advanced
              momentum detection tools. Analyze price and volume spikes to seize
              trading opportunities as they unfold.
            </p>

            <div className="text-left">
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  High-Volume Stock Detection
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Customizable Filters
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Live Refresh Rates
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Pro Setup
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around mt-5">
          <div className="w-25 my-0 d-flex justify-content-center align-items-center flex-column">
            <p style={{ fontSize: "23px" }}>
              Sectoral Performance{" "}
              <span style={{ color: "#8677ff" }}>Insights</span>
            </p>

            <p style={{ fontSize: "12px" }}>
              Detailed analysis of sector trends and market movements, providing
              valuable insights to identify opportunities and assess performance
              across various industries.
            </p>

            <div className="text-left">
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Sector-wise HeatMaps
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Cross Sector comparisons
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Real-Time Data
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Filtering and Customization
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={sample} style={{ height: "40vh" }} />
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around mt-5">
          <div className="d-flex justify-content-center align-items-center">
            <img src={sample} style={{ height: "40vh" }} />
          </div>
          <div className="w-25 my-0 d-flex justify-content-center align-items-center flex-column">
            <p style={{ fontSize: "23px" }}>
              Sentiment and Money Flow{" "}
              <span style={{ color: "#8677ff" }}>Dashboards</span>
            </p>

            <p style={{ fontSize: "12px" }}>
              Comprehensive dashboards providing insights into market sentiment
              and money flow trends, helping you gauge investor outlook and
              track capital movements for smarter trading decisions.
            </p>

            <div className="text-left">
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Sentiment Analysis
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Money Flow Insights
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Market Psychology Indicators
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Market Psychology Indicators
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row justify-content-around mt-5">
          <div className="w-25 my-0 d-flex justify-content-center align-items-center flex-column">
            <p style={{ fontSize: "23px" }}>
              Options and Futures{" "}
              <span style={{ color: "#8677ff" }}>Analytics</span>
            </p>

            <p style={{ fontSize: "12px" }}>
              Advanced analytics for options and futures markets, empowering
              traders with actionable insights to optimize strategies and manage
              risk effectively.
            </p>

            <div className="text-left">
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Options Data Tracking
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                  }}
                >
                  Open Interest Analysis
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Index Analysis
                </p>
              </div>
              <div className="d-flex flex-row">
                <img className="me-3 mb-2" src={greenTick} />
                <p
                  className="featuresBorder"
                  style={{ fontSize: "15px", marginTop: "10px" }}
                >
                  Put-Call Ratio (PCR)
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={sample} style={{ height: "40vh" }} />
          </div>
        </div>

        <div className="backgroundImage mt-5 bg-black d-flex justify-content-center flex-column py-5">
          <h1 className="text-white mb-0 mt-5 text-center">
            Join the TraderX <span style={{ color: "#8677ff" }}>Advanced</span>{" "}
            Analytics Systems
          </h1>
          <p className="text-white mt-4 text-center">
            Join TraderX Capital today and experience a new era of data driven
            decision making
          </p>
          <p className="text-white mt-2 text-center">
            Let's redefine success{" "}
            <span style={{ color: "#8677ff" }}>together</span>!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

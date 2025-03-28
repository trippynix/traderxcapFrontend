import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import homePageLogo from "../assets/images/logo.svg";
import videoPlaceholder from "../assets/images/videoPlaceholder.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bullish from "../assets/images/dashboard/black/bullish.svg";
import dataReport from "../assets/images/dashboard/black/data-report.svg";
import assetManagement from "../assets/images/dashboard/black/asset-management.svg";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Header />
      <div className="d-flex flex-column">
        <div className="background d-flex justify-content-center align-items-center flex-column">
          <div className="fs-1 text-white fw-light mb-2">TraderX Capital</div>
          <p className="text-white fw-light w-50 mb-4">
            From momentum spikes to Open Interest analysis, we turn market
            complexity into clarity, empowering traders to stay ahead of the
            curve.
          </p>
          <Link
            to={"/pricing"}
            className="getStartedHome rounded-0 text-black btn btn-light d-flex align-items-center"
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
        <div className="bg-black d-flex flex-row justify-content-between py-5">
          <img
            src={homePageLogo}
            className="homePageLogo img-fluid ms-3 mt-3"
            alt="smallLogo"
          />
          <div className="text-white d-flex flex-column w-50 me-3 mt-3 justify-content-center align-items-center">
            <p>
              Our platform is where technology meets trading expertise,
              empowering you to turn insights into action with speed and
              precision
            </p>
            <Link
              to={"/pricing"}
              className="getStartedHome rounded-0 text-black btn btn-light d-flex align-items-center"
              style={{ width: "19%" }}
            >
              See plans
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
        </div>
        <img src={videoPlaceholder} />

        <div className="my-5 d-flex justify-content-center">
          <div className="w-75 p-5">
            <Slider {...settings}>
              <div className="card d-flex justify-content-center py-4 pb-3">
                <img src={bullish} style={{ height: "150px" }} />
                <p>Save Time with Streamlined Analysis</p>
                <p>
                  Eliminate hours spent researching by accessing comprehensive
                  market data and sentiment insights all in one place.
                </p>
                <p>Get the edge you need with real-time market data.</p>
              </div>
              <div className="card d-flex justify-content-center">
                <img src={dataReport} style={{ height: "150px" }} />
                <p>Leverage advanced analytics, such as Put-Call Ratios</p>
                <p>Make Smarter Trading Decisions</p>
                <p>
                  (PCR) and futures data, to gain a deeper understanding of
                  market trends.
                </p>
              </div>
              <div className="card d-flex justify-content-center">
                <img src={assetManagement} style={{ height: "150px" }} />
                <p>Stay Ahead of the Market</p>
                <p>Real-time updates,</p>
                <p>
                  Sectoral heatmaps and drill-down views let you quickly spot
                  market trends and capitalize on them.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

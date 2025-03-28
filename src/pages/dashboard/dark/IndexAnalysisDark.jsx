import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderDark from "./DashboardHeaderDark";
import "../../../styles/IndexAnalysis.css";
import { IoIosArrowDown } from "react-icons/io";
import SliderDark from "../IndexAnlaysisComponents/sliderDark";
import OIChart from "../IndexAnlaysisComponents/OIChart";
import OIChangeChart from "../IndexAnlaysisComponents/OIChangeChart";
import OIChangeBarGraph from "../IndexAnlaysisComponents/OIChangeBarGraph";
import OIPieChart from "../IndexAnlaysisComponents/OIPieChart";

export default function IndexAnalysisDark() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/not-auth");
      }
    }
  }, [isAuthenticated, loading, navigate]);
  const [isEquityOptionsOpen, setIsEquityOptionsOpen] = useState(false);
  const [isETFOptionsOpen, setIsETFOptionsOpen] = useState(false);
  // Refs for scrolling
  const equityOptionsRef = useRef(null);
  const etfOptionsRef = useRef(null);

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="d-flex flex-row">
      <Sidebar tab={"Index Analysis"} />
      <div
        className="container-fluid d-flex flex-column"
        style={{ backgroundColor: "#000000" }}
      >
        <DashboardHeaderDark
          title={"Option Analysis"}
          subTitle={
            "Analyze and understand option chain to make better trading decisions."
          }
        />
        <hr style={{ color: "white", backgroundColor: "white" }} />
        <div
          className="d-flex flex-row justify-content-around align-items-center"
          style={{ marginTop: "12%", marginBottom: "35%" }}
        >
          <div
            className="position-relative"
            onMouseEnter={() => setIsEquityOptionsOpen(true)}
            onMouseLeave={() => setIsEquityOptionsOpen(false)}
          >
            <button
              type="button"
              className="text-white"
              style={{ fontSize: "23px" }}
              onClick={() => handleScroll(equityOptionsRef)}
            >
              Equity Options
            </button>
            {/* Dropdown Menu */}
            {isEquityOptionsOpen && (
              <div
                className="dropdown-menu show w-100 mt-1 position-absolute gradient-color"
                style={{
                  transition: "opacity 0.3s ease, transform ease",
                  opacity: isEquityOptionsOpen ? 1 : 0,
                  transform: isEquityOptionsOpen
                    ? "translateY(0)"
                    : "translateY(10px)",
                  visibility: isEquityOptionsOpen ? "visible" : "hidden",
                }}
              >
                <a href="#" className="dropdown-item fw-bold">
                  NVDA
                </a>
                <a href="#" className="dropdown-item fw-bold">
                  AAPL
                </a>
                <a href="#" className="dropdown-item fw-bold">
                  AMZN
                </a>
                <a href="#" className="dropdown-item fw-bold">
                  PLTR
                </a>
              </div>
            )}
          </div>

          <div
            className="position-relative"
            onMouseEnter={() => setIsETFOptionsOpen(true)}
            onMouseLeave={() => setIsETFOptionsOpen(false)}
          >
            <button
              type="button"
              className="text-white"
              style={{ fontSize: "23px" }}
              onClick={() => handleScroll(etfOptionsRef)}
            >
              ETFs Options
            </button>
            {/* Dropdown Menu */}
            {isETFOptionsOpen && (
              <div
                className="dropdown-menu show w-100 mt-1 position-absolute gradient-color"
                style={{
                  transition: "opacity 0.3s ease, transform ease",
                  opacity: isETFOptionsOpen ? 1 : 0,
                  transform: isETFOptionsOpen
                    ? "translateY(0)"
                    : "translateY(10px)",
                  visibility: isETFOptionsOpen ? "visible" : "hidden",
                }}
              >
                <a href="#" className="dropdown-item fw-bold">
                  SPY
                </a>
                <a href="#" className="dropdown-item fw-bold">
                  QQQ
                </a>
                <a href="#" className="dropdown-item fw-bold">
                  Option 3
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Equity Options Section */}
        <div ref={equityOptionsRef} className="text-white">
          <h4 className="text-center my-5">Equity Options</h4>
          <div
            className="card border border-secondary d-flex flex-row justify-content-around bg-dark"
            // style={{ backgroundColor: "#323232" }}
          >
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <div className="d-flex flex-row mb-5">
                  <p className="text-white m-0 p-0 me-4">Equity:</p>
                  <div className="btn-group">
                    <button
                      className="text-center py-1 border border-white rounded-pill goButton"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        borderRadius: "2px",
                        backgroundColor: "black",
                      }}
                    >
                      NVDA
                      <IoIosArrowDown className="ms-3" />
                    </button>
                    <ul className="dropdown-menu gradient-color">
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          NVDA
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          AAPL
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          AMZN
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          PLTR
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <p className="text-white m-0 p-0 me-4">Expiry:</p>
                  <div className="btn-group">
                    <button
                      className="text-center py-1 border border-white rounded-pill goButton"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        borderRadius: "2px",
                        backgroundColor: "black",
                      }}
                    >
                      April 3rd
                      <IoIosArrowDown className="ms-3" />
                    </button>
                    <ul className="dropdown-menu gradient-color">
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          April 3rd
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          April 3rd
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          April 3rd
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          April 3rd
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "75%" }}>
              <SliderDark />
            </div>
          </div>
        </div>
        <div className="my-5">
          <OIChart />
        </div>
        <div className="d-flex flex-row mb-5">
          <div className="me-4" style={{ width: "70%" }}>
            <OIPieChart />
          </div>
          <div className="d-flex flex-row" style={{ width: "30%" }}>
            <OIChangeBarGraph />
          </div>
        </div>

        <div className="mb-5">
          <OIChangeChart />
        </div>

        {/* ETFs Options Section */}

        <div ref={etfOptionsRef} className="text-white">
          <h4 className="text-center my-5">ETFs Options</h4>
          <div
            className="card border border-secondary d-flex flex-row justify-content-around bg-dark"
            // style={{ backgroundColor: "#323232" }}
          >
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <div className="d-flex flex-row mb-5">
                  <p className="text-white m-0 p-0 me-4">ETFs:</p>
                  <div className="btn-group">
                    <button
                      className="text-center py-1 border border-white rounded-pill goButton"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        borderRadius: "2px",
                        backgroundColor: "black",
                      }}
                    >
                      SPY
                      <IoIosArrowDown className="ms-3" />
                    </button>
                    <ul className="dropdown-menu gradient-color">
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          SPY
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          QQQ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  <p className="text-white m-0 p-0 me-4">Expiry:</p>
                  <div className="btn-group">
                    <button
                      className="text-center py-1 border border-white rounded-pill goButton"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        borderRadius: "2px",
                        backgroundColor: "black",
                      }}
                    >
                      April 3rd
                      <IoIosArrowDown className="ms-3" />
                    </button>
                    <ul className="dropdown-menu gradient-color">
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          April 3rd
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          April 3rd
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          April 3rd
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item fw-bold" href="#">
                          April 3rd
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: "75%" }}>
              <SliderDark />
            </div>
          </div>
        </div>
        <div className="my-5">
          <OIChart />
        </div>
        <div className="d-flex flex-row mb-5">
          <div className="me-4" style={{ width: "70%" }}>
            <OIPieChart />
          </div>
          <div className="d-flex flex-row" style={{ width: "30%" }}>
            <OIChangeBarGraph />
          </div>
        </div>

        <div className="mb-5">
          <OIChangeChart />
        </div>
      </div>
    </div>
  );
}

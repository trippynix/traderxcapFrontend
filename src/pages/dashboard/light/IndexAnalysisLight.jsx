import React, { useEffect, useRef, useState } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "../light/DashboardHeaderLight";
import { IoIosArrowDown } from "react-icons/io";
import SliderDark from "../IndexAnlaysisComponents/sliderDark";

export default function IndexAnalysisLight() {
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
        style={{ backgroundColor: "#ffffff" }}
      >
        <DashboardHeaderLight
          title={"Option Analysis"}
          subTitle={
            "Analyze and understand option chain to make better trading decisions."
          }
        />
        <hr style={{ color: "black", backgroundColor: "black" }} />
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
              className="text-dark"
              style={{ fontSize: "23px", backgroundColor: "white" }}
              onClick={() => handleScroll(equityOptionsRef)}
            >
              Equity Options
            </button>
            {/* Dropdown Menu */}
            {isEquityOptionsOpen && (
              <div
                className="dropdown-menu show w-100 mt-1 position-absolute gradient-color"
                style={{
                  transition: "opacity ease, transform ease",
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
              className="text-dark"
              style={{ fontSize: "23px", backgroundColor: "white" }}
              onClick={() => handleScroll(etfOptionsRef)}
            >
              ETFs Options
            </button>
            {/* Dropdown Menu */}
            {isETFOptionsOpen && (
              <div
                className="dropdown-menu show w-100 mt-1 position-absolute gradient-color"
                style={{
                  transition: "opacity ease, transform ease",
                  opacity: isETFOptionsOpen ? 1 : 0,
                  transform: isETFOptionsOpen
                    ? "translateY(0)"
                    : "translateY(0)",
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
        <div ref={equityOptionsRef} className="text-dark">
          <h4 className="text-center my-5">Equity Options</h4>
          <div
            className="card border border-secondary d-flex flex-row justify-content-around"
            style={{ backgroundColor: "#323232" }}
          >
            <div className="d-flex flex-row">
              <div className="d-flex flex-column">
                <div className="d-flex flex-row mb-5">
                  <p className="text-white m-0 p-0 me-4">Equity:</p>
                  <div className="btn-group">
                    <button
                      className="text-center py-1 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        borderRadius: "2px",
                        backgroundColor: "#A5A4A4",
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
                      className="text-center py-1 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        borderRadius: "2px",
                        backgroundColor: "#A5A4A4",
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

        {/* ETFs Options Section */}
        <div ref={etfOptionsRef} style={{ marginTop: "500px", color: "black" }}>
          <h2>ETFs Options Section</h2>
          <p>Details about ETFs options go here...</p>
        </div>
      </div>
    </div>
  );
}

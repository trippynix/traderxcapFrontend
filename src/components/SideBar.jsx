import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SideBar.css";

/* BLACK COLOR */
import swing from "../assets/images/dashboard/black/swing.svg";
import bullishBlack from "../assets/images/dashboard/black/bullish.svg";
import contractBlack from "../assets/images/dashboard/black/contract.svg";
import assetManagementBlack from "../assets/images/dashboard/black/asset-management.svg";
import dataReportBlack from "../assets/images/dashboard/black/data-report.svg";
import finanacialProfitBlack from "../assets/images/dashboard/black/financial-profit.svg";
import settingsBlack from "../assets/images/dashboard/black/settings.svg";
import lightBulbBlack from "../assets/images/dashboard/black/lightbulb.svg";
import marketResearchBlack from "../assets/images/dashboard/black/market-research.svg";
import socialRespBlack from "../assets/images/dashboard/black/social-responsibility.svg";

import logout from "../assets/images/dashboard/black/logout.svg";
import mainDashLogo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import SummaryAPI from "../common";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/userSlice";

const Sidebar = ({ tab, ...props }) => {
  const [selectedSideBarTab, setSelectedSideBarTab] = useState(tab);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const fetchData = await fetch(SummaryAPI.logoutUser.url, {
      method: SummaryAPI.logoutUser.method,
      credentials: "include",
    });
    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar d-flex flex-column text-white">
        <ul className="list-unstyled d-flex flex-row justify-content-center mt-5">
          <img
            src={mainDashLogo}
            className="mainDashLogo img-fluid"
            alt="smallLogo"
          />
        </ul>
        <ul className="list-unstyled flex-grow-1 d-flex flex-column justify-content-center my-0">
          <Link
            to={"/swing-center"}
            className={
              selectedSideBarTab === "Swing Center"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Swing Center");
            }}
          >
            <img src={swing} className="pe-2" alt="dashboard" />
            <span>Swing Center</span>
          </Link>
          <Link
            to={"/market-depth"}
            className={
              selectedSideBarTab === "Market Depth"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Market Depth");
            }}
          >
            <img src={bullishBlack} className="pe-2" alt="market depth" />
            <span>Market Depth</span>
          </Link>
          <Link
            to={"/momentum-spike"}
            className={
              selectedSideBarTab === "Momentum Spike"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Momentum Spike");
            }}
          >
            <img
              src={finanacialProfitBlack}
              className="pe-2"
              alt="momentum spike"
            />
            <span>Momentum Spike</span>
          </Link>
          <Link
            to={"/sectorial-view"}
            className={
              selectedSideBarTab === "Sectorial View"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Sectorial View");
            }}
          >
            <img
              src={assetManagementBlack}
              className="pe-2"
              alt="sectorial view"
            />
            <span>Sectorial View</span>
          </Link>
          <Link
            to={"/index-analysis"}
            className={
              selectedSideBarTab === "Index Analysis"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Index Analysis");
            }}
          >
            <img src={dataReportBlack} className="pe-2" alt="index analysis" />
            <span>Index Analysis</span>
          </Link>
          <Link
            to={"/money-flux"}
            className={
              selectedSideBarTab === "Money Flux"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Money Flux");
            }}
          >
            <img src={marketResearchBlack} className="pe-2" alt="money flux" />
            <span>Money Flux</span>
          </Link>
          <Link
            to={"/summary"}
            className={
              selectedSideBarTab === "Summary"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Summary");
            }}
          >
            <img src={contractBlack} className="pe-2" alt="summary" />
            <span>Summary</span>
          </Link>
          <Link
            to={"/trade-ideas"}
            className={
              selectedSideBarTab === "Trade Ideas"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Trade Ideas");
            }}
          >
            <img src={lightBulbBlack} className="pe-2" alt="trade ideas" />
            <span>Trade Ideas</span>
          </Link>
          <Link
            to={"/community"}
            className={
              selectedSideBarTab === "Community"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Community");
            }}
          >
            <img src={socialRespBlack} className="pe-2" alt="community" />
            <span>Community</span>
          </Link>
          <Link
            to={"/settings"}
            className={
              selectedSideBarTab === "Settings"
                ? "list-item-selected p-2"
                : "list-item p-2"
            }
            onClick={() => {
              setSelectedSideBarTab("Settings");
            }}
          >
            <img src={settingsBlack} className="pe-2" alt="settings" />
            <span>Settings</span>
          </Link>
        </ul>
        {/* Log Out item */}
        <ul className="list-unstyled my-0">
          <Link to={"/login"} onClick={handleLogout} className="list-item p-2">
            <img src={logout} className="pe-2" alt="logout" />
            <span>Log Out</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../store/userSlice";
import SummaryAPI from "../common";

// Images
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

const Sidebar = ({ tab }) => {
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

  const links = [
    { name: "Swing Center", to: "/swing-center", icon: swing },
    { name: "Market Depth", to: "/market-depth", icon: bullishBlack },
    {
      name: "Momentum Spike",
      to: "/momentum-spike",
      icon: finanacialProfitBlack,
    },
    {
      name: "Sectorial View",
      to: "/sectorial-view",
      icon: assetManagementBlack,
    },
    { name: "Index Analysis", to: "/index-analysis", icon: dataReportBlack },
    { name: "Money Flux", to: "/money-flux", icon: marketResearchBlack },
    { name: "Summary", to: "/summary", icon: contractBlack },
    { name: "Trade Ideas", to: "/trade-ideas", icon: lightBulbBlack },
    { name: "Community", to: "/community", icon: socialRespBlack },
    { name: "Settings", to: "/settings", icon: settingsBlack },
  ];

  return (
    <div className="flex">
      <div
        className="
    group
    bg-[radial-gradient(circle,_rgba(133,119,255,1)_0%,_rgba(76,76,132,1)_100%)]
    sticky top-0 h-screen overflow-x-hidden transition-all duration-300
    w-[40px] hover:w-[220px]
    text-xs font-medium flex flex-col justify-between
  "
      >
        <ul className="flex justify-center mt-5">
          <img src={mainDashLogo} className="h-10" alt="main logo" />
        </ul>

        <ul className="flex flex-col items-start space-y-1 my-2 px-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setSelectedSideBarTab(link.name)}
              className={`
              w-full py-2 flex items-center
              transition-all duration-300
              ${
                selectedSideBarTab === link.name
                  ? "underline font-bold text-black border-b-2"
                  : "text-black w-full"
              }
              hover:bg-[#575757]
            `}
            >
              <div className="flex-shrink-0 h-[25px] w-[25px] flex items-center justify-center">
                <img
                  src={link.icon}
                  alt={link.name}
                  className="h-[22px] w-[22px]"
                />
              </div>
              <span
                className={`
                text-white
                opacity-0 whitespace-nowrap overflow-hidden
                group-hover:opacity-100 group-hover:ml-2 transition-all duration-300
                ${
                  selectedSideBarTab === link.name
                    ? "underline font-bold text-base text-black bg-opacity-20"
                    : "text-black w-full"
                }
              `}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </ul>

        <ul className="mb-3">
          <Link
            to="/login"
            onClick={handleLogout}
            className="w-full ps-2 py-2 flex items-center text-white hover:bg-[#575757]"
          >
            <img src={logout} alt="Logout" className="h-[22px]" />
            <span className="text-white ps-3 whitespace-nowrap sidebar-hover:opacity-100 sidebar-hover:ml-2 transition-all duration-300">
              Log Out
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

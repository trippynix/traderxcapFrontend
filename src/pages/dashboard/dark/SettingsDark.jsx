import React, { useEffect, useState } from "react";
import "../../../styles/Settings.css";
import SideBar from "../../../components/SideBar";
import PersonalInformation from "../../../components/SettingsDashboardComponents/PersonalInformation";
import Billing from "../../../components/SettingsDashboardComponents/Billing";
import ChangePassword from "../../../components/SettingsDashboardComponents/ChangePassword";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderDark from "./DashboardHeaderDark";

export default function SettingsDark() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/not-auth");
      }
    }
  }, [isAuthenticated, loading, navigate]);

  const [selectedTab, setSelectedTab] = useState("Personal Information");

  return (
    <>
      <div className="d-flex flex-row">
        <SideBar tab={"Settings"} />
        <div
          className="container-fluid d-flex flex-column"
          style={{ backgroundColor: "#000000" }}
        >
          <DashboardHeaderDark
            title={"Settings"}
            subTitle={"Edit and manage your personal and account settings here"}
          />
          <div
            className="d-flex flex-row mt-4 px-2 border border-2 border-dark"
            style={{ backgroundColor: "#000000" }}
          >
            <ul className="nav" style={{ backgroundColor: "#000000" }}>
              <li className="nav-item px-5">
                <a
                  className={`nav-link ${
                    selectedTab === "Personal Information"
                      ? "text-light border-bottom"
                      : "text-light"
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the browser from following the link
                    setSelectedTab("Personal Information");
                  }}
                >
                  Personal Information
                </a>
              </li>
              <li className="nav-item px-5">
                <a
                  className={`nav-link ${
                    selectedTab === "Billing"
                      ? "text-light border-bottom"
                      : "text-light"
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the browser from following the link
                    setSelectedTab("Billing");
                  }}
                >
                  Billing
                </a>
              </li>
              <li className="nav-item px-5">
                <a
                  className={`nav-link ${
                    selectedTab === "Change Password"
                      ? "text-light border-bottom"
                      : "text-light"
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the browser from following the link
                    setSelectedTab("Change Password");
                  }}
                >
                  Change Password
                </a>
              </li>
            </ul>
          </div>
          {selectedTab === "Personal Information" && <PersonalInformation />}
          {selectedTab === "Billing" && <Billing />}
          {selectedTab === "Change Password" && <ChangePassword />}
        </div>
      </div>
    </>
  );
}

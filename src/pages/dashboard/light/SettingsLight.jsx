import React, { useEffect, useState } from "react";
import "../../../styles/Settings.css";
import SideBar from "../../../components/SideBar";
import PersonalInformation from "../../../components/SettingsDashboardComponents/PersonalInformation";
import Billing from "../../../components/SettingsDashboardComponents/Billing";
import ChangePassword from "../../../components/SettingsDashboardComponents/ChangePassword";
import { useNavigate } from "react-router-dom";

import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";

export default function SettingsLight() {
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
        <div className="container-fluid d-flex bg-light flex-column">
          <DashboardHeaderLight
            title={"Settings"}
            subTitle={"Edit and manage your personal and account settings here"}
          />
          <div className="d-flex flex-row mt-4 px-2 border border-2">
            <ul className="nav">
              <li className="nav-item px-5">
                <a
                  className={`nav-link ${
                    selectedTab === "Personal Information"
                      ? "activeTab"
                      : "text-black"
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
                    selectedTab === "Billing" ? "activeTab" : "text-black"
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
                      ? "activeTab"
                      : "text-black"
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

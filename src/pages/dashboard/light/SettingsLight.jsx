import React, { useEffect, useState } from "react";
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
      <div className="flex flex-row">
        <SideBar tab={"Settings"} />

        <div className="flex flex-col w-full bg-white">
          <DashboardHeaderLight
            title={"Settings"}
            subTitle={"Edit and manage your personal and account settings here"}
          />

          <div className="flex flex-row mt-4 px-2 border-2 border-white bg-white">
            <ul className="flex flex-row bg-white">
              <li className="p-5">
                <a
                  className={`cursor-pointer text-black hover:border-b-2 ${
                    selectedTab === "Personal Information"
                      ? "border-b-2 border-black"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTab("Personal Information");
                  }}
                >
                  Personal Information
                </a>
              </li>
              <li className="p-5">
                <a
                  className={`cursor-pointer text-black hover:border-b-2 ${
                    selectedTab === "Billing" ? "border-b-2 border-black" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedTab("Billing");
                  }}
                >
                  Billing
                </a>
              </li>
              <li className="p-5">
                <a
                  className={`cursor-pointer text-black hover:border-b-2 ${
                    selectedTab === "Change Password"
                      ? "border-b-2 border-black"
                      : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
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

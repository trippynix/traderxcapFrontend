import React, { useEffect } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";

export default function SummaryLight() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/not-auth");
      }
    }
  }, [isAuthenticated, loading, navigate]);
  return (
    <div className="flex flex-row">
      <Sidebar tab={"Summary"} />
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Summary"}
          subTitle={"Find the Summary of market here."}
        />
        <hr className="border-gray-600 my-5 mx-5" />
      </div>
    </div>
  );
}

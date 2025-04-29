import React, { useEffect } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderDark from "./DashboardHeaderDark";

export default function TradeIdeasDark() {
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
      <Sidebar tab={"Trade Ideas"} />
      <div className="flex flex-col w-full bg-black">
        <DashboardHeaderDark
          title={"Trade Ideas"}
          subTitle={"Find Trade Ideas here."}
        />
        <hr className="border-gray-600 my-5 mx-5" />
      </div>
    </div>
  );
}

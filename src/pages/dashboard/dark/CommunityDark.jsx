import React, { useEffect } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderDark from "./DashboardHeaderDark";

export default function CommunityDark() {
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
      <Sidebar tab={"Community"} />
      <div className="flex flex-col w-full bg-black">
        <DashboardHeaderDark
          title={"Community"}
          subTitle={
            "Community section where you can share your thoughts with other traders."
          }
        />
        <hr className="border-gray-600 my-5 mx-5" />
      </div>
    </div>
  );
}

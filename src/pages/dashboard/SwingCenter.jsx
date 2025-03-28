import React, { useEffect } from "react";
import Sidebar from "../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../components/useAuthCheck";

export default function SwingCenter() {
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
    <div className="d-flex flex-row">
      <Sidebar tab={"Swing Center"} />
      SwingCenter
    </div>
  );
}

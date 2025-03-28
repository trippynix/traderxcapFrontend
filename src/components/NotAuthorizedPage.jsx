import React from "react";
import notAuthorized from "../assets/images/dashboard/black/notAuthorized.png";

const NotAuthorizedPage = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={notAuthorized} style={{ height: "600px" }} />
    </div>
  );
};

export default NotAuthorizedPage;

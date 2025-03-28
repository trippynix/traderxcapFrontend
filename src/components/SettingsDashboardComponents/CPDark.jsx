import React, { useContext, useState } from "react";
import changePass from "../../assets/images/rotation-lockDark.svg";
import Context from "../../context";
import SummaryAPI from "../../common";
import { toast } from "react-toastify";

export default function PersonalInformation() {
  const [isOldPassHovered, setIsOldPassHovered] = useState(false);
  const [showOldPass, setShowOldPass] = useState(false);
  const [oldPasswordType, setOldPasswordType] = useState("password");

  const handleOldPassToggle = () => {
    setShowOldPass(!showOldPass); // Toggle the eye state
    setOldPasswordType(showOldPass ? "password" : "text"); // Toggle password visibility
  };

  const [isNewPassHovered, setisNewPassHovered] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [newPasswordType, setNewPasswordType] = useState("password");

  const handleNewPassToggle = () => {
    setShowNewPass(!showNewPass); // Toggle the eye state
    setNewPasswordType(showNewPass ? "password" : "text"); // Toggle password visibility
  };

  const [isConfirmPassHovered, setisConfirmPassHovered] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const handleConfirmPassToggle = () => {
    setShowConfirmPass(!showConfirmPass); // Toggle the eye state
    setConfirmPasswordType(showConfirmPass ? "password" : "text"); // Toggle password visibility
  };

  const { user } = useContext(Context);
  const [changePassword, setChangePassword] = useState({
    userID: user?._id || "",
    password: user?.password || "",
    newPassword: "",
    confirmPass: "",
    oldPassword: "",
  });
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setChangePassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordSave = async (e) => {
    e.preventDefault();
    if (changePassword.newPassword === changePassword.confirmPass) {
      if (
        !changePassword.newPassword ||
        !changePassword.confirmPass ||
        !changePassword.oldPassword
      ) {
        toast.error("Please fill in all details to change the password.");
      } else {
        const dataResponse = await fetch(SummaryAPI.changePassword.url, {
          method: SummaryAPI.changePassword.method,
          credentials: "include",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(changePassword),
        });
        const dataAPI = await dataResponse.json();
        if (dataAPI.success) {
          toast.success(dataAPI.message);
        }
        if (dataAPI.error) {
          toast.error(dataAPI.message);
        }
      }
    } else {
      toast.error("New Password and Confirm Password does not match.");
    }
  };
  return (
    <>
      <div className="d-flex flex-row align-items-center mt-3 ms-4 mb-0 border-bottom-section border-light text-white">
        <img
          src={changePass}
          className="icons"
          alt="profileLogo"
          style={{ marginRight: "7px" }}
        />
        <small className="mb-0">Change Password</small>
      </div>
      <div className="d-flex justify-content-around align-items-center text-white">
        <div className="d-flex w-50 flex-column">
          <div className="d-flex flex-row mt-3 justify-content-between">
            <div className="me-5 mt-4">
              <small>Old Password :</small>
            </div>
            <div className="d-flex input-group w-50 my-3 position-relative">
              <input
                type={oldPasswordType}
                className="inputPass form-control border border-dark rounded"
                name="oldPassword"
                value={changePassword.oldPassword}
                onChange={handlePasswordChange}
              />
              <span
                onMouseEnter={() => setIsOldPassHovered(true)} // Set hover state to true
                onMouseLeave={() => setIsOldPassHovered(false)} // Set hover state to false
                style={{
                  color: isOldPassHovered ? "black" : "#666666", // Ensures the label is black by default
                }}
                className="d-flex position-absolute p-3 m-0 btn btn-link top-50 translate-middle-y end-0"
                onClick={handleOldPassToggle}
              >
                {showOldPass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-slash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </span>
            </div>
          </div>
          <div className="d-flex flex-row mt-3 justify-content-between">
            <div className="me-5 mt-4">
              <small>New Password :</small>
            </div>
            <div className="input-group w-50 my-3 position-relative">
              <input
                type={newPasswordType}
                className="inputPass form-control border border-dark input-width rounded"
                name="newPassword"
                value={changePassword.newPassword}
                onChange={handlePasswordChange}
              />
              <span
                onMouseEnter={() => setisNewPassHovered(true)} // Set hover state to true
                onMouseLeave={() => setisNewPassHovered(false)} // Set hover state to false
                style={{
                  color: isNewPassHovered ? "black" : "#666666", // Ensures the label is black by default
                }}
                className="d-flex position-absolute p-3 m-0 btn btn-link top-50 translate-middle-y end-0"
                onClick={handleNewPassToggle}
              >
                {showNewPass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-slash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </span>
            </div>
          </div>
          <div className="d-flex flex-row mt-3 justify-content-between">
            <div className="me-3 mt-4">
              <small>Confirm New Password :</small>
            </div>
            <div className="input-group w-50 my-3 position-relative">
              <input
                type={confirmPasswordType}
                className="inputPass form-control border border-dark input-width rounded"
                name="confirmPass"
                value={changePassword.confirmPass}
                onChange={handlePasswordChange}
              />
              <span
                onMouseEnter={() => setisConfirmPassHovered(true)} // Set hover state to true
                onMouseLeave={() => setisConfirmPassHovered(false)} // Set hover state to false
                style={{
                  color: isConfirmPassHovered ? "black" : "#666666", // Ensures the label is black by default
                }}
                className="d-flex position-absolute p-3 m-0 btn btn-link top-50 translate-middle-y end-0"
                onClick={handleConfirmPassToggle}
              >
                {showConfirmPass ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-eye-slash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                  </svg>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mx-auto btn save mt-4"
        onClick={handlePasswordSave}
      >
        Save
      </button>
    </>
  );
}

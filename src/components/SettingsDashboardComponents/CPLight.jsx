import React, { useContext, useState } from "react";
import changePass from "../../assets/images/rotation-lock.svg";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
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
          // Toggle edit mode
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
      <div className="flex flex-row items-center mt-3 ms-4 mb-0 border-b border-gray-300 text-black">
        <img
          src={changePass}
          alt="profileLogo"
          className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 md:mr-1 lg:mr-2"
        />
        <small className="text-xs md:text-sm lg:text-base">
          Change Password
        </small>
      </div>

      <div className="flex justify-around items-center text-black">
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/2">
          {/* Old Password */}
          <div className="flex flex-col md:flex-row lg:flex-row mt-3 items-center md:justify-between lg:justify-between">
            <div className="me-5 mt-4">
              <small className="text-[10px] md:text-xs lg:text-base">
                Old Password :
              </small>
            </div>
            <div className="relative w-1/2 my-3">
              <input
                type={oldPasswordType}
                className="form-input w-full border border-gray-700 rounded px-3 py-2 bg-white text-black"
                name="oldPassword"
                value={changePassword.oldPassword}
                onChange={handlePasswordChange}
              />
              <span
                onMouseEnter={() => setIsOldPassHovered(true)}
                onMouseLeave={() => setIsOldPassHovered(false)}
                style={{
                  color: isOldPassHovered ? "black" : "#666666",
                }}
                className="absolute top-1/2 right-0 -translate-y-1/2 p-3 cursor-pointer"
                onClick={handleOldPassToggle}
              >
                {showOldPass ? (
                  <IoIosEye className="w-5 h-5" />
                ) : (
                  <IoIosEyeOff className="w-5 h-5" />
                )}
              </span>
            </div>
          </div>

          {/* New Password */}
          <div className="flex flex-col md:flex-row lg:flex-row mt-3 items-center md:justify-between lg:justify-between">
            <div className="me-5 mt-4">
              <small className="text-[10px] md:text-xs lg:text-base">
                New Password :
              </small>
            </div>
            <div className="relative w-1/2 my-3">
              <input
                type={newPasswordType}
                className="form-input w-full border border-gray-700 rounded px-3 py-2 bg-white text-black"
                name="newPassword"
                value={changePassword.newPassword}
                onChange={handlePasswordChange}
              />
              <span
                onMouseEnter={() => setisNewPassHovered(true)}
                onMouseLeave={() => setisNewPassHovered(false)}
                style={{
                  color: isNewPassHovered ? "black" : "#666666",
                }}
                className="absolute top-1/2 right-0 -translate-y-1/2 p-3 cursor-pointer"
                onClick={handleNewPassToggle}
              >
                {showNewPass ? (
                  <IoIosEye className="w-5 h-5" />
                ) : (
                  <IoIosEyeOff className="w-5 h-5" />
                )}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col md:flex-row lg:flex-row mt-3 items-center md:justify-between lg:justify-between">
            <div className="me-5 mt-4">
              <small className="text-[10px] md:text-xs lg:text-base">
                Confirm New Password :
              </small>
            </div>
            <div className="relative w-1/2 my-3">
              <input
                type={confirmPasswordType}
                className="form-input w-full border border-gray-700 rounded px-3 py-2 bg-white text-black"
                name="confirmPass"
                value={changePassword.confirmPass}
                onChange={handlePasswordChange}
              />
              <span
                onMouseEnter={() => setisConfirmPassHovered(true)}
                onMouseLeave={() => setisConfirmPassHovered(false)}
                style={{
                  color: isConfirmPassHovered ? "black" : "#666666",
                }}
                className="absolute top-1/2 right-0 -translate-y-1/2 p-3 cursor-pointer"
                onClick={handleConfirmPassToggle}
              >
                {showConfirmPass ? (
                  <IoIosEye className="w-5 h-5" />
                ) : (
                  <IoIosEyeOff className="w-5 h-5" />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="mx-auto mt-4 px-4 py-2 text-xs md:text-sm lg:text-base border border-black rounded-lg bg-white text-black hover:bg-black hover:text-white hover:cursor-pointer active:bg-black active:text-white font-medium rounded"
        onClick={handlePasswordSave}
      >
        Save
      </button>
    </>
  );
}

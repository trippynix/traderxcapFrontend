import React, { useContext, useState, useEffect } from "react";
import profileLogo from "../../assets/images/profileWhite.svg";
import Context from "../../context";

import SummaryAPI from "../../common";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { UseOtpModal } from "../UseOtpModal";

const PLDARK = () => {
  const [isTradingDropdownOpen, setIsTradingDropdownOpen] = useState(false);
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);

  const { user } = useContext(Context);

  // Phone number section -----------
  const [valid, setValid] = useState(true);

  const validatePhoneNum = (phoneNum) => {
    const phoneNumPattern = /^\d{10}$/;
    return phoneNumPattern.test(phoneNum);
  };

  const handlePhoneInputChange = (value, country) => {
    const phoneWithoutCode = value.slice(country.dialCode.length);

    setFormData((prevData) => ({
      ...prevData,
      phoneNum: `${country.dialCode}-${phoneWithoutCode}`,
      country: `${country.name}`,
    }));
    setValid(validatePhoneNum(phoneWithoutCode));
  };
  // State to manage edit mode
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    userID: "",
    name: "",
    email: "",
    username: "",
    gender: "",
    phoneNum: "",
    country: "",
    tradingExp: "",
    oldUserName: user?.username,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        userID: user?._id || "",
        name: user?.name || "",
        email: user?.email || "",
        username: user?.username || "",
        gender: user?.gender || "", // Default to an empty string if undefined
        phoneNum: user?.phoneNum || "", // Default to an empty string if undefined
        country: user?.country || "",
        tradingExp: user?.tradingExp || "",
        oldUserName: user?.username,
      });
    }
  }, [user]);

  // Ensure firstName and lastName split correctly, even when name is an empty string
  const [firstName, lastName] = formData.name
    ? formData.name.split(" ")
    : ["", ""];

  const handleEmailVerify = (otp) => {
    console.log("Email OTP Verified:", otp);
    alert(`Email OTP Verified: ${otp}`);
  };

  const { OtpModal: EmailOtpModal, openModal: openEmailModal } = UseOtpModal(
    handleEmailVerify,
    {
      title: "Verify Email",
      placeholder: "Enter 6-digit OTP sent to your email",
      description: "Please check your email for the verification code.",
    }
  );

  const handlePhoneVerify = (otp) => {
    console.log("Phone OTP Verified:", otp);
    alert(`Phone OTP Verified: ${otp}`);
  };

  const { OtpModal: PhoneOtpModal, openModal: openPhoneModal } = UseOtpModal(
    handlePhoneVerify,
    {
      title: "Verify Phone",
      placeholder: "Enter 6-digit OTP sent to your phone",
      description: "Please check your phone for the verification code.",
    }
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "firstName" || name === "lastName") {
      // Combine firstName and lastName into full name
      const updatedName = `${name === "firstName" ? value : firstName} ${
        name === "lastName" ? value : lastName
      }`;

      setFormData((prevData) => ({
        ...prevData,
        name: updatedName,
      }));
    } else {
      // For other fields, handle them normally
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle change for the dropdown selection
  const handleExperienceSelect = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      tradingExp: value, // Update the tradingExp property
    }));
  };
  // Handle change for the dropdown selection
  const handleGenderSelect = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: value, // Update the tradingExp property
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (isEditing) {
      // Save the data (this is where you'd make an API call, if needed)
      console.log("Saving user data:", {
        formData,
      });

      const dataResponse = await fetch(SummaryAPI.editUser.url, {
        method: SummaryAPI.editUser.method,
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const dataAPI = await dataResponse.json();
      if (dataAPI.success) {
        toast.success(dataAPI.message);
      }
      if (dataAPI.error) {
        toast.error(dataAPI.message);

        /* Set all the values again if there is any error */
        setFormData((prevData) => ({
          ...prevData,
          name: user?.name || "",
          username: user?.username || "",
          gender: user?.gender || "",
          phoneNum: user?.phoneNum || "",
          country: user?.country || "",
          tradingExp: user?.tradingExp || "",
        }));
      }

      console.log("data", dataAPI);
    }
    setIsEditing(!isEditing);
  };
  return (
    <>
      <div className="bg-black ms-0">
        <div className="flex flex-row items-center mt-3 ms-4 mb-0 border-b border-gray-400 ">
          <img
            src={profileLogo}
            alt="profileLogo"
            className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 md:mr-1 lg:mr-2"
          />
          <small className="text-white text-xs md:text-sm lg:text-base">
            Personal Information
          </small>
        </div>

        {/* Row 1: First Name + Gender */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around mt-3">
          <div className="mx-5 mt-2 md:w-1/2 lg:w-1/2">
            <small className="text-xs md:text-sm lg:text-base text-white">
              First Name
            </small>
            <div className="my-1 md:my-2 lg:my-3 w-3/4">
              <input
                type="text"
                className={`w-full text-xs md:text-sm lg:text-base text-white bg-zinc-900 border border-white px-2 py-1 rounded-md ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="mx-5 mt-2 md:w-1/2 lg:w-1/2 mt-3 md:mt-0 lg:mt-0">
            <small className="text-white text-xs md:text-sm lg:text-base">
              Gender
            </small>
            <div className="my-1 md:my-2 lg:my-3 w-3/4 relative">
              <button
                type="button"
                className={`w-full py-1 px-2 text-left text-xs md:text-sm lg:text-base bg-black text-white border border-white rounded-md ${
                  isEditing ? "hover:cursor-pointer" : "cursor-not-allowed"
                }`}
                disabled={!isEditing}
                onClick={() =>
                  isEditing && setIsGenderDropdownOpen((prev) => !prev)
                }
              >
                {formData.gender || "Select"}
              </button>
              {isGenderDropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-black border border-gray-700 rounded-md">
                  {["Male", "Female"].map((g) => (
                    <li key={g}>
                      <button
                        className="w-full text-left text-white px-3 py-1 hover:bg-gray-800"
                        onClick={() => {
                          handleGenderSelect(g);
                          setIsGenderDropdownOpen(false);
                        }}
                      >
                        {g}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Row 2: Last Name + Phone */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around mt-3">
          <div className="mx-5 mt-2 md:w-1/2 lg:w-1/2">
            <small className="text-xs md:text-sm lg:text-base text-white">
              Last Name
            </small>
            <div className="my-1 md:my-2 lg:my-3 w-3/4">
              <input
                type="text"
                className={`w-full text-xs md:text-sm lg:text-base text-white bg-zinc-900 border border-white px-2 py-1 rounded-md ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="mx-5 mt-2 md:w-1/2 lg:w-1/2 mt-3 md:mt-0 lg:mt-0">
            <div className="flex justify-between w-3/4 items-center">
              <small className="text-xs md:text-sm lg:text-base text-white">
                Phone
              </small>
              {!valid && (
                <small className="text-red-500 ml-2">
                  * Please enter a valid phone number.
                </small>
              )}
              <a
                className="ml-4 text-white border border-white px-2 py-1 rounded-md text-[10px] md:text-xs lg:text-sm cursor-pointer"
                onClick={openPhoneModal}
              >
                Verify
              </a>
            </div>
            <PhoneOtpModal />
            <div className="my-1 md:my-2 lg:my-3 w-3/4">
              <PhoneInput
                country={"us"}
                placeholder="Enter your phone number"
                className="w-full"
                value={formData.phoneNum}
                onChange={handlePhoneInputChange}
                disabled={!isEditing}
                inputProps={{
                  required: true,
                }}
                inputStyle={{
                  background: "#000000",
                  width: "100%",
                  color: "#ffffff",
                  border: "1px solid white",
                }}
                buttonStyle={{
                  background: "#000000",
                  color: "white",
                  border: "1px solid white",
                }}
                dropdownClass="phone-dropdown-dark"
              />
            </div>
          </div>
        </div>

        {/* Row 3: Email + Country */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around mt-3">
          <div className="mx-5 mt-2 md:w-1/2 lg:w-1/2">
            <div className="flex justify-between w-3/4 items-center">
              <small className="text-xs md:text-sm lg:text-base text-white">
                Email
              </small>
              <a
                className="ml-4 text-white border border-white px-2 py-1 rounded-md text-[10px] md:text-xs lg:text-sm cursor-pointer"
                onClick={openEmailModal}
              >
                Verify
              </a>
            </div>
            <EmailOtpModal />
            <div className="my-1 md:my-2 lg:my-3 w-3/4">
              <input
                type="text"
                className={`w-full text-xs md:text-sm lg:text-base text-white bg-zinc-900 border border-white px-2 py-1 rounded-md ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled
              />
            </div>
          </div>

          <div className="mx-5 mt-2 md:w-1/2 lg:w-1/2 mt-3 md:mt-0 lg:mt-0">
            <small className="text-xs md:text-sm lg:text-base text-white">
              Country
            </small>
            <div className="my-1 md:my-2 lg:my-3 w-3/4">
              <input
                type="text"
                className={`w-full text-xs md:text-sm lg:text-base text-white bg-zinc-900 border border-white px-2 py-1 rounded-md ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                disabled
              />
            </div>
          </div>
        </div>

        {/* Row 4: Username + Experience */}
        <div className="flex flex-col md:flex-row lg:flex-row justify-around mt-3">
          <div className="mx-5 mt-2 md:w-1/2 lg:w-1/2">
            <small className="text-xs md:text-sm lg:text-base text-white">
              UserName
            </small>
            <div className="my-1 md:my-2 lg:my-3 w-3/4">
              <input
                type="text"
                className={`w-full text-xs md:text-sm lg:text-base text-white bg-zinc-900 border border-white px-2 py-1 rounded-md ${
                  isEditing ? "" : "cursor-not-allowed"
                }`}
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="mx-5 mt-2 md:w-1/2 lg:w-1/2 mt-3 md:mt-0 lg:mt-0">
            <small className="text-xs md:text-sm lg:text-base text-white">
              Trading Experience
            </small>
            <div className="my-1 md:my-2 lg:my-3 w-3/4 relative">
              <button
                type="button"
                className={`w-full py-1 text-xs md:text-sm lg:text-base px-2 text-left bg-black text-white border border-white rounded-md ${
                  isEditing ? "hover:cursor-pointer" : "cursor-not-allowed"
                }`}
                disabled={!isEditing}
                onClick={() =>
                  isEditing && setIsTradingDropdownOpen((prev) => !prev)
                }
              >
                {formData.tradingExp || "Select"}
              </button>
              {isTradingDropdownOpen && (
                <ul className="absolute z-10 mt-1 w-full bg-black border border-gray-700 rounded-md">
                  {["0-2 Years", "2-5 Years", "5+ Years"].map((exp) => (
                    <li key={exp}>
                      <button
                        className="w-full text-left text-white px-3 py-1 hover:bg-gray-800"
                        onClick={() => {
                          handleExperienceSelect(exp);
                          setIsTradingDropdownOpen(false);
                        }}
                      >
                        {exp}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Edit/Save Button */}
        <button
          type="button"
          className="block mx-auto bg-black text-xs md:text-sm lg:text-base border border-white text-white px-4 py-2 my-7 rounded-lg hover:bg-white hover:text-black hover:cursor-pointer active:bg-white active:text-black"
          onClick={handleSave}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
};

export default PLDARK;

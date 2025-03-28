import React, { useContext, useState, useEffect } from "react";
import profileLogo from "../../assets/images/profile.svg";
import Context from "../../context";
import "../../styles/PersonalInformation.css";
import SummaryAPI from "../../common";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { UseOtpModal } from "../UseOtpModal";

const PLLIGHT = () => {
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

  const { openModal, OtpModal } = UseOtpModal((otp) => {
    console.log("OTP Verified:", otp);
  });

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
      <div className="d-flex flex-row align-items-center mt-3 ms-4 mb-0 border-bottom-section">
        <img
          src={profileLogo}
          className="icons"
          alt="profileLogo"
          style={{ marginRight: "7px" }}
        />
        <small className="mb-0">Personal Information</small>
      </div>

      <div className="d-flex justify-content-around mt-3">
        <div className="mx-5 mt-2 w-50">
          <small>First Name</small>
          <div className="input-group w-75 my-3">
            <input
              type="text"
              className="form-control border border-dark input-width"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="mx-5 mt-2 w-50">
          <small>Gender</small>
          <div className="input-group w-75 my-3">
            <button
              type="button"
              className="selectBtn btn btn-secondary dropdown-toggle py-0"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
              disabled={!isEditing}
            >
              {formData.gender || "Select"}
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleGenderSelect("Male")}
                >
                  Male
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleGenderSelect("Female")}
                >
                  Female
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around mt-3">
        <div className="mx-5 mt-2 w-50">
          <small>Last Name</small>
          <div className="input-group w-75 my-3">
            <input
              type="text"
              className="form-control border border-dark input-width"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="mx-5 mt-2 w-50">
          <div className="d-flex flex-row">
            <small className="me-5">Phone</small>
            {!valid && (
              <small className="text-danger">
                * Please enter a valid phone number.
              </small>
            )}
          </div>

          <div className="input-group w-75 my-3">
            <PhoneInput
              country={"us"}
              placeholder="Enter your phone number"
              className="form-control border border-dark input-width"
              value={formData.phoneNum}
              onChange={handlePhoneInputChange}
              disabled={!isEditing}
              inputProps={{
                required: true,
              }}
              inputStyle={{
                border: "none",
              }}
              buttonStyle={{
                border: "none",
              }}
              inputClass="phoneNumberClass"
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around mt-3">
        <div className="mx-5 mt-2 w-50">
          <small>Email</small>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            onClick={openModal}
          >
            Enter OTP
          </button>
          <OtpModal />
          <div className="input-group w-75 my-3">
            <input
              type="text"
              className="form-control border border-dark input-width"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled
            />
          </div>
        </div>

        <div className="mx-5 mt-2 w-50">
          <small>Country</small>
          <div className="input-group w-75 my-3">
            <input
              type="text"
              className="form-control border border-dark input-width"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              disabled
            />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-around mt-3">
        <div className="mx-5 mt-2 w-50">
          <small>UserName</small>
          <div className="input-group w-75 my-3">
            <input
              type="text"
              className="form-control border border-dark input-width"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        <div className="mx-5 mt-2 w-50">
          <small>Trading Experience</small>
          <div className="input-group w-75 my-3">
            <button
              type="button"
              className="selectBtn btn btn-secondary dropdown-toggle py-0"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
              disabled={!isEditing}
            >
              {formData.tradingExp || "Select"}
            </button>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleExperienceSelect("0-2 Years")}
                >
                  0-2 Years
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleExperienceSelect("2-5 Years")}
                >
                  2-5 Years
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleExperienceSelect("5+ Years")}
                >
                  5+ Years
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Edit/Save Button */}
      <button
        type="button"
        className="mx-auto btn save my-5"
        onClick={handleSave}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </>
  );
};

export default PLLIGHT;

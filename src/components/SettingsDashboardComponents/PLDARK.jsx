import React, { useContext, useState, useEffect } from "react";
import profileLogo from "../../assets/images/profileWhite.svg";
import Context from "../../context";
import "../../styles/PersonalInformation.css";
import SummaryAPI from "../../common";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { UseOtpModal } from "../UseOtpModal";

const PILIGHT = () => {
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
      <div style={{ backgroundColor: "#000000" }}>
        <div className="d-flex flex-row align-items-center mt-3 ms-4 mb-0 border-bottom-section border-light">
          <img
            src={profileLogo}
            className="icons"
            alt="profileLogo"
            style={{ marginRight: "7px" }}
          />
          <small className="mb-0 text-light">Personal Information</small>
        </div>

        <div className="d-flex justify-content-around mt-3">
          <div className="mx-5 mt-2 w-50">
            <small className="text-light">First Name</small>
            <div className="input-group w-75 my-3">
              <input
                type="text"
                className="form-control border border-light input-width text-light bg-dark"
                name="firstName"
                value={firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="mx-5 mt-2 w-50">
            <small className="text-light">Gender</small>
            <div className="input-group w-75 my-3">
              <button
                type="button"
                className="selectBtn btn btn-secondary dropdown-toggle py-0 text-light"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
                disabled={!isEditing}
              >
                {formData.gender || "Select"}
              </button>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-dark">
                <li>
                  <button
                    className="dropdown-item text-light bg-dark"
                    type="button"
                    onClick={() => handleGenderSelect("Male")}
                  >
                    Male
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-light bg-dark"
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
            <small className="text-light">Last Name</small>
            <div className="input-group w-75 my-3">
              <input
                type="text"
                className="form-control border border-light input-width text-light bg-dark"
                name="lastName"
                value={lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="mx-5 mt-2 w-50">
            <small className="text-light">Phone</small>
            {!valid && (
              <small className="text-danger">
                * Please enter a valid phone number.
              </small>
            )}
            <a
              className="text-white ms-4 text-decoration-none otp border border-white p-2 rounded-3"
              style={{ fontSize: 15 }}
              onClick={openPhoneModal}
            >
              Verify
            </a>
            <PhoneOtpModal />

            <div className="input-group w-75 my-3">
              <PhoneInput
                country={"us"}
                placeholder="Enter your phone number"
                className="form-control border border-light input-width bg-dark"
                value={formData.phoneNum}
                onChange={handlePhoneInputChange}
                disabled={!isEditing}
                inputProps={{
                  required: true,
                }}
                inputStyle={{
                  border: "none",
                  background: "#212529",

                  width: "100%",
                  color: "#ffffff",
                }}
                buttonStyle={{
                  border: "none",
                  background: "#212529",
                  color: "white",
                }}
                dropdownStyle={{
                  background: "black",
                }}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-around mt-3">
          <div className="mx-5 mt-2 w-50">
            <small className="text-light">Email</small>
            <a
              className="text-white ms-4 text-decoration-none otp border border-white p-2 rounded-3"
              style={{ fontSize: 15 }}
              onClick={openEmailModal}
            >
              Verify
            </a>
            <EmailOtpModal />

            <div className="input-group w-75 my-3">
              <input
                type="text"
                className="form-control border border-light input-width text-light bg-dark"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                disabled
              />
            </div>
          </div>

          <div className="mx-5 mt-2 w-50">
            <small className="text-light">Country</small>
            <div className="input-group w-75 my-3">
              <input
                type="text"
                className="form-control border border-light input-width text-light bg-dark"
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
            <small className="text-light">UserName</small>
            <div className="input-group w-75 my-3">
              <input
                type="text"
                className="form-control border border-light input-width text-light bg-dark"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </div>

          <div className="mx-5 mt-2 w-50">
            <small className="text-light">Trading Experience</small>
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
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start bg-dark">
                <li>
                  <button
                    className="dropdown-item text-light bg-dark"
                    type="button"
                    onClick={() => handleExperienceSelect("0-2 Years")}
                  >
                    0-2 Years
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-light bg-dark"
                    type="button"
                    onClick={() => handleExperienceSelect("2-5 Years")}
                  >
                    2-5 Years
                  </button>
                </li>
                <li>
                  <button
                    className="dropdown-item text-light bg-dark"
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
          className="d-flex mx-auto btn save my-5"
          onClick={handleSave}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
};

export default PILIGHT;

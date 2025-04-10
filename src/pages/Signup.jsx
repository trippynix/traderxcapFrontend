import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import SummaryAPI from "../common";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuthCheck } from "../components/useAuthCheck";

export default function Signup() {
  const [checked, setChecked] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handlePassToggle = () => {
    setShowPass(!showPass); // Toggle the eye state
    setPasswordType(showPass ? "password" : "text"); // Toggle password visibility
  };

  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const handleConfirmPassToggle = () => {
    setShowConfirmPass(!showConfirmPass); // Toggle the eye state
    setConfirmPasswordType(showConfirmPass ? "password" : "text"); // Toggle password visibility
  };

  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phoneNum: "",
    country: "",
    tradingExp: "",
  });
  const navigate = useNavigate();

  const { isAuthenticated, isVerified, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading && isAuthenticated && isVerified) {
      navigate("/settings"); // Redirect to dashboard
    }
  }, [isAuthenticated, isVerified, loading, navigate]);

  if (loading) return <p>Loading...</p>; // Show loading state

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      console.log("Summary", SummaryAPI.signUp.url);

      const dataResponse = await fetch(SummaryAPI.signUp.url, {
        method: SummaryAPI.signUp.method,
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      console.log("dataResponse", dataResponse);
      const dataAPI = await dataResponse.json();

      if (dataAPI.success) {
        toast.success(dataAPI.message);
        navigate("/verify-email");
      }
      if (dataAPI.error) {
        toast.error(dataAPI.message);
      }
    } else {
      toast.error("Passwords are not same.");
    }
  };
  return (
    <>
      <Header />
      <div className="bg-white flex items-center justify-center">
        <div className="my-12 flex w-full md:w-full lg:w-1/2 mx-auto bg-white p-6 rounded-lg shadow-md">
          <form
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit}
          >
            <div className="col-span-2 text-center text-black">
              <h3 className="pb-3 text-base md:text-2xl lg:text-2xl font-semibold">
                Create an account
              </h3>
              <p className="text-xs md:text-sm lg:text-sm pb-1">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="hover:underline active:underline font-semibold text-black"
                >
                  Log in
                </Link>
              </p>
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <label
                htmlFor="inputName"
                className="block text-xs md:text-sm lg:text-sm font-medium text-black"
              >
                First & Last Name
              </label>
              <input
                type="text"
                required
                name="name"
                value={data.name}
                onChange={handleOnChange}
                id="inputName"
                className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <label
                htmlFor="inputUsername"
                className="block text-xs md:text-sm lg:text-sm font-medium text-black"
              >
                Username
              </label>
              <input
                type="text"
                required
                name="username"
                value={data.username}
                onChange={handleOnChange}
                id="inputUsername"
                className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div className="col-span-2 md:col-span-2 lg:col-span-2">
              <label
                htmlFor="inputEAddress"
                className="block text-xs md:text-sm lg:text-sm font-medium text-black"
              >
                Email address
              </label>
              <input
                type="email"
                required
                name="email"
                value={data.email}
                onChange={handleOnChange}
                id="inputEAddress"
                className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Password Field */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="inputPass"
                  className="block text-xs md:text-sm lg:text-sm font-medium text-black"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={handlePassToggle}
                  className="text-sm text-gray-500 hover:text-black hover:cursor-pointer active:text-black"
                >
                  {showPass ? (
                    <IoIosEye className="w-5 h-5" />
                  ) : (
                    <IoIosEyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              <input
                type={passwordType}
                required
                name="password"
                value={data.password}
                onChange={handleOnChange}
                id="inputPass"
                className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="inputConfirmPass"
                  className="block text-xs md:text-sm lg:text-sm font-medium text-black"
                >
                  Confirm Password
                </label>
                <button
                  type="button"
                  onClick={handleConfirmPassToggle}
                  className="text-sm text-gray-500 hover:text-black hover:cursor-pointer active:text-black"
                >
                  {showConfirmPass ? (
                    <IoIosEye className="w-5 h-5" />
                  ) : (
                    <IoIosEyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              <input
                type={confirmPasswordType}
                required
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleOnChange}
                id="inputConfirmPass"
                className="mt-1 block w-full text-black border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <div className="col-span-2">
              <small className="text-xs text-black">
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </small>
            </div>

            {/* Terms & Privacy */}
            <div className="col-span-2">
              <label className="inline-flex items-start space-x-2 text-xs md:text-sm lg:text-sm text-black">
                <div onClick={() => setChecked(!checked)}>
                  {checked ? (
                    <IoCheckbox className="w-5 h-5" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="w-5 h-5" />
                  )}
                </div>
                <span>
                  By creating an account, I agree to your{" "}
                  <a href="/" className="underline text-black">
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a href="/" className="underline text-black">
                    Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex flex-col items-center gap-2 mt-2">
              <button
                type="submit"
                className="w-full bg-white text-black border border-black py-2 px-4 rounded-4xl hover:bg-black hover:text-white hover:cursor-pointer active:bg-black active:text-white transition duration-200"
              >
                Create an account
              </button>
              <small className="text-black">or</small>
              <button
                type="submit"
                className="w-full text-black hover:text-white border border-black bg-white py-2 px-4 rounded-4xl hover:bg-black hover:cursor-pointer active:bg-black active:text-white flex items-center justify-center gap-3 transition duration-200"
              >
                <FaGoogle className="w-6 h-6" />
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

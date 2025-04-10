import React, { useContext, useEffect, useState } from "react";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import SummaryAPI from "../common";
import { toast } from "react-toastify";
import Context from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuthCheck } from "../components/useAuthCheck";

export default function Login() {
  const [checked, setChecked] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(false); // State to manage eye state
  const [isHovered, setIsHovered] = useState(false);
  const [passwordType, setPasswordType] = useState("password"); // State to manage password input type
  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated, isVerified, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading && isAuthenticated && isVerified) {
      navigate("/settings"); // Redirect to dashboard
    }
  }, [isAuthenticated, isVerified, loading, navigate]);

  if (loading) return <p>Loading...</p>; // Show loading state

  const handleToggle = () => {
    setIsEyeOpen(!isEyeOpen); // Toggle the eye state
    setPasswordType(isEyeOpen ? "password" : "text"); // Toggle password visibility
  };

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

    const dataResponse = await fetch(SummaryAPI.logIn.url, {
      method: SummaryAPI.logIn.method,
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataAPI = await dataResponse.json();

    if (dataAPI.success) {
      toast.success(dataAPI.message);

      navigate("/settings");
      fetchUserDetails();
    }

    if (dataAPI.error) {
      toast.error(dataAPI.message);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-white flex items-center justify-center">
        <div className="flex flex-col my-12 w-full lg:w-1/2 bg-white shadow-lg rounded-2xl p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="text-black">
              <h3 className="pb-3 text-2xl font-semibold">Log in</h3>
            </div>

            <div className="w-full">
              <label
                htmlFor="inputUsername"
                className="block mb-1 text-xs md:text-sm lg:text-sm font-medium text-black"
              >
                Username/Email
              </label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                id="inputUsername"
              />
            </div>

            <div className="w-full flex justify-between items-center mb-1">
              <label
                htmlFor="inputPass"
                className="text-xs md:text-sm lg:text-sm font-medium text-black"
              >
                Password
              </label>
              <button
                type="button"
                onClick={handleToggle}
                className="text-sm flex items-center hover:cursor-pointer text-gray-500 hover:text-black active:text-black"
              >
                {isEyeOpen ? (
                  <IoIosEye className="w-5 h-5" />
                ) : (
                  <IoIosEyeOff className="w-5 h-5" />
                )}
              </button>
            </div>

            <div className="w-full">
              <input
                type={passwordType}
                name="password"
                value={data.password}
                onChange={handleOnChange}
                className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                id="inputPass"
              />
            </div>

            {/*REMEMBER ME*/}
            <div className="w-full">
              <label className="inline-flex items-start space-x-2 text-xs md:text-sm lg:text-sm text-black">
                <div onClick={() => setChecked(!checked)}>
                  {checked ? (
                    <IoCheckbox className="w-5 h-5" />
                  ) : (
                    <MdCheckBoxOutlineBlank className="w-5 h-5" />
                  )}
                </div>
                <span className="text-xs md:text-sm lg:text-sm text-black">
                  Remember me
                </span>
              </label>
            </div>

            <div className="w-full text-xs md:text-sm lg:text-sm text-black">
              <label className="block">
                By continuing, you agree to our{" "}
                <a href="/" className="underline">
                  Terms of use
                </a>{" "}
                and{" "}
                <a href="/" className="underline">
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            <div className="w-full">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-white text-black border-1 border-black rounded-4xl hover:bg-black hover:text-white hover:cursor-pointer active:bg-black active:text-white transition duration-200"
              >
                Log in
              </button>
            </div>

            <div className="text-center">
              <Link
                to="/forgot-password"
                className="hover:underline active:underline text-sm text-black"
              >
                Forgot Password?
              </Link>
            </div>

            <small className="text-xs md:text-sm lg:text-sm text-black text-center block">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="hover:underline active:underline font-semibold text-black"
              >
                Sign up
              </Link>
            </small>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

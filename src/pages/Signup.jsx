import React, { useEffect, useState } from "react";
import "../styles/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import SummaryAPI from "../common";
import { toast } from "react-toastify";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuthCheck } from "../components/useAuthCheck";

export default function Signup() {
  const [isPassHovered, setIsPassHovered] = useState(false);

  const [showPass, setShowPass] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handlePassToggle = () => {
    setShowPass(!showPass); // Toggle the eye state
    setPasswordType(showPass ? "password" : "text"); // Toggle password visibility
  };

  const [isConfirmPassHovered, setIsConfirmPassHovered] = useState(false);

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
      <div className="my-5 d-flex align-items-center justify-content-center">
        <div className="d-flex w-50 mx-auto card">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div style={{ color: "#333333" }} className="text-center">
              <h3 className="pb-3">Create an account</h3>
              <p style={{ fontSize: "14px" }} className="pb-1">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-decoration-underline text-dark"
                >
                  Log in
                </Link>
              </p>
            </div>

            <div className="col-md-6">
              <label htmlFor="inputName" className="form-label">
                First & Last Name
              </label>
              <input
                type="text"
                required
                name="name"
                value={data.name}
                onChange={handleOnChange}
                className="form-control"
                id="inputName"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputUsername" className="form-label">
                Username
              </label>
              <input
                type="text"
                required
                name="username"
                value={data.username}
                onChange={handleOnChange}
                className="form-control"
                id="inputUsername"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputEAddress" className="form-label">
                Email address
              </label>
              <input
                type="email"
                required
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="form-control"
                id="inputEAddress"
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-row justify-content-between">
                <label htmlFor="inputPass" className="form-label">
                  Password
                </label>
                <div
                  onMouseEnter={() => setIsPassHovered(true)} // Set hover state to true
                  onMouseLeave={() => setIsPassHovered(false)} // Set hover state to false
                  style={{
                    color: isPassHovered ? "black" : "#666666", // Ensures the label is black by default
                  }}
                  onClick={handlePassToggle}
                  className="p-0 m-0 btn btn-link hideButton d-flex align-items-center"
                >
                  {showPass ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="me-1 bi bi-eye-fill"
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
                      className="me-1 bi bi-eye-slash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                    </svg>
                  )}
                </div>
              </div>
              <input
                type={passwordType}
                required
                name="password"
                value={data.password}
                onChange={handleOnChange}
                className="form-control"
                id="inputPass"
              />
            </div>
            <div className="col-md-6">
              <div className="d-flex flex-row justify-content-between">
                <label htmlFor="inputConfirmPass" className="form-label">
                  Confirm Password
                </label>
                <div
                  onMouseEnter={() => setIsConfirmPassHovered(true)} // Set hover state to true
                  onMouseLeave={() => setIsConfirmPassHovered(false)} // Set hover state to false
                  style={{
                    color: isConfirmPassHovered ? "black" : "#666666", // Ensures the label is black by default
                  }}
                  onClick={handleConfirmPassToggle}
                  className="p-0 m-0 btn btn-link hideButton d-flex align-items-center"
                >
                  {showConfirmPass ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="me-1 bi bi-eye-fill"
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
                      className="me-1 bi bi-eye-slash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                      <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                    </svg>
                  )}
                </div>
              </div>
              <input
                type={confirmPasswordType}
                required
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleOnChange}
                className="form-control"
                id="inputConfirmPass"
              />
            </div>
            <small style={{ fontSize: "0.700em" }}>
              Use 8 or more characters with a mix of letters, numbers & symbols
            </small>

            <div style={{ color: "#333333" }} className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input border border-dark"
                  type="checkbox"
                  id="gridCheckTerms"
                />
                <label className="form-check-label" htmlFor="gridCheckTerms">
                  By creating an account, I agree to your{" "}
                  {/* Add link to terms and services here */}
                  <a className="text-decoration-underline text-dark" href="/">
                    Terms of use
                  </a>{" "}
                  and{" "}
                  <a className="text-decoration-underline text-dark" href="/">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-secondary">
                Create an account
              </button>
              <small className="mx-auto">or</small>
              <button type="submit" className="btn btn-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-google me-2 mb-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                </svg>
                Continue with Google
              </button>
            </div>

            <div style={{ color: "#333333" }} className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input border border-dark"
                  type="checkbox"
                  id="gridCheckNotifications"
                />
                <label
                  className="form-check-label"
                  htmlFor="gridCheckNotifications"
                >
                  I want to receive emails about the product, feature updates,
                  promotions.
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

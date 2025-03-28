import React, { useContext, useEffect, useState } from "react";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import SummaryAPI from "../common";
import { toast } from "react-toastify";
import Context from "../context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuthCheck } from "../components/useAuthCheck";

export default function Login() {
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
      <div className="my-5 d-flex align-items-center justify-content-center">
        <div className="d-flex flex-column w-50 card">
          <form className="row g-3" onSubmit={handleSubmit}>
            <div style={{ color: "#333333" }}>
              <h3 className="pb-3">Log in</h3>
            </div>

            <div className="col-12">
              <label htmlFor="inputUsername" className="form-label">
                Username/Email
              </label>
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="form-control"
                id="inputUsername"
              />
            </div>
            <div className="passDiv col-12 d-flex justify-content-between">
              <label htmlFor="inputPass" className="form-label m-0">
                Password
              </label>

              <label
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false
                style={{
                  color: isHovered ? "black" : "#666666", // Ensures the label is black by default
                }}
                onClick={handleToggle}
                className="form-label p-0 m-0 btn btn-link hideButton d-flex align-items-center"
              >
                {isEyeOpen ? (
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
                Hide
              </label>
            </div>
            <div className="col-12">
              <input
                type={passwordType}
                name="password"
                value={data.password}
                onChange={handleOnChange}
                className="form-control"
                id="inputPass"
              />
            </div>
            <div style={{ color: "#333333" }} className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input border border-dark"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Remember me
                </label>
              </div>
            </div>
            <div style={{ color: "#333333" }} className="col-12">
              <div className="form-check terms">
                <label className="form-check-label" htmlFor="gridCheck">
                  By continuing, you agree to our{" "}
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
            <div className="d-grid gap-2 col-12 mx-auto">
              <button type="submit" className="btn btn-secondary">
                Log in
              </button>
            </div>

            <div className="col-12 text-center">
              <Link
                to={"/forgot-password"}
                className="text-decoration-underline text-dark"
              >
                Forgot Password?
              </Link>
            </div>
            <small className="col-12 text-center">
              Don't have an account?{" "}
              <Link
                to={"/signup"}
                className="text-decoration-underline text-dark"
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

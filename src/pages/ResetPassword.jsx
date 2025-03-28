import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthCheck } from "../components/useAuthCheck";
import SummaryAPI from "../common";
import { toast } from "react-toastify";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { token } = useParams();

  const [isNewEyeOpen, setIsNewEyeOpen] = useState(false); // State to manage eye state
  const [isNewHovered, setIsNewHovered] = useState(false);
  const [newPasswordType, setNewPasswordType] = useState("password"); // State to manage password input type
  const handleNewToggle = () => {
    setIsNewEyeOpen(!isNewEyeOpen); // Toggle the eye state
    setNewPasswordType(isNewEyeOpen ? "password" : "text"); // Toggle password visibility
  };

  const [isOldEyeOpen, setIsOldEyeOpen] = useState(false); // State to manage eye state
  const [isOldHovered, setIsOldHovered] = useState(false);
  const [oldPasswordType, setOldPasswordType] = useState("password"); // State to manage password input type
  const handleOldToggle = () => {
    setIsOldEyeOpen(!isOldEyeOpen); // Toggle the eye state
    setOldPasswordType(isOldEyeOpen ? "password" : "text"); // Toggle password visibility
  };

  const navigate = useNavigate();
  const { isAuthenticated, isVerified, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading && isAuthenticated && isVerified) {
      navigate("/settings"); // Redirect to dashboard
    }
  }, [isAuthenticated, isVerified, loading, navigate]);

  if (loading) return <p>Loading...</p>; // Show loading state

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        SummaryAPI.resetPassword.url.replace(":token", token),
        {
          method: SummaryAPI.resetPassword.method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        }
      );

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
      }
      if (data.error) {
        toast.error(data.message);
      }

      navigate("/login");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="mt-5 mb-4">Reset your password</h3>
        <form
          onSubmit={handleSubmit}
          className="w-25 mt-5 d-flex flex-column justify-content-between align-items-center"
        >
          <div className="my-3 w-100">
            <div className="d-flex justify-content-between">
              <label htmlFor="inputPass" className="form-label m-0">
                New Password
              </label>
              <label
                onMouseEnter={() => setIsNewHovered(true)} // Set hover state to true
                onMouseLeave={() => setIsNewHovered(false)} // Set hover state to false
                style={{
                  color: isNewHovered ? "black" : "#666666", // Ensures the label is black by default
                }}
                onClick={handleNewToggle}
                className="form-label p-0 m-0 btn btn-link hideButton d-flex align-items-center"
              >
                {isNewEyeOpen ? (
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
            <div>
              <input
                type={newPasswordType}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="inputPass"
                required
              />
            </div>
          </div>
          <div className="my-3 w-100">
            <div className="d-flex justify-content-between">
              <label htmlFor="inputPass" className="form-label m-0">
                Confirm Password
              </label>
              <label
                onMouseEnter={() => setIsOldHovered(true)} // Set hover state to true
                onMouseLeave={() => setIsOldHovered(false)} // Set hover state to false
                style={{
                  color: isOldHovered ? "black" : "#666666", // Ensures the label is black by default
                }}
                onClick={handleOldToggle}
                className="form-label p-0 m-0 btn btn-link hideButton d-flex align-items-center"
              >
                {isOldEyeOpen ? (
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
            <div>
              <input
                type={oldPasswordType}
                name="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-control"
                id="inputConfirmPass"
                required
              />
            </div>
          </div>
          <div className="d-grid my-3 w-50">
            <button
              type="submit"
              className="btn btn-secondary d-flex justify-content-center align-items-center"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

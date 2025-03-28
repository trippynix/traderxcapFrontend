import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../components/useAuthCheck";
import SummaryAPI from "../common";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loadingState, setLoadingState] = useState(false);

  const navigate = useNavigate();
  const { isAuthenticated, isVerified, loading } = useAuthCheck(); // Renamed to prevent conflict

  useEffect(() => {
    if (!loading && isAuthenticated && isVerified) {
      navigate("/settings");
    }
  }, [isAuthenticated, isVerified, loading, navigate]);

  if (loading) return <p>Loading...</p>;

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoadingState(true);
    setMessage("");

    try {
      const response = await fetch(SummaryAPI.forgotPassword.url, {
        method: SummaryAPI.forgotPassword.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
      }
      if (data.error) {
        toast.error(data.message);
      }
    } catch (error) {
      setMessage(error.message);
      toast.error(message);
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h3 className="mt-5">Find your account</h3>
        <div className="col-4 my-5">
          <label htmlFor="inputEmail" className="form-label">
            Username/Email
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            id="inputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="d-grid col-4 my-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleForgotPassword}
            disabled={loadingState}
          >
            {loadingState ? "Sending..." : "Continue"}
          </button>
        </div>
      </div>
    </>
  );
}

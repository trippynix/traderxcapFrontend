import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SummaryAPI from "../common";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function OTPVerification(props) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Ensure only one digit
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      toast.error("Please enter a 6-digit OTP.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(SummaryAPI.verifyEmail.url, {
        method: SummaryAPI.verifyEmail.method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: otpCode }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success(data.message);
        navigate("/login");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Failed to verify OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="p-4 bg-white rounded shadow text-center">
          <p>Verify {props.email}</p>
          <h2 className="mb-3">Enter OTP</h2>
          <form onSubmit={handleSubmit}>
            <div className="d-flex gap-2 justify-content-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength={1}
                  className="form-control text-center"
                  style={{ width: "50px", height: "50px", fontSize: "1.5rem" }}
                />
              ))}
            </div>
            <button className="btn btn-secondary mt-3" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

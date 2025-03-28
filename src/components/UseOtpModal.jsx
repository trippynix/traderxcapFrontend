import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Export the hook as a named export
export const UseOtpModal = (onVerify, options = {}) => {
  const {
    title = "Enter OTP",
    placeholder = "Enter 6-digit OTP",
    description = "",
  } = options;

  const [isOpen, setIsOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  // Focus the input when the modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Open the modal
  const openModal = () => setIsOpen(true);

  // Close the modal and reset state
  const closeModal = () => {
    setIsOpen(false);
    setOtp("");
    setError("");
  };

  // Handle input change (allow only digits and limit to 6 characters)
  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only digits
    if (value.length <= 6) setOtp(value);
  };

  // Handle OTP verification
  const handleVerify = () => {
    if (otp.length === 6) {
      onVerify(otp); // Call the onVerify callback
      closeModal(); // Close the modal
    } else {
      setError(
        `Please enter a valid 6-digit OTP. (Current length: ${otp.length})`
      );
    }
  };

  // Modal styles
  const modalStyle = {
    display: isOpen ? "block" : "none",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  // Modal component
  const OtpModal = () =>
    isOpen && (
      <div style={modalStyle} className="d-flex">
        <div className="modal-dialog modal-dialog-centered bg-dark rounded-3">
          <div className="modal-content p-4">
            <h5 className="modal-title text-white">{title}</h5>
            {description && <p className="text-muted">{description}</p>}
            <input
              type="text"
              ref={inputRef}
              className="form-control mt-3"
              placeholder={placeholder}
              value={otp}
              onChange={handleChange}
              maxLength="6"
              autoFocus
              aria-label="Enter OTP"
            />
            {error && <small className="text-danger">{error}</small>}
            <div className="mt-3">
              <button className="btn btn-success me-2" onClick={handleVerify}>
                Verify
              </button>
              <button className="btn btn-secondary" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  // Return the state and functions
  return {
    isOpen,
    otp,
    error,
    openModal,
    closeModal,
    handleChange,
    handleVerify,
    modalStyle,
    OtpModal,
  };
};

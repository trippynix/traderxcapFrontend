import React from "react";
import billingLogo from "../../assets/images/bill.svg";
import visaLogo from "../../assets/images/visa.svg";
import plusSign from "../../assets/images/add.svg";
import "../../styles/Billing.css";

export default function PersonalInformation() {
  return (
    <>
      <div className="d-flex flex-row align-items-center mt-3 ms-4 mb-0 border-bottom-section">
        <img
          src={billingLogo}
          className="icons"
          alt="billingLogo"
          style={{ marginRight: "7px" }}
        />
        <small className="mb-0">Billing</small>
      </div>
      <div className="d-flex justify-content-around mt-3">
        <a
          href="#"
          className="mx-5 mt-2 card align-items-center justify-content-center h-75 w-50 text-decoration-none"
        >
          <img src={visaLogo} className="mb-1" alt="visaLogo" />
          <p className="mb-1">4884-8545-7654-4581</p>
          <p>Expiry: 05/2065</p>
        </a>
        <a
          href="#"
          className="mx-5 mt-2 card align-items-center justify-content-center h-75 w-50 text-decoration-none"
        >
          <img src={plusSign} className="icons mb-2" alt="plusSign" />
          <p>Link a new card</p>
        </a>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <div className="mx-5 mt-2 w-50 ">
          <p className="fw-bold text-align-start">Active Subscription</p>
          <div className="d-flex flex-row">
            <div className="details d-flex flex-column">
              <p className="subTitle mb-0">Account Name</p>
              <p className="subTitle">Ayush26</p>
            </div>
            <div className="details d-flex flex-column">
              <p className="subTitle mb-0">Subscription Type</p>
              <p className="subTitle">Pro</p>
            </div>
            <div className="details d-flex flex-column">
              <p className="subTitle mb-0">Payment Amount</p>
              <p className="subTitle">$23</p>
            </div>
            <div className="details d-flex flex-column">
              <p className="subTitle mb-0">Payment Method</p>
              <p className="subTitle">Visa*4581</p>
            </div>
            <div className="details d-flex flex-column">
              <p className="subTitle mb-0">Payment Status</p>
              <p className="subTitle">PAID</p>
            </div>
            <div className="details d-flex flex-column">
              <p className="subTitle mb-0">Rebill Date</p>
              <p className="subTitle">01/05/2025</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5 my-5 w-50">
        <p className="fw-bold text-align-start">Payment History</p>
        <div className="d-flex flex-row">
          <div className="details d-flex flex-column">
            <p className="subTitle mb-0">Transaction Date</p>
            <p className="subTitle">12/05/2024</p>
          </div>
          <div className="details d-flex flex-column">
            <p className="subTitle mb-0">Subscription Type</p>
            <p className="subTitle">Pro</p>
          </div>
          <div className="details d-flex flex-column">
            <p className="subTitle mb-0">Payment Amount</p>
            <p className="subTitle">$23</p>
          </div>
          <div className="details d-flex flex-column">
            <p className="subTitle mb-0">Payment Method</p>
            <p className="subTitle">Visa*4581</p>
          </div>
          <div className="details d-flex flex-column">
            <p className="subTitle mb-0">Payment Status</p>
            <p className="subTitle">PAID</p>
          </div>
        </div>
      </div>
    </>
  );
}

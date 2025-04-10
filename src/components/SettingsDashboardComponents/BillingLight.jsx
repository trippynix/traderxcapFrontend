import React from "react";
import billingLogo from "../../assets/images/bill.svg";
import visaLogo from "../../assets/images/visa.svg";
import { FaPlus } from "react-icons/fa6";

export default function PersonalInformation() {
  return (
    <>
      <div className="flex flex-row items-center mt-3 ms-4 mb-0 border-b border-gray-400 ">
        <img src={billingLogo} className="w-5 h-5 mr-2" alt="billingLogo" />
        <small className="text-black">Billing</small>
      </div>

      <div className="flex justify-around my-10">
        <a
          href="#"
          className="mx-5 mt-2 flex flex-col items-center justify-center h-full w-1/2 no-underline text-black bg-white border border-black rounded shadow hover:bg-black hover:text-white"
        >
          <img src={visaLogo} className="mb-1" alt="visaLogo" />
          <p className="mb-1">4884-8545-7654-4581</p>
          <p>Expiry: 05/2065</p>
        </a>
        <a
          href="#"
          className="mx-5 mt-2 flex flex-col items-center justify-center h-full w-1/2 no-underline text-black bg-white border border-black rounded shadow hover:bg-black hover:text-white"
        >
          <FaPlus />
          <p>Link a new card</p>
        </a>
      </div>

      <div className="flex justify-between my-10 text-black">
        <div className="mx-5 mt-2 w-1/2">
          <p className="font-bold text-left mb-5">Active Subscription</p>
          <div className="flex flex-row gap-x-40">
            <div className="flex flex-col">
              <p className="text-sm mb-2">Account Name:</p>
              <p className="text-sm font-semibold">Ayush26</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm mb-2">Subscription Type:</p>
              <p className="text-sm font-semibold">Pro</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm mb-2">Payment Amount:</p>
              <p className="text-sm font-semibold">$23</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm mb-2">Payment Method:</p>
              <p className="text-sm font-semibold">Visa*4581</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm mb-2">Payment Status:</p>
              <p className="text-sm font-semibold">PAID</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm mb-2">Rebill Date:</p>
              <p className="text-sm font-semibold">01/05/2025</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 mt-5 mb-25 w-1/2 text-black">
        <p className="font-bold text-left mb-5">Payment History</p>
        <div className="flex flex-row gap-x-40">
          <div className="flex flex-col">
            <p className="text-sm mb-2">Transaction Date:</p>
            <p className="text-sm font-semibold">12/05/2024</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm mb-2">Subscription Type:</p>
            <p className="text-sm font-semibold">Pro</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm mb-2">Payment Amount:</p>
            <p className="text-sm font-semibold">$23</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm mb-2">Payment Method:</p>
            <p className="text-sm font-semibold">Visa*4581</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm mb-2">Payment Status:</p>
            <p className="text-sm font-semibold">PAID</p>
          </div>
        </div>
      </div>
    </>
  );
}

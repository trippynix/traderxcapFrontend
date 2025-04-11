import React from "react";
import billingLogo from "../../assets/images/bill.svg";
import visaLogo from "../../assets/images/visa.svg";
import { FaPlus } from "react-icons/fa6";

export default function PersonalInformation() {
  return (
    <>
      <div className="flex flex-row items-center mt-3 ms-4 mb-0 border-b border-gray-400 ">
        <img
          src={billingLogo}
          className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 md:mr-1 lg:mr-2"
          alt="billingLogo"
        />
        <small className="text-black text-xs md:text-sm lg:text-base">
          Billing
        </small>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row justify-around my-10">
        <a
          href="#"
          className="mx-5 mt-2 mb-3 md:mb-0 lg:mb-0 flex flex-col items-center justify-center h-full text-[10px] md:text-xs lg:text-base md:w-1/2 lg:w-1/2 no-underline text-black bg-white border border-black rounded shadow hover:bg-black hover:text-white active:bg-black active:text-white"
        >
          <img
            src={visaLogo}
            className="w-7 h-7 md:w-9 md:w-9 lg:w-12 lg:h-12 mb-1"
            alt="visaLogo"
          />
          <p className="mb-0 md:mb-1 lg:mb-1">4884-8545-7654-4581</p>
          <p>Expiry: 05/2065</p>
        </a>
        <a
          href="#"
          className="mx-5 mt-2 py-3 flex flex-col items-center justify-center h-full text-[10px] md:text-xs lg:text-base md:w-1/2 lg:w-1/2 no-underline text-black bg-white border border-black rounded shadow hover:bg-black hover:text-white active:bg-black active:text-white"
        >
          <FaPlus className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
          <p>Link a new card</p>
        </a>
      </div>

      <div className="mx-5 mt-2 mb-10 text-black flex flex-col items-center md:block lg:block">
        <p className="font-bold text-left text-sm md:text-xs lg:text-base mb-5">
          Active Subscription
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Account Name:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              Ayush26
            </p>
          </div>
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Subscription Type:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              Pro
            </p>
          </div>
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Payment Method:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              Visa*4581
            </p>
          </div>
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Payment Status:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              PAID
            </p>
          </div>
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Rebill Date:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              01/05/2025
            </p>
          </div>
        </div>
      </div>

      <div className="mx-5 mt-5 mb-25 text-black flex flex-col items-center md:block lg:block">
        <p className="font-bold text-left mb-5 text-sm md:text-xs lg:text-base">
          Payment History
        </p>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Transaction Date:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              12/05/2024
            </p>
          </div>
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Subscription Type:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              Pro
            </p>
          </div>
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Payment Amount:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              $23
            </p>
          </div>
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Payment Method:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              Visa*4581
            </p>
          </div>
          <div className="flex md:flex-col lg:flex-col mb-3 md:mb-0 lg:mb-0">
            <p className="text-sm mb-2 mr-4 md:mr-0 lg:mr-0 text-sm md:text-xs lg:text-base">
              Payment Status:
            </p>
            <p className="text-sm font-semibold text-sm md:text-xs lg:text-base">
              PAID
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

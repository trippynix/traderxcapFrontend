import React from "react";
import footerlogo from "../assets/images/logo.svg";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex justify-around pt-8">
        <div>
          <img
            src={footerlogo}
            className="w-35 mt-[40px] md:mt-[50px] lg:mt-[40px] md:w-70 lg:w-80 md:ms-[-18px] lg:ms-[-25px]"
          />
          <div className="flex flex-col md:flex-row lg:flex-row mt-[50px] md:mt-[70px] lg:mt-[40px] mb-6 ms-[80px] md:ms-[-15px] lg:ms-[-25px]">
            <Link className="hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
              <FaInstagram className="w-10 h-10 md:w-6 md:h-6 lg:w-8 lg:h-8 md:mx-7 lg:mx-7 mb-5 md:mb-0 lg:mb-0" />
            </Link>
            <Link className="hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
              <FaXTwitter className="w-10 h-10 md:w-6 md:h-6 lg:w-8 lg:h-8 md:me-7 lg:me-7 mb-5 md:mb-0 lg:mb-0" />
            </Link>
            <Link className="hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
              <FaLinkedin className="w-10 h-10 md:w-6 md:h-6 lg:w-8 lg:h-8 md:me-7 lg:me-7 mb-5 md:mb-0 lg:mb-0" />
            </Link>
            <Link className="hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
              <FaYoutube className="w-10 h-10 md:w-6 md:h-6 lg:w-8 lg:h-8 md:me-7 lg:me-7 mb-5 md:mb-0 lg:mb-0" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row lg:justify-between gap-10 lg:gap-6">
          <div className="lg:w-1/3">
            <p className="text-sm md:text-sm lg:text-xl mb-1 md:mb-3 lg:mb-3">
              Quick Links
            </p>
            <ul>
              <li className="mb-0 md:mb-3 lg:mb-3">
                <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                  Home
                </Link>
              </li>
              <li className="mb-0 md:mb-3 lg:mb-3">
                <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                  About Us
                </Link>
              </li>
              <li className="mb-0 md:mb-3 lg:mb-3">
                <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                  Features
                </Link>
              </li>
              <li className="mb-0 md:mb-3 lg:mb-3">
                <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                  Documentation
                </Link>
              </li>
              <li className="mb-0 md:mb-3 lg:mb-3">
                <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col lg:flex-row lg:w-2/3 gap-6">
            <div className="lg:w-1/2">
              <p className="text-sm md:text-sm lg:text-xl mb-1 md:mb-3 lg:mb-3">
                Legal and Disclaimers
              </p>
              <ul>
                <li className="mb-0 md:mb-3 lg:mb-3">
                  <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                    Terms of Service
                  </Link>
                </li>
                <li className="mb-0 md:mb-3 lg:mb-3">
                  <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-0 md:mb-3 lg:mb-3">
                  <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                    Risk Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <p className="text-sm md:text-sm lg:text-xl mb-1 md:mb-3 lg:mb-3">
                Contact and Support
              </p>
              <ul>
                <li className="mb-0 md:mb-3 lg:mb-3">
                  <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                    Contact Us
                  </Link>
                </li>
                <li className="mb-0 md:mb-3 lg:mb-3">
                  <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                    Email Support
                  </Link>
                </li>
                <li className="mb-0 md:mb-3 lg:mb-3">
                  <Link className="text-xs md:text-xs lg:text-base hover:text-violet-800 transition-colors duration-200 active:text-violet-800">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-8" />
      <p className="text-xs md:text-base lg-text-base text-center py-5">
        © 2025, TraderX Capitals. All Rights Reserved{" "}
      </p>
    </footer>
  );
}

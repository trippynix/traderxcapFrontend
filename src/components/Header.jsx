import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="header d-flex align-items-center justify-content-between px-3 py-1">
        <div className="d-flex align-items-center">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="logo me-2" />
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler text-white border-0 navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item pe-3">
                <Link to={"/"} className=" nav-link text-white" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link
                  to={"/about-us"}
                  className=" nav-link text-white"
                  href="#"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link
                  to={"/features"}
                  className=" nav-link text-white"
                  href="#"
                >
                  Features
                </Link>
              </li>
              <li className="nav-item pe-3">
                <Link to={"/pricing"} className=" nav-link text-white" href="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="d-flex align-items-center">
          <Link to={"/login"} className="nav-link px-3 text-white">
            LOG IN
          </Link>
          <Link
            to={"/pricing"}
            className="getStarted rounded-0 text-black btn btn-light d-flex align-items-center"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right ms-2"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
              />
            </svg>
          </Link>
        </div>
      </header>
    </div>
  );
}

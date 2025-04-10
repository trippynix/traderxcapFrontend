import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    function handleScroll() {
      setMenuOpen(false);
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <div className="relative z-50">
      <header className="top-0 w-full h-16 bg-black flex justify-between items-center px-3 py-1 z-50">
        {/* === Mobile & Tablet Layout === */}
        <div className="flex w-full items-center justify-between lg:hidden">
          {/* Left: Hamburger */}
          <button
            className="text-3xl font-bold hover:cursor-pointer hover:text-violet-800 active:text-violet-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <IoCloseSharp /> : <BiMenuAltLeft />}
          </button>

          {/* Center: Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="w-24 md:w-28" />
          </Link>

          {/* Right: Log in */}
          <Link
            to="/login"
            className="active:text-violet-800 hover:text-violet-800 text-sm"
          >
            Log in
          </Link>
        </div>

        {/* === Hamburger Menu Dropdown === */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full bg-black text-white shadow-md flex flex-col items-start px-6 py-4 lg:hidden z-50"
          >
            <Link
              className="py-2 hover:text-violet-400 active:text-violet-500 w-full"
              to="/"
            >
              Home
            </Link>
            <Link
              className="py-2 hover:text-violet-400 active:text-violet-500 w-full"
              to="/about-us"
            >
              About Us
            </Link>
            <Link
              className="py-2 hover:text-violet-400 active:text-violet-500 w-full"
              to="/features"
            >
              Features
            </Link>
            <Link
              className="py-2 hover:text-violet-400 active:text-violet-500 w-full"
              to="/"
            >
              Documentation
            </Link>
            <Link
              className="py-2 hover:text-violet-400 active:text-violet-500 w-full"
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              to="/signup"
              className="mt-4 bg-white text-black border border-white rounded-2xl hover:bg-black hover:text-white font-semibold px-4 py-2 transition duration-200 active:bg-black active:text-white"
            >
              Get Started
            </Link>
          </div>
        )}

        {/* ======= Large Screen Layout ======= */}
        <div className="hidden lg:flex w-full items-center justify-between">
          {/* Left: Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="w-28" />
          </Link>

          {/* Center: Navigation Links */}
          <ul className="flex items-center justify-center gap-5">
            <li>
              <Link to="/" className="hover:text-violet-800">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:text-violet-800">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-violet-800">
                Features
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-violet-800">
                Documentation
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-violet-800">
                Pricing
              </Link>
            </li>
          </ul>

          {/* Right: Log in + Get Started */}
          <div className="flex items-center gap-4">
            <Link to="/login" className="hover:text-violet-800">
              Log in
            </Link>
            <Link
              to="/signup"
              className="bg-white px-4 py-1 text-black border border-white rounded-2xl hover:bg-black hover:text-white font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

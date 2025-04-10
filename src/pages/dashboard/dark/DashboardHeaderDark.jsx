import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../store/userSlice";
import Context from "../../../context";
import SummaryAPI from "../../../common";
import { Link } from "react-router-dom";
import useTheme from "../../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

export default function DashboardHeaderDark({ title, subTitle }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleThemeMode = (value) => {
    const darkModeStatus = value === "dark";
    if (darkModeStatus) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  const { user } = useContext(Context);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const fetchData = await fetch(SummaryAPI.logoutUser.url, {
      method: SummaryAPI.logoutUser.method,
      credentials: "include",
    });
    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
    }
    if (data.error) {
      toast.error(data.message);
    }
  };
  return (
    <div className="flex flex-row justify-between items-center mt-3 bg-black px-4 py-2">
      {/* Theme Toggle Button */}
      <div>
        <button
          onClick={() =>
            handleThemeMode(themeMode === "dark" ? "light" : "dark")
          }
          className="p-2 rounded focus:outline-none hover:cursor-pointer"
          aria-label="Toggle Dark Mode"
        >
          {themeMode === "dark" ? (
            <Moon className="text-white" />
          ) : (
            <Sun className="text-black" />
          )}
        </button>
      </div>

      {/* Title and Subtitle */}
      <div className="text-center text-white">
        <p className="mb-0 text-base font-semibold">{title}</p>
        <small className="text-sm">{subTitle}</small>
      </div>

      {/* User Dropdown */}
      <div className="relative">
        <button
          type="button"
          className="bg-black border border-white rounded-full text-white text-sm p-3 rounded flex items-center hover:cursor-pointer hover:bg-white hover:text-black"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {user?.username}
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {dropdownOpen && (
          <ul className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md z-50">
            <li>
              <Link
                to="/login"
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-black hover:bg-black hover:text-white border border-white rounded-md"
              >
                Log Out
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

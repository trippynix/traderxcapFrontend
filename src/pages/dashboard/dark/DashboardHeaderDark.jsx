import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../store/userSlice";
import Context from "../../../context";
import SummaryAPI from "../../../common";
import { Link } from "react-router-dom";
import useTheme from "../../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { IoIosArrowDown } from "react-icons/io";

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
    <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center mt-3 bg-black px-4 py-2">
      {/* Theme Toggle Button */}
      <div></div>

      {/* Title and Subtitle */}
      <div className="text-center text-white mb-2">
        <p className="mb-0 text-xs md:text-sm lg:text-base font-semibold">
          {title}
        </p>
        <small className="text-[10px] md:text-xs lg:text-sm">{subTitle}</small>
      </div>

      {/* User Dropdown */}
      <div className="relative">
        <button
          type="button"
          className="bg-black border border-white rounded-full text-white text-[10px] md:text-xs lg:text-sm p-2 md:p-2 lg:p-3 rounded flex items-center hover:cursor-pointer hover:bg-white hover:text-black active:bg-white active:text-black"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {user?.username}
          <IoIosArrowDown />
        </button>

        {dropdownOpen && (
          <ul className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md z-50">
            <li>
              <Link
                to="/login"
                onClick={handleLogout}
                className="flex justify-center block px-4 py-2 text-sm text-black hover:bg-black hover:text-white active:bg-black active:text-white border border-white rounded-md"
              >
                Log Out
              </Link>
            </li>
            <li
              onClick={() =>
                handleThemeMode(themeMode === "dark" ? "light" : "dark")
              }
              className="flex justify-center border border-white rounded focus:outline-none text-black hover:cursor-pointer hover:bg-black hover:text-white active:bg-black active:text-white"
            >
              {themeMode === "dark" ? (
                <div className="flex flex-row p-2">
                  <Sun className="w-4 h-5 mr-2" />
                  <p className="text-sm">Light mode</p>
                </div>
              ) : (
                <div className="flex flex-row p-2">
                  <Moon className="w-4 h-5 mr-2" />
                  <p className="text-sm">Dark mode</p>
                </div>
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

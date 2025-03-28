import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../../store/userSlice";
import Context from "../../../context";
import SummaryAPI from "../../../common";
import { Link } from "react-router-dom";
import useTheme from "../../../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import "../../../styles/DashboardHeader.css";

export default function DashboardHeaderLight({ title, subTitle }) {
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
    <div className="d-flex flex-row justify-content-between mt-3">
      <div>
        <button
          onClick={() =>
            handleThemeMode(themeMode === "dark" ? "light" : "dark")
          }
          className="theme-toggle-btn"
          aria-label="Toggle Dark Mode"
        >
          {themeMode === "dark" ? (
            <Moon className="text-white" />
          ) : (
            <Sun className="text-black" />
          )}
        </button>
      </div>
      <div className="text-center mb-2">
        <p className="mb-0">{title}</p>
        <small>{subTitle}</small>
      </div>
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-secondary btn-sm dropdown-toggle py-0 border border-dark profile"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            {user?.username}
          </button>
          <ul className="dropdown-menu dropdown-menu-lg-end">
            <li>
              <Link
                to={"/login"}
                onClick={handleLogout}
                className="dropdown-item"
                type="button"
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SummaryAPI from "./common";
import Context from "./context";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./store/userSlice";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const user = useSelector((state) => state?.user?.user);

  const dispatch = useDispatch();

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(SummaryAPI.currentUser.url, {
      method: SummaryAPI.currentUser.method,
      credentials: "include",
    });

    const dataAPI = await dataResponse.json();

    if (dataAPI.success) {
      dispatch(setUserDetails(dataAPI.data));
    }
  };
  useEffect(() => {
    /*USER DETAILS*/
    fetchUserDetails();
  }, []);

  const [themeMode, setThemeMode] = useState("dark");
  const darkTheme = () => {
    setThemeMode("dark");
  };
  const lightTheme = () => {
    setThemeMode("light");
  };
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Context.Provider value={{ fetchUserDetails, user }}>
        <ToastContainer theme="dark" />
        <main>
          <Outlet />
        </main>
        {/* <Settings /> */}
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;

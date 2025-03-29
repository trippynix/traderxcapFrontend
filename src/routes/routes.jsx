import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Pricing from "../pages/Pricing";
import Features from "../pages/Features";
import AboutUs from "../pages/AboutUs";
import Resources from "../pages/Resources";
import Signup from "../pages/Signup";
import ForgotPassword from "../pages/ForgotPassword";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Settings from "../pages/dashboard/Settings";
import SwingCenter from "../pages/dashboard/SwingCenter";
import MarketDepth from "../pages/dashboard/MarketDepth";
import Summary from "../pages/dashboard/Summary";
import SectorialView from "../pages/dashboard/SectorialView";
import MoneyFlux from "../pages/dashboard/MoneyFlux";
import TradeIdeas from "../pages/dashboard/TradeIdeas";
import IndexAnalysis from "../pages/dashboard/IndexAnalysis";
import Community from "../pages/dashboard/Community";
import MomentumSpike from "../pages/dashboard/MomentumSpike";
import NotAuthorizedPage from "../components/NotAuthorizedPage";
import ResetPassword from "../pages/ResetPassword";
import VerifyEmailOTP from "../pages/VerifyEmailOTP";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "FAQ",
        element: <FAQ />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "swing-center",
        element: <SwingCenter />,
      },
      {
        path: "market-depth",
        element: <MarketDepth />,
      },
      {
        path: "momentum-spike",
        element: <MomentumSpike />,
      },
      {
        path: "sectorial-view",
        element: <SectorialView />,
      },
      {
        path: "index-analysis",
        element: <IndexAnalysis />,
      },
      {
        path: "money-flux",
        element: <MoneyFlux />,
      },
      {
        path: "summary",
        element: <Summary />,
      },
      {
        path: "trade-ideas",
        element: <TradeIdeas />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "not-auth",
        element: <NotAuthorizedPage />,
      },
      {
        path: "verify-email",
        element: <VerifyEmailOTP />,
      },
    ],
  },
]);

export default router;

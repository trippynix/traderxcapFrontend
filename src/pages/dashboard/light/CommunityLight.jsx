import React, { useEffect } from "react";
import Sidebar from "../../../components/SideBar";
import { useNavigate } from "react-router-dom";
import { useAuthCheck } from "../../../components/useAuthCheck";
import DashboardHeaderLight from "./DashboardHeaderLight";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CommunityLight() {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useAuthCheck();
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        navigate("/not-auth");
      }
    }
  }, [isAuthenticated, loading, navigate]);
  return (
    <div className="flex flex-row">
      <Sidebar tab={"Community"} />
      <div className="flex flex-col w-full bg-white">
        <DashboardHeaderLight
          title={"Community"}
          subTitle={
            "Community section where you can share your thoughts with other traders."
          }
        />
        <hr className="border-gray-600 my-5 mx-5" />
        <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-2xl md:text-5xl lg:text-7xl font-extrabold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-indigo-500 text-4xl md:text-5xl lg:text-7xl">
                Community
              </span>{" "}
              <span className="text-4xl md:text-5xl lg:text-7xl">
                Coming Soon
              </span>
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg lg:text-2xl text-gray-400"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              We're building a space for connection, growth, and collaboration.
              Stay tuned!
            </motion.p>
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Sparkles className="w-12 h-12 text-indigo-500 animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

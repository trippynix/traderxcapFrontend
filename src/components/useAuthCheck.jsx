import { useEffect, useState } from "react";
import SummaryAPI from "../common";

export function useAuthCheck() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const checkAuth = async () => {
      try {
        const response = await fetch(SummaryAPI.verifyUser.url, {
          credentials: "include",
          signal, // Attach the abort signal
        });

        if (!response.ok) {
          throw new Error(
            `Auth check failed: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();

        if (!signal.aborted) {
          setIsAuthenticated(data.success);
          setIsVerified(data.user?.isVerified || false);
        }
      } catch (error) {
        if (!signal.aborted) {
          console.error("Auth check error:", error);
          setIsAuthenticated(false);
          setIsVerified(false);
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    checkAuth();

    return () => controller.abort(); // Cleanup on unmount
  }, []);

  return { isAuthenticated, isVerified, loading };
}

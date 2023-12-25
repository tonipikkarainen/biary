// auth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseconfig";

export const useAuth = (redirectIfNotAuth = true) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
      if (redirectIfNotAuth && !user) {
        await router.push("/");
      }
    });

    return () => unsubscribe();
  }, [redirectIfNotAuth, router]);

  return {
    isAuthenticated,
    loading,
  };
};

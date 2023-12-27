// auth.js
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseconfig";

export const useAuth = (redirectIfNotAuth = true) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
      setLoading(false);
      setUser(user);
      if (redirectIfNotAuth && !user) {
        void router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [redirectIfNotAuth, router]);

  return {
    isAuthenticated,
    loading,
    user,
  };
};

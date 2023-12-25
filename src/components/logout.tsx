import React from "react";
import { auth } from "../../firebaseconfig";
import { useRouter } from "next/router";
import { Button } from "./button";

export const Logout = () => {
  const router = useRouter();

  const logOut = async () => {
    if (auth.currentUser) {
      await auth.signOut();
      await router.push(`/`);
    }
  };

  return (
    <div className="rounded px-4 py-2 font-bold text-white">
      <Button onClick={logOut} text="Logout" />
    </div>
  );
};

import React from "react";
import { auth } from "../../firebaseconfig";
import { useRouter } from "next/router";

export const Logout = () => {
  const router = useRouter();

  const logOut = async () => {
    if (auth.currentUser) {
      await auth.signOut();
      await router.push(`/`);
    }
  };

  return (
    <div className="flex flex-col rounded px-4 py-2 font-bold text-white">
      Moi {auth.currentUser?.displayName}!
      <button
        onClick={logOut}
        className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      >
        Log out
      </button>
    </div>
  );
};

//export default Login;

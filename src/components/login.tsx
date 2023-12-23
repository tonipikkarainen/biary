import React from "react";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../../firebaseconfig";

export const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => {
      const errorMessage = error.message;
      // Tähän toaster
      alert(errorMessage);
    });
  };

  return (
    <button
      onClick={signIn}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      Log in
    </button>
  );
};

//export default Login;

import React from "react";
import { signInWithPopup } from "firebase/auth";
import { provider, auth } from "../../firebaseconfig";
import { Button } from "./button";

export const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error: Error) => {
      const errorMessage = error.message;
      // Tähän toaster
      alert(errorMessage);
    });
  };

  return <Button onClick={signIn} text="Login" />;
};

//export default Login;

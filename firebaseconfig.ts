// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd8IlJq1jiZfvEhhO0i3udLTfW5s9a12k",
  authDomain: "biary-v2.firebaseapp.com",
  projectId: "biary-v2",
  storageBucket: "biary-v2.appspot.com",
  messagingSenderId: "420891992554",
  appId: "1:420891992554:web:fd03351839c4284e089293",
  measurementId: "G-1X1J1TBMNE",
};

// Initialize Firebase
//const analytics = getAnalytics(app);

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
console.log("Firebaseconfigista!!");
//

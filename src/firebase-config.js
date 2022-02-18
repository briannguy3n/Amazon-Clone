// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_QI0wSb7AGqbqJrWf6LH4WtDYGKKcGH8",
  authDomain: "clone-77e79.firebaseapp.com",
  projectId: "clone-77e79",
  storageBucket: "clone-77e79.appspot.com",
  messagingSenderId: "1054037617900",
  appId: "1:1054037617900:web:8cd06fe3cd225d964689c9",
  measurementId: "G-1D6SJ49XGR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
